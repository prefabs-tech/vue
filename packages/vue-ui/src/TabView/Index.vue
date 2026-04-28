<template>
  <div :id="id" :class="['tabbed-panel', position]">
    <div :aria-orientation="ariaOrientation" role="tablist">
      <button
        v-for="(item, index) in filteredTabs"
        :id="item.key"
        :key="index"
        :aria-label="item.label"
        :aria-selected="isActive(item.key)"
        :class="{ active: isActive(item.key) }"
        role="tab"
        tabindex="0"
        @click="onClickTab(item.key)"
      >
        <i v-if="item?.icon" :class="['icon', item?.icon]" />
        <span :title="item.label">{{ item.label }}</span>
        <svg
          v-if="item.closable"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          @click.stop="handleTabClose(item.key)"
        >
          <path
            d="m13.06 12l4.42-4.42a.75.75 0 1 0-1.06-1.06L12 10.94L7.58 6.52a.75.75 0 0 0-1.06 1.06L10.94 12l-4.42 4.42a.75.75 0 0 0 0 1.06a.75.75 0 0 0 1.06 0L12 13.06l4.42 4.42a.75.75 0 0 0 1.06 0a.75.75 0 0 0 0-1.06Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
    <div role="tabpanel">
      <template v-if="typeof activeTabComponent === 'string'">
        {{ activeTabComponent }}
      </template>
      <template v-else>
        <template v-if="!lazy">
          <component
            :is="slotComponent"
            v-for="(slotComponent, index) in validSlots"
            v-show="slotComponent === activeTabComponent"
            :key="`slot-component-${index}`"
          />
        </template>
        <template v-else>
          <component :is="activeTabComponent" v-if="activeTabComponent" />
        </template>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TabView",
};
</script>

<script setup lang="ts">
import type { PropType } from "vue";

import { computed, nextTick, onMounted, ref, useSlots, watch } from "vue";

import type { Tab } from "./types";

import { getStorage } from "../utils";
import { getOrientation } from "./utilities";

const props = defineProps({
  activeKey: {
    required: true,
    type: String,
  },
  enableHashRouting: Boolean,
  id: {
    default: "",
    type: String,
  },
  interceptTabChange: Boolean,
  interceptTabClose: Boolean,
  lazy: {
    default: true,
    type: Boolean,
  },
  persistState: {
    default: true,
    type: Boolean,
  },
  persistStateStorage: {
    default: "localStorage",
    type: String as PropType<"localStorage" | "sessionStorage">,
  },
  position: {
    default: "top",
    type: String as PropType<"bottom" | "left" | "right" | "top">,
    validator: (value: string) =>
      ["bottom", "left", "right", "top"].includes(value),
  },
  tabs: {
    required: true,
    type: Array as PropType<Tab[]>,
  },
  visibleTabs: {
    default: () => [],
    type: Array as PropType<string[]>,
  },
});

const emit = defineEmits([
  "beforeTabChange",
  "beforeTabClose",
  "update:activeKey",
  "update:visibleTabs",
]);

const slots = useSlots();

const activeTab = ref(props.activeKey);
const initialized = ref(false);
const visibleTabs = ref(
  props.visibleTabs?.length
    ? props.visibleTabs
    : props.tabs.map((tab) => tab.key),
);

const activeTabComponent = computed(() => {
  return (
    filteredTabs.value.find((tab) => tab.key === activeTab.value)?.children ||
    validSlots.value.find(
      (slot) =>
        typeof slot === "object" &&
        slot !== null &&
        "props" in slot &&
        slot.props?.key === activeTab.value,
    )
  );
});

const ariaOrientation = computed(() => getOrientation(props.position));

const filteredTabs = computed(() =>
  visibleTabs.value
    .map((key) => props.tabs.find((tab) => tab.key === key))
    .filter((tab): tab is Tab => tab !== undefined),
);

const storage = computed(() => getStorage(props.persistStateStorage));

const validSlots = computed(() => {
  const filteredSlots = slots?.default?.() ?? [];

  return filteredSlots.flatMap((slot) => {
    if (Array.isArray(slot?.children) && !slot?.props?.key) {
      return slot.children.filter(
        (child) =>
          typeof child === "object" &&
          child !== null &&
          "props" in child &&
          child.props?.key,
      );
    }

    if (slot?.props?.key) {
      return [slot];
    }

    return [];
  });
});

onMounted(() => {
  if (props.persistState && props.id) {
    const storedState = storage.value.getItem(props.id);
    if (storedState) {
      const parsedState = JSON.parse(storedState);
      activeTab.value = parsedState.activeTab || props.activeKey;

      if (parsedState.visibleTabs) {
        visibleTabs.value = parsedState.visibleTabs;
      }
    }
  }

  if (props.enableHashRouting) {
    setHashTab();
    window.addEventListener("hashchange", setHashTab);
  }

  initialized.value = true;
});

watch(
  () => props.visibleTabs,
  (newVal) => {
    if (initialized.value) {
      visibleTabs.value = [...newVal];
    }
  },
);

watch(
  () => props.activeKey,
  (newVal) => {
    if (initialized.value) {
      setActiveTab(newVal);
    }
  },
);

watch([visibleTabs, activeTab], () => {
  if (props.id && props.persistState) {
    storage.value.setItem(
      props.id,
      JSON.stringify({
        activeTab: activeTab.value,
        visibleTabs: visibleTabs.value,
      }),
    );
  }
});

const isActive = (key: string) => activeTab.value === key;

const closeTab = (key: string) => {
  const tabIndex = visibleTabs.value.indexOf(key);
  const newVisibleTabs = visibleTabs.value.filter((tab) => tab !== key);

  let newActiveTab = "";
  newActiveTab =
    tabIndex > 0 ? newVisibleTabs[tabIndex - 1] : newVisibleTabs[0];

  if (!newVisibleTabs.includes(activeTab.value)) {
    setActiveTab(newActiveTab);
  }

  visibleTabs.value = newVisibleTabs;
  emit("update:visibleTabs", newVisibleTabs);
};

const handleTabClose = (key: string) => {
  if (!props.interceptTabClose) {
    closeTab(key);

    return;
  }

  emit("beforeTabClose", key);
};

const onClickTab = (key: string) => {
  if (isActive(key)) {
    return;
  }

  if (!props.interceptTabChange) {
    setActiveTab(key);

    return;
  }

  emit("beforeTabChange", key);
};

const setActiveTab = (key: string) => {
  activeTab.value = key;

  if (initialized.value) {
    const { pathname, search } = window.location;
    const newUrl = props.enableHashRouting
      ? `${pathname}${search}#${activeTab.value}`
      : `${pathname}${search}`;

    history.replaceState(null, "", newUrl);
  }

  emit("update:activeKey", key);
};

const setHashTab = () => {
  const hash = window.location.hash?.split("#").pop();

  if (!hash || hash?.includes("/")) {
    return;
  }

  if (!initialized.value) {
    const element = document.getElementById(hash);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  nextTick(() => {
    const shouldUpdateTab =
      hash && hash !== activeTab.value && visibleTabs.value.includes(hash);

    if (shouldUpdateTab) {
      setActiveTab(hash);
    }
  });
};

defineExpose({
  closeTab,
  setActiveTab,
});
</script>

<style lang="css">
@import "../assets/css/tab-view.css";
</style>

<template>
  <div ref="dzangolabVueUIPopup" class="popup-container">
    <div
      ref="dzangolabVueUIPopupTrigger"
      :aria-label="ariaLabel"
      class="popup-trigger"
      @click="togglePopup"
    >
      <slot />
    </div>
    <div
      v-if="isVisible && hasContent"
      ref="dzangolabVueUIPopupContent"
      :class="['popup-content', popupPosition]"
      :style="popupStyles"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Popup",
};
</script>

<script setup lang="ts">
import { onClickOutside, useWindowSize } from "@vueuse/core";
import { computed, ref, useSlots, onBeforeUnmount, nextTick } from "vue";

const props = defineProps({
  ariaLabel: {
    default: "popup",
    type: String,
  },
  offset: {
    type: Number,
    default: 10,
  },
  position: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["onClickOutside"]);

const slots = useSlots();

const dzangolabVueUIPopup = ref<HTMLElement | null>(null);
const dzangolabVueUIPopupContent = ref<HTMLElement | null>(null);
const dzangolabVueUIPopupTrigger = ref<HTMLElement | null>(null);
const isVisible = ref(false);
const popupPosition = ref<string>("bottom");
const popupStyles = ref({ top: "0", left: "0" });
const scrollListeners = ref<{ element: Element; listener: () => void }[]>([]);

const { width: windowWidth, height: windowHeight } = useWindowSize();

const hasContent = computed(() => !!slots.content);

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updatePosition);
  window.removeEventListener("resize", updatePosition);
  scrollListeners.value.forEach(({ element, listener }) => {
    element.removeEventListener("scroll", listener);
  });
});

const getBestPosition = (triggerRect: DOMRect): string => {
  const positions = {
    top: triggerRect.top,
    bottom: windowHeight.value - triggerRect.bottom,
    left: triggerRect.left,
    right: windowWidth.value - triggerRect.right,
  };

  const maxSpace = Math.max(...Object.values(positions));
  return (
    (Object.keys(positions) as Array<keyof typeof positions>).find(
      (key) => positions[key] === maxSpace,
    ) || "bottom"
  );
};

const getScrollableParents = (element: HTMLElement): Element[] => {
  const parents: Element[] = [];
  let current = element.parentElement;

  while (current) {
    const style = window.getComputedStyle(current);
    if (
      ["auto", "scroll"].includes(style.overflow) ||
      ["auto", "scroll"].includes(style.overflowX) ||
      ["auto", "scroll"].includes(style.overflowY)
    ) {
      parents.push(current);
    }
    current = current.parentElement;
  }

  return parents;
};

const togglePopup = () => {
  isVisible.value = !isVisible.value;
  if (isVisible.value) {
    nextTick(() => {
      updatePosition();
      window.addEventListener("scroll", updatePosition);
      window.addEventListener("resize", updatePosition);

      if (dzangolabVueUIPopup.value) {
        const parents = getScrollableParents(dzangolabVueUIPopup.value);
        parents.forEach((parent) => {
          const listener = () => updatePosition();
          parent.addEventListener("scroll", listener);
          scrollListeners.value.push({ element: parent, listener });
        });
      }
    });
  } else {
    window.removeEventListener("scroll", updatePosition);
    window.removeEventListener("resize", updatePosition);

    scrollListeners.value.forEach(({ element, listener }) => {
      element.removeEventListener("scroll", listener);
    });
    scrollListeners.value = [];
  }
};

const updatePosition = () => {
  if (!dzangolabVueUIPopupTrigger.value || !dzangolabVueUIPopupContent.value) {
    return;
  }

  const triggerRect = dzangolabVueUIPopupTrigger.value.getBoundingClientRect();
  const contentRect = dzangolabVueUIPopupContent.value.getBoundingClientRect();

  let top = 0;
  let left = 0;
  const position = props.position || getBestPosition(triggerRect);

  switch (position) {
    case "top":
      top = triggerRect.top - contentRect.height - props.offset;
      left = triggerRect.left;
      break;
    case "bottom":
      top = triggerRect.bottom + props.offset;
      left = triggerRect.left;
      break;
    case "left":
      left = triggerRect.left - contentRect.width - props.offset;
      top = triggerRect.top;
      break;
    case "right":
      left = triggerRect.left + triggerRect.width + props.offset;
      top = triggerRect.top;
      break;
  }

  const spaceBelow = windowHeight.value - (top + contentRect.height);
  const spaceAbove = top;

  if (spaceAbove < 0 || spaceBelow < 0) {
    isVisible.value = false;
  }

  if (position === "right" || position === "left") {
    left = Math.max(0, left);
  } else {
    if (left + contentRect.width > windowWidth.value) {
      left = windowWidth.value - contentRect.width;
    }
    left = Math.max(0, left);

    const maxTop = windowHeight.value - contentRect.height;
    top = Math.min(Math.max(top, 0), maxTop);
  }

  popupStyles.value = {
    top: `${top}px`,
    left: `${left}px`,
  };
  popupPosition.value = position;
};

onClickOutside(dzangolabVueUIPopup, () => {
  isVisible.value = false;
  emit("onClickOutside");
});

defineExpose({
  isVisible,
  togglePopup,
});
</script>

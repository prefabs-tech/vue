<template>
  <div
    v-if="!showOnlyToggle"
    :aria-label="ariaLabel"
    :class="['sidebar', { collapsible: collapsible }]"
    role="navigation"
  >
    <div v-if="!noHeader" class="header">
      <Logo v-if="!hideLogo" />
      <div class="title">
        <slot name="title"></slot>
      </div>
      <slot name="toggleIcons">
        <button
          :aria-expanded="sidebarActive"
          :aria-label="sidebarActive ? 'Collapse sidebar' : 'Expand sidebar'"
          class="toggle"
          type="button"
          @click="sidebarActive = !sidebarActive"
        >
          <svg
            v-if="sidebarActive"
            aria-hidden="true"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m13.06 12l4.42-4.42a.75.75 0 1 0-1.06-1.06L12 10.94L7.58 6.52a.75.75 0 0 0-1.06 1.06L10.94 12l-4.42 4.42a.75.75 0 0 0 0 1.06a.75.75 0 0 0 1.06 0L12 13.06l4.42 4.42a.75.75 0 0 0 1.06 0a.75.75 0 0 0 0-1.06Z"
              fill="currentColor"
            />
          </svg>
          <svg
            v-else
            aria-hidden="true"
            class="extend"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5m0-4.5H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5m0 9H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5"
              fill="currentColor"
            />
          </svg>
        </button>
      </slot>
    </div>
    <div class="sidebar-menu-wrapper">
      <slot> </slot>
      <ul class="nav">
        <slot name="links">
          <NavMenu
            :menu="menu"
            :sidebar-active="sidebarActive"
            @select:menu="$emit('select:menu')"
          />
        </slot>
        <slot name="afterNavLinks"></slot>
      </ul>
      <slot name="afterSidebarMenu"></slot>
    </div>
    <div v-if="slots.footer" class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
  <button
    v-else
    :aria-expanded="sidebarActive"
    aria-label="Expand navigation menu"
    class="collapsed-sidebar"
    type="button"
    @click="sidebarActive = true"
  >
    <svg
      aria-hidden="true"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 17.75a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06L13.94 12L9.47 7.53a.75.75 0 0 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.74.74 0 0 1-.53.22"
        fill="currentColor"
      />
    </svg>
  </button>
</template>

<script lang="ts">
export default {
  name: "AppSidebar",
};
</script>

<script setup lang="ts">
import type { PropType } from "vue";

import { computed, ref, useSlots } from "vue";

import type { SidebarMenu } from "../types";

import Logo from "./Logo.vue";
import NavMenu from "./NavMenu.vue";

const props = defineProps({
  ariaLabel: {
    default: "Navigation",
    type: String,
  },
  collapsible: {
    default: true,
    type: Boolean,
  },
  hideLogo: Boolean,
  menu: {
    required: true,
    type: Array as PropType<SidebarMenu[]>,
  },
  noHeader: {
    default: false,
    type: Boolean,
  },
});

defineEmits(["select:menu"]);

const showOnlyToggle = computed(() => {
  if (sidebarActive.value || !props.collapsible) {
    return false;
  }

  return !props.menu.some((item) => !!item.shortName);
});

const slots = useSlots();

const sidebarActive = ref<boolean>(true);

defineExpose({
  sidebarActive,
  toggle() {
    sidebarActive.value = !sidebarActive.value;
  },
});
</script>

<style lang="css">
@import "@/assets/css/components/sidebar.css";
</style>

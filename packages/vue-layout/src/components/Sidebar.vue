<template>
  <div v-if="!isInactive" :class="['sidebar', { collapsible: collapsible }]">
    <div v-if="!noHeader" class="header">
      <Logo />
      <div class="title">
        <slot name="title"></slot>
      </div>
      <slot name="toggleIcons">
        <div class="toggle" @click="sidebarActive = !sidebarActive">
          <transition name="sidebar-toggle">
            <svg
              v-if="sidebarActive"
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
              class="extend"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5m0-4.5H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5m0 9H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5"
                fill="currentColor"
              />
            </svg>
          </transition>
        </div>
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
  <div v-else class="no-sidebar" @click="sidebarActive = true">
    <img
      v-if="!sidebarActive"
      alt="show sidebar"
      src="../assets/svg/right-chevron.svg"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "Sidebar",
};
</script>

<script setup lang="ts">
import { computed, ref, useSlots } from "vue";

import Logo from "./Logo.vue";
import NavMenu from "./NavMenu.vue";

import type { SidebarMenu } from "../types";
import type { PropType } from "vue";

const props = defineProps({
  collapsible: {
    default: true,
    type: Boolean,
  },
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

const isInactive = computed(() => {
  if (!sidebarActive.value && props.collapsible) {
    return !props.menu?.filter((item) => !!item.shortName)?.length;
  }

  return false;
});

const slots = useSlots();

const sidebarActive = ref<boolean>(true);

defineExpose({
  sidebarActive,
});
</script>

<style lang="css">
@import "@/assets/css/components/sidebar.css";
</style>

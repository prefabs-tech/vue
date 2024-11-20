<template>
  <div class="sidebar">
    <div v-if="!noHeader" class="header">
      <div class="logo">
        <Logo />
      </div>
      <slot name="title"></slot>
      <div class="toggle" @click="sidebarActive = !sidebarActive">
        <img
          v-if="sidebarActive"
          src="../assets/svg/left-chevron.svg"
          alt="minimize sidebar"
        />
        <img
          v-else
          class="extend"
          src="../assets/svg/right-chevron.svg"
          alt="extend sidebar"
        />
      </div>
    </div>
    <div class="sidebar-wrapper">
      <slot> </slot>
      <ul class="nav">
        <slot name="links">
          <NavMenu :menu="menu" :sidebar-active="sidebarActive" />
        </slot>
        <slot name="afterNavLinks"></slot>
      </ul>
      <slot name="afterSidebarMenu"></slot>
    </div>
    <div v-if="slots.footer" class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Sidebar",
};
</script>

<script setup lang="ts">
import { ref, onUnmounted, useSlots } from "vue";

import Logo from "./Logo.vue";
import NavMenu from "./NavMenu.vue";

import type { SidebarMenu } from "../types";
import type { PropType } from "vue";

defineProps({
  menu: {
    required: true,
    type: Array as PropType<SidebarMenu[]>,
  },
  noHeader: {
    default: false,
    type: Boolean,
  },
});

const slots = useSlots();

const sidebarActive = ref<boolean>(true);

const handleResize = () => {
  if (window.innerWidth >= 1025) {
    sidebarActive.value = true;
  } else {
    sidebarActive.value = false;
  }
};

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

window.addEventListener("resize", handleResize);

handleResize();
</script>

<style lang="css">
.sidebar {
  --_bg-color: var(--sidebar-bg-color, #007aff);
  --_color: var(--sidebar-color, #fff);
  --_height: var(--sidebar-height, auto);
  --_position: var(--sidebar-position, fixed);
  --_width: var(--sidebar-width, 16rem);

  background-color: var(--_bg-color);
  bottom: 0;
  color: var(--_color);
  height: var(--_height);
  left: 0;
  overflow: hidden;
  position: var(--_position);
  top: 0;
  transition: 0.2s ease-out;
  width: var(--_width);
  z-index: 999;
}

.sidebar > .footer {
  --_bg-color: var(--sidebar-bg-color, transparent);
  --_border-color: var(--sidebar-border-color, #dbdbdb);
  --_bottom: var(--sidebar-footer-bottom, 0);
  --_font-size: var(--sidebar-font-size, 1rem);
  --_gap: var(--footer-gap, 1rem);
  --_justify-content: var(--sidebar-justify-content, center);
  --_padding-top: var(--footer-padding-v, 1rem);
  --_padding-bottom: var(--footer-padding-v, 1rem);
  --_position: var(--sidebar-footer-position, absolute);
  --_width: var(--sidebar-width, 100%);

  align-items: center;
  background-color: var(--_bg-color);
  border-top: 1px solid var(--_border-color);
  bottom: var(--_bottom);
  box-shadow: 0 0 0 100vmax var(--_bg-color);
  clip-path: inset(0 -100vmax);
  display: flex;
  flex-direction: column;
  font-size: var(--_font-size);
  gap: var(--_gap);
  justify-content: var(--_justify-content);
  padding-bottom: var(--_padding-bottom);
  padding-top: var(--_padding-top);
  position: var(--_position);
  text-align: center;
  width: var(--_width);
}

.sidebar > .header {
  --_border-color: var(--sidebar-border-color, #dbdbdb);
  --_padding-h: var(--sidebar-padding-h, 1rem);
  --_padding-v: var(--sidebar-padding-v, 1.5rem);

  align-items: center;
  border-bottom: 1px solid var(--_border-color);
  display: flex;
  justify-content: space-between;
  padding: var(--_padding-v) var(--_padding-h);
}

.sidebar > .header > .logo {
  --_max-width: var(--sidebar-logo-max-width, 150px);

  max-width: var(--_max-width);
  width: 100%;
}

.sidebar > .header > .toggle {
  cursor: pointer;
  width: var(--sidebar-toggle-icon-width, 1.5rem);
}

.sidebar:has(.extend) {
  overflow: visible;
  width: 5rem;
}

.sidebar:has(.extend) > .header > .logo {
  width: max-content;
}

.toggle > .extend {
  --_bg-color: var(--sidebar-bg-color, #007aff);
  --_border-color: var(--sidebar-border-color, #fff);
  --_border-radius: 2rem;
  --_width: 2rem;

  background-color: var(--_bg-color);
  border: solid 1px var(--_border-color);
  border-radius: var(--_border-radius);
  left: 4rem;
  position: absolute;
  padding: 0.25rem;
  top: 1rem;
  width: var(--_width);
}
</style>

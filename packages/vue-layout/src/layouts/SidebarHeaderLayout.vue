<template>
  <div class="layout sidebar-header-layout">
    <slot name="header">
      <AppHeader no-logo no-main-menu>
        <template #locales>
          <slot name="locales" />
        </template>
      </AppHeader>
    </slot>
    <Sidebar :menu="menu" :no-header="noSidebarHeader" class="layout-sidebar">
      <template #afterNavLinks>
        <slot name="afterNavLinks"></slot>
        <slot name="userMenu"></slot>
      </template>

      <template #afterSidebarMenu>
        <slot name="afterSidebarMenu"></slot>
      </template>

      <template #footer>
        <slot name="footer">
          <AppFooter />
        </slot>
      </template>
    </Sidebar>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import AppFooter from "../components/AppFooter.vue";
import AppHeader from "../components/AppHeader.vue";
import Sidebar from "../components/Sidebar.vue";

import type { SidebarMenu } from "../types";
import type { PropType } from "vue";

defineProps({
  menu: {
    required: true,
    type: Array as PropType<SidebarMenu[]>,
  },
  noSidebarHeader: {
    default: false,
    type: Boolean,
  },
});
</script>

<style lang="css">
.layout.sidebar-header-layout {
  display: grid;
  grid-template-columns: var(--sidebar-width, 16rem) 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  transition: all 0.25s ease-in-out;
}

.layout.sidebar-header-layout:has(.no-sidebar) {
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "main";
}

.layout.sidebar-header-layout > .no-sidebar {
  position: absolute;
}

.layout.sidebar-header-layout .layout-sidebar > .header {
  --_padding-v: 1rem;
}

.layout.sidebar-header-layout footer {
  --_padding-h: var(--sidebar-padding-h, 1rem);
  --_padding-v: var(--sidebar-padding-v, 1.5rem);

  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 0.875rem;
  justify-content: space-between;
  padding: 0 var(--_padding-h);
  width: 100%;
}

.layout.sidebar-header-layout .copyright a::after {
  content: "";
}

.layout.sidebar-header-layout:has(.extend) {
  grid-template-columns: var(--sidebar-collapsed-width, 6rem) 1fr;
}

.layout.sidebar-header-layout > .layout-sidebar {
  grid-area: sidebar;
  transition: width 0.3s ease-in-out;
  z-index: 100;
}

.layout.sidebar-header-layout > header {
  --header-padding-h: 1rem;
  --header-padding-v: 2.1rem;

  grid-area: header;
  padding-right: var(--header-padding-h);
}

.layout.sidebar-header-layout > main {
  grid-area: main;
  transition: all 0.3s ease-in-out;
}

.layout-sidebar {
  transition: width 0.3s ease-in-out;
}

main {
  padding: var(--layout-default-padding-v, 2.5rem)
    var(--layout-default-padding-h, 2rem);
  z-index: 99;
}
</style>

<template>
  <div class="layout sidebar-only">
    <Sidebar :menu="menu" :no-header="noHeader" class="layout-sidebar">
      <template #afterNavLinks>
        <slot name="afterNavLinks"></slot>
        <slot name="userMenu"></slot>
      </template>

      <template #afterSidebarMenu>
        <slot name="afterSidebarMenu"></slot>
        <slot name="locales">
          <LocaleSwitcher class="locales" />
        </slot>
      </template>

      <template #footer>
        <AppFooter />
      </template>
    </Sidebar>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import { LocaleSwitcher } from "@dzangolab/vue3-i18n";

import AppFooter from "../components/AppFooter.vue";
import Sidebar from "../components/Sidebar.vue";

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
</script>

<style lang="css">
.layout.sidebar-only {
  display: grid;
  grid-template-columns: var(--sidebar-width, 16rem) 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "sidebar main";
  transition: all 0.25s ease-in-out;
}

.layout.sidebar-only footer {
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

.layout.sidebar-only .copyright a::after {
  content: "";
}

.layout.sidebar-only .locales {
  background-color: #b5b5b5;
  border-radius: 0.3rem;
  margin-left: 1rem;
  margin-top: 0.8rem;
  padding: 0.4rem;
  width: 10rem;
}

.layout.sidebar-only .locales ul.dropdown {
  left: 0;
  right: 0;
  margin-top: 0.2rem;
}

.layout.sidebar-only:has(.extend) {
  grid-template-columns: var(--sidebar-collapsed-width, 5rem) 1fr;
}

.layout.sidebar-only:has(.no-sidebar) {
  grid-template-columns: var(--sidebar-collapsed-width, 2rem) 1fr;
}

.layout.sidebar-only > .layout-sidebar {
  grid-area: sidebar;
  transition: width 0.3s ease-in-out;
}

.layout.sidebar-only > main {
  grid-area: main;
  transition: all 0.3s ease-in-out;
}

.layout-sidebar {
  transition: width 0.3s ease-in-out;
}

main {
  padding: var(--layout-default-padding-v, 2.5rem)
    var(--layout-default-padding-h, 2rem);
}
</style>

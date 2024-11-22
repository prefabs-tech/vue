<template>
  <div class="layout sidebar-only">
    <Sidebar :menu="menu" :no-header="noHeader" class="layout-sidebar">
      <template #footer>
        <slot name="locales">
          <LocaleSwitcher class="locales" />
        </slot>
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
  transition: all 0.3s ease-in-out;
}

.layout.sidebar-only:has(.extend) {
  grid-template-columns: var(--sidebar-collapsed-width, 5rem) 1fr;
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
  padding: 1rem;
}
</style>

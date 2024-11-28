<template>
  <div class="layout sidebar-header-layout">
    <slot name="header">
      <AppHeader ref="appHeader" no-logo no-main-menu>
        <template #locales>
          <slot name="locales" />
        </template>
      </AppHeader>
    </slot>
    <Sidebar
      ref="sidebar"
      :menu="menu"
      :no-header="noSidebarHeader"
      class="layout-sidebar"
    >
      <template #afterNavLinks>
        <slot name="afterNavLinks"></slot>
        <slot name="userMenu"></slot>
      </template>

      <template #afterSidebarMenu>
        <slot name="afterSidebarMenu"></slot>
        <template v-if="sidebarLocaleSwitcher">
          <slot name="locales">
            <LocaleSwitcher class="locales" />
          </slot>
        </template>
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
import { LocaleSwitcher } from "@dzangolab/vue3-i18n";
import { ref, watch, onUnmounted } from "vue";

import AppFooter from "../components/AppFooter.vue";
import AppHeader from "../components/AppHeader.vue";
import Sidebar from "../components/Sidebar.vue";

import type { SidebarMenu } from "../types";
import type { PropType } from "vue";

const appHeader = ref();
const sidebar = ref();
const sidebarLocaleSwitcher = ref<boolean>(false);

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

watch(
  () => appHeader.value?.expanded,
  (newValue) => {
    if (newValue) {
      sidebar.value.sidebarActive = true;
    }
  },
);

watch(
  () => sidebar.value?.sidebarActive,
  (newValue) => {
    if (!newValue) {
      appHeader.value.expanded = false;
    }
  },
);

const handleResize = () => {
  if (window.innerWidth >= 576) {
    sidebarLocaleSwitcher.value = false;
  } else {
    sidebarLocaleSwitcher.value = true;
  }
};

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

window.addEventListener("resize", handleResize);

handleResize();
</script>

<style lang="css">
.layout.sidebar-header-layout {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header"
    "main";
  transition: all 0.25s ease-in-out;
}

.layout.sidebar-header-layout:has(.no-sidebar) {
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "main";
}

.layout.sidebar-header-layout > .no-sidebar {
  display: none;
  position: fixed;
  top: 0;
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

.layout.sidebar-header-layout:has(.extend) .locales {
  width: 4rem;
}

.layout.sidebar-header-layout:has(.extend) .locales .dropdown {
  right: -7rem;
}

.layout.sidebar-header-layout .sidebar-menu-wrapper .locales {
  background-color: #b5b5b5;
  border-radius: 0.3rem;
  margin-left: 1rem;
  margin-top: 0.8rem;
  padding: 0.4rem;
  width: 10rem;
}

.layout.sidebar-header-layout .locales ul.dropdown {
  left: 0;
  right: 0;
  margin-top: 0.2rem;
}

.layout.sidebar-header-layout > .layout-sidebar {
  grid-area: sidebar;
  transition: width 0.3s ease-in-out;
  z-index: 100;
}

.layout.sidebar-header-layout > header {
  --header-padding-h: 1rem;
  --header-padding-v: 2.1rem;

  background-color: #fff;
  grid-area: header;
  padding-right: var(--header-padding-h);
  position: sticky;
  top: 0;
  z-index: 100;
}

.layout.sidebar-header-layout > header > nav[data-expanded="true"] {
  display: none;
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

@media screen and (min-width: 1024px) {
  .layout.sidebar-header-layout {
    grid-template-columns: var(--sidebar-width, 16rem) 1fr;
    grid-template-areas:
      "sidebar header"
      "sidebar main";
  }
}

@media screen and (min-width: 576px) {
  .layout.sidebar-header-layout > .no-sidebar {
    display: block;
  }
}
</style>

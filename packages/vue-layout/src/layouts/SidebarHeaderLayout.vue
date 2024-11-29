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
      </template>

      <template #afterSidebarMenu>
        <slot name="afterSidebarMenu"></slot>
        <template v-if="sidebarLocaleSwitcher">
          <slot name="locales">
            <LocaleSwitcher class="locales" />
          </slot>
        </template>
        <slot name="userMenu"></slot>
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
@import "../assets/css/layouts/sidebarHeader.css";
</style>

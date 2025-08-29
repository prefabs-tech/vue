<template>
  <div
    :aria-expanded="
      isLargeScreen ? appHeader?.expanded : sidebar?.sidebarActive
    "
    :class="['layout sidebar-header-layout', { collapsible: collapsible }]"
  >
    <slot name="header">
      <AppHeader
        v-show="isLargeScreen"
        ref="appHeader"
        :class="{ 'no-locale-switcher-header': noLocaleSwitcher }"
        :no-locale-switcher="noLocaleSwitcher"
        :no-toggle="!collapsible || noSidebar"
        no-main-menu
      >
        <template
          v-if="userMenuLocation === 'header' && isLargeScreen"
          #userMenu
        >
          <slot name="userMenu"></slot>
        </template>
        <template #locales>
          <slot name="locales" />
        </template>
      </AppHeader>
    </slot>
    <Sidebar
      v-if="!noSidebar || !isLargeScreen"
      ref="sidebar"
      :collapsible="collapsible && isLargeScreen"
      :menu="menu"
      :no-header="isLargeScreen"
      class="layout-sidebar"
      @select:menu="onSelectMenu"
    >
      <template #afterNavLinks>
        <slot name="afterNavLinks"></slot>
      </template>

      <template #afterSidebarMenu>
        <slot name="afterSidebarMenu"></slot>
        <slot
          v-if="
            (userMenuLocation === 'sidebar' || !isLargeScreen) && !noSidebar
          "
          name="userMenu"
        ></slot>
        <template v-if="sidebarLocaleSwitcher">
          <slot name="locales">
            <LocaleSwitcher
              v-if="!noLocaleSwitcher"
              :show-badges="showBadges"
              class="locales"
            />
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
import { useConfig } from "@prefabs.tech/vue3-config";
import { LocaleSwitcher } from "@prefabs.tech/vue3-i18n";
import { useWindowSize } from "@vueuse/core";
import { computed, ref, onUnmounted, onMounted } from "vue";

import AppFooter from "../components/AppFooter.vue";
import AppHeader from "../components/AppHeader.vue";
import Sidebar from "../components/Sidebar.vue";

import type { SidebarMenu } from "../types";
import type { PropType } from "vue";

const { layout: layoutConfig } = useConfig();

const showBadges = layoutConfig?.localeSwitcher?.showBadges;

const { width: windowWidth } = useWindowSize();

const appHeader = ref();
const sidebar = ref();
const sidebarLocaleSwitcher = ref<boolean>(false);

defineProps({
  collapsible: {
    default: true,
    type: Boolean,
  },
  menu: {
    required: true,
    type: Array as PropType<SidebarMenu[]>,
  },
  noLocaleSwitcher: Boolean,
  noSidebar: {
    default: false,
    type: Boolean,
  },
  userMenuLocation: {
    default: "sidebar",
    type: String,
    validator: (value: string) => ["header", "sidebar"].includes(value),
  },
});

const isLargeScreen = computed(() => windowWidth.value > 576);

const handleResize = () => {
  if (window.innerWidth >= 576) {
    sidebarLocaleSwitcher.value = false;

    if (sidebar.value) {
      sidebar.value.sidebarActive = true;
    }
  } else {
    sidebarLocaleSwitcher.value = true;

    if (sidebar.value) {
      sidebar.value.sidebarActive = false;
    }
  }
};

const onSelectMenu = () => {
  if (!isLargeScreen.value) {
    sidebar.value.sidebarActive = false;
  }
};

onMounted(() => {
  if (window.innerWidth < 576 && sidebar.value) {
    sidebar.value.sidebarActive = false;
  }
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

window.addEventListener("resize", handleResize);

handleResize();

defineExpose({
  onSelectMenu,
});
</script>

<style lang="css">
@import "../assets/css/layouts/sidebarHeader.css";
</style>

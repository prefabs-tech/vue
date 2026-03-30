<template>
  <div class="layout sidebar-only">
    <Sidebar
      ref="sidebar"
      :menu="menu"
      :no-header="noHeader"
      class="layout-sidebar"
    >
      <template #afterNavLinks>
        <slot name="afterNavLinks"></slot>
      </template>

      <template #afterSidebarMenu>
        <slot name="afterSidebarMenu"></slot>
        <slot name="userMenu"></slot>
        <slot name="locales">
          <LocaleSwitcher
            v-if="!noLocaleSwitcher"
            :show-badges="showBadges"
            class="locales"
          />
        </slot>
      </template>

      <template v-if="!noFooter" #footer>
        <AppFooter />
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
import Sidebar from "../components/Sidebar.vue";

import type { SidebarMenu } from "../types";
import type { PropType } from "vue";

const { layout: layoutConfig } = useConfig();
const { width: windowWidth } = useWindowSize();

const sidebar = ref();

const isLargeScreen = computed(() => windowWidth.value > 576);
const showBadges = layoutConfig?.localeSwitcher?.showBadges;

defineProps({
  menu: {
    required: true,
    type: Array as PropType<SidebarMenu[]>,
  },
  noFooter: Boolean,
  noLocaleSwitcher: Boolean,
  noHeader: {
    default: false,
    type: Boolean,
  },
});

const handleResize = () => {
  if (sidebar.value) {
    sidebar.value.sidebarActive = isLargeScreen.value ? true : false;
  }
};

onMounted(() => handleResize());

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

window.addEventListener("resize", handleResize);
</script>

<style lang="css">
@import "../assets/css/layouts/sidebarOnly.css";
</style>

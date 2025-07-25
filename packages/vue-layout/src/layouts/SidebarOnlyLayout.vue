<template>
  <div class="layout sidebar-only">
    <Sidebar :menu="menu" :no-header="noHeader" class="layout-sidebar">
      <template #afterNavLinks>
        <slot name="afterNavLinks"></slot>
      </template>

      <template #afterSidebarMenu>
        <slot name="afterSidebarMenu"></slot>
        <slot name="userMenu"></slot>
        <slot name="locales">
          <LocaleSwitcher v-if="!noLocaleSwitcher" class="locales">
            <template #icon>
              <img src="../assets/svg/up-chevron.svg" alt="toggle icon" />
            </template>
          </LocaleSwitcher>
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
import { LocaleSwitcher } from "@prefabs.tech/vue3-i18n";

import AppFooter from "../components/AppFooter.vue";
import Sidebar from "../components/Sidebar.vue";

import type { SidebarMenu } from "../types";
import type { PropType } from "vue";

defineProps({
  menu: {
    required: true,
    type: Array as PropType<SidebarMenu[]>,
  },
  noLocaleSwitcher: Boolean,
  noHeader: {
    default: false,
    type: Boolean,
  },
});
</script>

<style lang="css">
@import "../assets/css/layouts/sidebarOnly.css";
</style>

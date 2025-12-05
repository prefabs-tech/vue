<template>
  <OriginalBasicLayout :aria-expanded="appHeader?.expanded">
    <template #header>
      <AppHeader
        ref="appHeader"
        :no-locale-switcher="noLocaleSwitcher"
        no-toggle
      >
        <template #logo>
          <Logo :route="home" />
        </template>
        <template #addon>
          <slot name="addon" />
        </template>
        <template #menu>
          <MainMenu
            class="main-menu"
            :routes="routes"
            @close="appHeader.expanded = false"
          />
        </template>
        <template #userMenu>
          <UserMenu
            v-if="showUserMenu"
            :user-menu-items="userMenuItems"
            @select:menu="appHeader.expanded = false"
          >
            <template v-if="$slots.userMenuTrigger" #userMenuTrigger>
              <slot name="userMenuTrigger"></slot>
            </template>
          </UserMenu>
        </template>
      </AppHeader>
    </template>

    <slot></slot>
  </OriginalBasicLayout>
</template>

<script lang="ts">
export default {
  name: "BasicLayout",
};
</script>

<script setup lang="ts">
import { useConfig } from "@prefabs.tech/vue3-config";
import {
  AppHeader,
  BasicLayout as OriginalBasicLayout,
  Logo,
  MainMenu,
} from "@prefabs.tech/vue3-layout";
import { storeToRefs } from "pinia";
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";

import UserMenu from "../components/UserMenu.vue";
import { filterRoutes } from "../router";
import useUserStore from "../store";

import type { MenuItem } from "@prefabs.tech/vue3-layout";

defineProps({
  noLocaleSwitcher: Boolean,
  showUserMenu: {
    default: true,
    required: false,
    type: Boolean,
  },
});

const userStore = useUserStore();

const { user } = storeToRefs(userStore);

const { layout: layoutConfig, user: userConfig } = useConfig();

const appHeader = ref();

const home = computed(() => {
  return user.value
    ? userConfig && userConfig?.routes?.home
      ? userConfig.routes.home
      : "profile"
    : layoutConfig && layoutConfig?.homeRoute
      ? layoutConfig.homeRoute
      : undefined;
});

const router = useRouter();
const allRoutes = router.getRoutes();

const routes = computed(() => {
  const menuItems = layoutConfig?.mainMenu ?? [];

  return menuItems.filter((item) => {
    const matchedRoute = router.getRoutes().find((r) => r.name === item.route);

    if (!matchedRoute) {
      return false;
    }

    return !user.value ? !matchedRoute.meta?.authenticated : true;
  }) as MenuItem[];
});

const userMenuItems = computed(() => {
  return layoutConfig?.userMenu || [];
});

watch(
  () => user.value,
  () => filterRoutes(router, allRoutes),
);
</script>

<style lang="css">
.layout.basic
  nav:not(:has(.locale-switcher.locales))
  > nav.user-menu-dropdown
  > ul.dropdown {
  inset: 0 0 auto auto;
}
</style>

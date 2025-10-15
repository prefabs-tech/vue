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
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import UserMenu from "../components/UserMenu.vue";
import useUserStore from "../store";

import type { MenuItem } from "@prefabs.tech/vue3-layout";
import type { RouteMeta } from "vue-router";

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

  const mainMenuRoutes = allRoutes
    .filter((route) => menuItems.some((item) => item.route === route.name))
    .map((route) => ({
      ...route,
      meta: {
        ...route.meta,
        display:
          typeof route.meta?.display === "function"
            ? route.meta.display(user.value)
            : (route.meta?.display ?? true),
      } as RouteMeta,
    }))
    .filter((route) => route.meta.display);

  return menuItems.filter((item) => {
    const matchedRoute = mainMenuRoutes.find((r) => r.name === item.route);

    if (!matchedRoute) {
      return false;
    }

    return !user.value ? !matchedRoute.meta?.authenticated : true;
  }) as MenuItem[];
});

const userMenuItems = computed(() => {
  return layoutConfig?.userMenu || [];
});
</script>

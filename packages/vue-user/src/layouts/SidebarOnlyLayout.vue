<template>
  <Layout :menu="menu" :no-locale-switcher="noLocaleSwitcher">
    <template #userMenu>
      <UserMenu v-if="showUserMenu" :user-menu-items="userMenuItems">
        <template v-if="$slots.userMenuTrigger" #userMenuTrigger>
          <slot name="userMenuTrigger"></slot>
        </template>
      </UserMenu>
    </template>

    <template #afterNavLinks>
      <slot name="afterNavLinks"></slot>
    </template>

    <template #afterSidebarMenu>
      <slot name="afterSidebarMenu"></slot>
    </template>

    <template #locales>
      <slot name="locales"></slot>
    </template>

    <slot></slot>
  </Layout>
</template>

<script lang="ts">
export default {
  name: "SidebarOnlyLayout",
};
</script>

<script setup lang="ts">
import { useConfig } from "@prefabs.tech/vue3-config";
import { SidebarOnlyLayout as Layout } from "@prefabs.tech/vue3-layout";
import { storeToRefs } from "pinia";
import { computed, watch } from "vue";
import { useRouter } from "vue-router";

import UserMenu from "../components/UserMenu.vue";
import { filterRoutes } from "../router";
import useUserStore from "../store";

import type { MenuItem, SidebarMenu } from "@prefabs.tech/vue3-layout";

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

const { layout: layoutConfig } = useConfig();

const router = useRouter();
const allRoutes = router.getRoutes();

const menu = computed(() => {
  let menuItems = layoutConfig?.mainMenu || [];

  menuItems = menuItems.filter((item: MenuItem) => {
    const hasValidRoute = (routeName?: string, checkAuth = true) => {
      const route = router.getRoutes().find((r) => r.name === routeName);

      if (!route) {
        return false;
      }

      if (!checkAuth && route.meta?.authenticated) {
        return false;
      }

      return true;
    };

    const isValidItem = (menuItem: MenuItem, checkAuth = true): boolean => {
      if (hasValidRoute(menuItem.route, checkAuth)) {
        return true;
      }

      return (
        menuItem.children?.some((child) =>
          hasValidRoute(child.route, checkAuth),
        ) ?? false
      );
    };

    return isValidItem(item, !!user.value);
  });

  return menuItems.map((item: MenuItem) => ({
    hide: item?.hide,
    icon: item?.icon,
    name: item.name,
    routeName: item.route,
    shortName: item?.shortName,
    children: item.children?.map((child: MenuItem) => ({
      hide: child?.hide,
      icon: child?.icon,
      name: child.name,
      routeName: child.route,
      shortName: child?.shortName,
    })),
  })) as SidebarMenu[];
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
.sidebar-only .footer {
  background-color: var(--sidebar-bg-color, #007aff);
  z-index: 99;
}

.sidebar-only > .sidebar .user-menu-dropdown.expanded .toggle > svg {
  transform: rotate(-180deg);
}

.sidebar-only > .sidebar .user-menu-dropdown .toggle > svg {
  transform: rotate(0);
}

.sidebar-only .user-menu > ul {
  flex-direction: column;
}

.sidebar-only .user-menu > ul > li,
.sidebar-only .user-menu-dropdown {
  --_font-size: var(--font-size-min, 0.8rem);
  --_font-weight: var(--font-weight, 450);
  --_layout-sidebar-separator-color: var(
    --layout-sidebar-separator-color,
    #dbdbdb
  );
  --dropdown-container-bg-color: #0870e5;
  --menu-highlight-color: #0870e5;

  font-size: var(--_font-size);
  font-weight: var(--_font-weight);
  width: 100%;
}

.sidebar-only > .sidebar .user-menu-dropdown {
  border-top: 1px solid var(--_layout-sidebar-separator-color);
}

.sidebar-only > .sidebar .user-menu-dropdown > .trigger {
  background-color: var(--sidebar-bg-color, #007aff);
  width: 100%;
}

.sidebar-only .user-menu > ul > li:has(.router-link-exact-active) {
  background-color: #0870e5;
}

.sidebar-only .user-menu:not(.user-menu-dropdown) > ul > li > a,
.sidebar-only .user-menu-dropdown,
.sidebar-only .user-menu-dropdown > ul.dropdown > li {
  --_height: var(--nav-menu-height, 3rem);

  align-items: center;
  display: flex;
  height: var(--_height);
  width: 100%;
}

.sidebar-only .user-menu-dropdown:hover {
  background-color: #0870e5;
}

.sidebar-only .user-menu-dropdown.expanded > ul > li:hover {
  --dropdown-bg-color-hover: #0870e5;
}

.sidebar-only .user-menu-dropdown > .dropdown {
  opacity: 0;
  transform: translate3d(0, 0, 0);
  transition:
    transform 0.3s ease,
    opacity 0.5s ease;
  width: 100%;
}

.sidebar-only .user-menu-dropdown.expanded > .dropdown {
  --dropdown-bg-color: #007aff;
  --dropdown-border: 1px solid #007aff;

  box-shadow: 0 -2px 10px 2px #0870e5;
  opacity: 1;
  transform: translate3d(0, -161.5px, 0);
  width: 100%;
}
</style>

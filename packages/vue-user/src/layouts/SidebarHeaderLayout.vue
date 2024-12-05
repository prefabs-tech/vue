<template>
  <Layout :menu="menu">
    <template #header>
      <slot name="header"></slot>
    </template>

    <template #locales>
      <slot name="locales"></slot>
    </template>

    <template #userMenu>
      <UserMenu v-if="showUserMenu" />
    </template>

    <template #afterNavLinks>
      <slot name="afterNavLinks"></slot>
    </template>

    <template #afterSidebarMenu>
      <slot name="afterSidebarMenu"></slot>
    </template>

    <template #footer>
      <slot name="footer"></slot>
    </template>

    <slot></slot>
  </Layout>
</template>

<script lang="ts">
export default {
  name: "SidebarHeaderLayout",
};
</script>

<script setup lang="ts">
import { useConfig } from "@dzangolab/vue3-config";
import { SidebarHeaderLayout as Layout } from "@dzangolab/vue3-layout";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useRouter } from "vue-router";

import UserMenu from "../components/UserMenu.vue";
import useUserStore from "../store";

import type { MenuItem, SidebarMenu } from "@dzangolab/vue3-layout";

defineProps({
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

  if (!user.value) {
    menuItems = menuItems?.filter((item: MenuItem) => {
      const route = allRoutes.find((r) => {
        if (r.name === item.route) {
          return true;
        }

        if (item.children?.length) {
          return (item.children as MenuItem[]).some((child: MenuItem) => {
            return allRoutes.some((cr) => cr.name === child.route);
          });
        }

        return false;
      });

      return route && !route.meta?.authenticated;
    }) as MenuItem[];
  }

  return menuItems.map((item: MenuItem) => {
    return {
      hide: item?.hide,
      icon: item?.icon,
      name: item.name,
      routeName: item.route,
      shortName: item?.shortName,
      children: item?.children?.map((childItem: MenuItem) => {
        return {
          hide: childItem?.hide,
          icon: childItem?.icon,
          name: childItem.name,
          routeName: childItem.route,
          shortName: childItem?.shortName,
        };
      }),
    };
  }) as SidebarMenu[];
});
</script>

<style lang="css">
.sidebar-header-layout .user-menu > ul {
  --menu-margin-left: 0;

  flex-direction: column;
}

.sidebar-header-layout .user-menu > ul > li,
.sidebar-header-layout .user-menu-dropdown {
  --_font-size: var(--font-size-min, 0.8rem);
  --_font-weight: var(--font-weight, 450);
  --_padding-h: var(--sidebar-padding-h, 1rem);
  --menu-highlight-color: #0870e5;

  font-size: var(--_font-size);
  font-weight: var(--_font-weight);
  padding: 0;
  padding-left: var(--_padding-h);
  width: 100%;
}

.sidebar-header-layout .user-menu > ul > li:has(.router-link-exact-active) {
  background-color: #0870e5;
}

.sidebar-header-layout .user-menu:not(.user-menu-dropdown) > ul > li > a,
.sidebar-header-layout .user-menu-dropdown,
.sidebar-header-layout .user-menu-dropdown > ul.dropdown > li {
  --_height: var(--nav-menu-height, 3rem);

  align-items: center;
  display: flex;
  height: var(--_height);
  width: 100%;
}

.sidebar-header-layout .sidebar-menu-wrapper .user-menu > ul > li > a {
  padding: 0;
}

.sidebar-header-layout .user-menu-dropdown {
  --_border-color: var(--sidebar-border-color, #dee2e6a6);
  --_padding-h: var(--sidebar-padding-h, 1rem);

  border-top: 1px solid var(--_border-color);
  padding-right: var(--_padding-h);
}

.sidebar-header-layout .user-menu-dropdown:hover {
  background-color: #0870e5;
}

.sidebar-header-layout .user-menu-dropdown.expanded > ul > li:hover {
  --dropdown-bg-color-hover: #0870e5;
}

.sidebar-header-layout .user-menu-dropdown > .toggle {
  align-self: center;
}

.sidebar-header-layout .user-menu-dropdown.expanded > .dropdown {
  --dropdown-bg-color: #007aff;
  --dropdown-border: 1px solid #007aff;

  bottom: 105%;
  box-shadow: 0 -2px 10px 2px #0870e5;
  top: unset;
  width: 100%;
}
</style>

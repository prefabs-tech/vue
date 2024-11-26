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
.user-menu > ul {
  --menu-margin-left: 0;

  flex-direction: column !important;
}

.user-menu > ul > li {
  --_font-size: var(--font-size-min, 0.8rem);
  --_font-weight: var(--font-weight, 450);
  --_padding-h: var(--sidebar-padding-h, 1rem);
  --menu-highlight-color: #0870e5;

  width: 100%;
  font-size: var(--_font-size);
  font-weight: var(--_font-weight);
  padding-left: var(--_padding-h);
}

.user-menu > ul > li:has(.router-link-exact-active) {
  background-color: #0870e5;
}

.user-menu > ul > li > a {
  --_height: var(--nav-menu-height, 3rem);

  align-items: center;
  display: flex;
  height: var(--_height);
  width: 100%;
}
</style>

<template>
  <nav class="nav-menu">
    <div v-if="sidebarMenuToShow?.length > 0" class="menu">
      <NavMenuItem
        v-for="(menuItem, index) in sidebarMenuToShow"
        :key="menuItem.name + '-' + index"
        :item="menuItem"
        :sidebar-active="sidebarActive"
        @select:menu="$emit('select:menu')"
      />
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "NavMenu",
};
</script>

<script setup lang="ts">
import type { PropType } from "vue";

import { computed } from "vue";

import type { SidebarMenu } from "../types";

import NavMenuItem from "./NavMenuItem.vue";

const props = defineProps({
  menu: {
    required: true,
    type: Array as PropType<SidebarMenu[]>,
  },
  sidebarActive: {
    default: true,
    type: Boolean,
  },
});

defineEmits(["select:menu"]);

const sidebarMenuToShow = computed(() => {
  return props.menu
    ?.map((menu) => {
      if (menu.hide) {
        return null;
      }

      const filteredChildren =
        menu.children?.filter((childMenu) => !childMenu.hide) || [];

      if (menu.children?.length && filteredChildren.length === 0) {
        return null;
      }

      return {
        ...menu,
        children: filteredChildren.length > 0 ? filteredChildren : undefined,
      };
    })
    .filter(Boolean) as SidebarMenu[];
});
</script>

<style lang="css">
.nav-menu > .menu {
  --_border-color: var(--border-color, #dee2e6);
  --_padding-h: var(--padding-h, 0);
  --_padding-v: var(--padding-v, 1rem);

  border-bottom: 1px solid var(--_border-color);
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding-block: var(--_padding-v);
  padding-left: var(--_padding-h);
}
</style>

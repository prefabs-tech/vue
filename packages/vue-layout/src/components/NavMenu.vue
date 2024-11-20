<template>
  <nav class="nav-menu">
    <div v-if="sideBarMenuToShow?.length > 0" class="menu">
      <NavMenuItem
        v-for="(menuItem, index) in sideBarMenuToShow"
        :key="index"
        :class="{
          'active-item': activeIndex === index,
          active: activeIndex === index && !menuItem.children?.length,
        }"
        :item="menuItem"
        :sidebar-active="sidebarActive"
        @click="activeIndex = index"
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
import { ref, computed } from "vue";

import NavMenuItem from "./NavMenuItem.vue";

import type { SidebarMenu } from "../types";
import type { PropType } from "vue";

const props = defineProps({
  menu: {
    required: true,
    type: Array as PropType<SidebarMenu[]>,
  },
  sidebarActive: {
    default: true,
    required: true,
    type: Boolean,
  },
});

const activeIndex = ref<number | null>(null);

const sideBarMenuToShow = computed(() => {
  return props.menu?.filter((menu) => !menu.hide);
});
</script>

<style lang="css">
.nav-menu > .menu {
  --_border-color: var(--border-color, #dbdbdb);
  --_padding-h: var(--padding-h, 0);
  --_padding-v: var(--padding-v, 1.5rem);

  border-bottom: 1px solid var(--_border-color);
  padding-bottom: var(--_padding-v);
  padding-left: var(--_padding-h);
  padding-top: var(--_padding-v);
}

.nav-menu > .menu > .active {
  --_bg-color: var(--nav-menu-bg-color, #0870e5);

  background-color: var(--_bg-color);
}
</style>

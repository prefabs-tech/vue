<template>
  <div class="nav-menu-item">
    <a
      :class="{ active: isActive }"
      class="link"
      aria-label="open menu"
      @click="onClick"
    >
      <i
        v-if="item.icon"
        :class="[
          'icon',
          item.icon,
          { 'icon-only': !showShortName && !sidebarActive },
        ]"
      />
      <span v-if="showShortName">{{ item.shortName }}</span>
      <span v-if="sidebarActive" class="item-name">
        {{ item.name }}
      </span>
      <span v-if="item.children && item.children.length" class="toggle-menu">
        <img
          v-if="!showChildren"
          alt="open sub menu"
          src="../assets/svg/down-chevron.svg"
        />
        <img v-else alt="close sub menu" src="../assets/svg/up-chevron.svg" />
      </span>
    </a>
    <transition name="fade">
      <div
        v-if="item.children && item.children.length && showChildren"
        class="sub-menu-item"
      >
        <NavMenuItem
          v-for="(child, index) in item.children"
          :key="child.name + '-' + index"
          :item="child"
          :sidebar-active="sidebarActive"
        />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  name: "NavMenuItem",

  components: {
    NavMenuItem: () => import("./NavMenuItem.vue"),
  },
};
</script>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import type { SidebarMenu } from "../types";

const props = defineProps({
  item: {
    required: true,
    type: Object,
  },

  sidebarActive: {
    default: true,
    required: true,
    type: Boolean,
  },
});

const route = useRoute();
const router = useRouter();

const showChildren = ref<boolean>(false);

const isActive = computed(() => {
  return route.name === props.item?.routeName;
});

const showShortName = computed(() => {
  return !props.sidebarActive && props.item.shortName;
});

const onClick = () => {
  if (props.item.routeName) {
    router.push({ name: props.item.routeName });
  } else {
    showChildren.value = !showChildren.value;
  }
};

if (props.item.children?.length) {
  showChildren.value = !!props.item.children.find(
    (child: SidebarMenu) => route.name === child?.routeName,
  );
}
</script>

<style lang="css">
@import "@/assets/css/components/navMenuItem.css";
</style>

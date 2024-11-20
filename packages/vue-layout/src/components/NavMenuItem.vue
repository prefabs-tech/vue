<template>
  <div class="nav-menu-item">
    <a class="link" aria-label="open menu" @click="onClick">
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
          :key="child.name"
          :class="{ active: activeIndex === index && !child.children?.length }"
          :item="child"
          :sidebar-active="sidebarActive"
          @click="activeIndex = index"
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
import { useRouter } from "vue-router";

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

const router = useRouter();

const activeIndex = ref<number | null>(null);
const showChildren = ref<boolean>(false);

const showShortName = computed(() => {
  return !props.sidebarActive && props.item.shortName;
});

const onClick = () => {
  if (props.item.routeName) {
    router.push({ name: props.item.routeName });
  } else {
    activeIndex.value = null;
    showChildren.value = !showChildren.value;
  }
};
</script>

<style lang="css">
.active-item .sub-menu-item > .active {
  --_bg-color: var(--nav-menu-bg-color, #0870e5);

  background-color: var(--_bg-color);
}

.nav-menu-item > .link {
  --_font-size: var(--font-size-min, 0.8rem);
  --_font-weight: var(--font-weight, 450);
  --_height: var(--nav-menu-height, 3rem);
  --_padding-h: var(--sidebar-padding-h, 1rem);

  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: var(--_font-size);
  font-weight: var(--_font-weight);
  gap: 0.75rem;
  height: var(--_height);
  padding-left: var(--_padding-h);
  text-decoration: none;
  transition: 0.5s;
}

.nav-menu-item > .link:hover {
  --_hover-bg-color: var(--nav-menu-bg-color, #0870e5);

  background-color: var(--_hover-bg-color);
}

.nav-menu-item > .link:has(.icon-only) {
  font-size: 0.9rem;
  justify-content: center;
  padding-left: 0;
}

.sub-menu-item {
  overflow: hidden;
  max-height: 20rem;
  transition: max-height 0.5s ease-in-out;
}

.sub-menu-item.fade-enter-active,
.sub-menu-item.fade-leave-active {
  transition: max-height 0.5s ease-in-out;
}

.sub-menu-item.fade-enter-from,
.sub-menu-item.fade-leave-to {
  max-height: 0;
}

.sub-menu-item .link {
  --_submenu-padding-left: var(--nav-menu-padding-left, 2rem);

  padding-left: var(--_submenu-padding-left);
}

.toggle-menu {
  --_margin-right: 1rem;
  --_width: 1rem;

  margin-left: auto;
  margin-right: var(--_margin-right);
  width: var(--_width);
}
</style>

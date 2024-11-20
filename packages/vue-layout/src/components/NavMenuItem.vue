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
          :key="child.name + '-' + index"
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

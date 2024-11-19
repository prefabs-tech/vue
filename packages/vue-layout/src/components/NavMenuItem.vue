<template>
  <div class="nav-menu-item">
    <a class="link" aria-label="open menu" @click="onClick">
      <i v-if="item.icon" :class="`icon ${item.icon}`" />
      <span v-if="showShortName">{{ item.shortName }}</span>
      <span class="item-name" :class="sidebarActive ? 'active-item' : ''">
        {{ item.name }}
      </span>
    </a>
    <div
      v-if="item.children && item.children.length && showChildren"
      class="sub-menu-item"
    >
      <NavMenuItem
        v-for="child in item.children"
        :key="child.name"
        :item="child"
        :sidebar-active="sidebarActive"
      />
    </div>
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

const showChildren = ref<boolean>(false);

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
</script>

<style lang="css">
.link {
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  font-weight: 450;
  height: 49.19px;
  padding-left: 12px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
}

.link:hover {
  --_hover-bg-color: var(--nav-hover-bg-color, #0870e5);

  background-color: var(--_hover-bg-color);
}

.sub-menu-item .link {
  --_submenu-padding-left: var(--nav-menu-padding-left, 2rem);

  padding-left: var(--_submenu-padding-left);
}
</style>

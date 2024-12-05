<template>
  <nav class="menu">
    <ul>
      <li
        v-for="(route, index) in routes"
        :key="index"
        :class="{ active: activeRoute === route.route }"
        @click="$emit('change-route', route.route)"
      >
        <router-link :to="{ name: route.route }">
          {{ route.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  name: "ResponsiveMenu",
};
</script>

<script setup lang="ts">
import type { PropType } from "vue";

defineEmits<{
  (e: "change-route", route: string): void;
}>();

defineProps({
  routes: {
    required: true,
    type: Array as PropType<{ name: string; route: string }[]>,
  },
  activeRoute: {
    default: "",
    required: false,
    type: String,
  },
});
</script>

<style lang="css">
nav.menu > ul {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  gap: var(--menu-gap, 0);
  justify-content: flex-start;
  list-style: none;
  margin-left: var(--menu-margin-left, 0.25em);
  padding: 0;
}

nav.menu li > a {
  padding: 0.5rem 0;
}

nav.menu li.active {
  background-color: var(--menu-bg-color, #e5e5e5);
}

nav.menu li:hover {
  background-color: var(--menu-highlight-color, #e5e5e5);
}

nav.menu a {
  color: inherit;
  display: block;
  text-decoration: none;
}

@media screen and (min-width: 576px) {
  nav.menu > ul {
    align-items: center;
    flex-direction: row;
    gap: var(--menu-gap, 0.25rem);
  }

  nav.menu li {
    --_menu-item-border-radius: var(--menu-item-border-radius, 0.325rem);

    border-radius: var(--_menu-item-border-radius);
  }

  nav.menu li > a {
    --_menu-item-padding-h: var(--menu-item-padding-h, 1rem);
    --_menu-item-padding-v: var(--menu-item-padding-v, 0.625rem);

    padding: var(--_menu-item-padding-v) var(--_menu-item-padding-h);
  }
}
</style>

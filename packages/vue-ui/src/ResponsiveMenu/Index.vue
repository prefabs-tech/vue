<template>
  <nav class="menu">
    <ul>
      <li
        v-for="(route, index) in routes"
        :key="index"
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
});
</script>

<style lang="css" scoped>
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

nav.menu li {
  padding: 0.5rem 0;
}

nav.menu a {
  color: inherit;
  text-decoration: none;
}

@media screen and (min-width: 576px) {
  nav.menu > ul {
    align-items: center;
    flex-direction: row;
    gap: var(--menu-gap, 0.5em);
  }
}
</style>

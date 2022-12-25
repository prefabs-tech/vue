<template>
  <nav class="menu">
    <ul>
      <li v-for="(route, index) in routes" :key="index">
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

defineProps({
  routes: {
    required: true,
    type: Array as PropType<{ name: string; route: string }[]>,
  },
});
</script>

<style lang="css" scoped>
nav.menu > ul {
  align-items: start;
  display: flex;
  flex-direction: column;
  gap: var(--grid-gap, 1rem);
  justify-content: flex-start;
  list-style: none;
  padding: 0;
  margin-left: 0.2rem;
}

@media screen and (min-width: 576px) {
  nav.menu > ul {
    align-items: center;
    flex-direction: row;
  }
}

nav.menu > ul > li {
  padding: 0.25rem 0;
}

nav.menu > ul > li > a {
  color: inherit;
  text-decoration: none;
}
</style>

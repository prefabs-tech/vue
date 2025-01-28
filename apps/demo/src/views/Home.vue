<template>
  <Page :title="$t('home.title')" class="home">
    <div class="container">
      <router-link
        v-for="(menu, index) in packages"
        :key="index + '-' + menu.name"
        :to="menu.route"
      >
        <Card :title="$t(`${menu.name}.title`)">{{ menu.description }}</Card>
      </router-link>
    </div>
  </Page>
</template>

<script lang="ts">
export default {
  name: "Home",
};
</script>

<script setup lang="ts">
import { Card } from "@dzangolab/vue3-ui";

const packages = [
  {
    name: "ui",
    route: "/ui",
    description: "@dzangolab/vue3-ui components and utilities",
  },
  {
    name: "user",
    route: "/user",
    description: "@dzangolab/vue3-user components and utilities",
  },
  {
    name: "form",
    route: "/form",
    description: "@dzangolab/vue3-form components and utilities",
  },
  {
    name: "layout",
    route: "/layout",
    description: "@dzangolab/vue3-layout components and utilities",
  },
];
</script>

<style lang="css" scoped>
.page.home .container {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
}

.page.home .container .card:hover {
  --_border-color: var(--dz-secondary-color);
}
</style>

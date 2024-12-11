<template>
  <Page :title="$t('home.title')" class="home">
    <div class="container">
      <div
        v-for="(menu, index) in packages"
        :key="index + '-' + menu.name"
        class="package"
      >
        <router-link :to="menu.route">
          <Card :title="$t(`${menu.name}.title`)">
            <div class="content">{{ menu.description }}</div>
          </Card>
        </router-link>
      </div>
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
</style>

<template>
  <ResponsiveMenu :routes="routes" />
</template>

<script lang="ts">
export default {
  name: "MainMenu",
};
</script>

<script setup lang="ts">
import { ResponsiveMenu } from "@dzangolab/vue3-ui";

const routes = [
  {
    name: "Home",
    route: "home",
  },
  {
    name: "About",
    route: "about",
  },
];
</script>

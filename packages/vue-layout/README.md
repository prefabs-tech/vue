# Dzangolab Vue3 Layout Plugin

## Requirements

* `@dzangolab/vue3-config: >= 0.6.5`
* `vue: >= 3.2`
* `vue-router: >= 4.0`

## Installation

### npm

```
npm install @dzangolab/vue3-layout @dzangolab/vue3-config`
```

### yarn

```
yarn add @dzangolab/vue3-layout @dzangolab/vue3-config
```

### PNPM

```
pnpm add @dzangolab/vue3-layout @dzangolab/vue3-config
```

## Usage

### main.ts

Import and register the plugin in `main.ts`.

```
import layoutPlugin from "@dzangolab/vue3-layout";
import "@dzangolab/vue3-layout/dist/DzangolabVue3Layout.css";

app.use(layoutPlugin);

...

app.mount("#app");
```

### App.vue

* Wrap your router view in the `Layout` component.
* Optionnally, set a default layout. You can use one of our built-in layouts, or create your own. The default layout will be applied to all routes for which no layout is set.

```
<template>
  <Layout :default-layout="defaultLayout">
    <router-view />
  </Layout>
  <notifications />
</template>

<script setup lang="ts">
import { BasicLayout } from "@dzangolab/vue3-layout";
import { computed } from "vue";

const defaultLayout = computed(() => {
  return BasicLayout;
});
</script>
```

### Set the layout for an individual route

The default layout set as the `default-layout` prop on the `Layout` component will apply by default to all routes, except those for which an explicit route is declared.

You can also customize the layout for individual routes by adding a `meta.layout` attribute to the route. The value of the attribute is the layout component you wish to use.

```
import { createRouter, createWebHistory } from "vue-router";

import CustomLayout from "@/layouts/CustomLayout.vue";
import Home from "@/views/Home.vue";
import ViewWithCustomLayout from "@/views/ViewWithCustomLayout.vue";

import type { RouteMeta, Router, RouterOptions } from "vue-router";

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: HomeView,
      name: "home",
      path: "/",
    },
    {
      component: AboutView,
      meta: {
        layout: CustomLayout,
      },
      name: "custom",
      path: "/custom",
    },
  ],
} as RouterOptions);

export default router;
```

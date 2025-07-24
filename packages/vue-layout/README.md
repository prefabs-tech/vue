# Prefabs Tech Vue3 Layout Plugin

## Requirements

* `@prefabs.tech/vue3-config: >= 0.6.5`
* `vue: >= 3.2`
* `vue-router: >= 4.0`

## Installation

### npm

```bash
npm install @prefabs.tech/vue3-layout @prefabs.tech/vue3-config`
```

### yarn

```bash
yarn add @prefabs.tech/vue3-layout @prefabs.tech/vue3-config
```

### PNPM

```bash
pnpm add @prefabs.tech/vue3-layout @prefabs.tech/vue3-config
```

## Usage

### main.ts

Import and register the plugin in `main.ts`.

```ts
import layoutPlugin from "@prefabs.tech/vue3-layout";
import "@prefabs.tech/vue3-layout/dist/PrefabsTechVue3Layout.css";

app.use(layoutPlugin);

...

app.mount("#app");
```

### App.vue

* Wrap your router view in the `Layout` component.
* Optionnally, set a default layout. You can use one of our built-in layouts, or create your own. The default layout will be applied to all routes for which no layout is set.

```vue
<template>
  <Layout :default-layout="defaultLayout">
    <router-view />
  </Layout>
  <notifications />
</template>

<script setup lang="ts">
import { BasicLayout } from "@prefabs.tech/vue3-layout";
import { computed } from "vue";

const defaultLayout = computed(() => {
  return BasicLayout;
});
</script>
```

### Set the layout for an individual route

The default layout set as the `default-layout` prop on the `Layout` component will apply by default to all routes, except those for which an explicit route is declared.

You can also customize the layout for individual routes by adding a `meta.layout` attribute to the route. The value of the attribute is the layout component you wish to use.

```ts
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

## Configuration

| Name | Type | Description | Default value |
|------|------|-------------|---------------|
| `homeRoute` | `string` | The name of the "home" route, ie the route that points to your app's home page | `home` |
| `logo` `string` | The path to the logo | `/logo.png` |
| `mainMenu` | `{ name: string; route: string; }[]` | An array of items to display in the app header's main menu | none |


## CSS Variables

### Basic layout

| Name | Description | Default value |
|-------|------------|---------------|
| `layout-basic-gap` | Size of basic layout flex-box gap | `1rem` |
| `layout-basic-max-width` | Maximum width of header, main and footer elements | `1200px` |
| `layout-basic-padding-left` | Left padding for header, main and footer elements | `0.8rem` |
| `layout-basic-padding-right` | Right padding for header, main and footer elements | `0.8rem` |

### AppHeader

| Name | Description | Default value |
|-------|------------|---------------|
| `header-bg-color` | Color of header background | `transparent` |
| `header-border-color` | Color of header (bottom) border | `#4169e1` |
| `header-font-size` | Font size of header text | `1rem` |
| `header-padding-bottom` | Bottom padding for header | `0.8rem` |
| `header-padding-top` | Top padding for header | `0.8rem` |

### App footer

| Name | Description | Default value |
|-------|------------|---------------|
| `footer-bg-color` | Color of footer background | `transparent` |
| `footer-border-color` | Color of footer (top) border | `#4169e1` |
| `footer-font-size` | Font size of footer text | `1rem` |
| `footer-gap` | Size of footer flex-box gap | `0.5rem` |
| `footer-padding-bottom` | Bottom padding for footer | `0.8rem` |
| `footer-padding-top` | Top padding for footer | `0.8rem` |

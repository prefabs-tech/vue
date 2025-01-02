<template>
  <div class="demo">
    <Sidebar :menu="menu" class="demo-aside" no-header />
    <div class="demo-main">
      <Page :title="title" :sub-title="subTitle">
        <template #toolbar>
          <slot name="toolbar"></slot>
        </template>
        <slot></slot>
      </Page>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "UiPage",
};
</script>

<script setup lang="ts">
import { Sidebar } from "@dzangolab/vue3-layout";

import type { PropType } from "vue";

defineProps({
  subTitle: {
    default: undefined,
    required: false,
    type: String as PropType<string>,
  },
  title: {
    default: undefined,
    required: false,
    type: String as PropType<string>,
  },
});

const menu = [
  {
    name: "Get started",
    routeName: "",
  },
  {
    name: "Buttons",
    children: [
      {
        name: "Button",
        routeName: "button",
      },
    ],
  },
  {
    name: "Menu",
    children: [
      {
        name: "Dropdown",
        routeName: "dropdown",
      },
    ],
  },
  {
    name: "Messages",
    children: [
      {
        name: "Message",
        routeName: "message",
      },
    ],
  },
  {
    name: "Overlay",
    children: [
      {
        name: "Confirmation modal",
        routeName: "confirmationModal",
      },
      {
        name: "Modal",
        routeName: "modal",
      },
      {
        name: "Popup",
        routeName: "popup",
      },
      {
        name: "Tooltip",
        routeName: "tooltip",
      },
    ],
  },
  {
    name: "Panel",
    children: [
      {
        name: "Accordion",
        routeName: "accordion",
      },
      {
        name: "Card",
        routeName: "card",
      },
      {
        name: "Stepper",
        routeName: "stepper",
      },
      {
        name: "Tabbed panel",
        routeName: "tabbedPanel",
      },
    ],
  },
  {
    name: "Misc",
    children: [
      {
        name: "Badge",
        routeName: "badge",
      },
      {
        name: "Divider",
        routeName: "divider",
      },
      {
        name: "Grid container",
        routeName: "gridContainer",
      },
      {
        name: "Loading page",
        routeName: "loadingPage",
      },
      {
        name: "Sortable list",
        routeName: "sortableList",
      },
      {
        name: "Typography",
        routeName: "typography",
      },
      {
        name: "Youtube facade",
        routeName: "youtubeFacade",
      },
    ],
  },
];
</script>

<style lang="css">
@import "@/assets/css/demoPage.css";
</style>

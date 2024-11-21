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
  name: "FormPage",
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
    routeName: "form",
  },
  {
    name: "Date picker",
    routeName: "datePicker",
  },
  {
    name: "Email",
    routeName: "emailInput",
  },
  {
    name: "Input",
    routeName: "input",
  },
  {
    name: "Number",
    routeName: "numberInput",
  },
  {
    name: "Password",
    routeName: "passwordInput",
  },
  {
    name: "Select",
    routeName: "selectInput",
  },
  {
    name: "Switch",
    routeName: "switchInput",
  },
  {
    name: "Textarea",
    routeName: "textareaInput",
  },
  {
    name: "Text",
    routeName: "textInput",
  },
  {
    name: "Typeahead",
    routeName: "typeahead",
  },
];
</script>

<style lang="css">
@import "@/assets/css/form/demoPage.css";
</style>

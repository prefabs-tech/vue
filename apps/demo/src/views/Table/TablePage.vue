<template>
  <div class="demo">
    <Sidebar :menu="menu" class="demo-aside" no-header />
    <div class="demo-main">
      <Page class="demo-data-tables-page" :sub-title="subTitle" :title="title">
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
  name: "TablePage",
};
</script>

<script setup lang="ts">
import { useI18n } from "@dzangolab/vue3-i18n";
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

const { t } = useI18n();

const menu = [
  {
    name: t("table.label.getStarted"),
    routeName: "",
  },
  {
    name: t("table.label.components"),
    children: [
      {
        name: t("table.title"),
        routeName: "basicTable",
      },
      {
        name: t("table.label.tableFilters"),
        routeName: "tableFilters",
      },
    ],
  },
];
</script>

<style lang="css">
@import "@/assets/css/demoPage.css";
</style>

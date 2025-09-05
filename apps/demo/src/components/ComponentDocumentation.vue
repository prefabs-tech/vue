<template>
  <section v-if="propsData.length">
    <h2>{{ propsTableTitle ?? $t("common.properties") }}</h2>

    <Table
      :columns-data="propsColumns"
      :data="propsData"
      :paginated="false"
      :persist-state="false"
    />
  </section>

  <section v-if="slotsData.length">
    <h2>{{ $t("common.slots") }}</h2>

    <Table
      :columns-data="slotsColumns"
      :data="slotsData"
      :paginated="false"
      :persist-state="false"
    />
  </section>

  <section v-if="eventsData.length">
    <h2>{{ $t("common.events") }}</h2>

    <Table
      :columns-data="eventsColumns"
      :data="eventsData"
      :paginated="false"
      :persist-state="false"
    />
  </section>
</template>

<script lang="ts">
export default {
  name: "ComponentDocumentation",
};
</script>

<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Table } from "@prefabs.tech/vue3-tanstack-table";

defineProps({
  eventsData: {
    default: () => [],
    type: Array as Record<string, string>[],
  },
  propsData: {
    default: () => [],
    type: Array as Record<string, string>[],
  },
  propsTableTitle: {
    default: undefined,
    type: String,
  },
  slotsData: {
    default: () => [],
    type: Array as Record<string, string>[],
  },
});

const { t } = useI18n();

const eventsColumns = [
  {
    accessorKey: "name",
    header: t("common.event"),
  },
  {
    accessorKey: "payload",
    header: t("common.payload"),
  },
  {
    accessorKey: "description",
    header: t("common.description"),
  },
];

const propsColumns = [
  {
    accessorKey: "prop",
    header: t("common.property"),
  },
  {
    accessorKey: "type",
    header: t("common.type"),
  },
  {
    accessorKey: "default",
    header: t("common.default"),
  },
  {
    accessorKey: "description",
    header: t("common.description"),
  },
];

const slotsColumns = [
  {
    accessorKey: "name",
    header: t("common.name"),
  },
  {
    accessorKey: "props",
    header: t("common.props"),
  },
  {
    accessorKey: "description",
    header: t("common.description"),
  },
];
</script>

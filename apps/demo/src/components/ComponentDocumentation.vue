<template>
  <section v-if="propsData.length">
    <h2>{{ $t("common.properties", { value: propsTableTitle }) }}</h2>

    <Table :columns-data="propsColumns" :data="propsData" :paginated="false" />
  </section>

  <section v-if="slotsData.length">
    <h2>{{ $t("common.slots") }}</h2>

    <Table :columns-data="slotsColumns" :data="slotsData" :paginated="false" />
  </section>

  <section v-if="eventsData.length">
    <h2>{{ $t("common.events") }}</h2>

    <Table
      :columns-data="eventsColumns"
      :data="eventsData"
      :paginated="false"
    />
  </section>
</template>

<script lang="ts">
export default {
  name: "ComponentDocumentation",
};
</script>

<script setup lang="ts">
import { Table } from "@dzangolab/vue3-tanstack-table";

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
    default: "Properties",
    type: String,
  },
  slotsData: {
    default: () => [],
    type: Array as Record<string, string>[],
  },
});

const propsColumns = [
  {
    accessorKey: "prop",
    header: "Property",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "default",
    header: "Default",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];

const slotsColumns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];

const eventsColumns = [
  {
    accessorKey: "event",
    header: "Event",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];
</script>

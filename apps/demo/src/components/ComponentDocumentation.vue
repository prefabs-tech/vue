<template>
  <section v-if="propsData.length">
    <h2>{{ propsTableTitle ?? $t("common.properties") }}</h2>

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
    default: undefined,
    type: String,
  },
  slotsData: {
    default: () => [],
    type: Array as Record<string, string>[],
  },
});

const eventsColumns = [
  {
    accessorKey: "name",
    header: "Event",
  },
  {
    accessorKey: "payload",
    header: "Payload",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];

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
</script>

<template>
  <thead>
    <tr
      v-for="headerGroup in table.getHeaderGroups()"
      :key="headerGroup.id"
      class="header-row"
    >
      <th
        v-for="header in headerGroup.headers"
        :key="header.id"
        :class="[
          `column-${header.id}`,
          activeColumnClass(header.column),
          header.column.columnDef.enableSorting ? 'sortable' : '',
        ]"
        :colSpan="header.colSpan"
        @click="
          header.column.getCanSort()
            ? header.column.getToggleSortingHandler()?.($event)
            : null
        "
      >
        <div v-if="!header.isPlaceholder">
          <FlexRender
            :props="header.getContext()"
            :render="header.column.columnDef.header"
          />
          <Icon
            v-if="!header.column.getIsSorted() && header.column.getCanSort()"
            icon="ri:arrow-up-down-line"
            class="sort-icon"
          />
          <Icon
            v-if="header.column.getIsSorted() && header.column.getCanSort()"
            :icon="
              header.column.getIsSorted() === 'asc'
                ? 'mdi:arrow-up'
                : 'mdi:arrow-down'
            "
            class="sort-icon"
          />
        </div>
      </th>
    </tr>
  </thead>
</template>

<script lang="ts">
export default {
  name: "TableHeader",
};
</script>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { FlexRender } from "@tanstack/vue-table";

import type { Column, Table } from "@tanstack/vue-table";

defineProps({
  table: {
    required: true,
    type: Object as () => Table<unknown>,
  },
});

const activeColumnClass = (column: Column<unknown, unknown>) => {
  return column.getIsSorted() === "asc" || column.getIsSorted() === "desc"
    ? "highlight"
    : "";
};
</script>

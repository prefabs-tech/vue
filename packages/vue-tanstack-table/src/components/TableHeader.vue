<template>
  <thead>
    <tr
      v-for="headerGroup in table.getHeaderGroups()"
      :key="headerGroup.id"
      class="header-row"
    >
      <th
        v-for="header in headerGroup.headers"
        :key="`table-header-${header.id}`"
        :class="[
          activeColumnClass(header.column),
          `column-${header.id}`,
          header.column.columnDef.enableSorting ? 'sortable' : '',
        ]"
        :colSpan="header.colSpan"
        @click="
          header.column.getCanSort()
            ? header.column.getToggleSortingHandler()?.($event)
            : null
        "
      >
        <template v-if="!header.isPlaceholder">
          <FlexRender
            :props="header.getContext()"
            :render="header.column.columnDef.header"
          />
          <span class="sort-state">
            <Icon
              v-if="!header.column.getIsSorted() && header.column.getCanSort()"
              class="sort-icon"
              icon="fa-solid:sort"
            />
            <Icon
              v-if="header.column.getIsSorted() && header.column.getCanSort()"
              :icon="
                header.column.getIsSorted() === 'asc'
                  ? 'fa-solid:sort-up'
                  : 'fa-solid:sort-down'
              "
              class="sort-icon"
            />
          </span>
        </template>
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

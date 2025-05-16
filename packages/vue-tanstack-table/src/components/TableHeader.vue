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
        :data-align="
          getAlignValue({
            align: header.column.columnDef.align,
            dataType: header.column.columnDef.dataType,
          })
        "
        :style="{
          width: header.column.columnDef.width,
          maxWidth: header.column.columnDef.maxWidth,
          minWidth: header.column.columnDef.minWidth,
        }"
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
          <span v-if="header.column.columnDef.enableSorting" class="sort-state">
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

    <tr v-if="isFilterRowVisible" class="header-row filters">
      <th
        v-for="column in table.getVisibleLeafColumns()"
        :key="`table-filter-${column.id}`"
        :class="[
          activeColumnClass(column),
          column.id ? `column-${column.id}` : '',
          column.columnDef.className || '',
          column.getCanFilter()
            ? `filter ${column.columnDef.meta?.filterVariant}`
            : '',
        ]"
        :data-align="
          getAlignValue({
            align: column.columnDef.align,
            dataType: column.columnDef.dataType,
          })
        "
        :style="{
          width: column.columnDef.width,
          maxWidth: column.columnDef.maxWidth,
          minWidth: column.columnDef.minWidth,
        }"
      >
        <template v-if="column.getCanFilter()">
          <template v-if="column.columnDef.customFilterComponent">
            <component :is="column.columnDef.customFilterComponent(column)" />
          </template>
          <template
            v-else-if="column.columnDef.meta?.filterVariant === 'multiselect'"
          >
            <SelectInput
              :model-value="getColumnFilterValue(column)"
              :options="column.columnDef.meta?.filterOptions || []"
              :placeholder="column.columnDef.filterPlaceholder"
              :name="`multiselect-filter-${column.columnDef.accessorKey}`"
              multiple
              @update:model-value="column.setFilterValue($event)"
            />
          </template>
          <template
            v-else-if="column.columnDef.meta?.filterVariant === 'dateRange'"
          >
            <DatePicker
              :model-value="getColumnFilterValue(column)"
              name="`date-range-${column.columnDef.accessorKey}`"
              range
              @update:model-value="
                column.setFilterValue(getFormattedDateRange($event))
              "
            />
          </template>
          <template v-else>
            <DebouncedInput
              :id="`input-filter-${column.id}`"
              :debounce-time="inputDebounceTime"
              :model-value="
                typeof getColumnFilterValue(column) === 'string'
                  ? String(getColumnFilterValue(column))
                  : ''
              "
              :placeholder="column.columnDef.filterPlaceholder"
              @update:model-value="column.setFilterValue($event)"
            />
          </template>
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
import { DatePicker, SelectInput } from "@dzangolab/vue3-form";
import { DebouncedInput } from "@dzangolab/vue3-ui";
import { Icon } from "@iconify/vue";
import { FlexRender } from "@tanstack/vue-table";

import { getAlignValue } from "../utils";

import type { Column, Table } from "@tanstack/vue-table";

defineProps({
  inputDebounceTime: {
    default: undefined,
    type: Number,
  },
  isFilterRowVisible: {
    default: false,
    type: Boolean,
  },
  table: {
    required: true,
    type: Object as () => Table<unknown>,
  },
});

const activeColumnClass = (column: Column<unknown, unknown>) => {
  return column.getIsSorted() === "asc" ||
    column.getIsSorted() === "desc" ||
    column.getIsFiltered()
    ? "highlight"
    : "";
};

const getColumnFilterValue = (column: Column<unknown, unknown>) => {
  return column.getFilterValue() as string | string[];
};

const getFormattedDateRange = (dateRange: Date[]) => {
  if (!dateRange?.length) {
    return null;
  }

  return (dateRange as Date[])
    .map((date, index) => {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const time = index === 0 ? "00:00:00" : "23:59:59";
      const year = date.getFullYear();

      return `${year}-${month}-${day} ${time}`;
    })
    .filter((date) => date !== null);
};
</script>

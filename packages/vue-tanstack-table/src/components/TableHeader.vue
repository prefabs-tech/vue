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
            <template
              v-if="!header.column.getIsSorted() && header.column.getCanSort()"
            >
              <svg
                class="sort-icon"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 10.75H6a.74.74 0 0 1-.69-.46a.75.75 0 0 1 .16-.82l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 .16.82a.74.74 0 0 1-.69.46M7.81 9.25h8.38L12 5.06ZM12 20.75a.74.74 0 0 1-.53-.22l-6-6a.75.75 0 0 1-.16-.82a.74.74 0 0 1 .69-.46h12a.74.74 0 0 1 .69.46a.75.75 0 0 1-.16.82l-6 6a.74.74 0 0 1-.53.22m-4.19-6L12 18.94l4.19-4.19Z"
                  fill="currentColor"
                />
              </svg>
            </template>

            <template
              v-if="header.column.getIsSorted() && header.column.getCanSort()"
            >
              <svg
                v-if="header.column.getIsSorted() === 'asc'"
                class="sort-icon"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.53 7.97a.75.75 0 0 0-1.06 0l-7 7A.75.75 0 0 0 5 16.25h14a.75.75 0 0 0 .53-1.28z"
                  fill="currentColor"
                />
              </svg>

              <svg
                v-else
                class="sort-icon"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.75a.75.75 0 0 0-.53 1.28l7 7a.75.75 0 0 0 1.06 0l7-7A.75.75 0 0 0 19 7.75z"
                  fill="currentColor"
                />
              </svg>
            </template>
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
            v-else-if="
              column.columnDef.meta?.filterVariant === 'multiselect' ||
              column.columnDef.meta?.filterVariant === 'select'
            "
          >
            <SelectInput
              :model-value="getColumnFilterValue(column)"
              :options="column.columnDef.meta?.filterOptions || []"
              :placeholder="column.columnDef.filterPlaceholder"
              :name="`multiselect-filter-${column.columnDef.accessorKey}`"
              :multiple="column.columnDef.meta?.filterVariant === 'multiselect'"
              enable-tooltip
              @update:model-value="column.setFilterValue($event)"
            />
          </template>
          <template
            v-else-if="column.columnDef.meta?.filterVariant === 'dateRange'"
          >
            <DatePicker
              :model-value="getColumnFilterValue(column)"
              :placeholder="column.columnDef.filterPlaceholder"
              name="`date-range-${column.columnDef.accessorKey}`"
              range
              @update:model-value="
                column.setFilterValue(getFormattedDateRange($event))
              "
            />
          </template>
          <template
            v-else-if="column.columnDef.meta?.filterVariant === 'range'"
          >
            <div class="number-range-filter">
              <NumberInput
                :model-value="
                  Array.isArray(getColumnFilterValue(column)) &&
                  getColumnFilterValue(column)[0] !== null
                    ? Number(getColumnFilterValue(column)[0])
                    : undefined
                "
                :placeholder="column.columnDef.filterPlaceholder?.split(',')[0]"
                name="`range-${column.columnDef.accessorKey}-start`"
                @update:model-value="updateRangeFilter(column, 0, $event)"
              />
              <NumberInput
                :model-value="
                  Array.isArray(getColumnFilterValue(column)) &&
                  getColumnFilterValue(column)[1] !== null
                    ? Number(getColumnFilterValue(column)[1])
                    : undefined
                "
                :placeholder="
                  column.columnDef.filterPlaceholder?.split(',')[1] ??
                  column.columnDef.filterPlaceholder
                "
                name="`range-${column.columnDef.accessorKey}-end`"
                @update:model-value="updateRangeFilter(column, 1, $event)"
              />
            </div>
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
import { DatePicker, NumberInput, SelectInput } from "@prefabs.tech/vue3-form";
import { DebouncedInput } from "@prefabs.tech/vue3-ui";
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

const updateRangeFilter = (
  column: Column<unknown, unknown>,
  index: number,
  value: number | undefined,
): void => {
  const filterValue = column.getFilterValue();

  const currentFilter: (number | undefined)[] = Array.isArray(filterValue)
    ? [...filterValue]
    : [undefined, undefined];

  currentFilter[index] = value !== undefined ? Number(value) : undefined;

  const isFilterActive = currentFilter.some(
    (filterInput) => filterInput !== undefined,
  );

  column.setFilterValue(isFilterActive ? currentFilter : []);
};
</script>

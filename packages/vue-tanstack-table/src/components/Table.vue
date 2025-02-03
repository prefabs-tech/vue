<template>
  <div class="table-container">
    <div class="table-wrapper">
      <table :style="`width: ${table.getCenterTotalSize()}`">
        <TableHeader :table="table" />
        <TableBody :table="table" />
      </table>

      <template v-if="paginated && totalItems > 0">
        <slot name="pagination">
          <Pagination
            v-bind="paginationOptions"
            :current-page="pagination.pageIndex"
            :default-items-per-page="pagination.pageSize"
            :items-per-page-options="rowPerPageOptions"
            :total-items="totalItems"
            @update:current-page="table.setPageIndex"
            @update:items-per-page="table.setPageSize"
          />
        </slot>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "DataTable",
};
</script>

<script setup lang="ts">
import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useVueTable,
} from "@tanstack/vue-table";
import { computed, ref } from "vue";

import Pagination from "./Pagination.vue";
import TableBody from "./TableBody.vue";
import TableHeader from "./TableHeader.vue";
import {
  DEFAULT_PAGE_INDEX,
  DEFAULT_PAGE_PER_OPTIONS,
  DEFAULT_PAGE_SIZE,
} from "../constants";

import type { ColumnProperty } from "../types";
import type {
  AccessorFn,
  ColumnDef,
  DisplayColumnDef,
} from "@tanstack/vue-table";
import type { PropType } from "vue";

const props = defineProps({
  columnsData: {
    type: Array as PropType<ColumnProperty[]>,
    default: () => [],
  },
  data: {
    type: Array,
    default: () => [],
  },
  paginated: {
    default: true,
    type: Boolean,
  },
  paginationOptions: {
    default: () => ({}),
    type: Object,
  },
  rowPerPage: {
    default: DEFAULT_PAGE_SIZE,
    type: Number,
  },
  rowPerPageOptions: {
    default: () => DEFAULT_PAGE_PER_OPTIONS,
    type: Array as () => number[],
  },
});

const columnHelper = createColumnHelper();

const columns: ColumnDef<unknown, unknown>[] = [];

props.columnsData.forEach((column) => {
  const columnDef = columnHelper.accessor(
    column?.accessorKey as string as unknown as AccessorFn<unknown>,
    {
      header: () => column.header,
      footer: (props: { column: { id: string | number } }) => props.column.id,
      enableSorting:
        column.enableSorting !== undefined ? column.enableSorting : false,
    } as object as unknown as DisplayColumnDef<unknown>,
  ) as ColumnDef<unknown, unknown>;
  columns.push(columnDef);
});

const pagination = ref({
  pageIndex: DEFAULT_PAGE_INDEX,
  pageSize: !props.paginated ? props.data.length : props.rowPerPage,
});
const sorting = ref<SortingState>([]);

const totalItems = computed(
  () => table.value.getFilteredRowModel().rows?.length,
);

const table = computed(() =>
  useVueTable({
    columns,
    state: {
      pagination: pagination.value,
      get sorting() {
        return sorting.value;
      },
    },
    onPaginationChange: (updaterOrValue) => {
      pagination.value =
        typeof updaterOrValue === "function"
          ? updaterOrValue(pagination.value)
          : updaterOrValue;
    },
    onSortingChange: (updaterOrValue) => {
      sorting.value =
        typeof updaterOrValue === "function"
          ? updaterOrValue(sorting.value)
          : updaterOrValue;
    },
    columnResizeMode: "onChange",
    data: props.data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  }),
);
</script>

<style lang="css">
@import "../assets/css/index.css";
</style>

<template>
  <div class="table-container">
    <div class="table-wrapper">
      <table :style="`width: ${table.getCenterTotalSize()}`">
        <TableHeader :table="table" />
        <TableBody :table="table" />
      </table>
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
import { PropType, ref } from "vue";

import TableBody from "./TableBody.vue";
import TableHeader from "./TableHeader.vue";
import { DEFAULT_PAGE_SIZE } from "../constants";

import type { ColumnProperty } from "../types";
import type {
  AccessorFn,
  ColumnDef,
  DisplayColumnDef,
} from "@tanstack/vue-table";

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
  rowPerPage: {
    default: DEFAULT_PAGE_SIZE,
    type: Number,
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

const sorting = ref<SortingState>([]);

const table = useVueTable({
  columns,
  state: {
    pagination: {
      pageIndex: 0,
      pageSize: !props.paginated ? props.data.length : props.rowPerPage,
    },
    get sorting() {
      return sorting.value;
    },
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
});
</script>

<style lang="css">
@import "../assets/css/index.css";
</style>

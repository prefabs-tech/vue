<template>
  <div class="table-container">
    <span v-if="titleInfo" :data-align="titleInfo.align || 'center'">
      {{ titleInfo.text }}
    </span>
    <div class="table-wrapper">
      <table :style="`width: ${table.getCenterTotalSize()}`">
        <TableHeader :table="table" />
        <TableBody :table="table" />
        <tfoot>
          <slot name="footer" />
        </tfoot>
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

import type { ColumnDef } from "@tanstack/vue-table";
import type { PropType } from "vue";

const props = defineProps({
  columnsData: {
    type: Array as PropType<ColumnDef<unknown, unknown>[]>,
    default: () => [],
  },
  data: {
    type: Array,
    default: () => [],
  },
  initialSorting: {
    default: () => [],
    type: Array as PropType<SortingState>,
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
  titleInfo: {
    default: undefined,
    type: Object as () => { text: string; align?: string },
  },
});

const columns: ColumnDef<unknown, unknown>[] = [];

props.columnsData.forEach((column) => {
  columns.push({
    ...column,
    enableSorting: column.enableSorting ?? false,
  } as ColumnDef<unknown, unknown>);
});

const pagination = ref({
  pageIndex: DEFAULT_PAGE_INDEX,
  pageSize: !props.paginated ? props.data.length : props.rowPerPage,
});

const sorting = ref<SortingState>(props.initialSorting);

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

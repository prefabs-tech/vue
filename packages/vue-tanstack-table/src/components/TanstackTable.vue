<template>
  <div class="table-wrapper">
    <table :style="`width: ${table.getCenterTotalSize()}`">
      <div v-if="props.enableToggle" class="toggle-wrap">
        <button class="table-toggle" @click="toggleHeader">
          <Icon icon="mingcute:menu-fill" class="toggle-icon" />
        </button>
      </div>
      <colgroup>
        <col
          v-for="column in props.columns"
          :key="column.accessorKey"
          :style="`width: ${column.size}px`"
        />
      </colgroup>
      <thead :class="{ expand: expand }">
        <tr
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
        >
          <th
            v-for="header in headerGroup.headers"
            :key="header.id"
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
                v-if="
                  !header.column.getIsSorted() && header.column.getCanSort()
                "
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
      <tbody>
        <tr v-for="row in table.getRowModel().rows" :key="row.id">
          <td
            v-for="cell in row.getVisibleCells()"
            :key="cell.id"
            :data-label="cell.column.id"
          >
            <FlexRender
              :props="cell.getContext()"
              :render="cell.column.columnDef.cell"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div class="page-navigation-container">
      <div class="page-indicators-selection-container">
        <span class="page-number-indicators"
          >{{ table.getState().pagination.pageIndex + 1 }} of
          {{ pageCount }}</span
        >
        <span class="go-to-page-container">
          <span class="go-to-page-text"> Go to page: </span>
          <input
            class="page-input"
            type="number"
            :value="table.getState().pagination.pageIndex + 1"
            :max="pageCount"
            :min="1"
            @input="onPageChange($event)"
        /></span>
        <select
          :value="table.getState().pagination.pageSize"
          @change="setPageSize($event)"
        >
          <option
            v-for="pageSize in [10, 20, 30, 40, 50]"
            :key="pageSize"
            :value="pageSize"
          >
            Show {{ pageSize }}
          </option>
        </select>
      </div>
      <div class="page-navigation-buttons-container">
        <button
          class="page-navigation-button"
          :disabled="table.getState().pagination.pageIndex === 0 ? true : false"
          @click="getfirstPage()"
        >
          <Icon
            icon="material-symbols:keyboard-double-arrow-left-rounded"
            class="navigation-button-icon"
          />
        </button>
        <button
          class="page-navigation-button"
          :disabled="table.getState().pagination.pageIndex === 0 ? true : false"
          @click="getPreviousPage()"
        >
          <Icon
            icon="material-symbols:arrow-back-ios-new-rounded"
            class="navigation-button-icon"
          />
        </button>
        <button
          class="page-navigation-button"
          :disabled="
            table.getState().pagination.pageIndex === pageCount - 1
              ? true
              : false
          "
          @click="getNextPage()"
        >
          <Icon
            icon="material-symbols:arrow-forward-ios-rounded"
            class="navigation-button-icon"
          />
        </button>
        <button
          class="page-navigation-button"
          :disabled="
            table.getState().pagination.pageIndex === pageCount - 1
              ? true
              : false
          "
          @click="getLastPage()"
        >
          <Icon
            icon="material-symbols:keyboard-double-arrow-right-rounded"
            class="navigation-button-icon"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TanstackTable",
};
</script>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import {
  createColumnHelper,
  FlexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useVueTable,
} from "@tanstack/vue-table";
import { onMounted, PropType, ref, watch } from "vue";

import type { ColumnDef } from "@tanstack/vue-table";

type ColumnProperty = {
  accessorKey: string;
  header: string;
  size?: number;
  sort?: boolean;
};

const props = defineProps({
  columns: {
    type: Array as PropType<ColumnProperty[]>,
    default: () => [],
  },
  enableToggle: {
    type: Boolean,
    default: () => false,
  },
  fetchRows: {
    type: Function,
    required: true,
  },
  totalRows: {
    type: Number,
    required: true,
  },
});

const columnHelper = createColumnHelper<any>();

const columns: ColumnDef<unknown, unknown>[] = [];

props.columns.forEach((column) => {
  const columnDef = columnHelper.accessor(column.accessorKey, {
    header: () => column.header,
    footer: (props) => props.column.id,
    enableSorting: column.sort !== undefined ? column.sort : false,
  }) as ColumnDef<unknown, unknown>;
  columns.push(columnDef);
});

const rows = ref([]);
const pageSize = ref(10);
const pageIndex = ref(0);

const updateRows = async () => {
  try {
    rows.value = await props.fetchRows(pageSize.value, pageIndex.value);
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  updateRows();
});

watch([pageSize, pageIndex], () => {
  updateRows();
  pageCount.value = Math.ceil(props.totalRows / pageSize.value);
});

const sorting = ref<SortingState>([]);

const table = useVueTable({
  columns,
  state: {
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
  get data() {
    return rows.value;
  },
  getCoreRowModel: getCoreRowModel(),
  manualPagination: true,
  getSortedRowModel: getSortedRowModel(),
});

const pageCount = ref(1);
const pageNumber = ref(0);

pageCount.value = Math.ceil(props.totalRows / pageSize.value);

const expand = ref(false);

const toggleHeader = () => {
  expand.value = !expand.value;
};

const onPageChange = (e: Event) => {
  const input = e.target as HTMLInputElement;
  pageNumber.value = input.value ? Number(input.value) - 1 : 0;
  table.setPageIndex(pageNumber.value);
  pageIndex.value = pageNumber.value * pageSize.value;
};

const setPageSize = (e: Event) => {
  const input = e.target as HTMLInputElement;
  pageSize.value = input.value ? Number(input.value) : 10;
  table.setPageSize(pageSize.value);
  table.setPageIndex(pageNumber.value);
};

const getNextPage = () => {
  if (pageNumber.value < pageCount.value - 1) {
    pageNumber.value++;
  }
  pageIndex.value = pageNumber.value * pageSize.value;
  table.setPageIndex(pageNumber.value);
};

const getPreviousPage = () => {
  if (pageNumber.value > 0) {
    pageNumber.value--;
  }
  pageIndex.value = pageNumber.value * pageSize.value;
  table.setPageIndex(pageNumber.value);
};

const getfirstPage = () => {
  pageNumber.value = 0;
  pageIndex.value = pageNumber.value * pageSize.value;
  table.setPageIndex(pageNumber.value);
};

const getLastPage = () => {
  pageNumber.value = pageCount.value - 1;
  pageIndex.value = pageNumber.value * pageSize.value;
  table.setPageIndex(pageNumber.value);
};
</script>

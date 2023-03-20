<template>
  <table :style="`width: ${table.getCenterTotalSize()}`">
    <thead>
      <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
        <th
          v-for="header in headerGroup.headers"
          :key="header.id"
          :colSpan="header.colSpan"
          :style="`width: ${header.getSize()}`"
        >
          <div
            :className="`resizer ${
              header.column.getIsResizing() ? 'isResizing' : ''
            }`"
            :style="`
              transform:
                ${header.column.getIsResizing()}
                  ? translateX(${
                    table.getState().columnSizingInfo.deltaOffset
                  }px)
                  : ''`"
            @mousedown="header.getResizeHandler()"
          >
            <FlexRender
              v-if="!header.isPlaceholder"
              :props="header.getContext()"
              :render="header.column.columnDef.header"
            />
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in table.getRowModel().rows" :key="row.id">
        <td v-for="cell in row.getVisibleCells()" :key="cell.id">
          <FlexRender
            :props="cell.getContext()"
            :render="cell.column.columnDef.cell"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
export default {
  name: "TanstackTable",
};
</script>

<script setup lang="ts">
import {
  createColumnHelper,
  FlexRender,
  getCoreRowModel,
  useVueTable,
} from "@tanstack/vue-table";
import { PropType } from "vue";

import type { ColumnDef } from "@tanstack/vue-table";

type ColumnProperty = {
  accessorKey: string;
  header: string;
};

const props = defineProps({
  columns: {
    type: Array as PropType<ColumnProperty[]>,
    default: () => [],
  },
  rows: {
    type: Array,
    default: () => [],
  },
});

const columnHelper = createColumnHelper<any>();

const columns: ColumnDef<unknown, unknown>[] = [];

props.columns.forEach((column) => {
  const columnDef = columnHelper.accessor(column.accessorKey, {
    header: () => column.header,
    footer: (props) => props.column.id,
  }) as ColumnDef<unknown, unknown>;
  columns.push(columnDef);
});

const table = useVueTable({
  columns,
  enableColumnResizing: true,
  columnResizeMode: "onChange",
  data: props.rows,
  getCoreRowModel: getCoreRowModel(),
});
</script>

<style scoped>
table,
th,
td {
  border: 0.5px solid #f5f5f5;
  border-collapse: collapse;
}

table {
  background-color: #ffffff;
  border-bottom: 0.063rem solid #f5f5f5;
  border-collapse: collapse;
  font-size: 0.875em;
  width: 100%;
}

thead {
  background-color: #009879;
  color: #ffffff;
}

th {
  font-size: 1.2em;
  font-weight: 600;
  padding: 0.75rem 0;
}

tbody {
  border-bottom: 0.063rem solid #f5f5f5;
}

td {
  align-items: center;
  font-size: 1.2em;
  padding: 1rem 0;
}
</style>

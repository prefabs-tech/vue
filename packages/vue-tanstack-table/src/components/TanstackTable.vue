<template>
  <table :style="`width: ${table.getCenterTotalSize()}`">
    <thead>
      <tr :key="headerGroup.id" v-for="headerGroup in table.getHeaderGroups()">
        <th
          :colSpan="header.colSpan"
          :key="header.id"
          :style="`width: ${header.getSize()}`"
          v-for="header in headerGroup.headers"
        >
          <div
            :className="`resizer ${
              header.column.getIsResizing() ? 'isResizing' : ''
            }`"
            @mousedown="header.getResizeHandler()"
            :style="`
              transform:
                ${header.column.getIsResizing()}
                  ? translateX(${
                    table.getState().columnSizingInfo.deltaOffset
                  }px)
                  : ''`"
          >
            <FlexRender
              :props="header.getContext()"
              :render="header.column.columnDef.header"
              v-if="!header.isPlaceholder"
            />
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr :key="row.id" v-for="row in table.getRowModel().rows">
        <td :key="cell.id" v-for="cell in row.getVisibleCells()">
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

const columnHelper = createColumnHelper<any>();

const columns = [
  columnHelper.accessor("id", {
    header: () => "Id",
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor("name", {
    header: () => "Name",
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor("age", {
    header: () => "Age",
    footer: (props) => props.column.id,
  }),
];

const table = useVueTable({
  columns,
  enableColumnResizing: true,
  columnResizeMode: "onChange",
  data: [
    {
      id: 1,
      name: "John",
      age: 30,
    },
    {
      id: 2,
      name: "Jane",
      age: 25,
    },
    {
      id: 3,
      name: "Bob",
      age: 40,
    },
  ],
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

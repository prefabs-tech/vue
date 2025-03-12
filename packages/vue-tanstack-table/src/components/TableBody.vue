<template>
  <tbody>
    <template v-if="table.getRowModel().rows?.length">
      <tr
        v-for="row in table.getRowModel().rows"
        :key="`table-row-${row.id}`"
        :data-id="row.id"
        :data-selected="enableRowSelection ? row.getIsSelected() : undefined"
      >
        <td
          v-for="cell in row.getVisibleCells()"
          :key="`table-data-${row.id}-${cell.id}`"
          :class="[cell.column.id ? `cell-${cell.column.id}` : '']"
          :data-label="cell.column.id"
          :data-align="
            getAlignValue({
              align: cell.column.columnDef.align || 'left',
              dataType: cell.column.columnDef.dataType,
            })
          "
          :style="{
            width: cell.column.columnDef.width,
            maxWidth: cell.column.columnDef.maxWidth,
            minWidth: cell.column.columnDef.minWidth,
          }"
        >
          <FlexRender
            :props="cell.getContext()"
            :render="cell.column.columnDef.cell"
          />
        </td>
      </tr>
    </template>
    <template v-else>
      <tr>
        <td>
          {{ emptyTableMessage }}
        </td>
      </tr>
    </template>
  </tbody>
</template>

<script lang="ts">
export default {
  name: "TableBody",
};
</script>

<script setup lang="ts">
import { FlexRender } from "@tanstack/vue-table";

import { getAlignValue } from "../utils";

import type { Table } from "@tanstack/vue-table";

defineProps({
  emptyTableMessage: {
    default: "No results.",
    type: String,
  },
  enableRowSelection: Boolean,
  table: {
    required: true,
    type: Object as () => Table<unknown>,
  },
});
</script>

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
          <Tooltip
            v-if="cell.column.columnDef.tooltip"
            v-bind="cell.column.columnDef.tooltipOptions"
          >
            <FlexRender
              :props="cell.getContext()"
              :render="cell.column.columnDef.cell"
            />

            <template #content>
              <component
                :is="getTooltipContent(cell)"
                v-if="typeof cell.column.columnDef.tooltip === 'function'"
              />

              <template v-else>
                {{ getTooltipContent(cell) }}
              </template>
            </template>
          </Tooltip>
          <FlexRender
            v-else
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
import { Tooltip } from "@dzangolab/vue3-ui";
import { FlexRender } from "@tanstack/vue-table";

import { getAlignValue } from "../utils";

import type { Cell, Table } from "@tanstack/vue-table";

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

const getTooltipContent = (cell: Cell<unknown, unknown>) => {
  const tooltip = cell.column.columnDef.tooltip;

  if (typeof tooltip === "string") {
    return tooltip;
  } else if (typeof tooltip === "function") {
    return tooltip(cell);
  }

  return cell.getValue() as string;
};
</script>

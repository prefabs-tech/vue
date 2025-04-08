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
              align: cell.column.columnDef.align,
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
            <FlexRender v-bind="getFormattedValueContext(cell)" />

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
          <FlexRender v-else v-bind="getFormattedValueContext(cell)" />
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
import { formatDate, formatDateTime, Tooltip } from "@dzangolab/vue3-ui";
import { FlexRender } from "@tanstack/vue-table";

import { formatNumber, getAlignValue } from "../utils";

import type { Cell, NoInfer, Table } from "@tanstack/vue-table";

const props = defineProps({
  customFormatters: {
    default: () => ({}),
    type: Object as () => Record<string, (value: unknown) => unknown>,
  },
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

const getFormattedValueContext = (cell: Cell<unknown, unknown>) => {
  const cellContext = cell.getContext();
  const dateOptions = cell.column.columnDef.dateOptions;
  const numberOptions = cell.column.columnDef.numberOptions;
  const renderValue = cell.column.columnDef.cell;

  const getFormattedValue = (): NoInfer<never> => {
    const defaultCustomFormatters: Record<
      string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (value: any) => NoInfer<never>
    > = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      number: (value: any) =>
        formatNumber({
          value: Number(value),
          locale: numberOptions?.locale,
          formatOptions: numberOptions?.formatOptions,
        }) as NoInfer<never>,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      date: (value: any) =>
        formatDate(
          value,
          dateOptions?.locale,
          dateOptions?.formatOptions,
        ) as NoInfer<never>,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      datetime: (value: any) =>
        formatDateTime(
          value,
          dateOptions?.locale,
          dateOptions?.formatOptions,
        ) as NoInfer<never>,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      currency: (value: any) =>
        formatNumber({
          value: Number(value),
          locale: numberOptions?.locale,
          formatOptions: {
            style: "currency",
            currency: "USD",
            ...(numberOptions?.formatOptions && numberOptions.formatOptions),
          },
        }) as NoInfer<never>,
      ...props.customFormatters,
    };

    const dataType: string = cell.column.columnDef.dataType || "text";

    return (
      defaultCustomFormatters?.[dataType]?.(cellContext.getValue()) ||
      renderValue
    );
  };

  return {
    props: cellContext,
    render: getFormattedValue(),
  };
};

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

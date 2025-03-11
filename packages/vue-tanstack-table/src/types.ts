import type { Cell, Column } from "@tanstack/vue-table";
import type { VNode } from "vue";

declare module "@tanstack/vue-table" {
  interface ColumnDefBase<TData, TValue> {
    accessorKey?: string,
    align?: CellAlignmentType;
    dataType?: CellDataType;
    dateOptions?: Omit<FormatDateType, "date">;
    className?: string;
    customFilterComponent?: (column: Column<TData, TValue>) => VNode;
    filterPlaceholder?: string;
    maxWidth?: string;
    minWidth?: string;
    numberOptions?: Omit<FormatNumberType, "value">;
    tooltip?: boolean | string | ((cell: Cell<TData, TValue>) => VNode);
    tooltipOptions?: Object;
    width?: string;
  }
}

export type CellAlignmentType = "left" | "center" | "right";

export type CellDataType =
  | "currency"
  | "date"
  | "datetime"
  | "number"
  | string
  | "text";

export type { ColumnDef as TableColumnDefinition, SortingState } from "@tanstack/vue-table";

export type FormatDateType = {
  date: Date | string | number;
  formatOptions?: Intl.DateTimeFormatOptions;
  locale?: string;
};

export type FormatNumberType = {
  formatOptions?: Intl.NumberFormatOptions;
  locale?: string;
  value: number;
};

export type DataActionsMenuItem = {
  class?: string;
  confirmationOptions?: { body?: string; footer?: string; header?: string };
  disabled?: boolean | ((data: any) => boolean);
  display?: boolean | ((data: any) => boolean);
  label?: string;
  icon?: string;
  requireConfirmationModal?: boolean;
};

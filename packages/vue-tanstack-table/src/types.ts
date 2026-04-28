import type {
  Cell,
  Column,
  ColumnFiltersState,
  ColumnOrderState,
  PaginationState,
  RowData,
  SortingState,
  VisibilityState,
} from "@tanstack/vue-table";
import type { VNode } from "vue";

declare module "@tanstack/vue-table" {
  // eslint-disable-next-line
  interface ColumnDefBase<TData, TValue> {
    accessorKey?: string;
    align?: CellAlignmentType;
    className?: string;
    customFilterComponent?: (column: Column<TData, TValue>) => VNode;
    dataType?: CellDataType;
    dateOptions?: Omit<FormatDateType, "date">;
    filterPlaceholder?: string;
    maxWidth?: string;
    minWidth?: string;
    numberOptions?: Omit<FormatNumberType, "value">;
    tooltip?: ((cell: Cell<TData, TValue>) => VNode) | boolean | string;
    tooltipOptions?: object;
    width?: string;
  }

  interface ColumnFilter {
    filterFn?: TFilterFn;
  }

  // eslint-disable-next-line
  interface ColumnMeta<TData extends RowData, TValue> {
    filterOptions?: FilterOption[];
    filterVariant?: TFilterVariant;
    serverFilterFn?: TFilterFn;
  }
}

export type CellAlignmentType = "center" | "left" | "right";

export type CellDataType =
  | "currency"
  | "date"
  | "datetime"
  | "number"
  | "text"
  | string;

export type DataActionsMenuItem = {
  class?: string;
  confirmationOptions?:
    | ConfirmationOptions
    // eslint-disable-next-line
    | ((data: any) => ConfirmationOptions);
  // eslint-disable-next-line
  disabled?: boolean | ((data: any) => boolean);
  // eslint-disable-next-line
  display?: boolean | ((data: any) => boolean);
  icon?: string;
  key?: string;
  label?: string;
  requireConfirmationModal?: boolean;
};

export type FilterOption = {
  label: string;
  value: boolean | number | string;
};

export type FormatDateType = {
  date: Date | number | string;
  formatOptions?: Intl.DateTimeFormatOptions;
  locale?: string;
};

export type FormatNumberType = {
  formatOptions?: Intl.NumberFormatOptions;
  locale?: string;
  value: number;
};

export interface PersistentTableState {
  columnFilters: ColumnFiltersState;
  columnOrder?: ColumnOrderState;
  columnVisibility?: VisibilityState;
  pagination: PaginationState;
  sorting: SortingState;
}

export type TFilterRequest =
  | null
  | TSingleFilter
  | {
      AND: TFilterRequest[];
    }
  | {
      OR: TFilterRequest[];
    };

export type TFilterVariant =
  | "checkBox"
  | "date"
  | "dateRange"
  | "multiselect"
  | "range"
  | "select"
  | "text";

export type {
  FilterFn as FilterFunction,
  FilterFns as FilterFunctions,
  SortingState,
  ColumnDef as TableColumnDefinition,
  Row as TableRow,
} from "@tanstack/vue-table";

export type TLimit = null | number;

export type TOffset = null | number;

export type TRequestJSON = {
  filter: TFilterRequest;
  limit: TLimit;
  offset: TOffset;
  sort: TSortRequest;
};

export type TSingleFilter = {
  key: string;
  operator: string;
  value: string;
};

export type TSingleSort = {
  direction: TSortDirection;
  key: string;
};

// eslint-disable-next-line
export type TFilterFn =
  | "between"
  | "contains"
  | "endsWith"
  | "equals"
  | "greaterThan"
  | "greaterThanOrEqual"
  | "in"
  | "isEmpty"
  | "isNotEmpty"
  | "isNotNull"
  | "isNull"
  | "lessThan"
  | "lessThanOrEqual"
  | "like"
  | "notBetween"
  | "notEqual"
  | "notIn"
  | "notLike"
  | "startsWith";

export type TSortDirection = "" | "ASC" | "DESC";

export type TSortRequest = null | TSingleSort[];

type ConfirmationOptions = {
  body?: string | VNode;
  footer?: string | VNode;
  header?: string | VNode;
};

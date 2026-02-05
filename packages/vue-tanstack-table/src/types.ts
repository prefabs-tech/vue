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
    dataType?: CellDataType;
    dateOptions?: Omit<FormatDateType, "date">;
    className?: string;
    customFilterComponent?: (column: Column<TData, TValue>) => VNode;
    filterPlaceholder?: string;
    maxWidth?: string;
    minWidth?: string;
    numberOptions?: Omit<FormatNumberType, "value">;
    tooltip?: boolean | string | ((cell: Cell<TData, TValue>) => VNode);
    tooltipOptions?: object;
    width?: string;
  }

  interface ColumnFilter {
    filterFn?: TFilterFn;
  }

  // eslint-disable-next-line
  interface ColumnMeta<TData extends RowData, TValue> {
    serverFilterFn?: TFilterFn;
    filterVariant?: TFilterVariant;
    filterOptions?: FilterOption[];
  }
}

export type FilterOption = {
  label: string;
  value: boolean | number | string;
};

export type TFilterRequest =
  | TSingleFilter
  | {
      AND: TFilterRequest[];
    }
  | {
      OR: TFilterRequest[];
    }
  | null;

export type TLimit = number | null;

export type TOffset = number | null;

export type TSingleFilter = {
  key: string;
  operator: string;
  value: string;
};

export type TSingleSort = {
  key: string;
  direction: TSortDirection;
};

export type TSortRequest = TSingleSort[] | null;

export type CellAlignmentType = "left" | "center" | "right";

export type CellDataType =
  | "currency"
  | "date"
  | "datetime"
  | "number"
  | string
  | "text";

export type {
  ColumnDef as TableColumnDefinition,
  FilterFn as FilterFunction,
  FilterFns as FilterFunctions,
  Row as TableRow,
  SortingState,
} from "@tanstack/vue-table";

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

type ConfirmationOptions = {
  body?: string | VNode;
  footer?: string | VNode;
  header?: string | VNode;
};

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
  key?: string;
  label?: string;
  icon?: string;
  requireConfirmationModal?: boolean;
};

export interface PersistentTableState {
  columnFilters: ColumnFiltersState;
  columnOrder?: ColumnOrderState;
  columnVisibility?: VisibilityState;
  pagination: PaginationState;
  sorting: SortingState;
}

// eslint-disable-next-line
export type TFilterFn =
  | "contains"
  | "equals"
  | "startsWith"
  | "endsWith"
  | "greaterThan"
  | "lessThan"
  | "greaterThanOrEqual"
  | "lessThanOrEqual"
  | "in"
  | "notEqual"
  | "notIn"
  | "between"
  | "notBetween"
  | "isNull"
  | "isNotNull"
  | "isEmpty"
  | "isNotEmpty"
  | "like"
  | "notLike";

export type TFilterVariant =
  | "text"
  | "select"
  | "multiselect"
  | "date"
  | "dateRange"
  | "range"
  | "checkBox";

export type TRequestJSON = {
  filter: TFilterRequest;
  sort: TSortRequest;
  offset: TOffset;
  limit: TLimit;
};

export type TSortDirection = "ASC" | "DESC" | "";

export type { ColumnDef as TableColumnDefinition } from "@tanstack/vue-table";

export type ColumnProperty = {
  accessorKey: string;
  enableSorting?: boolean;
  header: string;
  size?: number;
};

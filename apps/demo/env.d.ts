/// <reference types="vite/client" />

import { FilterFunction } from "@dzangolab/vue3-tanstack-table";

declare module "@dzangolab/vue3-tanstack-table" {
  interface FilterFunctions {
    customEqualStringFilter: FilterFunction<unknown>;
    inDateRangeFilter: FilterFunction<unknown>;
  }
}

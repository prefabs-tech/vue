/// <reference types="vite/client" />

import { FilterFunction } from "@dzangolab/vue3-tanstack-table";

declare module "@dzangolab/vue3-tanstack-table" {
  interface FilterFunctions {
    inDateRangeFilter: FilterFunction<unknown>;
    customEqualStringFilter: FilterFunction<unknown>;
  }
}

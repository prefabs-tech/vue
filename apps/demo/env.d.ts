/// <reference types="vite/client" />

import { FilterFunction } from "@prefabs.tech/vue3-tanstack-table";

declare module "@prefabs.tech/vue3-tanstack-table" {
  interface FilterFunctions {
    customEqualStringFilter: FilterFunction<unknown>;
    inDateRangeFilter: FilterFunction<unknown>;
  }
}

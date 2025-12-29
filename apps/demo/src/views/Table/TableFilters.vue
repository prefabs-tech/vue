<template>
  <TablePage :title="$t('table.title')" class="demo data-table">
    <section>
      <h2>{{ $t("table.usage.filterableColumn") }}</h2>

      <div class="section-content">
        <Table id="filterable-column" :columns-data="columns" :data="data" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table id="filterable-column" :columns-data="columns" :data="data" /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
    
          import { city } from "./data";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array&lt;TableColumnDefinition&gt; = [
            {
              accessorKey: "email",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: "Search by email...",
              header: "Email",
            },
            {
              accessorKey: "name",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.search"),
              header: "Full name",
            },
            {
              accessorKey: "age",
              align: "right",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: `${t("table.placeholder.min")},${t("table.placeholder.max")}`,
              header: "Age",
              meta: {
                filterVariant: "range",
              },
            },
            {
              accessorKey: "city",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.city"),
              header: "City",
              meta: {
                filterVariant: "multiselect",
                filterOptions: city,
              },
            },
          ];
  
          const data = [
            {
              id: 1,
              name: "John Doe",
              email: "john.doe@example.com",
              age: 28,
              city: "New York",
            },
            {
              id: 2,
              name: "Jane Elizabeth Smith",
              email: "jane.smith@example.com",
              age: 32,
              city: "Los Angeles",
            },
            ...
          ]
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("table.usage.customStaticFilter") }}</h2>

      <div class="section-content">
        <Table
          id="custom-static-filter"
          :columns-data="customFilterColumns"
          :data="formatDemoData"
          :initial-sorting="[{ id: 'quantity', desc: true }]"
          :locale="String(locale)"
          :paginated="false"
          :table-options="{
            filterFns: {
              customEqualStringFilter: customEqualStringFilter,
              inDateRangeFilter: inDateRangeFilter,
            },
          }"
          class="custom-static-filter-table"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              id="custom-static-filter"
              :columns-data="customFilterColumns"
              :data="data"
              :initial-sorting="[{ id: 'quantity', desc: true }]"
              :locale="String(locale)"
              :paginated="false"
              :table-options="{
                filterFns: {
                  customEqualStringFilter: customEqualStringFilter,
                  inDateRangeFilter: inDateRangeFilter,
                },
              }"
              class="custom-static-filter-table"
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
          import { h, ref } from "vue";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const { locale, t } = useI18n();

          const customFilterColumns = [
            {
              accessorKey: "description",
              enableColumnFilter: true,
              enableSorting: true,
              filterFn: "customEqualStringFilter",
              filterPlaceholder: t("table.label.matchDescription"),
              header: "Description",
            },
            {
              accessorKey: "quantity",
              dataType: "number",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: `${t("table.placeholder.min")},${t("table.placeholder.max")}`,
              header: () => "Quantity",
              meta: {
                filterVariant: "range",
              },
              numberOptions: {
                locale: "en-IN",
              },
            },
            {
              accessorKey: "amount",
              dataType: "currency",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: `${t("table.placeholder.min")},${t("table.placeholder.max")}`,
              header: "Amount",
              meta: {
                filterVariant: "range",
              },
              numberOptions: {
                formatOptions: {
                  currency: "EUR",
                },
                locale: "en-US",
              },
            },
            {
              accessorKey: "date",
              customFilterComponent: (column) => {
                return h(
                  "div",
                  {
                    class: "filter-date",
                  },
                  [
                    h(DatePicker, {
                      modelValue: dateRange.value,
                      multiCalendars: true,
                      name: "date-range",
                      placeholder: t("table.label.dateRange"),
                      range: true,
                      "onUpdate:modelValue": (value) => {
                        dateRange.value = value;
                        column.setFilterValue(value);
                      },
                    }),
                  ],
                );
              },
              dataType: "date",
              enableColumnFilter: true,
              enableSorting: true,
              filterFn: "inDateRangeFilter",
              filterPlaceholder: t("table.placeholder.dateRange"),
              header: "Date",
            },
            {
              accessorKey: "action",
              cell: () =>
                h(ButtonElement, {
                  iconLeft: "pi pi-eye",
                  rounded: true,
                  variant: "textOnly",
                }),
              dataType: "other",
              header: () =>
                h("i", {
                  class: "pi pi-cog",
                }),
            },
          ];
  
          const data = [
            {
              id: 1001,
              amount: 1_234_567.89,
              quantity: 420,
              date: null,
              datetime: null,
              description: "Purchase of equipment",
            },
            {
              id: 1002,
              amount: 987_654.32,
              quantity: 175,
              date: new Date("2023-12-01T12:30:00"),
              datetime: "2023-12-01T11:00:00",
              description: "Office rent payment",
            },
            ...
          ];

          const dateRange = ref([]);

          const customEqualStringFilter: FilterFunction&lt;any&gt; = (
            row,
            columnId,
            value: string,
          ) => {
            if (value.includes(row.getValue(columnId) as string)) {
              return true;
            }

            return false;
          };

          const inDateRangeFilter: FilterFunction&lt;any&gt; = (
              row,
              columnId,
              value: [Date, Date],
            ) => {
              if (!value || !value[0] || !value[1]) {
                return true;
              }

              const columnDate = row.getValue(columnId)
                ? new Date(row.getValue(columnId) as Date)
                : null;
              const endDate = new Date(value[1]);
              const startDate = new Date(value[0]);

              if (
                columnDate &&
                startDate.getTime() <= columnDate.getTime() &&
                columnDate.getTime() < endDate.getTime()
              ) {
                return true;
              } else {
                return false;
              }
            };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("table.usage.customFilter") }}</h2>

      <div class="section-content">
        <Table
          id="custom-filter"
          :columns-data="customColumns"
          :data="data.slice(10, 15)"
          :initial-sorting="[{ id: 'email', desc: false }]"
          is-server-table
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              id="custom-filter"
              :columns-data="customColumns"
              :data="data.slice(10, 15)"
              :initial-sorting="[{ id: 'email', desc: false }]"
              is-server-table
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
          import { DebouncedInput } from "@prefabs.tech/vue3-ui";
          import { h, ref } from "vue";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const { t } = useI18n();

          const customColumns = [
            ...columns.map((columnData) => {
              if (columnData.accessorKey === "email") {
                return {
                  ...columnData,
                  customFilterComponent: (column) => {
                    return h(DebouncedInput, {
                      debounceTime: 200,
                      modelValue: column.getFilterValue() as string,
                      placeholder: t("table.label.customFilter"),
                      "onUpdate:modelValue": (value) => {
                        column.setFilterValue(value);
                      },
                    });
                  },
                  meta: {
                    serverFilterFn: "contains",
                  },
                };
              } else if (columnData.accessorKey === "age") {
                return {
                  ...columnData,
                  meta: {
                    filterVariant: "range",
                  },
                }
              }

              return columnData;
            }),
          ];
  
          const data = [
            ...
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("table.usage.equalServerFilter") }}</h2>

      <div class="section-content">
        <Table
          id="equal-server-filter"
          :columns-data="equalFilterColumns"
          :data="data.slice(10, 15)"
          :initial-sorting="[{ id: 'email', desc: false }]"
          is-server-table
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              id="equal-server-filter"              :columns-data="equalFilterColumns"
              :data="data.slice(10, 15)"
              :initial-sorting="[{ id: 'email', desc: false }]"
              is-server-table
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
          import { h, ref } from "vue";

          const equalFilterColumns = [
            ...columns.map((columnData) => {
              if (columnData.accessorKey === "email") {
                return {
                  ...columnData,
                  meta: {
                    serverFilterFn: "equals",
                  },
                };
              } else if (columnData.accessorKey === "age") {
                return {
                  ...columnData,
                  meta: {
                    filterVariant: "range",
                  },
                };
              }

              return columnData;
            }),
          ];
  
          const data = [
            ...
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </TablePage>
</template>

<script lang="ts">
export default {
  name: "TableFilters",
};
</script>

<script setup lang="ts">
import { DatePicker } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Table } from "@prefabs.tech/vue3-tanstack-table";
import { ButtonElement, DebouncedInput } from "@prefabs.tech/vue3-ui";
import { h, ref } from "vue";

import { city, data, formatDemoData } from "./data";
import TablePage from "./TablePage.vue";

import type {
  FilterFunction,
  TableColumnDefinition,
} from "@prefabs.tech/vue3-tanstack-table";

const { locale, t } = useI18n();

const columns: Array<TableColumnDefinition<unknown, unknown>> = [
  {
    accessorKey: "email",
    enableColumnFilter: true,
    enableSorting: true,
    filterPlaceholder: "Search by email...",
    header: "Email",
  },
  {
    accessorKey: "name",
    enableColumnFilter: true,
    enableSorting: true,
    filterPlaceholder: t("table.placeholder.search"),
    header: "Full name",
  },
  {
    accessorKey: "age",
    align: "right",
    enableColumnFilter: true,
    enableSorting: true,
    filterPlaceholder: `${t("table.placeholder.min")},${t("table.placeholder.max")}`,
    header: "Age",
    meta: {
      filterVariant: "range",
    },
  },
  {
    accessorKey: "city",
    enableColumnFilter: true,
    enableSorting: true,
    filterPlaceholder: t("table.placeholder.city"),
    header: "City",
    meta: {
      filterVariant: "multiselect",
      filterOptions: city,
    },
  },
];

const customColumns = [
  ...columns.map((columnData) => {
    if (columnData.accessorKey === "email") {
      return {
        ...columnData,
        customFilterComponent: (column) => {
          return h(DebouncedInput, {
            debounceTime: 200,
            modelValue: column.getFilterValue() as string,
            placeholder: t("table.label.customFilter"),
            "onUpdate:modelValue": (value) => {
              column.setFilterValue(value);
            },
          });
        },
        meta: {
          serverFilterFn: "contains",
        },
      };
    } else if (columnData.accessorKey === "age") {
      return {
        ...columnData,
        meta: {
          filterVariant: "range",
        },
      };
    }

    return columnData;
  }),
];

const customFilterColumns: Array<TableColumnDefinition<unknown, unknown>> = [
  {
    accessorKey: "description",
    enableColumnFilter: true,
    enableSorting: true,
    filterFn: "customEqualStringFilter",
    filterPlaceholder: t("table.label.matchDescription"),
    header: "Description",
  },
  {
    accessorKey: "quantity",
    dataType: "number",
    enableColumnFilter: true,
    enableSorting: true,
    filterPlaceholder: `${t("table.placeholder.min")},${t("table.placeholder.max")}`,
    header: () => "Quantity",
    meta: {
      filterVariant: "range",
    },
    numberOptions: {
      locale: "en-IN",
    },
  },
  {
    accessorKey: "amount",
    dataType: "currency",
    enableColumnFilter: true,
    enableSorting: true,
    filterPlaceholder: `${t("table.placeholder.min")},${t("table.placeholder.max")}`,
    header: "Amount",
    meta: {
      filterVariant: "range",
    },
    numberOptions: {
      formatOptions: {
        currency: "EUR",
      },
      locale: "en-US",
    },
  },
  {
    accessorKey: "date",
    customFilterComponent: (column) => {
      return h(
        "div",
        {
          class: "filter-date",
        },
        [
          h(DatePicker, {
            modelValue: dateRange.value,
            multiCalendars: true,
            name: "date-range",
            placeholder: t("table.label.dateRange"),
            range: true,
            "onUpdate:modelValue": (value) => {
              dateRange.value = value;
              column.setFilterValue(value);
            },
          }),
        ],
      );
    },
    dataType: "date",
    enableColumnFilter: true,
    enableSorting: true,
    filterFn: "inDateRangeFilter",
    filterPlaceholder: t("table.placeholder.dateRange"),
    header: "Date",
  },
  {
    accessorKey: "action",
    cell: () =>
      h(ButtonElement, {
        iconLeft: "pi pi-eye",
        rounded: true,
        variant: "textOnly",
      }),
    dataType: "other",
    header: () =>
      h("i", {
        class: "pi pi-cog",
      }),
  },
];

const equalFilterColumns = [
  ...columns.map((columnData) => {
    if (columnData.accessorKey === "email") {
      return {
        ...columnData,
        meta: {
          serverFilterFn: "equals",
        },
      };
    } else if (columnData.accessorKey === "age") {
      return {
        ...columnData,
        meta: {
          filterVariant: "range",
        },
      };
    }

    return columnData;
  }),
];

const dateRange = ref([]);

const customEqualStringFilter: FilterFunction<unknown> = (
  row,
  columnId,
  value: string,
) => {
  if (value.includes(row.getValue(columnId) as string)) {
    return true;
  }

  return false;
};

const inDateRangeFilter: FilterFunction<unknown> = (
  row,
  columnId,
  value: [Date, Date],
) => {
  if (!value || !value[0] || !value[1]) {
    return true;
  }

  const columnDate = row.getValue(columnId)
    ? new Date(row.getValue(columnId) as Date)
    : null;
  const endDate = new Date(value[1]);
  const startDate = new Date(value[0]);

  if (
    columnDate &&
    startDate.getTime() <= columnDate.getTime() &&
    columnDate.getTime() < endDate.getTime()
  ) {
    return true;
  } else {
    return false;
  }
};
</script>

<style lang="css">
@import "../../assets/css/table/table.css";
</style>

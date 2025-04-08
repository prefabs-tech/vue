<template>
  <TablePage :title="$t('table.title')" class="demo data-table">
    <template #toolbar>
      <ButtonElement
        :label="$t('common.back')"
        icon-left="pi pi-chevron-left"
        size="medium"
        variant="textOnly"
        @click="$router.push('/table')"
      />
    </template>

    <section>
      <h2>{{ $t("table.usage.filterableColumn") }}</h2>

      <div class="section-content">
        <Table :columns-data="columns" :data="data" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table :columns-data="columns" :data="data" /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array&lt;TableColumnDefinition&gt; = [
            {
              accessorKey: "email",
              enableSorting: true,
              header: "Email",
              enableColumnFilter: true,
              filterPlaceholder: "Search by email...",
            },
            {
              accessorKey: "name",
              header: "Full name",
            },
            {
              align: "right",
              accessorKey: "age",
              header: "Age",
            },
            {
              accessorKey: "city",
              header: "City",
              enableColumnFilter: true,
              filterPlaceholder: "Select city",
              meta: {
                filterVariant: "multiselect",
                filterOptions: [
                  {
                    value: "Atlanta",
                    label: "Atlanta",
                  },
                  {
                    value: "Chicago",
                    label: "Chicago",
                  },
                  {
                    value: "Boston",
                    label: "Boston",
                  },
                  {
                    value: "Denver",
                    label: "Denver",
                  },
                ],
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
          :columns-data="customFilterColumns"
          :data="formatDemoData"
          :initial-sorting="[{ id: 'quantity', desc: true }]"
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
              :columns-data="customFilterColumns"
              :data="data"
              :initial-sorting="[{ id: 'quantity', desc: true }]"
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
          import { DatePicker } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";
          import { Table } from "@dzangolab/vue3-tanstack-table";
          import { h, ref } from "vue";

          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const { t } = useI18n();

          const customFilterColumns: Array&lt;TableColumnDefinition&lt;unknown, unknown&gt;&gt; = [
          {
            accessorKey: "description",
            enableColumnFilter: true,
            filterFn: "customEqualStringFilter",
            filterPlaceholder: t("table.label.matchDescription"),
            header: "Description",
          },
          {
            accessorKey: "quantity",
            dataType: "number",
            enableSorting: true,
            header: "Quantity",
            numberOptions: {
              locale: "en-IN",
            },
          },
          {
            accessorKey: "amount",
            dataType: "currency",
            header: "Amount",
            numberOptions: {
              locale: "en-US",
              formatOptions: {
                currency: "EUR",
              },
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
            filterFn: "inDateRangeFilter",
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
            header: () => h("i", {
              class: "pi pi-cog"
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
  </TablePage>
</template>

<script lang="ts">
export default {
  name: "TableFilters",
};
</script>

<script setup lang="ts">
import { DatePicker } from "@dzangolab/vue3-form";
import { useI18n } from "@dzangolab/vue3-i18n";
import { Table } from "@dzangolab/vue3-tanstack-table";
import { ButtonElement } from "@dzangolab/vue3-ui";
import { h, ref } from "vue";

import { data, formatDemoData } from "./data";
import TablePage from "./TablePage.vue";

import type {
  FilterFunction,
  TableColumnDefinition,
} from "@dzangolab/vue3-tanstack-table";

const { t } = useI18n();

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
    header: "Full name",
  },
  {
    accessorKey: "age",
    align: "right",
    header: "Age",
  },
  {
    accessorKey: "city",
    enableColumnFilter: true,
    filterPlaceholder: "Select city",
    header: "City",
    meta: {
      filterVariant: "multiselect",
      filterOptions: [
        {
          label: "Atlanta",
          value: "Atlanta",
        },
        {
          label: "Chicago",
          value: "Chicago",
        },
        {
          label: "Boston",
          value: "Boston",
        },
        {
          label: "Denver",
          value: "Denver",
        },
      ],
    },
  },
];

const customFilterColumns: Array<TableColumnDefinition<unknown, unknown>> = [
  {
    accessorKey: "description",
    enableColumnFilter: true,
    filterFn: "customEqualStringFilter",
    filterPlaceholder: t("table.label.matchDescription"),
    header: "Description",
  },
  {
    accessorKey: "quantity",
    dataType: "number",
    enableSorting: true,
    header: "Quantity",
    numberOptions: {
      locale: "en-IN",
    },
  },
  {
    accessorKey: "amount",
    dataType: "currency",
    header: "Amount",
    numberOptions: {
      locale: "en-US",
      formatOptions: {
        currency: "EUR",
      },
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
    filterFn: "inDateRangeFilter",
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

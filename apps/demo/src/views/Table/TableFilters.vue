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
  </TablePage>
</template>

<script lang="ts">
export default {
  name: "SortableTable",
};
</script>

<script setup lang="ts">
import { Table } from "@dzangolab/vue3-tanstack-table";
import { ButtonElement } from "@dzangolab/vue3-ui";

import { data } from "./data";
import TablePage from "./TablePage.vue";

import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";

const columns: Array<TableColumnDefinition<unknown, unknown>> = [
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
</script>

<style lang="css">
@import "../../assets/css/table/table.css";
</style>

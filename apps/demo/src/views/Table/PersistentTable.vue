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
      <h2>{{ $t("table.usage.persistentState") }}</h2>

      <p>{{ $t("table.usage.persistentInstruction") }}</p>
      <div class="section-content">
        <Table
          id="persistent-state"
          :columns-data="columns"
          :data="data"
          :initial-sorting="[{ id: 'email', desc: true }]"
          persist-state
          show-column-action
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              id="persistent-state"
              :columns-data="columns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: true }]"
              persist-state
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
    
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
              filterPlaceholder: "Search",
              header: "Full name",
            },
            {
              align: "right",
              accessorKey: "age",
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
              filterPlaceholder: "Select city",
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
  </TablePage>
</template>

<script lang="ts">
export default {
  name: "PersistentTable",
};
</script>

<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Table } from "@prefabs.tech/vue3-tanstack-table";
import { ButtonElement } from "@prefabs.tech/vue3-ui";

import { city, data } from "./data";
import TablePage from "./TablePage.vue";

import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";

const { t } = useI18n();

const columns: Array<TableColumnDefinition<unknown, unknown>> = [
  {
    accessorKey: "email",
    enableColumnFilter: true,
    enableSorting: true,
    filterPlaceholder: t("table.label.searchByEmail"),
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
    align: "right",
    accessorKey: "age",
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
</script>

<style lang="css">
@import "../../assets/css/table/table.css";
</style>

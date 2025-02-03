<template>
  <TablePage :title="$t('table.title')" class="demo data-table">
    <template #toolbar>
      <router-link :to="{ name: 'table' }" class="back">
        {{ $t("common.back") }}
      </router-link>
    </template>

    <section>
      <h2>{{ $t("table.usage.basic") }}</h2>

      <div class="section-content">
        <Table
          :columns-data="columns"
          :data="data.slice(0, 15)"
          :paginated="false"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              :columns-data="columns"
              :data="data"
              :paginated="false"
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import TablePage from "./TablePage.vue";
    
          import type { ColumnProperty } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array&lt;ColumnProperty&gt; = [
            {
              accessorKey: "email",
              enableSorting: true,
              header: "Email",
            },
            {
              accessorKey: "name",
              header: "Full name",
            },
            {
              accessorKey: "age",
              header: "Age",
              align: "right",
            },
            {
              accessorKey: "city",
              header: "City",
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
      <h2>{{ $t("table.usage.pagination") }}</h2>

      <div class="section-content">
        <Table :columns-data="columns" :data="data" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table :columns-data="columns" :data="data" /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import TablePage from "./TablePage.vue";
    
          import type { ColumnProperty } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array&lt;ColumnProperty&gt; = [
            {
              accessorKey: "email",
              enableSorting: true,
              header: "Email",
            },
            {
              accessorKey: "name",
              header: "Full name",
            },
            {
              accessorKey: "age",
              header: "Age",
              align: "right",
            },
            {
              accessorKey: "city",
              header: "City",
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

import { data } from "./data";
import TablePage from "./TablePage.vue";

import type { ColumnProperty } from "@dzangolab/vue3-tanstack-table";

const columns: Array<ColumnProperty> = [
  {
    accessorKey: "email",
    enableSorting: true,
    header: "Email",
  },
  {
    accessorKey: "name",
    header: "Full name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "city",
    header: "City",
  },
];
</script>

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
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array&lt;TableColumnDefinition&gt; = [
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
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array&lt;TableColumnDefinition&gt; = [
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
      <h2>{{ $t("table.usage.sortable") }}</h2>

      <div class="section-content">
        <Table
          :columns-data="sortableColumns"
          :data="data"
          :initial-sorting="[{ id: 'email', desc: false }]"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              :columns-data="sortableColumns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array&lt;TableColumnDefinition&gt; = [
            ...
          ];
  
          const data = [
            ...
          ]

          const sortableColumns = columns.map((column) => ({
            ...columns,
            enableSorting: true,
          }));
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("table.usage.title") }}</h2>

      <div class="section-content">
        <Table
          :columns-data="columns"
          :data="data.slice(0, 5)"
          :title-info="{ text: $t('table.label.users'), align: 'left' }"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table 
              :columns-data="columns"
              :data="data"
              :title-info="{ text: 'Users', align: 'left' }"
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array&lt;TableColumnDefinition&gt; = [
            ...
          ];
  
          const data = [
            ...
          ]
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("table.usage.footer") }}</h2>

      <div class="section-content">
        <Table :columns-data="columns" :data="data">
          <template #footer>
            {{ `${$t("table.label.totalRecords")}: ${data.length ?? "0"}` }}
          </template>
        </Table>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table :columns-data="columns" :data="data"&gt;
              &lt;template #footer&gt;
                &lbrace;&lbrace; `Total records: ${data.length ?? "0"}` &rbrace;&rbrace;
              &lt;/template&gt;
            &lt;/Table&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array&lt;TableColumnDefinition&gt; = [
            ...
          ];
  
          const data = [
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
  },
];

const sortableColumns = columns.map((column) => ({
  ...column,
  enableSorting: true,
}));
</script>

<style lang="css">
@import "../../assets/css/table/table.css";
</style>

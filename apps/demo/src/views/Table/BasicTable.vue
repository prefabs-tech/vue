<template>
  <TablePage
    :subtitle="$t('table.subtitle')"
    :title="$t('table.title')"
    class="demo data-table"
  >
    <section>
      <h2>{{ $t("table.usage.basic") }}</h2>

      <div class="section-content">
        <Table
          id="basic"
          :columns-data="columns"
          :data="data.slice(0, 15)"
          :paginated="false"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              id="basic"
              :columns-data="columns"
              :data="data"
              :paginated="false"
            /&gt;
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
              filterPlaceholder: t("table.placeholder.search"),
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
        <Table id="pagination" :columns-data="columns" :data="data" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table id="pagination" :columns-data="columns" :data="data" /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array&lt;TableColumnDefinition&gt; = [
            {
              accessorKey: "email",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.search"),
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
          id="sortable"
          :columns-data="sortableColumns"
          :data="data"
          :initial-sorting="[{ id: 'email', desc: false }]"
          show-reset-button
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              id="sortable"
              :columns-data="sortableColumns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
              show-reset-button
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
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
      <h2>{{ $t("table.usage.rowSelection") }}</h2>

      <div class="section-content">
        <Table
          id="row-selection"
          :columns-data="columns"
          :data="data.slice(0, 5)"
          :initial-sorting="[{ id: 'email', desc: false }]"
          enable-row-selection
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              id="row-selection"
              :columns-data="columns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
              enable-row-selection
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
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
      <h2>{{ $t("table.usage.tooltip") }}</h2>

      <div class="section-content">
        <Table
          id="tooltip"
          :columns-data="columnsWithTooltip"
          :data="data.slice(0, 5)"
          :initial-sorting="[{ id: 'email', desc: false }]"
          enable-row-selection
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
            &lt;template&gt;
              &lt;Table
                id="tooltip"
                :columns-data="columnsWithTooltip"
                :data="data"
                :initial-sorting="[{ id: 'email', desc: false }]"
                enable-row-selection
              /&gt;
            &lt;/template&gt;
      
            &lt;script setup lang="ts"&gt;
            import { Table } from "@prefabs.tech/vue3-tanstack-table";
      
            import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
      
            const columns: Array&lt;TableColumnDefinition&gt; = [
              ...
            ];
    
            const data = [
              ...
            ];
  
            const tooltipPositions = ["right", "top", "bottom", "left"];
  
            const columnsWithTooltip = columns.map((column, index) => ({
              ...column,
              tooltip: true,
              tooltipOptions: {
                position: tooltipPositions[index],
              },
            }));
            &lt;/script&gt;
          </SshPre>
          <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("table.usage.columnAlignment") }}</h2>

      <div class="section-content">
        <Table
          id="alignment"
          :columns-data="alignmentColumns"
          :data="data.slice(0, 5)"
          :initial-sorting="[{ id: 'email', desc: false }]"
          enable-row-selection
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              id="alignment"
              :columns-data="alignmentColumns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
              enable-row-selection
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const alignmentColumns = [
            {
              accessorKey: "email",
              align: "left",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.search"),
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
              align: "center",
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
            ...
          ]
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("table.usage.columnAction") }}</h2>

      <div class="section-content">
        <Table
          id="column-action"
          :columns-data="columns"
          :data="data.slice(0, 5)"
          :initial-sorting="[{ id: 'email', desc: false }]"
          show-column-action
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              id="column-action"
              :columns-data="columns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
              show-column-action
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
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
      <h2>{{ $t("table.usage.title") }}</h2>

      <div class="section-content">
        <Table
          id="title"
          :columns-data="columns"
          :data="data.slice(0, 5)"
          :title-info="{ text: $t('table.label.users'), align: 'left' }"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table 
              id="title"
              :columns-data="columns"
              :data="data"
              :title-info="{ text: 'Users', align: 'left' }"
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
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
        <Table id="footer" :columns-data="columns" :data="data">
          <template #footer>
            <tr>
              <td :colspan="columns.length">
                {{ `${$t("table.label.totalRecords")}: ${data.length ?? "0"}` }}
              </td>
            </tr>
          </template>
        </Table>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table id="footer" :columns-data="columns" :data="data"&gt;
              &lt;template #footer&gt;
                &lt;tr&gt;
                  &lt;td :colspan="columns.length"&gt;
                    &lbrace;&lbrace; `Total records: ${data.length ?? "0"}` &rbrace;&rbrace;
                  &lt;/td&gt;
                &lt;/tr&gt;
              &lt;/template&gt;
            &lt;/Table&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
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
      <h2>{{ $t("table.usage.customVerticalBorder") }}</h2>

      <div class="section-content">
        <Table
          id="vertical-border"
          :column-action-button-label="$t('table.label.order')"
          :columns-data="columns"
          :data="data"
          :initial-sorting="[{ id: 'email', desc: false }]"
          :visible-columns="['email', 'name', 'age', 'city']"
          class="vertical"
          show-column-action
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              id="vertical-border"
              :column-action-button-label="$t('table.label.columnAction')"
              :columns-data="columns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :visible-columns="['email', 'name', 'age', 'city']"
              class="vertical"
              show-column-action
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array&lt;TableColumnDefinition&gt; = [
            ...
          ];
  
          const data = [
            ...
          ]
          &lt;/script&gt;

          &lt;style lang="css"&gt;
          .table-container.vertical .table-wrapper > table > tbody > tr,
          .table-container.vertical .table-wrapper > table > tbody > tr > td,
          .table-container.vertical .table-wrapper > table > thead tr > th {
            border: none;
          }

          .table-container.vertical .table-wrapper > table > tbody > tr > td,
          .table-container.vertical .table-wrapper > table > thead tr > th {
            border-left: var(--table-border);
            border-right: var(--table-border);
          }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("table.usage.customHorizontalBorder") }}</h2>

      <div class="section-content">
        <Table
          id="horizontal-border"
          :column-action-button-label="$t('table.label.order')"
          :columns-data="columns"
          :data="data"
          :initial-sorting="[{ id: 'email', desc: false }]"
          :visible-columns="['email', 'name', 'age', 'city']"
          class="horizontal"
          show-column-action
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              id="horizontal-border"
              :column-action-button-label="$t('table.label.columnAction')"
              :columns-data="columns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :visible-columns="['email', 'name', 'age', 'city']"
              class="vertical"
              show-column-action
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array&lt;TableColumnDefinition&gt; = [
            ...
          ];
  
          const data = [
            ...
          ]
          &lt;/script&gt;

          &lt;style lang="css"&gt;
          .table-container.horizontal .table-wrapper > table > tbody > tr > td,
          .table-container.horizontal .table-wrapper > table > thead tr > th {
            border: none;
          }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("table.usage.customToolbar") }}</h2>

      <div class="section-content">
        <Table
          id="custom-toolbar"
          :columns-data="columns"
          :data="data.slice(0, 5)"
        >
          <template #toolbar>
            <span v-if="showDate">{{ formatDateTime(Date()) }}</span>
            <ButtonElement
              :label="$t('table.label.clickMe')"
              @click="showDate = !showDate"
            />
          </template>
        </Table>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table id="custom-toolbar" :columns-data="columns" :data="data"&gt;
              &lt;template #toolbar&gt;
                &lt;span v-if="showDate"&gt;
                  &lbrace;&lbrace; formatDateTime(Date()) &rbrace;&rbrace;
                &lt;/span&gt;
                &lt;ButtonElement 
                  label="Add record"
                  @click="showDate = !showDate"
                /&gt;
              &lt;/template&gt;
            &lt;/Table&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
          import { ButtonElement, formatDateTime } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array&lt;TableColumnDefinition&gt; = [
            ...
          ];
  
          const data = [
            ...
          ];

          const showDate = ref&lt;boolean&gt;(false);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("table.usage.singleAction") }}</h2>

      <div class="section-content">
        <Table
          id="single-action"
          :columns-data="columns"
          :data="data.slice(10, 15)"
          :data-action-menu="[
            {
              icon: 'pi pi-eye',
              key: 'show',
            },
          ]"
          :initial-sorting="[{ id: 'email', desc: false }]"
          :paginated="false"
          actions-mode="buttons"
          @action:select="(data) => {}"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              id="single-action"
              :columns-data="columns"
              :data="data.splice(10, 15)" 
              :data-action-menu="[
                {
                  icon: 'pi pi-eye',
                  key: 'show',
                },
              ]"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :paginated="false"
              actions-mode="buttons"
              @action:select="(data) => {}"
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@prefabs.tech/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
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
      <h2>{{ $t("table.usage.multipleButtonAction") }}</h2>

      <div class="section-content">
        <Table
          id="multiple-button-action"
          :columns-data="columns"
          :data="data.slice(10, 15)"
          :data-action-menu="[
            {
              icon: 'pi pi-eye',
              key: 'show',
            },
            {
              icon: 'pi pi-pencil',
              key: 'edit',
            },
            {
              icon: 'pi pi-share-alt',
              key: 'share',
            },
            {
              confirmationOptions: {
                header: $t('table.label.confirmation'),
                body: $t('table.label.deleteRecordMessage'),
              },
              icon: 'pi pi-trash',
              key: 'delete',
              requireConfirmationModal: true,
              severity: 'danger',
            },
          ]"
          :initial-sorting="[{ id: 'email', desc: false }]"
          :paginated="false"
          actions-mode="buttons"
          @action:select="(data) => {}"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              :columns-data="columns"
              :data="data.splice(10, 15)" 
              :data-action-menu="[
                {
                  icon: 'pi pi-eye',
                  key: 'show',
                },
                {
                  icon: 'pi pi-pencil',
                  key: 'edit',
                },
                {
                  icon: 'pi pi-share-alt',
                  key: 'share',
                },
                {
                  confirmationOptions: {
                    header: 'Are you sure!',
                    body: 'You are going to delete this data.',
                  },
                  icon: 'pi pi-trash',
                  key: 'delete',
                  requireConfirmationModal: true,
                  severity: 'danger',
                },
              ]"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :paginated="false"
              actions-mode="buttons"
              @action:select="(data) => {}"
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@prefabs.tech/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
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
      <h2>{{ $t("table.usage.builtinActions") }}</h2>

      <div class="section-content">
        <Table
          id="builtin-actions"
          :columns-data="columns"
          :data="data.slice(10, 15)"
          :data-action-menu="[
            {
              label: $t('table.label.view'),
            },
            {
              disabled: true,
              label: $t('table.label.edit'),
            },
            {
              disabled: (rowData) => rowData.id !== 11,
              label: $t('table.label.share'),
            },
            {
              confirmationOptions: (rowData) => {
                return {
                  body: $t('table.label.deleteUserMessage', {
                    user: rowData?.name,
                  }),
                  header: $t('table.label.confirmation'),
                };
              },
              label: $t('table.label.delete'),
              requireConfirmationModal: true,
            },
          ]"
          :display-actions="(data) => data.id !== 12"
          :initial-sorting="[{ id: 'email', desc: false }]"
          :paginated="false"
          @action:select="(data) => {}"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              id="builtin-actions"
              :columns-data="columns"
              :data="data.splice(10, 15)" 
              :data-action-menu="[
                {
                  label: 'View',
                },
                {
                  disabled: true,
                  label: 'Edit',
                },
                {
                  label: 'Share',
                  disabled: (rowData) => rowData.id !== 11,
                },
                {
                  confirmationOptions: (rowData) => {
                    return {
                      body: $t('table.label.deleteUserMessage', {
                        user: rowData?.name,
                      }),
                      header: $t('table.label.confirmation'),
                    };
                  },
                  label: 'Delete',
                  requireConfirmationModal: true,'
                },
              ]"
              :display-actions="(data) => data.id !== 12"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :paginated="false"
              @action:select="(data) => {}"
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@prefabs.tech/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
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
      <h2>{{ $t("table.usage.filteredActions") }}</h2>

      <div class="section-content">
        <Table
          id="filtered-actions"
          :columns-data="columns"
          :data="data.slice(10, 15)"
          :data-action-menu="[
            {
              display: (rowData) => rowData.id !== 12,
              label: $t('table.label.view'),
            },
            {
              disabled: true,
              display: (rowData) => rowData.id !== 12,
              label: $t('table.label.edit'),
            },
            {
              disabled: (rowData) => rowData.id !== 11,
              display: (rowData) => rowData.id !== 12,
              label: $t('table.label.share'),
            },
            {
              confirmationOptions: (rowData) => {
                return {
                  body: h(
                    resolveComponent('i18n-t'),
                    { keypath: 'table.label.deleteUserMessage', tag: 'p' },
                    {
                      user: h('strong', rowData?.name || ''),
                    },
                  ),
                  header: $t('table.label.confirmation'),
                };
              },
              label: $t('table.label.delete'),
              requireConfirmationModal: true,
            },
          ]"
          :initial-sorting="[{ id: 'email', desc: false }]"
          actions-mode="dropdown"
          @action:select="(rowData) => {}"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              id="filtered-actions"
              :columns-data="columns"
              :data="data.splice(10, 15)" 
              :data-action-menu="[
                {
                  display: (rowData) => rowData.id !== 12,
                  label: 'View',
                },
                {
                  disabled: true,
                  display: (rowData) => rowData.id !== 12,
                  label: 'Edit',
                },
                {
                  disabled: (rowData) => rowData.id !== 11,
                  display: (rowData) => rowData.id !== 12
                  label: 'Share',
                },
                {
                  confirmationOptions: (rowData) => {
                    return {
                      body: h(
                        resolveComponent('i18n-t'),
                        { keypath: 'table.label.deleteUserMessage', tag: 'p' },
                        {
                          user: h('strong', rowData?.name || ''),
                        },
                      ),
                      header: $t('table.label.confirmation'),
                    };
                  },
                  label: 'Delete',
                  requireConfirmationModal: true,'
                },
              ]"
              :initial-sorting="[{ id: 'email', desc: false }]"
              actions-mode="dropdown"
              @action:select="(rowData) => {}"
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@prefabs.tech/vue3-tanstack-table";
          import { h, resolveComponent } from "vue";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
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
      <h2>{{ $t("table.usage.singleActionMenu") }}</h2>

      <div class="section-content">
        <Table
          id="single-action-menu"
          :columns-data="columns"
          :data="data.slice(10, 15)"
          :data-action-menu="[
            {
              label: $t('table.label.view'),
            },
          ]"
          :initial-sorting="[{ id: 'email', desc: false }]"
          actions-mode="dropdown"
          @action:select="(rowData) => {}"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              id="single-action-menu"
              :columns-data="columns"
              :data="data.splice(10, 15)" 
              :data-action-menu="[
                {
                  label: 'View',
                },
              ]"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :paginated="false"
              actions-mode="dropdown"
              @action:select="(rowData) => {}"
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@prefabs.tech/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
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
      <h2>{{ $t("table.usage.cellDataFormatting") }}</h2>

      <div class="section-content">
        <Table
          id="cell-data-formatting"
          :columns-data="formattedTableColumns"
          :data="formatDemoData"
          :initial-sorting="[{ id: 'quantity', desc: true }]"
          :paginated="false"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              id="cell-data-formatting"
              :columns-data="columns"
              :data="data"
              :initial-sorting="[{ id: 'quantity', desc: true }]"
              :paginated="false"
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@prefabs.tech/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array&lt;TableColumnDefinition&gt; = [
            {
              accessorKey: "description",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.search"),
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
              dataType: "date",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.dateRange"),
              header: "Date",
              meta: {
                filterVariant: "dateRange",
              },
            },
            {
              accessorKey: "datetime",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.dateRange"),
              header: "Datetime",
              dataType: "datetime",
              meta: {
                filterVariant: "dateRange",
              },
            },
            {
              id: "action",
              cell: () =>
                h(ButtonElement, {
                  iconLeft: "pi pi-eye",
                  variant: "textOnly",
                  rounded: true,
                }),
              dataType: "other",
              header: () =>
                h("i", {
                  class: "pi pi-cog",
                }),
            },
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
      <h2>{{ $t("table.usage.customCellDataFormatting") }}</h2>

      <div class="section-content">
        <Table
          id="custom-cell-data-formatting"
          :columns-data="customFormattedTableColumns"
          :custom-formatters="{
            currency: (value) => `$${value}`,
            number: (value) => `~${value}`,
          }"
          :data="formatDemoData"
          :initial-sorting="[{ id: 'quantity', desc: true }]"
          :paginated="false"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              id="custom-cell-data-formatting"
              :columns-data="columns"
              :custom-formatters="{
                currency: (value) => `$${value}`,
                number: (value) => `~${value}`,
              }"
              :data="formatDemoData"
              :initial-sorting="[{ id: 'quantity', desc: true }]"
              :paginated="false"
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@prefabs.tech/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array&lt;TableColumnDefinition&gt; = [
            {
              accessorKey: "description",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.search"),
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
            },
            {
              accessorKey: "date",
              dataType: "date",
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.dateRange"),
              header: "Date",
              meta: {
                filterVariant: "dateRange",
              },
            },
            {
              id: "action",
              cell: () =>
                h(ButtonElement, {
                  iconLeft: "pi pi-eye",
                  variant: "textOnly",
                  rounded: true,
                }),
              dataType: "other",
              header: () =>
                h("i", {
                  class: "pi pi-cog",
                }),
            },
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
      <h2>{{ $t("table.usage.centeredAlignedTable") }}</h2>

      <div class="section-content">
        <Table
          id="center-aligned-content"
          :columns-data="centerAlignedTableColumns"
          :data="data.slice(10, 15)"
          :initial-sorting="[{ id: 'email', desc: false }]"
          class="center-aligned-content-table"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              id="center-aligned-content"
              :columns-data="centerAlignedTableColumns"
              :data="data.slice(10, 15)"
              :initial-sorting="[{ id: 'email', desc: false }]"
              class="center-aligned-content-table"
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { Table } from "@prefabs.tech/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
    
          const columns: Array&lt;TableColumnDefinition&gt; = [
            ...
          ];
  
          const data = [
            ...
          ];

          const centerAlignedTableColumns = [
            ...columns,
            {
              accessorKey: "disabled",
              align: "center",
              cell: ({ row }) => {
                return h(BadgeComponent, {
                  label: row.original?.disabled
                    ? "Disabled"
                    : "Enabled",
                  severity: row.original?.disabled ? "danger" : "success",
                });
              },
              enableColumnFilter: true,
              enableSorting: true,
              filterPlaceholder: t("table.placeholder.status"),
              header: "Status",
              meta: {
                filterVariant: "select",
                filterOptions: [
                  {
                    label: "Enabled",
                    value: false,
                  },
                  {
                    label: "Disabled",
                    value: true,
                  },
                ],
              },
            },
          ];
          &lt;/script&gt;

          &lt;style lang="css"&gt;
          .demo-data-tables-page
            .table-wrapper
            > table
            > tbody
            > tr
            > td
            > .cell-name {
            background-color: #ccc;
            width: 300px;
          }

          .table-container.center-aligned-content-table .column-name {
            max-width: 30rem;
            min-width: 30rem;
            width: 30rem;
          }

          .table-container.center-aligned-content-table .column-age {
            max-width: 6rem;
            min-width: 6rem;
            width: 6rem;
          }

          .table-container.center-aligned-content-table .column-city {
            max-width: 8rem;
            min-width: 8rem;
            width: 8rem;
          }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <ComponentDocumentation
      :events-data="eventsData"
      :props-data="propsData"
      :props-table-title="$t('common.properties', { value: 'TableProperties' })"
      :slots-data="slotsData"
    />
  </TablePage>
</template>

<script lang="ts">
export default {
  name: "SortableTable",
};
</script>

<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Table } from "@prefabs.tech/vue3-tanstack-table";
import {
  BadgeComponent,
  ButtonElement,
  formatDateTime,
} from "@prefabs.tech/vue3-ui";
import { h, ref, resolveComponent } from "vue";

import { city, data, formatDemoData } from "./data";
import TablePage from "./TablePage.vue";
import ComponentDocumentation from "../../components/ComponentDocumentation.vue";

import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";

const { t } = useI18n();

const alignmentColumns = [
  {
    accessorKey: "email",
    align: "left",
    enableColumnFilter: true,
    enableSorting: true,
    filterPlaceholder: t("table.placeholder.search"),
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
    align: "center",
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

const columns: Array<TableColumnDefinition<unknown, unknown>> = [
  {
    accessorKey: "email",
    enableColumnFilter: true,
    enableSorting: true,
    filterPlaceholder: t("table.placeholder.search"),
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

const showDate = ref<boolean>(false);

const sortableColumns = columns.map((column) => ({
  ...column,
  enableSorting: true,
}));

const tooltipPositions = ["right", "top", "bottom", "left"];

const centerAlignedTableColumns = [
  ...columns,
  {
    accessorKey: "disabled",
    align: "center",
    cell: ({ row }) => {
      return h(BadgeComponent, {
        label: row.original?.disabled
          ? t("table.label.disabled")
          : t("table.label.enabled"),
        severity: row.original?.disabled ? "danger" : "success",
      });
    },
    enableColumnFilter: true,
    enableSorting: true,
    filterPlaceholder: t("table.placeholder.status"),
    header: "Status",
    meta: {
      filterVariant: "select",
      filterOptions: [
        {
          label: t("table.label.enabled"),
          value: false,
        },
        {
          label: t("table.label.disabled"),
          value: true,
        },
      ],
    },
  },
];

const columnsWithTooltip = columns.map((column, index) => ({
  ...column,
  tooltip: true,
  tooltipOptions: {
    position: tooltipPositions[index],
  },
}));

const customFormattedTableColumns = [
  {
    accessorKey: "description",
    enableColumnFilter: true,
    enableSorting: true,
    filterPlaceholder: t("table.placeholder.search"),
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
  },
  {
    accessorKey: "date",
    dataType: "date",
    enableColumnFilter: true,
    enableSorting: true,
    filterPlaceholder: t("table.placeholder.dateRange"),
    header: "Date",
    meta: {
      filterVariant: "dateRange",
    },
  },
  {
    id: "action",
    cell: () =>
      h(ButtonElement, {
        iconLeft: "pi pi-eye",
        variant: "textOnly",
        rounded: true,
      }),
    dataType: "other",
    header: () =>
      h("i", {
        class: "pi pi-cog",
      }),
  },
];

const eventsData = [
  {
    description: t("table.documentation.eventDescription.actionSelect"),
    name: "action:select",
    payload: "{ action: string; data: object }",
  },
  {
    description: t("table.documentation.eventDescription.changeRowSelection"),
    name: "change:rowSelection",
    payload: "selectedRows: Array",
  },
  {
    description: t("table.documentation.eventDescription.updateRequest"),
    name: "update:request",
    payload: "requestJSON: object",
  },
];

const formattedTableColumns = [
  {
    accessorKey: "description",
    enableColumnFilter: true,
    enableSorting: true,
    filterPlaceholder: t("table.placeholder.search"),
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
    dataType: "date",
    enableColumnFilter: true,
    enableSorting: true,
    filterPlaceholder: t("table.placeholder.dateRange"),
    header: "Date",
    meta: {
      filterVariant: "dateRange",
    },
  },
  {
    accessorKey: "datetime",
    enableColumnFilter: true,
    enableSorting: true,
    filterPlaceholder: t("table.placeholder.dateRange"),
    header: "Datetime",
    dataType: "datetime",
    meta: {
      filterVariant: "dateRange",
    },
  },
  {
    id: "action",
    cell: () =>
      h(ButtonElement, {
        iconLeft: "pi pi-eye",
        variant: "textOnly",
        rounded: true,
      }),
    dataType: "other",
    header: () =>
      h("i", {
        class: "pi pi-cog",
      }),
  },
];

const propsData = [
  {
    default: "auto",
    description: t("table.documentation.propsDescription.actionsMode"),
    prop: "actionsMode",
    type: "auto | buttons | dropdown",
  },
  {
    default: "1",
    description: t("table.documentation.propsDescription.autoModeCount"),
    prop: "autoModeCount",
    type: "Number",
  },
  {
    default: "[]",
    description: t("table.documentation.propsDescription.dataActionMenu"),
    prop: "dataActionMenu",
    type: "Array<DataActionsMenuItem>",
  },
  {
    default: "-",
    description: t(
      "table.documentation.propsDescription.columnActionButtonLabel",
    ),
    prop: "columnActionButtonLabel",
    type: "String",
  },
  {
    default: "[]",
    description: t("table.documentation.propsDescription.columnsData"),
    prop: "columnsData",
    type: "Array<ColumnDef>",
  },
  {
    default: "{}",
    description: t("table.documentation.propsDescription.customFormatters"),
    prop: "customFormatters",
    type: "Record<string, Function>",
  },
  {
    default: "[]",
    description: t("table.documentation.propsDescription.data"),
    prop: "data",
    type: "Array",
  },
  {
    default: "true",
    description: t("table.documentation.propsDescription.displayActions"),
    prop: "displayActions",
    type: "Boolean | Function",
  },
  {
    default: "-",
    description: t("table.documentation.propsDescription.emptyTableMessage"),
    prop: "emptyTableMessage",
    type: "String",
  },
  {
    default: "false",
    description: t("table.documentation.propsDescription.enableRowSelection"),
    prop: "enableRowSelection",
    type: "Boolean",
  },
  {
    default: "false",
    description: t("table.documentation.propsDescription.enableSortingRemoval"),
    prop: "enableSortingRemoval",
    type: "Boolean",
  },
  {
    default: "false",
    description: t(
      "table.documentation.propsDescription.highlightActiveHeaderColumn",
    ),
    prop: "highlightActiveHeaderColumn",
    type: "Boolean",
  },
  {
    default: "-",
    description: t("table.documentation.propsDescription.id"),
    prop: "id",
    type: "String",
  },
  {
    default: "[]",
    description: t("table.documentation.propsDescription.initialFilters"),
    prop: "initialFilters",
    type: "ColumnFiltersState",
  },
  {
    default: "[]",
    description: t("table.documentation.propsDescription.initialSorting"),
    prop: "initialSorting",
    type: "SortingState",
  },
  {
    default: "-",
    description: t("table.documentation.propsDescription.inputDebounceTime"),
    prop: "inputDebounceTime",
    type: "Number",
  },
  {
    default: "false",
    description: t("table.documentation.propsDescription.isLoading"),
    prop: "isLoading",
    type: "Boolean",
  },
  {
    default: "false",
    description: t("table.documentation.propsDescription.isServerTable"),
    prop: "isServerTable",
    type: "Boolean",
  },
  {
    default: "-",
    description: t("table.documentation.propsDescription.locale"),
    prop: "locale",
    type: "String",
  },
  {
    default: "true",
    description: t("table.documentation.propsDescription.paginated"),
    prop: "paginated",
    type: "Boolean",
  },
  {
    default: "{}",
    description: t("table.documentation.propsDescription.paginationOptions"),
    prop: "paginationOptions",
    type: "Object",
  },
  {
    default: "true",
    description: t("table.documentation.propsDescription.persistState"),
    prop: "persistState",
    type: "Boolean",
  },
  {
    default: "localStorage",
    description: t("table.documentation.propsDescription.persistStateStorage"),
    prop: "persistStateStorage",
    type: "localStorage | sessionStorage",
  },
  {
    default: "-",
    description: t("table.documentation.propsDescription.resetButtonLabel"),
    prop: "resetButtonLabel",
    type: "String",
  },
  {
    default: "DEFAULT_PAGE_SIZE",
    description: t("table.documentation.propsDescription.rowPerPage"),
    prop: "rowPerPage",
    type: "Number",
  },
  {
    default: "DEFAULT_PAGE_PER_OPTIONS",
    description: t("table.documentation.propsDescription.rowPerPageOptions"),
    prop: "rowPerPageOptions",
    type: "number[]",
  },
  {
    default: "false",
    description: t("table.documentation.propsDescription.showColumnAction"),
    prop: "showColumnAction",
    type: "Boolean",
  },
  {
    default: "false",
    description: t("table.documentation.propsDescription.showResetButton"),
    prop: "showResetButton",
    type: "Boolean",
  },
  {
    default: "{}",
    description: t("table.documentation.propsDescription.tableOptions"),
    prop: "tableOptions",
    type: "Object",
  },
  {
    default: "-",
    description: t("table.documentation.propsDescription.titleInfo"),
    prop: "titleInfo",
    type: "{ text: string; align?: string }",
  },
  {
    default: "0",
    description: t("table.documentation.propsDescription.totalRecords"),
    prop: "totalRecords",
    type: "Number",
  },
  {
    default: "[]",
    description: t("table.documentation.propsDescription.visibleColumns"),
    prop: "visibleColumns",
    type: "string[]",
  },
];

const slotsData = [
  {
    description: t("table.documentation.slotDescription.toolbar"),
    name: "toolbar",
  },
  {
    description: t("table.documentation.slotDescription.footer"),
    name: "footer",
  },
  {
    description: t("table.documentation.slotDescription.pagination"),
    name: "pagination",
  },
];
</script>

<style lang="css">
@import "../../assets/css/table/table.css";
</style>

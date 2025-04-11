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
          show-reset-button
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              :columns-data="sortableColumns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
              show-reset-button
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
      <h2>{{ $t("table.usage.rowSelection") }}</h2>

      <div class="section-content">
        <Table
          :columns-data="columns"
          :data="data.slice(0, 5)"
          :initial-sorting="[{ id: 'email', desc: false }]"
          enable-row-selection
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              :columns-data="columns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
              enable-row-selection
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
      <h2>{{ $t("table.usage.tooltip") }}</h2>

      <div class="section-content">
        <Table
          :columns-data="columnsWithTooltip"
          :data="data.slice(0, 5)"
          :initial-sorting="[{ id: 'email', desc: false }]"
          enable-row-selection
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
            &lt;template&gt;
              &lt;Table
                :columns-data="columnsWithTooltip"
                :data="data"
                :initial-sorting="[{ id: 'email', desc: false }]"
                enable-row-selection
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
      <h2>{{ $t("table.usage.columnAction") }}</h2>

      <div class="section-content">
        <Table
          :columns-data="columns"
          :data="data.slice(0, 5)"
          :initial-sorting="[{ id: 'email', desc: false }]"
          show-column-action
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              :columns-data="columns"
              :data="data"
              :initial-sorting="[{ id: 'email', desc: false }]"
              show-column-action
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
            <tr>
              <td>
                {{ `${$t("table.label.totalRecords")}: ${data.length ?? "0"}` }}
              </td>
            </tr>
          </template>
        </Table>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table :columns-data="columns" :data="data"&gt;
              &lt;template #footer&gt;
                &lt;tr&gt;
                  &lt;td&gt;
                    &lbrace;&lbrace; `Total records: ${data.length ?? "0"}` &rbrace;&rbrace;
                  &lt;/td&gt;
                &lt;/tr&gt;
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

    <section>
      <h2>{{ $t("table.usage.customVerticalBorder") }}</h2>

      <div class="section-content">
        <Table
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
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
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
          import { Table } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
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
        <Table :columns-data="columns" :data="data.slice(0, 5)">
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
            &lt;Table :columns-data="columns" :data="data"&gt;
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
          import { Table } from "@dzangolab/vue3-tanstack-table";
          import { ButtonElement, formatDateTime } from "@dzangolab/vue3-ui";
          import { ref } from "vue";

          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
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
          :columns-data="columns"
          :data="data.slice(10, 15)"
          :data-action-menu="[
            {
              icon: 'pi pi-eye',
            },
          ]"
          :initial-sorting="[{ id: 'email', desc: false }]"
          :paginated="false"
          @action:click="(data) => {}"
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
                },
              ]"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :paginated="false"
              @action:click="(data) => {}"
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
      <h2>{{ $t("table.usage.builtinActions") }}</h2>

      <div class="section-content">
        <Table
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
              confirmationOptions: {
                body: $t('table.label.deleteRecordMessage'),
                header: $t('table.label.confirmation'),
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
                  confirmationOptions: {
                    header: 'Are you sure!',
                    body: 'You are going to delete this data.',
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
      <h2>{{ $t("table.usage.filteredActions") }}</h2>

      <div class="section-content">
        <Table
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
              confirmationOptions: {
                header: $t('table.label.confirmation'),
                body: $t('table.label.deleteRecordMessage'),
              },
              label: $t('table.label.delete'),
              requireConfirmationModal: true,
            },
          ]"
          :initial-sorting="[{ id: 'email', desc: false }]"
          @action:select="(rowData) => {}"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
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
                  confirmationOptions: {
                    header: 'Are you sure!',
                    body: 'You are going to delete this data.',
                  },
                  label: 'Delete',
                  requireConfirmationModal: true,'
                },
              ]"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :paginated="false"
              @action:select="(rowData) => {}"
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
      <h2>{{ $t("table.usage.singleActionMenu") }}</h2>

      <div class="section-content">
        <Table
          :columns-data="columns"
          :data="data.slice(10, 15)"
          :data-action-menu="[
            {
              label: $t('table.label.view'),
            },
          ]"
          :initial-sorting="[{ id: 'email', desc: false }]"
          single-action-mode="menu"
          @action:select="(rowData) => {}"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              :columns-data="columns"
              :data="data.splice(10, 15)" 
              :data-action-menu="[
                {
                  label: 'View',
                },
              ]"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :paginated="false"
              single-action-mode="menu"
              @action:select="(rowData) => {}"
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
      <h2>{{ $t("table.usage.customCellDataFormatting") }}</h2>

      <div class="section-content">
        <Table
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
          import { Table } from "@dzangolab/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
    
          const columns: Array&lt;TableColumnDefinition&gt; = [
            {
              accessorKey: "description",
              header: "Description",
            },
            {
              accessorKey: "quantity",
              dataType: "number",
              enableSorting: true,
              header: () => "Quantity",
            },
            {
              accessorKey: "amount",
              dataType: "currency",
              header: "Amount",
            },
            {
              accessorKey: "date",
              dataType: "date",
              header: "Date",
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
          :columns-data="centerAlignedTableColumns"
          :data="data.slice(10, 15)"
          :initial-sorting="[{ id: 'email', desc: false }]"
          class="center-aligned-content-table"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Table
              :columns-data="centerAlignedTableColumns"
              :data="data.slice(10, 15)"
              :initial-sorting="[{ id: 'email', desc: false }]"
              class="center-aligned-content-table"
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
          ];

          const centerAlignedTableColumns = columns.map((column) => {
            if (column.accessorKey === "name") {
              return {
                ...column,
                align: "center",
                cell: ({ row: { original } }) => h(
                  "div",
                  {
                    class: "cell-name",
                  },
                  original.name
                ),
                header: "Name"
              };
            }

            return column;
          });
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
  </TablePage>
</template>

<script lang="ts">
export default {
  name: "SortableTable",
};
</script>

<script setup lang="ts">
import { Table } from "@dzangolab/vue3-tanstack-table";
import { ButtonElement, formatDateTime } from "@dzangolab/vue3-ui";
import { ref, h } from "vue";

import { data, formatDemoData } from "./data";
import TablePage from "./TablePage.vue";

import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";

const columns: Array<TableColumnDefinition<unknown, unknown>> = [
  {
    accessorKey: "email",
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

const showDate = ref<boolean>(false);

const sortableColumns = columns.map((column) => ({
  ...column,
  enableSorting: true,
}));

const tooltipPositions = ["right", "top", "bottom", "left"];

const centerAlignedTableColumns = columns.map((column) => {
  if (column.accessorKey === "name") {
    return {
      ...column,
      align: "center",
      cell: ({ row: { original } }) =>
        h(
          "div",
          {
            class: "cell-name",
          },
          original.name,
        ),
      header: "Name",
    };
  }

  return column;
});

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
    header: "Description",
  },
  {
    accessorKey: "quantity",
    dataType: "number",
    enableSorting: true,
    header: () => "Quantity",
  },
  {
    accessorKey: "amount",
    dataType: "currency",
    header: "Amount",
  },
  {
    accessorKey: "date",
    dataType: "date",
    header: "Date",
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
</script>

<style lang="css">
@import "../../assets/css/table/table.css";
</style>

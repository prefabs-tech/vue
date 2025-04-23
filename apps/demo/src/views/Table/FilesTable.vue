<template>
  <TablePage :title="$t('table.label.filesTable')" class="demo data-table">
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
      <div class="section-content">
        <FilesTable
          :columns-data="[
            {
              id: 'uploadedBy',
              tooltip: ({ row: { original } }) => {
                return `${original.uploadedBy?.givenName} ${original.uploadedBy?.lastName}`;
              },
            },
            {
              accessorKey: 'uploadedAt',
              tooltip: true,
            },
          ]"
          :files="[
            {
              description: 'File 1 description',
              id: 1,
              lastDownloadedAt: Date.now(),
              originalFileName: 'My file',
              uploadedAt: Date.now(),
              uploadedBy: { givenName: 'monorepo', lastName: 'Admin' },
            },
            {
              description: 'File description',
              id: 2,
              lastDownloadedAt: Date.now(),
              originalFileName: 'My file v2',
              uploadedAt: Date.now(),
              uploadedBy: { givenName: 'Monorepo', lastName: '' },
            },
          ]"
          :initial-sorting="[{ id: 'originalFileName', desc: true }]"
          :table-options="{
            paginationOptions: {
              itemsPerPageControlLabel: $t('table.label.rowsPerPage'),
            },
          }"
          :visible-columns="[
            'originalFileName',
            'description',
            'uploadedBy',
            'uploadedAt',
          ]"
          archive-file
          delete-file
          download-file
          edit-description
          share-file
          view-file
          @action:archive="() => {}"
          @action:delete="() => {}"
          @action:download="() => {}"
          @action:edit="() => {}"
          @action:share="() => {}"
          @action:view="() => {}"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;FilesTable
              :columns-data="[
                {
                  id: 'uploadedBy',
                  tooltip: ({ row: { original } }) => {
                    return `${original.uploadedBy?.givenName} ${original.uploadedBy?.lastName}`;
                  },
                },
                {
                  accessorKey: 'uploadedAt',
                  tooltip: true,
                },
              ]"
              :files="[
                {
                  description: 'File 1 description',
                  id: 1,
                  lastDownloadedAt: Date.now(),
                  originalFileName: 'My file',
                  uploadedAt: Date.now(),
                  uploadedBy: { givenName: 'monorepo', lastName: 'Admin' },
                },
                {
                  description: 'File description',
                  id: 2,
                  lastDownloadedAt: Date.now(),
                  originalFileName: 'My file v2',
                  uploadedAt: Date.now(),
                  uploadedBy: { givenName: 'Monorepo', lastName: '' },
                },
              ]"
              :initial-sorting="[{ id: 'originalFileName', desc: true }]"
              :table-options="{
                paginationOptions: {
                  itemsPerPageControlLabel: $t('table.label.rowsPerPage'),
                },
              }"
              :visible-columns="[
                'originalFileName',
                'description',
                'uploadedBy',
                'uploadedAt',
              ]"
              archive-file
              delete-file
              download-file
              edit-description
              share-file
              view-file
              @action:archive="() => {}"
              @action:delete="() => {}"
              @action:download="() => {}"
              @action:edit="() => {}"
              @action:share="() => {}"
              @action:view="() => {}"
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { FilesTable } from "@dzangolab/vue3-tanstack-table";
    
          import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </TablePage>
</template>

<script lang="ts">
export default {
  name: "FilesTable",
};
</script>

<script setup lang="ts">
import { FilesTable } from "@dzangolab/vue3-tanstack-table";
import { ButtonElement } from "@dzangolab/vue3-ui";

import TablePage from "./TablePage.vue";
</script>

<style lang="css">
@import "../../assets/css/table/table.css";
</style>

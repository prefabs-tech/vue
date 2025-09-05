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
          id="files-table"
          :columns-data="[
            {
              accessorKey: 'uploadedBy',
              header: $t('table.label.uploadedBy'),
              tooltip: ({ row: { original } }) => {
                return `${original.uploadedBy?.givenName} ${original.uploadedBy?.lastName}`;
              },
            },
            {
              accessorKey: 'uploadedAt',
              header: $t('table.label.uploadedAt'),
              tooltip: true,
            },
          ]"
          :files="[
            {
              description: 'File 1 description',
              downloadCount: 10,
              id: 1,
              lastDownloadedAt: new Date('2025-01-14').getTime(),
              originalFileName: 'My file',
              uploadedAt: new Date('2025-01-25').getTime(),
              uploadedBy: { givenName: 'monorepo', lastName: 'Admin' },
            },
            {
              description: 'File description',
              downloadCount: 12,
              id: 2,
              lastDownloadedAt: Date.now(),
              originalFileName: 'My file v2',
              uploadedAt: new Date('2025-02-17').getTime(),
              uploadedBy: { givenName: 'Monorepo', lastName: '' },
            },
          ]"
          :initial-sorting="[{ id: 'originalFileName', desc: true }]"
          :locale="String(locale)"
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
            'lastDownloadedAt',
            'downloadCount',
            'actions',
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
              id="files-table"
              :columns-data="[
                {
                  accessorKey: 'uploadedBy',
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
                  downloadCount: 10,
                  id: 1,
                  lastDownloadedAt: new Date('2025-01-14').getTime(),
                  originalFileName: 'My file',
                  uploadedAt: new Date('2025-01-25').getTime(),
                  uploadedBy: { givenName: 'monorepo', lastName: 'Admin' },
                },
                {
                  description: 'File description',
                  downloadCount: 12,
                  id: 2,
                  lastDownloadedAt: Date.now(),
                  originalFileName: 'My file v2',
                  uploadedAt: new Date('2025-02-17').getTime(),
                  uploadedBy: { givenName: 'Monorepo', lastName: '' },
                },
              ]"
              :initial-sorting="[{ id: 'originalFileName', desc: true }]"
              :locale="String(locale)"
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
                'lastDownloadedAt',
                'downloadCount',
                'actions',
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
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { FilesTable } from "@prefabs.tech/vue3-tanstack-table";

          import type { TableColumnDefinition } from "@prefabs.tech/vue3-tanstack-table";
          
          const { locale } = useI18n();
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
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { FilesTable } from "@prefabs.tech/vue3-tanstack-table";
import { ButtonElement } from "@prefabs.tech/vue3-ui";

import TablePage from "./TablePage.vue";

const { locale } = useI18n();
</script>

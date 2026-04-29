<template>
  <TablePage
    :subtitle="$t('table.subtitle.files')"
    :title="$t('table.label.filesTable')"
    class="demo data-table"
  >
    <section>
      <div class="section-content">
        <FilesTable
          id="files-table"
          :columns-data="[
            {
              accessorKey: 'uploadedBy',
              header: $t('table.label.uploadedBy'),
              tooltip: uploadedBy,
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

    <ComponentDocumentation
      :events-data="eventsData"
      :props-data="propsData"
      :props-table-title="
        $t('common.properties', { value: 'FilesTableProperties' })
      "
      :slots-data="slotsData"
    />

    <section>
      <!-- eslint-disable -->
      <SshPre language="html-vue">
        interface IFile {
          description?: string;
          downloadCount?: number;
          id: number | string;
          lastDownloadedAt?: number;
          originalFileName: string;
          size?: number;
          uploadedAt: number;
          uploadedBy: Record&lt;string&comma; string&gt;&semi;
        }
      </SshPre>
      <!-- eslint-enable -->
    </section>
  </TablePage>
</template>

<script lang="ts">
export default {
  name: "FilesTableDemo",
};
</script>

<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { FilesTable } from "@prefabs.tech/vue3-tanstack-table";
import { computed } from "vue";

import TablePage from "./TablePage.vue";
import ComponentDocumentation from "../../components/ComponentDocumentation.vue";

import type { IFile } from "@prefabs.tech/vue3-ui";

const { locale, t } = useI18n();

const eventsData = computed(() => [
  {
    description: t("table.documentation.eventDescription.actionArchive"),
    name: "action:archive",
    payload: "data: IFile",
  },
  {
    description: t("table.documentation.eventDescription.actionDelete"),
    name: "action:delete",
    payload: "data: IFile",
  },
  {
    description: t("table.documentation.eventDescription.actionDownload"),
    name: "action:download",
    payload: "data: IFile",
  },
  {
    description: t("table.documentation.eventDescription.actionEdit"),
    name: "action:edit",
    payload: "data: IFile",
  },
  {
    description: t("table.documentation.eventDescription.actionShare"),
    name: "action:share",
    payload: "data: IFile",
  },
  {
    description: t("table.documentation.eventDescription.actionView"),
    name: "action:view",
    payload: "data: IFile",
  },
  {
    description: t("table.documentation.eventDescription.updateRequest"),
    name: "update:request",
    payload: "requestJSON: TRequestJSON",
  },
]);

const propsData = computed(() => [
  {
    default: "false",
    description: t("table.documentation.propsDescription.archiveFile"),
    prop: "archiveFile",
    type: "Boolean",
  },
  {
    default: "-",
    description: t("table.documentation.propsDescription.columnsData"),
    prop: "columnsData",
    type: "Array<TableColumnDefinition<IFile>>",
  },
  {
    default: "false",
    description: t("table.documentation.propsDescription.deleteFile"),
    prop: "deleteFile",
    type: "Boolean",
  },
  {
    default: "false",
    description: t("table.documentation.propsDescription.downloadFile"),
    prop: "downloadFile",
    type: "Boolean",
  },
  {
    default: "false",
    description: t("table.documentation.propsDescription.editDescription"),
    prop: "editDescription",
    type: "Boolean",
  },
  {
    default: "-",
    description: t("table.documentation.propsDescription.files"),
    prop: "files",
    type: "Array<IFile>",
  },
  {
    default: "files-table",
    description: t("table.documentation.propsDescription.id"),
    prop: "id",
    type: "String",
  },
  {
    default: "-",
    description: t("table.documentation.propsDescription.initialSorting"),
    prop: "initialSorting",
    type: "SortingState",
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
    default: "-",
    description: t("table.documentation.propsDescription.messages"),
    prop: "messages",
    type: "TableMessages",
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
    default: "false",
    description: t("table.documentation.propsDescription.shareFile"),
    prop: "shareFile",
    type: "Boolean",
  },
  {
    default: "-",
    description: t("table.documentation.propsDescription.tableOptions"),
    prop: "tableOptions",
    type: "Object",
  },
  {
    default: "0",
    description: t("table.documentation.propsDescription.totalRecords"),
    prop: "totalRecords",
    type: "Number",
  },
  {
    default: "false",
    description: t("table.documentation.propsDescription.viewFile"),
    prop: "viewFile",
    type: "Boolean",
  },
  {
    default: "-",
    description: t("table.documentation.propsDescription.visibleColumns"),
    prop: "visibleColumns",
    type: "string[]",
  },
]);

const slotsData = computed(() => [
  {
    description: t("table.documentation.slotDescription.footer"),
    name: "footer",
    props: "-",
  },
  {
    description: t("table.documentation.slotDescription.pagination"),
    name: "pagination",
    props: "-",
  },
  {
    description: t("table.documentation.slotDescription.toolbar"),
    name: "toolbar",
    props: "-",
  },
]);

const uploadedBy = ({ row: { original } }: { row: { original: IFile } }) => {
  return `${original.uploadedBy?.givenName} ${original.uploadedBy?.lastName}`;
};
</script>

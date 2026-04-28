<template>
  <TablePage
    :subtitle="$t('table.subtitle.filesPresentation')"
    :title="$t('table.label.filesPresentation')"
    class="demo"
  >
    <section>
      <h2>{{ $t("table.usage.tableMode") }}</h2>

      <div class="section-content">
        <FilesPresentation
          :files="files"
          :locale="String(locale)"
          :visible-file-details="[
            'originalFileName',
            'description',
            'size',
            'uploadedBy',
            'uploadedAt',
            'downloadCount',
            'lastDownloadedAt',
            'actions',
          ]"
          presentation="table"
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
            &lt;FilesPresentation
              :files="files"
              :locale="String(locale)"
              :visible-file-details="[
                'originalFileName',
                'description',
                'size',
                'uploadedBy',
                'uploadedAt',
                'downloadCount',
                'lastDownloadedAt',
                'actions',
              ]"
              presentation="table"
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
          import { FilesPresentation } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { IFile } from "@prefabs.tech/vue3-ui";

          const { locale } = useI18n();
          
          const files = [
            {
              description: "File description",
              downloadCount: 5,
              id: 1,
              lastDownloadedAt: Date.now(),
              originalFileName: "file1.png",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Manish", lastName: "Aryal" },
            },
            {
              description: "File description",
              downloadCount: 5,
              id: 2,
              lastDownloadedAt: Date.now(),
              originalFileName: "document.pdf",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Gaurav", lastName: "Sapkota" },
            },
            {
              description: "File description",
              downloadCount: 5,
              id: 3,
              lastDownloadedAt: Date.now(),
              originalFileName: "photo.jpeg",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Deepak", lastName: "Aryal" },
            },
            {
              description: "File description",
              downloadCount: 5,
              id: 4,
              lastDownloadedAt: Date.now(),
              originalFileName: "manish.png",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Lamdiki", lastName: "Sherpa" },
            },
          ] as IFile[];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("table.usage.listMode") }}</h2>

      <div class="section-content">
        <FilesPresentation
          :action-buttons-visibility="{
            archive: false,
            delete: false,
            download: true,
            edit: true,
            share: false,
            view: true,
          }"
          :files="files"
          :locale="locale"
          :visible-file-details="[
            'originalFileName',
            'description',
            'size',
            'uploadedBy',
            'uploadedAt',
            'downloadCount',
            'lastDownloadedAt',
            'actions',
          ]"
          @action:download="() => {}"
          @action:edit="() => {}"
          @action:view="() => {}"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;FilesPresentation
              :action-buttons-visibility="{
                archive: false,
                delete: false,
                download: true,
                edit: true,
                share: false,
                view: true,
              }"
              :files="files"
              :locale="locale"
              :visible-file-details="[
                'originalFileName',
                'description',
                'size',
                'uploadedBy',
                'uploadedAt',
                'downloadCount',
                'lastDownloadedAt',
                'actions',
              ]"
              @action:download="() => {}"
              @action:edit="() => {}"
              @action:view="() => {}"
            /&gt;
          &lt;/template&gt;
    
          &lt;script setup lang="ts"&gt;
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { FilesPresentation } from "@prefabs.tech/vue3-tanstack-table";
    
          import type { IFile } from "@prefabs.tech/vue3-ui";

          const { locale } = useI18n();

          const files = [
            {
              description: "File description",
              downloadCount: 5,
              id: 1,
              lastDownloadedAt: Date.now(),
              originalFileName: "file1.png",
              size: 100,
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Manish", lastName: "Aryal" },
            },
            {
              description: "File description",
              downloadCount: 5,
              id: 2,
              lastDownloadedAt: Date.now(),
              originalFileName: "document.pdf",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Gaurav", lastName: "Sapkota" },
            },
            {
              description: "File description",
              downloadCount: 5,
              id: 3,
              lastDownloadedAt: Date.now(),
              originalFileName: "photo.jpeg",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Deepak", lastName: "Aryal" },
            },
            {
              description: "File description",
              downloadCount: 5,
              id: 4,
              lastDownloadedAt: Date.now(),
              originalFileName: "manish.png",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Lamdiki", lastName: "Sherpa" },
            },
          ] as IFile[];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <ComponentDocumentation
      :events-data="eventsData"
      :props-data="propsData"
      :props-table-title="
        $t('common.properties', { value: 'FilesPresentationProperties' })
      "
    />
  </TablePage>
</template>

<script lang="ts">
export default {
  name: "FilesPresentationDemo",
};
</script>

<script setup lang="ts">
import type { IFile } from "@prefabs.tech/vue3-ui";

import { useI18n } from "@prefabs.tech/vue3-i18n";
import { FilesPresentation } from "@prefabs.tech/vue3-tanstack-table";
import { computed } from "vue";

import ComponentDocumentation from "../../components/ComponentDocumentation.vue";
import TablePage from "./TablePage.vue";

const { locale, t } = useI18n();

const files = [
  {
    description: "File description",
    downloadCount: 5,
    id: 1,
    lastDownloadedAt: Date.now(),
    originalFileName: "file1.png",
    size: 100,
    uploadedAt: Date.now(),
    uploadedBy: { givenName: "Manish", lastName: "Aryal" },
  },
  {
    description: "File description",
    downloadCount: 5,
    id: 2,
    lastDownloadedAt: Date.now(),
    originalFileName: "document.pdf",
    uploadedAt: Date.now(),
    uploadedBy: { givenName: "Gaurav", lastName: "Sapkota" },
  },
  {
    description: "File description",
    downloadCount: 5,
    id: 3,
    lastDownloadedAt: Date.now(),
    originalFileName: "photo.jpeg",
    uploadedAt: Date.now(),
    uploadedBy: { givenName: "Deepak", lastName: "Aryal" },
  },
  {
    description: "File description",
    downloadCount: 5,
    id: 4,
    lastDownloadedAt: Date.now(),
    originalFileName: "manish.png",
    uploadedAt: Date.now(),
    uploadedBy: { givenName: "Lamdiki", lastName: "Sherpa" },
  },
] as IFile[];

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
]);

const propsData = computed(() => [
  {
    default:
      "{ archive: true, delete: true, download: true, edit: true, share: true, view: true }",
    description: t(
      "table.documentation.propsDescription.actionButtonsVisibility",
    ),
    prop: "actionButtonsVisibility",
    type: "Object",
  },
  {
    default: "-",
    description: t("table.documentation.propsDescription.files"),
    prop: "files",
    type: "Array<IFile>",
  },
  {
    default: "-",
    description: t("table.documentation.propsDescription.listProps"),
    prop: "listProps",
    type: "Object",
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
    default: "list",
    description: t("table.documentation.propsDescription.presentation"),
    prop: "presentation",
    type: "list | table",
  },
  {
    default: "-",
    description: t("table.documentation.propsDescription.tableProps"),
    prop: "tableProps",
    type: "Object",
  },
  {
    default:
      "['actions', 'description', 'downloadCount', 'lastDownloadedAt', 'originalFileName', 'size', 'uploadedAt', 'uploadedBy']",
    description: t("table.documentation.propsDescription.visibleFileDetails"),
    prop: "visibleFileDetails",
    type: "string[]",
  },
]);
</script>

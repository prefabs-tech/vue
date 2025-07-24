<template>
  <UiPage
    :sub-title="$t('ui.filesList.subtitle')"
    :title="$t('ui.filesList.title')"
    class="demo-files-list"
  >
    <template #toolbar>
      <ButtonElement
        :label="$t('common.back')"
        icon-left="pi pi-chevron-left"
        size="medium"
        variant="textOnly"
        @click="$router.push('/ui')"
      />
    </template>

    <section>
      <div class="section-content">
        <FilesList
          :action-buttons-visibility="{
            download: true,
            view: true,
          }"
          :files="files"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;FilesList
              :action-buttons-visibility="{
                download: true,
                view: true,
              }"
              :files="files"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { FileList } from "@prefabs.tech/vue3-ui";

          import type { IFile } from "@prefabs.tech/vue3-ui";

          const files = [
            {
              downloadCount: 5,
              id: 1,
              lastDownloadedAt: Date.now(),
              originalFileName: "file1.png",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Manish", lastName: "Aryal" },
            },
            {
              downloadCount: 5,
              id: 2,
              lastDownloadedAt: Date.now(),
              originalFileName: "document.pdf",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Gaurav", lastName: "Sapkota" },
            },
            {
              downloadCount: 5,
              id: 3,
              lastDownloadedAt: Date.now(),
              originalFileName: "photo.jpeg",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Deepak", lastName: "Aryal" },
            },
            {
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
        $t('common.properties', { value: 'FilesListProperties' })
      "
      :slots-data="slotsData"
    />

    <section>
      <!-- eslint-disable -->
      <SshPre language="html-vue">
        interface IFile {
          id: number | string;
          originalFileName: string;
          description?: string;
          size?: number;
          uploadedBy: any;
          uploadedAt: number;
          downloadCount?: number;
          lastDownloadedAt?: number;
        }

        type FileMessages = {
          archiveAction?: string;
          archiveConfirmationHeader?: string;
          archiveConfirmationMessage?: string;
          downloadAction?: string;
          editDescriptionAction?: string;
          renameAction?: string;
          deleteAction?: string;
          deleteConfirmationHeader?: string;
          deleteConfirmationMessage?: string;
          downloadCountHeader?: string;
          lastDownloadedAtHeader?: string;
          uploadedByHeader?: string;
          uploadedAtHeader?: string;
          shareAction?: string;
          viewAction?: string;
        };
      </SshPre>
      <!-- eslint-enable -->
    </section>
  </UiPage>
</template>

<script setup lang="ts">
import { ButtonElement, FilesList } from "@prefabs.tech/vue3-ui";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import UiPage from "../UiPage.vue";

import type { IFile } from "@prefabs.tech/vue3-ui";

const eventsData = [
  {
    description: "Emitted when archive action is triggered",
    name: "action:archive",
    payload: "IFile object",
  },
  {
    description: "Emitted when delete action is triggered",
    name: "action:delete",
    payload: "IFile object",
  },
  {
    description: "Emitted when download action is triggered",
    name: "action:download",
    payload: "IFile object",
  },
  {
    description: "Emitted when edit description is triggered",
    name: "action:edit",
    payload: "IFile object",
  },
  {
    description: "Emitted when share action is triggered",
    name: "action:share",
    payload: "IFile object",
  },
  {
    description: "Emitted when view action is triggered",
    name: "action:view",
    payload: "IFile object",
  },
];

const files = [
  {
    downloadCount: 5,
    id: 1,
    lastDownloadedAt: Date.now(),
    originalFileName: "file1.png",
    uploadedAt: Date.now(),
    uploadedBy: { givenName: "Manish", lastName: "Aryal" },
  },
  {
    downloadCount: 5,
    id: 2,
    lastDownloadedAt: Date.now(),
    originalFileName: "document.pdf",
    uploadedAt: Date.now(),
    uploadedBy: { givenName: "Gaurav", lastName: "Sapkota" },
  },
  {
    downloadCount: 5,
    id: 3,
    lastDownloadedAt: Date.now(),
    originalFileName: "photo.jpeg",
    uploadedAt: Date.now(),
    uploadedBy: { givenName: "Deepak", lastName: "Aryal" },
  },
  {
    downloadCount: 5,
    id: 4,
    lastDownloadedAt: Date.now(),
    originalFileName: "manish.png",
    uploadedAt: Date.now(),
    uploadedBy: { givenName: "Lamdiki", lastName: "Sherpa" },
  },
] as IFile[];

const propsData = [
  {
    default: `{
      archive: true,
      delete: true,
      download: true,
      edit: true,
      share: true,
      view: true
    }`,
    description: "Controls visibility of action buttons for all files",
    prop: "actionButtonsVisibility",
    type: "Object",
  },
  {
    default: "-",
    description: "Props for archive button",
    prop: "archiveButtonProps",
    type: "Object",
  },
  {
    default: "-",
    description: "Props for delete button",
    prop: "deleteButtonProps",
    type: "Object",
  },
  {
    default: "-",
    description: "Props for download button",
    prop: "downloadButtonProps",
    type: "Object",
  },
  {
    default: "-",
    description: "Props for edit description button",
    prop: "editDescriptionButtonProps",
    type: "Object",
  },
  {
    default: "-",
    description: "Array of file objects (required)",
    prop: "files",
    type: "Array<IFile>",
    required: "true",
  },
  {
    default: "-",
    description: "Custom messages for file cards",
    prop: "messages",
    type: "FileMessages",
  },
  {
    default: "-",
    description: "Props for share button",
    prop: "shareButtonProps",
    type: "Object",
  },
  {
    default: "true",
    description: "Whether to show thumbnails",
    prop: "showThumbnail",
    type: "Boolean",
  },
  {
    default: "-",
    description: "Props for view button",
    prop: "viewButtonProps",
    type: "Object",
  },
  {
    default: `{
      actions: true,
      description: true,
      downloadCount: true,
      lastDownloadedAt: true,
      originalFileName: true,
      size: true,
      uploadedAt: true,
      uploadedBy: true
    }`,
    description: "Controls visibility of file details for all files",
    prop: "fileDetailVisibility",
    type: "Object",
  },
];

const slotsData = [
  {
    description: "Slot to customize thumbnail for all files",
    name: "thumbnail",
  },
];
</script>

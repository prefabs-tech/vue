<template>
  <UiPage
    :sub-title="$t('ui.fileCard.subtitle')"
    :title="$t('ui.fileCard.title')"
    class="demo-file-card"
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
      <h2>{{ $t("ui.fileCard.usage.basic") }}</h2>

      <div class="section-content">
        <FileCard :file="file" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;FileCard :file="file" /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { FileCard } from "@dzangolab/vue3-ui";

          import type { IFile } from "@dzangolab/vue3-ui";

          const file = {
            description: "This is a file",
            downloadCount: 0,
            id: 1,
            lastDownloadedAt: Date.now(),
            originalFileName: "file.png",
            size: 4,
            uploadedBy: { givenName: "Test", lastName: "user" },
            uploadedAt: Date.now(),
          } as IFile;
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.fileCard.usage.messages") }}</h2>

      <div class="section-content">
        <FileCard :file="file" :messages="messages" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;FileCard :file="file" :messages="messages" /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { FileCard } from "@dzangolab/vue3-ui";

          import type { FileMessages, IFile } from "@dzangolab/vue3-ui";

          const file = {
            ...
          } as IFile;

          const messages = {
            archiveAction: "Archive file",
            archiveConfirmationHeader: "Confirm archive?",
            archiveConfirmationMessage: "Are you sure to archive this file?",
            deleteAction: "Delete file",
            deleteConfirmationHeader: "Confirm delete?",
            deleteConfirmationMessage: "Are you sure to delete this file?",
            downloadAction: "Download file",
            downloadCountHeader: "Download count:",
            lastDownloadedAtHeader: "Last downloaded date:",
            shareAction: "Share file",
            uploadedAtHeader: "Uploaded date:",
            uploadedByHeader: "Uploaded by:",
            viewAction: "View file",
          } as FileMessages;
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.fileCard.usage.buttonProps") }}</h2>

      <div class="section-content">
        <FileCard
          :archive-button-props="archiveButtonProperties"
          :delete-button-props="deleteButtonProperties"
          :download-button-props="downloadButtonProperties"
          :file="file"
          :share-button-props="shareButtonProperties"
          :view-button-props="viewButtonProperties"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;FileCard
            :archive-button-props="archiveButtonProps"
            :delete-button-props="deleteButtonProps"
            :download-button-props="downloadButtonProps"
            :file="file"
            :share-button-props="shareButtonProps"
            :view-button-props="viewButtonProps"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { FileCard } from "@dzangolab/vue3-ui";

          import type { FileMessages, IFile } from "@dzangolab/vue3-ui";

          const archiveButtonProps = {
            severity: "warning",
            size: "medium",
            variant: "outlined",
          };

          const deleteButtonProps = {
            severity: "danger",
            size: "medium",
            variant: "outlined",
          };

          const downloadButtonProps = {
            severity: "primary",
            size: "medium",
            variant: "outlined",
          };

          const file = {
            ...
          } as IFile;

          const shareButtonProps = {
            severity: "alternate",
            size: "medium",
            variant: "outlined",
          };

          const viewButtonProps = {
            severity: "secondary",
            size: "medium",
            variant: "outlined",
          };
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.fileCard.usage.visibilityDetail") }}</h2>

      <div class="section-content">
        <FileCard
          :action-buttons-visibility="{
            archive: false,
            delete: true,
            download: true,
            share: false,
            view: true,
          }"
          :file="file"
          :visibility-detail="{
            actions: true,
            description: false,
            downloadCount: true,
            lastDownloadedAt: false,
            originalFileName: true,
            size: false,
            uploadedAt: true,
            uploadedBy: true,
          }"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;FileCard
              :action-buttons-visibility="{
                archive: false,
                delete: true,
                download: true,
                share: false,
                view: true,
              }"
              :file="file"
              :visibility-detail="{
                actions: true,
                description: false,
                downloadCount: true,
                lastDownloadedAt: false,
                originalFileName: true,
                size: false,
                uploadedAt: true,
                uploadedBy: true,
              }"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { FileCard } from "@dzangolab/vue3-ui";

          import type { IFile } from "@dzangolab/vue3-ui";

          const file = {
            ...
          } as IFile;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <ComponentDocumentation
      :events-data="eventsData"
      :props-data="propsData"
      :props-table-title="
        $t('common.properties', { value: 'FileCardProperties' })
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
import { ButtonElement, FileCard } from "@dzangolab/vue3-ui";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import UiPage from "../UiPage.vue";

import type { FileMessages, IFile } from "@dzangolab/vue3-ui";

const archiveButtonProperties = {
  severity: "warning",
  size: "medium",
  variant: "outlined",
};

const deleteButtonProperties = {
  severity: "danger",
  size: "medium",
  variant: "outlined",
};

const downloadButtonProperties = {
  severity: "primary",
  size: "medium",
  variant: "outlined",
};

const eventsData = [
  {
    description: "Emitted when edit description button is clicked",
    name: "click:editDescription",
    payload: "-",
  },
  {
    description: "Emitted when archive action is confirmed",
    name: "on:archive",
    payload: "File object",
  },
  {
    description: "Emitted when delete action is confirmed",
    name: "on:delete",
    payload: "File object",
  },
  {
    description: "Emitted when download button is clicked",
    name: "on:download",
    payload: "File object",
  },
  {
    description: "Emitted when share button is clicked",
    name: "on:share",
    payload: "File object",
  },
  {
    description: "Emitted when view button is clicked",
    name: "on:view",
    payload: "File object",
  },
];

const slotsData = [
  {
    description: "Slot for custom thumbnail content",
    name: "thumbnail",
  },
];

const file = {
  description: "This is a file",
  downloadCount: 0,
  id: 1,
  lastDownloadedAt: Date.now(),
  originalFileName: "file.png",
  size: 4,
  uploadedBy: { givenName: "Test", lastName: "user" },
  uploadedAt: Date.now(),
} as IFile;

const messages = {
  archiveAction: "Archive file",
  archiveConfirmationHeader: "Confirm archive?",
  archiveConfirmationMessage: "Are you sure to archive this file?",
  deleteAction: "Delete file",
  deleteConfirmationHeader: "Confirm delete?",
  deleteConfirmationMessage: "Are you sure to delete this file?",
  downloadAction: "Download file",
  downloadCountHeader: "Download count:",
  lastDownloadedAtHeader: "Last downloaded date:",
  shareAction: "Share file",
  uploadedAtHeader: "Uploaded date:",
  uploadedByHeader: "Uploaded by:",
  viewAction: "View file",
} as FileMessages;

const propsData = [
  {
    default: `{
      archive: true,
      delete: true,
      download: true,
      share: true,
      view: true
    }`,
    description: "Controls visibility of action buttons",
    prop: "actionButtonsVisibility",
    type: "Object",
  },
  {
    default: "false",
    description: "Whether to show edit description button",
    prop: "allowEditDescription",
    type: "Boolean",
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
    description: "File data object (required)",
    prop: "file",
    type: "IFile",
  },
  {
    default: "-",
    description: "Custom messages for action labels and confirmation headers",
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
    description: "Whether to show file thumbnail",
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
    description: "Controls visibility of file details",
    prop: "visibilityDetail",
    type: "Object",
  },
];

const shareButtonProperties = {
  severity: "alternate",
  size: "medium",
  variant: "outlined",
};

const viewButtonProperties = {
  severity: "secondary",
  size: "medium",
  variant: "outlined",
};
</script>

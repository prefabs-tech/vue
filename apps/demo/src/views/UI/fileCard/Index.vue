<template>
  <UiPage :title="$t('ui.fileCard.title')" class="demo">
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
  </UiPage>
</template>

<script setup lang="ts">
import { ButtonElement, FileCard } from "@dzangolab/vue3-ui";

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

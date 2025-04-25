<template>
  <div class="file-list-wrapper">
    <FileCard
      v-for="file in files"
      :key="file.originalFileName"
      :action-buttons-visibility="actionButtonsVisibility"
      :allow-edit-description="actionButtonsVisibility?.edit"
      :archive-button-props="archiveButtonProps"
      :delete-button-props="deleteButtonProps"
      :download-button-props="downloadButtonProps"
      :edit-description-button-props="editDescriptionButtonProps"
      :file="file"
      :messages="messages"
      :share-button-props="shareButtonProps"
      :show-thumbnail="showThumbnail"
      :view-button-props="viewButtonProps"
      :visibility-detail="fileDetailVisibility"
      @click:edit-description="emitAction('edit', file)"
      @on:archive="emitAction('archive', file)"
      @on:delete="emitAction('delete', file)"
      @on:download="emitAction('download', file)"
      @on:share="emitAction('share', file)"
      @on:view="emitAction('view', file)"
    >
      <template v-if="$slots.thumbnail" #thumbnail>
        <slot name="thumbnail"></slot>
      </template>
    </FileCard>
  </div>
</template>

<script lang="ts">
export default {
  name: "FilesList",
};
</script>

<script setup lang="ts">
import { PropType } from "vue";

import FileCard from "../FileCard/Index.vue";

import type { FileMessages, IFile } from "../types/file";

defineProps({
  actionButtonsVisibility: {
    default: () => ({
      archive: true,
      delete: true,
      download: true,
      edit: true,
      share: true,
      view: true,
    }),
    type: Object,
  },
  archiveButtonProps: {
    default: () => {},
    type: Object,
  },
  deleteButtonProps: {
    default: () => {},
    type: Object,
  },
  downloadButtonProps: {
    default: () => {},
    type: Object,
  },
  editDescriptionButtonProps: {
    default: () => {},
    type: Object,
  },
  files: {
    required: true,
    type: Array as PropType<IFile[]>,
  },
  messages: {
    default: () => {},
    type: Object as PropType<FileMessages>,
  },
  shareButtonProps: {
    default: () => {},
    type: Object,
  },
  showThumbnail: {
    default: true,
    type: Boolean,
  },
  viewButtonProps: {
    default: undefined,
    type: Object,
  },
  fileDetailVisibility: {
    default: () => ({
      actions: true,
      description: true,
      downloadCount: true,
      lastDownloadedAt: true,
      originalFileName: true,
      size: true,
      uploadedAt: true,
      uploadedBy: true,
    }),
    type: Object,
  },
});

const emit = defineEmits([
  "action:archive",
  "action:delete",
  "action:download",
  "action:edit",
  "action:share",
  "action:view",
]);

const emitAction = (action: string, file: IFile) => {
  switch (action) {
    case "archive":
    case "delete":
    case "download":
    case "edit":
    case "share":
    case "view":
      emit(`action:${action}`, file);
      break;
  }
};
</script>

<style lang="css">
@import "../assets/css/files-list.css";
</style>

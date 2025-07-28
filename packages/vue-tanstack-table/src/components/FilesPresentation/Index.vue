<template>
  <FilesList
    v-if="presentation === 'list'"
    v-bind="listProps"
    :action-buttons-visibility="actionButtonsVisibility"
    :files="files"
    :file-detail-visibility="listVisibleFileDetails"
    :messages="messages"
    @action:archive="emitAction('archive', $event)"
    @action:delete="emitAction('delete', $event)"
    @action:download="emitAction('download', $event)"
    @action:edit="emitAction('edit', $event)"
    @action:share="emitAction('share', $event)"
    @action:view="emitAction('view', $event)"
  />

  <FilesTable
    v-else
    v-bind="tableProps"
    :archive-file="actionButtonsVisibility.archive"
    :delete-file="actionButtonsVisibility.delete"
    :download-file="actionButtonsVisibility.download"
    :edit-description="actionButtonsVisibility.edit"
    :files="files"
    :messages="messages"
    :share-file="actionButtonsVisibility.share"
    :view-file="actionButtonsVisibility.view"
    :visible-columns="visibleFileDetails"
    @action:archive="emitAction('archive', $event)"
    @action:delete="emitAction('delete', $event)"
    @action:download="emitAction('download', $event)"
    @action:edit="emitAction('edit', $event)"
    @action:share="emitAction('share', $event)"
    @action:view="emitAction('view', $event)"
  />
</template>

<script lang="ts">
export default {
  name: "FilesPresentation",
};
</script>

<script setup lang="ts">
import { FilesList } from "@prefabs.tech/vue3-ui";
import { computed } from "vue";

import FilesTable from "../FilesTable/Index.vue";

import type { IFile, TableMessages } from "@prefabs.tech/vue3-ui";
import type { PropType } from "vue";

const props = defineProps({
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
  files: {
    default: () => [],
    type: Array as PropType<IFile[]>,
  },
  messages: {
    default: undefined,
    type: Object as PropType<TableMessages>,
  },
  listProps: {
    default: () => {},
    type: Object,
  },
  presentation: {
    default: () => "list",
    type: String,
    validator: (value: string) => ["list", "table"].includes(value),
  },
  tableProps: {
    default: () => {},
    type: Object,
  },
  visibleFileDetails: {
    default: () => [
      "actions",
      "description",
      "downloadCount",
      "lastDownloadedAt",
      "originalFileName",
      "size",
      "uploadedAt",
      "uploadedBy",
    ],
    type: Array as PropType<string[]>,
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

const listVisibleFileDetails = computed(() => {
  const fileDetails = [
    "actions",
    "description",
    "downloadCount",
    "lastDownloadedAt",
    "originalFileName",
    "size",
    "uploadedAt",
    "uploadedBy",
  ];

  return Object.fromEntries(
    fileDetails.map((key) => [key, props.visibleFileDetails.includes(key)]),
  );
});

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

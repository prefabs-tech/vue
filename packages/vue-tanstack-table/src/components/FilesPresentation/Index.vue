<template>
  <FilesList
    v-if="presentation === 'list'"
    v-bind="listProps"
    :files="files"
    :messages="messages"
    :file-detail-visibility="fileDetailVisibility"
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
    :files="files"
    :messages="messages"
    :visible-columns="visibleColumns"
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
import { FilesList } from "@dzangolab/vue3-ui";
import { computed } from "vue";

import FilesTable from "../FilesTable/Index.vue";

import type { IFile, TableMessages } from "@dzangolab/vue3-ui";
import type { PropType } from "vue";

const props = defineProps({
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
});

const emit = defineEmits([
  "action:archive",
  "action:delete",
  "action:download",
  "action:edit",
  "action:share",
  "action:view",
]);

const visibleColumns = computed(() => {
  return Object.keys(props.fileDetailVisibility).length
    ? Object.entries(props.fileDetailVisibility)
        .filter(([, value]) => value)
        .map(([key]) => key)
    : [];
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

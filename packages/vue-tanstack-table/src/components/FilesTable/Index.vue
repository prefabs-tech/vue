<template>
  <Table
    v-bind="tableOptions"
    :id="id"
    :columns-data="mergedColumns"
    :data="files"
    :data-action-menu="actionMenuData"
    :empty-table-message="props.messages?.tableEmpty || 'The table is empty'"
    :initial-sorting="initialSorting"
    :is-loading="isLoading"
    :is-server-table="isServerTable"
    :persist-state="persistState"
    :persist-state-storage="persistStateStorage"
    :total-records="totalRecords"
    :visible-columns="visibleColumns"
    class="table-files"
    @action:click="onActionClick"
    @action:select="onActionSelect"
    @update:request="onUpdateRequest"
  >
    <template v-if="$slots.toolbar" #toolbar>
      <slot name="toolbar" />
    </template>

    <template v-if="$slots.footer" #footer>
      <slot name="footer" />
    </template>

    <template v-if="$slots.pagination" #pagination>
      <slot name="pagination" />
    </template>
  </Table>
</template>

<script lang="ts">
export default {
  name: "FilesTable",
};
</script>

<script setup lang="ts">
import { formatDateTime } from "@dzangolab/vue3-ui";
import { computed, h } from "vue";

import Table from "../Table.vue";

import type {
  DataActionsMenuItem,
  SortingState,
  TableColumnDefinition,
  TRequestJSON,
} from "../../types";
import type { IFile, TableMessages } from "@dzangolab/vue3-ui";
import type { PropType } from "vue";

const props = defineProps({
  archiveFile: Boolean,
  columnsData: {
    default: () => [],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: Array as PropType<TableColumnDefinition<any>[]>,
  },
  deleteFile: Boolean,
  downloadFile: Boolean,
  editDescription: Boolean,
  initialSorting: {
    default: () => [],
    type: Array as PropType<SortingState>,
  },
  files: {
    default: () => [],
    type: Array as PropType<IFile[]>,
  },
  id: {
    default: "files-table",
    type: String,
  },
  isLoading: Boolean,
  isServerTable: Boolean,
  persistState: Boolean,
  persistStateStorage: {
    default: "localStorage",
    type: String,
    validator: (value: string) =>
      ["localStorage", "sessionStorage"].includes(value),
  },
  messages: {
    default: undefined,
    type: Object as PropType<TableMessages>,
  },
  shareFile: Boolean,
  tableOptions: {
    default: () => ({}),
    type: Object,
  },
  totalRecords: {
    default: 0,
    type: Number,
  },
  viewFile: Boolean,
  visibleColumns: {
    default: () => [],
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
  "update:request",
]);

const defaultColumns: TableColumnDefinition<IFile>[] = [
  {
    accessorKey: "originalFileName",
    enableColumnFilter: true,
    enableSorting: true,
    filterPlaceholder: props.messages?.searchPlaceholder || "File name example",
    header: props.messages?.originalFileNameHeader || "File",
  },
  {
    accessorKey: "description",
    enableSorting: true,
    header: props.messages?.descriptionHeader || "Description",
    tooltip: true,
  },
  {
    accessorKey: "size",
    enableSorting: true,
    header: props.messages?.fileSizeHeader || "Size",
  },
  {
    accessorKey: "uploadedBy",
    cell: ({ row: { original } }) => {
      if (!original.uploadedBy) {
        return h("code", {}, "—");
      }

      if (original.uploadedBy.givenName || original.uploadedBy.lastName) {
        return `${original.uploadedBy.givenName || ""} ${
          original.uploadedBy.lastName || ""
        }`;
      }

      return original.uploadedBy.email;
    },
    enableSorting: true,
    header: props.messages?.uploadedByHeader || "Uploaded by",
  },
  {
    accessorKey: "uploadedAt",
    cell: ({ getValue }) => {
      return formatDateTime(getValue() as number);
    },
    enableSorting: true,
    header: props.messages?.uploadedAtHeader || "Uploaded at",
  },
  {
    accessorKey: "downloadCount",
    align: "right",
    enableSorting: true,
    header: props.messages?.downloadCountHeader || "Download count",
  },
  {
    accessorKey: "lastDownloadedAt",
    cell: ({ getValue }) => {
      if (getValue()) {
        return formatDateTime(getValue() as number);
      }

      return h("code", {}, "—");
    },
    enableColumnFilter: false,
    enableSorting: true,
    header: props.messages?.lastDownloadedAtHeader || "Last downloaded at",
  },
];

const actionMenuData = computed(() => {
  const actionItems: DataActionsMenuItem[] = [];

  if (props.archiveFile) {
    actionItems.push({
      confirmationOptions: {
        body:
          props.messages?.archiveConfirmationMessage ||
          "Are you sure you want to archive this file?",
        header: props.messages?.archiveConfirmationHeader || "Archive file",
      },
      icon: "pi pi-book",
      key: "archive",
      label: props.messages?.archiveAction || "Archive",
      requireConfirmationModal: true,
    });
  }

  if (props.downloadFile) {
    actionItems.push({
      icon: "pi pi-download",
      key: "download",
      label: props.messages?.downloadAction || "Download",
    });
  }

  if (props.editDescription) {
    actionItems.push({
      icon: "pi pi-pencil",
      key: "edit",
      label: props.messages?.editDescriptionAction || "Edit description",
    });
  }

  if (props.shareFile) {
    actionItems.push({
      icon: "pi pi-share-alt",
      key: "share",
      label: props.messages?.shareAction || "Share",
    });
  }

  if (props.viewFile) {
    actionItems.push({
      icon: "pi pi-eye",
      key: "view",
      label: props.messages?.viewAction || "View",
    });
  }

  if (props.deleteFile) {
    actionItems.push({
      class: "danger",
      confirmationOptions: {
        body:
          props.messages?.deleteConfirmationMessage ||
          "Are you sure you want to delete this file?",
        header: props.messages?.deleteConfirmationHeader || "Delete file",
      },
      icon: "pi pi-trash",
      label: props.messages?.deleteAction || "Delete",
      key: "delete",
      requireConfirmationModal: true,
    });
  }

  return actionItems;
});

const mergedColumns = computed(() => [
  ...defaultColumns.map((defaultColumn) => {
    const override = props.columnsData.find(
      (column) => column.accessorKey === defaultColumn.accessorKey,
    );
    return override ? { ...defaultColumn, ...override } : defaultColumn;
  }),
  ...props.columnsData.filter(
    (column) =>
      !defaultColumns.some(
        (defaultColumn) => defaultColumn.accessorKey === column.accessorKey,
      ),
  ),
]);

const onActionClick = (data: IFile) => {
  if (props.archiveFile) {
    emit("action:archive", data);
  } else if (props.downloadFile) {
    emit("action:download", data);
  } else if (props.editDescription) {
    emit("action:edit", data);
  } else if (props.shareFile) {
    emit("action:share", data);
  } else if (props.viewFile) {
    emit("action:view", data);
  } else if (props.deleteFile) {
    emit("action:delete", data);
  }
};

const onActionSelect = (rowData: { action: string; data: IFile }) => {
  switch (rowData.action) {
    case "archive":
      emit("action:archive", rowData.data);
      break;
    case "delete":
      emit("action:delete", rowData.data);
      break;
    case "download":
      emit("action:download", rowData.data);
      break;
    case "edit":
      emit("action:edit", rowData.data);
      break;
    case "share":
      emit("action:share", rowData.data);
      break;
    case "view":
      emit("action:view", rowData.data);
      break;
  }
};

const onUpdateRequest = (fileRequest: TRequestJSON) => {
  emit("update:request", fileRequest);
};
</script>

<style lang="css">
@import "../../assets/css/files-table.css";
</style>

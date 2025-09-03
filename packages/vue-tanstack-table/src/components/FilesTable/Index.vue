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
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { formatDateTime } from "@prefabs.tech/vue3-ui";
import { computed, h } from "vue";

import Table from "../Table.vue";

import type {
  DataActionsMenuItem,
  SortingState,
  TableColumnDefinition,
  TRequestJSON,
} from "../../types";
import type { IFile, TableMessages } from "@prefabs.tech/vue3-ui";
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

const { locale } = useI18n();

const defaultColumns: TableColumnDefinition<IFile>[] = [
  {
    accessorKey: "originalFileName",
    enableColumnFilter: true,
    enableSorting: true,
    filterPlaceholder: "File name",
    header: "File",
  },
  {
    accessorKey: "description",
    enableColumnFilter: true,
    enableSorting: true,
    filterPlaceholder: "Description",
    header: "Description",
    tooltip: true,
  },
  {
    accessorKey: "size",
    enableColumnFilter: !props.isServerTable,
    enableSorting: !props.isServerTable,
    filterPlaceholder: "Size",
    header: "Size",
    meta: {
      filterVariant: "range",
    },
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
    enableColumnFilter: !props.isServerTable,
    enableSorting: !props.isServerTable,
    filterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId) as {
        givenName?: string;
        lastName?: string;
        email?: string;
      };
      if (!filterValue || filterValue.length === 0) {
        return true;
      }

      const fullName =
        `${value.givenName || ""} ${value.lastName || ""}`.trim();
      return (
        fullName.toLowerCase().includes(filterValue.toLowerCase()) ||
        (value.email?.toLowerCase().includes(filterValue.toLowerCase()) ??
          false)
      );
    },
    filterPlaceholder: "Name",
    header: "Uploaded by",
  },
  {
    accessorKey: "uploadedAt",
    cell: ({ getValue }) => {
      return formatDateTime(getValue() as number, locale?.value);
    },
    enableColumnFilter: true,
    enableSorting: true,
    filterPlaceholder: "Date range",
    header: "Uploaded at",
    meta: {
      filterVariant: "dateRange",
      serverFilterFn: "between",
    },
  },
  {
    accessorKey: "downloadCount",
    align: "right",
    enableColumnFilter: true,
    enableSorting: true,
    filterPlaceholder: "Number of downloads",
    header: "Download count",
    meta: {
      filterVariant: "range",
    },
  },
  {
    accessorKey: "lastDownloadedAt",
    cell: ({ getValue }) => {
      if (getValue()) {
        return formatDateTime(getValue() as number, locale?.value);
      }

      return h("code", {}, "—");
    },
    enableColumnFilter: true,
    enableSorting: true,
    filterPlaceholder: "Date range",
    header: "Last downloaded at",
    meta: {
      filterVariant: "dateRange",
      serverFilterFn: "between",
    },
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

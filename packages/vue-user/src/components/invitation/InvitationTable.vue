<template>
  <LoadingPage :loading="isLoading" />

  <Table
    v-if="!isLoading"
    v-bind="tableOptions"
    :id="id"
    :columns-data="mergedColumns"
    :data="invitations"
    :data-action-menu="actionMenuData"
    :empty-table-message="t('user.invitation.table.emptyMessage')"
    :initial-sorting="initialSorting"
    :is-server-table="isServerTable"
    :locale="String(locale)"
    :pagination-options="{
      pageInputLabel: t('user.invitation.table.pagination.pageInputLabel'),
      itemsPerPageControlLabel: t(
        'user.invitation.table.pagination.rowsPerPage',
      ),
    }"
    :persist-state="persistState"
    :persist-state-storage="persistStateStorage"
    :total-records="totalRecords"
    :visible-columns="visibleColumns"
    class="table-invitations"
    @action:select="onActionSelect"
    @update:request="onUpdateRequest"
  >
    <template v-if="showInviteAction" #toolbar>
      <div className="table-actions">
        <ButtonElement
          :label="t('user.invitation.table.inviteUser')"
          @click="showModal = true"
        >
          <template #iconLeft>
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12.25a3.75 3.75 0 1 1 3.75-3.75A3.75 3.75 0 0 1 12 12.25m0-6a2.25 2.25 0 1 0 2.25 2.25A2.25 2.25 0 0 0 12 6.25m7 13a.76.76 0 0 1-.75-.75c0-1.95-1.06-3.25-6.25-3.25s-6.25 1.3-6.25 3.25a.75.75 0 0 1-1.5 0c0-4.75 5.43-4.75 7.75-4.75s7.75 0 7.75 4.75a.76.76 0 0 1-.75.75"
                fill="currentColor"
              />
            </svg>
          </template>
        </ButtonElement>

        <InvitationModal
          :apps="apps"
          :expiry-mode="expiryMode"
          :roles="roles"
          :show="showModal"
          :submit-label="submitLabel"
          :title="invitationModalTitle"
          @on:close="onCloseInvitation"
          @submit="$emit('on:submitInvitation', $event)"
        />
      </div>
    </template>
  </Table>
</template>

<script lang="ts">
export default {
  name: "InvitationTable",
};
</script>

<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Table } from "@prefabs.tech/vue3-tanstack-table";
import {
  BadgeComponent,
  ButtonElement,
  formatDateTime,
  LoadingPage,
} from "@prefabs.tech/vue3-ui";
import { computed, h, ref } from "vue";

import InvitationModal from "./InvitationModal.vue";
import {
  INVITATION_STATUS_ACCEPTED,
  INVITATION_STATUS_EXPIRED,
  INVITATION_STATUS_PENDING,
  INVITATION_STATUS_REVOKED,
  ROLE_ADMIN,
  ROLE_SUPERADMIN,
  ROLE_USER,
} from "../../constant";
import { useTranslations } from "../../index";

import type {
  Invitation,
  InvitationAppOption,
  InvitationRoleOption,
} from "../../types";
import type {
  FilterOption,
  SortingState,
  TableColumnDefinition,
  TableRow,
  TRequestJSON,
} from "@prefabs.tech/vue3-tanstack-table";
import type { PropType } from "vue";

const props = defineProps({
  appFilterOptions: {
    default: () => [],
    type: Array as PropType<Array<FilterOption>>,
  },
  apps: {
    default: () => [],
    type: Array as PropType<Array<InvitationAppOption>>,
  },
  columnsData: {
    default: () => [],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: Array as PropType<TableColumnDefinition<any>[]>,
  },
  expiryMode: {
    default: undefined,
    type: String,
    validator: (value: string) => ["calendar", "days"].includes(value),
  },
  id: {
    default: "invitation-table",
    type: String,
  },
  initialSorting: {
    default: () => [],
    type: Array as PropType<SortingState>,
  },
  invitationModalTitle: {
    default: "",
    type: String,
  },
  invitations: {
    default: () => [],
    type: Array as PropType<Invitation[]>,
  },
  isLoading: Boolean,
  isServerTable: Boolean,
  persistState: {
    default: true,
    type: Boolean,
  },
  persistStateStorage: {
    default: "localStorage",
    type: String,
    validator: (value: string) =>
      ["localStorage", "sessionStorage"].includes(value),
  },
  roleFilterOptions: {
    default: () => [],
    type: Array as PropType<Array<FilterOption>>,
  },
  roles: {
    default: () => [],
    type: Array as PropType<Array<InvitationRoleOption>>,
  },
  showInviteAction: {
    default: true,
    type: Boolean,
  },
  statutsFilterOptions: {
    default: () => [],
    type: Array as PropType<Array<FilterOption>>,
  },
  submitLabel: {
    default: undefined,
    type: String,
  },
  tableOptions: {
    default: () => ({}),
    type: Object,
  },
  totalRecords: {
    default: 0,
    type: Number,
  },
  visibleColumns: {
    default: () => [],
    type: Array as PropType<string[]>,
  },
});

const emit = defineEmits([
  "action:delete",
  "action:resend",
  "action:revoke",
  "on:closeInvitation",
  "on:submitInvitation",
  "update:request",
]);

const messages = useTranslations();
const { locale, t } = useI18n({ messages });

const showModal = ref<boolean>(false);

const actionMenuData = computed(() => [
  {
    confirmationOptions: {
      body: t("user.invitation.table.confirmation.resend.message"),
      header: t("user.invitation.table.confirmation.header"),
    },
    disabled: (invitation: Invitation) =>
      !!invitation.acceptedAt ||
      !!invitation.revokedAt ||
      isExpired(invitation.expiresAt),
    icon: "pi pi-replay",
    key: "resend",
    label: t("user.invitation.table.actions.resend"),
    requireConfirmationModal: true,
  },
  {
    class: "danger",
    confirmationOptions: {
      body: t("user.invitation.table.confirmation.revoke.message"),
      header: t("user.invitation.table.confirmation.header"),
    },
    disabled: (invitation: Invitation) =>
      !!invitation.acceptedAt ||
      !!invitation.revokedAt ||
      isExpired(invitation.expiresAt),
    icon: "pi pi-times",
    key: "revoke",
    label: t("user.invitation.table.actions.revoke"),
    requireConfirmationModal: true,
  },
  {
    class: "danger",
    confirmationOptions: {
      body: t("user.invitation.table.confirmation.delete.message"),
      header: t("user.invitation.table.confirmation.header"),
    },
    icon: "pi pi-trash",
    key: "delete",
    label: t("user.invitation.table.actions.delete"),
    requireConfirmationModal: true,
  },
]);

const appNameMap = computed(() => {
  const apps = props.apps ?? [];

  return new Map(apps.map((app) => [app.id, app.name]));
});

const defaultColumns = computed<TableColumnDefinition<Invitation>[]>(() => [
  {
    accessorKey: "email",
    enableColumnFilter: true,
    enableSorting: true,
    filterPlaceholder: t("user.invitation.table.placeholder.search"),
    header: t("user.invitation.table.defaultColumns.email"),
  },
  {
    align: "center",
    accessorKey: "appId",
    cell: ({ row }) => appNameMap.value?.get(row.original.appId) || "-",
    enableColumnFilter: true,
    enableSorting: true,
    header: t("user.invitation.table.defaultColumns.app"),
    meta: {
      filterOptions: props.appFilterOptions.length
        ? props.appFilterOptions
        : appNameMap.value
          ? Array.from(appNameMap.value.entries()).map(([id, name]) => ({
              label: name,
              value: id,
            }))
          : [],
      filterVariant: "multiselect",
    },
    filterPlaceholder: t("user.invitation.table.placeholder.app"),
    sortingFn: (rowA, rowB, columnId) => {
      const appRowA = appNameMap.value.get(rowA.original.appId) || "";
      const appRowB = appNameMap.value.get(rowB.original.appId) || "";

      return appRowA.localeCompare(appRowB);
    },
  },
  {
    align: "center",
    accessorKey: "role",
    cell: ({ getValue, row: original }) => {
      const roles = (original as unknown as { roles: string[] })?.roles;
      if (Array.isArray(roles)) {
        return roles.map((role, index) =>
          h(BadgeComponent, {
            label: role,
            severity: role === ROLE_ADMIN ? "primary" : "success",
            fullWidth: true,
            key: role + index,
          }),
        );
      }
      const role = getValue() as string;
      return h(BadgeComponent, {
        label: role,
        severity: role === ROLE_ADMIN ? "primary" : "success",
        fullWidth: true,
      });
    },
    enableColumnFilter: true,
    enableSorting: true,
    header: t("user.invitation.table.defaultColumns.role"),
    meta: {
      filterVariant: "multiselect",
      filterOptions: props.roleFilterOptions.length
        ? props.roleFilterOptions
        : [
            {
              label: t("user.table.role.admin"),
              value: ROLE_ADMIN,
            },
            {
              label: t("user.table.role.superadmin"),
              value: ROLE_SUPERADMIN,
            },
            {
              label: t("user.table.role.user"),
              value: ROLE_USER,
            },
          ],
    },
    filterPlaceholder: t("user.invitation.table.placeholder.role"),
  },
  {
    accessorFn: (original: Invitation) => {
      return (
        (original?.invitedBy?.givenName ? original?.invitedBy?.givenName : "") +
          (original?.invitedBy?.middleNames
            ? " " + original?.invitedBy?.middleNames
            : "") +
          (original?.invitedBy?.surname
            ? " " + original?.invitedBy?.surname
            : "") || "-"
      );
    },
    accessorKey: "invitedBy",
    cell: ({ getValue }) => getValue(),
    enableColumnFilter: true,
    enableSorting: true,
    header: t("user.invitation.table.defaultColumns.invitedBy"),
    filterPlaceholder: t("user.invitation.table.placeholder.search"),
  },
  {
    accessorKey: "expiresAt",
    cell: ({ getValue }) =>
      formatDateTime(getValue() as string, locale?.value, {
        day: "2-digit",
        hour: "2-digit",
        hour12: false,
        minute: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
    enableColumnFilter: true,
    enableSorting: true,
    header: t("user.invitation.table.defaultColumns.expiresAt"),
    meta: {
      filterVariant: "dateRange",
      serverFilterFn: "between",
    },
    filterPlaceholder: t("user.invitation.table.placeholder.date"),
  },
  {
    align: "center",
    accessorKey: "status",
    enableColumnFilter: true,
    enableSorting: !props.isServerTable,
    filterFn: (row, columnId, filterValue) => {
      const { acceptedAt, revokedAt, expiresAt } = row.original;

      if (!filterValue || filterValue.length === 0) {
        return true;
      }

      let status = INVITATION_STATUS_PENDING;

      if (acceptedAt) {
        status = INVITATION_STATUS_ACCEPTED;
      } else if (revokedAt) {
        status = INVITATION_STATUS_REVOKED;
      } else if (isExpired(expiresAt)) {
        status = INVITATION_STATUS_EXPIRED;
      }

      return filterValue.includes(status);
    },
    header: t("user.invitation.table.defaultColumns.status"),
    cell: ({ row }) => {
      const { acceptedAt, revokedAt, expiresAt } = row.original;
      const label = getStatusLabel(row);
      const severity = acceptedAt
        ? "success"
        : revokedAt
          ? "danger"
          : isExpired(expiresAt)
            ? "secondary"
            : "warning";
      return h(BadgeComponent, { label, severity });
    },
    meta: {
      filterVariant: "multiselect",
      filterOptions: props.statutsFilterOptions.length
        ? props.statutsFilterOptions
        : [
            {
              label: t("user.invitation.table.status.accepted"),
              value: INVITATION_STATUS_ACCEPTED,
            },
            {
              label: t("user.invitation.table.status.revoked"),
              value: INVITATION_STATUS_REVOKED,
            },
            {
              label: t("user.invitation.table.status.expired"),
              value: INVITATION_STATUS_EXPIRED,
            },
            {
              label: t("user.invitation.table.status.pending"),
              value: INVITATION_STATUS_PENDING,
            },
          ],
    },
    filterPlaceholder: t("user.invitation.table.placeholder.status"),
    sortingFn: (rowA, rowB, columnId) => {
      return getStatusLabel(rowA).localeCompare(getStatusLabel(rowB));
    },
  },
]);

const mergedColumns = computed(() => [
  ...defaultColumns.value.map((defaultColumn) => {
    const override = props.columnsData.find(
      (column) => column.accessorKey === defaultColumn.accessorKey,
    );
    return override ? { ...defaultColumn, ...override } : defaultColumn;
  }),
  ...props.columnsData.filter(
    (column) =>
      !defaultColumns.value.some(
        (defaultColumn) => defaultColumn.accessorKey === column.accessorKey,
      ),
  ),
]);

const isExpired = (date?: string | Date | number) => {
  return !!(date && new Date(date) < new Date());
};

const getStatusLabel = (row: TableRow<Invitation>) => {
  const { acceptedAt, expiresAt, revokedAt } = row.original;

  if (acceptedAt) {
    return t("user.invitation.table.status.accepted");
  } else if (revokedAt) {
    return t("user.invitation.table.status.revoked");
  } else if (isExpired(expiresAt)) {
    return t("user.invitation.table.status.expired");
  }

  return t("user.invitation.table.status.pending");
};

const onActionSelect = (rowData: { action: string; data: Invitation }) => {
  switch (rowData.action) {
    case "delete":
      emit("action:delete", rowData.data);
      break;
    case "resend":
      emit("action:resend", rowData.data);
      break;
    case "revoke":
      emit("action:revoke", rowData.data);
      break;
  }
};

const onCloseInvitation = () => {
  showModal.value = false;

  emit("on:closeInvitation");
};

const onUpdateRequest = (invitationRequest: TRequestJSON) => {
  emit("update:request", invitationRequest);
};

defineExpose({
  showModal,
});
</script>

<style lang="css">
@import "../../assets/css/invitations-table.css";
</style>

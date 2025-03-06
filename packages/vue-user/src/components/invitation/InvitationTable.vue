<template>
  <Table
    :columns-data="[...defaultColumns, ...columnsData]"
    :data="invitations"
  />
</template>

<script lang="ts">
export default {
  name: "InvitationTable",
};
</script>

<script setup lang="ts">
import { useI18n } from "@dzangolab/vue3-i18n";
import { Table } from "@dzangolab/vue3-tanstack-table";
import { BadgeComponent, formatDateTime } from "@dzangolab/vue3-ui";
import { h } from "vue";

import { useTranslations } from "../../index";

import type { Invitation, UserType } from "../../types";
import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
import type { PropType } from "vue";

const messages = useTranslations();

const { t } = useI18n({ messages });

defineProps({
  columnsData: {
    default: () => [],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: Array as PropType<TableColumnDefinition<any>[]>,
  },
  invitations: {
    default: () => [],
    type: Array as PropType<Invitation[]>,
  },
});

const defaultColumns: TableColumnDefinition<Invitation>[] = [
  {
    accessorKey: "email",
    enableSorting: true,
    header: t("user.table.defaultColumns.email"),
  },
  {
    align: "center",
    accessorKey: "app",
    header: t("user.table.defaultColumns.app"),
    cell: ({ row }) => row.original.appId || "—",
  },
  {
    accessorKey: "role",
    header: t("user.table.defaultColumns.role"),
    cell: ({ getValue, row: original }) => {
      const roles = (original as unknown as { roles: string[] })?.roles;
      if (Array.isArray(roles)) {
        return roles.map((role, index) =>
          h(BadgeComponent, {
            label: role,
            severity: role === "ADMIN" ? "primary" : "success",
            fullWidth: true,
            key: role + index,
          }),
        );
      }
      const role = getValue() as string;
      return h(BadgeComponent, {
        label: role,
        severity: role === "ADMIN" ? "primary" : "success",
        fullWidth: true,
      });
    },
  },
  {
    accessorKey: "invitedBy",
    header: t("user.table.defaultColumns.invitedBy"),
    cell: ({ getValue }) => {
      const invitedBy = getValue() as UserType;
      if (!invitedBy) {
        return "—";
      }

      return invitedBy.givenName || invitedBy.surname
        ? `${invitedBy.givenName} ${invitedBy.surname}`
        : invitedBy.email;
    },
  },
  {
    align: "center",
    accessorKey: "status",
    header: t("user.table.defaultColumns.status"),
    cell: ({ row }) => {
      const { acceptedAt, revokedAt, expiresAt } = row.original;
      const label = acceptedAt
        ? t("user.table.status.accepted")
        : revokedAt
          ? t("user.table.status.revoked")
          : isExpired(expiresAt)
            ? t("user.table.status.expired")
            : t("user.table.status.pending");
      const severity = acceptedAt
        ? "success"
        : revokedAt
          ? "danger"
          : isExpired(expiresAt)
            ? "secondary"
            : "warning";
      return h(BadgeComponent, { label, severity });
    },
  },
  {
    accessorKey: "expiresAt",
    header: t("user.table.defaultColumns.expiresAt"),
    cell: ({ getValue }) => formatDateTime(getValue() as string),
  },
];

const isExpired = (date?: string | Date | number) => {
  return !!(date && new Date(date) < new Date());
};
</script>

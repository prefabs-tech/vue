<template>
  <Table :columns-data="[...defaultColumns, ...columnsData]" />
</template>

<script lang="ts">
export default {
  name: "InvitationTable",
};
</script>

<script setup lang="ts">
import { Table } from "@dzangolab/vue3-tanstack-table";
import { BadgeComponent } from "@dzangolab/vue3-ui";

import type { Invitation } from "../../types/invitation";
import type { TableColumnDefinition } from "@dzangolab/vue3-tanstack-table";
import type { PropType } from "vue";

defineProps({
  columnsData: {
    default: () => [],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: Array as PropType<TableColumnDefinition<any>[]>,
  },
});

const defaultColumns: TableColumnDefinition<Invitation>[] = [
  {
    accessorKey: "email",
    enableSorting: true,
    header: "Email",
  },
  {
    align: "center",
    accessorKey: "app",
    header: "App",
    cell: ({ row }) => row.original.appId || "-",
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ getValue, row: original }) => {
      const roles = (original as unknown as { roles: string[] })?.roles;
      if (Array.isArray(roles)) {
        return roles.map((role, index) => ({
          component: BadgeComponent,
          props: {
            label: role,
            color: role === "ADMIN" ? "default" : "green",
            fullWidth: true,
            key: role + index,
          },
        }));
      }
      const role = getValue() as string;
      return {
        component: BadgeComponent,
        props: {
          label: role,
          color: role === "ADMIN" ? "default" : "green",
          fullWidth: true,
        },
      };
    },
  },
];
</script>

<style></style>

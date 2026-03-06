<template>
  <UserPage
    :subtitle="$t('user.subtitle.invitationTable')"
    :title="$t('user.label.invitationTable')"
    class="demo-invitation-table"
  >
    <section>
      <h2>{{ $t("user.label.basic") }}</h2>

      <div class="section-content">
        <InvitationTable
          id="invitation-table"
          :apps="apps"
          :columns-data="[
            {
              accessorKey: 'invitedBy',
              maxWidth: '20rem',
              minWidth: '20rem',
              width: '20rem',
            },
          ]"
          :initial-sorting="[{ id: 'email', desc: false }]"
          :invitation-modal-title="$t('user.label.inviteUser')"
          :invitations="invitations"
          :visible-columns="visibleColumns"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;InvitationTable
              id="invitation-table"
              :apps="apps"
              :columns-data="[{
                accessorKey: 'invitedBy',
                maxWidth: '20rem',
                minWidth: '20rem',
                width: '20rem',
              }]"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :invitations="invitations"
              :visible-columns="visibleColumns"
              invitation-modal-title="Invite user"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { InvitationTable } from "@prefabs.tech/vue3-user";

          import { invitations } from "../Table/data";

          const visibleColumns = [
            "email",
            "appId",
            "role",
            "invitedBy",
            "expiresAt",
            "status",
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <ComponentDocumentation
      :events-data="eventsData"
      :props-data="propsData"
      :props-table-title="
        $t('common.properties', { value: 'InvitationTableProperties' })
      "
    />

    <section>
      <!-- eslint-disable -->
      <SshPre language="html-vue">
        interface Invitation {
          acceptedAt: number | null;
          appId: number;
          createdAt: number;
          email: string;
          expiresAt: number;
          id: number;
          invitedBy?: UserType;
          invitedById: string;
          payload: any;
          revokedAt: number | null;
          role: string;
          token?: string;
          updatedAt: number;
        }

        interface InvitationAppOption {
          id: number;
          label?: string;
          name: string;
          origin: string;
          supportedRoles: InvitationRoleOption[];
        }

        interface InvitationPayload {
          appId?: number;
          email: string;
          expiresAt?: Date | string;
          role?: string;
        }

        interface InvitationRoleOption {
          id: number;
          name: string;
        }
      </SshPre>
      <!-- eslint-enable -->
    </section>
  </UserPage>
</template>

<script lang="ts">
export default {
  name: "InvitationTableDemo",
};
</script>

<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { InvitationTable } from "@prefabs.tech/vue3-user";
import { computed } from "vue";

import { apps } from "./data";
import UserPage from "./UserPage.vue";
import ComponentDocumentation from "../../components/ComponentDocumentation.vue";
import { invitations } from "../Table/data";

const { t } = useI18n();

const visibleColumns = [
  "email",
  "appId",
  "role",
  "invitedBy",
  "expiresAt",
  "status",
];

const eventsData = computed(() => [
  {
    description: t("user.documentation.eventDescription.invitation.delete"),
    name: "action:delete",
    payload: "invitation: Invitation",
  },
  {
    description: t("user.documentation.eventDescription.invitation.resend"),
    name: "action:resend",
    payload: "invitation: Invitation",
  },
  {
    description: t("user.documentation.eventDescription.invitation.revoke"),
    name: "action:revoke",
    payload: "invitation: Invitation",
  },
  {
    description: t(
      "user.documentation.eventDescription.invitation.closeInvitation",
    ),
    name: "on:closeInvitation",
    payload: "void",
  },
  {
    description: t("user.documentation.eventDescription.invitation.submitted"),
    name: "submitted",
    payload: "void",
  },
  {
    description: t(
      "user.documentation.eventDescription.invitation.updateRequest",
    ),
    name: "update:request",
    payload: "request: TRequestJSON",
  },
]);

const propsData = computed(() => [
  {
    default: "-",
    description: t(
      "user.documentation.propsDescription.invitation.appFilterOptions",
    ),
    prop: "appFilterOptions",
    type: "Array<FilterOption>",
  },
  {
    default: "-",
    description: t("user.documentation.propsDescription.invitation.apps"),
    prop: "apps",
    type: "Array<InvitationAppOption>",
  },
  {
    default: "-",
    description: t(
      "user.documentation.propsDescription.invitation.columnsData",
    ),
    prop: "columnsData",
    type: "TableColumnDefinition<any>[]",
  },
  {
    default: "-",
    description: t("user.documentation.propsDescription.invitation.expiryMode"),
    prop: "expiryMode",
    type: '"calendar" | "days"',
  },
  {
    default: '"invitation-table"',
    description: t("user.documentation.propsDescription.invitation.id"),
    prop: "id",
    type: "String",
  },
  {
    default: "-",
    description: t(
      "user.documentation.propsDescription.invitation.initialSorting",
    ),
    prop: "initialSorting",
    type: "SortingState",
  },
  {
    default: "-",
    description: t(
      "user.documentation.propsDescription.invitation.invitationModalTitle",
    ),
    prop: "invitationModalTitle",
    type: "String",
  },
  {
    default: "-",
    description: t(
      "user.documentation.propsDescription.invitation.invitations",
    ),
    prop: "invitations",
    type: "Invitation[]",
  },
  {
    default: "false",
    description: t("user.documentation.propsDescription.invitation.isLoading"),
    prop: "isLoading",
    type: "Boolean",
  },
  {
    default: "false",
    description: t(
      "user.documentation.propsDescription.invitation.isServerTable",
    ),
    prop: "isServerTable",
    type: "Boolean",
  },
  {
    default: "true",
    description: t(
      "user.documentation.propsDescription.invitation.persistState",
    ),
    prop: "persistState",
    type: "Boolean",
  },
  {
    default: '"localStorage"',
    description: t(
      "user.documentation.propsDescription.invitation.persistStateStorage",
    ),
    prop: "persistStateStorage",
    type: '"localStorage" | "sessionStorage"',
  },
  {
    default: "-",
    description: t(
      "user.documentation.propsDescription.invitation.roleFilterOptions",
    ),
    prop: "roleFilterOptions",
    type: "Array<FilterOption>",
  },
  {
    default: "-",
    description: t("user.documentation.propsDescription.invitation.roles"),
    prop: "roles",
    type: "Array<InvitationRoleOption>",
  },
  {
    default: "true",
    description: t(
      "user.documentation.propsDescription.invitation.showInviteAction",
    ),
    prop: "showInviteAction",
    type: "Boolean",
  },
  {
    default: "-",
    description: t(
      "user.documentation.propsDescription.invitation.statutsFilterOptions",
    ),
    prop: "statusFilterOptions",
    type: "Array<FilterOption>",
  },
  {
    default: "-",
    description: t(
      "user.documentation.propsDescription.invitation.submitLabel",
    ),
    prop: "submitLabel",
    type: "String",
  },
  {
    default: "-",
    description: t(
      "user.documentation.propsDescription.invitation.tableOptions",
    ),
    prop: "tableOptions",
    type: "Object",
  },
  {
    default: "0",
    description: t(
      "user.documentation.propsDescription.invitation.totalRecords",
    ),
    prop: "totalRecords",
    type: "Number",
  },
  {
    default: "-",
    description: t(
      "user.documentation.propsDescription.invitation.visibleColumns",
    ),
    prop: "visibleColumns",
    type: "string[]",
  },
]);
</script>

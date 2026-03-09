<template>
  <UserPage
    :subtitle="$t('user.subtitle.usersTable')"
    :title="$t('user.label.usersTable')"
    class="demo-users-table"
  >
    <section>
      <h2>{{ $t("user.label.basic") }}</h2>

      <div class="section-content">
        <UsersTable
          id="users-table"
          :initial-sorting="[{ id: 'email', desc: false }]"
          :invitation-modal-title="$t('user.label.inviteUser')"
          :users="allUsers"
          :visible-columns="visibleColumns"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;UsersTable
              id="users-table"
              :initial-sorting="[{ id: 'email', desc: false }]"
              :users="users"
              :visible-columns="visibleColumns"
              invitation-modal-title="Invite user"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { UsersTable } from "@prefabs.tech/vue3-user";

          import { allUsers } from "./data";

          const visibleColumns = [
            "email",
            "name",
            "roles",
            "signedUpAt",
            "disabled",
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
        $t('common.properties', { value: 'UsersTableProperties' })
      "
    />

    <section>
      <!-- eslint-disable -->
      <SshPre language="html-vue">
        interface UserType extends EmailPasswordUserType {
          disabled?: boolean;
          givenName: string | null;
          isEmailVerified?: boolean;
          isProfileCompleted?: boolean;
          lastLoginAt: number;
          middleNames: string | null;
          name: string | null;
          roles: string[] | UserRole[];
          signedUpAt: number;
          surname: string | null;
          thirdParty?: {
            id: string;
            userId: string;
          };
        }
      </SshPre>
      <!-- eslint-enable -->
    </section>
  </UserPage>
</template>

<script lang="ts">
export default {
  name: "UsersTableDemo",
};
</script>

<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { UsersTable } from "@prefabs.tech/vue3-user";
import { computed } from "vue";

import { allUsers } from "./data";
import UserPage from "./UserPage.vue";
import ComponentDocumentation from "../../components/ComponentDocumentation.vue";

const visibleColumns = ["email", "name", "roles", "signedUpAt", "disabled"];

const { t } = useI18n();

const eventsData = computed(() => [
  {
    description: t(
      "user.documentation.eventDescription.invitation.actionCustom",
    ),
    name: "action:custom",
    payload: "rowData: { action: string; data: UserType }",
  },
  {
    description: t("user.documentation.eventDescription.invitation.fetchUsers"),
    name: "fetch:users",
    payload: "-",
  },
  {
    description: t(
      "user.documentation.eventDescription.invitation.closeInvitation",
    ),
    name: "on:closeInvitation",
    payload: "-",
  },
  {
    description: t("user.documentation.eventDescription.invitation.submitted"),
    name: "submitted",
    payload: "-",
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
    description: t("user.documentation.propsDescription.invitation.apps"),
    prop: "apps",
    type: "InvitationAppOption[]",
  },
  {
    default: "-",
    description: t(
      "user.documentation.propsDescription.invitation.columnsData",
    ),
    prop: "columnsData",
    type: "TableColumnDefinition[]",
  },
  {
    default: "-",
    description: t(
      "user.documentation.propsDescription.invitation.dataActionMenu",
    ),
    prop: "dataActionMenu",
    type: "DataActionsMenuItem[] | (defaultActionsMenu: DataActionsMenuItem[]) => DataActionsMenuItem[]",
  },
  {
    default: "-",
    description: t("user.documentation.propsDescription.invitation.expiryMode"),
    prop: "expiryMode",
    type: '"calendar" | "days"',
  },
  {
    default: '"users-table"',
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
    description: t("user.documentation.propsDescription.invitation.roles"),
    prop: "roles",
    type: "InvitationRoleOption[]",
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
    description: t("user.documentation.propsDescription.invitation.users"),
    prop: "users",
    type: "UserType[]",
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

<template>
  <UserPage
    :subtitle="$t('user.subtitle.invitationForm')"
    :title="$t('user.label.invitationForm')"
    class="demo-invitation-form"
  >
    <section>
      <h2>{{ $t("user.label.basic") }}</h2>

      <div class="section-content">
        <InvitationForm />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;InvitationForm /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { InvitationForm } from "@prefabs.tech/vue3-user";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("user.label.withAppField") }}</h2>

      <div class="section-content">
        <InvitationForm :apps="apps" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;InvitationForm :apps="apps" /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { InvitationForm } from "@prefabs.tech/vue3-user";

          const apps = [
            {
              id: 1,
              name: "Admin",
              origin: "admin-origin",
              supportedRoles: [
                {
                  id: 1,
                  name: "ADMIN",
                },
                {
                  id: 2,
                  name: "SUPERADMIN",
                },
              ],
            },
            {
              id: 2,
              name: "User",
              origin: "user-origin",
              supportedRoles: [
                {
                  id: 3,
                  name: "USER",
                },
              ],
            },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("user.label.withRoleField") }}</h2>

      <div class="section-content">
        <InvitationForm :roles="roles" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;InvitationForm :roles="roles" /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { InvitationForm } from "@prefabs.tech/vue3-user";

          const roles = [
            {
              id: 1,
              name: "ADMIN",
            },
            {
              id: 2,
              name: "SUPERADMIN",
            },
            {
              id: 3,
              name: "USER",
            },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("user.label.withExpiryDate") }}</h2>

      <div class="section-content">
        <InvitationForm :roles="roles" expiry-mode="calendar" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;InvitationForm
              :roles="roles"
              expiry-mode="calendar"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { InvitationForm } from "@prefabs.tech/vue3-user";

          const roles = [
            ...
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("user.label.withExpiryDays") }}</h2>

      <div class="section-content">
        <InvitationForm :roles="roles" expiry-mode="days" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;InvitationForm
              :roles="roles"
              expiry-mode="days"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { InvitationForm } from "@prefabs.tech/vue3-user";

          const roles = [
            ...
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
        $t('common.properties', { value: 'InvitationFormProperties' })
      "
    />

    <section>
      <!-- eslint-disable -->
      <SshPre language="html-vue">
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

<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { InvitationForm } from "@prefabs.tech/vue3-user";
import { computed } from "vue";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import UserPage from "../UserPage.vue";

const { t } = useI18n();

const roles = [
  {
    id: 1,
    name: "ADMIN",
  },
  {
    id: 2,
    name: "SUPERADMIN",
  },
  {
    id: 3,
    name: "USER",
  },
];

const apps = [
  {
    id: 1,
    name: "Admin",
    origin: "admin-origin",
    supportedRoles: [
      {
        id: 1,
        name: "ADMIN",
      },
      {
        id: 2,
        name: "SUPERADMIN",
      },
    ],
  },
  {
    id: 2,
    name: "User",
    origin: "user-origin",
    supportedRoles: [
      {
        id: 3,
        name: "USER",
      },
    ],
  },
];

const eventsData = computed(() => [
  {
    description: t("user.documentation.eventDescription.invitation.cancel"),
    name: "cancel",
    payload: "-",
  },
  {
    description: t("user.documentation.eventDescription.invitation.submitted"),
    name: "submitted",
    payload: "-",
  },
]);

const propsData = computed(() => [
  {
    default: "-",
    description: t("user.documentation.propsDescription.invitation.apps"),
    prop: "apps",
    type: "Array<InvitationAppOption>",
  },
  {
    default: "z.coerce.number().gte(1)",
    description: t("user.documentation.propsDescription.invitation.appSchema"),
    prop: "appSchema",
    type: "z.ZodType<string | number | string[] | number[]>",
  },
  {
    default: "z.coerce.number().gte(1)",
    description: t(
      "user.documentation.propsDescription.invitation.expiresAfterSchema",
    ),
    prop: "expiresAfterSchema",
    type: "z.ZodType<string | number>",
  },
  {
    default: "z.coerce.date().min(new Date(new Date().setHours(0,0,0,0)))",
    description: t(
      "user.documentation.propsDescription.invitation.expiresAtSchema",
    ),
    prop: "expiresAtSchema",
    type: "z.ZodType<string | number | Date | object>",
  },
  {
    default: "-",
    description: t("user.documentation.propsDescription.invitation.expiryMode"),
    prop: "expiryMode",
    type: '"calendar" | "days"',
  },
  {
    default: "-",
    description: t(
      "user.documentation.propsDescription.invitation.invitationData",
    ),
    prop: "invitationData",
    type: "InvitationPayload",
  },
  {
    default: "-",
    description: t("user.documentation.propsDescription.invitation.roles"),
    prop: "roles",
    type: "Array<InvitationRoleOption>",
  },
  {
    default: "z.string()",
    description: t("user.documentation.propsDescription.invitation.roleSchema"),
    prop: "roleSchema",
    type: "z.ZodType<string | number | string[] | number[]>",
  },
  {
    default: '"Invite user"',
    description: t(
      "user.documentation.propsDescription.invitation.submitLabel",
    ),
    prop: "submitLabel",
    type: "String",
  },
]);
</script>

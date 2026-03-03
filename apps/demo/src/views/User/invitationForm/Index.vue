<template>
  <UserPage
    :subtitle="$t('user.subtitle.invitationForm')"
    :title="$t('user.label.invitationForm')"
    class="demo-invitation-form"
  >
    <section>
      <h2>{{ $t("user.label.basic") }}</h2>

      <div class="section-content">
        <InvitationForm @submit="onSubmit" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;InvitationForm @submit="onSubmit" /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { InvitationForm } from "@prefabs.tech/vue3-user";

          import type { InvitationPayload } from "@prefabs.tech/vue3-user";

          const onSubmit = (formData: InvitationPayload) => {
            ...
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("user.label.withAppField") }}</h2>

      <div class="section-content">
        <InvitationForm :apps="apps" @submit="onSubmit" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;InvitationForm :apps="apps" @submit="onSubmit" /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { InvitationForm } from "@prefabs.tech/vue3-user";

          import type { InvitationPayload } from "@prefabs.tech/vue3-user";

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

          const onSubmit = (formData: InvitationPayload) => {
            ...
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("user.label.withRoleField") }}</h2>

      <div class="section-content">
        <InvitationForm :roles="roles" @submit="onSubmit" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;InvitationForm :roles="roles" @submit="onSubmit" /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { InvitationForm } from "@prefabs.tech/vue3-user";

          import type { InvitationPayload } from "@prefabs.tech/vue3-user";

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

          const onSubmit = (formData: InvitationPayload) => {
            ...
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("user.label.withExpiryDate") }}</h2>

      <div class="section-content">
        <InvitationForm
          :roles="roles"
          expiry-mode="calendar"
          @submit="onSubmit"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;InvitationForm
              :roles="roles"
              expiry-mode="calendar"
              @submit="onSubmit"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { InvitationForm } from "@prefabs.tech/vue3-user";

          import type { InvitationPayload } from "@prefabs.tech/vue3-user";

          const roles = [
            ...
          ];

          const onSubmit = (formData: InvitationPayload) => {
            ...
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("user.label.withExpiryDays") }}</h2>

      <div class="section-content">
        <InvitationForm :roles="roles" expiry-mode="days" @submit="onSubmit" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;InvitationForm
              :roles="roles"
              expiry-mode="days"
              @submit="onSubmit"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { InvitationForm } from "@prefabs.tech/vue3-user";

          import type { InvitationPayload } from "@prefabs.tech/vue3-user";

          const roles = [
            ...
          ];

          const onSubmit = (formData: InvitationPayload) => {
            ...
          };
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
import { toast } from "vue3-toastify";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import UserPage from "../UserPage.vue";

import type { InvitationPayload } from "@prefabs.tech/vue3-user";

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
    description: t("user.documentation.eventDescription.invitationForm.cancel"),
    name: "cancel",
    payload: "-",
  },
  {
    description: t(
      "user.documentation.eventDescription.invitationForm.submitted",
    ),
    name: "submitted",
    payload: "-",
  },
]);

const propsData = computed(() => [
  {
    default: "-",
    description: t("user.documentation.propsDescription.invitationForm.apps"),
    prop: "apps",
    type: "Array<InvitationAppOption>",
  },
  {
    default: "z.coerce.number().gte(1)",
    description: t(
      "user.documentation.propsDescription.invitationForm.appSchema",
    ),
    prop: "appSchema",
    type: "z.ZodType<string | number | string[] | number[]>",
  },
  {
    default: "z.coerce.number().gte(1)",
    description: t(
      "user.documentation.propsDescription.invitationForm.expiresAfterSchema",
    ),
    prop: "expiresAfterSchema",
    type: "z.ZodType<string | number>",
  },
  {
    default: "z.coerce.date().min(new Date(new Date().setHours(0,0,0,0)))",
    description: t(
      "user.documentation.propsDescription.invitationForm.expiresAtSchema",
    ),
    prop: "expiresAtSchema",
    type: "z.ZodType<string | number | Date | object>",
  },
  {
    default: "-",
    description: t(
      "user.documentation.propsDescription.invitationForm.expiryMode",
    ),
    prop: "expiryMode",
    type: '"calendar" | "days"',
  },
  {
    default: "-",
    description: t(
      "user.documentation.propsDescription.invitationForm.invitationData",
    ),
    prop: "invitationData",
    type: "InvitationPayload",
  },
  {
    default: "-",
    description: t("user.documentation.propsDescription.invitationForm.roles"),
    prop: "roles",
    type: "Array<InvitationRoleOption>",
  },
  {
    default: "z.string()",
    description: t(
      "user.documentation.propsDescription.invitationForm.roleSchema",
    ),
    prop: "roleSchema",
    type: "z.ZodType<string | number | string[] | number[]>",
  },
  {
    default: '"Invite user"',
    description: t(
      "user.documentation.propsDescription.invitationForm.submitLabel",
    ),
    prop: "submitLabel",
    type: "String",
  },
]);

const onSubmit = (formData: InvitationPayload) => {
  toast(t("user.message.invitation.success", { user: formData.email }), {
    type: "success",
  });
};
</script>

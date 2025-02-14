<template>
  <UserPage
    :title="$t('user.label.invitationForm')"
    class="demo-invitation-form"
  >
    <template #toolbar>
      <ButtonElement
        :label="$t('common.back')"
        icon-left="pi pi-chevron-left"
        size="medium"
        variant="textOnly"
        @click="$router.push('/user')"
      />
    </template>

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
          import { InvitationForm } from "@dzangolab/vue3-user";

          import type { InvitationPayload } from "@dzangolab/vue3-user";

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
          import { InvitationForm } from "@dzangolab/vue3-user";

          import type { InvitationPayload } from "@dzangolab/vue3-user";

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
          import { InvitationForm } from "@dzangolab/vue3-user";

          import type { InvitationPayload } from "@dzangolab/vue3-user";

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
          import { InvitationForm } from "@dzangolab/vue3-user";

          import type { InvitationPayload } from "@dzangolab/vue3-user";

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
          import { InvitationForm } from "@dzangolab/vue3-user";

          import type { InvitationPayload } from "@dzangolab/vue3-user";

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
  </UserPage>
</template>

<script setup lang="ts">
import { useI18n } from "@dzangolab/vue3-i18n";
import { ButtonElement } from "@dzangolab/vue3-ui";
import { InvitationForm } from "@dzangolab/vue3-user";
import { notify } from "@kyvg/vue3-notification";

import UserPage from "../UserPage.vue";

import type { InvitationPayload } from "@dzangolab/vue3-user";

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

const onSubmit = (formData: InvitationPayload) => {
  notify({
    text: t("user.message.invitation.success", { user: formData.email }),
    type: "success",
  });
};
</script>

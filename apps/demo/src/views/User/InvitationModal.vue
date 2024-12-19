<template>
  <UserPage
    :title="$t('user.label.invitationModal')"
    class="demo-invitation-modal"
  >
    <template #toolbar>
      <router-link :to="{ name: 'user' }" class="back">
        {{ $t("common.back") }}
      </router-link>
    </template>

    <section>
      <h2>{{ $t("user.label.basic") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement
              label="Invite"
              @click="showModal = true"
            /&gt;

            &lt;InvitationModal
              :show="showModal"
              @on:close="showModal = false"
              @submit="onSubmit"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement } from "@dzangolab/vue3-ui";
          import { InvitationModal } from "@dzangolab/vue3-user";
          import { ref } from "vue";

          import type { InvitationPayload } from "@dzangolab/vue3-user";
          
          const showModal = ref(false);

          const onSubmit = (formData: InvitationPayload) => {
            ...

            showModal.value = false;
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <ButtonElement
          :label="$t('user.label.invite')"
          @click="showModal = true"
        />

        <InvitationModal
          :show="showModal"
          @on:close="showModal = false"
          @submit="onSubmit"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("user.label.withTitle") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement
              label="Send"
              @click="showModal = true"
            /&gt;

            &lt;InvitationModal
              :show="showModal"
              title="Invite"
              @on:close="showModal = false"
              @submit="onSubmit"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement } from "@dzangolab/vue3-ui";
          import { InvitationModal } from "@dzangolab/vue3-user";
          import { ref } from "vue";

          import type { InvitationPayload } from "@dzangolab/vue3-user";
          
          const showModal = ref(false);

          const onSubmit = (formData: InvitationPayload) => {
            ...

            showModal.value = false;
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <ButtonElement
          :label="$t('user.label.send')"
          @click="showTitleModal = true"
        />

        <InvitationModal
          :show="showTitleModal"
          :title="$t('user.label.invite')"
          @on:close="showTitleModal = false"
          @submit="onSubmit"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("user.label.disableDismiss") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement
              label="Invite user"
              @click="showModal = true"
            /&gt;

            &lt;InvitationModal
              :dismiss-on-click-out="false"
              :show="showModal"
              title="Invite user"
              @on:close="showModal = false"
              @submit="onSubmit"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement } from "@dzangolab/vue3-ui";
          import { InvitationModal } from "@dzangolab/vue3-user";
          import { ref } from "vue";

          import type { InvitationPayload } from "@dzangolab/vue3-user";
          
          const showModal = ref(false);

          const onSubmit = (formData: InvitationPayload) => {
            ...

            showModal.value = false;
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <ButtonElement
          :label="$t('user.label.inviteUser')"
          @click="showDisableDismissModal = true"
        />

        <InvitationModal
          :dismiss-on-click-out="false"
          :show="showDisableDismissModal"
          :title="$t('user.label.inviteUser')"
          @on:close="showDisableDismissModal = false"
          @submit="onSubmit"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("user.label.withAppField") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement
              label="Invite"
              @click="showModal = true"
            /&gt;

            &lt;InvitationModal
              :apps="apps"
              :show="showModal"
              title="Invite to app"
              @on:close="showModal = false"
              @submit="onSubmit"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement } from "@dzangolab/vue3-ui";
          import { InvitationModal } from "@dzangolab/vue3-user";
          import { ref } from "vue";

          import type { InvitationPayload } from "@dzangolab/vue3-user";
          
          const showModal = ref(false);

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

            showModal.value = false;
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <ButtonElement
          :label="$t('user.label.invite')"
          @click="showAppFieldModal = true"
        />

        <InvitationModal
          :apps="apps"
          :show="showAppFieldModal"
          :title="$t('user.label.inviteToApp')"
          @on:close="showAppFieldModal = false"
          @submit="onSubmit"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("user.label.withRoleField") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement
              label="Send invitation"
              @click="showModal = true"
            /&gt;

            &lt;InvitationModal
              :roles="roles"
              :show="showModal"
              title="Invite with role"
              @on:close="showModal = false"
              @submit="onSubmit"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement } from "@dzangolab/vue3-ui";
          import { InvitationModal } from "@dzangolab/vue3-user";
          import { ref } from "vue";

          import type { InvitationPayload } from "@dzangolab/vue3-user";
          
          const showModal = ref(false);

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

        <ButtonElement
          :label="$t('user.label.sendInvitation')"
          @click="showRoleFieldModal = true"
        />

        <InvitationModal
          :roles="roles"
          :show="showRoleFieldModal"
          :title="$t('user.label.inviteWithRole')"
          @on:close="showRoleFieldModal = false"
          @submit="onSubmit"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("user.label.withExpiryDate") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement
              label="Invite user"
              @click="showModal = true"
            /&gt;

            &lt;InvitationModal
              :roles="roles"
              :show="showModal"
              expiry-mode="calendar"
              title="Invite with expiry date"
              @on:close="showModal = false"
              @submit="onSubmit"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement } from "@dzangolab/vue3-ui";
          import { InvitationModal } from "@dzangolab/vue3-user";
          import { ref } from "vue";

          import type { InvitationPayload } from "@dzangolab/vue3-user";
          
          const showModal = ref(false);

          const roles = [
            ...
          ];

          const onSubmit = (formData: InvitationPayload) => {
            ...
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <ButtonElement
          :label="$t('user.label.inviteUser')"
          @click="showExpiryFieldModal = true"
        />

        <InvitationModal
          :roles="roles"
          :show="showExpiryFieldModal"
          :title="$t('user.label.inviteWithExpiry')"
          expiry-mode="calendar"
          @on:close="showExpiryFieldModal = false"
          @submit="onSubmit"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("user.label.withExpiryDays") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement
              label="Send invitation"
              @click="showModal = true"
            /&gt;

            &lt;InvitationModal
              :roles="roles"
              :show="showModal"
              expiry-mode="days"
              title="Invite with expiry date"
              @on:close="showModal = false"
              @submit="onSubmit"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement } from "@dzangolab/vue3-ui";
          import { InvitationModal } from "@dzangolab/vue3-user";
          import { ref } from "vue";

          import type { InvitationPayload } from "@dzangolab/vue3-user";
          
          const showModal = ref(false);

          const roles = [
            ...
          ];

          const onSubmit = (formData: InvitationPayload) => {
            ...
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <ButtonElement
          :label="$t('user.label.sendInvitation')"
          @click="showExpiryDaysModal = true"
        />

        <InvitationModal
          :roles="roles"
          :show="showExpiryDaysModal"
          :title="$t('user.label.inviteWithExpiry')"
          expiry-mode="days"
          @on:close="showExpiryDaysModal = false"
          @submit="onSubmit"
        />
      </div>
    </section>
  </UserPage>
</template>

<script setup lang="ts">
import { useI18n } from "@dzangolab/vue3-i18n";
import { ButtonElement } from "@dzangolab/vue3-ui";
import { InvitationModal } from "@dzangolab/vue3-user";
import { notify } from "@kyvg/vue3-notification";
import { ref } from "vue";

import UserPage from "./UserPage.vue";

import type { InvitationPayload } from "@dzangolab/vue3-user";

const { t } = useI18n();

const showAppFieldModal = ref(false);
const showDisableDismissModal = ref(false);
const showExpiryDaysModal = ref(false);
const showExpiryFieldModal = ref(false);
const showModal = ref(false);
const showRoleFieldModal = ref(false);
const showTitleModal = ref(false);

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

  showAppFieldModal.value = false;
  showDisableDismissModal.value = false;
  showExpiryDaysModal.value = false;
  showExpiryFieldModal.value = false;
  showModal.value = false;
  showRoleFieldModal.value = false;
  showTitleModal.value = false;
};
</script>

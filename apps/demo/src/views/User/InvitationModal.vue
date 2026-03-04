<template>
  <UserPage
    :subtitle="$t('user.subtitle.invitationModal')"
    :title="$t('user.label.invitationModal')"
    class="demo-invitation-modal"
  >
    <section>
      <h2>{{ $t("user.label.basic") }}</h2>

      <div class="section-content">
        <ButtonElement
          :label="$t('user.label.invite')"
          @click="showModal = true"
        />

        <InvitationModal :show="showModal" @on:close="showModal = false" />

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
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";
          
          const showModal = ref(false);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("user.label.withTitle") }}</h2>

      <div class="section-content">
        <ButtonElement
          :label="$t('user.label.send')"
          @click="showTitleModal = true"
        />

        <InvitationModal
          :show="showTitleModal"
          :title="$t('user.label.invite')"
          @on:close="showTitleModal = false"
        />

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
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";
          
          const showModal = ref(false);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("user.label.enableDismiss") }}</h2>

      <div class="section-content">
        <ButtonElement
          :label="$t('user.label.inviteUser')"
          @click="showDisableDismissModal = true"
        />

        <InvitationModal
          :show="showDisableDismissModal"
          :title="$t('user.label.inviteUser')"
          dismiss-on-click-out
          @on:close="showDisableDismissModal = false"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement
              label="Invite user"
              @click="showModal = true"
            /&gt;

            &lt;InvitationModal
              :show="showModal"
              dismiss-on-click-out
              title="Invite user"
              @on:close="showModal = false"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";
          
          const showModal = ref(false);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("user.label.withAppField") }}</h2>

      <div class="section-content">
        <ButtonElement
          :label="$t('user.label.invite')"
          @click="showAppFieldModal = true"
        />

        <InvitationModal
          :apps="apps"
          :show="showAppFieldModal"
          :title="$t('user.label.inviteToApp')"
          @on:close="showAppFieldModal = false"
        />

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
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";
          
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
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("user.label.withRoleField") }}</h2>

      <div class="section-content">
        <ButtonElement
          :label="$t('user.label.sendInvitation')"
          @click="showRoleFieldModal = true"
        />

        <InvitationModal
          :roles="roles"
          :show="showRoleFieldModal"
          :title="$t('user.label.inviteWithRole')"
          @on:close="showRoleFieldModal = false"
        />

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
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";
          
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
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("user.label.withExpiryDate") }}</h2>

      <div class="section-content">
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
        />

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
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";
          
          const showModal = ref(false);

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
        />

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
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";
          
          const showModal = ref(false);

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
        $t('common.properties', { value: 'InvitationModalProperties' })
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
import { ButtonElement } from "@prefabs.tech/vue3-ui";
import { InvitationModal } from "@prefabs.tech/vue3-user";
import { computed, ref } from "vue";

import UserPage from "./UserPage.vue";
import ComponentDocumentation from "../../components/ComponentDocumentation.vue";

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

const eventsData = computed(() => [
  {
    description: t("user.documentation.eventDescription.invitation.close"),
    name: "on:close",
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
    default: "-",
    description: t("user.documentation.propsDescription.invitation.appSchema"),
    prop: "appSchema",
    type: "z.ZodType<string | number | string[] | number[]>",
  },
  {
    default: "false",
    description: t(
      "user.documentation.propsDescription.invitation.dismissOnClickOut",
    ),
    prop: "dismissOnClickOut",
    type: "Boolean",
  },
  {
    default: "-",
    description: t(
      "user.documentation.propsDescription.invitation.expiresAfterSchema",
    ),
    prop: "expiresAfterSchema",
    type: "z.ZodType<string | number>",
  },
  {
    default: "-",
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
    default: "-",
    description: t("user.documentation.propsDescription.invitation.roleSchema"),
    prop: "roleSchema",
    type: "z.ZodType<string | number | string[] | number[]>",
  },
  {
    default: "false",
    description: t("user.documentation.propsDescription.invitation.show"),
    prop: "show",
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
    description: t("user.documentation.propsDescription.invitation.title"),
    prop: "title",
    type: "String",
  },
]);
</script>

<template>
  <UserPage
    :title="$t('user.label.invitationForm')"
    class="demo-invitation-form"
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

        <InvitationForm @submit="onSubmit" />
      </div>
    </section>
  </UserPage>
</template>

<script setup lang="ts">
import { useI18n } from "@dzangolab/vue3-i18n";
import { InvitationForm } from "@dzangolab/vue3-user";
import { notify } from "@kyvg/vue3-notification";

import UserPage from "../UserPage.vue";

import type { InvitationPayload } from "@dzangolab/vue3-user";

const { t } = useI18n();

const onSubmit = (formData: InvitationPayload) => {
  notify({
    text: t("user.message.invitation.success", { user: formData.email }),
    type: "success",
  });
};
</script>

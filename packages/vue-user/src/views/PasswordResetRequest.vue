<template>
  <Page
    :title="t('user.passwordResetRequest.title')"
    class="auth password-reset-request"
  >
    <slot name="instructions"></slot>

    <PasswordResetRequestForm @submit="handleSubmit" />
  </Page>
</template>

<script lang="ts">
export default {
  name: "PasswordResetRequest",
};
</script>

<script setup lang="ts">
import { useI18n } from "@dzangolab/vue3-i18n";
import { Page } from "@dzangolab/vue3-ui";

import PasswordResetRequestForm from "../components/PasswordResetRequestForm.vue";
import { useTranslations, emitter } from "../index";
import useUserStore from "../store";

import type { PasswordResetRequestPayload } from "../types";

const messages = useTranslations();

const { t } = useI18n({ messages });

const { requestPasswordReset } = useUserStore();

const handleSubmit = async (payload: PasswordResetRequestPayload) => {
  await requestPasswordReset(payload).then((response) => {
    if (response) {
      emitter.emit("notify", {
        text: t("user.passwordResetRequest.messages.success"),
        type: "success",
      });
    }
  });
};
</script>

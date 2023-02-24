<template>
  <div class="password-reset-request">
    <h1>{{ t("user.passwordResetRequest.title") }}</h1>

    <slot name="instructions"></slot>

    <PasswordResetRequestForm @submit="handleSubmit" />
  </div>
</template>

<script lang="ts">
export default {
  name: "PasswordResetRequest",
};
</script>

<script setup lang="ts">
import { useI18n } from "@dzangolab/vue3-i18n";
import { useRouter } from "vue-router";

import PasswordResetRequestForm from "../components/PasswordResetRequestForm.vue";
import { useTranslations } from "../index";
import useUserStore from "../store";

import type { PasswordResetRequestPayload } from "../types";

const messages = useTranslations();

const { t } = useI18n({ messages });

const router = useRouter();

const { requestPasswordReset } = useUserStore();

const handleSubmit = async (payload: PasswordResetRequestPayload) => {
  await requestPasswordReset(payload).then(() => {
    router.push({
      name: "resetPasswordRequestAcknowledge",
      query: { email: payload.email },
    });
  });
};
</script>

<style lang="css">
.password-reset-request {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}
</style>

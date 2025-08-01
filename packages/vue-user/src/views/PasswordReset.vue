<template>
  <Page :title="t('user.passwordReset.title')" class="auth password-reset">
    <Message
      v-if="errorMessage"
      :message="t(`user.passwordReset.errors.${errorMessage}`)"
      enable-close
      severity="danger"
      @close="errorMessage = undefined"
    />

    <slot name="instructions"></slot>

    <PasswordResetForm :loading="loading" @submit="handleSubmit" />
  </Page>
</template>

<script lang="ts">
export default {
  name: "PasswordReset",
};
</script>

<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Message, Page } from "@prefabs.tech/vue3-ui";
import { ref } from "vue";
import { useRouter } from "vue-router";

import PasswordResetForm from "../components/PasswordResetForm.vue";
import { emitter, useTranslations } from "../index";
import useUserStore from "../store";

import type { PasswordResetPayload } from "../types";

const messages = useTranslations();

const { t } = useI18n({ messages });

const { resetPassword } = useUserStore();

const router = useRouter();

const errorMessage = ref<string>();
const loading = ref<boolean>(false);

const handleSubmit = async (payload: PasswordResetPayload) => {
  loading.value = true;

  await resetPassword(payload)
    .then(() => {
      router.push({ name: "login" }).then(() =>
        emitter.emit("notify", {
          text: t("user.passwordReset.messages.success"),
          type: "success",
        }),
      );
    })
    .catch((error) => {
      errorMessage.value = error.message;
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>

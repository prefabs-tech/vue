<template>
  <Page
    :title="t('user.passwordResetRequest.title')"
    class="auth password-reset-request"
  >
    <slot name="instructions"></slot>

    <PasswordResetRequestForm :loading="loading" @submit="handleSubmit" />
  </Page>
</template>

<script lang="ts">
export default {
  name: "PasswordResetRequest",
};
</script>

<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Page } from "@prefabs.tech/vue3-ui";
import { ref } from "vue";

import PasswordResetRequestForm from "../components/PasswordResetRequestForm.vue";
import { useTranslations, emitter } from "../index";
import useUserStore from "../store";

import type { PasswordResetRequestPayload } from "../types";

const messages = useTranslations();

const { t } = useI18n({ messages });

const loading = ref<boolean>(false);

const { requestPasswordReset } = useUserStore();

const handleSubmit = async (payload: PasswordResetRequestPayload) => {
  loading.value = true;

  await requestPasswordReset(payload)
    .then((response) => {
      if (response) {
        emitter.emit("notify", {
          text: t("user.passwordResetRequest.messages.success"),
          type: "success",
        });
      }
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>

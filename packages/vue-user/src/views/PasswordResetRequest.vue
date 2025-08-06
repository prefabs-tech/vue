<template>
  <Page
    :title="t('user.passwordResetRequest.title')"
    class="auth password-reset-request"
  >
    <slot name="instructions"></slot>

    <PasswordResetRequestForm
      :email="
        typeof route?.query?.email === 'string' ? route?.query?.email : ''
      "
      :loading="loading"
      @submit="handleSubmit"
    />
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
import { useRoute, useRouter } from "vue-router";

import PasswordResetRequestForm from "../components/PasswordResetRequestForm.vue";
import { useTranslations } from "../index";
import useUserStore from "../store";

import type { PasswordResetRequestPayload } from "../types";

const messages = useTranslations();

const route = useRoute();
const router = useRouter();

const { t } = useI18n({ messages });

const loading = ref<boolean>(false);

const { requestPasswordReset } = useUserStore();

const handleSubmit = async (payload: PasswordResetRequestPayload) => {
  loading.value = true;

  await requestPasswordReset(payload)
    .then((response) => {
      if (response) {
        router.push({
          name: "resetPasswordRequestAcknowledge",
          query: { email: payload.email },
        });
      }
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>

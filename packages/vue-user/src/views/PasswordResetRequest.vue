<template>
  <Page
    :class="[
      'auth',
      showAknowledgement
        ? 'password-reset-acknowledge'
        : 'password-reset-request',
    ]"
    :title="
      showAknowledgement
        ? t('user.passwordResetAcknowledge.title')
        : t('user.passwordResetRequest.title')
    "
    centered
  >
    <slot name="instructions"></slot>

    <PasswordResetRequestForm
      v-if="!showAknowledgement"
      :email="email"
      :loading="loading"
      @submit="handleSubmit"
    />

    <PasswordResetRequestAcknowledge
      v-else
      :email="email"
      @resend="showAknowledgement = false"
    />

    <div class="links">
      <router-link :to="{ name: 'login' }" class="login">
        {{ t("user.passwordResetRequest.links.login") }}
      </router-link>
    </div>
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
import { useRoute } from "vue-router";

import PasswordResetRequestAcknowledge from "../components/PasswordResetRequestAcknowledge.vue";
import PasswordResetRequestForm from "../components/PasswordResetRequestForm.vue";
import { useTranslations } from "../index";
import useUserStore from "../store";

import type { PasswordResetRequestPayload } from "../types";

const messages = useTranslations();

const route = useRoute();

const { t } = useI18n({ messages });

const email = ref<string>(route?.query?.email as string);
const loading = ref<boolean>(false);
const showAknowledgement = ref<boolean>(false);

const { requestPasswordReset } = useUserStore();

const handleSubmit = async (payload: PasswordResetRequestPayload) => {
  email.value = payload.email as string;
  loading.value = true;

  await requestPasswordReset(payload)
    .then((response) => {
      if (response) {
        showAknowledgement.value = true;
      }
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>

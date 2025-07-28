<template>
  <Page :title="t('user.changePassword.title')" class="auth change-password">
    <Message
      v-if="errorMessage"
      :message="t(`user.changePassword.errors.${errorMessage}`)"
      enable-close
      severity="danger"
      @close="errorMessage = undefined"
    />

    <slot name="instructions"></slot>

    <ChangePasswordForm :loading="loading" @submit="handleSubmit" />
  </Page>
</template>

<script lang="ts">
export default {
  name: "ChangePassword",
};
</script>

<script setup lang="ts">
import { useConfig } from "@prefabs.tech/vue3-config";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Message, Page } from "@prefabs.tech/vue3-ui";
import { ref } from "vue";
import { useRouter } from "vue-router";

import ChangePasswordForm from "../components/ChangePasswordForm.vue";
import { useTranslations } from "../index";
import useUserStore from "../store";

import type { ChangePasswordPayload } from "../types";
import type { AppConfig } from "@prefabs.tech/vue3-config";

const config = useConfig() as AppConfig;

const messages = useTranslations();

const { t } = useI18n({ messages });

const userStore = useUserStore();
const { changePassword } = userStore;

const router = useRouter();

const errorMessage = ref<string>();
const loading = ref(false);

const handleSubmit = async (payload: ChangePasswordPayload) => {
  loading.value = true;

  await changePassword(payload, config?.apiBaseUrl)
    .then((response) => {
      if (response) {
        router.push({ name: "home" });
      }
    })
    .catch((error) => {
      errorMessage.value = error.message;
    });

  loading.value = false;
};
</script>

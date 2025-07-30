<template>
  <Page
    :loading="loading"
    :title="t('user.firstUser.title')"
    centered
    class="auth signup"
  >
    <Message
      v-if="errorMessage"
      :message="errorMessage"
      enable-close
      severity="danger"
      @close="errorMessage = undefined"
    />

    <SignupForm :loading="loading" @submit="handleSubmit" />
  </Page>
</template>

<script lang="ts">
export default {
  name: "SignupFirstUser",
};
</script>

<script setup lang="ts">
import { useConfig } from "@prefabs.tech/vue3-config";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Message, Page } from "@prefabs.tech/vue3-ui";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

import SignupForm from "../components/SignupForm.vue";
import { emitter, useTranslations } from "../index";
import useUserStore from "../store";

import type { LoginCredentials } from "../types";
import type { AppConfig } from "@prefabs.tech/vue3-config";

const config = useConfig() as AppConfig;

const messages = useTranslations();
const { t } = useI18n({ messages });

const router = useRouter();

const userStore = useUserStore();
const { getIsFirstUser, signUpFirstUser } = userStore;
const { user } = storeToRefs(userStore);

const errorMessage = ref<string>();
const loading = ref<boolean>(false);

const handleSubmit = async (credentials: LoginCredentials) => {
  loading.value = true;

  await signUpFirstUser(credentials, config.apiBaseUrl)
    .then(() => {
      emitter.emit("notify", {
        text: t("user.firstUser.signup.messages.success"),
        type: "success",
      });

      if (user.value) {
        emitter.emit("notify", {
          text: t("user.login.messages.success"),
          type: "success",
        });

        router.push({ name: "home" });
      } else {
        emitter.emit("notify", {
          text: t("user.firstUser.login.messages.error"),
          type: "error",
        });

        router.push({ name: "login" });
      }
    })
    .catch(() => {
      errorMessage.value = t("user.firstUser.signup.messages.error");
    })
    .finally(() => {
      loading.value = false;
    });
};

const prepareComponent = async () => {
  loading.value = true;

  try {
    const response = await getIsFirstUser(config.apiBaseUrl);

    if (!response?.signUp) {
      router.push({ name: "login" });
    }
  } catch (error) {
    errorMessage.value = t("user.signup.errors.SOMETHING_WRONG");
  } finally {
    loading.value = false;
  }
};

prepareComponent();
</script>

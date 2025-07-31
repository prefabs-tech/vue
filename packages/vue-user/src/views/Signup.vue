<template>
  <Page :title="t('user.signup.title')" class="auth signup">
    <Message
      v-if="errorMessage"
      :message="t(`user.signup.errors.${errorMessage}`)"
      enable-close
      severity="danger"
      @close="errorMessage = undefined"
    />

    <slot name="instructions"></slot>

    <SignupForm :loading="loading" @submit="handleSubmit" />

    <div class="links">
      <router-link :to="{ name: 'login' }" class="login">
        {{ t("user.signup.links.login") }}
      </router-link>
      <router-link :to="{ name: 'resetPasswordRequest' }" class="reset">
        {{ t("user.signup.links.forgotPassword") }}
      </router-link>
    </div>
  </Page>
</template>

<script lang="ts">
export default {
  name: "Signup",
};
</script>

<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Message, Page } from "@prefabs.tech/vue3-ui";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

import SignupForm from "../components/SignupForm.vue";
import { useTranslations } from "../index";
import useUserStore from "../store";

import type { LoginCredentials } from "../types";

const messages = useTranslations();

const { t } = useI18n({ messages });

const userStore = useUserStore();
const { signup } = userStore;
const { user } = storeToRefs(userStore);

const router = useRouter();

const errorMessage = ref<string>();
const loading = ref<boolean>(false);

const handleSubmit = async (credentials: LoginCredentials) => {
  loading.value = true;

  await signup(credentials)
    .catch((error) => {
      errorMessage.value = error.message;
    })
    .finally(() => {
      loading.value = false;
    });

  if (user.value) {
    router.push({ name: "home" });
  }
};
</script>

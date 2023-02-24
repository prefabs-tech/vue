<template>
  <div class="login">
    <h1>{{ t("user.login.title") }}</h1>

    <Errors v-if="errors.length" :errors="errors" />

    <slot name="instructions"></slot>

    <LoginForm :loading="loading" @submit="handleSubmit" />

    <div class="links">
      <router-link
        v-if="!config?.user?.routes?.signup.disabled"
        :to="{ name: 'signup' }"
        class="signup"
      >
        {{ t("user.login.links.signup") }}
      </router-link>
      <router-link :to="{ name: 'resetPasswordRequest' }" class="reset">
        {{ t("user.login.links.forgotPassword") }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Login",
};
</script>

<script setup lang="ts">
import { useConfig } from "@dzangolab/vue3-config";
import { useI18n } from "@dzangolab/vue3-i18n";
import { Errors } from "@dzangolab/vue3-ui";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

import LoginForm from "../components/LoginForm.vue";
import { useTranslations } from "../index";
import useUserStore from "../store";

import type { LoginCredentials } from "../types";
import type { AppConfig } from "@dzangolab/vue3-config";
import type { Error as ErrorType } from "@dzangolab/vue3-ui";
import type { Ref } from "vue";

const config = useConfig() as AppConfig;

const messages = useTranslations();

const { t } = useI18n({ messages });

const userStore = useUserStore();
const { login } = userStore;
const { user } = storeToRefs(userStore);

const router = useRouter();

const errors = ref([]) as Ref<ErrorType[]>;

const loading = ref(false);

const handleSubmit = async (credentials: LoginCredentials) => {
  loading.value = true;

  await login(credentials).catch((error) => {
    errors.value = [
      {
        code: error.message,
        message: t(`user.login.errors.${error.message}`),
      },
    ];
  });

  if (user.value) {
    router.push({ name: "home" });
  }

  loading.value = false;
};
</script>

<style lang="css">
div.login {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 20rem;
}

.login .links {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  width: 100%;
}

.login .links a {
  color: inherit;
  font-size: 90%;
  text-decoration: none;
}

.login .links a:only-child {
  margin-left: auto;
  margin-right: auto;
}
</style>

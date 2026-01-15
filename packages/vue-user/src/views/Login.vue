<template>
  <Page :title="t('user.login.title')" class="auth login">
    <Message
      v-if="errorMessage"
      :message="t(`user.login.errors.${errorMessage}`)"
      enable-close
      severity="danger"
      @close="errorMessage = undefined"
    />

    <slot name="instructions"></slot>

    <LoginForm
      ref="prefabsTechLoginForm"
      :loading="loading"
      @submit="handleSubmit"
    />

    <div class="links">
      <router-link
        v-if="!config?.user?.routes?.signup.disabled"
        :to="{ name: 'signup' }"
        class="signup"
      >
        {{ t("user.login.links.signup") }}
      </router-link>
      <router-link
        :to="{
          name: 'resetPasswordRequest',
          ...(prefabsTechLoginForm?.credentials?.email
            ? { query: { email: prefabsTechLoginForm.credentials.email } }
            : {}),
        }"
        class="reset"
      >
        {{ t("user.login.links.forgotPassword") }}
      </router-link>
    </div>

    <Divider v-if="config.user?.socialLogins?.length" />

    <div class="social-login-wrapper">
      <FacebookLogin
        v-if="
          config.user?.socialLogins?.includes(SOCIAL_LOGIN_PROVIDER_FACEBOOK)
        "
        @error="onError"
      />

      <GoogleLogin
        v-if="config.user?.socialLogins?.includes(SOCIAL_LOGIN_PROVIDER_GOOGLE)"
        @error="onError"
      />
    </div>
  </Page>
</template>

<script lang="ts">
export default {
  name: "Login",
};
</script>

<script setup lang="ts">
import { useConfig } from "@prefabs.tech/vue3-config";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Divider, Message, Page } from "@prefabs.tech/vue3-ui";
import { ref } from "vue";
import { useRouter } from "vue-router";

import { auth } from "../auth-provider";
import FacebookLogin from "../components/FacebookLogin.vue";
import GoogleLogin from "../components/GoogleLogin.vue";
import LoginForm from "../components/LoginForm.vue";
import {
  SOCIAL_LOGIN_PROVIDER_FACEBOOK,
  SOCIAL_LOGIN_PROVIDER_GOOGLE,
} from "../constant";
import { emitter, useTranslations } from "../index";
import useUserStore from "../store";

import type { LoginCredentials } from "../types";
import type { AppConfig } from "@prefabs.tech/vue3-config";
import type { Error as ErrorType } from "@prefabs.tech/vue3-ui";

const config = useConfig() as AppConfig;

const selectedAuthProvider = auth();

const messages = useTranslations();

const { t } = useI18n({ messages });

const userStore = useUserStore();
const { getIsFirstUser, login, removeUser, setUser } = userStore;

const router = useRouter();

const errorMessage = ref<string>();
const loading = ref(false);
const prefabsTechLoginForm = ref();

const handleSubmit = async (credentials: LoginCredentials) => {
  loading.value = true;

  const finalCredentials = {
    ...credentials,
    withRoles: config?.user?.supportedRoles,
  };

  await login(finalCredentials)
    .then(async (response) => {
      if (response) {
        const supportedRoles = config?.user?.supportedRoles;

        setUser(response);

        if (
          (supportedRoles &&
            (await selectedAuthProvider.verifySessionRoles(supportedRoles))) ||
          !supportedRoles?.length
        ) {
          // Check for pending redirect before default home redirect
          const redirectTo = sessionStorage.getItem("redirectAfterLogin");

          if (redirectTo) {
            sessionStorage.removeItem("redirectAfterLogin");

            // eslint-disable-next-line
            router.hasRoute(redirectTo) && router.push({ name: redirectTo});
          } else {
            // eslint-disable-next-line
            router.hasRoute("home") && router.push({ name: "home" });
          }
        } else {
          emitter.emit("notify", {
            text: t("user.login.messages.permissionDenied"),
            type: "error",
          });

          removeUser();
        }
      }
    })
    .catch((error) => {
      errorMessage.value = error.message;
    });

  loading.value = false;
};

const onError = (error: ErrorType) => {
  errorMessage.value = error.message;
};

const prepareComponent = async () => {
  loading.value = true;

  try {
    const response = await getIsFirstUser(config.apiBaseUrl);

    const userRoutes = config?.user?.routes;
    const firstUserSignupEnabled =
      userRoutes?.signup?.disabled && !userRoutes?.signupFirstUser?.disabled;

    if (
      response?.signUp &&
      firstUserSignupEnabled &&
      router.hasRoute("signupFirstUser")
    ) {
      router.push({ name: "signupFirstUser" });
    }
  } catch {
    // Do nothing
  } finally {
    loading.value = false;
  }
};

prepareComponent();
</script>

<style lang="css">
@import "../assets/css/login.css";
</style>

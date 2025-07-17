<template>
  <GoogleSignInButton
    :loading="loading"
    :title="t('user.login.social.google')"
    @click="onGoogleSignIn"
  />
</template>

<script lang="ts">
export default {
  name: "GoogleLogin",
};
</script>

<script setup lang="ts">
import { useConfig } from "@dzangolab/vue3-config";
import { useI18n } from "@dzangolab/vue3-i18n";
import { GoogleSignInButton } from "@dzangolab/vue3-ui";
import { ref } from "vue";

import {
  AUTH_CALLBACK_PATH_GOOGLE,
  SOCIAL_LOGIN_PROVIDER_GOOGLE,
} from "../constant";
import { useTranslations } from "../index";
import useUserStore from "../store";

const config = useConfig();
const messages = useTranslations();
const { socialSignIn } = useUserStore();

const { t } = useI18n({ messages });

const loading = ref(false);

const emit = defineEmits(["error"]);

const onGoogleSignIn = async () => {
  loading.value = true;

  try {
    await socialSignIn(
      SOCIAL_LOGIN_PROVIDER_GOOGLE,
      `${config.websiteDomain}${AUTH_CALLBACK_PATH_GOOGLE}`,
    );
    loading.value = false;
  } catch (error) {
    emit("error", new Error("SOMETHING_WRONG"));
    loading.value = false;
  }
};
</script>

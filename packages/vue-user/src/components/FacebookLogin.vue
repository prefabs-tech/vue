<template>
  <FacebookSignInButton
    :base-button-options="{
      variant: 'dark',
    }"
    :loading="loading"
    :title="t('user.login.social.facebook')"
    @click="onFacebookSignIn"
  />
</template>

<script lang="ts">
export default {
  name: "FacebookLogin",
};
</script>

<script setup lang="ts">
import { useConfig } from "@prefabs.tech/vue3-config";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { FacebookSignInButton } from "@prefabs.tech/vue3-ui";
import { ref } from "vue";

import {
  AUTH_CALLBACK_PATH_FACEBOOK,
  SOCIAL_LOGIN_PROVIDER_FACEBOOK,
} from "../constant";
import { useTranslations } from "../index";
import useUserStore from "../store";

const config = useConfig();
const messages = useTranslations();
const { socialSignIn } = useUserStore();

const { t } = useI18n({ messages });

const loading = ref(false);

const emit = defineEmits(["error"]);

const onFacebookSignIn = async () => {
  loading.value = true;

  try {
    await socialSignIn(
      SOCIAL_LOGIN_PROVIDER_FACEBOOK,
      `${config.websiteDomain}${AUTH_CALLBACK_PATH_FACEBOOK}`,
    );
    loading.value = false;
  } catch {
    emit("error", new Error("SOMETHING_WRONG"));
    loading.value = false;
  }
};
</script>

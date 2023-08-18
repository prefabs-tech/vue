<template>
  <div v-if="loading">{{ t("user.loading") }}</div>
</template>

<script lang="ts">
export default {
  name: "AuthGoogleCallBack",
};
</script>

<script lang="ts" setup>
import { useI18n } from "@dzangolab/vue3-i18n";
import ThirdPartyEmailPassword from "supertokens-web-js/recipe/thirdpartyemailpassword";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import { useTranslations } from "../index";
import useUserStore from "../store";

const messages = useTranslations();

const { t } = useI18n({ messages });

const loading = ref(false);
const router = useRouter();

const { setUser } = useUserStore();

onMounted(async () => {
  loading.value = true;

  const response = await ThirdPartyEmailPassword.thirdPartySignInAndUp({});

  if (response.status !== "OK") {
    return window.location.assign("/auth?error=signin");
  }

  setUser(response.user);

  loading.value = false;

  router.push({ name: "home" });
});
</script>

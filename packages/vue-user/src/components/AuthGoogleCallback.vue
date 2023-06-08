<template>
  <div v-if="loading">Loading ...</div>
</template>

<script lang="ts">
export default {
  name: "AuthGoogleCallBack",
};
</script>

<script lang="ts" setup>
import ThirdPartyEmailPassword from "supertokens-web-js/recipe/thirdpartyemailpassword";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import useUserStore from "../store";

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

  router.push({ name: "home" });

  loading.value = false;
});
</script>

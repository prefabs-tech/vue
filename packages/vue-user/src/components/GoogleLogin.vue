<template>
  <button @click="onGoogleSignIn">Continue with Google</button>
</template>

<script lang="ts">
export default {
  name: "GoogleLogin",
};
</script>

<script setup lang="ts">
import { useConfig } from "@dzangolab/vue3-config";

import useUserStore from "../store";

const config = useConfig();
const { googleSignIn } = useUserStore();

const onGoogleSignIn = async () => {
  const response = await googleSignIn(config.websiteDomain);
};
</script>

<style scoped>
button {
  margin: var(--google-login-button-margin, 0.5rem) 0;
}
</style>

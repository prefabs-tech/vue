<template>
  <Page :title="$t('sentry.title')">
    <button @click="throwError">Throw error</button>
  </Page>
</template>

<script lang="ts">
export default {
  name: "About",
};
</script>

<script setup lang="ts">
const throwError = () => {
  throw new Error("Sentry error");
};
</script>

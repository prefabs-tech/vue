<template>
  <Page :title="$t('app.about.title')" :sub-title="$t('app.about.subtitle')">
    <button @click="throwError">Throw error</button>
  </Page>
</template>

<script lang="ts">
export default {
  methods: {
    throwError() {
      throw new Error("Sentry Error");
    },
  },

  name: "About",
};
</script>

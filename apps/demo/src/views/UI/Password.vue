<template>
  <Page :title="$t('password.title')">
    <form>
      <pre>Password widget goes here</pre>
    </form>
  </Page>
</template>

<script lang="ts">
export default {
  name: "Password",
};
</script>

<script setup lang="ts">
import VisiblePassword from "@dzangolab/vue3-ui";
</script>

<template>
  <Page :title="$t('password.title')">
    <form>
      <Password />
    </form>
  </Page>
</template>

<script lang="ts">
export default {
  name: "Password",
};
</script>

<script setup lang="ts">
import { Password } from "@dzangolab/vue3-form";
</script>

<style scoped>
.field {
  flex-direction: row;
  align-items: center;
}
</style>

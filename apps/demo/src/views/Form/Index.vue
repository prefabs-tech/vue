<template>
  <FormPage :title="$t('form.title')" />
</template>

<script lang="ts">
export default {
  name: "FormView",
};
</script>

<script setup lang="ts">
import FormPage from "./FormPage.vue";
</script>

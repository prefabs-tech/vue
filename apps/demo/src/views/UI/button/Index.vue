<template>
  <Page :title="$t('ui.button.title')">
    <BasicButton :label="'Click me'" />
  </Page>
</template>

<script setup lang="ts">
import { BasicButton } from "@dzangolab/vue3-ui";
</script>

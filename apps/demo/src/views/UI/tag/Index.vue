<template>
  <Page :title="$t('ui.tag.title')" class="demo-tag">
    <Tag label="hello" style="background-color: red" rounded />
  </Page>
</template>

<script setup lang="ts">
import { Tag } from "@dzangolab/vue3-ui";
</script>

<template>
  <Page :title="$t('ui.pages.easy-table')">
    <EasyTable />
  </Page>
</template>

<script lang="ts">
export default {
  name: "EasyTable",
};
</script>

<script setup lang="ts">
import { EasyTable } from "@dzangolab/vue3-easy-table";
</script>

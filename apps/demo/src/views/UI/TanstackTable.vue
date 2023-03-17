<template>
  <Page :title="$t('ui.pages.table')">
    <TanstackTable />
  </Page>
</template>

<script setup lang="ts">
import { TanstackTable } from "@dzangolab/vue3-tanstack-table";
</script>

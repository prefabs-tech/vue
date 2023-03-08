<template>
  <Page :title="$t('ui.title')">
    <ul>
      <li>
        <router-link :to="{ name: 'table' }">
          {{ $t("ui.pages.table") }}
        </router-link>
      </li>
    </ul>
  </Page>
</template>

<script lang="ts">
export default {
  name: "UI",
};
</script>

<script setup lang="ts">
import { TanstackTable } from "@dzangolab/vue3-tanstack-table";
</script>

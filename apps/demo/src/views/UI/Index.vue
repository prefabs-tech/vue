<template>
  <Page :title="$t('ui.title')">
    <RouterLink v-if="$route.matched.length === 1" :to="{ name: 'subpane' }"
      >{{ $t("ui.subpane.title") }}
    </RouterLink>

    <RouterView />
  </Page>
</template>

<script lang="ts">
export default {
  name: "UI",
};
</script>

<script setup lang="ts">
import { SubPane } from "@dzangolab/vue3-ui";
</script>

<template>
  <h2>{{ $t("ui.subpane.title") }}</h2>

  <SubPane :title="$t('ui.subpane.title')">
    <p>{{ $t("ui.subpane.content") }}</p>
  </SubPane>

  <RouterLink :to="{ name: 'ui' }">
    {{ $t("common.back") }}
  </RouterLink>
</template>

<script lang="ts">
export default {
  name: "SupPanePage",
};
</script>

<script setup lang="ts">
import SubPane from "@dzangolab/vue3-ui";
</script>

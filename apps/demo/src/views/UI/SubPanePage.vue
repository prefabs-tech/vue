<template>
  <h2>{{ $t("ui.subPane.title") }}</h2>

  <SubPane :title="$t('ui.subPane.title')">
    <p>{{ $t("ui.subPane.content") }}</p>
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

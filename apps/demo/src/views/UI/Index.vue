<template>
  <Page :title="$t('ui.title')">
    <h2>{{ $t("ui.subpane.title") }}</h2>

    <SubPane>
      <p>{{ $t("ui.subpane.content") }}</p>
    </SubPane>
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

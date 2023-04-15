<template>
  <h2>{{ $t("ui.subPane.title") }}</h2>

  <SubPane>
    <p>{{ $t("ui.subPane.content") }}</p>
  </SubPane>

  <router-link :to="{ name: 'ui' }">
    {{ $t("common.back") }}
  </router-link>
</template>

<script lang="ts">
export default {
  name: "SubPanePage",
};
</script>

<script setup lang="ts">
import { SubPane } from "@dzangolab/vue3-ui";
</script>

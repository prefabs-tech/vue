<template>
  <h2>{{ $t("ui.tabbedpanel.title") }}</h2>

  <RouterLink :to="{ name: 'ui' }">
    <button>{{ $t("common.back") }}</button>
  </RouterLink>
</template>

<script lang="ts">
export default {
  name: "TabbedPanel",
};
</script>

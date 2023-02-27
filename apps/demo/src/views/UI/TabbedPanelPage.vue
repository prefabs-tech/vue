<template>
  <h2>{{ $t("ui.tabbedPanel.title") }}</h2>

  <RouterLink :to="{ name: 'ui' }">
    <button>{{ $t("common.back") }}</button>
  </RouterLink>
</template>

<script lang="ts">
export default {
  name: "TabbedPanelPage",
};
</script>

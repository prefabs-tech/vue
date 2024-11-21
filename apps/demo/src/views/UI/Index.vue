<template>
  <UiPage :title="$t('ui.title')" />
</template>

<script lang="ts">
export default {
  name: "UI",
};
</script>

<script setup lang="ts">
import UiPage from "./UiPage.vue";
</script>

<style lang="css">
.ui-sidebar {
  --_bg-color: #fff;
  --_color: #000;
  --_position: relative;

  border-right: 1px solid black;
}

.ui-sidebar .nav-menu-item > .link {
  --_font-weight: 400;
}

.ui-sidebar .nav-menu > .menu {
  border-bottom: none;
}
</style>

<template>
  <TablePage :title="$t('table.title')" />
</template>

<script lang="ts">
export default {
  name: "TableView",
};
</script>

<script setup lang="ts">
import TablePage from "./TablePage.vue";
</script>

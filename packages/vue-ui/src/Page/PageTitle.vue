<template>
  <div class="page-title">
    <h1 v-if="title">
      {{ title }}
    </h1>

    <div class="toolbar">
      <slot name="toolbar"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style lang="css" scoped>
.page-title {
  display: grid;
}

.toolbar {
  align-self: center;
}
</style>

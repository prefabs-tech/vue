<template>
  <div class="sub-pane">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "SubPane",
};
</script>

<script setup lang="ts">
defineProps({
  title: {
    required: true,
    type: String,
  },
});
</script>

<style scoped>
.sub-pane {
  flex-grow: 1;
}
</style>

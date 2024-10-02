<template>
  <div class="loading-page">
    <LoadingIcon class="loading-icon" />
  </div>
</template>

<script lang="ts">
export default {
  name: "LoadingPage",
};
</script>

<script setup lang="ts">
import LoadingIcon from "../components/LoadingIcon.vue";
</script>

<style lang="css">
.loading-page {
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  inset: 0;
  justify-content: center;
  position: fixed;
  z-index: 999;
}

.loading-page .loading-icon {
  color: black;
  font-size: 0.5rem;
}
</style>

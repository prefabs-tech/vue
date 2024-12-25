<template>
  <div class="grid-container">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "GridContainer",
};
</script>

<script setup lang="ts"></script>

<style lang="css">
.grid-container {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media screen and (min-width: 60rem) {
  .grid-container {
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  }
}
</style>

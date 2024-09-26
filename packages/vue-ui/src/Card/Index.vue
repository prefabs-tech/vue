<template>
  <div class="card">
    <header v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
    </header>

    <div class="card-body">
      <slot></slot>
    </div>

    <footer v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: "Card",
};
</script>

<script setup lang="ts"></script>

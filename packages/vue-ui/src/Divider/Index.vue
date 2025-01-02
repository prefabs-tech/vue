<template>
  <div :data-aria-orientation="orientation" class="divider" role="separator" />
</template>

<script lang="ts">
export default {
  name: "DividerElement",
};
</script>

<script setup lang="ts">
defineProps({
  orientation: {
    default: "horizontal",
    type: String,
    validator: (value: string) => ["horizontal", "vertical"].includes(value),
  },
});
</script>

<style lang="css">
.divider[role="separator"] {
  --_border: var(--divider-border, 1px solid #d0d0d0);
}

.divider[role="separator"][data-aria-orientation="horizontal"] {
  border-top: var(--_border);
  height: 0;
  margin: 1rem 0;
  width: 100%;
}

.divider[role="separator"][data-aria-orientation="vertical"] {
  border-left: var(--_border);
  height: 100%;
  margin: 0 1rem;
  width: 0;
}
</style>

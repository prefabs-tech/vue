<template>
  <footer :class="`sticky-collapsible ${fixed ? 'fixed' : ''}`">
    <slot></slot>
  </footer>
</template>

<script lang="ts">
export default {
  name: "StickyCollapsibleFooter",
};
</script>

<script setup lang="ts">
defineProps({
  fixed: {
    default: true,
    type: Boolean,
  },
});
</script>

<style lang="css">
@import "@/assets/css/components/sticky-collapsible-footer.css";
</style>

<template>
  <span>
    {{ label }}
  </span>
</template>

<script lang="ts">
export default {
  name: "Tag",
};
</script>

<script setup lang="ts">
defineProps({
  className: {
    default: "",
    type: String,
  },
  color: {
    default: "default",
    type: String,
  },
  fullWidth: Boolean,
  icon: String,
  label: String,
  rounded: Boolean,
  style: {
    default: () => ({}),
    type: Object,
  },
});
</script>

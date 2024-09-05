<template>
  <span :class="badgeClassName" :style="style">
    <template v-if="icon">
      <slot name="icon">
        <i :class="icon" />
      </slot>
    </template>

    <div v-if="label" class="label">
      {{ label }}
    </div>
  </span>
</template>

<script lang="ts">
export default {
  name: "Badge",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  className: {
    default: "",
    type: String,
  },
  color: {
    default: "default",
    type: String,
  },
  fullWidth: Boolean,
  icon: {
    default: null,
    type: [String, Boolean],
  },
  label: {
    default: null,
    type: [String, Boolean],
  },
  rounded: Boolean,
  severity: {
    default: "primary",
    type: String,
    validator: (value: string) =>
      [
        "primary",
        "secondary",
        "alternate",
        "success",
        "danger",
        "warning",
      ].includes(value),
  },
  style: {
    default: () => ({}),
    type: Object,
  },
});

const badgeClassName = computed(() => {
  return [
    "badge",
    props.className,
    props.fullWidth,
    props.rounded && "rounded",
    props.severity,
  ]
    .filter(Boolean)
    .join(" ");
});
</script>

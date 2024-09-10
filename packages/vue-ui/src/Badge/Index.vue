<template>
  <span :class="badgeClassName">
    <span v-if="iconLeft" class="icon-left">
      <slot name="iconLeft">
        <i :class="iconLeft" />
      </slot>
    </span>

    <div v-if="label" class="label">
      {{ label }}
    </div>

    <span v-if="iconRight" class="icon-right">
      <slot name="iconRight">
        <i :class="iconRight" />
      </slot>
    </span>
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
  iconLeft: {
    default: null,
    type: [String, Boolean],
  },
  iconRight: {
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
});

const badgeClassName = computed(() => {
  return [
    "badge",
    props.className,
    props.fullWidth && "full-width",
    props.rounded && "rounded",
    props.severity,
  ]
    .filter(Boolean)
    .join(" ");
});
</script>

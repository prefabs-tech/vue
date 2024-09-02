<template>
  <button :class="className" :disabled="disabled">
    <div class="label">
      <span>{{ label }}</span>
    </div>
  </button>
</template>

<script lang="ts">
export default {
  name: "ButtonBasic",
};
</script>

<script setup lang="ts">
defineEmits(["click"]);

defineProps({
  children: {
    default: "",
    type: String,
  },
  className: {
    default: "",
    type: String,
  },
  disabled: {
    default: false,
    type: Boolean,
  },
  iconLeft: {
    default: "",
    type: String,
  },
  iconRight: {
    default: "",
    type: String,
  },
  label: {
    default: "",
    type: String,
    required: true,
  },
  loading: {
    default: false,
    type: Boolean,
  },
  rounded: {
    default: false,
    type: Boolean,
  },
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
  size: {
    default: "medium",
    type: String,
    validator: (value: string) => ["small", "medium", "large"].includes(value),
  },
  to: {
    default: "",
    type: String,
  },
  title: {
    default: "",
    type: String,
  },
  variant: {
    default: "filled",
    type: String,
    validator: (value: string) =>
      ["outlined", "filled", "textOnly"].includes(value),
  },
});
</script>

<template>
  <button
    :class="buttonClassName"
    :disabled="disabled || loading"
    :role="buttonRole"
    @click="$emit('click')"
  >
    <div class="label">
      <span>{{ label }}</span>
    </div>

    <LoadingIcon v-if="loading" />
  </button>
</template>

<script lang="ts">
export default {
  name: "BasicButton",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

import LoadingIcon from "../components/LoadingIcon.vue";

defineEmits(["click"]);

const props = defineProps({
  children: {
    default: null,
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
    default: null,
    type: String,
  },
  iconRight: {
    default: null,
    type: String,
  },
  label: {
    default: null,
    type: String,
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
    default: null,
    type: String,
  },
  title: {
    default: null,
    type: String,
  },
  variant: {
    default: "filled",
    type: String,
    validator: (value: string) =>
      ["outlined", "filled", "textOnly"].includes(value),
  },
});

const buttonClassName = computed(() => {
  return [
    "dz-button",
    props.className,
    props.severity,
    props.size,
    props.variant,
    !(props.label || props.children) && "dz-icon-only",
    props.rounded && "dz-rounded",
  ]
    .filter(Boolean)
    .join(" ");
});

const buttonRole = computed(() => (props.to ? "link" : "button"));
</script>

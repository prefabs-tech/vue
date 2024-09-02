<template>
  <button
    class="dz-button"
    :class="(className, severity, size, rounded, variant)"
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
  name: "ButtonBasic",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

import LoadingIcon from "../components/LoadingIcon.vue";

defineEmits(["click"]);

const props = defineProps({
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
    default: null,
    type: String,
  },
  iconRight: {
    default: null,
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

const buttonRole = computed(() => (props.to ? "link" : "button"));
</script>

<style lang="css">
.dz-button.filled {
  color: var(--button-text-color);
  border: 1px solid var(--_button-color);
}

.dz-button.medium {
  --button-icon-size: var(--button-medium-icon-size);
  --button-font-size: var(--button-medium-font-size);
  --button-padding: var(--button-medium-padding);
  --button-width: var(--button-medium-width);
}

.dz-button.primary {
  background-color: var(--loading-button-bg-color, #1c4786);
}
</style>

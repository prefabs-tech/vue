<template>
  <button
    :class="buttonClassName"
    :disabled="disabled || loading"
    :role="buttonRole"
    @click="handleClick()"
  >
    <span v-if="iconLeft" class="icon-left">
      <slot name="iconLeft">
        <i :class="iconLeft" />
      </slot>
    </span>

    <div v-if="children || label" class="label">
      <slot name="buttonContent">
        <span>{{ label }}</span>
      </slot>
    </div>

    <span v-if="iconRight" class="icon-right">
      <slot name="iconRight">
        <i :class="iconRight" />
      </slot>
    </span>

    <LoadingIcon v-if="loading" class="button-loading" />
  </button>
</template>

<script lang="ts">
export default {
  name: "ButtonElement",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

import LoadingIcon from "../components/LoadingIcon.vue";

const emits = defineEmits(["click"]);

const props = defineProps({
  children: {
    default: false,
    type: Boolean,
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
    type: [String, Boolean],
  },
  iconRight: {
    default: null,
    type: [String, Boolean],
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
    "button",
    props.className,
    props.severity,
    props.size,
    props.variant,
    !(props.label || props.children) && "icon-only",
    props.loading && "loading",
    props.rounded && "rounded",
  ]
    .filter(Boolean)
    .join(" ");
});

const buttonRole = computed(() => (props.to ? "link" : "button"));

function handleClick() {
  if (props.to) {
    window.location.href = props.to;
  }

  emits("click");
}
</script>

<style lang="css">
.button .button-loading {
  font-size: 4px;
  position: absolute;
  z-index: 999;
}
</style>

<template>
  <span :class="badgeClassName">
    <slot name="iconLeft">
      <i v-if="iconLeft" :class="iconLeft" />
    </slot>

    <template v-if="label">
      {{ label }}
    </template>

    <slot name="iconRight">
      <i v-if="iconRight" :class="iconRight" />
    </slot>
  </span>
</template>

<script lang="ts">
export default {
  name: "BadgeComponent",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
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

const badgeClassName = computed(() => [
  "badge",
  { rounded: props.rounded },
  props.severity,
]);
</script>

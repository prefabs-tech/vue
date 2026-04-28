<template>
  <div
    :class="[
      'data',
      { 'data-stat': mode === 'stat' },
      `direction-${direction}`,
    ]"
  >
    <div class="label">
      <slot name="caption">
        {{ caption }}
      </slot>
    </div>
    <div class="value">
      <slot name="value">
        {{ value }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "DataElement",
};
</script>

<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  caption: {
    required: true,
    type: String,
  },
  direction: {
    default: "vertical",
    type: String,
    validator: (value: string) => ["horizontal", "vertical"].includes(value),
  },
  mode: {
    default: "attr",
    type: String,
    validator: (value: string) => ["attr", "stat"].includes(value),
  },
  value: {
    default: "",
    type: [String, Number] as PropType<number | string>,
  },
});
</script>

<style lang="css">
@import "../assets/css/data.css";
</style>

<template>
  <div :class="`data direction-${direction}`">
    <div class="data-label">{{ label }}</div>
    <div v-if="slots.separator" class="separator">
      <slot name="separator"></slot>
    </div>
    <div class="data-value">
      <slot name="value">
        {{ displayValue }}
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
import { computed, useSlots } from "vue";

import type { PropType } from "vue";

const props = defineProps({
  dataKey: {
    default: undefined,
    type: String,
  },
  direction: {
    default: "vertical",
    type: String,
    validator: (value: string) => ["horizontal", "vertical"].includes(value),
  },
  label: {
    type: [String, Number, Object] as PropType<string | number>,
    required: true,
  },
  value: {
    default: "",
    type: [Object, String, Number] as PropType<string | number | object>,
  },
});

const slots = useSlots();

const displayValue = computed(() => {
  if (
    props.dataKey &&
    typeof props.value === "object" &&
    props.value !== null &&
    props.dataKey in props.value
  ) {
    return props.value[props.dataKey as keyof typeof props.value];
  }
  return props.value;
});
</script>

<style lang="css">
@import "../assets/css/data.css";
</style>

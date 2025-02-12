<template>
  <div class="switch">
    <label v-if="label" for="switch">
      {{ label }}
    </label>
    <input
      :checked="modelValue"
      :data-on="onLabel"
      :data-off="offLabel"
      :disabled="disabled"
      :class="['switch-input', { labeled: offLabel || onLabel }]"
      type="checkbox"
      @change="onChange"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "ToggleSwitch",
};
</script>

<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  disabled: {
    default: false,
    type: Boolean,
  },
  label: {
    default: "",
    required: false,
    type: String as PropType<string>,
  },
  modelValue: {
    default: false,
    type: Boolean,
  },
  offLabel: {
    default: undefined,
    type: String,
  },
  onLabel: {
    default: undefined,
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

const onChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).checked;

  emit("update:modelValue", Boolean(value));
};
</script>

<style lang="css">
@import "../assets/css/switch.css";
</style>

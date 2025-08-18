<template>
  <div class="checkbox-wrapper">
    <input
      :id="name"
      :checked="modelValue"
      :disabled="disabled"
      :name="name"
      :value="value"
      type="checkbox"
      @change="onChange"
    />
    <label v-if="label" :for="name">{{ label }}</label>
  </div>
</template>

<script lang="ts">
export default {
  name: "CheckboxElement",
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
    default: undefined,
    required: false,
    type: String as PropType<string | null | undefined>,
  },
  modelValue: {
    default: false,
    type: Boolean,
  },
  name: {
    default: "checkbox",
    required: false,
    type: String as PropType<string>,
  },
  value: {
    default: undefined,
    required: false,
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
  },
});

const emit = defineEmits(["update:modelValue"]);

const onChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).checked;

  emit("update:modelValue", Boolean(value));
};
</script>

<style lang="css">
@import "../assets/css/checkbox.css";
</style>

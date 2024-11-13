<template>
  <div :aria-label="ariaLabel ?? placeholder" class="debounce-input">
    <input
      :disabled="disabled"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      @input="onInput"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "DebouncedInput",
};
</script>

<script setup lang="ts">
import { useDebouncedValue } from "../../utils";

import type { PropType } from "vue";

const props = defineProps({
  ariaLabel: {
    default: "input",
    type: String,
  },
  debounceTime: {
    default: 500,
    required: false,
    type: Number,
  },
  disabled: {
    default: false,
    type: Boolean,
  },
  modelValue: {
    default: "",
    required: false,
    type: [String, Number] as PropType<string | number | null | undefined>,
  },
  placeholder: {
    default: "Search...",
    required: false,
    type: String,
  },
  type: {
    default: "text",
    required: false,
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

const onInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;

  useDebouncedValue(value, props.debounceTime).then((debouncedValue) => {
    if (debouncedValue.value) {
      emit("update:modelValue", value);
    }
  });
};
</script>

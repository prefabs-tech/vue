<template>
  <div class="field debounce-input">
    <input
      v-bind="$attrs"
      :aria-label="ariaLabel ?? placeholder"
      :disabled="disabled"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      class="input-field"
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
import type { PropType } from "vue";

import { useDebouncedValue } from "../../utils";

defineOptions({
  inheritAttrs: false,
});

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
    type: [String, Number] as PropType<null | number | string | undefined>,
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

  useDebouncedValue(value, props.debounceTime).then(() => {
    emit("update:modelValue", value);
  });
};
</script>

<style lang="css">
.debounce-input {
  width: 100%;
}

.debounce-input > input {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

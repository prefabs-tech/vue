<template>
  <div class="debounce-input">
    <input
      v-model="modelValue"
      :placeholder="placeholder"
      :type="type"
      @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

import { useDebouncedValue } from "../../utils";

import type { PropType } from "vue";

const props = defineProps({
  debounceTime: {
    default: 500,
    required: false,
    type: Number,
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

const { modelValue } = toRefs(props);

const onInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;

  useDebouncedValue(value, props.debounceTime).then((debouncedValue) => {
    if (debouncedValue.value) {
      emit("update:modelValue", value);
    }
  });
};
</script>

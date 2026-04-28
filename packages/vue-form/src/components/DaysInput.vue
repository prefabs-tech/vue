<template>
  <NumberInput
    :disabled="disabled"
    :label="label"
    :model-value="modelValue"
    :name="name"
    :placeholder="placeholder"
    :schema="schema"
    @update:model-value="onInput"
  />
</template>

<script lang="ts">
export default {
  name: "DaysInput",
};
</script>

<script setup lang="ts">
import type { PropType } from "vue";

import { z } from "zod";

import NumberInput from "./NumberInput.vue";

const props = defineProps({
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
    default: undefined,
    type: Number as PropType<null | number | undefined>,
  },
  name: {
    default: "days-input",
    required: false,
    type: String as PropType<string>,
  },
  placeholder: {
    default: "",
    type: String,
  },
  schema: {
    default: z.coerce.number().optional(),
    required: false,
    type: Object as PropType<z.ZodType<number | string>>,
  },
});

const emit = defineEmits(["update:date", "update:modelValue"]);

const onInput = (value: number) => {
  emit("update:modelValue", value);

  calculateDate(value);
};

const calculateDate = (days: number) => {
  const today = new Date();
  today.setDate(today.getDate() + days);

  emit("update:date", today.toISOString());
};

const prepareComponent = () => {
  if (props.modelValue || props.modelValue === 0) {
    calculateDate(props.modelValue);
  }
};

prepareComponent();
</script>

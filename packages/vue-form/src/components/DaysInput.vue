<template>
  <NumberInput
    :model-value="modelValue"
    :label="label"
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
import { z } from "zod";

import NumberInput from "./NumberInput.vue";

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
    default: undefined,
    type: Number as PropType<number | null | undefined>,
  },
  name: {
    default: "number",
    required: false,
    type: String as PropType<string>,
  },
  placeholder: {
    default: "",
    type: String,
  },
  schema: {
    default: () => {
      return {};
    },
    required: false,
    type: Object as PropType<z.ZodType<string | number>>,
  },
});

const emit = defineEmits(["update:date", "update:modelValue"]);

const onInput = (value: number) => {
  emit("update:modelValue", value);

  if (value >= 0) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const date = new Date(today);
    date.setDate(today.getDate() + value);

    emit("update:date", date.toISOString().split("T")[0]);
  }
};
</script>

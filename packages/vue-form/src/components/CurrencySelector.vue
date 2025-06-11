<template>
  <div class="currency-selector">
    <SelectInput
      v-bind="selectionOptions"
      :disabled="disabled"
      :label="label"
      :model-value="modelValue"
      :multiple="multiple"
      :name="name"
      :options="options"
      :schema="schema"
      @update:model-value="$emit('update:modelValue', $event)"
    >
      <template
        v-for="(option, index) in options"
        :key="`${index}-${option.label}`"
        #[option.value]
      >
        <span
          v-if="option?.[optionLabelOrder[0]]"
          :class="[option?.[optionLabelOrder[0]], 'primary-currency-label']"
        >
          {{ option?.[optionLabelOrder[0]] }}&nbsp;
        </span>
        <span
          v-if="option?.[optionLabelOrder[1]]"
          :class="[option?.[optionLabelOrder[1]], 'secondary-currency-label']"
        >
          {{ option?.[optionLabelOrder[1]] }}&nbsp;
        </span>
        <span
          v-if="option?.[optionLabelOrder[2]]"
          :class="[option?.[optionLabelOrder[2]], 'tertiary-currency-label']"
        >
          {{ option?.[optionLabelOrder[2]] }}
        </span>
      </template>
    </SelectInput>
  </div>
</template>

<script lang="ts">
export default {
  name: "CurrencySelector",
};
</script>

<script setup lang="ts">
import { z } from "zod";

import SelectInput from "./SelectInput.vue";

import type { CurrencyOption } from "../types";
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
    default: () => null,
    required: false,
    type: [Boolean, Number, String, Array] as PropType<
      boolean | number | string | (number | string)[]
    >,
  },
  multiple: {
    default: false,
    type: Boolean,
  },
  name: {
    default: "currency",
    required: false,
    type: String as PropType<string>,
  },
  optionLabelOrder: {
    type: Array as PropType<Array<keyof CurrencyOption>>,
    default: () => ["shortName", "label", "symbol"],
  },
  options: {
    required: true,
    type: Array as PropType<CurrencyOption[]>,
  },
  schema: {
    default: () => {
      return {};
    },
    required: false,
    type: Object as PropType<z.ZodType<string | number | string[] | number[]>>,
  },
  selectionOptions: {
    default: () => ({}),
    type: Object,
  },
});

defineEmits(["update:modelValue"]);
</script>

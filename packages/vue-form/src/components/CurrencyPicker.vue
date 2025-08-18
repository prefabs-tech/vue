<template>
  <div class="currency-selector">
    <SelectInput
      v-bind="selectionOptions"
      :disabled="disabled"
      :label="label"
      :model-value="modelValue"
      :multiple="multiple"
      :name="name"
      :options="filteredOptions"
      :placeholder="placeholder"
      :schema="schema"
      enable-custom-search
      @update:model-value="$emit('update:modelValue', $event)"
      @update:search-input="onSearchInput"
    >
      <template
        v-for="(option, index) in options"
        :key="`${index}-${option.label}`"
        #[option.label]
      >
        <slot :name="option.value">
          <div class="currency-label">
            <span :class="[optionLabelOrder[0], 'primary-currency-label']">
              {{ option?.[optionLabelOrder[0]] }}
            </span>
            <span
              v-if="option?.[optionLabelOrder[1]]"
              :class="[optionLabelOrder[1], 'secondary-currency-label']"
            >
              {{ option?.[optionLabelOrder[1]] }}
            </span>
            <span
              v-if="option?.[optionLabelOrder[2]]"
              :class="[optionLabelOrder[2], 'tertiary-currency-label']"
            >
              {{ option?.[optionLabelOrder[2]] }}
            </span>
          </div>
        </slot>
      </template>

      <template v-if="$slots.selection" #selection>
        <slot name="selection" />
      </template>
    </SelectInput>
  </div>
</template>

<script lang="ts">
export default {
  name: "CurrencyPicker",
};
</script>

<script setup lang="ts">
import { computed, ref } from "vue";
import { z } from "zod";

import SelectInput from "./SelectInput.vue";

import type { CurrencyOption } from "../types";
import type { PropType } from "vue";

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
    default: () => ["code", "label", "symbol"],
  },
  options: {
    required: true,
    type: Array as PropType<CurrencyOption[]>,
  },
  placeholder: {
    default: undefined,
    type: String,
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

const emit = defineEmits(["update:modelValue", "update:searchInput"]);

const searchInput = ref<string>();

const filteredOptions = computed(() => {
  const query = String(searchInput.value).toLowerCase();

  if (!searchInput.value) {
    return props.options;
  }

  return props.options.filter((option: CurrencyOption) => {
    const label = option.label?.toLowerCase();
    const code = option.code?.toLowerCase();
    const symbol = option.symbol?.toLowerCase();

    return label?.includes(query) || code?.includes(query) || symbol === query;
  });
});

const onSearchInput = (value: string) => {
  searchInput.value = value;
  emit("update:searchInput", value);
};
</script>

<style lang="css">
@import "../assets/css/currency-picker.css";
</style>

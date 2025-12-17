<template>
  <div :class="`field ${name}`">
    <label v-if="label" :for="name">
      {{ label }}
    </label>
    <Field
      v-slot="{ field, meta }"
      v-bind="{ modelValue }"
      :name="name"
      :rules="fieldSchema"
    >
      <MultiSelect
        :id="`input-field-${name}`"
        v-bind="field"
        :class="{
          invalid: meta.touched && !meta.valid,
          valid: meta.dirty && meta.valid && fieldSchema,
        }"
        :custom-search-helper-text="customSearchHelperText"
        :disabled="disabled"
        :disable-search="disableSearch"
        :enable-custom-search="enableCustomSearch"
        :enable-tooltip="enableTooltip"
        :has-sorted-options="hasSortedOptions"
        :label-key="labelKey"
        :loading="loading"
        :model-value="modelValue"
        :multiple="multiple"
        :no-options-message="noOptionsMessage"
        :options="options"
        :placeholder="placeholder"
        :show-remove-selection="showRemoveSelection"
        :tooltip-options="tooltipOptions"
        :value-key="valueKey"
        tabindex="0"
        @update:model-value="onSelect"
        @update:search-input="$emit('update:searchInput', $event)"
      >
        <template
          v-for="(option, index) in normalizedOptions"
          :key="`${index}-${option.groupLabel}`"
          #[option.groupLabel]
        >
          <slot :name="option.groupLabel"></slot>
        </template>

        <template
          v-for="(option, index) in options"
          :key="`${index}-${option.label}`"
          #[option.label]
        >
          <slot :name="option.label"></slot>
        </template>

        <template v-if="$slots.selection" #selection="{ selectedLabels }">
          <slot name="selection" :selected-labels="selectedLabels" />
        </template>
      </MultiSelect>
      <ErrorMessage :name="name" />
    </Field>
  </div>
</template>

<script lang="ts">
export default {
  name: "SelectInput",
};
</script>

<script setup lang="ts">
import { toFieldValidator } from "@vee-validate/zod";
import { ErrorMessage, Field } from "vee-validate";
import { computed } from "vue";
import { z } from "zod";

import { normalizeOptions } from "../utils";
import MultiSelect from "./Select.vue";

import type { GroupedOption, SelectOption } from "../types";
import type { PropType } from "vue";

const props = defineProps({
  customSearchHelperText: {
    default: undefined,
    type: String,
  },
  disabled: {
    default: false,
    type: Boolean,
  },
  disableSearch: Boolean,
  enableCustomSearch: Boolean,
  enableTooltip: {
    default: true,
    type: Boolean,
  },
  hasSortedOptions: {
    default: true,
    type: Boolean,
  },
  label: {
    default: "",
    required: false,
    type: String as PropType<string>,
  },
  labelKey: {
    default: undefined,
    type: String,
  },
  loading: Boolean,
  maxSelection: {
    default: undefined,
    type: Number as PropType<number | undefined>,
  },
  minSelection: {
    default: undefined,
    type: Number as PropType<number | undefined>,
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
    default: "select",
    required: false,
    type: String as PropType<string>,
  },
  noOptionsMessage: {
    default: undefined,
    type: String,
  },
  options: {
    required: true,
    type: Array as PropType<GroupedOption[] | SelectOption[]>,
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
  showRemoveSelection: {
    default: true,
    type: Boolean,
  },
  tooltipOptions: {
    default: () => ({}),
    type: Object as PropType<Record<string, unknown>>,
  },
  valueKey: {
    default: undefined,
    type: String,
  },
});

const emit = defineEmits(["update:modelValue", "update:searchInput"]);

let fieldSchema: object;

const normalizedOptions = computed(() =>
  normalizeOptions(props.options, props.labelKey, props.valueKey),
);

const activeOptions = computed(() =>
  [...normalizedOptions.value]?.filter((option) => !option?.disabled),
);

if (Object.keys(props.schema).length) {
  fieldSchema = toFieldValidator(props.schema);
} else if ((props.maxSelection || props.minSelection) && props.multiple) {
  const currentLength = activeOptions.value.length;
  const max = props.maxSelection ?? 0;
  const min = props.minSelection ?? 0;

  const minValue =
    min > currentLength
      ? currentLength
      : props.maxSelection && max < min
        ? max
        : min;
  const maxValue = props.maxSelection ? Math.max(min, max) : undefined;

  const arraySchema = z.preprocess(
    (value) => (value === null || value === undefined ? [] : value),
    z.array(z.string()).refine(
      (value) => {
        return (
          (!maxValue || value.length <= maxValue) &&
          (!minValue || value.length >= minValue)
        );
      },
      {
        message: `Please select ${
          minValue !== maxValue
            ? `between ${minValue} and ${maxValue ?? "available"}`
            : minValue
        } options`,
      },
    ),
  );

  fieldSchema = toFieldValidator(arraySchema);
}

const onSelect = (value: string | number | []) => {
  emit("update:modelValue", value);
};
</script>

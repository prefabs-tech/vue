<template>
  <div :class="['field', name]">
    <label v-if="label" :for="`input-field-${name}`">
      {{ label }}
    </label>
    <Field
      v-slot="{ field, meta, handleChange }"
      v-bind="{ modelValue }"
      :name="name"
      :rules="fieldSchema"
      @input="onInput"
    >
      <input
        v-bind="field"
        :id="`input-field-${name}`"
        :class="{
          invalid: (meta.dirty || meta.touched) && !meta.valid,
          valid: meta.dirty && meta.valid,
        }"
        :disabled="disabled"
        :placeholder="placeholder"
        type="number"
        @input="(event: Event) => onInput(event, handleChange)"
      />
      <ErrorMessage :name="name" />
    </Field>
  </div>
</template>

<script lang="ts">
export default {
  name: "NumberInput",
};
</script>

<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { ErrorMessage, Field } from "vee-validate";
import { z } from "zod";

import { numberSchema } from "../schemas";

import type { NumberErrorMessages, IsIntOptions } from "../types";
import type { PropType } from "vue";

const props = defineProps({
  disabled: {
    default: false,
    type: Boolean,
  },
  errorMessages: {
    default: () => {
      return {
        invalid: "Please provide a valid integer field",
        required: "The field is required",
      };
    },
    required: false,
    type: Object as PropType<NumberErrorMessages>,
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
  options: {
    default: () => {
      return {};
    },
    required: false,
    type: Object as PropType<IsIntOptions>,
  },
  placeholder: {
    default: "",
    type: String,
  },
  schema: {
    default: undefined,
    required: false,
    type: Object as PropType<z.ZodType<string | number>>,
  },
});

const emit = defineEmits(["update:modelValue"]);

const fieldSchema = toTypedSchema(
  props.schema ?? numberSchema(props.errorMessages, props.options),
);

const onInput = (event: Event, handleChange: (event: Event) => void) => {
  handleChange(event);

  const value = (event.target as HTMLInputElement).value;
  emit("update:modelValue", value ? Number(value) : undefined);
};
</script>

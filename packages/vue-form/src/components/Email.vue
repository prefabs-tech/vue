<template>
  <div class="field email">
    <label v-if="label" :for="`input-field-${name}`">
      {{ label }}
    </label>
    <Field
      v-slot="{ field, meta, handleChange }"
      :model-value="modelValue"
      :name="name"
      :rules="fieldSchema"
    >
      <input
        v-bind="field"
        :id="`input-field-${name}`"
        :autocomplete="autocomplete"
        :class="{
          invalid: (meta.dirty || meta.touched) && !meta.valid,
          valid: meta.dirty && meta.valid,
        }"
        :disabled="disabled"
        :placeholder="placeholder"
        type="email"
        @input="(event: Event) => onInput(event, handleChange)"
      />
      <ErrorMessage :name="name" />
    </Field>
  </div>
</template>

<script lang="ts">
export default {
  name: "EmailInput",
};
</script>

<script setup lang="ts">
import type { PropType } from "vue";

import { toTypedSchema } from "@vee-validate/zod";
import { ErrorMessage, Field } from "vee-validate";
import { z } from "zod";

import type { EmailErrorMessages, IsEmailOptions } from "../types";

import { emailSchema } from "../schemas";

const props = defineProps({
  autocomplete: {
    default: "email",
    type: String,
  },
  disabled: {
    default: false,
    type: Boolean,
  },
  errorMessages: {
    default: () => {
      return {
        invalid: "Please provide a valid email address",
        required: "Email address is required",
      };
    },
    required: false,
    type: Object as PropType<EmailErrorMessages>,
  },
  label: {
    default: "",
    required: false,
    type: String as PropType<string>,
  },
  modelValue: {
    default: "",
    type: String as PropType<null | string | undefined>,
  },
  name: {
    default: "email",
    required: false,
    type: String as PropType<string>,
  },
  options: {
    default: () => ({}),
    required: false,
    type: Object as PropType<IsEmailOptions>,
  },
  placeholder: {
    default: "",
    type: String,
  },
  schema: {
    default: undefined,
    required: false,
    type: Object as PropType<z.ZodType<number | object | string>>,
  },
});

const emit = defineEmits(["update:modelValue"]);

const fieldSchema = toTypedSchema(
  props.schema || emailSchema(props.errorMessages, props.options),
);

const onInput = (event: Event, handleChange: (event: Event) => void) => {
  handleChange(event);

  const value = (event.target as HTMLInputElement).value;
  emit("update:modelValue", value);
};
</script>

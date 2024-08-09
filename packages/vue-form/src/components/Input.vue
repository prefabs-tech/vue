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
      @input="onInput"
    >
      <input
        v-bind="field"
        :id="`input-field-${name}`"
        :class="{
          invalid: meta.touched && !meta.valid,
          valid: meta.dirty && meta.valid && Object.keys(props.schema).length,
        }"
        :disabled="disabled"
        :placeholder="placeholder"
        :type="type"
        tabindex="0"
      />
      <ErrorMessage :name="name" />
    </Field>
  </div>
</template>

<script lang="ts">
export default {
  name: "FormInput",
};
</script>

<script setup lang="ts">
import { toFieldValidator } from "@vee-validate/zod";
import { ErrorMessage, Field } from "vee-validate";
import { z } from "zod";

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
    default: "",
    type: String as PropType<string | null | undefined>,
  },
  name: {
    default: "name",
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
    type: Object as PropType<z.ZodType<string | number | object>>,
  },
  type: {
    default: "text",
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

const fieldSchema = Object.keys(props.schema).length
  ? toFieldValidator(props.schema)
  : null;

const onInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;

  emit("update:modelValue", value);
};
</script>

<style lang="css">
.field {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: var(--form-field-gap, 0.25em);
  justify-content: flex-start;
}

.field input {
  --_input-field-border-color: var(--form-input-border-color, #000);
  --_input-field-border-radius: var(--form-input-border-radius, 0.25em);
  --_input-field-margin-bottom: var(--form-input-margin-bottom, 1e);
  --_input-field-padding-h: var(--form-input-padding-h, 0.5em);
  --_input-field-padding-v: var(--form-input-padding-v, 0.5em);

  border-radius: var(--_input-field-border-radius);
  border: 1px solid var(--_input-field-border-color);
  font-size: 1rem;
  margin-bottom: var(--_input-field-margin-bottom);
  padding: var(--_input-field-padding-v) var(--_input-field-padding-v);
  width: 100%;
}

.field input:disabled {
  background-color: var(--form-input-bg-color-disabled);
  border-color: var(--form-input-border-color-disabled);
}
</style>

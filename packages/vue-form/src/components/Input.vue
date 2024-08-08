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
  border-radius: var(---form-input-border-radius, 0.25em);
  border: 1px solid var(--form-input-border-color, #000);
  font-size: 1rem;
  padding: var(--form-input-padding-v, 0.5em) var(--form-input-padding-h, 0.5em);
  width: 100%;
}
</style>

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
        :type="type"
        @input="(event: Event) => onInput(event, handleChange)"
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
import type { PropType } from "vue";

import { toTypedSchema } from "@vee-validate/zod";
import { ErrorMessage, Field } from "vee-validate";
import { z } from "zod";

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
    type: [String, Number] as PropType<null | number | string | undefined>,
  },
  name: {
    default: "input",
    required: false,
    type: String as PropType<string>,
  },
  placeholder: {
    default: "",
    type: String,
  },
  schema: {
    default: undefined,
    required: false,
    type: Object as PropType<z.ZodTypeAny>,
  },
  type: {
    default: "text",
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

const fieldSchema = props.schema ? toTypedSchema(props.schema) : undefined;

const onInput = (event: Event, handleChange: (event: Event) => void) => {
  handleChange(event);

  const value = (event.target as HTMLInputElement).value;
  emit("update:modelValue", value);
};
</script>

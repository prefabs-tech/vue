<template>
  <Field
    v-slot="{ field, meta }"
    :model-value="modelValue"
    :name="name"
    :rules="fieldSchema"
    @change="onChange"
  >
    <Radio
      v-bind="field"
      :id="`input-field-${name}`"
      :class="[
        name,
        {
          invalid: (meta.touched || meta.dirty) && !meta.valid,
        },
      ]"
      :direction="direction"
      :disabled="disabled"
      :helper-text="helperText"
      :label="label"
      :model-value="modelValue"
      :name="name"
      :options="options"
      tabindex="0"
    />
    <ErrorMessage :name="name" />
  </Field>
</template>

<script lang="ts">
export default {
  name: "RadioInput",
};
</script>

<script setup lang="ts">
import type { PropType } from "vue";

import { toTypedSchema } from "@vee-validate/zod";
import { ErrorMessage, Field } from "vee-validate";
import { computed } from "vue";
import { z } from "zod";

import type { InputOption } from "../types";

import Radio from "./Radio.vue";

const props = defineProps({
  direction: {
    default: undefined,
    type: String,
    validator: (value: string) => ["horizontal", "vertical"].includes(value),
  },
  disabled: {
    default: false,
    type: Boolean,
  },
  helperText: {
    default: undefined,
    type: String,
  },
  label: {
    default: undefined,
    required: false,
    type: String,
  },
  modelValue: {
    default: undefined,
    type: [String, Number],
  },
  name: {
    default: "radio",
    required: false,
    type: String as PropType<string>,
  },
  options: {
    required: true,
    type: Array as PropType<InputOption[]>,
  },
  schema: {
    default: () => {
      return {};
    },
    required: false,
    type: Object as PropType<z.ZodType<boolean | number | string>>,
  },
});

const emit = defineEmits(["update:modelValue"]);

const fieldSchema = computed(() =>
  Object.keys(props.schema).length > 0
    ? toTypedSchema(props.schema)
    : undefined,
);

const onChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;

  if ((event.target as HTMLInputElement).checked) {
    emit("update:modelValue", value);
  }
};
</script>

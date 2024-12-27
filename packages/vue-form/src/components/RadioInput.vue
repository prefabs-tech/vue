<template>
  <div :class="`field switch-toggle ${name}`">
    <Field
      v-slot="{ field, meta }"
      :name="name"
      :rules="fieldSchema"
      @change="onChange"
    >
      <Radio
        v-bind="field"
        :id="`input-field-${name}`"
        :class="{
          invalid: meta.touched && !meta.valid,
        }"
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
  </div>
</template>

<script lang="ts">
export default {
  name: "RadioInput",
};
</script>

<script setup lang="ts">
import { toFieldValidator } from "@vee-validate/zod";
import { ErrorMessage, Field } from "vee-validate";
import { z } from "zod";

import Radio from "./Radio.vue";

import type { InputOption } from "../types";
import type { PropType } from "vue";

const props = defineProps({
  direction: {
    default: undefined,
    type: String,
    validator: (value: string) => ["vertical", "horizontal"].includes(value),
  },
  disabled: {
    default: false,
    type: Boolean,
  },
  helperText: {
    default: undefined,
    type: String as PropType<string | null | undefined>,
  },
  label: {
    default: "",
    required: false,
    type: String,
  },
  modelValue: {
    default: "",
    type: [String, Number] as PropType<string | number | null | undefined>,
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
    type: Object as PropType<z.ZodType<string | number | boolean>>,
  },
});

const emit = defineEmits(["update:modelValue"]);

const fieldSchema = Object.keys(props.schema).length
  ? toFieldValidator(props.schema)
  : null;

const onChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;

  if ((event.target as HTMLInputElement).checked) {
    emit("update:modelValue", value);
  }
};
</script>

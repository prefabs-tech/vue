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
    default: undefined,
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
  const value = (event.target as HTMLInputElement).checked;

  emit("update:modelValue", Boolean(value));
};
</script>

<style lang="css">
.switch-toggle {
  --_switch-field-direction: var(--switch-field-direction, row);
  --_switch-field-gap: var(--form-field-gap, 0.75rem);

  display: flex;
  flex-direction: var(--_switch-field-direction);
  gap: var(--_switch-field-gap);
  width: max-content;
}
</style>

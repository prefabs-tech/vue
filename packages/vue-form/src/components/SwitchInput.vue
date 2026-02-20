<template>
  <div :class="`field switch-input ${name}`">
    <label v-if="label" :for="name">
      {{ label }}
    </label>
    <Field
      v-slot="{ field, meta }"
      v-bind="{ modelValue }"
      :name="name"
      :rules="fieldSchema"
      type="checkbox"
      @change="onChange"
    >
      <Switch
        v-bind="field"
        :id="`input-field-${name}`"
        :class="{
          invalid: meta.touched && !meta.valid,
        }"
        :disabled="disabled"
        :model-value="modelValue"
        :off-label="offLabel"
        :on-label="onLabel"
        tabindex="0"
      />
      <ErrorMessage :name="name" />
    </Field>
  </div>
</template>

<script lang="ts">
export default {
  name: "SwitchInput",
};
</script>

<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { ErrorMessage, Field } from "vee-validate";
import { computed } from "vue";
import { z } from "zod";

import Switch from "./Switch.vue";

import type { PropType } from "vue";

const props = defineProps({
  disabled: {
    default: false,
    type: Boolean,
  },
  label: {
    default: undefined,
    type: String,
  },
  modelValue: {
    default: false,
    type: Boolean,
  },
  name: {
    default: "switch",
    type: String,
  },
  offLabel: {
    default: undefined,
    type: String,
  },
  onLabel: {
    default: undefined,
    type: String,
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

const fieldSchema = computed(() =>
  Object.keys(props.schema).length > 0
    ? toTypedSchema(props.schema)
    : undefined,
);

const onChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).checked;

  emit("update:modelValue", Boolean(value));
};
</script>

<template>
  <div :class="`field switch-toggle ${name}`">
    <label v-if="label" :for="name">
      {{ label }}
    </label>
    <Field
      v-slot="{ field, meta }"
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
        :model-value="modelValue"
        :disabled="disabled"
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
import { toFieldValidator } from "@vee-validate/zod";
import { ErrorMessage, Field } from "vee-validate";
import { z } from "zod";

import Switch from "./Switch.vue";

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
    default: false,
    type: Boolean,
  },
  name: {
    default: "switch",
    required: false,
    type: String as PropType<string>,
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

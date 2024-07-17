<template>
  <div :class="`field ${name}`">
    <label v-if="label">
      {{ label }}
    </label>
    <Field v-slot="{ field, meta }" v-bind="modelValue" :name="name">
      <input
        v-bind="field"
        :id="`input-field-${name}`"
        :class="{
          invalid: meta.touched && !meta.valid,
          valid: meta.dirty && meta.valid,
        }"
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
import { ErrorMessage, Field } from "vee-validate";

import type { PropType } from "vue";

defineProps({
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
  rules: {
    default: () => {
      return {};
    },
    required: false,
    type: Object,
  },
  type: {
    default: "text",
    type: String,
  },
});

defineEmits(["update:modelValue"]);
</script>

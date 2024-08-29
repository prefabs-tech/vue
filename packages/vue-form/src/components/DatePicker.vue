<template>
  <div class="date-picker">
    <label v-if="label" for="date-picker">
      {{ label }}
    </label>
    <Field
      v-slot="{ field, meta }"
      v-bind="{ modelValue }"
      :name="name"
      :rules="fieldSchema"
    >
      <VueDatePicker
        v-bind="{ ...filteredAttributes, ...field }"
        :class="{
          invalid: meta.touched && !meta.valid,
          valid: meta.dirty && meta.valid,
        }"
        :disabled="disabled"
        :model-value="modelValue"
        tabindex="0"
        @update:model-value="onUpdate"
      />
      <ErrorMessage :name="name" />
    </Field>
  </div>
</template>

<script lang="ts">
export default {
  name: "DatePicker",
};
</script>

<script setup lang="ts">
import { toFieldValidator } from "@vee-validate/zod";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ErrorMessage, Field } from "vee-validate";
import { computed, useAttrs } from "vue";
import { z } from "zod";

import type { MonthPickerValue } from "../types";
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
    default: () => new Date().toDateString(),
    type: [String, Array, Object] as PropType<
      string | string[] | MonthPickerValue | null | undefined
    >,
  },
  name: {
    default: "date",
    required: false,
    type: String as PropType<string>,
  },
  schema: {
    default: () => {
      return {};
    },
    required: false,
    type: Object as PropType<z.ZodType<string | number | object>>,
  },
});

const emit = defineEmits(["update:modelValue"]);

const attributes = useAttrs();

const fieldSchema = Object.keys(props.schema).length
  ? toFieldValidator(props.schema)
  : null;

const filteredAttributes = computed(() => {
  const { class: _, ...rest } = attributes;
  return rest;
});

const onUpdate = (date: string | string[] | object) => {
  emit("update:modelValue", date);
};
</script>

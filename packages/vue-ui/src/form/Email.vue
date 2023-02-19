<template>
  <div class="field email">
    <label v-if="label" for="email">
      {{ label }}
    </label>
    <Field
      v-slot="{ field, meta }"
      v-bind="modelValue"
      :name="name"
      :rules="fieldSchema"
    >
      <input
        v-bind="field"
        :class="{
          invalid: meta.touched && !meta.valid,
          valid: meta.dirty && meta.valid,
        }"
        tabindex="0"
        type="email"
      />
      <ErrorMessage :name="name" />
    </Field>
  </div>
</template>

<script lang="ts">
export default {
  name: "Email",
};
</script>

<script setup lang="ts">
import { toFieldValidator } from "@vee-validate/zod";
import validator from "validator";
import { ErrorMessage, Field } from "vee-validate";
import { z } from "zod";

import type { EmailErrorMessages } from "../types/form";
import type { IsEmailOptions } from "../types/validator";
import type { PropType } from "vue";

const props = defineProps({
  errorMessages: {
    default: () => {
      return {
        invalid: "Please provide a valid email address",
        required: "Email address is required",
      };
    },
    required: false,
    type: Object as PropType<EmailErrorMessages>,
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
    default: "email",
    required: false,
    type: String as PropType<string>,
  },
  options: {
    default: () => {
      return {};
    },
    required: false,
    type: Object as PropType<IsEmailOptions>,
  },
});

defineEmits(["update:modelValue"]);

const fieldSchema = toFieldValidator(
  z
    .string({
      required_error: props.errorMessages.required,
    })
    .refine((value) => validator.isEmail(value, props.options), {
      message: props.errorMessages.invalid,
    })
);
</script>

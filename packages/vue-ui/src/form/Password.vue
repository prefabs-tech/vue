<template>
  <div class="field password">
    <label v-if="label" for="password">
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
        type="password"
      />
      <ErrorMessage name="password" />
    </Field>
  </div>
</template>

<script lang="ts">
export default {
  name: "Password",
};
</script>

<script setup lang="ts">
import { toFieldValidator } from "@vee-validate/zod";
import validator from "validator";
import { ErrorMessage, Field } from "vee-validate";
import { z } from "zod";

import type { PasswordErrorMessages } from "../types/form";
import type { StrongPasswordOptions } from "../types/validator";
import type { PropType } from "vue";

const props = defineProps({
  errorMessages: {
    default: () => {
      return {
        required: "Email address is required",
        weak: "This password is too weak",
      };
    },
    required: false,
    type: Object as PropType<PasswordErrorMessages>,
  },
  label: {
    default: "",
    required: false,
    type: String as PropType<string>,
  },
  modelValue: {
    required: true,
    type: String as PropType<string | null | undefined>,
  },
  name: {
    default: "password",
    required: false,
    type: String as PropType<string>,
  },
  options: {
    default: () => {
      return {};
    },
    required: false,
    type: Object as PropType<StrongPasswordOptions>,
  },
});

defineEmits(["update:modelValue"]);

const defaultOptions = {
  minLength: 8,
  minLowercase: 0,
  minUppercase: 0,
  minNumbers: 0,
  minSymbols: 0,
  returnScore: false,
  pointsPerUnique: 1,
  pointsPerRepeat: 0.5,
  pointsForContainingLower: 10,
  pointsForContainingUpper: 10,
  pointsForContainingNumber: 10,
  pointsForContainingSymbol: 10,
};

const options = {
  ...defaultOptions,
  ...props.options,
};

const fieldSchema = toFieldValidator(
  z
    .string({
      required_error: props.errorMessages.required,
    })
    .refine(
      (value): boolean => {
        return validator.isStrongPassword(
          value,
          options as StrongPasswordOptions & { returnScore: false | undefined }
        );
      },
      {
        message: props.errorMessages.weak,
      }
    )
);
</script>

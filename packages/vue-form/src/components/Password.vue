<template>
  <div class="field password">
    <label v-if="label" :for="`input-field-${name}`">
      {{ label }}
    </label>
    <Field
      v-slot="{ field, meta, handleChange }"
      :model-value="modelValue"
      :name="name"
      :rules="fieldSchema"
    >
      <div class="password-input">
        <input
          v-bind="field"
          :id="`input-field-${name}`"
          :autocomplete="autocomplete"
          :class="{
            invalid: (meta.dirty || meta.touched) && !meta.valid,
            valid: meta.dirty && meta.valid,
          }"
          :disabled="disabled"
          :placeholder="placeholder"
          :type="showPassword ? 'text' : 'password'"
          @input="(event: Event) => onInput(event, handleChange)"
        />
        <span class="eye-icon" @click="onClick">
          <slot name="icon" :show-password="showPassword">
            <img
              :src="showPassword ? eyeOpenIcon : eyeSlashIcon"
              alt="eye-icon"
            />
          </slot>
        </span>
      </div>
      <ErrorMessage :name="name" />
    </Field>
  </div>
</template>

<script lang="ts">
export default {
  name: "Password",
};
</script>

<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { ErrorMessage, Field } from "vee-validate";
import { ref } from "vue";
import { z } from "zod";

import { passwordSchema } from "../schemas";
import eyeOpenIcon from "./../assets/svg/eye-open.svg";
import eyeSlashIcon from "./../assets/svg/eye-slash.svg";

import type { PasswordErrorMessages, StrongPasswordOptions } from "../types";
import type { PropType } from "vue";

const props = defineProps({
  autocomplete: {
    default: "new-password",
    type: String,
  },
  disabled: {
    default: false,
    type: Boolean,
  },
  errorMessages: {
    default: () => {
      return {
        required: "A password is required",
        weak: "This password is too weak",
      };
    },
    required: false,
    type: Object as PropType<PasswordErrorMessages>,
  },
  label: {
    default: null,
    required: false,
    type: String as PropType<string | null | undefined>,
  },
  modelValue: {
    default: null,
    required: false,
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
  placeholder: {
    default: "",
    type: String,
  },
  schema: {
    default: undefined,
    required: false,
    type: Object as PropType<z.ZodType<string | number | object>>,
  },
});

const emit = defineEmits(["update:modelValue"]);

const fieldSchema = toTypedSchema(
  props.schema ??
    passwordSchema(
      props.errorMessages,
      props.options as StrongPasswordOptions & {
        returnScore: false | undefined;
      },
    ),
);

const showPassword = ref<boolean>(false);

const onClick = () => {
  if (!props.disabled) {
    showPassword.value = !showPassword.value;
  }
};

const onInput = (event: Event, handleChange: (event: Event) => void) => {
  handleChange(event);

  const value = (event.target as HTMLInputElement).value;
  emit("update:modelValue", value);
};
</script>

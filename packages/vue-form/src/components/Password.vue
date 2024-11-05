<template>
  <div class="field password">
    <label v-if="label" for="password">
      {{ label }}
    </label>
    <Field
      v-slot="{ field, meta }"
      :model-value="modelValue"
      :name="name"
      :rules="fieldSchema"
      @input="onInput"
    >
      <div class="password-input">
        <input
          v-bind="field"
          :class="{
            invalid: meta.touched && !meta.valid,
            valid: meta.dirty && meta.valid,
          }"
          :disabled="disabled"
          :placeholder="placeholder"
          tabindex="0"
          :type="showPassword ? 'text' : 'password'"
        />
        <span class="eye-icon" @click="onClick">
          <img
            :src="showPassword ? eyeOpenIcon : eyeSlashIcon"
            alt="eye-icon"
          />
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
import { toFieldValidator } from "@vee-validate/zod";
import { ErrorMessage, Field } from "vee-validate";
import { ref } from "vue";
import { z } from "zod";

import { passwordSchema } from "../schemas";
import eyeOpenIcon from "./../assets/svg/eye-open.svg";
import eyeSlashIcon from "./../assets/svg/eye-slash.svg";

import type { PasswordErrorMessages, StrongPasswordOptions } from "../types";
import type { PropType } from "vue";

const props = defineProps({
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
    default: () => {
      return {};
    },
    required: false,
    type: Object as PropType<z.ZodType<string | number | object>>,
  },
});

const emit = defineEmits(["update:modelValue"]);

const fieldSchema = toFieldValidator(
  Object.keys(props.schema).length
    ? props.schema
    : passwordSchema(
        props.errorMessages,
        props.options as StrongPasswordOptions & {
          returnScore: false | undefined;
        },
      ),
);

const showPassword = ref<boolean>(false);

const onClick = () => {
  showPassword.value = !showPassword.value;
};

const onInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;

  emit("update:modelValue", value);
};
</script>

<style lang="css">
.field > .password-input {
  align-items: center;
  display: flex;
  position: relative;
  width: 100%;
}

.password-input .eye-icon {
  cursor: pointer;
  margin-right: 0.6rem;
  position: absolute;
  right: 0;
}

.password-input .eye-icon img {
  width: 1.1rem;
}

.password-input .invalid + .eye-icon img,
.password-input .valid + .eye-icon img {
  margin-right: 1rem;
}
</style>

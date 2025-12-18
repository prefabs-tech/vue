<template>
  <Form @submit="onSubmit">
    <Password
      v-model="payload.currentPassword"
      :error-messages="{
        required: t('user.changePassword.form.currentPassword.errors.required'),
        weak: t('user.changePassword.form.currentPassword.errors.weak'),
      }"
      :label="t('user.changePassword.form.currentPassword.label')"
      :options="currentPasswordOptions"
      :placeholder="t('user.changePassword.form.currentPassword.placeholder')"
      name="current-password"
    />

    <Password
      v-model="payload.newPassword"
      :error-messages="{
        required: t('user.changePassword.form.newPassword.errors.required'),
        weak: t('user.changePassword.form.newPassword.errors.weak'),
      }"
      :label="t('user.changePassword.form.newPassword.label')"
      :options="newPasswordOptions"
      :placeholder="t('user.changePassword.form.newPassword.placeholder')"
      name="new-password"
    />

    <Password
      v-if="hasConfirmPasswordFeature"
      v-model="payload.confirmPassword"
      :label="t('user.changePassword.form.confirmPassword.label')"
      :placeholder="t('user.changePassword.form.newPassword.placeholder')"
      :schema="confirmPasswordSchema"
      name="confirm-password"
    />

    <div class="actions">
      <FormActions
        :actions="[
          {
            id: 'change-password',
            label: t('user.changePassword.form.submit.label'),
            type: 'submit',
          },
        ]"
        :loading="loading"
        alignment="left"
        tabindex="0"
      />
    </div>
  </Form>
</template>

<script lang="ts">
export default {
  name: "LoginForm",
};
</script>

<script setup lang="ts">
import { useConfig } from "@prefabs.tech/vue3-config";
import { FormActions, Password } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Form } from "vee-validate";
import { z } from "zod";

import { useTranslations } from "../index";

import type { ChangePasswordPayload } from "../types";
import type { StrongPasswordOptions } from "@prefabs.tech/vue3-form";
import type { PropType } from "vue";

const messages = useTranslations();

const config = useConfig();
const { t } = useI18n({ messages });

defineProps({
  currentPasswordOptions: {
    default: () => {
      return { minLength: 1 };
    },
    required: false,
    type: Object as PropType<StrongPasswordOptions>,
  },
  newPasswordOptions: {
    default: () => {
      return {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
      };
    },
    required: false,
    type: Object as PropType<StrongPasswordOptions>,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["submit"]);

const hasConfirmPasswordFeature =
  config?.user?.features?.confirmPassword ?? false;

const confirmPasswordSchema = z
  .string({
    invalid_type_error: t(
      "user.changePassword.form.confirmPassword.errors.required",
    ),
  })
  .refine((data) => data === payload.newPassword, {
    message: t("user.changePassword.form.confirmPassword.errors.unmatched"),
  });

let payload = {
  confirmPassword: undefined,
  currentPassword: undefined,
  newPassword: undefined,
} as Partial<ChangePasswordPayload>;

const onSubmit = () => {
  emit("submit", payload);
};
</script>

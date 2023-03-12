<template>
  <Form @submit="onSubmit">
    <Field name="email" :rules="validationSchema">
      <Email
        v-model="credentials.email"
        :label="t('user.signup.form.email.label')"
        :placeholder="t('user.signup.form.email.placeholder')"
      />
    </Field>

    <PasswordConfirmation
      v-model="credentials.password"
      :label="{
        password: t('user.signup.form.password.label'),
        confirmation: t('user.signup.form.confirmation.label'),
      }"
    />
    <div class="actions">
      <LoadingButton :label="t('user.signup.form.actions.submit')" />
    </div>
  </Form>
</template>

<script lang="ts">
export default {
  name: "SignupForm",
};
</script>

<script setup lang="ts">
import { useConfig } from "@dzangolab/vue3-config";
import { Email, emailSchema } from "@dzangolab/vue3-form";
import { useI18n } from "@dzangolab/vue3-i18n";
import { LoadingButton } from "@dzangolab/vue3-ui";
import { toFieldValidator } from "@vee-validate/zod";
import { Form, Field } from "vee-validate";

import PasswordConfirmation from "./PasswordConfirmation.vue";
import { useTranslations } from "../index";

import type { LoginCredentials } from "../types";

const config = useConfig();

const messages = useTranslations();

const { t } = useI18n({ messages });

let credentials = {
  email: undefined,
  password: undefined,
} as Partial<LoginCredentials>;

const validationSchema = toFieldValidator(
  emailSchema(
    {
      invalid: "Invalid email address",
      required: t("user.signup.form.email.errors.required"),
    },
    config?.user?.options?.email
  )
);

const emit = defineEmits(["submit"]);

const onSubmit = (credentials: LoginCredentials) => {
  emit("submit", credentials);
};
</script>

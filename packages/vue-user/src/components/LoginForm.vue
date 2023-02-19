<template>
  <Form class="form auth-form" @submit="onSubmit">
    <Email
      v-model="credentials.email"
      :error-messages="{
        invalid: t('user.login.form.email.error.invalid'),
        required: t('user.login.form.email.error.required'),
      }"
      :label="t('user.login.form.email.label')"
    />

    <Password
      v-model="credentials.password"
      :error-messages="{
        required: t('user.login.form.password.error.required'),
      }"
      :label="t('user.login.form.password.label')"
      :options="{ minLength: 0 }"
    />

    <div class="actions">
      <LoadingButton
        :label="t('user.login.form.actions.submit')"
        :loading="loading"
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
import { useI18n } from "@dzangolab/vue3-i18n";
import { Email, LoadingButton, Password } from "@dzangolab/vue3-ui";
import { Form } from "vee-validate";

import { useTranslations } from "../index";

import type { LoginCredentials } from "../types";

const messages = useTranslations();

const { t } = useI18n({ messages });

let credentials = {
  email: "",
  password: "",
} as LoginCredentials;

const emit = defineEmits(["submit"]);

const onSubmit = (credentials: LoginCredentials) => {
  emit("submit", credentials);
};

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

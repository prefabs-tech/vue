<template>
  <Form class="form auth-form" @submit="onSubmit">
    <Email
      v-model="credentials.email"
      :error-messages="{
        invalid: t('user.signup.form.email.error.invalid'),
        required: t('user.signup.form.email.error.required'),
      }"
      :label="t('user.signup.form.email.label')"
      :options="userConfig?.options?.email"
      :placeholder="t('user.signup.form.email.placeholder')"
    />

    <Password
      v-model="credentials.password"
      :error-messages="{
        required: t('user.signup.form.password.error.required'),
        weak: t('user.signup.form.password.error.weak'),
      }"
      :label="t('user.signup.form.password.label')"
      :options="userConfig?.options?.password"
    />

    <Password
      v-model="credentials.password"
      :label="t('user.signup.form.confirmation.label')"
      class="confirm-password"
      name="confirmation"
    />

    <div class="actions">
      <LoadingButton
        :label="t('user.signup.form.actions.submit')"
        :loading="loading"
      />
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
import { useI18n } from "@dzangolab/vue3-i18n";
import { Email, LoadingButton, Password } from "@dzangolab/vue3-ui";
import { Form } from "vee-validate";
import { computed } from "vue";
import { object, ref as yref, string } from "yup";

import { useTranslations } from "../index";

import type { LoginCredentials } from "../types";
import type { PropType } from "vue";

const { user: userConfig } = useConfig();

const props = defineProps({
  loading: {
    default: false,
    type: Boolean as PropType<boolean>,
  },
});

const messages = useTranslations();

const { t } = useI18n({ messages });

let credentials = {
  email: undefined,
  password: undefined,
} as Partial<LoginCredentials>;

/*
const schema = computed(() => {
  return object({
    email: string()
      .required(t("user.signup.form.email.error.required"))
      .email(t("user.signup.form.email.error.invalid")),
    password: string()
      .required(t("user.signup.form.password.error.required"))
      .min(
        props.passwordMinimumLength,
        t("user.signup.form.password.error.min", {
          min: props.passwordMinimumLength,
        })
      ),
    confirmation: string().oneOf(
      [yref("password"), null],
      t("user.signup.form.confirmation.error.match")
    ),
  });
});
*/
const emit = defineEmits(["submit"]);

const onSubmit = (credentials: LoginCredentials) => {
  emit("submit", credentials);
};
</script>

<template>
  <Form class="form auth-form" :validation-schema="schema" @submit="onSubmit">
    <div class="field email">
      <label for="email">
        {{ t("user.login.form.email.label") }}
      </label>
      <Field
        v-model="credentials.email"
        :placeholder="t('user.login.form.email.placeholder')"
        class="c-form__input-field"
        name="email"
        rules="required|email"
        type="email"
      />
      <ErrorMessage class="c-form__field-error" name="email" />
    </div>

    <div class="field password">
      <label for="password">
        {{ t("user.login.form.password.label") }}
      </label>
      <Field
        v-model="credentials.password"
        class="c-form__input-field"
        name="password"
        rules="required|min:6"
        type="password"
      />
      <ErrorMessage class="c-form__field-error" name="password" />
    </div>

    <div class="actions">
      <LoadingButton
        :label="t('user.login.form.actions.submit')"
        :loading="loading"
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
import { LoadingButton } from "@dzangolab/vue3-ui";
import { ErrorMessage, Field, Form } from "vee-validate";
import { computed } from "vue";
import { object, string } from "yup";

import { useTranslations } from "../index";

import type { LoginCredentials } from "../types";

const messages = useTranslations();

const { t } = useI18n({ messages });

let credentials = {
  email: undefined,
  password: undefined,
} as LoginCredentials;

const schema = computed(() => {
  return object({
    email: string()
      .required(t("user.login.form.email.error.required"))
      .email(t("user.signup.form.email.error.email")),
    password: string().required(t("user.login.form.password.error.required")),
  });
});

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

<style lang="css">
.login > form {
  display: flex;
  flex-direction: column;
  gap: var(--form-gap, 1rem);
}

.actions > button {
  width: 100%;
}
</style>

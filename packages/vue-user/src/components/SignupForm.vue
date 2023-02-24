<template>
  <Form class="form auth-form" :validation-schema="schema" @submit="onSubmit">
    <div class="field email">
      <label for="email">
        {{ t("user.signup.form.email.label") }}
      </label>
      <Field
        v-model="credentials.email"
        :placeholder="t('user.signup.form.email.placeholder')"
        name="email"
        type="email"
      />
      <ErrorMessage class="c-form__field-error" name="email" />
    </div>

    <div class="field password">
      <label for="password">
        {{ t("user.signup.form.password.label") }}
      </label>
      <Field v-model="credentials.password" name="password" type="password" />
      <ErrorMessage class="c-form__field-error" name="password" />
    </div>

    <div class="field confirm-password">
      <label for="confirmation">
        {{ t("user.signup.form.confirmation.label") }}
      </label>
      <Field class="field" name="confirmation" type="password" />
      <ErrorMessage class="c-form__field-error" name="confirmation" />
    </div>

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
import { useI18n } from "@dzangolab/vue3-i18n";
import { LoadingButton } from "@dzangolab/vue3-ui";
import { ErrorMessage, Field, Form } from "vee-validate";
import { computed } from "vue";
import { object, ref as yref, string } from "yup";

import { useTranslations } from "../index";

import type { LoginCredentials } from "../types";
import type { PropType } from "vue";

const props = defineProps({
  passwordMinimumLength: {
    default: 8,
    type: Number as PropType<number>,
  },
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
} as LoginCredentials;

const schema = computed(() => {
  return object({
    email: string()
      .required(t("user.signup.form.email.error.required"))
      .email(t("user.signup.form.email.error.email")),
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

const emit = defineEmits(["submit"]);

const onSubmit = (credentials: LoginCredentials) => {
  emit("submit", credentials);
};
</script>

<style lang="css">
.signup > form {
  display: flex;
  flex-direction: column;
  gap: var(--form-gap, 0.5rem);
}

.actions > button {
  width: 100%;
}
</style>

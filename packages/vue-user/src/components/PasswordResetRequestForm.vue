<template>
  <Form class="form auth-form" :validation-schema="schema" @submit="onSubmit">
    <div class="email">
      <label for="email">{{
        t("user.passwordResetRequest.form.email.label")
      }}</label>
      <Field
        v-model="payload.email"
        :placeholder="t('user.passwordResetRequest.form.email.placeholder')"
        class="c-form__input-field"
        name="email"
        rules="required|email"
        type="email"
      />
      <ErrorMessage class="c-form__field-error" name="email" />
    </div>

    <div class="submit">
      <LoadingButton
        :label="t('user.passwordResetRequest.form.actions.submit')"
      />
    </div>
  </Form>
</template>

<script lang="ts">
export default {
  name: "PasswordResetRequestForm",
};
</script>

<script setup lang="ts">
import { useI18n } from "@dzangolab/vue3-i18n";
import { LoadingButton } from "@dzangolab/vue3-ui";
import { ErrorMessage, Field, Form } from "vee-validate";
import { computed } from "vue";
import { object, string } from "yup";

import { useTranslations } from "../index";

import type { PasswordResetRequestPayload } from "../types";

const messages = useTranslations();

const { t } = useI18n({ messages });

let payload = {
  email: undefined,
} as PasswordResetRequestPayload;

const schema = computed(() => {
  return object({
    email: string()
      .required(t("user.passwordResetRequest.form.email.errors.required"))
      .email(t("user.passwordResetRequest.form.email.errors.email")),
  });
});

const emit = defineEmits(["submit"]);

const onSubmit = (payload: PasswordResetRequestPayload) => {
  emit("submit", payload);
};
</script>

<style lang="css" scoped>
@import "../assets/css/components/auth.css";
</style>

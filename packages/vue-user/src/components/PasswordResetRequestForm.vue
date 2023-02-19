<template>
  <Form class="form auth-form" @submit="onSubmit">
    <Email
      v-model="payload.email"
      :error-messages="{
        invalid: t('user.passwordResetRequest.form.email.error.invalid'),
        required: t('user.passwordResetRequest.form.email.error.required'),
      }"
      :label="t('user.passwordResetRequest.form.email.label')"
      :placeholder="t('user.passwordResetRequest.form.email.placeholder')"
    />

    <div class="actions">
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
import { Email, LoadingButton } from "@dzangolab/vue3-ui";
import { Form } from "vee-validate";

import { useTranslations } from "../index";

import type { PasswordResetRequestPayload } from "../types";

const messages = useTranslations();

const { t } = useI18n({ messages });

let payload = {
  email: undefined,
} as PasswordResetRequestPayload;

const emit = defineEmits(["submit"]);

const onSubmit = (payload: PasswordResetRequestPayload) => {
  emit("submit", payload);
};
</script>

<template>
  <Form :validation-schema="validationSchema" @submit="onSubmit">
    <Password
      v-model="payload.password"
      :label="t('user.passwordReset.form.password.label')"
      name="password"
    />

    <Password
      :label="t('user.passwordReset.form.confirmation.label')"
      name="confirmation"
    />

    <div class="submit">
      <FormActions
        :actions="[
          {
            id: 'submit',
            label: t('user.passwordReset.form.actions.submit'),
          },
        ]"
        :loading="loading"
        alignment="filled"
        tabindex="0"
      />
    </div>
  </Form>
</template>

<script lang="ts">
export default {
  name: "PasswordResetForm",
};
</script>

<script setup lang="ts">
import { useConfig } from "@prefabs.tech/vue3-config";
import { FormActions, Password, passwordSchema } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { toFormValidator } from "@vee-validate/zod";
import { Form } from "vee-validate";
import { useRoute, useRouter } from "vue-router";
import { z } from "zod";

import { useTranslations } from "../index";

import type { PasswordResetPayload } from "../types";

defineProps({
  loading: Boolean,
});

const emit = defineEmits(["submit"]);

const config = useConfig();

const messages = useTranslations();

const { t } = useI18n({ messages });

let payload = {
  password: undefined,
  token: undefined,
} as PasswordResetPayload;

const validationSchema = toFormValidator(
  z
    .object({
      password: passwordSchema(
        {
          required: t("user.passwordReset.form.password.errors.required"),
          weak: t("user.passwordReset.form.password.errors.weak"),
        },
        config?.user?.options?.password,
      ),
      confirmation: passwordSchema(
        {
          required: t("user.passwordReset.form.password.errors.required"),
          weak: t("user.passwordReset.form.password.errors.weak"),
        },
        {},
      ),
    })
    .refine(
      (data) => {
        return data.password === data.confirmation;
      },
      {
        message: t("user.passwordReset.form.confirmation.errors.match"),
        path: ["confirmation"],
      },
    ),
);

const route = useRoute();
const router = useRouter();

const onSubmit = (payload: PasswordResetPayload) => {
  payload.token =
    typeof route.query.token === "string"
      ? route.query.token
      : typeof route.params.token === "string"
        ? route.params.token
        : undefined;

  if (!payload.token) {
    router.push({ name: "login" });
  } else {
    emit("submit", payload);
  }
};
</script>

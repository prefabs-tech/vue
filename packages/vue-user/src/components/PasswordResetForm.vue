<template>
  <Form class="form auth-form" :validation-schema="schema" @submit="onSubmit">
    <div class="field password">
      <label for="password">
        {{ t("user.passwordReset.form.password.label") }}
      </label>
      <Field v-model="payload.password" name="password" type="password" />
      <ErrorMessage class="c-form__field-error" name="password" />
    </div>

    <div class="field confirm-password">
      <label for="confirm-password">
        {{ t("user.passwordReset.form.confirmation.label") }}
      </label>
      <Field name="confirmation" type="password" />
      <ErrorMessage class="c-form__field-error" name="confirmation" />
    </div>

    <div class="submit">
      <LoadingButton :label="t('user.passwordReset.form.actions.submit')" />
    </div>
  </Form>
</template>

<script lang="ts">
export default {
  name: "PasswordResetForm",
};
</script>

<script setup lang="ts">
import { useI18n } from "@dzangolab/vue3-i18n";
import { LoadingButton } from "@dzangolab/vue3-ui";
import { ErrorMessage, Field, Form } from "vee-validate";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { object, ref, string } from "yup";

import { useTranslations } from "../index";

import type { PasswordResetPayload } from "../types";
import type { PropType } from "vue";

const props = defineProps({
  passwordMinimumLength: {
    default: 8,
    type: Number as PropType<number>,
  },
});

const messages = useTranslations();

const { t } = useI18n({ messages });

let payload = {
  password: undefined,
  token: undefined,
} as PasswordResetPayload;

const schema = computed(() => {
  return object({
    password: string()
      .required(t("user.passwordReset.form.password.errors.required"))
      .min(
        props.passwordMinimumLength,
        t("user.passwordReset.form.password.errors.min", {
          min: props.passwordMinimumLength,
        })
      ),
    confirmation: string().oneOf(
      [ref("password"), null],
      t("user.passwordReset.form.confirmation.errors.match")
    ),
  });
});

const emit = defineEmits(["submit"]);
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

<style lang="css" scoped>
@import "../assets/css/components/auth.css";
</style>

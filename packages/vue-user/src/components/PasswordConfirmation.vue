<template>
  <Form>
    <Field name="password">
      <Password
        v-model="password"
        :label="label.password"
        :error-messages="{
          required: t('user.signup.form.password.errors.required'),
          weak: t('user.signup.form.password.errors.weak'),
        }"
        name="password"
      />
    </Field>
    <Field name="confirmation">
      <Password :label="label.confirmation" name="confirmation" />
    </Field>
  </Form>
</template>

<script lang="ts">
export default {
  name: "PasswordConfirmation",
};
</script>

<script setup lang="ts">
import { Password } from "@dzangolab/vue3-form";
import { useI18n } from "@dzangolab/vue3-i18n";
import { Field, Form } from "vee-validate";
import { ref } from "vue";

import { useTranslations } from "../index";

const messages = useTranslations();
const { t } = useI18n({ messages });

const props = defineProps({
  label: {
    default: () => {
      return {
        password: "Password",
        confirmation: "Confirmation",
      };
    },
    type: Object,
    required: true,
  },
  modelValue: {
    default: null,
    required: false,
    type: String,
  },
});

const password = ref(props.modelValue);
</script>

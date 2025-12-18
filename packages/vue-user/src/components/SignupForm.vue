<template>
  <Form :validation-schema="validationSchema" @submit="onSubmit">
    <Email
      v-model="signupCredentials.email"
      :disabled="!!(token && invitation?.email)"
      :label="t('user.signup.form.email.label')"
      :placeholder="t('user.signup.form.email.placeholder')"
    />

    <Input
      v-if="config?.user?.features?.loginType === LOGIN_TYPE_USERNAME"
      v-model="signupCredentials.username"
      :label="t('user.signup.form.username.label')"
      :placeholder="t('user.signup.form.username.placeholder')"
      name="username"
      type="text"
    />

    <Password
      v-model="signupCredentials.password"
      :label="t('user.signup.form.password.label')"
      :placeholder="t('user.signup.form.password.placeholder')"
      name="password"
    />

    <Password
      v-if="hasConfirmPasswordFeature"
      :label="t('user.signup.form.confirmation.label')"
      :placeholder="t('user.signup.form.confirmation.placeholder')"
      name="confirmation"
    />

    <template v-if="termsAndConditionsConfig?.display">
      <TermsAndConditions
        :has-checkbox="!!termsAndConditionsConfig?.showCheckbox"
        :route="termsAndConditionsConfig?.route"
        @update:check="disableButton = !$event"
      >
        <component
          :is="customTermsAndCondition"
          v-if="!!customTermsAndCondition"
        />
      </TermsAndConditions>
    </template>

    <div class="actions">
      <FormActions
        :actions="[
          {
            id: 'submit',
            label: t('user.signup.form.actions.submit'),
          },
        ]"
        :disabled="
          disableButton &&
          termsAndConditionsConfig?.display &&
          termsAndConditionsConfig?.showCheckbox
        "
        :loading="loading"
        alignment="filled"
        tabindex="0"
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
import { useConfig } from "@prefabs.tech/vue3-config";
import {
  Email,
  emailSchema,
  FormActions,
  Input,
  Password,
  passwordSchema,
} from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { toTypedSchema } from "@vee-validate/zod";
import { storeToRefs } from "pinia";
import { Form } from "vee-validate";
import { inject, onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { z } from "zod";

import { LOGIN_TYPE_USERNAME } from "../constant";
import { useTranslations } from "../index";
import TermsAndConditions from "./TermsAndConditions.vue";
import useUserStore from "../store";

import type { LoginCredentials } from "../types";

defineProps({
  loading: Boolean,
});

const emit = defineEmits(["submit"]);

const config = useConfig();

const customTermsAndCondition = inject("dzangolabVueUserTerms");

const hasConfirmPasswordFeature =
  config?.user?.features?.confirmPassword ?? false;

const messages = useTranslations();

const route = useRoute();

const { t } = useI18n({ messages });

const token = route.params?.token as string;

const userStore = useUserStore();
const { invitation } = storeToRefs(userStore);

const termsAndConditionsConfig =
  config.user?.features?.signUp?.termsAndConditions;

const signupCredentials = reactive({
  email: token ? invitation.value?.email : undefined,
  password: undefined,
}) as Partial<LoginCredentials>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let fieldSchema: Record<string, any> = {
  email: emailSchema(
    {
      invalid: t("user.signup.form.email.errors.invalid"),
      required: t("user.signup.form.email.errors.required"),
    },
    config?.user?.options?.email,
  ),
  password: passwordSchema(
    {
      required: t("user.signup.form.password.errors.required"),
      weak: t("user.signup.form.password.errors.weak"),
    },
    config?.user?.options?.password,
  ),
};

const validationSchema = toTypedSchema(
  hasConfirmPasswordFeature
    ? z
        .object({
          ...fieldSchema,
          password: passwordSchema(
            {
              required: t("user.signup.form.password.errors.required"),
              weak: t("user.signup.form.password.errors.weak"),
            },
            config?.user?.options?.password,
          ),
          confirmation: passwordSchema(
            {
              required: t("user.signup.form.password.errors.required"),
              weak: t("user.signup.form.password.errors.weak"),
            },
            { minLength: 0 },
          ),
        })
        .refine(
          (data) => {
            return data.password === data.confirmation;
          },
          {
            message: t("user.signup.form.confirmation.errors.match"),
            path: ["confirmation"],
          },
        )
    : z.object(fieldSchema),
);

const disableButton = ref<boolean>(true);

const onSubmit = (credentials: LoginCredentials) => {
  emit("submit", credentials);
};

onMounted(() => {
  if (config?.user?.features?.loginType === LOGIN_TYPE_USERNAME) {
    fieldSchema.username = z
      .string({
        invalid_type_error: t("user.signup.form.username.errors.invalid"),
        required_error: t("user.signup.form.username.errors.required"),
      })
      .min(1, {
        message: t("user.signup.form.username.errors.required"),
      });
  }
});
</script>

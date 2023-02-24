<template>
  <div class="password-reset">
    <h1>{{ t("user.passwordReset.title") }}</h1>

    <slot name="instructions"></slot>

    <PasswordResetForm @submit="handleSubmit" />
  </div>
</template>

<script lang="ts">
export default {
  name: "PasswordReset",
};
</script>

<script setup lang="ts">
import { useI18n } from "@dzangolab/vue3-i18n";
import { useRouter } from "vue-router";

import PasswordResetForm from "../components/PasswordResetForm.vue";
import { useTranslations } from "../index";
import useUserStore from "../store";

import type { PasswordResetPayload } from "../types";

const messages = useTranslations();

const { t } = useI18n({ messages });

const { resetPassword } = useUserStore();

const router = useRouter();

const handleSubmit = async (payload: PasswordResetPayload) => {
  await resetPassword(payload).then(() => {
    router.push({ name: "login" });
  });
};
</script>

<style lang="css" scoped>
.password-reset {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: var(--form-width);
}
</style>

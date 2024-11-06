<template>
  <Page
    :title="t('user.emailVerification.title')"
    class="auth verify-email-reminder"
  >
    <Card>
      <p>{{ t("user.emailVerification.messages.verifyEmail") }}</p>

      <template #footer>
        <ButtonElement
          :label="t('user.emailVerification.button.label')"
          @click="handleResend"
        />
      </template>
    </Card>
  </Page>
</template>

<script lang="ts">
export default {
  name: "VerifyEmail",
};
</script>

<script setup lang="ts">
import { useI18n } from "@dzangolab/vue3-i18n";
import { ButtonElement, Card } from "@dzangolab/vue3-ui";

import { EMAIL_VERIFICATION } from "../constant";
import { useTranslations } from "../index";
import { resendVerificationEmail } from "../supertokens/resend-email-verification";

const messages = useTranslations();

const { t } = useI18n({ messages });

const handleResend = () => {
  resendVerificationEmail().then((status) => {
    if (status === EMAIL_VERIFICATION.OK) {
      return true;
    }
  });

  return false;
};
</script>

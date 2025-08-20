<template>
  <div class="acknowledgement-content">
    <i18n-t
      class="acknowledgement-message"
      keypath="user.passwordResetAcknowledge.message"
      tag="p"
    >
      <span class="email">{{ email }}</span>
    </i18n-t>

    <div class="resend">
      <span>{{ t("user.passwordResetAcknowledge.label.notReceived") }}</span>

      <i18n-t
        v-if="timer > 0"
        class="resen-timer disabled"
        keypath="user.passwordResetAcknowledge.label.resendIn"
        tag="span"
      >
        {{ formatDuration(timer) }}
      </i18n-t>

      <span v-else class="resend-link" @click="$emit('resend')">
        {{ t("user.passwordResetAcknowledge.actions.resend") }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "PasswordResetRequestAcknowledge",
};
</script>

<script setup lang="ts">
import { useConfig } from "@prefabs.tech/vue3-config";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { formatDuration } from "@prefabs.tech/vue3-ui";
import { onMounted, ref } from "vue";

import { useTranslations } from "../index";

import type { AppConfig } from "@prefabs.tech/vue3-config";

const { user: userConfig } = useConfig() as AppConfig;

const messages = useTranslations();

const { t } = useI18n({ messages });

defineProps({
  email: {
    required: true,
    type: String,
  },
});

defineEmits(["resend"]);

const timer = ref<number>(
  userConfig?.features?.forgotPasswordResendTimeInSeconds ?? 30,
);

const redirectCountDown = () => {
  setTimeout(() => {
    timer.value--;
    redirectCountDown();
  }, 1000);
};

onMounted(() => {
  redirectCountDown();
});
</script>

<style lang="css">
.acknowledgement-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.acknowledgement-content .email {
  font-weight: 600;
}

.acknowledgement-content .resend {
  display: flex;
  font-style: italic;
  align-items: baseline;
  gap: 0.25rem;
}

.acknowledgement-content .resend .resend-link {
  color: var(--dz-primary-color, #007aff);
  cursor: pointer;
}

.acknowledgement-content .resend .resend-link:hover {
  text-decoration: underline;
}

.acknowledgement-content .resend .disabled {
  color: var(--color);
  cursor: not-allowed;
  opacity: 0.8;
  text-decoration: none;
}
</style>

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

      <div
        :class="{ disabled: timer > 0 }"
        @click="timer <= 0 ? $emit('resend') : null"
      >
        <span class="inline-link">
          {{ t("user.passwordResetAcknowledge.actions.resend") }}
        </span>
        <span v-if="timer > 0" class="timer">
          ({{ formatDuration(timer) }})
        </span>
      </div>
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
    if (timer.value <= 0) {
      return;
    }

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
  align-items: baseline;
  display: flex;
  gap: 0.25rem;
}

.acknowledgement-content .resend .inline-link {
  color: var(--dz-primary-color, #007aff);
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.acknowledgement-content
  .resend
  .inline-link:not(.disabled > .inline-link):hover {
  text-decoration: underline;
}

.acknowledgement-content .resend > .disabled > * {
  cursor: not-allowed;
  opacity: 0.5;
  text-decoration: none;
}
</style>

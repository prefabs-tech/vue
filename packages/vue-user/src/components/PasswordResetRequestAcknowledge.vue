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

      <div class="resend-timer" @click="timer <= 0 ? $emit('resend') : null">
        <span :class="[{ disabled: timer > 0 }, 'inline-link']">
          {{ t("user.passwordResetAcknowledge.actions.resend") }}
          <template v-if="timer > 0"> ({{ formatDuration(timer) }}) </template>
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

.acknowledgement-content .resend .disabled {
  color: var(--color);
  cursor: not-allowed;
  opacity: 0.8;
  text-decoration: none;
}

.acknowledgement-content .resend .inline-link:not(.disabled) {
  color: var(--dz-primary-color, #007aff);
  cursor: pointer;
}

.acknowledgement-content .resend .inline-link:not(.disabled):hover {
  text-decoration: underline;
}
</style>

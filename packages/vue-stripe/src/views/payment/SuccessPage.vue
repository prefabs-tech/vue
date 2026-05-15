<template>
  <Page class="success-page" centered>
    <Card v-if="!loading" class="success-card">
      <svg class="checkmark" viewBox="0 0 52 52">
        <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
        <path
          class="checkmark-check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>

      <h1 class="success-title">{{ t("payment.success.heading1") }}</h1>
      <p class="success-subtitle">{{ t("payment.success.heading2") }}</p>

      <div class="success-message">
        <p>{{ t("payment.success.message1") }}</p>
        <p>{{ t("payment.success.message2") }}</p>
      </div>

      <ButtonElement
        :label="t('payment.button.backToHome')"
        severity="success"
        size="large"
        class="success-button"
        @click="$emit('click')"
      />
    </Card>

    <LoadingPage v-if="loading" :loading="loading" />
  </Page>
</template>

<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { ButtonElement, Card, LoadingPage, Page } from "@prefabs.tech/vue3-ui";

import { useTranslations } from "../../index";

const messages = useTranslations();

const { t } = useI18n({ messages });

defineEmits(["click"]);

defineProps({
  loading: Boolean,
});
</script>

<style lang="css">
.success-card {
  animation: fadeInUp 0.6s ease-out;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
  padding: 3rem 2rem;
  text-align: center;
}

.success-card > .card-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 30rem;
}

.checkmark {
  border-radius: 50%;
  display: block;
  height: 120px;
  margin: 0 auto 0.5rem;
  stroke-width: 2;
  width: 120px;
}

.checkmark-circle {
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  stroke: #4caf50;
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
}

.checkmark-check {
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.6s forwards;
  stroke: #4caf50;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  stroke-linecap: round;
  stroke-width: 3;
  transform-origin: 50% 50%;
}

.success-title {
  color: #1a1a1a;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

.success-subtitle {
  color: #4caf50;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

.success-message {
  color: #666;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  gap: 0.5rem;
  line-height: 1.6;
}

.success-message p {
  margin: 0;
}

.success-button {
  margin-top: auto;
  min-width: 200px;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 576px) {
  .success-card {
    padding: 2rem 1.5rem;
  }

  .success-checkmark {
    height: 100px;
    width: 100px;
  }

  .checkmark {
    height: 100px;
    width: 100px;
  }

  .success-title {
    font-size: 1.5rem;
  }

  .success-subtitle {
    font-size: 1.125rem;
  }

  .success-message {
    font-size: 0.9375rem;
  }
}
</style>

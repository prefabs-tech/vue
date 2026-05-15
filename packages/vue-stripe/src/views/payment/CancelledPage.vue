<template>
  <Page class="cancelled-page" centered>
    <Card v-if="!loading" class="cancelled-card">
      <svg class="crossmark" viewBox="0 0 52 52">
        <circle class="crossmark-circle" cx="26" cy="26" r="25" fill="none" />
        <path
          class="crossmark-line crossmark-line-left"
          fill="none"
          d="M16 16 l20 20"
        />
        <path
          class="crossmark-line crossmark-line-right"
          fill="none"
          d="M36 16 l-20 20"
        />
      </svg>

      <h1 class="cancelled-title">{{ t("payment.cancelled.heading") }}</h1>

      <div class="cancelled-message">
        <p>{{ t("payment.cancelled.message") }}</p>
      </div>

      <ButtonElement
        :label="t('payment.button.backToHome')"
        severity="secondary"
        size="large"
        class="cancelled-button"
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
.cancelled-card {
  animation: fadeInUp 0.6s ease-out;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
  padding: 3rem 2rem;
  text-align: center;
}

.cancelled-card > .card-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 30rem;
}

.crossmark {
  border-radius: 50%;
  display: block;
  height: 120px;
  margin: 0 auto 0.5rem;
  stroke-width: 2;
  width: 120px;
}

.crossmark-circle {
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  stroke: #f44336;
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
}

.crossmark-line {
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.6s forwards;
  stroke: #f44336;
  stroke-dasharray: 28;
  stroke-dashoffset: 28;
  stroke-linecap: round;
  stroke-width: 3;
  transform-origin: 50% 50%;
}

.cancelled-title {
  color: #1a1a1a;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

.cancelled-subtitle {
  color: #f44336;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

.cancelled-message {
  color: #666;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  gap: 0.5rem;
  line-height: 1.6;
}

.cancelled-message p {
  margin: 0;
}

.cancelled-button {
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
  .cancelled-card {
    padding: 2rem 1.5rem;
  }

  .crossmark {
    height: 100px;
    width: 100px;
  }

  .cancelled-title {
    font-size: 1.5rem;
  }

  .cancelled-subtitle {
    font-size: 1.125rem;
  }

  .cancelled-message {
    font-size: 0.9375rem;
  }
}
</style>

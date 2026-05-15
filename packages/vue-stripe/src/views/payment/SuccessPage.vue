<template>
  <Page class="success-page" centered>
    <Card v-if="!loading">
      <svg class="checkmark" viewBox="0 0 52 52">
        <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
        <path
          class="checkmark-check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>

      <slot name="title">
        <h1 class="title">{{ t("payment.success.heading1") }}</h1>
      </slot>

      <slot name="subtitle">
        <p class="subtitle">{{ t("payment.success.heading2") }}</p>
      </slot>

      <slot>
        <div class="message">
          <p>{{ t("payment.success.message1") }}</p>
          <p>{{ t("payment.success.message2") }}</p>
        </div>
      </slot>

      <slot name="actions">
        <ButtonElement
          :label="t('payment.button.backToHome')"
          severity="success"
          size="large"
          @click="$emit('action:back')"
        />
      </slot>
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

defineEmits(["action:back"]);

defineProps({
  loading: Boolean,
});
</script>

<style lang="css">
@import "../../assets/css/success-page.css";
</style>

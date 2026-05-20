<template>
  <Page class="cancelled-page" centered>
    <Card v-if="!loading">
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

      <slot name="title">
        <h1 class="title">{{ t("payment.cancelled.heading") }}</h1>
      </slot>

      <slot name="subtitle"></slot>

      <slot>
        <div class="message">
          <p>{{ t("payment.cancelled.message") }}</p>
        </div>
      </slot>

      <slot name="actions">
        <ButtonElement
          :label="t('payment.button.backToHome')"
          severity="secondary"
          size="large"
          @click="handleBack"
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
import { useBackNavigation } from "../../utilities";

const messages = useTranslations();

const { t } = useI18n({ messages });

const emit = defineEmits(["action:back"]);

defineProps({
  loading: Boolean,
});

const { handleBack } = useBackNavigation(() => emit("action:back"));
</script>

<style lang="css">
@import "../../assets/css/cancelled-page.css";
</style>

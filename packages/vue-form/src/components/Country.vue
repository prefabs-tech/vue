<template>
  <div :data-country-code="countryCode" class="country">
    {{ countryLabel }}
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import englishData from "./country-picker/en.json";

type I18nConfigData = Record<string, Record<string, string>>;

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  fallbackLocale: {
    type: String,
    default: "en",
  },
  i18n: {
    type: Object as () => I18nConfigData,
    default: () => ({}),
  },
  locale: {
    type: String,
    default: "en",
  },
});

const countryCode = computed(() => props.code.trim().toUpperCase());

const countryLabel = computed(() => {
  const code = countryCode.value;

  return (
    props.i18n?.[props.locale]?.[code] ||
    props.i18n?.[props.fallbackLocale]?.[code] ||
    englishData[code as keyof typeof englishData] ||
    "-"
  );
});
</script>

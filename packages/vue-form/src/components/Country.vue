<template>
  <span class="country">
    <span class="country-item" :data-country-code="countryCode">
      {{ countryLabel }}
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";

import englishData from "./country-picker/en.json";

type I18nConfig = Record<string, Record<string, string>>;

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
    type: Object as () => I18nConfig,
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
  if (code.length !== 2) {
    return "Unknown";
  }

  return (
    props.i18n?.[props.locale]?.[code] ||
    props.i18n?.[props.fallbackLocale]?.[code] ||
    englishData[code as keyof typeof englishData] ||
    "Unknown"
  );
});
</script>

<style scoped>
.country {
  display: inline;
}

.country-item {
  display: inline;
  font-weight: 500;
}
</style>

<template>
  <div :data-country-code="countryCode" class="country-display">
    <slot :code="countryCode" :label="countryLabel">
      <span
        v-if="showFlag"
        :class="`flag-icon flag-icon-${countryCode.toLowerCase()}`"
        :title="countryLabel"
      />
      <span class="country-label">{{ countryLabel }}</span>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import "@dzangolab/flag-icon-css/css/flag-icon.min.css";

import englishData from "./country-picker/en.json";
import { getFallbackTranslation } from "../utils/CountryPicker";

type I18nConfigData = Record<string, Record<string, string>>;

const props = defineProps({
  code: {
    required: true,
    type: String,
  },
  fallbackLocale: {
    default: "en",
    type: String,
  },
  flagsStyle: {
    default: "rectangular",
    type: String,
    validator: (value: string) =>
      ["circle", "rectangular", "square"].includes(value),
  },
  locale: {
    default: "en",
    type: String,
  },
  locales: {
    default: () => ({}),
    type: Object as () => I18nConfigData,
  },
  showFlag: {
    type: Boolean,
    default: true,
  },
});

const countryCode = computed(() => props.code.trim().toUpperCase());

const fallbackTranslation = getFallbackTranslation(
  props.fallbackLocale,
  props.locales,
);
const countryLabel = computed(() => {
  const code = countryCode.value;

  return (
    props.locales?.[props.locale]?.[code] ||
    fallbackTranslation?.[code] ||
    englishData[code as keyof typeof englishData] ||
    code
  );
});
</script>
<style lang="css">
@import "../assets/css/country.css";
</style>

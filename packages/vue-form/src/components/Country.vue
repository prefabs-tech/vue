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
    props.locales?.[props.locale]?.[code] || fallbackTranslation?.[code] || code
  );
});
</script>

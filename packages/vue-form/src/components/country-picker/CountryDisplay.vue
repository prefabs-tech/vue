<template>
  <span class="country" :class="$attrs.class">
    <template v-for="(country, index) in displayCountries" :key="country.raw">
      <span class="country-item" :data-country-code="country.code ?? 'UNKNOWN'">
        {{ country.label }}
        <span v-if="index < displayCountries.length - 1">, </span>
      </span>
    </template>
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";

import englishData from "./en.json";

type I18nConfig = Record<string, Record<string, string>>;

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  locale: {
    type: String,
    default: "en",
  },
  fallbackLocale: {
    type: String,
    default: "en",
  },
  i18n: {
    type: Object as () => I18nConfig,
    default: () => ({}),
  },
});

const countryCodes = computed(() => {
  const codes = Array.isArray(props.code) ? props.code : [props.code];

  return codes.map((code) => code.trim().toUpperCase()).filter(Boolean);
});

const resolveCountryLabel = (code: string): string | null => {
  if (code.length !== 2) {
    return null;
  }

  return (
    props.i18n?.[props.locale]?.[code] ||
    props.i18n?.[props.fallbackLocale]?.[code] ||
    englishData[code as keyof typeof englishData] ||
    null
  );
};

const displayCountries = computed(() =>
  countryCodes.value.map((raw) => {
    const label = resolveCountryLabel(raw);

    return {
      raw,
      code: label ? raw : null,
      label: label ?? "Unknown",
    };
  }),
);
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

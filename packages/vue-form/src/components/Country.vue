<template>
  <div :data-country-code="countryCode" class="country">
    <span
      v-if="showFlag"
      :title="countryCode"
      class="flag-icon"
      :class="`flag-icon-${countryCode.toLowerCase()}`"
    >
    </span>
    {{ countryLabel }}
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import "@dzangolab/flag-icon-css/css/flag-icon.min.css";
import englishData from "./country-picker/en.json";

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
  i18n: {
    default: () => ({}),
    type: Object as () => I18nConfigData,
  },
  locale: {
    default: "en",
    type: String,
  },
  showFlag: {
    type: Boolean,
    default: true,
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

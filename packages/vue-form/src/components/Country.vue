<template>
  <div :data-country-code="countryCode" class="country-display">
    <slot :code="countryCode" :label="countryLabel">
      <div class="country-content">
        <template v-if="showFlag">
          <img
            v-if="flagsPath"
            :alt="countryLabel"
            :class="getFlagClass()"
            :src="flagsPath(countryCode)"
          />
          <span v-else :class="getFlagClass(countryCode)" />
        </template>
        <span class="country-label">{{ countryLabel }}</span>
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue";

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
  flagsPath: {
    default: undefined,
    type: Function as PropType<(code: string) => string>,
  },
  flagsPosition: {
    default: "left",
    type: String as PropType<"left" | "right" | "right-edge">,
    validator: (value: string) =>
      ["left", "right", "right-edge"].includes(value),
  },
  flagsStyle: {
    default: "rectangular",
    type: String as PropType<"circle" | "rectangular" | "square">,
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
  if (!code) {
    return "";
  }

  return (
    props.locales?.[props.locale]?.[code] || fallbackTranslation?.[code] || code
  );
});

const getFlagClass = (code?: string) =>
  [
    "flag-icon",
    code && `flag-icon-${code.trim().toLowerCase()}`,
    props.flagsPosition === "right" && "flag-icon-right",
    props.flagsPosition === "right-edge" && "flag-icon-right-edge",
    props.flagsStyle === "circle" && "flag-icon-rounded",
    props.flagsStyle === "square" && "flag-icon-squared",
  ]
    .filter(Boolean)
    .join(" ");
</script>
<style lang="css">
@import "../assets/css/country.css";
</style>

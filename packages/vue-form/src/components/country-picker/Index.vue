<template>
  <div class="country-picker">
    <SelectInput
      :has-sorted-options="hasSortedOptions"
      :locale="locale"
      :model-value="modelValue"
      :multiple="multiple"
      :name="name"
      :options="options"
      :placeholder="placeholder"
      class="form-select"
      @update:model-value="onUpdateModelValue"
    >
      <template #option="{ multiple: isMultiple, option, selected }">
        <slot
          :multiple="isMultiple"
          :option="option"
          :selected="selected"
          name="option"
        >
          <div :data-country-code="option.value" class="options-wrapper">
            <template v-if="flags">
              <img
                v-if="flagsPath"
                :alt="option.label"
                :class="getFlagClass()"
                :src="flagsPath(String(option.value))"
              />
              <span v-else :class="getFlagClass(String(option.value))" />
            </template>

            <span class="option-label">{{ option.label }}</span>
          </div>
        </slot>
      </template>
    </SelectInput>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue";

import SelectInput from "../SelectInput.vue";
import englishData from "./en.json";
import { getFallbackTranslation } from "../../utils/CountryPicker";

import type {
  CountryPickerLabels,
  SelectOption,
  GroupedOption,
} from "../../types";

const props = defineProps({
  labels: {
    default: () => ({
      favorites: "Favorites",
      allCountries: "All Countries",
    }),
    type: Object as PropType<CountryPickerLabels>,
  },
  exclude: {
    default: () => [],
    type: Array as PropType<string[]>,
  },
  fallbackLocale: {
    default: "en",
    type: String,
  },
  favorites: {
    default: () => [],
    type: Array as PropType<string[]>,
  },
  flags: {
    default: true,
    type: Boolean,
  },
  flagsPath: {
    default: undefined,
    type: Function as PropType<(code: string) => string>,
  },
  flagsPosition: {
    default: "left",
    type: String,
    validator: (value: string) =>
      ["left", "right", "right-edge"].includes(value),
  },
  flagsStyle: {
    default: "rectangular",
    type: String,
    validator: (value: string) =>
      ["circle", "rectangular", "square"].includes(value),
  },
  hasSortedOptions: {
    default: true,
    type: Boolean,
  },
  include: {
    default: () => [],
    type: Array as PropType<string[]>,
  },
  includeFavorites: {
    default: true,
    type: Boolean,
  },
  locale: {
    default: "en",
    type: String,
  },
  locales: {
    default: () => ({}),
    type: Object as PropType<Record<string, Record<string, string>>>,
  },
  modelValue: {
    default: undefined,
    type: [String, Number, Array] as PropType<
      string | number | (string | number)[] | undefined
    >,
  },
  multiple: {
    default: false,
    type: Boolean,
  },
  name: {
    default: "country",
    type: String,
  },
  placeholder: {
    default: undefined,
    type: String,
  },
});

const emit = defineEmits<{
  (
    event: "update:modelValue",
    value: string | number | (string | number)[] | undefined,
  ): void;
}>();

const fallbackTranslation = computed(
  () => getFallbackTranslation(props.fallbackLocale, props.locales) || {},
);

const countries = computed<string[]>(() => {
  const filteredCodes = Object.entries(fallbackTranslation.value).map(
    ([code]) => code,
  );

  if (props.include.length > 0) {
    const includeSet = new Set(props.include);
    return filteredCodes.filter((code) => includeSet.has(code));
  }

  if (props.exclude.length > 0) {
    const excludeSet = new Set(props.exclude);
    return filteredCodes.filter((code) => !excludeSet.has(code));
  }

  return filteredCodes;
});

const favourites = computed<string[]>(() => {
  if (props.favorites.length === 0) {
    return [];
  }

  const countrySet = new Set(countries.value);
  return props.favorites.filter((code) => countrySet.has(code));
});

const options = computed<SelectOption[] | GroupedOption[]>(() => {
  const translations: Record<string, string> = {
    ...(fallbackTranslation.value || englishData),
    ...(props.locales[props.locale] || {}),
  };

  const getNormalizedOption = (country: string): SelectOption => ({
    label: translations[country] ?? country,
    value: country,
  });

  if (favourites.value.length === 0) {
    return countries.value.map(getNormalizedOption);
  }

  const filterCountries = props.includeFavorites
    ? countries.value
    : countries.value.filter(
        (country) => !favourites.value.some((favorite) => favorite === country),
      );

  return [
    {
      label: props.labels.favorites,
      options: favourites.value.map(getNormalizedOption),
    },
    {
      label: props.labels.allCountries,
      options: filterCountries.map(getNormalizedOption),
    },
  ];
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

const onUpdateModelValue = (value: string | string[] | undefined) => {
  const output = Array.isArray(value) ? Array.from(new Set(value)) : value;
  emit("update:modelValue", output);
};
</script>

<style lang="css">
@import "../../assets/css/country-picker.css";
</style>

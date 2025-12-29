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
    />
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue";

import SelectInput from "../SelectInput.vue";
import enData from "./en.json";

import type { CountryOption, CountryPickerLabels } from "../../types";

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
  hasSortedOptions: {
    default: true,
    type: Boolean,
  },
  include: {
    default: () => [],
    type: Array as PropType<string[]>,
  },
  i18n: {
    default: () => ({}),
    type: Object as PropType<Record<string, Record<string, string>>>,
  },
  includeFavorites: {
    default: true,
    type: Boolean,
  },
  locale: {
    default: "en",
    type: String,
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

const getCountrySource = () => {
  const fallback = props.i18n[props.fallbackLocale];
  return fallback ? { ...enData, ...fallback } : enData;
};

const countries = computed<CountryOption[]>(() => {
  const countriesData = getCountrySource();

  let result = Object.entries(countriesData).map(([code, label]) => ({
    code,
    label,
  }));

  if (props.include.length > 0) {
    const includeSet = new Set(props.include);
    result = result.filter((country) => includeSet.has(country.code));
  }

  if (props.exclude.length > 0) {
    const excludeSet = new Set(props.exclude);
    result = result.filter((country) => !excludeSet.has(country.code));
  }

  return result;
});
const favourites = computed<CountryOption[]>(() => {
  if (props.favorites.length === 0) {
    return [];
  }

  const countryMap = new Map(
    countries.value.map((country) => [country.code, country]),
  );

  return props.favorites
    .filter((code) => countryMap.has(code))
    .map((code) => countryMap.get(code)!);
});

const options = computed(() => {
  const translations: Record<string, string> = {
    ...enData,
    ...(props.i18n[props.fallbackLocale] || {}),
    ...(props.i18n[props.locale] || {}),
  };
  const toOption = (country: CountryOption) => ({
    label: translations[country.code] ?? country.code,
    value: country.code,
  });

  if (favourites.value.length === 0) {
    return countries.value.map(toOption);
  }

  const allCountries = props.includeFavorites
    ? countries.value
    : countries.value.filter(
        (country) =>
          !favourites.value.some((favorite) => favorite.code === country.code),
      );
  return [
    {
      label: props.labels.favorites,
      options: favourites.value.map(toOption),
    },
    {
      label: props.labels.allCountries,
      options: allCountries.map(toOption),
    },
  ];
});

const onUpdateModelValue = (value: string | string[] | undefined) => {
  const output = Array.isArray(value) ? Array.from(new Set(value)) : value;
  emit("update:modelValue", output);
};
</script>

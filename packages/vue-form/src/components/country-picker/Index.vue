<template>
  <div class="country-picker">
    <SelectInput
      :has-sorted-options="hasSortedOptions"
      :locale="locale"
      :model-value="modelValue"
      :multiple="multiple"
      :name="name"
      :options="countryOptions"
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
    type: String as PropType<string>,
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
    type: String as PropType<string>,
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

const baseCountries = computed<CountryOption[]>(() => {
  const masterMap = new Map<string, string>();

  Object.entries(enData).forEach(([code, label]) => {
    masterMap.set(code, String(label));
  });

  const sourceData =
    props.i18n[props.locale] || props.i18n[props.fallbackLocale] || {};

  Object.entries(sourceData).forEach(([code, label]) => {
    masterMap.set(code, String(label));
  });

  return Array.from(masterMap.entries()).map(([code, label]) => ({
    code,
    label,
  }));
});

const processedData = computed(() => {
  let result = [...baseCountries.value];

  if (props.include.length > 0) {
    const includeSet = new Set(props.include);
    result = result.filter((c) => includeSet.has(c.code));
  }

  if (props.exclude.length > 0) {
    const excludeSet = new Set(props.exclude);
    result = result.filter((c) => !excludeSet.has(c.code));
  }

  if (props.favorites.length > 0) {
    const favoritesSet = new Set(props.favorites);
    const favorites = result.filter((c) => favoritesSet.has(c.code));

    const allCountries = props.includeFavorites
      ? result
      : result.filter((c) => !favoritesSet.has(c.code));

    return { favorites, allCountries };
  }

  return result;
});

const countryOptions = computed(() => {
  const data = processedData.value;

  const transform = (item: CountryOption) => {
    const label =
      props.i18n[props.locale]?.[item.code] ??
      props.i18n[props.fallbackLocale]?.[item.code] ??
      item.label;

    return {
      ...item,
      label,
      value: item.code,
    };
  };

  if (Array.isArray(data)) {
    return data.map(transform);
  }

  return [
    {
      label: props.labels.favorites,
      options: data.favorites.map(transform),
    },
    {
      label: props.labels.allCountries,
      options: data.allCountries.map(transform),
    },
  ];
});

const onUpdateModelValue = (value: string | string[] | undefined) => {
  const output = Array.isArray(value) ? Array.from(new Set(value)) : value;
  emit("update:modelValue", output);
};
</script>

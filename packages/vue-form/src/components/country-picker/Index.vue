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
import { ref, computed, type PropType } from "vue";

import SelectInput from "../SelectInput.vue";
import enData from "./en.json";

import type {
  CountryOption,
  CountryResolvedData,
  CountryPickerLabels,
} from "../../types";

const props = defineProps({
  labels: {
    default: () => ({
      favorites: "Favorites",
      allCountries: "All Countries",
    }),
    type: Object as PropType<CountryPickerLabels>,
  },
  data: {
    type: Array as PropType<CountryOption[]>,
    default: () => [],
  },
  exclude: {
    default: () => [],
    type: Array as PropType<string[]>,
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

const en = enData as Record<string, string>;
const countries = ref<CountryOption[]>(
  Object.entries(enData).map(([code, label]) => ({
    code,
    label,
  })),
);
const mergedCountries = computed<CountryOption[] | CountryResolvedData>(() => {
  const map = new Map<string, CountryOption>();

  countries.value.forEach((country) => {
    map.set(country.code, country);
  });

  props.data.forEach((item) => {
    map.set(item.code, item);
  });

  let result = Array.from(map.values());
  if (props.include.length > 0) {
    const includeSet = new Set(props.include);
    result = result.filter((country) => includeSet.has(country.code));
  }

  if (props.exclude.length > 0) {
    const excludeSet = new Set(props.exclude);
    result = result.filter((country) => !excludeSet.has(country.code));
  }

  if (props.favorites.length > 0) {
    const favoritesSet = new Set(props.favorites);
    const favorites = result.filter((country) =>
      favoritesSet.has(country.code),
    );

    let allCountries = result;
    if (!props.includeFavorites) {
      allCountries = result.filter(
        (country) => !favoritesSet.has(country.code),
      );
    }

    return {
      favorites,
      allCountries,
    };
  }
  return result;
});

const countryOptions = computed(() => {
  const data = mergedCountries.value;
  const transformedData = (item: CountryOption) => ({
    label: item.label ?? en[item.code] ?? item.code,
    value: item.code,
    ...item,
  });

  if (Array.isArray(data)) {
    return data.map(transformedData);
  }

  return [
    {
      label: props.labels.favorites,
      options: data.favorites.map(transformedData),
    },
    {
      label: props.labels.allCountries,
      options: data.allCountries.map(transformedData),
    },
  ];
});

const onUpdateModelValue = (value: string | string[] | undefined) => {
  if (!Array.isArray(value)) {
    emit("update:modelValue", value);
    return;
  }

  const uniqueValue = Array.from(new Set(value));
  emit("update:modelValue", uniqueValue);
};
</script>

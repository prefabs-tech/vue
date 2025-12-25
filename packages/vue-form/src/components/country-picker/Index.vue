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
import countriesData from "./countries.json";

import type {
  CountryOption,
  CountryData,
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
    default: () => [],
    type: Array as PropType<CountryData[]>,
  },
  exclude: {
    default: () => [],
    type: Array as PropType<string[]>,
  },
  favorites: {
    default: () => [],
    type: Array as PropType<string[]>,
  },
  fallbackLocale: {
    default: null,
    type: String as PropType<string>,
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

const countries = ref(countriesData);
const mergedCountries = computed<CountryOption[] | CountryResolvedData>(() => {
  let result = [...countries.value];

  if (props.data.length > 0) {
    const countryMap = new Map(
      result.map((country) => [country.code, country]),
    );

    props.data.forEach((item) => {
      const existingCountry = countryMap.get(item.code);

      if (existingCountry) {
        countryMap.set(item.code, {
          ...existingCountry,
          i18n: {
            ...existingCountry.i18n,
            ...item.i18n,
          },
        });
      } else {
        countryMap.set(item.code, {
          code: item.code,
          i18n: {
            en: item.i18n?.en || item.code,
            fr: item.i18n?.fr || item.code,
            th: item.i18n?.th || item.code,
            ...(item.i18n || {}),
          },
        });
      }
    });

    result = Array.from(countryMap.values());
  }

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
  const fallbackOverrideCodes = new Set(props.data.map((item) => item.code));
  const transformedData = (item: CountryOption) => {
    let label = item.i18n?.[props.locale];

    if (
      !label &&
      props.fallbackLocale !== null &&
      fallbackOverrideCodes.has(item.code)
    ) {
      label = item.i18n?.[props.fallbackLocale as string];
    }

    if (!label) {
      label = item.i18n?.en ?? item.code;
    }

    return {
      label,
      value: item.code,
      ...item,
    };
  };
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

<template>
  <div class="country-picker">
    <SelectInput
      :has-sorted-options="hasSortedOptions"
      :locale="locale"
      :model-value="adjustedModelValue"
      :multiple="multiple"
      :name="name"
      :options="countryOptions"
      :placeholder="placeholder"
      class="form-select"
      @update:model-value="updateModelValue"
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
  CountryPickerOptions,
  CountryPickerLabels,
} from "../../types";

const props = defineProps({
  countryPickerLabels: {
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
  onChange: {
    type: Function as PropType<(value: string | number | string[]) => void>,
    default: null,
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
const mergedCountries = computed<CountryOption[] | CountryPickerOptions>(() => {
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
  const transformedData = (item: CountryOption) => ({
    label: item.i18n?.[props.locale] ?? item.i18n.en ?? item.code,
    value: item.code,
    ...item,
  });
  if (Array.isArray(data)) {
    return data.map(transformedData);
  } else {
    const result = [
      {
        label: props.countryPickerLabels.favorites,
        options: data.favorites.map(transformedData),
      },
      {
        label: props.countryPickerLabels.allCountries,
        options: data.allCountries.map(transformedData),
      },
    ];
    return result;
  }
});

const uniqueCountryCodes = computed(() => {
  const data = mergedCountries.value;
  const codes = new Set<string>();

  if (Array.isArray(data)) {
    data.forEach((country) => codes.add(country.code));
  } else {
    data.favorites.forEach((country) => codes.add(country.code));
    data.allCountries.forEach((country) => codes.add(country.code));
  }

  return Array.from(codes);
});

const adjustedModelValue = computed(() => {
  if (!Array.isArray(props.modelValue)) {
    return props.modelValue;
  }

  const deduplicatedValue = Array.from(
    new Set(props.modelValue.map((v) => String(v))),
  );

  const allUniqueSelected =
    deduplicatedValue.length === uniqueCountryCodes.value.length &&
    uniqueCountryCodes.value.every((code) => deduplicatedValue.includes(code));

  if (
    allUniqueSelected &&
    props.includeFavorites &&
    props.favorites &&
    props.favorites.length > 0
  ) {
    const favoriteCodes = props.favorites.filter((code) =>
      deduplicatedValue.includes(code),
    );
    return [...deduplicatedValue, ...favoriteCodes];
  }

  return deduplicatedValue;
});

const updateModelValue = (
  incomingValue: string | number | (string | number)[] | undefined,
) => {
  if (!Array.isArray(incomingValue)) {
    emit("update:modelValue", incomingValue);
    if (props.onChange && incomingValue !== undefined) {
      props.onChange(incomingValue);
    }
    return;
  }

  const cleanedValue = Array.from(new Set(incomingValue.map((v) => String(v))));

  emit("update:modelValue", cleanedValue);

  if (props.onChange) {
    props.onChange(cleanedValue);
  }
};
</script>

<template>
  <div class="country-picker">
    <SelectInput
      :locale="locale"
      :model-value="modelValue"
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

import type { CountryOption, SelectOption } from "../../types";
const props = defineProps({
  data: {
    default: () => [],
    type: Array as PropType<
      {
        code: string;
        i18n?: Record<string, string>;
      }[]
    >,
  },
  exclude: {
    default: () => [],
    type: Array as PropType<string[]>,
  },
  include: {
    default: () => [],
    type: Array as PropType<string[]>,
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

const countries = ref<CountryOption[]>(countriesData as CountryOption[]);
const mergedCountries = computed<CountryOption[]>(() => {
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

  return result;
});

const countryOptions = computed<SelectOption[]>(() =>
  mergedCountries.value.map((item) => ({
    label: item.i18n?.[props.locale] ?? item.i18n.en ?? item.code,
    value: item.code,
    ...item,
  })),
);

const updateModelValue = (
  value: string | number | (string | number)[] | undefined,
) => {
  emit("update:modelValue", value);
};
</script>

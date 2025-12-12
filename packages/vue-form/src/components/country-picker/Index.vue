<template>
  <div class="country-picker">
    <SelectInput
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
  locale: {
    default: "en",
    type: String as PropType<"en" | "fr" | "th">,
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
  data: {
    default: () => [],
    type: Array as PropType<
      { code: string; i18n?: Partial<{ en: string; fr: string; th: string }> }[]
    >,
  },
  placeholder: {
    default: undefined,
    type: String,
  },
  value: {
    default: undefined,
    type: [String, Number] as PropType<string | number | undefined>,
  },
});

const emit = defineEmits<{
  (
    event: "update:modelValue",
    value: string | number | (string | number)[] | undefined,
  ): void;
}>();

const countries = ref(countriesData);

const mergedCountries = computed<CountryOption[]>(() => {
  if (props.data.length > 0) {
    const countryMap = new Map(countries.value.map((c) => [c.code, c]));
    props.data.forEach((item) => {
      const existingCountry = countryMap.get(item.code);

      if (existingCountry) {
        const mergedI18n = {
          ...existingCountry.i18n,
          ...item.i18n,
        };

        const mergedCountry = {
          ...existingCountry,
          ...item,
          i18n: mergedI18n,
        };
        countryMap.set(item.code, mergedCountry);
      }
    });

    return Array.from(countryMap.values());
  }

  return [...countries.value];
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

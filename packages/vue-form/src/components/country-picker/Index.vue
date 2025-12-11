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
    return props.data.map((item) => ({
      code: item.code,
      i18n: {
        en: item.i18n?.en || "",
        fr: item.i18n?.fr || "",
        th: item.i18n?.th || "",
      },
    }));
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

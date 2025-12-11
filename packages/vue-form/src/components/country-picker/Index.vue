<template>
  <div class="country-picker">
    <SelectInput
      v-model="selectedCountry"
      :multiple="multiple"
      :name="name"
      :options="countryOptions"
      :placeholder="placeholder"
      class="form-select"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, type PropType } from "vue";

import SelectInput from "../SelectInput.vue";
import countriesData from "./countries.json";

const props = defineProps({
  locale: {
    default: "en",
    type: String as PropType<"en" | "fr" | "th">,
  },
  modelValue: {
    default: null,
    type: [String, Number, Array, null] as PropType<
      string | number | (string | number)[] | null
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
  overrides: {
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

const countries = ref(countriesData);
const mergedCountries = computed(() =>
  mergeCountryData(countries.value, props.overrides),
);
const selectedCountry = ref<string | number | (string | number)[] | undefined>(
  props.value ?? undefined,
);
const countryOptions = computed(() => {
  return mergedCountries.value.map((item) => {
    const label = item.i18n?.[props.locale] ?? item.i18n?.en ?? item.code;

    return {
      label,
      value: item.code,
      ...item,
    };
  });
});

const emit = defineEmits<{
  (
    event: "update:modelValue",
    value: string | number | (string | number)[] | null,
  ): void;
}>();

function mergeCountryData(
  base: { code: string; i18n: { en: string; fr: string; th: string } }[],
  overrides: {
    code: string;
    i18n?: Partial<{ en: string; fr: string; th: string }>;
  }[],
) {
  const map = new Map<string, (typeof base)[0]>();

  base.forEach((c) => map.set(c.code, { ...c }));

  overrides.forEach((item) => {
    const existing = map.get(item.code);

    if (existing) {
      map.set(item.code, {
        ...existing,
        ...item,
        i18n: {
          ...existing.i18n,
          ...(item.i18n || {}),
        },
      });
    } else {
      map.set(item.code, {
        ...item,
        i18n: {
          en: item.i18n?.en ?? "",
          fr: item.i18n?.fr ?? "",
          th: item.i18n?.th ?? "",
        },
      });
    }
  });
  return Array.from(map.values());
}

watch(
  selectedCountry,
  (value: string | number | (string | number)[] | undefined) => {
    emit("update:modelValue", value ?? null);
  },
);

watch(
  () => props.modelValue,
  (value) => {
    selectedCountry.value = value ?? undefined;
  },
);
</script>

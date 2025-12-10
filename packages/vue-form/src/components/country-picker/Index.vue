<template>
  <div class="country-picker">
    <SelectInput
      v-model="selectedCountry"
      :model-value="modelValue"
      :name="name"
      :options="countryOptions"
      :placeholder="placeholder"
      class="form-select"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import SelectInput from "../SelectInput.vue";
import countriesData from "./countries.json";

const props = defineProps({
  locale: {
    default: "en",
    type: String,
  },
  name: {
    default: "country",
    type: String,
  },
  value: {
    default: null,
    type: [String, Number],
  },
  placeholder: {
    default: undefined,
    type: String,
  },
});

const countries = ref(countriesData);
const selectedCountry = ref(props.value);

const countryOptions = computed(() => {
  return countries.value.map((country) => ({
    label: country.i18n[props.locale] || country.code,
    value: country.code,
  }));
});
</script>

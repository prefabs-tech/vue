<template>
  <div class="country-picker">
    <SelectInput
      v-model="selectedCountry"
      :name="name"
      :options="countryOptions"
      class="form-select"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import SelectInput from "../SelectInput.vue";
import countriesData from "./countries.json";

const props = defineProps({
  name: {
    type: String,
    default: "country",
  },
  locale: {
    type: String,
    default: "en",
  },
  value: {
    type: [String, Number],
    default: "NP",
  },
});

const selectedCountry = ref(props.value);
const countries = ref(countriesData);

const countryOptions = computed(() => {
  return countries.value.map((country) => ({
    value: country.code,
    label: country.i18n[props.locale] || country.code,
  }));
});
</script>

<style>
.country-picker {
  width: 100%;
}
</style>

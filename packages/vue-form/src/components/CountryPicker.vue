<template>
  <div class="country-picker">
    <select v-model="selectedCountry" class="form-select" :name="name">
      <option
        v-for="country in countries"
        :key="country.code"
        :value="country.code"
      >
        {{ country.i18n[locale] }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref } from "vue";

import countriesData from "./country_picker/countries.json";

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
    default: "",
  },
});
const selectedCountry = ref(props.value || "NP");
const countries = ref(countriesData);
</script>

<style>
.country-picker {
  width: 100%;
}
</style>

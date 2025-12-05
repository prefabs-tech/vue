<template>
  <div class="country-picker">
    <select
      v-model="selectedCountry"
      class="form-select"
      :name="name"
      @change="handleChange"
    >
      <option
        v-for="country in countries"
        :key="country.code"
        :value="country.code"
      >
        {{ getCountryName(country) }}
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

const emit = defineEmits(["change", "update:value"]);

const selectedCountry = ref(props.value || "NP");
const countries = ref(countriesData);

const getCountryName = (country) => {
  // Default to English if the requested locale is not available
  return country.i18n[props.locale] || country.i18n.en;
};

const handleChange = (event) => {
  const value = event.target.value;
  selectedCountry.value = value;
  emit("change", value);
  emit("update:value", value);
};
</script>

<style>
.country-picker {
  width: 100%;
}
</style>

<template>
  <div :data-country-code="countryCode" class="country">
    {{ countryLabel }}
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import englishData from "./country-picker/en.json";

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
});

const countryCode = computed(() => props.code.trim().toUpperCase());

const countryLabel = computed(() => {
  const code = countryCode.value;

  return englishData[code as keyof typeof englishData] || "-";
});
</script>

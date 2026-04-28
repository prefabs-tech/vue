<template>
  <p class="error">
    {{ error.message }}&nbsp;<span class="code">({{ error.code }})</span>
  </p>
</template>

<script lang="ts">
export default {
  name: "ErrorComponent",
};
</script>

<script setup lang="ts">
import type { PropType } from "vue";

import type { Error as ErrorType } from "../types";

defineProps({
  error: {
    required: true,
    type: Object as PropType<ErrorType>,
  },
});
</script>

<style lang="css">
.error {
  margin: 0 0 0.5rem 0;
}

.error .code {
  font-style: italic;
  font-size: 85%;
  opacity: 0.8;
}
</style>

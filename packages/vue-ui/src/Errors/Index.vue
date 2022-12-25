<template>
  <div class="errors">
    <Error v-if="errors.length === 1" :error="errors[0]" />
    <ul v-else>
      <li v-for="(error, index) in errors" :key="index">
        <Error :error="error" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "Errors",
};
</script>

<script setup lang="ts">
import Error from "./Error.vue";

import type { Error as ErrorType } from "../types";
import type { PropType } from "vue";

defineProps({
  errors: {
    required: true,
    type: Array as PropType<ErrorType[]>,
  },
});
</script>

<style lang="css">
.errors {
  background-color: var(--error-bg-color, #f8d7da);
  border-color: var(--error-border-color, #f5c2c7);
  border-radius: 0.25rem;
  color: var(--error-color, #842029);
  margin: 0 0 0.75rem 0;
  padding: 0.5rem 0.75rem;
}
</style>

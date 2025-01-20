<template>
  <div class="toolbar">
    <ButtonElement
      v-if="showResetButton"
      :label="resetButtonLabel"
      variant="outlined"
      severity="secondary"
      @click="$emit('on:reset')"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "TableToolbar",
};
</script>

<script setup lang="ts">
import { ButtonElement } from "@dzangolab/vue3-ui";

defineProps({
  resetButtonLabel: {
    default: "Reset all",
    type: String,
  },
  showResetButton: Boolean,
});

defineEmits(["on:reset"]);
</script>

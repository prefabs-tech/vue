<template>
  <div class="toolbar">
    <ButtonElement
      v-if="showResetButton"
      :label="resetButtonLabel"
      variant="outlined"
      severity="secondary"
      @click="$emit('on:reset')"
    />

    <Popup>
      <ButtonElement
        :label="columnActionButtonLabel"
        variant="outlined"
        severity="secondary"
      />

      <template #content> </template>
    </Popup>
  </div>
</template>

<script lang="ts">
export default {
  name: "TableToolbar",
};
</script>

<script setup lang="ts">
import { ButtonElement, Popup } from "@dzangolab/vue3-ui";

import type { Table } from "@tanstack/vue-table";

defineProps({
  columnActionButtonLabel: {
    default: "Columns",
    type: String,
  },
  resetButtonLabel: {
    default: "Reset all",
    type: String,
  },
  showResetButton: Boolean,
  table: {
    required: true,
    type: Object as () => Table<unknown>,
  },
});

defineEmits(["on:reset"]);
</script>

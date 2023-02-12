<template>
  <ResponsiveMenu
    ref="mainMenu"
    :routes="routes"
    @change-route="$emit('close')"
  />
</template>

<script lang="ts">
export default {
  name: "MainMenu",
};
</script>

<script setup lang="ts">
import { ResponsiveMenu } from "@dzangolab/vue3-ui";

import type { PropType } from "vue";

defineEmits<{
  (e: "close"): void;
}>();

defineProps({
  routes: {
    required: true,
    type: Array as PropType<{ name: string; route: string }[]>,
  },
});
</script>

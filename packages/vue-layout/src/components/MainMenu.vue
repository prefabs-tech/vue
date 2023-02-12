<template>
  <ResponsiveMenu :routes="routes" />
</template>

<script lang="ts">
export default {
  name: "MainMenu",
};
</script>

<script setup lang="ts">
import { ResponsiveMenu } from "@dzangolab/vue3-ui";

import type { PropType } from "vue";

defineProps({
  routes: {
    required: true,
    type: Array as PropType<{ name: string; route: string }[]>,
  },
});
</script>

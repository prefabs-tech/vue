<template>
  <router-link :to="{ name: route }" class="logo">
    <img :src="logo" alt="" />
  </router-link>
</template>

<script lang="ts">
export default {
  name: "Logo",
};
</script>

<script setup lang="ts">
import { useConfig } from "@dzangolab/vue3-config";

import type { PropType } from "vue";

defineProps({
  route: {
    default: "home",
    type: String as PropType<string>,
  },
});

const { layout: layoutConfig } = useConfig();

const logo =
  layoutConfig && layoutConfig?.logo ? layoutConfig.logo : "/logo.png";
</script>

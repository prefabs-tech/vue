<template>
  <router-link :to="{ name: homeRoute }">
    <img class="logo" :src="logo" alt="" />
  </router-link>
</template>

<script lang="ts">
export default {
  name: "Logo",
};
</script>

<script setup lang="ts">
import { useConfig } from "@dzangolab/vue3-config";
import { useRouter } from "vue-router";

import type { PropType } from "vue";

defineProps({
  logo: {
    default: "logo.png",
    type: String as PropType<string>,
  },
});

const { layout: layoutConfig } = useConfig();

const homeRoute = layoutConfig ? layoutConfig?.homeRoute || "home" : "home";
</script>

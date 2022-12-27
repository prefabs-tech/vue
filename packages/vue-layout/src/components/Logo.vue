<template>
  <img class="logo" :src="logo" alt="" @click="redirectToHome" />
</template>

<script lang="ts">
export default {
  name: "Logo",
};
</script>

<script setup lang="ts">
import { useRouter } from "vue-router";

import type { PropType } from "vue";

defineProps({
  logo: {
    default: "logo.png",
    type: String as PropType<string>,
  },
});

const router = useRouter();

const redirectToHome = () => {
  router.push({ name: "home" });
};
</script>

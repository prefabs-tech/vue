<template>
  <img class="logo" :src="logo" alt="" @click="redirectToHome" />
</template>

<script lang="ts">
export default {
  name: "Logo",
};
</script>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

import useUserStore from "../store";

import type { PropType } from "vue";

defineProps({
  logo: {
    default: "logo.png",
    type: String as PropType<string>,
  },
});

const userStore = useUserStore();

const { user } = storeToRefs(userStore);

const router = useRouter();

const redirectToHome = () => {
  if (user.value) {
    router.push({ name: "profile" });
  } else {
    router.push({ name: "home" });
  }
};
</script>

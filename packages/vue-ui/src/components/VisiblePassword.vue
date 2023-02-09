<template>
  <div class="password">
    <input v-model="password" :type="type" />
    <button type="button" @click="togglePasswordVisibility"></button>
  </div>
</template>

<script lang="ts">
export default {
  name: "VisiblePassword",
};
</script>

<script setup lang="ts">
import { computed, ref } from "vue";

const password = ref("");
const visible = ref(false);

const type = computed(() => {
  return visible.value ? "text" : "password";
});

const togglePasswordVisibility = () => {
  visible.value = !visible.value;
};
</script>

<style lang="css">
.password;
</style>

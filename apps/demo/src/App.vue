<template>
  <Layout :default-layout="defaultLayout" :show-user-menu="false">
    <router-view />
  </Layout>
  <notifications />
</template>

<script setup lang="ts">
import { BasicLayout } from "@dzangolab/vue3-user";
import { computed } from "vue";

const defaultLayout = computed(() => {
  return BasicLayout;
});
</script>

<template>
  <Layout
    :key="layoutKey"
    :default-layout="currentLayout"
    :show-user-menu="false"
  >
    <router-view />
  </Layout>
  <notifications />
</template>

<script setup lang="ts">
import { currentLayout, layoutKey } from "@/views/Layout/_store/layout-store";
</script>

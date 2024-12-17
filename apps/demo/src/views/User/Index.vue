<template>
  <UserPage :title="$t('user.title')" />
</template>

<script lang="ts">
export default {
  name: "User",
};
</script>

<script setup lang="ts">
import UserPage from "./UserPage.vue";
</script>

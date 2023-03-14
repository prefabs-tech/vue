<template>
  <Page :title="$t('ui.title')">
    <ul>
      <li>
        <router-link :to="{ name: 'easy-table' }">
          {{ $t("ui.pages.easy-table") }}
        </router-link>
      </li>
    </ul>
  </Page>
</template>

<script lang="ts">
export default {
  name: "UI",
};
</script>

<script setup lang="ts"></script>

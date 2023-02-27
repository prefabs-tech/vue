<template>
  <Page :title="$t('ui.title')">
    <RouterLink v-if="$route.matched.length === 1" :to="{ name: 'subPane' }"
      >{{ $t("ui.subPane.title") }}
    </RouterLink>

    <RouterView />
  </Page>
</template>

<script lang="ts">
export default {
  name: "UI",
};
</script>

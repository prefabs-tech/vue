<template>
  <Page :title="$t('ui.title')">
    <ul>
      <li>
        <RouterLink :to="{ name: 'accordion' }"
          >{{ $t("ui.accordion.title") }}
        </RouterLink>
      </li>
    </ul>
  </Page>
</template>

<script lang="ts">
export default {
  name: "UI",
};
</script>

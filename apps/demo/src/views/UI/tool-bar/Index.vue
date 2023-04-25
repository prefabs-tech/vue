<template>
  <Page title="Toolbar">
    <template #toolbar>
      <ToolBar>
        <router-link :to="{ name: 'ui' }" class="back">
          {{ $t("common.back") }}
        </router-link>

        <button class="reload" @click="reload">reload</button>
      </ToolBar>
    </template>
  </Page>
</template>

<script lang="ts">
export default {
  name: "ToolBarPage",
};
</script>

<script setup lang="ts">
import { Page, ToolBar } from "@dzangolab/vue3-ui";

const reload = () => {
  window.location.reload();
};
</script>

<template>
  <Page :title="$t('ui.youtube.title')">
    <template #toolbar>
      <router-link :to="{ name: 'ui' }" class="back">
        {{ $t("common.back") }}
      </router-link>
    </template>

    <section>
      <h2>{{ $t("ui.youtube.basic") }}</h2>

      <YouTubeFacade
        token="G66KL-hxxKI"
        title="LGR - Paku Paku - DOS PC Game Review"
      />
    </section>
  </Page>
</template>

<script lang="ts">
export default {
  name: "YouTubeFacadePage",
};
</script>

<script setup lang="ts">
import { YouTubeFacade } from "@dzangolab/vue3-ui";
</script>

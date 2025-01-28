<template>
  <UiPage :title="$t('ui.page.title')" class="demo">
    <template #toolbar>
      <router-link :to="{ name: 'ui' }" class="back">
        {{ $t("common.back") }}
      </router-link>
    </template>

    <section>
      <h2>{{ $t("ui.page.usage.basic") }}</h2>

      <div class="section-content">
        <Page>Page content</Page>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Page&gt;Page content&lt;/Page&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Page } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </UiPage>
</template>

<script setup lang="ts">
import { Page } from "@dzangolab/vue3-ui";

import UiPage from "../UiPage.vue";
</script>

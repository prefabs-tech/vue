<template>
  <UiPage class="demo">
    <template #toolbar>
      <router-link :to="{ name: 'ui' }" class="back">
        {{ $t("common.back") }}
      </router-link>
    </template>

    <section>
      <div class="section-content">
        <Page :title="$t('ui.page.usage.basic')">
          {{ $t("ui.page.label.content") }}
        </Page>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Page title="Basic"&gt;Page content&lt;/Page&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Page } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <div class="section-content">
        <Page :title="$t('ui.page.usage.toolbar')">
          {{ $t("ui.page.label.content") }}

          <template #toolbar>
            <ButtonElement :label="$t('ui.page.label.edit')" />
          </template>
        </Page>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Page title="Basic"&gt;Page content&lt;/Page&gt;
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
import { ButtonElement, Page } from "@dzangolab/vue3-ui";

import UiPage from "../UiPage.vue";
</script>

<style lang="css">
.page .page-content {
  height: 20vh;
}
</style>

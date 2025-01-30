<template>
  <UiPage :title="$t('ui.page.title')" class="demo">
    <template #toolbar>
      <router-link :to="{ name: 'ui' }" class="back">
        {{ $t("common.back") }}
      </router-link>
    </template>

    <section>
      <div class="section-content">
        <Page :title="$t('ui.page.usage.basic')" title-element="h2">
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
        <Page :title="$t('ui.page.usage.toolbar')" title-element="h2">
          {{ $t("ui.page.label.content") }}

          <template #toolbar>
            <ButtonElement :label="$t('ui.page.label.edit')" />
          </template>
        </Page>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Page title="With toolbar"&gt;
              Page content

              &lt;template #toolbar&gt;
                &lt;ButtonElement label="Edit" /&gt;
              &lt;/template&gt;
            &lt;/Page&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement, Page } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <div class="section-content">
        <Page
          :title="$t('ui.page.usage.centerAligned')"
          centered
          title-element="h2"
        >
          {{ $t("ui.page.label.content") }}

          <template #toolbar>
            <ButtonElement :label="$t('ui.page.label.edit')" />
          </template>
        </Page>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Page title="With center aligned contents" centered&gt;
              Page content

              &lt;template #toolbar&gt;
                &lt;ButtonElement label="Edit" /&gt;
              &lt;/template&gt;
            &lt;/Page&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement, Page } from "@dzangolab/vue3-ui";
          &lt;/script&gt;

          &lt;style lang="css"&gt;
          .page[data-centered="true"] {
            --page-max-width: 400px;
          }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <div class="section-content">
        <Page
          :sub-title="$t('ui.page.label.subtitle')"
          :title="$t('ui.page.usage.subtitle')"
          title-element="h2"
        >
          {{ $t("ui.page.label.content") }}
        </Page>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Page sub-title="Page subtitle" title="With subtitle"&gt;
              Page content
            &lt;/Page&gt;
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
        <Page :title="$t('ui.page.usage.subtitleSlot')" title-element="h2">
          {{ $t("ui.page.label.content") }}

          <template #subtitle>
            <BadgeComponent :label="$t('ui.page.label.subtitle')" />
          </template>
        </Page>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Page title="With subtitle slot"&gt;
              Page content

              &lt;template #subtitle&gt;
                &lt;BadgeComponent label="Page subtitle" /&gt;
              &lt;/template&gt;
            &lt;/Page&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { BadgeComponent, Page } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <div class="section-content">
        <Page
          :title="$t('ui.page.usage.titleTag')"
          :title-tag="$t('ui.page.label.titleTag')"
          title-element="h2"
        >
          {{ $t("ui.page.label.content") }}
        </Page>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Page title="With title tag" title-tag="Heading tag"&gt;
              Page content
            &lt;/Page&gt;
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
        <Page :title="$t('ui.page.usage.titleTagSlot')" title-element="h2">
          {{ $t("ui.page.label.content") }}

          <template #titleTag>
            <BadgeComponent
              :label="$t('ui.page.label.titleTag')"
              severity="success"
            />
          </template>
        </Page>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Page title="With title tag slot"&gt;
              Page content

              &lt;template #titleTag&gt;
                &lt;BadgeComponent label="Heading tag" severity="success" /&gt;
              &lt;/template&gt;
            &lt;/Page&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { BadgeComponent, Page } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <div class="section-content">
        <Page :title="$t('ui.page.usage.titleElement')" title-element="h3">
          {{ $t("ui.page.label.content") }}
        </Page>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Page title="With title element" title-element="h3"&gt;
              Page content
            &lt;/Page&gt;
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
import { BadgeComponent, ButtonElement, Page } from "@dzangolab/vue3-ui";

import UiPage from "../UiPage.vue";
</script>

<style lang="css">
.page .page-content {
  height: 20vh;
}

.page[data-centered="true"] {
  --page-max-width: 400px;
}
</style>

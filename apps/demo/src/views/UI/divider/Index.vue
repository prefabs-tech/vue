<template>
  <UiPage :title="$t('ui.divider.title')" class="demo">
    <template #toolbar>
      <ButtonElement
        :label="$t('common.back')"
        icon-left="pi pi-chevron-left"
        size="medium"
        variant="textOnly"
        @click="$router.push('/ui')"
      />
    </template>

    <section>
      <h2>{{ $t("ui.divider.usage.horizontal") }}</h2>

      <div class="section-content">
        <div class="content-wrapper">
          <p class="content-item">{{ firstMessage }}</p>
          <Divider />
          <p class="content-item">{{ secondMessage }}</p>
          <Divider orientation="horizontal" />
          <p class="content-item">{{ thirdMessage }}</p>
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;div class="content-wrapper"&gt;
              &lt;p class="content-item"&gt;
                Programming isn’t about what you know; it’s about what you can figure out.
              &lt;/p&gt;
              &lt;Divider /&gt;
              &lt;p class="content-item"&gt;
                Code is read much more often than it is written.
              &lt;/p&gt;
              &lt;Divider orientation="horizontal" /&gt;
              &lt;p class="content-item"&gt;
                The most dangerous phrase in the language is, ‘We’ve always done it this way.'
              &lt;/p&gt;
            &lt;/div&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Divider } from "@dzangolab/vue3-ui";
          &lt;/script&gt;

          &lt;style lang="css"&gt;
          .content-wrapper {
            border: 1px solid #b5b5b5;
            border-radius: 0.3rem;
            display: flex;
            flex-direction: column;
            padding: 1rem 0.75rem;
          }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.divider.usage.vertical") }}</h2>

      <div class="section-content">
        <div class="content-wrapper vertical">
          <p class="content-item">{{ firstMessage }}</p>
          <Divider orientation="vertical" />
          <p class="content-item">{{ secondMessage }}</p>
          <Divider orientation="vertical" />
          <p class="content-item">{{ thirdMessage }}</p>
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;div class="content-wrapper vertical"&gt;
              &lt;p class="content-item"&gt;
                Programming isn’t about what you know; it’s about what you can figure out.
              &lt;/p&gt;
              &lt;Divider orientation="vertical" /&gt;
              &lt;p class="content-item"&gt;
                Code is read much more often than it is written.
              &lt;/p&gt;
              &lt;Divider orientation="vertical" /&gt;
              &lt;p class="content-item"&gt;
                The most dangerous phrase in the language is, ‘We’ve always done it this way.'
              &lt;/p&gt;
            &lt;/div&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Divider } from "@dzangolab/vue3-ui";
          &lt;/script&gt;

          &lt;style lang="css"&gt;
          .content-wrapper {
            border: 1px solid #b5b5b5;
            border-radius: 0.3rem;
            display: flex;
            flex-direction: column;
            padding: 1rem 0.75rem;
          }

          .content-wrapper > .content-item {
            width: 100%;
          }

          .content-wrapper.vertical {
            flex-direction: row;
          }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </UiPage>
</template>

<script setup lang="ts">
import { ButtonElement, Divider } from "@dzangolab/vue3-ui";

import UiPage from "../UiPage.vue";

const firstMessage =
  "Programming isn’t about what you know; it’s about what you can figure out.";
const secondMessage = "Code is read much more often than it is written.";
const thirdMessage =
  "The most dangerous phrase in the language is, ‘We’ve always done it this way.'";
</script>

<style lang="css">
.content-wrapper {
  border: 1px solid #b5b5b5;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 0.75rem;
}

.content-wrapper > .content-item {
  width: 100%;
}

.content-wrapper.vertical {
  flex-direction: row;
}
</style>

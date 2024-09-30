<template>
  <Page :title="$t('ui.card.title')" class="demo">
    <section>
      <h2>{{ $t("ui.card.usage.basic") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Card title="Lorem ipsum"&gt;
              &lt;p&gt;
                ...
              &lt;/p&gt;
            &lt;/Card&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Card } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Card :title="$t('ui.card.headerContent')">
          <p class="content">
            {{ $t("ui.card.content") }}
          </p>
        </Card>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.card.usage.withI18n") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Card :title="t('ui.card.headerContent')"&gt;
              &lt;p&gt;
                &lbrace;&lbrace; t('ui.card.content') &rbrace;&rbrace;
              &lt;/p&gt;
            &lt;/Card&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Card } from "@dzangolab/vue3-ui";

          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Card :title="$t('ui.card.headerContent')">
          <p class="content">
            {{ $t("ui.card.content") }}
          </p>
        </Card>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.card.usage.slots") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Card&gt;
              &lt;template #header&gt;
                &lt;h3&gt;Lorem ipsum&lt;/h3&gt;
              &lt;/template&gt;
              &lt;p&gt;
                ...
              &lt;/p&gt;
              &lt;template #footer&gt;
                &lt;div class="footer"&gt;
                  ...
                &lt;/div&gt;
              &lt;/template&gt;
            &lt;/Card&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Card } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Card>
          <template #header>
            <h3 class="title">
              {{ $t("ui.card.headerContent") }}
            </h3>
          </template>
          <p class="content">
            {{ $t("ui.card.content") }}
          </p>
          <template #footer>
            <div class="footer">
              {{ $t("ui.card.footerContent") }}
            </div>
          </template>
        </Card>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.card.usage.customStyle") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Card class="custom-style-card"&gt;
              &lt;template #header&gt;
                &lt;h3&gt;Lorem ipsum&lt;/h3&gt;
              &lt;/template&gt;
              &lt;p&gt;
                ...
              &lt;/p&gt;
              &lt;template #footer&gt;
                &lt;div class="footer"&gt;
                  ...
                &lt;/div&gt;
              &lt;/template&gt;
            &lt;/Card&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Card } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Card class="custom-style-card">
          <template #header>
            <h3 class="title">
              {{ $t("ui.card.headerContent") }}
            </h3>
          </template>
          <p class="content">
            {{ $t("ui.card.content") }}
          </p>
          <template #footer>
            <div class="footer">
              {{ $t("ui.card.footerContent") }}
            </div>
          </template>
        </Card>
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { Card } from "@dzangolab/vue3-ui";
</script>

<style lang="css">
.custom-style-card {
  --_border-color: #555;
  --_border-radius: 0.5rem;
  --_box-shadow-color: rgba(0, 0, 0, 0.5);
}

.custom-style-card .card-header {
  --_bg-color: #f5f5f5;
}

.custom-style-card .card-footer {
  --_bg-color: #f5f5f5;
  --_font-size: 0.9rem;
  --_text-color: #555;
}
</style>

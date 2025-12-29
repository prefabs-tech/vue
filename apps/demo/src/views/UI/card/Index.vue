<template>
  <UiPage
    :sub-title="$t('ui.card.subtitle')"
    :title="$t('ui.card.title')"
    class="demo"
  >
    <section>
      <h2>{{ $t("ui.card.usage.basic") }}</h2>

      <div class="section-content">
        <Card>
          <p class="content">
            {{ $t("ui.card.content") }}
          </p>
        </Card>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Card&gt;
              &lt;p&gt;
                ...
              &lt;/p&gt;
            &lt;/Card&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Card } from "@prefabs.tech/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.card.usage.withTitle") }}</h2>

      <div class="section-content">
        <Card :title="$t('ui.card.headerContent')">
          <p class="content">
            {{ $t("ui.card.content") }}
          </p>
        </Card>

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
          import { Card } from "@prefabs.tech/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.card.usage.withI18n") }}</h2>

      <div class="section-content">
        <Card :title="$t('ui.card.headerContent')">
          <p class="content">
            {{ $t("ui.card.content") }}
          </p>
        </Card>

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
          import { Card } from "@prefabs.tech/vue3-ui";

          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.card.usage.slots") }}</h2>

      <div class="section-content">
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
          import { Card } from "@prefabs.tech/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <ComponentDocumentation
      :props-data="propsData"
      :props-table-title="$t('common.properties', { value: 'CardProperties' })"
      :slots-data="slotsData"
    />
  </UiPage>
</template>

<script setup lang="ts">
import { Card } from "@prefabs.tech/vue3-ui";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import UiPage from "../UiPage.vue";

const propsData = [
  {
    default: "-",
    description:
      "Title text displayed in the card header. Ignored if header slot is provided.",
    prop: "title",
    type: "String",
  },
];

const slotsData = [
  {
    description: "Default slot for the main body content of the card.",
    name: "default",
  },
  {
    description:
      "Slot for custom footer content, rendered at the bottom of the card.",
    name: "footer",
  },
  {
    description:
      "Slot for custom header content, replaces the default title if provided.",
    name: "header",
  },
];
</script>

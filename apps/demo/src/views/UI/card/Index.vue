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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              &lt;/p&gt;
              &lt;template #footer&gt;
                &lt;div class="footer"&gt;
                  The standard Lorem Ipsum passage, used since the 1500s
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              &lt;/p&gt;
              &lt;template #footer&gt;
                &lt;div class="footer"&gt;
                  The standard Lorem Ipsum passage, used since the 1500s
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
}
</style>

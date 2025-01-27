<template>
  <LayoutPage
    :title="$t('layout.label.stickyCollapsibleFooter')"
    class="demo sticky-collapsible-footer"
  >
    <template #toolbar>
      <router-link :to="{ name: 'form' }" class="back">
        {{ $t("common.back") }}
      </router-link>
    </template>

    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <Card>
          {{ $t("common.dummyText") }}

          <StickyCollapsibleFooter :fixed="false">
            {{ $t("layout.label.stickyFooterContent") }}
          </StickyCollapsibleFooter>
        </Card>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Card&gt;
              Lorem...

              &lt;StickyCollapsibleFooter :fixed="false"&gt;
                This is sticky footer content.
              &lt;/StickyCollapsibleFooter&gt;
            &lt;/Card&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { StickyCollapsibleFooter } from "@dzangolab/vue3-layout";
          import { Card } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </LayoutPage>
</template>

<script lang="ts">
export default {
  name: "StickyCollapsibleFooter",
};
</script>

<script setup lang="ts">
import { StickyCollapsibleFooter } from "@dzangolab/vue3-layout";
import { Card } from "@dzangolab/vue3-ui";

import LayoutPage from "../LayoutPage.vue";
</script>

<style lang="css">
.sticky-collapsible-footer .card {
  position: relative;
  min-height: 15rem;
}
</style>

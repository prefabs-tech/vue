<template>
  <Page :title="$t('ui.tooltip.title')" class="demo">
    <section>
      <h2>{{ $t("ui.tooltip.usage.basic") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Tooltip&gt;
              &lt;ButtonElement
                :label="Tooltip"
                severity="success"
              /&gt;
              &lt;template #tooltip&gt;
                This is a tooltip
                &lt;/template&gt;
            &lt;/Tooltip&gt;

          &lt;script setup lang="ts"&gt;
            import { ButtonElement, Tooltip } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Tooltip>
          <ButtonElement
            :label="$t('ui.tooltip.label.button')"
            severity="success"
          />
          <template #content>
            {{ $t("ui.tooltip.content") }}
          </template>
        </Tooltip>
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { ButtonElement, Tooltip } from "@dzangolab/vue3-ui";
</script>

<style lang="css" scoped></style>

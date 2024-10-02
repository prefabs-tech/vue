<template>
  <Page :title="$t('ui.tooltip.title')" class="demo">
    <section>
      <h2>{{ $t("ui.tooltip.usage.basic") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Popup&gt;
              &lt;ButtonElement
                :label="Toggle"
                severity="success"
              /&gt;
              &lt;template #content&gt;
                This is a popup
              &lt;/template&gt;
            &lt;/Popup&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
            import { ButtonElement, Popup } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Popup>
          <ButtonElement
            :label="$t('ui.popup.label.button')"
            severity="success"
          />
          <template #content>
            {{ $t("ui.popup.content") }}
          </template>
        </Popup>
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { ButtonElement, Popup } from "@dzangolab/vue3-ui";
</script>

<template>
  <Page :title="$t('ui.popup.title')" class="demo">
    <section>
      <h2>{{ $t("ui.popup.usage.basic") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Popup&gt;
              &lt;ButtonElement
                :label="Click me"
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

        <Dropdown
          label="TEst"
          :menu="[
            { label: 'Nepal', value: 'NP' },
            { label: 'India', value: 'IN' },
          ]"
        />
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { Dropdown } from "@dzangolab/vue3-ui";
</script>

<style lang="css">
.custom-style-popup .popup-content {
  --_bg-color: var(--dz-success-color);
  --_border-radius: 0.5rem;
  --_text-color: #fff;
}
</style>

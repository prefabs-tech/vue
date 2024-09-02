<template>
  <Page :title="$t('ui.button.title')" class="demo-button">
    <section class="demo-section">
      <h3>{{ $t("ui.button.usage.basic") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt; 
          &lt;BasicButton label="Click me" /&gt;
        &lt;/template&gt; 
        
        &lt;script setup lang="ts"&gt; 
          import { BasicButton } from "@dzangolab/vue3-ui"; 
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <BasicButton :label="$t('ui.button.label.clickMe')" />
    </section>

    <section class="demo-section">
      <h3>{{ $t("ui.button.usage.severity") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt; 
          &lt;BasicButton label="Primary" severity="primary" /&gt;
          &lt;BasicButton label="Secondary" severity="secondary" /&gt;
          &lt;BasicButton label="Alternate" severity="alternate" /&gt;
          &lt;BasicButton label="Success" severity="success" label="Success" /&gt;
          &lt;BasicButton label="Danger" severity="danger" label="Danger" /&gt;
          &lt;BasicButton label="Warning" severity="warning" label="Warning" /&gt;
        &lt;/template&gt; 
        
        &lt;script setup lang="ts"&gt; 
          import { BasicButton } from "@dzangolab/vue3-ui"; 
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <div class="container">
        <BasicButton
          severity="primary"
          :label="$t('ui.button.label.primary')"
        />

        <BasicButton
          severity="secondary"
          :label="$t('ui.button.label.secondary')"
        />

        <BasicButton
          severity="alternate"
          :label="$t('ui.button.label.alternate')"
        />

        <BasicButton
          severity="success"
          :label="$t('ui.button.label.success')"
        />

        <BasicButton severity="danger" :label="$t('ui.button.label.danger')" />

        <BasicButton
          severity="warning"
          :label="$t('ui.button.label.warning')"
        />
      </div>
    </section>

    <section>
      <h3>{{ $t("ui.button.usage.size") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt; 
          &lt;BasicButton label="Small" size="small" /&gt;
          &lt;BasicButton label="Medium" size="medium" /&gt;
          &lt;BasicButton label="Large" size="large" /&gt;
        &lt;/template&gt; 
        
        &lt;script setup lang="ts"&gt; 
          import { BasicButton } from "@dzangolab/vue3-ui"; 
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <div class="container">
        <BasicButton size="small" :label="$t('ui.button.label.small')" />
        <BasicButton size="medium" :label="$t('ui.button.label.medium')" />
        <BasicButton size="large" :label="$t('ui.button.label.large')" />
      </div>
    </section>

    <section>
      <h3>{{ $t("ui.button.usage.variant") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt; 
          &lt;BasicButton label="Default" size="medium" /&gt;
          &lt;BasicButton label="Outlined" size="medium" variant="outlined" /&gt;
          &lt;BasicButton label="Text only" size="medium" variant="textOnly" /&gt;
        &lt;/template&gt; 
        
        &lt;script setup lang="ts"&gt; 
          import { BasicButton } from "@dzangolab/vue3-ui"; 
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <div class="container">
        <BasicButton size="medium" :label="$t('ui.button.label.default')" />

        <BasicButton
          size="medium"
          :label="$t('ui.button.label.outlined')"
          variant="outlined"
        />

        <BasicButton
          size="medium"
          :label="$t('ui.button.label.textOnly')"
          variant="textOnly"
        />
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { BasicButton } from "@dzangolab/vue3-ui";
</script>

<style lang="css" scoped>
.demo-button .container {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>

<template>
  <Page :title="$t('ui.button.title')" class="demo-button">
    <section class="demo-section">
      <h3>Basic</h3>

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

      <BasicButton :label="'Click me'" />
    </section>

    <section class="demo-section">
      <h3>Severity</h3>

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
        <BasicButton severity="primary" :label="'Primary'" />
        <BasicButton severity="secondary" :label="'Secondary'" />
        <BasicButton severity="alternate" :label="'Alternate'" />
        <BasicButton severity="success" :label="'Success'" />
        <BasicButton severity="danger" :label="'Danger'" />
        <BasicButton severity="warning" :label="'Warning'" />
      </div>
    </section>

    <section>
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
        <BasicButton size="small" :label="'Small'" />
        <BasicButton size="medium" :label="'Medium'" />
        <BasicButton size="large" :label="'Large'" />
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

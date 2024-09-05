<template>
  <Page :title="$t('ui.badge.title')" class="demo-badge">
    <section>
      <h2>Basic</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt; 
            &lt;Badge label="Basic" /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt; 
            import { Badge } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Badge label="Basic" />
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { Badge } from "@dzangolab/vue3-ui";
</script>

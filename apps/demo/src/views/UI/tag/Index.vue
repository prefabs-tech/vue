<template>
  <Page :title="$t('ui.tag.title')" class="demo-tag">
    <section>
      <h2>Basic</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt; 
            &lt;Tag label="Basic" /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt; 
            import { Tag } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Tag label="Basic" />
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { Tag } from "@dzangolab/vue3-ui";
</script>

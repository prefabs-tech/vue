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

    <section>
      <h2>Severity</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Badge label="Primary" severity="primary" /&gt;
            &lt;Badge label="Secondary" severity="secondary" /&gt;
            &lt;Badge label="Alternate" severity="alternate" /&gt;
            &lt;Badge label="Success" severity="success" /&gt;
            &lt;Badge label="Danger" severity="danger" /&gt;
            &lt;Badge label="Warning" severity="warning" /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Badge } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <div class="container">
          <Badge label="Primary" severity="primary" />
          <Badge label="Secondary" severity="secondary" />
          <Badge label="Alternate" severity="alternate" />
          <Badge label="Success" severity="success" />
          <Badge label="Danger" severity="danger" />
          <Badge label="Warning" severity="warning" />
        </div>
      </div>
    </section>

    <section>
      <h2>Rounded</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Badge label="Rounded" rounded /&gt; 
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Badge } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Badge label="Rounded" rounded />
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { Badge } from "@dzangolab/vue3-ui";
</script>

<style lang="css" scoped>
.demo-badge .container {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.demo-badge section {
  margin-bottom: 2.5em;
}

.demo-badge .section-content {
  display: grid;
  gap: 1.5rem;
}
</style>

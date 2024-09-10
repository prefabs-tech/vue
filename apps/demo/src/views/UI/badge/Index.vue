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

    <section>
      <h2>Icon name</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Badge icon-left="pi pi-thumbs-up" /&gt;
            &lt;Badge icon-right="pi pi-thumbs-down" /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Badge } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <div class="container">
          <Badge icon-left="pi pi-thumbs-up" />
          <Badge icon-right="pi pi-thumbs-down" />
        </div>
      </div>
    </section>

    <section>
      <h2>Icon with text</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Badge label="Locked" icon-left="pi pi-lock" /&gt;
            &lt;Badge label="Unlocked" icon-right="pi pi-lock-open" /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Badge } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <div class="container">
          <Badge label="Locked" icon-left="pi pi-lock" />
          <Badge label="Unlocked" icon-right="pi pi-lock-open" />
        </div>
      </div>
    </section>

    <section>
      <h2>Icon element</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Badge label="Correct" icon-left="true"&gt;
              &lt;template #iconLeft&gt;
                &lt;i class="pi pi-check" &gt;
              &lt;/template&gt;
            &lt;/Badge&gt;

            &lt;Badge label="Wrong" icon-right="true"&gt;
              &lt;template #iconRight&gt;
                &lt;i class="pi pi-times" &gt;
              &lt;/template&gt;
            &lt;/Badge&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Badge } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <div class="container">
          <Badge label="Correct" icon-left="true">
            <template #iconLeft>
              <i class="pi pi-check" />
            </template>
          </Badge>

          <Badge label="Wrong" icon-right="true">
            <template #iconRight>
              <i class="pi pi-times" />
            </template>
          </Badge>
        </div>
      </div>
    </section>

    <section>
      <h2>Custom style</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Badge label="Custom" class="custom-badge" /&gt; 
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Badge } from "@dzangolab/vue3-ui";
          &lt;/script&gt;

          &lt;style lang="css" scoped&gt;
            .custom-badge {
              --_badge-color: black;
            }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Badge label="Custom" class="custom-badge" />
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { Badge } from "@dzangolab/vue3-ui";
</script>

<style lang="css" scoped>
.custom-badge {
  --_badge-color: rgb(192, 248, 255);
}

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

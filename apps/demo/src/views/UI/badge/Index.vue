<template>
  <Page :title="$t('ui.badge.title')" class="demo-badge">
    <section>
      <h2>{{ $t("ui.badge.usage.basic") }}</h2>

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

        <BadgeComponent :label="$t('ui.badge.label.basic')" />
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.badge.usage.withI18n") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Badge :label=t("ui.badge.label.addedIn") /&gt; 
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Badge } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <BadgeComponent :label="$t('ui.badge.label.addedIn')" />
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.badge.usage.rounded") }}</h2>

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

        <BadgeComponent :label="$t('ui.badge.label.rounded')" rounded />
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.badge.usage.fullWidth") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Badge label="fullWidth" fullWidth /&gt; 
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Badge } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <BadgeComponent :label="$t('ui.badge.label.fullWidth')" full-width />
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.badge.usage.severity") }}</h2>

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
          <BadgeComponent
            :label="$t('ui.badge.label.primary')"
            severity="primary"
          />
          <BadgeComponent
            :label="$t('ui.badge.label.secondary')"
            severity="secondary"
          />
          <BadgeComponent
            :label="$t('ui.badge.label.alternate')"
            severity="alternate"
          />
          <BadgeComponent
            :label="$t('ui.badge.label.success')"
            severity="success"
          />
          <BadgeComponent
            :label="$t('ui.badge.label.danger')"
            severity="danger"
          />
          <BadgeComponent
            :label="$t('ui.badge.label.warning')"
            severity="warning"
          />
        </div>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.badge.usage.iconName") }}</h2>

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
          <BadgeComponent icon-left="pi pi-thumbs-up" />
          <BadgeComponent icon-right="pi pi-thumbs-down" />
        </div>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.badge.usage.iconWithText") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Badge label="Locked" icon-left="pi pi-lock" /&gt;
            &lt;Badge label="Unlocked" icon-right="pi pi-lock-open" severity="success /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Badge } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <div class="container">
          <BadgeComponent
            :label="$t('ui.badge.label.locked')"
            icon-left="pi pi-lock"
          />

          <BadgeComponent
            :label="$t('ui.badge.label.unLocked')"
            icon-right="pi pi-lock-open"
            severity="success"
          />
        </div>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.badge.usage.iconElement") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Badge label="Correct" icon-left="true"&gt;
              &lt;template #iconLeft&gt;
                &lt;i class="pi pi-check" &gt;
              &lt;/template&gt;
            &lt;/Badge&gt;

            &lt;Badge label="Wrong" severity="danger" icon-right="true"&gt;
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
          <BadgeComponent
            :label="$t('ui.badge.label.correct')"
            icon-left="true"
          >
            <template #iconLeft>
              <i class="pi pi-check" />
            </template>
          </BadgeComponent>

          <BadgeComponent
            :label="$t('ui.badge.label.wrong')"
            severity="danger"
            icon-right="true"
          >
            <template #iconRight>
              <i class="pi pi-times" />
            </template>
          </BadgeComponent>
        </div>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.badge.usage.customStyle") }}</h2>

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
              --_badge-color: #0dcaf0;
              --_badge-font-size: 1rem;
              --_badge-font-weight: 800;
              --_badge-padding: 0.5rem 1rem;
              --_badge-text-color: black;
            }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->

        <BadgeComponent
          :label="$t('ui.badge.label.custom')"
          class="custom-badge"
        />
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { BadgeComponent } from "@dzangolab/vue3-ui";
</script>

<style lang="css" scoped>
.custom-badge {
  --_badge-color: #0dcaf0;
  --_badge-font-size: 1rem;
  --_badge-font-weight: 800;
  --_badge-padding: 0.5rem 1rem;
  --_badge-text-color: black;
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

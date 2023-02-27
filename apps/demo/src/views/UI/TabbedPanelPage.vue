<template>
  <h2>{{ $t("ui.tabbedPanel.title") }}</h2>

  <section>
    <h3>{{ $t("ui.tabbedPanel.basics") }}</h3>
    <TabbedPanel>
      <SubPane :title="$t('ui.tabbedPanel.contents.first.title')">
        <p>{{ $t("ui.tabbedPanel.contents.first.content") }}</p>
      </SubPane>
      <SubPane :title="$t('ui.tabbedPanel.contents.second.title')">
        <p>{{ $t("ui.tabbedPanel.contents.second.content") }}</p>
      </SubPane>
    </TabbedPanel>
  </section>

  <RouterLink :to="{ name: 'ui' }">
    {{ $t("common.back") }}
  </RouterLink>
</template>

<script lang="ts">
export default {
  name: "TabbedPanelPage",
};
</script>

<script lang="ts" setup>
import { SubPane, TabbedPanel } from "@dzangolab/vue3-ui";
</script>

<style scoped>
section {
  margin: var(--accordion-sections, 1rem 0);
}
.sub-pane {
  padding: var(--accordion-subpane, 1rem);
  border: 1px solid var(--tabbedpanel-subpane-border-color, black);
}
</style>

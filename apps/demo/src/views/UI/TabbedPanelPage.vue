<template>
  <h2>{{ $t("ui.tabbedpanel.title") }}</h2>

  <section>
    <h3>{{ $t("ui.tabbedpanel.basic") }}</h3>
    <TabbedPanel>
      <SubPane
        :title="$t('ui.tabbedpanel.contents.first.title')"
        icon="/home.svg"
      >
        <p>{{ $t("ui.tabbedpanel.contents.first.content") }}</p>
      </SubPane>
      <SubPane
        :title="$t('ui.tabbedpanel.contents.second.title')"
        icon="/home.svg"
      >
        <p>{{ $t("ui.tabbedpanel.contents.second.content") }}</p>
      </SubPane>
    </TabbedPanel>
  </section>

  <section>
    <h3>{{ $t("ui.tabbedpanel.position.bottom") }}</h3>
    <TabbedPanel position="bottom">
      <SubPane :title="$t('ui.tabbedpanel.contents.first.title')">
        <p>{{ $t("ui.tabbedpanel.contents.first.content") }}</p>
      </SubPane>
      <SubPane :title="$t('ui.tabbedpanel.contents.second.title')">
        <p>{{ $t("ui.tabbedpanel.contents.second.content") }}</p>
      </SubPane>
    </TabbedPanel>
  </section>

  <section>
    <h3>{{ $t("ui.tabbedpanel.position.left") }}</h3>
    <TabbedPanel position="left">
      <SubPane
        :title="$t('ui.tabbedpanel.contents.first.title')"
        icon="/home.svg"
      >
        <p>{{ $t("ui.tabbedpanel.contents.first.content") }}</p>
      </SubPane>
      <SubPane
        :title="$t('ui.tabbedpanel.contents.second.title')"
        icon="/home.svg"
      >
        <p>{{ $t("ui.tabbedpanel.contents.second.content") }}</p>
      </SubPane>
    </TabbedPanel>
  </section>

  <section>
    <h3>{{ $t("ui.tabbedpanel.position.right") }}</h3>
    <TabbedPanel position="right">
      <SubPane :title="$t('ui.tabbedpanel.contents.first.title')">
        <p>{{ $t("ui.tabbedpanel.contents.first.content") }}</p>
      </SubPane>
      <SubPane :title="$t('ui.tabbedpanel.contents.second.title')">
        <p>{{ $t("ui.tabbedpanel.contents.second.content") }}</p>
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

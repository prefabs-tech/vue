<template>
  <Page :title="t('ui.tabbedPanel.title')">
    <template #toolbar>
      <router-link :to="{ name: 'ui' }" class="back" type="button">
        {{ t("common.back") }}
      </router-link>
    </template>

    <section>
      <h2>{{ t("ui.tabbedPanel.basics") }}</h2>
      <TabbedPanel>
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>

    <section>
      <h2>{{ t("ui.tabbedPanel.position.bottom") }}</h2>
      <TabbedPanel position="bottom">
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>

    <section>
      <h2>{{ t("ui.tabbedPanel.position.left") }}</h2>
      <TabbedPanel position="left">
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>

    <section>
      <h2>{{ $t("ui.tabbedPanel.position.right") }}</h2>
      <TabbedPanel position="right">
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>

    <section>
      <h2>{{ t("ui.tabbedPanel.basics") }}</h2>
      <TabbedPanel class="colorized">
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>

    <section>
      <h2>{{ t("ui.tabbedPanel.position.bottom") }}</h2>
      <TabbedPanel class="colorized" position="bottom">
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>

    <section>
      <h2>{{ t("ui.tabbedPanel.position.left") }}</h2>
      <TabbedPanel class="colorized" position="left">
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>

    <section>
      <h2>{{ $t("ui.tabbedPanel.position.right") }}</h2>
      <TabbedPanel class="colorized" position="right">
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>

    <section>
      <h2>{{ t("ui.tabbedPanel.basics") }}</h2>
      <TabbedPanel class="colorized shadow">
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>

    <section>
      <h2>{{ t("ui.tabbedPanel.position.bottom") }}</h2>
      <TabbedPanel class="colorized shadow" position="bottom">
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>

    <section>
      <h2>{{ t("ui.tabbedPanel.position.left") }}</h2>
      <TabbedPanel class="colorized shadow" position="left">
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>

    <section>
      <h2>{{ $t("ui.tabbedPanel.position.right") }}</h2>
      <TabbedPanel class="colorized shadow" position="right">
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>
  </Page>
</template>

<script lang="ts">
export default {
  name: "TabbedPanelPage",
};
</script>

<script lang="ts" setup>
import { TabbedPanel } from "@dzangolab/vue3-ui";
import { useI18n } from "@dzangolab/vue3-i18n";

import Pane1 from "./Pane1.vue";
import Pane2 from "./Pane2.vue";

const { t } = useI18n();
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

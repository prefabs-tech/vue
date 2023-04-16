<template>
  <section>
    <h2>{{ t("ui.tabbed-panel.with-color-and-shadow") }}</h2>

    <section>
      <h3>{{ t("ui.tabbed-panel.position.top") }}</h3>
      <TabbedPanel class="colorized shadow">
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>

    <section>
      <h3>{{ t("ui.tabbed-panel.position.bottom") }}</h3>
      <TabbedPanel class="colorized shadow" position="bottom">
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>

    <section>
      <h3>{{ t("ui.tabbed-panel.position.left") }}</h3>
      <TabbedPanel class="colorized shadow" position="left">
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>

    <section>
      <h3>{{ $t("ui.tabbed-panel.position.right") }}</h3>
      <TabbedPanel class="colorized shadow" position="right">
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>
  </section>
</template>

<script lang="ts">
export default {
  name: "ColorizedWithShadow",
};
</script>

<script setup lang="ts">
import { TabbedPanel } from "@dzangolab/vue3-ui";
import { useI18n } from "@dzangolab/vue3-i18n";

import Pane1 from "./Pane1.vue";
import Pane2 from "./Pane2.vue";

const { t } = useI18n();
</script>
<template>
  <section>
    <h2>{{ t("ui.tabbed-panel.basic-usage") }}</h2>

    <section>
      <h3>{{ t("ui.tabbed-panel.position.top") }}</h3>
      <TabbedPanel>
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>

    <section>
      <h3>{{ t("ui.tabbed-panel.position.bottom") }}</h3>
      <TabbedPanel position="bottom">
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>

    <section>
      <h3>{{ t("ui.tabbed-panel.position.left") }}</h3>
      <TabbedPanel position="left">
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>

    <section>
      <h3>{{ $t("ui.tabbed-panel.position.right") }}</h3>
      <TabbedPanel position="right">
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>
  </section>
</template>

<script lang="ts">
export default {
  name: "BasicUsage",
};
</script>

<script setup lang="ts">
import { TabbedPanel } from "@dzangolab/vue3-ui";
import { useI18n } from "@dzangolab/vue3-i18n";

import Pane1 from "./Pane1.vue";
import Pane2 from "./Pane2.vue";

const { t } = useI18n();
</script>

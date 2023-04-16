<template>
  <section>
    <h2>{{ t("ui.tabbed-panel.with-custom-icons") }}</h2>

    <section>
      <h3>{{ t("ui.tabbed-panel.position.top") }}</h3>
      <TabbedPanel class="colorized shadow">
        <Pane1 title="Praesent">
          <template #icon>
            <Icon icon="fa6-solid:bars-staggered" height="1.5rem" />
          </template>
        </Pane1>
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
  name: "CustomIcons",
};
</script>

<script setup lang="ts">
import { TabbedPanel } from "@dzangolab/vue3-ui";
import { useI18n } from "@dzangolab/vue3-i18n";
import { Icon } from "@iconify/vue";

import Pane1 from "./Pane1.vue";
import Pane2 from "./Pane2.vue";

const { t } = useI18n();
</script>

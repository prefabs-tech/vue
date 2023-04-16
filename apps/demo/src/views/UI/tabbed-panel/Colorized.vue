<template>
  <section>
    <h2>{{ t("ui.tabbed-panel.with-color") }}</h2>

    <section>
      <h3>{{ t("ui.tabbed-panel.position.top") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;TabbedPanel class="colorized"&gt;
          &lt;div title="Praesent" icon="mdi-light:home"&gt;
            ...
          &lt;/div&gt;
          &lt;div title="A ullamcorper eros" icon="mdi:cellphone-lock"&gt;
            ...
          &lt;/div&gt;
        &lt;/TabbedPanel&gt;
        
        &lt;script setup lang="ts"&gt;
        import { TabbedPanel } from "@dzangolab/vue3-ui";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <TabbedPanel class="colorized">
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>

    <section>
      <h3>{{ t("ui.tabbed-panel.position.bottom") }}</h3>
      <TabbedPanel class="colorized" position="bottom">
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>

    <section>
      <h3>{{ t("ui.tabbed-panel.position.left") }}</h3>
      <TabbedPanel class="colorized" position="left">
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>

    <section>
      <h3>{{ $t("ui.tabbed-panel.position.right") }}</h3>
      <TabbedPanel class="colorized" position="right">
        <Pane1 title="Praesent" icon="/src/assets/svg/number-1.svg" />
        <Pane2 title="A ullamcorper eros" icon="/src/assets/svg/number-2.svg" />
      </TabbedPanel>
    </section>
  </section>
</template>

<script lang="ts">
export default {
  name: "Colorized",
};
</script>

<script setup lang="ts">
import { TabbedPanel } from "@dzangolab/vue3-ui";
import { useI18n } from "@dzangolab/vue3-i18n";

import Pane1 from "./Pane1.vue";
import Pane2 from "./Pane2.vue";

const { t } = useI18n();
</script>

<template>
  <section>
    <h2>{{ t("ui.tabbed-panel.with-custom-icons") }}</h2>

    <section>
      <h3>{{ t("ui.tabbed-panel.position.top") }}</h3>

      <TabbedPanel class="colorized shadow">
        <template #icon="slot">
          <Icon :icon="slot?.props?.icon" height="1.5rem" />
        </template>
        <Pane1 title="Praesent" icon="mdi-light:home" />
        <Pane2 title="A ullamcorper eros" icon="mdi:cellphone-lock" />
      </TabbedPanel>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;TabbedPanel class="colorized shadow"&gt;
            &lt;template #icon="slot"&gt;
              &lt;Icon :icon="slot?.props?.icon" height="1.5rem" /&gt;
            &lt;/template&gt;
            
            &lt;div title="Praesent" icon="mdi-light:home"&gt;
              ...
            &lt;/div&gt;
            &lt;div title="A ullamcorper eros" icon="mdi:cellphone-lock"&gt;
              ...
            &lt;/div&gt;
          &lt;/TabbedPanel&gt;
        &lt;/template&gt;
        
        &lt;script setup lang="ts"&gt;
        import { TabbedPanel } from "@prefabs.tech/vue3-ui";
        import { Icon } from "@iconify/vue";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->
    </section>

    <section>
      <h3>{{ t("ui.tabbed-panel.position.bottom") }}</h3>
      <TabbedPanel class="colorized shadow" position="bottom">
        <template #icon="slot">
          <Icon :icon="slot?.props?.icon" height="1.5rem" />
        </template>
        <Pane1 title="Praesent" icon="mdi-light:home" />
        <Pane2 title="A ullamcorper eros" icon="mdi:cellphone-lock" />
      </TabbedPanel>
    </section>

    <section>
      <h3>{{ t("ui.tabbed-panel.position.left") }}</h3>
      <TabbedPanel class="colorized shadow" position="left">
        <template #icon="slot">
          <Icon :icon="slot?.props?.icon" height="1.5rem" />
        </template>
        <Pane1 title="Praesent" icon="mdi-light:home" />
        <Pane2 title="A ullamcorper eros" icon="mdi:cellphone-lock" />
      </TabbedPanel>
    </section>

    <section>
      <h3>{{ $t("ui.tabbed-panel.position.right") }}</h3>
      <TabbedPanel class="colorized shadow" position="right">
        <template #icon="slot">
          <Icon :icon="slot?.props?.icon" height="1.5rem" />
        </template>
        <Pane1 title="Praesent" icon="mdi-light:home" />
        <Pane2 title="A ullamcorper eros" icon="mdi:cellphone-lock" />
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
import { Icon } from "@iconify/vue";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { TabbedPanel } from "@prefabs.tech/vue3-ui";

import Pane1 from "./Pane1.vue";
import Pane2 from "./Pane2.vue";

const { t } = useI18n();
</script>

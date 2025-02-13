<template>
  <UiPage :title="t('ui.tabbed-panel.title')">
    <template #toolbar>
      <ButtonElement
        :label="$t('common.back')"
        icon-left="pi pi-chevron-left"
        size="medium"
        variant="textOnly"
        @click="$router.push('/ui')"
      />
    </template>

    <TabbedPanel class="colorized shadow">
      <BasicUsage :title="t('ui.tabbed-panel.basic-usage')" />
      <Colorized :title="t('ui.tabbed-panel.with-color')" />
      <ColorizedWithShadow
        :title="t('ui.tabbed-panel.with-color-and-shadow')"
      />
      <CustomIcons :title="t('ui.tabbed-panel.with-custom-icons')" />
    </TabbedPanel>
  </UiPage>
</template>

<script lang="ts">
export default {
  name: "TabbedPanelPage",
};
</script>

<script lang="ts" setup>
import { useI18n } from "@dzangolab/vue3-i18n";
import { ButtonElement, TabbedPanel } from "@dzangolab/vue3-ui";

import BasicUsage from "./BasicUsage.vue";
import Colorized from "./Colorized.vue";
import ColorizedWithShadow from "./ColorizedWithShadow.vue";
import CustomIcons from "./CustomIcons.vue";
import UiPage from "../UiPage.vue";

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

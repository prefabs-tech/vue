<template>
  <Page :title="$t('ui.accordion.title')">
    <BasicSection />
    <DefaultIndexSection />
    <SelfCollapseSection />
    <DirectionSection />
    <IconsSection />
    <AllSection />
    <SlotsSection />

    <RouterLink :to="{ name: 'ui' }">
      {{ $t("common.back") }}
    </RouterLink>
  </Page>
</template>

<script lang="ts">
export default {
  name: "AccordionPage",
};
</script>

<script lang="ts" setup>
import { Page } from "@dzangolab/vue3-ui";

import AllSection from "./AllSection.vue";
import BasicSection from "./BasicSection.vue";
import DefaultIndexSection from "./DefaultIndexSection.vue";
import DirectionSection from "./DirectionSection.vue";
import IconsSection from "./IconsSection.vue";
import SelfCollapseSection from "./SelfCollapseSection.vue";
import SlotsSection from "./SlotsSection.vue";
</script>

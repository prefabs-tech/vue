<template>
  <Page :title="$t('ui.accordion.title')">
    <section>
      <h2>{{ $t("ui.accordion.basic") }}</h2>
      <DemoAccordion />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.defaultIndex") }}</h2>
      <DemoAccordion :default-index="1" />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.direction") }}</h2>
      <DemoAccordion direction="horizontal" />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.icons") }}</h2>
      <DemoAccordion class="with-icons" />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.custom-toggle-icons") }}</h2>
      <DemoAccordion class="custom-toggle-icons" />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.slot-without-title") }}</h2>
      <DemoAccordion>
        <template #extra-pane>
          <div>
            <p>
              Adipiscing condimentum elit a cum ullamcorper nisi rutrum aptent
              lacinia vestibulum adipiscing a a vestibulum quis malesuada
              ullamcorper praesent netus netus mus.
            </p>
          </div>
        </template>
      </DemoAccordion>
    </section>

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

import DemoAccordion from "./DemoAccordion.vue";

import "@/assets/css/ui/accordion.css";
</script>

<template>
  <section>
    <h2>{{ $t("ui.accordion.all") }}</h2>

    <Accordion
      :default-index="2"
      :can-self-collapse="true"
      active-icon="/downchevron.svg"
      inactive-icon="/upchevron.svg"
    >
      <SubPane :title="$t('ui.accordion.contents.1.title')" icon="/home.svg">
        <p>{{ $t("ui.accordion.contents.1.content") }}</p>
      </SubPane>

      <SubPane :title="$t('ui.accordion.contents.2.title')" icon="/home.svg">
        <p>{{ $t("ui.accordion.contents.2.content") }}</p>
      </SubPane>

      <SubPane :title="$t('ui.accordion.contents.3.title')" icon="/home.svg">
        <p>{{ $t("ui.accordion.contents.3.content") }}</p>
      </SubPane>
    </Accordion>
  </section>
</template>

<script lang="ts">
export default {
  name: "AccordionPage",
};
</script>

<script lang="ts" setup>
import { Accordion, SubPane } from "@dzangolab/vue3-ui";
</script>

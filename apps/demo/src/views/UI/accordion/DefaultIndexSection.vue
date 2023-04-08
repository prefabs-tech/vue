<template>
  <section>
    <h2>{{ $t("ui.accordion.defaultIndex") }}</h2>

    <Accordion :default-index="1">
      <SubPane :title="$t('ui.accordion.contents.1.title')">
        <p>{{ $t("ui.accordion.contents.1.content") }}</p>
      </SubPane>

      <SubPane :title="$t('ui.accordion.contents.2.title')">
        <p>{{ $t("ui.accordion.contents.2.content") }}</p>
      </SubPane>

      <SubPane :title="$t('ui.accordion.contents.3.title')">
        <p>{{ $t("ui.accordion.contents.3.content") }}</p>
      </SubPane>
    </Accordion>
  </section>
</template>

<script lang="ts">
export default {
  name: "DefaultIndexSection",
};
</script>

<script lang="ts" setup>
import { Accordion, SubPane } from "@dzangolab/vue3-ui";
</script>

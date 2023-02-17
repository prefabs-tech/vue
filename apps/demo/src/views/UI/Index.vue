<template>
  <Page :title="$t('ui.title')">
    <h2>{{ $t("ui.accordion.title") }}</h2>
  </Page>
  <Accordion active-icon="upchevron.svg" inactive-icon="downchevron.svg">
    <SubPane :title="$t('ui.accordion.contents[0].title')" icon="home.svg">
      <p>{{ $t("ui.accordion.contents[0].content") }}</p>
    </SubPane>

    <SubPane :title="$t('ui.accordion.contents[1].title')">
      <p>{{ $t("ui.accordion.contents[1].content") }}</p>
    </SubPane>
    <SubPane :title="$t('ui.accordion.contents[2].title')">
      <p>{{ $t("ui.accordion.contents[2].content") }}</p>
    </SubPane>
  </Accordion>
</template>

<script lang="ts">
export default {
  name: "UI",
};
</script>

<script lang="ts" setup>
import { Accordion, SubPane } from "@dzangolab/vue3-ui";
</script>

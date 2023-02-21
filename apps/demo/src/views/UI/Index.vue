<template>
  <Page :title="$t('ui.title')">
    <h2>{{ $t("ui.accordion.title") }}</h2>

    <Accordion active-icon="upchevron.svg" inactive-icon="downchevron.svg">
      <SubPane title="Accordion 1" icon="home.svg">
        <p>Accordion 1 content</p>
      </SubPane>

      <SubPane title="Accordion 2">
        <p>Accordion 2 content</p>
      </SubPane>

      <SubPane title="Accordion 3">
        <p>Accordion 3 content</p>
      </SubPane>
    </Accordion>
  </Page>
</template>

<script lang="ts">
export default {
  name: "UI",
};
</script>

<script lang="ts" setup>
import { Accordion, SubPane } from "@dzangolab/vue3-ui";
</script>

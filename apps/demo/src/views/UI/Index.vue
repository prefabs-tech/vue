<template>
  <Page :title="$t('ui.title')"> </Page>
  <h3>{{ $t("ui.accordion.title") }}</h3>
  <Accordion activeIcon="upchevron.svg" inactiveIcon="downchevron.svg" direction="horizontal">
    <SubPane title="Subpane 1" icon="home.svg">
      <p>Subpan 1 content</p>
    </SubPane>

    <SubPane title="Subpane 2">
      <p>Subpane 2 content</p>
    </SubPane>
    <SubPane title="Subpane 3">
      <p>Subpane 3 content</p>
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

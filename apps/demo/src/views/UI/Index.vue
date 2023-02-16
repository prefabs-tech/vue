<template>
  <Page :title="$t('ui.title')"> </Page>
  <h3>Accordion</h3>
  <Accordion
    :canSelfCollapse="true"
    activeIcon="upchevron.svg"
    inactiveIcon="downchevron.svg"
  >
    <SubPane title="Subpane 1">
      <p>Subpane 1 content</p>
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

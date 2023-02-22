<template>
  <Page :title="$t('ui.title')">
    <h2>{{ $t("ui.accordion.title") }}</h2>

    <h3>{{ $t("ui.accordion.basic") }}</h3>
    <Accordion>
      <SubPane title="Accordion 1">
        <p>Accordion 1 content</p>
      </SubPane>

      <SubPane title="Accordion 2">
        <p>Accordion 2 content</p>
      </SubPane>

      <SubPane title="Accordion 3">
        <p>Accordion 3 content</p>
      </SubPane>
    </Accordion>

    <h3>{{ $t("ui.accordion.default-index") }}</h3>
    <Accordion :default-index="1">
      <SubPane title="Accordion 1">
        <p>Accordion 1 content</p>
      </SubPane>

      <SubPane title="Accordion 2">
        <p>Accordion 2 content</p>
      </SubPane>

      <SubPane title="Accordion 3">
        <p>Accordion 3 content</p>
      </SubPane>
    </Accordion>

    <h3>{{ $t("ui.accordion.can-self-collapse") }}</h3>
    <Accordion :can-self-collapse="true">
      <SubPane title="Accordion 1">
        <p>Accordion 1 content</p>
      </SubPane>

      <SubPane title="Accordion 2">
        <p>Accordion 2 content</p>
      </SubPane>

      <SubPane title="Accordion 3">
        <p>Accordion 3 content</p>
      </SubPane>
    </Accordion>

    <h3>{{ $t("ui.accordion.direction") }}</h3>
    <Accordion direction="horizontal">
      <SubPane title="Accordion 1">
        <p>Accordion 1 content</p>
      </SubPane>

      <SubPane title="Accordion 2">
        <p>Accordion 2 content</p>
      </SubPane>

      <SubPane title="Accordion 3">
        <p>Accordion 3 content</p>
      </SubPane>
    </Accordion>

    <h3>{{ $t("ui.accordion.icons.basic") }}</h3>
    <Accordion>
      <SubPane title="Accordion 1" icon="home.svg">
        <p>Accordion 1 content</p>
      </SubPane>

      <SubPane title="Accordion 2" icon="home.svg">
        <p>Accordion 2 content</p>
      </SubPane>

      <SubPane title="Accordion 3" icon="home.svg">
        <p>Accordion 3 content</p>
      </SubPane>
    </Accordion>

    <h3>{{ $t("ui.accordion.icons.active-inactive") }}</h3>
    <Accordion active-icon="downchevron.svg" inactive-icon="upchevron.svg">
      <SubPane title="Accordion 1">
        <p>Accordion 1 content</p>
      </SubPane>

      <SubPane title="Accordion 2">
        <p>Accordion 2 content</p>
      </SubPane>

      <SubPane title="Accordion 3">
        <p>Accordion 3 content</p>
      </SubPane>
    </Accordion>

    <h3>{{ $t("ui.accordion.all") }}</h3>

    <Accordion
      :default-index="2"
      :can-self-collapse="true"
      active-icon="downchevron.svg"
      inactive-icon="upchevron.svg"
    >
      <SubPane title="Accordion 1" icon="home.svg">
        <p>Accordion 1 content</p>
      </SubPane>

      <SubPane title="Accordion 2" icon="home.svg">
        <p>Accordion 2 content</p>
      </SubPane>

      <SubPane title="Accordion 3" icon="home.svg">
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

<template>
  <h2>{{ $t("ui.accordion.title") }}</h2>

  <section>
    <h3>{{ $t("ui.accordion.basic") }}</h3>
    <Accordion>
      <SubPane :title="$t('ui.accordion.contents.first.title')">
        <p>{{ $t("ui.accordion.contents.first.content") }}</p>
      </SubPane>

      <SubPane :title="$t('ui.accordion.contents.second.title')">
        <p>{{ $t("ui.accordion.contents.second.content") }}</p>
      </SubPane>

      <SubPane :title="$t('ui.accordion.contents.third.title')">
        <p>{{ $t("ui.accordion.contents.third.content") }}</p>
      </SubPane>
    </Accordion>
  </section>

  <section>
    <h3>{{ $t("ui.accordion.defaultIndex") }}</h3>
    <Accordion :default-index="1">
      <SubPane :title="$t('ui.accordion.contents.first.title')">
        <p>{{ $t("ui.accordion.contents.first.content") }}</p>
      </SubPane>

      <SubPane :title="$t('ui.accordion.contents.second.title')">
        <p>{{ $t("ui.accordion.contents.second.content") }}</p>
      </SubPane>

      <SubPane :title="$t('ui.accordion.contents.third.title')">
        <p>{{ $t("ui.accordion.contents.third.content") }}</p>
      </SubPane>
    </Accordion>
  </section>

  <section>
    <h3>{{ $t("ui.accordion.canSelfCollapse") }}</h3>
    <Accordion :can-self-collapse="true">
      <SubPane :title="$t('ui.accordion.contents.first.title')">
        <p>{{ $t("ui.accordion.contents.first.content") }}</p>
      </SubPane>

      <SubPane :title="$t('ui.accordion.contents.second.title')">
        <p>{{ $t("ui.accordion.contents.second.content") }}</p>
      </SubPane>

      <SubPane :title="$t('ui.accordion.contents.third.title')">
        <p>{{ $t("ui.accordion.contents.third.content") }}</p>
      </SubPane>
    </Accordion>
  </section>

  <section>
    <h3>{{ $t("ui.accordion.direction") }}</h3>
    <Accordion direction="horizontal">
      <SubPane :title="$t('ui.accordion.contents.first.title')">
        <p>{{ $t("ui.accordion.contents.first.content") }}</p>
      </SubPane>

      <SubPane :title="$t('ui.accordion.contents.second.title')">
        <p>{{ $t("ui.accordion.contents.second.content") }}</p>
      </SubPane>

      <SubPane :title="$t('ui.accordion.contents.third.title')">
        <p>{{ $t("ui.accordion.contents.third.content") }}</p>
      </SubPane>
    </Accordion>
  </section>

  <section>
    <h3>{{ $t("ui.accordion.icons.basic") }}</h3>
    <Accordion>
      <SubPane
        :title="$t('ui.accordion.contents.first.title')"
        icon="/home.svg"
      >
        <p>{{ $t("ui.accordion.contents.first.content") }}</p>
      </SubPane>

      <SubPane
        :title="$t('ui.accordion.contents.second.title')"
        icon="/home.svg"
      >
        <p>{{ $t("ui.accordion.contents.second.content") }}</p>
      </SubPane>

      <SubPane
        :title="$t('ui.accordion.contents.third.title')"
        icon="/home.svg"
      >
        <p>{{ $t("ui.accordion.contents.third.content") }}</p>
      </SubPane>
    </Accordion>
  </section>

  <section>
    <h3>{{ $t("ui.accordion.icons.activeInactive") }}</h3>
    <Accordion active-icon="/downchevron.svg" inactive-icon="/upchevron.svg">
      <SubPane :title="$t('ui.accordion.contents.first.title')">
        <p>{{ $t("ui.accordion.contents.first.content") }}</p>
      </SubPane>

      <SubPane :title="$t('ui.accordion.contents.second.title')">
        <p>{{ $t("ui.accordion.contents.second.content") }}</p>
      </SubPane>

      <SubPane :title="$t('ui.accordion.contents.third.title')">
        <p>{{ $t("ui.accordion.contents.third.content") }}</p>
      </SubPane>
    </Accordion>
  </section>

  <section>
    <h3>{{ $t("ui.accordion.all") }}</h3>

    <Accordion
      :default-index="2"
      :can-self-collapse="true"
      active-icon="/downchevron.svg"
      inactive-icon="/upchevron.svg"
    >
      <SubPane
        :title="$t('ui.accordion.contents.first.title')"
        icon="/home.svg"
      >
        <p>{{ $t("ui.accordion.contents.first.content") }}</p>
      </SubPane>

      <SubPane
        :title="$t('ui.accordion.contents.second.title')"
        icon="/home.svg"
      >
        <p>{{ $t("ui.accordion.contents.second.content") }}</p>
      </SubPane>

      <SubPane
        :title="$t('ui.accordion.contents.third.title')"
        icon="/home.svg"
      >
        <p>{{ $t("ui.accordion.contents.third.content") }}</p>
      </SubPane>
    </Accordion>
  </section>

  <RouterLink :to="{ name: 'ui' }">
    <button>{{ $t("common.back") }}</button>
  </RouterLink>
</template>

<script lang="ts">
export default {
  name: "AccordionDemo",
};
</script>

<script lang="ts" setup>
import { Accordion, SubPane } from "@dzangolab/vue3-ui";
</script>

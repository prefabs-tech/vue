<template>
  <UiPage
    :subtitle="$t('ui.accordion.subtitle')"
    :title="$t('ui.accordion.title')"
    class="demo"
  >
    <section>
      <h2>{{ $t("ui.accordion.basic") }}</h2>
      <DemoAccordion />

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;Accordion&gt;
            &lt;div title="Sagittis a curabitur"&gt;
              ...
            &lt;/div&gt;
            &lt;div title="Diam mus id per posuere vivamus"&gt;
              ...
            &lt;/div&gt;
            &lt;div title="Diam a parturient sociosque"&gt;
              ...
            &lt;/div&gt;
          &lt;/Accordion&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { Accordion } from "@prefabs.tech/vue3-ui";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->
    </section>

    <section>
      <h2>{{ $t("ui.accordion.separate") }}</h2>
      <DemoAccordion
        :can-self-collapse="true"
        :default-index="1"
        class="separate"
      />

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;Accordion
            :can-self-collapse="true"
            :default-index="1"
            class="separate"
          &gt;
            &lt;div title="Sagittis a curabitur"&gt;
              ...
            &lt;/div&gt;
            &lt;div title="Diam mus id per posuere vivamus"&gt;
              ...
            &lt;/div&gt;
            &lt;div title="Diam a parturient sociosque"&gt;
              ...
            &lt;/div&gt;
          &lt;/Accordion&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { Accordion } from "@prefabs.tech/vue3-ui";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->
    </section>

    <section>
      <h2>{{ $t("ui.accordion.icons.toggle") }}</h2>
      <DemoAccordion
        active-icon="pi pi-chevron-up"
        inactive-icon="pi pi-chevron-down"
      />

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;Accordion
            active-icon="pi pi-chevron-up"
            inactive-icon="pi pi-chevron-down"
          &gt;
            &lt;div title="Sagittis a curabitur"&gt;
              ...
            &lt;/div&gt;
            &lt;div title="Diam mus id per posuere vivamus"&gt;
              ...
            &lt;/div&gt;
            &lt;div title="Diam a parturient sociosque"&gt;
              ...
            &lt;/div&gt;
          &lt;/Accordion&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { Accordion } from "@prefabs.tech/vue3-ui";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->
    </section>

    <section>
      <h2>{{ $t("ui.accordion.horizontal.basic") }}</h2>
      <DemoAccordion direction="horizontal" />

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;Accordion direction="horizontal" &gt;
            &lt;div title="Sagittis a curabitur"&gt;
              ...
            &lt;/div&gt;
            &lt;div title="Diam mus id per posuere vivamus"&gt;
              ...
            &lt;/div&gt;
            &lt;div title="Diam a parturient sociosque"&gt;
              ...
            &lt;/div&gt;
          &lt;/Accordion&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { Accordion } from "@prefabs.tech/vue3-ui";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->
    </section>

    <section>
      <h2>{{ $t("ui.accordion.icons.css") }}</h2>
      <DemoAccordion class="with-icons" />

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;Accordion class="with-icons"&gt;
            &lt;div title="Sagittis a curabitur"&gt;
              ...
            &lt;/div&gt;
            &lt;div title="Diam mus id per posuere vivamus"&gt;
              ...
            &lt;/div&gt;
            &lt;div title="Diam a parturient sociosque"&gt;
              ...
            &lt;/div&gt;
          &lt;/Accordion&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { Accordion } from "@prefabs.tech/vue3-ui";
        &lt;/script&gt;

        &lt;style lang="css"&gt;
        .accordion.with-icons &gt; section &gt; header &gt; button &lbrace;
          background-position: center left;
          background-repeat: no-repeat;
        &rbrace;

        .accordion.with-icons &gt; section:first-child &gt; header &gt; button &lbrace;
          background-image: url("@/assets/svg/number-1.svg");
        &rbrace;

        .accordion.with-icons &gt; section:nth-child(2) &gt; header &gt; button &lbrace;
          background-image: url("@/assets/svg/number-2.svg");
        &rbrace;

        .accordion.with-icons &gt; section:nth-child(3) &gt; header &gt; button &lbrace;
          background-image: url("@/assets/svg/number-3.svg");
        &rbrace;
        &lt;/style&gt;
      </SshPre>
      <!-- eslint-enable -->
    </section>

    <section>
      <h2>{{ $t("ui.accordion.icons.slot") }}</h2>
      <DemoAccordionWithIcons />

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;Accordion&gt;
            &lt;div icon="pi pi-home" title="Sagittis a curabitur"&gt;
              ...
            &lt;/div&gt;
            &lt;div icon="pi pi-list" title="Diam mus id per posuere vivamus"&gt;
              ...
            &lt;/div&gt;
            &lt;div :icon="h('i', { class: 'pi pi-cog' })" title="Diam a parturient sociosque"&gt;
              ...
            &lt;/div&gt;
          &lt;/Accordion&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { Accordion } from "@prefabs.tech/vue3-ui";
        import { h } from "vue";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->
    </section>

    <ComponentDocumentation
      :props-data="propsData"
      :props-table-title="
        $t('common.properties', { value: 'AccordionProperties' })
      "
      :slots-data="slotsData"
    />
  </UiPage>
</template>

<script lang="ts">
export default {
  name: "AccordionPage",
};
</script>

<script lang="ts" setup>
import { useI18n } from "@prefabs.tech/vue3-i18n";

import DemoAccordion from "./DemoAccordion.vue";
import DemoAccordionWithIcons from "./DemoAccordionWithIcons.vue";
import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import UiPage from "../UiPage.vue";

import "@/assets/css/ui/accordion.css";

const { t } = useI18n();

const propsData = [
  {
    default: "-",
    description: t("ui.accordion.documentation.propsDescription.activeIcon"),
    prop: "activeIcon",
    type: "String | VNode",
  },
  {
    default: "false",
    description: t(
      "ui.accordion.documentation.propsDescription.canSelfCollapse",
    ),
    prop: "canSelfCollapse",
    type: "Boolean",
  },
  {
    default: "0",
    description: t("ui.accordion.documentation.propsDescription.defaultIndex"),
    prop: "defaultIndex",
    type: "Number",
  },
  {
    default: "vertical",
    description: t("ui.accordion.documentation.propsDescription.direction"),
    prop: "direction",
    type: "vertical | horizontal",
  },
  {
    default: "-",
    description: t("ui.accordion.documentation.propsDescription.inactiveIcon"),
    prop: "inactiveIcon",
    type: "String | VNode",
  },
];

const slotsData = [
  {
    description: t("ui.accordion.documentation.slotDescription.default"),
    name: "default",
  },
];
</script>

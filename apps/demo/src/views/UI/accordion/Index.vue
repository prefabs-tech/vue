<template>
  <UiPage
    :sub-title="$t('ui.accordion.subtitle')"
    :title="$t('ui.accordion.title')"
    class="demo"
  >
    <template #toolbar>
      <ButtonElement
        :label="$t('common.back')"
        icon-left="pi pi-chevron-left"
        size="medium"
        variant="textOnly"
        @click="$router.push('/ui')"
      />
    </template>

    <section>
      <h2>{{ $t("ui.accordion.basic") }}</h2>
      <DemoAccordion />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.separate") }}</h2>
      <DemoAccordion class="separate" />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.defaultIndex") }}</h2>
      <DemoAccordion :default-index="1" />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.can-self-collapse") }}</h2>
      <DemoAccordion :can-self-collapse="true" />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.icons.toggle") }}</h2>
      <DemoAccordion
        active-icon="pi pi-chevron-up"
        inactive-icon="pi pi-chevron-down"
      />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.horizontal.basic") }}</h2>
      <DemoAccordion direction="horizontal" />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.horizontal.separate") }}</h2>
      <DemoAccordion direction="horizontal" class="separate" />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.icons.css") }}</h2>
      <DemoAccordion class="with-icons" />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.icons.slot") }}</h2>
      <DemoAccordionWithIcons />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.icons.css") }}</h2>
      <DemoAccordionWithIcons class="horizontal" />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.icons.slot") }}</h2>
      <DemoAccordionWithIcons class="horizontal show-toggle-icon" />
    </section>

    <section>
      <h2>{{ $t("ui.accordion.icons.toggle") }}</h2>
      <DemoAccordion class="show-toggle-icon custom-toggle-icons" />
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
import { ButtonElement } from "@prefabs.tech/vue3-ui";

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

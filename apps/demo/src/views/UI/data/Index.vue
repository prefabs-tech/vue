<template>
  <UiPage
    :title="$t('ui.data.title')"
    :sub-title="$t('ui.data.subtitle')"
    class="demo"
  >
    <template #toolbar>
      <router-link :to="{ name: 'ui' }" class="back">
        {{ $t("common.back") }}
      </router-link>
    </template>

    <section>
      <h2>{{ $t("ui.data.usage.basic") }}</h2>

      <div class="section-content">
        <Data :caption="$t('ui.data.label.name')" :value="userData.name" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Data caption="Name" value="John Doe" /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Data } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.data.usage.statMode") }}</h2>

      <div class="section-content">
        <Data
          :caption="$t('ui.data.label.name')"
          :value="userData.name"
          mode="stat"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Data
              caption="Name"
              mode="stat"
              value="John Doe" 
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Data } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.data.usage.structuredData") }}</h2>

      <div class="section-content">
        <GridContainer>
          <Data
            v-for="(data, index) in structuredData"
            :key="`${data.caption}-${index}`"
            v-bind="data"
          />
        </GridContainer>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;GridContainer&gt;
              &lt;Data
                v-for="(data, index) in data"
                :key="`${data.caption}-${index}`"
                v-bind="data"
              /&gt;
            &lt;/GridContainer&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Data, GridContainer } from "@dzangolab/vue3-ui";

          const data = [
            {
              caption: "Name",
              value: "John Doe",
            },
            {
              caption: "Age",
              value: 30,
            },
            {
              caption: "Email",
              value: "john.doe@example.com"
            },
            {
              caption: "Address",
              value: "123 Main St, Springfield, USA",
            },
            {
              caption: "Status",
              value: "Active",
            },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("common.properties", { value: "DataProperties" }) }}</h2>

      <Table
        :columns-data="propsColumns"
        :data="propsData"
        :paginated="false"
      />
    </section>

    <section>
      <h2>{{ $t("common.slots") }}</h2>

      <Table
        :columns-data="slotsColumns"
        :data="slotsData"
        :paginated="false"
      />
    </section>
  </UiPage>
</template>

<script setup lang="ts">
import { Table } from "@dzangolab/vue3-tanstack-table";
import { Data, GridContainer } from "@dzangolab/vue3-ui";

import UiPage from "../UiPage.vue";

const propsColumns = [
  {
    accessorKey: "prop",
    header: "Property",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "default",
    header: "Default",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];

const propsData = [
  {
    default: "-",
    description: "The caption displayed alongside the value.",
    id: 1,
    prop: "caption",
    type: "String",
  },
  {
    default: "-",
    description: "The value to display.",
    id: 2,
    prop: "value",
    type: "String | Number",
  },
  {
    default: "attr",
    description: "Defines which styling to apply to the component.",
    id: 3,
    prop: "mode",
    type: '"attr" | "stat"',
  },
  {
    default: "vertical",
    description: "Specifies the direction to display the component.",
    id: 4,
    prop: "direction",
    type: '"horizontal" | "vertical"',
  },
];

const slotsColumns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];

const slotsData = [
  {
    id: 1,
    description:
      "Content to place in the caption. Overrides the `caption` prop",
    name: "caption",
  },
  {
    id: 2,
    description: "Content to place in the value. Overrides the `value` prop",
    name: "value",
  },
  {
    id: 3,
    description: "Content to place between caption and value",
    name: "separator",
  },
];

const structuredData = [
  {
    caption: "Name",
    value: "John Doe",
  },
  {
    caption: "Age",
    value: 30,
  },
  {
    caption: "Email",
    value: "john.doe@example.com",
  },
  {
    caption: "Address",
    value: "123 Main St, Springfield, USA",
  },
  {
    caption: "Status",
    value: "Active",
  },
];

const userData = {
  email: "john.doe@example.com",
  name: "John Doe",
};
</script>

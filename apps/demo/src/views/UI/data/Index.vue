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
            &lt;Data caption="Name" value="John Smith" /&gt;
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
          :caption="$t('ui.data.label.visitors')"
          :value="userData.visitors"
          mode="stat"
        />

        <Data
          :caption="$t('ui.data.label.revenue')"
          :value="userData.revenue"
          mode="stat"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Data
              caption="Visitors"
              mode="stat"
              value="3,825" 
            /&gt;

            &lt;Data
              caption="Revenue"
              mode="stat"
              value="$1,030,217" 
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
              value: "John Smith",
            },
            {
              caption: "Age",
              value: 30,
            },
            {
              caption: "Email",
              value: "john.smith@example.com"
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
    default: "vertical",
    description: "Specifies the direction to display the component.",
    id: 2,
    prop: "direction",
    type: '"horizontal" | "vertical"',
  },
  {
    default: "attr",
    description: "Defines which styling to apply to the component.",
    id: 3,
    prop: "mode",
    type: '"attr" | "stat"',
  },
  {
    default: "-",
    description: "The value to display.",
    id: 4,
    prop: "value",
    type: "String | Number",
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
    description:
      "Content to place in the caption. Overrides the `caption` prop",
    id: 1,
    name: "caption",
  },
  {
    description: "Content to place in the value. Overrides the `value` prop",
    id: 3,
    name: "value",
  },
];

const structuredData = [
  {
    caption: "Name",
    value: "John Smith",
  },
  {
    caption: "Age",
    value: 30,
  },
  {
    caption: "Email",
    value: "john.smith@example.com",
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
  name: "John Smith",
  revenue: "$1,030,217",
  visitors: "3,825",
};
</script>

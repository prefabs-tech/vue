<template>
  <UiPage :title="$t('ui.data.title')" class="demo">
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
      <h2>{{ $t("ui.data.usage.separatorSlot") }}</h2>

      <div class="section-content">
        <Data
          v-for="(data, index) in structuredData"
          :key="`${data.caption}-${index}`"
          v-bind="data"
          direction="horizontal"
        >
          <template #separator>:</template>
        </Data>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Data
              v-for="(data, index) in data"
              :key="`${data.caption}-${index}`"
              v-bind="data"
              direction="horizontal"
            &gt;
              &lt;template #separator&gt;:&lt;/template&gt;
            &lt;/Data&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Data } from "@dzangolab/vue3-ui";

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
  </UiPage>
</template>

<script setup lang="ts">
import { Data, GridContainer } from "@dzangolab/vue3-ui";

import UiPage from "../UiPage.vue";

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

<template>
  <UiPage :title="$t('ui.gridContainer.title')" class="demo">
    <template #toolbar>
      <router-link :to="{ name: 'ui' }" class="back">
        {{ $t("common.back") }}
      </router-link>
    </template>

    <section>
      <h2>{{ $t("ui.gridContainer.usage.basic") }}</h2>

      <div class="section-content">
        <GridContainer>
          <Card
            v-for="(menu, index) in packages"
            :key="index + '-' + menu.name"
            :title="menu.name"
          >
            {{ menu.description }}
          </Card>
        </GridContainer>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;GridContainer&gt;
              &lt;Card
                v-for="(menu, index) in packages"
                :key="index + '-' + menu.name"
                :title="menu.name"
              &gt;
                &lbrace;&lbrace; menu.description &rbrace;&rbrace;
              &lt;/Card&gt;
            &lt;/GridContainer&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Card, GridContainer } from "@dzangolab/vue3-ui";

          const packages = [
            {
              name: "Card 1",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            },
            {
              name: "Card 2",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            },
            {
              name: "Card 3",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            },

            {
              name: "Card 4",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            },
            {
              name: "Card 5",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
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
import { Card, GridContainer } from "@dzangolab/vue3-ui";

import UiPage from "../UiPage.vue";

const packages = [
  {
    name: "Card 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    name: "Card 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    name: "Card 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },

  {
    name: "Card 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    name: "Card 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
];
</script>

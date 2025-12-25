<template>
  <UiPage
    :sub-title="$t('ui.sortableList.subtitle')"
    :title="$t('ui.sortableList.title')"
    class="demo-sortable-list"
  >
    <section>
      <h2>{{ $t("ui.sortableList.usage.basic") }}</h2>

      <div class="section-content">
        <h3>{{ $t("ui.sortableList.usage.sortSport") }}</h3>
        <SortableList :list="list" @on-drag="onDrag" />
        <div v-if="mostFavourite" class="most-favourite">
          {{ $t("ui.sortableList.games.favourite", { sport: mostFavourite }) }}
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;h3&gt;Sort sports from most to least favorite&lt;/h3&gt;

            &lt;SortableList :list="list" @on-drag="onDrag" /&gt;

            &lt;div v-if="mostFavourite" class="most-favourite"&gt;
              &lbrace;&lbrace; mostFavorite + " is your most favorite sport." &rbrace;&rbrace;
            &lt;/div&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt; 
            import { SortableList } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";
  
            const list = ref([
              {
                id: 1,
                data: "Basketball",
              },
              ...
            ]);

            const mostFavourite = ref&lt;string&gt;();

            const onDrag = (sortedList: [{ id: number, data: string }]) => {
              mostFavourite.value = sortedList[0].data;
            };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <ComponentDocumentation
      :events-data="eventsData"
      :props-data="propsData"
      :props-table-title="
        $t('common.properties', { value: 'SortableListProperties' })
      "
    />

    <section>
      <!-- eslint-disable -->
        <SshPre language="html-vue">
          type List = {
            id: number | string;
            data: string | unknown;
            render?: (data) => VNode;
          };
        </SshPre>
        <!-- eslint-enable -->
    </section>
  </UiPage>
</template>

<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { SortableList } from "@prefabs.tech/vue3-ui";
import { ref } from "vue";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import UiPage from "../UiPage.vue";

const { t } = useI18n();

const list = ref([
  {
    id: 1,
    data: t("ui.sortableList.games.basketball"),
  },
  {
    id: 2,
    data: t("ui.sortableList.games.cricket"),
  },
  {
    id: 3,
    data: t("ui.sortableList.games.football"),
  },
  {
    id: 4,
    data: t("ui.sortableList.games.hockey"),
  },
  {
    id: 5,
    data: t("ui.sortableList.games.volleyball"),
  },
]);

const mostFavourite = ref<string>();

const eventsData = [
  {
    description:
      "Emitted when the list is reordered via drag and drop. The payload is the updated list.",
    name: "onDrag",
    payload: "Array<List>",
  },
];

const propsData = [
  {
    default: "-",
    description:
      "An array of list items to render and sort. Each item must have a unique `id` and `data`. Optionally, a `render` function can be provided to customize rendering.(required)",
    prop: "list",
    type: "Array<List>",
  },
];

const onDrag = (sortedList: [{ id: number; data: string }]) => {
  mostFavourite.value = sortedList[0].data;
};
</script>

<style>
.demo-sortable-list section {
  margin-bottom: 2.5em;
}

.demo-sortable-list .section-content {
  display: grid;
  gap: 1rem;
}
</style>

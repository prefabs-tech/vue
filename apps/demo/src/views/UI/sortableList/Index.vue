<template>
  <Page :title="$t('ui.sortableList.title')" class="demo-sortable-list">
    <section>
      <h2>{{ $t("ui.sortableList.usage.basic") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SortableList :list="list" @onDrag="onDrag" /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt; 
            import { SortableList } from "@dzangolab/vue3-ui";
            import { ref } from "vue";
  
            const list = ref([
              {
                id: 1,
                data: "Basketball",
              },
              ...
            ]);

            const onDrag = (sortedList: []) => {
              ...
            };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <SortableList :list="list" @onDrag="onDrag" />
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { SortableList } from "@dzangolab/vue3-ui";
import { ref } from "vue";
import { useI18n } from "@dzangolab/vue3-i18n";

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
    data: t("ui.sortableList.games.hokey"),
  },
  {
    id: 5,
    data: t("ui.sortableList.games.volleyball"),
  },
]);

const onDrag = (sortedList: []) => {
  list.value = sortedList;
};
</script>

<style>
.demo-sortable-list section {
  margin-bottom: 2.5em;
}

.demo-sortable-list .section-content {
  display: grid;
  gap: 1.5rem;
}
</style>

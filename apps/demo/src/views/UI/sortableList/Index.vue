<template>
  <Page :title="'Sortable list'" class="demo-sortable-list">
    <section>
      <h2>Basic</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SortableList :list="list" @on:drag="onDrag" /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt; 
            import { SortableList } from "@dzangolab/vue3-ui";
            import { ref } from "vue";
  
            const list = ref([
              {
                id: 1,
                data: "Item 1",
              },
              ...
            ]);

            const onDrag = (sortedList: []) => {
              ...
            };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <SortableList :list="list" @on:drag="onDrag" />
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { SortableList } from "@dzangolab/vue3-ui";
import { ref } from "vue";

const list = ref([
  {
    id: 1,
    data: "Item 1",
  },
  {
    id: 2,
    data: "Item 2",
  },
  {
    id: 3,
    data: "Item 3",
  },
  {
    id: 4,
    data: "Item 4",
  },
  {
    id: 5,
    data: "Item 5",
  },
  {
    id: 6,
    data: "Item 6",
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

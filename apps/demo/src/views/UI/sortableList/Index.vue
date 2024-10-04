<template>
  <Page :title="'Sortable list'" class="demo-message">
    <section>
      <h2>Basic</h2>

      <SortableList :list="list" />
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
</script>

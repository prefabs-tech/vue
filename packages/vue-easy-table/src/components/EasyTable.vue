<template>
  <div class="table">
    <EasyDataTable
      alternating
      buttons-pagination
      :headers="columns"
      :hide-footer="true"
      :items="rows"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "EasyTable",
};
</script>

<script setup lang="ts">
import { PropType, reactive } from "vue";
import EasyDataTable from "vue3-easy-data-table";

import type { Column, Row } from "../types";

const props = defineProps({
  columns: {
    type: Array as PropType<Column[]>,
    default: () => [],
  },
  rows: {
    type: Array as PropType<Row[]>,
    default: () => [],
  },
});

const columns = reactive(props.columns);
const rows = reactive(props.rows);
</script>

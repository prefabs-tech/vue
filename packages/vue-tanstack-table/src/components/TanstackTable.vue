<template>
  <div class="table">
    <table>
      <thead>
        <tr v-for="column in table.getAllColumns()" :key="column.id">
          <!-- <th v-for="header in column.getHeaders()" :key="header.id">
            <FlexRender :render="header" :props="header.getContext()" />
          </th> -->
        </tr>
      </thead>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  name: "TanstackTable",
};
</script>

<script setup lang="ts">
import {
  FlexRender,
  getCoreRowModel,
  useVueTable,
  createColumnHelper,
} from "@tanstack/vue-table";
import { computed, ref } from "vue";

import type { PropType } from "vue";
import type { ColumnDef } from "@tanstack/vue-table";

const props = defineProps({
  data: {
    type: Array as PropType<Record<string, string | number>[]>,
    required: true,
  },
  headers: {
    type: Array as PropType<ColumnDef<Record<string, string | number>, any>[]>,
    required: true,
  }
})

const data = ref(props.data);

const columnHelper = createColumnHelper();

// const column = [
//   columnHelper.group({
//     columns: [

//     ]
//   })
// ];

const columns: ColumnDef<Record<string, string | number>, any>[] = props.headers;

// props.headers.forEach(header => {
//   columns.push(columnHelper.accessor(header.id, {
//     header: () => header.header
//   }))
// })

const table = useVueTable({
  get data() {
    return data.value;
  },
  columns,
  getCoreRowModel: getCoreRowModel(),
});
</script>

<style scoped>
table {
  border: 1px solid #000 !important;
}

tbody {
  border-bottom: 1px solid #000;
}

th {
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
  padding: 2px 4px;
}

tfoot {
  color: gray;
}

tfoot th {
  font-weight: normal;
}
</style>

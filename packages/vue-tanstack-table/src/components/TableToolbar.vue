<template>
  <div class="toolbar">
    <ButtonElement
      v-if="showResetButton"
      :label="resetButtonLabel"
      variant="outlined"
      severity="secondary"
      @click="$emit('on:reset')"
    />

    <Popup v-if="showColumnAction" position="bottom">
      <ButtonElement
        :label="columnActionButtonLabel"
        variant="outlined"
        severity="secondary"
      />

      <template #content>
        <SortableList :list="items" @on-drag="onDrag" />
      </template>
    </Popup>

    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "TableToolbar",
};
</script>

<script setup lang="ts">
import { Checkbox } from "@dzangolab/vue3-form";
import { ButtonElement, Popup, SortableList } from "@dzangolab/vue3-ui";
import { computed, h } from "vue";

import type { Column, Table } from "@tanstack/vue-table";
import type { VNode } from "vue";

type List = {
  id: number | string;
  data: Column<unknown, unknown>;
  render?: (data: unknown) => VNode;
};

const props = defineProps({
  columnActionButtonLabel: {
    default: "Columns",
    type: String,
  },
  hasActionsColumn: Boolean,
  hasSelectionColumn: Boolean,
  resetButtonLabel: {
    default: "Reset all",
    type: String,
  },
  showColumnAction: Boolean,
  showResetButton: Boolean,
  table: {
    required: true,
    type: Object as () => Table<unknown>,
  },
});

const emit = defineEmits(["on:drag", "on:reset"]);

const items = computed(() =>
  props.table
    .getAllLeafColumns()
    .filter((column) => column.id !== "select" && column.id !== "actions")
    .map((column, index) => ({
      id: index,
      data: column,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (data: any) => {
        let header = data.columnDef.header;

        if (typeof data.columnDef.header === "function") {
          header = data.columnDef.header();
        }

        return h(Checkbox, {
          label: header,
          modelValue: data.getIsVisible(),
          name: data.columnDef.accessorKey,
          "onUpdate:modelValue": () => data.toggleVisibility(),
        });
      },
    })),
);

const onDrag = (sorted: List[]) => {
  const sortedColumn = [
    ...(props.hasSelectionColumn ? ["select"] : []),
    ...sorted.map((item: List) => String(item?.data?.id)),
    ...(props.hasActionsColumn ? ["actions"] : []),
  ];

  emit("on:drag", sortedColumn);
};
</script>

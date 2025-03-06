<template>
  <ButtonElement variant="textOnly" :icon-left="filteredItems[0].icon" />
</template>

<script lang="ts">
export default {
  name: "TableDataActions",
};
</script>

<script setup lang="ts">
import { ButtonElement } from "@dzangolab/vue3-ui";
import { computed } from "vue";

import type { PropType } from "vue";

type DataActionsMenuItem = {
  disabled?: boolean | ((data: object) => boolean);
  display?: boolean | ((data: object) => boolean);
  label?: string;
  icon?: string;
  requireConfirmationModal?: boolean;
};

const props = defineProps({
  actions: {
    type: Array as PropType<DataActionsMenuItem[]>,
    required: true,
  },
  data: {
    default: () => ({}),
    type: Object,
  },
});

const filteredItems = computed(() =>
  props.actions
    .filter((action) => {
      const display =
        typeof action.display === "function"
          ? action.display(props.data)
          : (action.display ?? true);
      return display;
    })
    .map((action) => ({
      ...action,
      disabled:
        typeof action.disabled === "function"
          ? action.disabled(props.data)
          : action.disabled,
    })),
);
</script>

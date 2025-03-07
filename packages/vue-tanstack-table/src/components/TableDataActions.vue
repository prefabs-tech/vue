<template>
  <ButtonElement
    v-if="showSingleButton"
    :disabled="filteredItems[0].disabled"
    :icon-left="filteredItems[0].icon"
    :label="filteredItems[0].label"
    rounded
    variant="textOnly"
    @click="$emit('action:click', props.data)"
  />
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
import type { DataActionsMenuItem } from "../types";

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

defineEmits(["action:click"]);

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

const showSingleButton = computed(() =>
  filteredItems.value.length === 1 &&
  filteredItems.value[0].icon
);
</script>

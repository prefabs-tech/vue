<template>
  <div class="data-actions">
    <ButtonElement
      v-if="showSingleButton"
      :disabled="filteredItems[0].disabled"
      :icon-left="filteredItems[0].icon"
      :label="filteredItems[0].label"
      rounded
      variant="textOnly"
      @click="$emit('action:click')"
    />

    <Dropdown
      v-else-if="filteredItems.length > 1"
      :menu="filteredItems"
      @select="onSelectAction"
    >
      <slot name="trigger">
        <Icon icon="prime:cog" width="24" />
      </slot>
    </Dropdown>

    <ConfirmationModal
      v-if="showConfirmation"
      @on:close="showConfirmation = false"
      @on:confirm="$emit('action:select', selectedAction)"
    >
      <template
        v-if="$slots.confirmationHeader || confirmationLabel?.header"
        #header
      >
        <slot name="confirmationHeader">
          <p>{{ confirmationLabel.header }}</p>
        </slot>
      </template>

      <template v-if="$slots.confirmationBody || confirmationLabel?.body" #body>
        <slot name="confirmationBody">
          <p>{{ confirmationLabel.body }}</p>
        </slot>
      </template>

      <template
        v-if="$slots.confirmationFooter || confirmationLabel?.footer"
        #footer
      >
        <slot name="confirmationFooter">
          <p>{{ confirmationLabel.footer }}</p>
        </slot>
      </template>
    </ConfirmationModal>
  </div>
</template>

<script lang="ts">
export default {
  name: "TableDataActions",
};
</script>

<script setup lang="ts">
import { ButtonElement, ConfirmationModal, Dropdown } from "@dzangolab/vue3-ui";
import { Icon } from "@iconify/vue";
import { computed, ref } from "vue";

import type { DataActionsMenuItem } from "../types";
import type { PropType } from "vue";

const props = defineProps({
  actions: {
    type: Array as PropType<DataActionsMenuItem[]>,
    required: true,
  },
  confirmationLabel: {
    default: undefined,
    type: Object as PropType<{
      body: string;
      footer: string;
      header: string;
    }>,
  },
  data: {
    default: () => ({}),
    type: Object,
  },
});

const emit = defineEmits(["action:click", "action:select"]);

const showConfirmation = ref(false);
const selectedAction = ref<DataActionsMenuItem>();

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

const showSingleButton = computed(
  () => filteredItems.value.length === 1 && filteredItems.value[0].icon,
);

const onSelectAction = (action: DataActionsMenuItem) => {
  selectedAction.value = action;

  console.log(action);
  if (action?.requireConfirmationModal) {
    showConfirmation.value = true;
  } else {
    emit("action:select", selectedAction.value);
  }
};
</script>

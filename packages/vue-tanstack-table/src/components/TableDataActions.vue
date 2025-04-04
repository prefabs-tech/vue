<template>
  <div v-if="showActionsMenu" class="data-actions">
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
      v-else-if="filteredItems.length"
      :menu="filteredItems"
      @select="onSelectAction"
    >
      <slot name="trigger">
        <Icon icon="prime:cog" width="22" />
      </slot>
    </Dropdown>

    <slot name="confirmationModal">
      <ConfirmationModal
        v-if="showConfirmation"
        @on:close="showConfirmation = false"
        @on:confirm="onConfirmAction"
      >
        <template v-if="selectedAction?.confirmationOptions?.header" #header>
          <p>{{ selectedAction?.confirmationOptions?.header }}</p>
        </template>

        <template v-if="selectedAction?.confirmationOptions?.body" #body>
          <p>{{ selectedAction?.confirmationOptions?.body }}</p>
        </template>

        <template v-if="selectedAction?.confirmationOptions?.footer" #footer>
          <p>{{ selectedAction?.confirmationOptions?.footer }}</p>
        </template>
      </ConfirmationModal>
    </slot>
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
  data: {
    default: () => ({}),
    type: Object,
  },
  displayActions: {
    default: true,
    type: [Boolean, Function] as PropType<
      boolean | ((data: object) => boolean)
    >,
  },
  singleActionMode: {
    default: "button",
    type: String,
    validator: (value: string) => ["button", "menu"].includes(value),
  },
});

const emit = defineEmits(["action:click", "action:select"]);

const showConfirmation = ref(false);
const selectedAction = ref<DataActionsMenuItem>();

const filteredItems = computed(() =>
  props.actions
    .map((action) => ({
      ...action,
      display:
        typeof action.display === "function"
          ? action.display(props.data)
          : (action.display ?? true),
      disabled:
        typeof action.disabled === "function"
          ? action.disabled(props.data)
          : action.disabled,
    }))
    .filter((action) => action.display),
);

const showSingleButton = computed(
  () =>
    filteredItems.value.length === 1 &&
    filteredItems.value[0].icon &&
    props.singleActionMode === "button",
);

const showActionsMenu = computed(() =>
  typeof props.displayActions === "function"
    ? props.displayActions(props.data)
    : props.displayActions,
);

const onConfirmAction = () => {
  showConfirmation.value = false;

  emit("action:select", selectedAction.value);
};

const onSelectAction = (action: DataActionsMenuItem) => {
  selectedAction.value = action;

  if (action?.requireConfirmationModal) {
    showConfirmation.value = true;
  } else {
    emit("action:select", selectedAction.value);
  }
};
</script>

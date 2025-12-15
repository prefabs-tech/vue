<template>
  <div v-if="showActionsMenu" class="data-actions">
    <template v-if="showButtons">
      <ButtonElement
        v-for="(item, index) in filteredItems"
        v-bind="item"
        :key="`mode-button-${index}`"
        :class="item.class"
        :disabled="item.disabled"
        :icon-left="item.icon"
        :label="!item.icon ? item.label : ''"
        :title="item.label"
        rounded
        variant="textOnly"
        @click="onSelectAction(item)"
      />
    </template>

    <Dropdown
      v-else-if="showDropdown"
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
        <template v-if="selectedConfirmationOptions?.header" #header>
          <p
            v-if="typeof selectedConfirmationOptions?.header === 'string'"
            class="title"
          >
            {{ selectedConfirmationOptions?.header }}
          </p>
          <component
            :is="selectedConfirmationOptions?.header"
            v-else
          ></component>
        </template>

        <template v-if="selectedConfirmationOptions?.body" #message>
          <p v-if="typeof selectedConfirmationOptions?.body === 'string'">
            {{ selectedConfirmationOptions?.body }}
          </p>
          <component :is="selectedConfirmationOptions?.body" v-else></component>
        </template>

        <template v-if="selectedConfirmationOptions?.footer" #footer>
          <p v-if="typeof selectedConfirmationOptions?.footer === 'string'">
            {{ selectedConfirmationOptions?.footer }}
          </p>
          <component
            :is="selectedConfirmationOptions?.footer"
            v-else
          ></component>
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
import { Icon } from "@iconify/vue";
import {
  ButtonElement,
  ConfirmationModal,
  Dropdown,
} from "@prefabs.tech/vue3-ui";
import { computed, ref } from "vue";

import type { DataActionsMenuItem } from "../types";
import type { PropType } from "vue";

const props = defineProps({
  actions: {
    type: Array as PropType<DataActionsMenuItem[]>,
    required: true,
  },
  autoModeCount: {
    default: 1,
    type: Number,
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
  mode: {
    default: undefined,
    type: String,
    validator: (value: string) =>
      ["auto", "buttons", "dropdown"].includes(value),
  },
});

const emit = defineEmits(["action:select"]);

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

const selectedConfirmationOptions = computed(() => {
  const options = selectedAction.value?.confirmationOptions;

  if (!options) {
    return;
  }

  return typeof options === "function" ? options(props.data) : options;
});

const showActionsMenu = computed(
  () =>
    (typeof props.displayActions === "function"
      ? props.displayActions(props.data)
      : props.displayActions) && filteredItems.value?.length,
);

const showButtons = computed(
  () =>
    (filteredItems.value?.length && props.mode === "buttons") ||
    (props.mode === "auto" &&
      filteredItems.value?.length <= props.autoModeCount),
);

const showDropdown = computed(
  () =>
    (filteredItems.value?.length && props.mode === "dropdown") ||
    (props.mode === "auto" &&
      filteredItems.value?.length > props.autoModeCount),
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

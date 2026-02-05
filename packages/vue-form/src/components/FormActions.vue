<template>
  <div
    :data-alignment="alignment"
    :data-direction="flowDirection"
    :data-reverse="reverse"
    class="form-actions"
  >
    <slot>
      <template
        v-for="(action, index) in parsedActions"
        :key="`${action.id || action.label}-${index}`"
      >
        <slot :name="action.id || action.label">
          <ButtonElement
            v-bind="action"
            :disabled="disabled || loading"
            :type="action?.type || 'button'"
            @click="onActionClick(action)"
          />
        </slot>
      </template>
    </slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "FormActions",
};
</script>

<script setup lang="ts">
import { ButtonElement } from "@prefabs.tech/vue3-ui";
import { computed } from "vue";

import type { PropType } from "vue";

const props = defineProps({
  actions: {
    default: () => [],
    type: Array as PropType<Record<string, unknown>[]>,
  },
  alignment: {
    default: "right",
    type: String,
  },
  cancelLabel: {
    default: "Cancel",
    type: String,
  },
  disabled: {
    default: false,
    type: Boolean,
  },
  flowDirection: {
    default: "horizontal",
    type: String,
  },
  loading: {
    default: false,
    type: Boolean,
  },
  reverse: Boolean,
  submitLabel: {
    default: "Submit",
    type: String,
  },
});

const emit = defineEmits<{
  (event: string, action: Record<string, unknown>): void;
}>();

const defaultActions = computed(() => [
  {
    id: "submit",
    label: props.submitLabel,
    type: "submit",
  },
  {
    id: "cancel",
    label: props.cancelLabel,
    severity: "secondary",
    variant: "outlined",
  },
]);

const parsedActions = computed(() => {
  if (props.actions.length === 0) {
    return defaultActions.value;
  }

  const mappedActions = new Map<string, Record<string, unknown>>();

  for (const action of props.actions) {
    mappedActions.set(String(action?.id ?? action?.label ?? ""), action);
  }

  for (const defaultAction of defaultActions.value) {
    if (mappedActions.get(defaultAction.id || defaultAction.label || "")) {
      const previousAction = mappedActions.get(
        defaultAction.id || defaultAction.label || "",
      );

      mappedActions.set(defaultAction.id || defaultAction.label || "", {
        ...defaultAction,
        ...previousAction,
      });
    }
  }

  return [...mappedActions.values()];
});

const onActionClick = (action: Record<string, unknown>) => {
  const eventName = String(
    action?.id || action?.label || "click",
  ).toLowerCase();

  emit(eventName, action);
};
</script>

<style lang="css">
@import "../assets/css/form-action.css";
</style>

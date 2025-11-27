<template>
  <div class="content-wrapper">
    <template v-for="(stepItem, index) in steps" :key="index">
      <div v-if="index === activeIndex && stepItem.content" class="content">
        <slot :name="stepItem?.step">
          <template v-if="typeof stepItem.content === 'string'">{{
            stepItem.content
          }}</template>
          <component :is="stepItem.content" v-else />
        </slot>
      </div>
    </template>

    <div v-if="!hideButtons" class="actions">
      <ButtonElement
        :disabled="activeIndex === 0"
        label="Previous"
        variant="outlined"
        v-bind="previousButtonProperties"
        @click="$emit('click:previous')"
      />
      <ButtonElement
        :label="activeIndex === steps.length - 1 ? 'Finish' : 'Next'"
        :severity="activeIndex === steps.length - 1 ? 'success' : 'primary'"
        v-bind="nextButtonProperties"
        @click="$emit('click:next')"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "StepperContent",
};
</script>

<script setup lang="ts">
import { ButtonElement } from "../../index";

import type {
  ActionButtonProperties,
  StepProperties,
} from "../../types/stepper";
import type { PropType } from "vue";

defineProps({
  activeIndex: {
    default: undefined,
    type: Number,
  },
  hideButtons: Boolean,
  nextButtonProperties: {
    default: null,
    type: Object as PropType<ActionButtonProperties>,
  },
  previousButtonProperties: {
    default: null,
    type: Object as PropType<ActionButtonProperties>,
  },
  steps: {
    type: Array as PropType<StepProperties[]>,
    required: true,
  },
});

defineEmits(["click:next", "click:previous"]);
</script>

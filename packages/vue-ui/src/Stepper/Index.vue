<template>
  <div :class="`stepper ${align} ${direction}`">
    <ul class="steps">
      <li
        v-for="(stepItem, index) in steps"
        :key="index"
        :class="[
          'step',
          {
            active: index === activeStepIndex,
            completed: index < activeStepIndex,
          },
        ]"
      >
        <span
          :class="[
            'step-number',
            {
              active: index === activeStepIndex,
              completed: index < activeStepIndex,
            },
          ]"
        >
          <template v-if="index < activeStepIndex">
            <template v-if="stepItem?.completedStepIcon">
              <i
                v-if="typeof stepItem?.completedStepIcon === 'string'"
                :class="stepItem?.completedStepIcon"
              ></i>
              <component :is="stepItem?.completedStepIcon" v-else />
            </template>
            <img v-else src="../assets/svg/tick-mark.svg" />
          </template>
          <template v-else>
            {{ stepItem.step || index + 1 }}
          </template>
        </span>
        <div class="step-content-wrapper">
          <span
            v-if="stepItem.label"
            :class="{ active: index === activeStepIndex }"
            class="step-label"
          >
            {{ stepItem.label }}
          </span>
          <span
            v-if="stepItem.subtitle"
            :class="['step-subtitle', { active: index === activeStepIndex }]"
          >
            {{ stepItem.subtitle }}
          </span>
          <StepperContent
            v-if="
              props.direction === 'vertical' &&
              activeStep?.content &&
              index === activeStepIndex
            "
            :active-index="activeStepIndex"
            :hide-buttons="hideButtons"
            :next-button-properties="nextButtonProperties"
            :previous-button-properties="previousButtonProperties"
            :steps="steps"
            @click:next="onNext"
            @click:previous="onPrevious"
          >
            <template #[activeStep.step]>
              <slot :name="activeStep.step"></slot>
            </template>
          </StepperContent>
        </div>
      </li>
    </ul>

    <template v-if="props.direction === 'horizontal'">
      <StepperContent
        v-if="activeStep?.content"
        :active-index="activeStepIndex"
        :hide-buttons="hideButtons"
        :next-button-properties="nextButtonProperties"
        :previous-button-properties="previousButtonProperties"
        :steps="steps"
        @click:next="onNext"
        @click:previous="onPrevious"
      >
        <template #[activeStep.step]>
          <slot :name="activeStep.step"></slot>
        </template>
      </StepperContent>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  name: "Stepper",
};
</script>

<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";

import StepperContent from "./_components/StepperContent.vue";

import type { ActionButtonProperties, StepProperties } from "../types/stepper";
import type { PropType } from "vue";

type AlignType = "start" | "center" | "end";

const props = defineProps({
  activeIndex: {
    default: undefined,
    type: Number,
  },
  align: {
    default: "start",
    type: String as PropType<AlignType>,
    validator: (value: string) => {
      return ["start", "center", "end"].includes(value);
    },
  },
  direction: {
    default: "horizontal",
    type: String as PropType<"horizontal" | "vertical">,
    validator: (value: string) => {
      return ["horizontal", "vertical"].includes(value);
    },
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

const emit = defineEmits(["complete", "update:activeIndex"]);

const activeStepIndex = ref<number>(0);

const activeStep = computed(() => {
  return props.steps[activeStepIndex.value];
});

watchEffect(() => {
  if (props.activeIndex !== undefined && props.activeIndex !== null) {
    activeStepIndex.value = props.activeIndex;
  }
});

const onNext = () => {
  if (props.hideButtons) {
    return;
  }

  if (activeStepIndex.value < props.steps.length - 1) {
    activeStepIndex.value++;
    emit("update:activeIndex", activeStepIndex.value);
  } else {
    emit("complete");
  }
};

const onPrevious = () => {
  if (props.hideButtons) {
    return;
  }

  if (activeStepIndex.value > 0) {
    activeStepIndex.value--;
    emit("update:activeIndex", activeStepIndex.value);
  }
};

defineExpose({
  activeStepIndex,
  onNext,
  onPrevious,
});
</script>

<style lang="css">
@import "@/assets/css/stepper.css";
</style>

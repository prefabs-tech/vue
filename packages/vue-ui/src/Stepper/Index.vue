<template>
  <div class="stepper">
    <ul class="steps">
      <li
        v-for="(stepItem, index) in steps"
        :key="index"
        :class="[
          'step',
          { active: index === activeIndex, completed: index < activeIndex },
        ]"
      >
        <span
          :class="[
            'step-number',
            { active: index === activeIndex, completed: index < activeIndex },
          ]"
        >
          <template v-if="index < activeIndex">
            <img src="../assets/svg/tick-mark.svg" />
          </template>
          <template v-else>
            {{ stepItem.step || index + 1 }}
          </template>
        </span>
        <span
          v-if="stepItem.label"
          class="step-label"
          :class="{ active: index === activeIndex }"
        >
          {{ stepItem.label }}
        </span>
      </li>
    </ul>

    <template v-for="(stepItem, index) in steps" :key="index">
      <slot :name="stepItem.label">
        <span v-if="index === activeIndex && stepItem.content">
          {{ stepItem.content }}
        </span>
      </slot>
    </template>

    <div class="actions">
      <ButtonElement
        :disabled="disablePrevious"
        label="Previous"
        variant="outlined"
        @click="onPrevious"
      />
      <ButtonElement
        :disabled="disableNext"
        :label="activeIndex === steps.length - 1 ? 'Finish' : 'Next'"
        :severity="activeIndex === steps.length - 1 ? 'success' : 'primary'"
        @click="onNext"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Stepper",
};
</script>

<script setup lang="ts">
import { ref } from "vue";

import { ButtonElement } from "../index";

import type { StepProperties } from "../types/stepper";
import type { PropType } from "vue";

const props = defineProps({
  steps: {
    type: Array as PropType<StepProperties[]>,
    required: true,
  },
});

const emit = defineEmits(["complete"]);

const activeIndex = ref<number>(0);
const disablePrevious = ref<boolean>(true);
const disableNext = ref<boolean>(false);

const onNext = () => {
  if (activeIndex.value < props.steps.length - 1) {
    activeIndex.value++;
    disablePrevious.value = false;
  } else {
    emit("complete");
  }
};

const onPrevious = () => {
  if (activeIndex.value > 0) {
    activeIndex.value--;
    disableNext.value = false;
  }

  if (!activeIndex.value) {
    disablePrevious.value = true;
  }
};
</script>

<style lang="css" scoped>
@import "@/assets/css/stepper.css";
</style>

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

    <div class="actions">
      <ButtonElement label="Previous" variant="outlined" @click="onPrevious" />
      <ButtonElement label="Next" @click="onNext" />
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

const activeIndex = ref<number>(0);

const onNext = () => {
  if (activeIndex.value < props.steps.length - 1) {
    activeIndex.value++;
  }
};

const onPrevious = () => {
  if (activeIndex.value > 0) {
    activeIndex.value--;
  }
};
</script>

<style lang="css">
.stepper {
  position: relative;
}

.stepper .actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.steps {
  display: flex;
  justify-content: space-between;
}

.steps::after {
  border-top: 1px solid #b5b5b5;
  content: " ";
  display: block;
  left: 5%;
  position: absolute;
  top: 20%;
  width: 90%;
  z-index: 0;
}

.step {
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
}

.step-number {
  display: inline-block;
  background-color: #fff;
  border: 1px solid #b5b5b5;
  border-radius: 2rem;
  margin: 0.25rem;
  margin-bottom: 0.8rem;
  padding: 0.9rem 1.2rem;
  z-index: 1;
}

.step-number.active {
  background-color: blue;
  color: #fff;
}

.step-label.active {
  font-weight: bold;
}
.step-number.completed {
  border-color: #007aff;
  padding: 0.9rem;
}

.step.active .step-number {
  font-weight: bold;
}
</style>

<template>
  <div
    aria-label="ariaLabel"
    class="tooltip-container"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
    @click="toggleTooltip"
  >
    <div :class="{ clickable: clickable }" class="tooltip-trigger">
      <slot />
    </div>
    <div v-if="isVisible || showContent" :class="['tooltip-box', position]">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Tooltip",
};
</script>

<script setup lang="ts">
import { computed, ref, useSlots } from "vue";

const slots = useSlots();

const props = defineProps({
  ariaLabel: {
    default: "tooltip",
    type: String,
  },
  clickable: {
    type: Boolean,
    default: false,
  },
  delay: {
    type: Number,
    default: 100,
  },
  position: {
    type: String,
    default: "top",
    validator(value: string) {
      return ["top", "bottom", "left", "right"].includes(value);
    },
  },
});

const isVisible = ref<boolean>(false);
const showContent = ref<boolean>(false);
const timerId = ref<ReturnType<typeof setTimeout> | null>(null);

const hasContentSlot = computed(() => !!slots.content);

const showTooltip = () => {
  if (hasContentSlot.value) {
    if (timerId.value) {
      clearTimeout(timerId.value);
    }

    timerId.value = setTimeout(() => {
      isVisible.value = true;
    }, props.delay);
  }
};

const toggleTooltip = () => {
  if (hasContentSlot.value && props.clickable) {
    showContent.value = !showContent.value;
  }
};

const hideTooltip = () => {
  if (timerId.value) {
    clearTimeout(timerId.value);
  }

  isVisible.value = false;
};
</script>

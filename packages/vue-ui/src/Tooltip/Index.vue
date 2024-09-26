<template>
  <div
    class="tooltip-container"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
    @click="toggleTooltip"
  >
    <div class="tooltip-trigger">
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
  position: {
    type: String,
    default: "top",
    validator(value: string) {
      return ["top", "bottom", "left", "right"].includes(value);
    },
  },
  clickable: {
    type: Boolean,
    default: false,
  },
});

const isVisible = ref<boolean>(false);
const showContent = ref<boolean>(false);

const hasContentSlot = computed(() => !!slots.content);

const showTooltip = () => {
  if (hasContentSlot.value) {
    isVisible.value = true;
  }
};

const toggleTooltip = () => {
  if (hasContentSlot.value && props.clickable) {
    showContent.value = !showContent.value;
  }
};

const hideTooltip = () => {
  isVisible.value = false;
};
</script>

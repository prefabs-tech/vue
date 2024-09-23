<template>
  <div
    class="tooltip-container"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
  >
    <div class="tooltip-trigger">
      <slot />
    </div>
    <div v-if="isVisible" :class="['tooltip-box', position]">
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

defineProps({
  position: {
    type: String,
    default: "top",
    validator(value: string) {
      return ["top", "bottom", "left", "right"].includes(value);
    },
  },
});

const isVisible = ref<boolean>(false);

const hasContentSlot = computed(() => !!slots.content);

const showTooltip = () => {
  if (hasContentSlot.value) {
    isVisible.value = true;
  }
};

const hideTooltip = () => {
  isVisible.value = false;
};
</script>

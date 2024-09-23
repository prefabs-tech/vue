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

<style lang="css">
.tooltip-box {
  background-color: #333;
  border-radius: 4px;
  color: #fff;
  padding: 8px;
  position: absolute;
  white-space: nowrap;
  z-index: 1000;
}

.tooltip-box::after {
  border-style: solid;
  border-width: 5px;
  content: " ";
  position: absolute;
}

.tooltip-box.bottom {
  left: 50%;
  top: calc(100% + 5px);
  transform: translateX(-50%);
}

.tooltip-box.left {
  right: calc(100% + 5px);
  top: 50%;
  transform: translateY(-50%);
}

.tooltip-box.right {
  left: calc(100% + 5px);
  top: 50%;
  transform: translateY(-50%);
}

.tooltip-box.top {
  bottom: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-box.bottom::after {
  border-color: transparent transparent #a782e8 transparent;
  bottom: 100%;
  left: 50%;
}

.tooltip-box.left::after {
  border-color: transparent transparent transparent #a782e8;
  left: 100%;
  top: 35%;
}

.tooltip-box.right::after {
  border-color: transparent #a782e8 transparent transparent;
  right: 100%;
  top: 35%;
}

.tooltip-box.top::after {
  border-color: #a782e8 transparent transparent transparent;
  left: 50%;
  top: 100%;
}

.tooltip-container {
  display: inline-block;
  position: relative;
  width: max-content;
}

.tooltip-trigger {
  position: relative;
}
</style>

<template>
  <div v-if="!isMobile" class="toolbar">
    <slot></slot>
  </div>
  <div v-else class="speed-dial" :class="speedDialDirection">
    <slot v-if="showSpeedDial"></slot>
    <button
      :class="{ rotate: showSpeedDial }"
      class="toggle-speed-dial"
      @click="toggleSpeedDial"
    ></button>
  </div>
</template>

<script lang="ts">
export default {
  name: "ToolBar",
};
</script>

<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import { computed, ref } from "vue";

import type { PropType } from "vue";

const props = defineProps({
  speedDialDirection: {
    default: "vertical",
    required: false,
    type: String as PropType<"vertical" | "horizontal">,
  },
  speedDialBreakPoint: {
    default: 576,
    required: false,
    type: Number as PropType<number>,
  },
});

const { width } = useWindowSize();
const showSpeedDial = ref(false);

const isMobile = computed(() => {
  if (width.value <= props.speedDialBreakPoint) {
    return true;
  }
  return false;
});

const toggleSpeedDial = () => {
  showSpeedDial.value = !showSpeedDial.value;
};
</script>

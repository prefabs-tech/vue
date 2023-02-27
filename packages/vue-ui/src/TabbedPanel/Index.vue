<template>
  <div v-if="$slots.default" class="tabbed-panel" :class="props.position">
    <div role="tablist">
      <button
        v-for="(slot, index) in $slots.default()"
        :key="index"
        type="button"
        :class="{ active: index === active }"
        @click="handleClick(index)"
      >
        <img :src="slot.props?.icon" />
        <span>{{ slot.props?.title }}</span>
      </button>
    </div>

    <component :is="activeSlot" />
  </div>
</template>

<script lang="ts">
export default {
  name: "TabbedPanel",
};
</script>

<script lang="ts" setup>
import { computed, ref, useSlots } from "vue";

import type { PropType } from "vue";

const slots = useSlots();

const props = defineProps({
  position: {
    default: "top",
    required: false,
    type: String as PropType<"bottom" | "left" | "right" | "top">,
  },
});

const active = ref();

const activeSlot = computed(() => {
  return slots.default?.()[active.value];
});

const handleClick = (index: number) => {
  if (active.value !== index) {
    active.value = index;
  } else {
    active.value = -1;
  }
};
</script>

<style scoped>
.tabbed-panel {
  display: flex;
  flex-direction: column;
}

.tabbed-panel.bottom {
  flex-direction: column-reverse;
}

.tabbed-panel.left {
  flex-direction: row;
}

.tabbed-panel.left > div[role="tablist"],
.tabbed-panel.right > div[role="tablist"] {
  display: flex;
  flex-direction: column;
}

.tabbed-panel.right {
  flex-direction: row-reverse;
}
</style>

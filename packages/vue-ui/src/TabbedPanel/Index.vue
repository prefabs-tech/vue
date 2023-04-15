<template>
  <div
    v-if="filteredSlots"
    class="tabbed-panel"
    :data-position="props.position"
  >
    <nav>
      <ul role="tablist">
        <li
          v-for="(slot, index) in filteredSlots"
          :key="index"
          :data-selected="index === active"
        >
          <button
            :aria-expanded="index === active"
            tabindex="0"
            type="button"
            @click="handleClick(index)"
          >
            <img
              v-if="slot?.props?.icon"
              :src="slot?.props?.icon"
              class="icon"
            />
            <span>{{ slot.props?.title }}</span>
          </button>
        </li>
      </ul>
    </nav>

    <Transition appear name="expand">
      <div class="tabbed-pane" role="region">
        <component :is="activeSlot" />
      </div>
    </Transition>
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
  defaultIndex: {
    default: 0,
    required: false,
    type: Number,
  },
  position: {
    default: "top",
    required: false,
    type: String as PropType<"bottom" | "left" | "right" | "top">,
  },
});

const active = ref(props.defaultIndex);

const handleClick = (index: number) => {
  active.value = index;
};

const activeSlot = computed(() => {
  return slots.default?.()[active.value];
});

const filteredSlots = slots?.default
  ? slots.default().filter((slot) => {
      return slot?.props?.title;
    })
  : null;
</script>

<template>
  <div
    v-if="filteredSlots"
    :class="['accordion', props.direction]"
    :aria-orientation="props.direction"
  >
    <section
      v-for="(slot, index) in filteredSlots"
      :key="index"
      :data-expanded="index === active"
    >
      <header>
        <button
          tabindex="0"
          type="button"
          :aria-expanded="index === active ? true : false"
          @click="handleClick(index)"
        >
          <img v-if="slot?.props?.icon" :src="slot.props.icon" class="icon" />
          <span>{{ slot?.props?.title }}</span>
        </button>
      </header>
      <div
        v-show="index === active"
        class="pane"
        role="region"
      >
        <component :is="slot" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  name: "Accordion",
};
</script>

<script lang="ts" setup>
import { ref, useSlots } from "vue";

import type { PropType } from "vue";

const props = defineProps({
  canSelfCollapse: {
    default: false,
    required: false,
    type: Boolean,
  },
  defaultIndex: {
    default: 0,
    required: false,
    type: Number,
  },
  direction: {
    default: "vertical",
    required: false,
    type: String as PropType<"vertical" | "horizontal">,
  },
});

const active = ref(props.defaultIndex);

const handleClick = (index: number) => {
  if (!props.canSelfCollapse || active.value !== index) {
    active.value = index;
  } else {
    active.value = -1;
  }
};

const slots = useSlots();

const filteredSlots = slots?.default
  ? slots.default().filter((slot) => {
      return slot?.props?.title;
    })
  : null;
</script>

<template>
  <div
    v-if="filteredSlots"
    :class="['accordion', props.direction]"
    :aria-orientation="props.direction"
  >
    <section
      v-for="(slot, index) in filteredSlots"
      :key="index"
      :class="{ active: index === active }"
      :aria-expanded="index === active ? true : false"
    >
      <header>
        <button tabindex="0" type="button" @click="handleClick(index)">
          <span>{{ slot?.props?.title }}</span>
        </button>
      </header>
      <div class="pane" role="region">
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
  activeIcon: {
    default: "",
    required: false,
    type: String,
  },
  canSelfCollapse: {
    default: false,
    required: false,
    type: Boolean,
  },
  defaultIndex: {
    default: -1,
    required: false,
    type: Number,
  },
  direction: {
    default: "vertical",
    required: false,
    type: String as PropType<"vertical" | "horizontal">,
  },
  inactiveIcon: {
    default: "",
    required: false,
    type: String,
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

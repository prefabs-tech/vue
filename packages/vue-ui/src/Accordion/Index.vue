<template>
  <ul
    v-if="$slots.default"
    :class="props.direction"
    :aria-orientation="props.direction"
    class="accordion"
  >
    <li
      v-for="(slot, index) in $slots.default()"
      :key="index"
      :class="{ active: index === active }"
    >
      <button
        v-if="slot.props?.title"
        type="button"
        class="accordion-button"
        @click="handleClick(index)"
      >
        <img :src="slot.props.icon" class="subpane-icon" />
        <span>{{ slot.props.title }}</span>

        <slot name="toggle-icon">
          <img
            :src="index === active ? props.activeIcon : props.inactiveIcon"
            class="toggle-icon"
          />
        </slot>
      </button>

      <div v-if="index === active" class="subpane-wrapper">
        <component :is="slot" />
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: "Accordion",
};
</script>

<script lang="ts" setup>
import { ref } from "vue";

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
</script>

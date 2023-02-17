<template>
  <slot name="title"></slot>
  <ul
    v-if="$slots.default"
    :class="props.direction"
    :aria-orientation="props.direction"
    class="accordion"
  >
    <li
      v-for="(slot, index) in $slots.default()"
      :key="index"
      :class="{ active: index === props.defaultIndex }"
    >
      <button type="button" @click="handleClick(index)">
        <img v-if="slot.props?.icon" :src="slot.props.icon" />
        <span>{{ slot.props ? slot.props.title : "" }}</span>

        <img
          v-if="props.activeIcon"
          :src="index === active ? props.activeIcon : props.inactiveIcon"
        />
      </button>

      <div v-if="index === active">
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
    default: 0,
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

<style scoped>
.accordion {
  display: flex;
  list-style-type: none;
  margin: 0rem;
  padding: 0rem;
}

.accordion > li {
  display: flex;
}

.accordion > li > button {
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  padding: 1rem;
  width: 100%;
}

.accordion.horizontal > li > button {
  flex-direction: column;
}

.accordion.horizontal {
  align-items: stretch;
  flex-direction: row;
}

.accordion.horizontal > li {
  flex-direction: row;
}

.accordion.horizontal > li > button {
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  transform: rotate(180deg);
  width: auto;
}

.accordion.horizontal > li > button > span {
  text-orientation: sideways-right;
  writing-mode: vertical-rl;
}

.accordion.horizontal > li > button > img:first-child {
  transform: rotate(90deg);
}

.accordion.horizontal > li > button > img:last-child {
  transform: rotate(270deg);
}

.accordion.vertical,
.accordion.vertical > li {
  flex-direction: column;
  width: 100%;
}

.accordion.vertical > li > button > img:last-child {
  margin-left: auto;
}
</style>

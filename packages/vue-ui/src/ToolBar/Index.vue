<template>
  <div v-if="!isMobile" class="toolbar">
    <button
      v-for="button in buttons"
      :key="button.text"
      :class="button.class"
      @click="button.action"
    >
      {{ button.text }}
    </button>
  </div>
  <div v-else class="speed-dial quarter-circle" :class="speedDialDirection">
    <div v-if="showSpeedDial" class="speed-dial-elements">
      <button
        v-for="button in buttons"
        :key="button.text"
        :class="button.class"
        @click="button.action"
      >
        {{ button.text }}
      </button>
    </div>
    <button
      :class="{ rotate: showSpeedDial }"
      class="toggle-speed-dial"
      @click="toggleSpeedDial"
    ></button>
  </div>
</template>

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

const emit = defineEmits(["add", "delete"]);

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

const add = () => {
  emit("add");
};

const back = () => {
  window.history.back();
};

const remove = () => {
  emit("delete");
};

const reload = () => {
  window.location.reload();
};

const buttons = [
  {
    action: back,
    class: "back",
    text: "back",
  },
  {
    action: reload,
    class: "reload",
    text: "reload",
  },
  {
    action: add,
    class: "add",
    text: "add",
  },
  {
    action: remove,
    class: "delete",
    text: "delete",
  },
];
</script>

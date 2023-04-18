<template>
  <div class="page">
    <h1 v-if="title">
      {{ title }}
      <small v-if="subTitle">{{ subTitle }}</small>
    </h1>

    <div v-if="!isMobile" class="toolbar">
      <slot name="toolbar"></slot>
    </div>
    <div v-else class="speed-dial" @click="toggleSpeedDial">
      <slot v-if="showSpeedDial" name="toolbar"></slot>
      <button
        :class="{ rotate: showSpeedDial }"
        class="toggle-speed-dial"
      ></button>
    </div>

    <main>
      <slot name="default"></slot>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  name: "Page",
};
</script>

<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import { computed, onMounted, ref, useSlots } from "vue";

import type { PropType } from "vue";

defineProps({
  subTitle: {
    default: undefined,
    required: false,
    type: String as PropType<string>,
  },
  title: {
    default: undefined,
    required: false,
    type: String as PropType<string>,
  },
});

const slots = useSlots();
const { width } = useWindowSize();

const showSpeedDial = ref(false);

onMounted(() => {
  if (slots?.toolbar) {
    console.log(slots?.toolbar().map((slot) => slot));
  }
});

const isMobile = computed(() => {
  if (width.value <= 600) {
    return true;
  }
  return false;
});

const toggleSpeedDial = () => {
  showSpeedDial.value = !showSpeedDial.value;
};
</script>

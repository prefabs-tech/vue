<template>
  <component :is="layoutComponent">
    <slot></slot>
    <template v-for="name in slotNames" #[name]>
      <slot :name="name"></slot>
    </template>
  </component>
</template>

<script lang="ts">
const NullLayout = defineAsyncComponent({
  loader: () => import("./layouts/NullLayout.vue"),
  timeout: 3000,
});

export default {
  name: "Layout",
};
</script>

<script setup lang="ts">
import {
  defineAsyncComponent,
  computed,
  markRaw,
  shallowRef,
  useSlots,
  watch,
} from "vue";
import { useRoute } from "vue-router";

import type { LayoutType } from "./types";

const props = defineProps({
  defaultLayout: {
    default: NullLayout,
    type: Object,
  },
});

const route = useRoute();

const slots = useSlots();
const slotNames = Object.keys(slots) as string[];

let layout = shallowRef(props.defaultLayout);

const layoutComponent = computed(() => markRaw(layout.value as object));

watch(
  () => route.meta,
  async (meta) => {
    if (meta?.layout) {
      try {
        layout.value = meta.layout as LayoutType;
      } catch {
        layout.value = props.defaultLayout;
      }
    } else {
      layout.value = props.defaultLayout;
    }
  },
);
</script>

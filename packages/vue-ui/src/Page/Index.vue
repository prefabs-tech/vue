<template>
  <div class="page">
    <h1 v-if="title">
      {{ title }}
      <small v-if="subTitle">{{ subTitle }}</small>
    </h1>

    <div class="toolbar">
      <slot name="toolbar"></slot>
    </div>

    <div class="page-content">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Page",
};
</script>

<script setup lang="ts">
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
</script>

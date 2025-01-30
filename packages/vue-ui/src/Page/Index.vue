<template>
  <div class="page" :data-centered="centered">
    <div class="page-header">
      <div class="page-title-wrapper">
        <component :is="titleElement" v-if="title" class="title">
          {{ title }}

          <slot name="titleTag">
            <span v-if="titleTag" class="title-tag">
              <BadgeComponent :label="titleTag" />
            </span>
          </slot>
        </component>

        <slot name="subtitle">
          <small v-if="subTitle">{{ subTitle }}</small>
        </slot>
      </div>

      <div class="page-toolbar">
        <slot name="toolbar"></slot>
      </div>
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
import BadgeComponent from "../Badge/Index.vue";

import type { PropType } from "vue";

defineProps({
  centered: Boolean,
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
  titleElement: {
    default: "h1",
    type: String,
    validator: (value: string) =>
      ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value),
  },
  titleTag: {
    default: undefined,
    type: String,
  },
});
</script>

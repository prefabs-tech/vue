<template>
  <div class="page" :data-centered="centered">
    <div class="page-header">
      <div class="page-title-wrapper">
        <div class="title">
          <component :is="titleElement" v-if="title">
            {{ title }}
          </component>

          <slot name="titleTag">
            <span v-if="titleTag" class="title-tag">
              <BadgeComponent :label="titleTag" />
            </span>
          </slot>
        </div>

        <slot name="subtitle">
          <small v-if="subTitle">{{ subTitle }}</small>
        </slot>
      </div>

      <div class="page-toolbar">
        <slot name="toolbar">
          <template v-if="toolbarActionMenu?.length && !isLargeScreen">
            <Dropdown
              v-if="toolbarActionMenu?.length > 1"
              :menu="toolbarActionMenu"
            />

            <ButtonElement v-else v-bind="toolbarActionMenu[0]" />
          </template>
          <template v-else-if="toolbarActionMenu?.length">
            <template
              v-for="(actionMenu, index) in toolbarActionMenu"
              :key="`${actionMenu?.label}-${index}`"
            >
              <ButtonElement
                v-if="actionMenu.display !== false"
                v-bind="actionMenu"
                :icon-left="String(actionMenu?.icon ?? actionMenu?.iconLeft)"
              />
            </template>
          </template>
        </slot>
      </div>
    </div>

    <div class="page-content">
      <slot name="default"></slot>

      <LoadingPage :loading="loading" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Page",
};
</script>

<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import { computed } from "vue";

import BadgeComponent from "../Badge/Index.vue";
import ButtonElement from "../Button/Index.vue";
import Dropdown from "../Dropdown/Index.vue";
import LoadingPage from "../LoadingPage/Index.vue";

import type { ActionMenuItem } from "../types/page";
import type { PropType } from "vue";

const { width: windowWidth } = useWindowSize();

defineProps({
  centered: Boolean,
  loading: Boolean,
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
  toolbarActionMenu: {
    default: () => [],
    type: Array as PropType<ActionMenuItem[]>,
  },
});

const isLargeScreen = computed(() => windowWidth.value > 576);
</script>

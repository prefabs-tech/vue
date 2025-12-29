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
          <small v-if="subtitle">{{ subtitle }}</small>
        </slot>
      </div>

      <div class="page-toolbar">
        <slot name="toolbar">
          <template v-if="visibleActions?.length && !isLargeScreen">
            <Dropdown
              v-if="visibleActions?.length > 1"
              :menu="visibleActions"
              @select="onActionClick($event)"
            />

            <ButtonElement
              v-else
              v-bind="visibleActions[0]"
              :icon-left="
                String(visibleActions[0]?.icon ?? visibleActions[0]?.iconLeft)
              "
              @click="onActionClick(visibleActions[0])"
            />
          </template>
          <template v-else-if="visibleActions?.length">
            <ButtonElement
              v-for="(actionMenu, index) in visibleActions"
              v-bind="actionMenu"
              :key="`${actionMenu?.label}-${index}`"
              :icon-left="String(actionMenu?.icon ?? actionMenu?.iconLeft)"
              @click="onActionClick(actionMenu)"
            />
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

import type { ToolbarActionMenu } from "../types/page";
import type { PropType } from "vue";

const { width: windowWidth } = useWindowSize();

const props = defineProps({
  centered: Boolean,
  loading: Boolean,
  subtitle: {
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
  toolbarActionsMenu: {
    default: () => [],
    type: Array as PropType<ToolbarActionMenu[]>,
  },
});

const emit = defineEmits(["action:click"]);

const isLargeScreen = computed(() => windowWidth.value > 576);

const visibleActions = computed(() =>
  props.toolbarActionsMenu.filter((action) => action.display !== false),
);

const onActionClick = (actionMenu: ToolbarActionMenu) => {
  emit("action:click", actionMenu);
};
</script>

<template>
  <Popup ref="popup" class="dropdown-menu" position="bottom" tabindex="0">
    <div
      :aria-label="(label ?? '') + ' dropdown'"
      :class="{ triggered: popup?.isVisible }"
      class="dropdown-menu-trigger"
    >
      <slot>
        <template v-if="label">
          <span>{{ label }}</span>

          <svg
            class="dropdown-icon"
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke-width="0"></g>
            <g stroke-linecap="round" stroke-linejoin="round"></g>
            <g>
              <path
                d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                fill="#0F0F0F"
              ></path>
            </g>
          </svg>
        </template>
        <svg
          v-else
          fill="#0f0f0f"
          height="1.5rem"
          stroke="#0f0f0f"
          width="1.5rem"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1792 1792"
        >
          <g stroke-width="0"></g>
          <g stroke-linecap="round" stroke-linejoin="round"></g>
          <g>
            <circle cx="321.4" cy="896.2" r="171.2"></circle>
            <circle cx="898.3" cy="896.2" r="171.2"></circle>
            <circle cx="1469" cy="896.2" r="171.2"></circle>
          </g>
        </svg>
      </slot>
    </div>

    <template #content>
      <ul
        class="dropdown-menu"
        :aria-label="label + 'dropdown menu'"
        tabindex="0"
      >
        <li
          v-for="menuItem in filteredMenu"
          :key="menuItem.label"
          :aria-disabled="menuItem.disabled ? 'true' : 'false'"
          :class="[{ disabled: menuItem.disabled }, menuItem.class]"
          class="menu-item"
          tabindex="0"
          @click="onSelect(menuItem)"
        >
          <span class="menu-item">
            <slot name="`icon-${menuItem.key}`">
              <i :class="menuItem.icon" />
            </slot>
            {{ menuItem.label }}
          </span>
        </li>
      </ul>
    </template>
  </Popup>
</template>

<script lang="ts">
export default {
  name: "Dropdown",
};
</script>

<script setup lang="ts">
import { computed, ref } from "vue";

import Popup from "../Popup/Index.vue";

import type { DropdownMenu } from "../types";
import type { PropType } from "vue";

const props = defineProps({
  icon: {
    default: undefined,
    type: String,
  },
  label: {
    type: String,
    default: null,
  },
  menu: {
    required: true,
    type: Array as PropType<DropdownMenu[]>,
  },
});

const emit = defineEmits(["select"]);

const popup = ref();

const filteredMenu = computed(() =>
  props.menu.filter((item: DropdownMenu) => item.display !== false),
);

const onSelect = (item: DropdownMenu) => {
  if (!item.disabled) {
    emit("select", item);

    popup.value.isVisible = false;
  }
};
</script>

<style lang="css"></style>

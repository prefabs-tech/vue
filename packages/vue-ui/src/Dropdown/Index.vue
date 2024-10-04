<template>
  <div class="dropdown">
    <Popup ref="popup" position="bottom">
      <div :class="{ triggered: popup?.isVisible }" class="dropdown-trigger">
        <slot>
          <label v-if="label" for="dropdown">
            {{ label }}

            <svg
              :class="['caret', caretClass]"
              width="1.2rem"
              height="1.2rem"
              viewBox="0 0 24 24"
              fill="none"
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
          </label>
          <svg
            v-else
            fill="#0f0f0f"
            height="2.5rem"
            width="2.5rem"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1792 1792"
            xml:space="preserve"
            stroke="#0f0f0f"
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
        <slot name="content">
          <ul>
            <li
              v-for="menuItem in menu"
              :key="menuItem.label"
              :class="{ disabled: menuItem.disabled }"
              class="menu-item"
              @click="onSelect(menuItem)"
            >
              {{ menuItem.label }}
            </li>
          </ul>
        </slot>
      </template>
    </Popup>
  </div>
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

defineProps({
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

const caretClass = computed(() => {
  if (popup.value?.isVisible) {
    return "caret-down";
  } else {
    return "caret-up";
  }
});

const onSelect = (item: DropdownMenu) => {
  if (!item.disabled) {
    emit("select", item.value);

    popup.value.togglePopup();
  }
};
</script>

<style lang="css"></style>

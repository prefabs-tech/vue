<template>
  <div :class="{ 'multiple-mode': multiple }" class="multiselect">
    <div @click="toggleDropdown" class="multiselect-input">
      <span v-if="!selectedOptions.length">{{ placeholder }}</span>
      <span v-else>
        <span
          v-for="selectedOption in selectedOptions"
          :key="selectedOption.label"
          class="selected-option"
          >{{ selectedOption.label }}</span
        >
      </span>
    </div>
    <ul v-if="showDropdownMenu" class="multiselect-dropdown">
      <li
        v-for="option in options"
        :key="option.label"
        @click="selectOption(option)"
        class="multiselect-option"
        :class="{ selected: isSelected(option) }"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from "vue";

import type { SelectOption } from "../types";
import type { PropType, Ref } from "vue";

const props = defineProps({
  multiple: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array as PropType<SelectOption[]>,
    required: true,
  },
  placeholder: {
    default: "Select value",
    type: String,
  },
});

const { options, multiple, placeholder } = toRefs(props);
const selectedOptions: Ref<SelectOption[]> = ref([]);
const showDropdownMenu: Ref<boolean> = ref(false);

const isSelected = (option: SelectOption) =>
  selectedOptions.value.includes(option);

const selectOption = (option: SelectOption) => {
  const index = selectedOptions.value.findIndex(
    (i) => i.value === option.value
  );

  if (multiple.value) {
    if (index > -1) {
      selectedOptions.value.splice(index, 1);
    } else {
      selectedOptions.value.push(option);
    }
  } else {
    selectedOptions.value = [option];
    showDropdownMenu.value = false;
  }
};

const toggleDropdown = () => {
  showDropdownMenu.value = !showDropdownMenu.value;
};
</script>

<style lang="css" scoped>
.multiselect {
  position: relative;
  display: inline-block;
  width: 100%;
}

.multiple-mode.multiselect .selected-option {
  background-color: rgb(215, 194, 253);
  border-radius: 2rem;
  margin-right: 0.25rem;
  padding: 0.25rem 0.6rem;
}

.multiselect-input {
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  user-select: none;
}
.multiselect-dropdown {
  position: absolute;
  width: 100%;
  border: 1px solid #ccc;
  border-top: none;
  background-color: #fff;
  z-index: 1000;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.multiselect-option {
  padding: 10px;
  cursor: pointer;
}
.multiselect-option.selected {
  background-color: #007bff;
  color: white;
}
</style>

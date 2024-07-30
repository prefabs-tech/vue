<template>
  <div
    :class="{ 'multiple-mode': multiple }"
    class="multiselect"
    ref="dzangolabVueFormSelect"
  >
    <div @click="toggleDropdown" class="multiselect-input">
      <span v-if="!selectedOptions.length">{{ placeholder }}</span>
      <span v-else>
        <span
          v-for="selectedOption in selectedOptions"
          :key="selectedOption.label"
          class="selected-option"
          >{{ selectedOption.label }}
        </span>
      </span>
    </div>
    <ul v-if="showDropdownMenu" class="multiselect-dropdown">
      <li
        v-for="option in options"
        :key="option.label"
        class="multiselect-option"
        :class="{ selected: isSelected(option) }"
        @click="onSelect(option)"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { onMounted, ref, toRefs } from "vue";

import type { SelectOption } from "../types";
import type { PropType, Ref } from "vue";

const props = defineProps({
  modelValue: {
    type: [Number, String, Array] as PropType<
      number | string | (number | string)[]
    >,
    required: false,
  },
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

const emit = defineEmits(["update:modelValue"]);

const { options, multiple, placeholder } = toRefs(props);
const dzangolabVueFormSelect = ref(null);
const selectedOptions: Ref<SelectOption[]> = ref([]);
const showDropdownMenu: Ref<boolean> = ref(false);

onClickOutside(dzangolabVueFormSelect, (event) => {
  showDropdownMenu.value = false;
});

const getSelectedOption = (value: number | string) =>
  options.value?.find((option) => option.value === value);

const isSelected = (option: SelectOption): boolean =>
  selectedOptions.value.some(
    (selectedOption) => selectedOption.value === option.value
  );

const onSelect = (option: SelectOption) => {
  const index = selectedOptions.value.findIndex(
    (i) => i.value === option.value
  );

  if (multiple.value) {
    if (index > -1) {
      selectedOptions.value.splice(index, 1);
    } else {
      selectedOptions.value.push(option);
    }

    const selectedValues = selectedOptions.value?.map(
      (selectedOption) => selectedOption.value
    );

    emit("update:modelValue", selectedValues);
  } else {
    selectedOptions.value = [option];
    showDropdownMenu.value = false;

    emit("update:modelValue", option.value);
  }
};

const toggleDropdown = () => {
  showDropdownMenu.value = !showDropdownMenu.value;
};

onMounted(() => {
  if (multiple.value && Array.isArray(props.modelValue)) {
    selectedOptions.value = props.modelValue.map((value) => {
      return getSelectedOption(value as string | number);
    }) as SelectOption[];
  } else if (props.modelValue && !Array.isArray(props.modelValue)) {
    selectedOptions.value = [
      getSelectedOption(props.modelValue),
    ] as SelectOption[];
  }
});
</script>

<style lang="css" scoped>
.multiselect {
  position: relative;
  display: inline-block;
  width: 100%;
}

.multiple-mode.multiselect .selected-option {
  background-color: var(--multiselect-tag-color, rgb(215, 194, 253));
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

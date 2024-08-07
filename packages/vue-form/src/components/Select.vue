<template>
  <div
    ref="dzangolabVueFormSelect"
    :class="{ 'multiple-mode': multiple }"
    class="multiselect"
  >
    <label v-if="label" for="multiselect">
      {{ label }}
    </label>
    <div
      :class="{ disabled: disabled }"
      class="multiselect-input"
      @click="toggleDropdown"
    >
      <span v-if="!selectedOptions.length" class="multiselect-placeholder">{{
        placeholder
      }}</span>
      <span v-else>
        <span
          v-for="selectedOption in selectedOptions"
          :key="selectedOption.label"
          class="selected-option"
          >{{ selectedOption.label }}
        </span>
      </span>
    </div>
    <ul v-if="showDropdownMenu && !disabled" class="multiselect-dropdown">
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

<script lang="ts">
export default {
  name: "MultiSelect",
};
</script>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { onMounted, ref, toRefs } from "vue";

import type { SelectOption } from "../types";
import type { PropType, Ref } from "vue";

const props = defineProps({
  disabled: {
    default: false,
    type: Boolean,
  },
  label: {
    default: "",
    required: false,
    type: String as PropType<string>,
  },
  modelValue: {
    default: () => [],
    required: false,
    type: [Number, String, Array] as PropType<
      number | string | (number | string)[]
    >,
  },
  multiple: {
    default: false,
    type: Boolean,
  },
  options: {
    required: true,
    type: Array as PropType<SelectOption[]>,
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
.multiple-mode.multiselect .selected-option {
  background-color: var(--multiselect-tag-color, rgb(215, 194, 253));
  border-radius: 2rem;
  margin-right: 0.25rem;
  padding: 0.25rem 0.6rem;
}

.multiselect {
  position: relative;
  display: inline-block;
  width: 100%;
}

.multiselect-dropdown {
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  list-style-type: none;
  margin: 0;
  max-height: 10rem;
  overflow-y: scroll;
  padding: 0;
  position: absolute;
  width: 100%;
  z-index: 1000;
}

.multiselect-input {
  padding: 10px;
  border: 1px solid var(--form-input-border-color);
  cursor: pointer;
  user-select: none;
}

.multiselect-input.disabled {
  background: var(--form-input-bg-color-disabled);
  border-color: var(--form-input-border-color-disabled);
  cursor: default;
}

.multiselect-input:focus {
  box-shadow: 0 0 0 0.25rem #32323240;
}

.multiselect.invalid .multiselect-input {
  border-color: var(--color-alert-danger, #dc3545);
}

.multiselect-option {
  padding: 10px;
  cursor: pointer;
}

.multiselect-option.selected {
  background-color: #007bff;
  color: white;
}

.multiselect-placeholder {
  color: #555;
}

.multiselect.valid .multiselect-input {
  border-color: var(--color-alert-success, #198754);
}
</style>

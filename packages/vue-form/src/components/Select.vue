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
      <span v-if="!selectedOptions.length" class="multiselect-placeholder">
        {{ placeholder }}
      </span>
      <span v-else class="selected-options">
        <span
          v-for="selectedOption in selectedOptions"
          :key="selectedOption.label"
          class="selected-option"
          @click="disabled ? '' : onSelect($event, selectedOption)"
        >
          {{ selectedOption.label }}

          <img
            v-if="multiple"
            src="./../assets/svg/x-mark.svg"
            class="remove-option"
          />
        </span>
      </span>
      <span class="menu-trigger">
        <svg
          v-if="!multiple && selectedOptions.length"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          @click.stop="onUnselect"
        >
          <path
            d="M6 6L18 18M18 6L6 18"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g id="Complete">
            <g id="F-Chevron">
              <polyline
                id="down"
                fill="none"
                points="5 8.5 12 15.5 19 8.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </g>
          </g>
        </svg>
      </span>
    </div>
    <ul
      v-if="showDropdownMenu && !disabled"
      class="multiselect-dropdown"
      role="list"
    >
      <DebouncedInput
        v-if="enableSearch"
        v-model="searchInput"
        :placeholder="searchPlaceholder"
      />

      <li v-if="multiple" class="multiselect-option" @click="onSelectAll()">
        <Checkbox
          :model-value="isAllSelected(options)"
          @update:model-value="onMultiSelect()"
        />
        Select all
      </li>
      <li
        v-for="option in sortedOptions"
        :key="option.label"
        class="multiselect-option"
        :class="{ selected: isSelected(option) && !multiple }"
        @click="onSelect($event, option)"
      >
        <Checkbox
          v-if="multiple"
          :model-value="isSelected(option)"
          @update:model-value="onMultiSelect()"
        />
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
import { DebouncedInput } from "@dzangolab/vue3-ui";
import { onClickOutside } from "@vueuse/core";
import { computed, onMounted, ref, toRefs, watch } from "vue";

import Checkbox from "./Checkbox.vue";

import type { SelectOption } from "../types";
import type { PropType, Ref } from "vue";

const props = defineProps({
  disabled: {
    default: false,
    type: Boolean,
  },
  enableSearch: Boolean,
  hasSortedOptions: {
    default: true,
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
  searchPlaceholder: {
    default: undefined,
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

const { options, multiple, placeholder } = toRefs(props);
const dzangolabVueFormSelect = ref(null);
const searchInput: Ref<string | undefined> = ref();
const selectedOptions: Ref<SelectOption[]> = ref([]);
const showDropdownMenu: Ref<boolean> = ref(false);

onClickOutside(dzangolabVueFormSelect, (event) => {
  showDropdownMenu.value = false;
});

watch(
  () => props.modelValue,
  () => {
    prepareComponent();
  },
);

const filteredOptions = computed(() => {
  if (!searchInput.value) {
    return props.options;
  }

  return props.options.filter((option) =>
    option.label
      .toLowerCase()
      .includes(String(searchInput.value).toLowerCase()),
  );
});

const sortedOptions = computed(() => {
  if (props.hasSortedOptions) {
    return filteredOptions.value
      ?.slice()
      .sort((a, b) => a.label.localeCompare(b.label));
  }

  return filteredOptions.value;
});

const getSelectedOption = (value: number | string) =>
  options.value?.find((option) => option.value === value);

const isAllSelected = (options: SelectOption[]): boolean => {
  if (selectedOptions.value.length != options.length) {
    return false;
  }

  return selectedOptions.value.every((selectedOption) =>
    options.includes(selectedOption),
  );
};

const isSelected = (option: SelectOption): boolean =>
  selectedOptions.value.some(
    (selectedOption) => selectedOption.value === option.value,
  );

const onSelect = (event: Event, option: SelectOption) => {
  event.stopPropagation();

  const index = selectedOptions.value.findIndex(
    (i) => i.value === option.value,
  );

  if (multiple.value) {
    if (index > -1) {
      selectedOptions.value.splice(index, 1);
    } else {
      selectedOptions.value.push(option);
    }

    onMultiSelect();
  } else {
    selectedOptions.value = [option];
    showDropdownMenu.value = false;

    emit("update:modelValue", option.value);
  }
};

const onSelectAll = () => {
  const allSelected = isAllSelected(props.options);

  if (allSelected) {
    selectedOptions.value = [];
  } else {
    selectedOptions.value = [...props.options];
  }

  onMultiSelect();
};

const onMultiSelect = () => {
  const selectedValues = selectedOptions.value?.map(
    (selectedOption) => selectedOption.value,
  );

  emit("update:modelValue", selectedValues);
};

const toggleDropdown = () => {
  showDropdownMenu.value = !showDropdownMenu.value;
};

const prepareComponent = () => {
  if (multiple.value && Array.isArray(props.modelValue)) {
    selectedOptions.value = props.modelValue.map((value) => {
      return getSelectedOption(value as string | number);
    }) as SelectOption[];
  } else if (props.modelValue && !Array.isArray(props.modelValue)) {
    selectedOptions.value = [
      getSelectedOption(props.modelValue),
    ] as SelectOption[];
  } else if (!props.modelValue) {
    selectedOptions.value = [];
  }
};

const onUnselect = () => {
  selectedOptions.value = [];

  showDropdownMenu.value = false;
};

onMounted(() => {
  prepareComponent();
});
</script>

<style lang="css">
.multiple-mode.multiselect .selected-option {
  --_multiselect-tag-border-radius: var(--multiselect-tag-border-radius, 2rem);
  --_multiselect-tag-color: var(--multiselect-tag-color, rgb(215, 194, 253));

  align-items: center;
  background-color: var(--_multiselect-tag-color);
  border-radius: var(--_multiselect-tag-border-radius);
  display: flex;
  gap: 0.5em;
  margin-right: 0.25rem;
  padding: 0.25rem 0.6rem;
  width: max-content;
}

.multiselect {
  display: inline-block;
  position: relative;
  width: 100%;
}

.multiselect-dropdown {
  background-color: #fff;
  border-top: none;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  max-height: 10rem;
  overflow-y: scroll;
  padding: 0.75rem 0.65rem;
  position: absolute;
  row-gap: 0.3rem;
  width: 100%;
  z-index: 1000;
}

.multiselect-input {
  --_border-radius: var(--form-input-border-radius, 0.25em);
  --_multiselect-border-color: var(--form-input-border-color, #555);
  --_padding-h: var(--padding-h, 0.75em);
  --_padding-v: var(--form-input-padding-v, 0.65em);
  --_height: var(--form-input-height, 2.8em);

  align-items: center;
  display: flex;
  border: 1px solid var(--_multiselect-border-color);
  border-radius: var(--_border-radius);
  cursor: pointer;
  height: var(--_height);
  justify-content: space-between;
  padding: var(--_padding-v) var(--_padding-h);
  user-select: none;
}

.multiselect-input.disabled {
  background: var(--form-input-bg-color-disabled);
  border-color: var(--form-input-border-color-disabled);
  color: var(--form-input-color-disabled);
  cursor: default;
}

.multiselect-input:focus {
  box-shadow: 0 0 0 0.25rem #32323240;
}

.multiselect.invalid .multiselect-input {
  border-color: var(--color-alert-danger, #dc3545);
}

.multiselect-option {
  border-radius: var(--form-input-border-radius, 0.25em);
  cursor: pointer;
  display: flex;
  gap: 0.5em;
  padding: 10px;
}

.multiselect-option input {
  box-shadow: none;
  height: fit-content;
  width: auto;
}

.multiselect-option.selected,
.multiselect-option:hover {
  --_multiselect-selected-bg-color: var(
    --multiselect-selected-bg-color,
    #e5e5e5
  );
  --_multiselect-selected-color: var(--multiselect-selected-color, inherit);

  background-color: var(--_multiselect-selected-bg-color);
  color: var(--_multiselect-selected-color);
}

.multiselect-placeholder {
  --_multiselect-placeholder-color: var(--form-input-placeholder-color, #555);

  color: var(--_multiselect-placeholder-color);
}

.multiselect.valid .multiselect-input {
  border-color: var(--color-alert-success, #198754);
}

.selected-option .remove-option {
  height: 1rem;
}

.selected-options {
  display: flex;
}

.menu-trigger {
  display: flex;
}

.menu-trigger > svg {
  color: var(--field-icon-color, #b5b5b5);
  cursor: pointer;
  width: 1.5rem;
}
</style>

<template>
  <div class="country-picker">
    <SelectInput
      :locale="locale"
      :has-sorted-options="false"
      :model-value="modelValue"
      :multiple="multiple"
      :name="name"
      :options="options"
      :placeholder="placeholder"
      class="form-select"
      @update:model-value="onUpdateModelValue"
    >
      <template #option="{ multiple: isMultiple, option, selected }">
        <slot
          :multiple="isMultiple"
          :option="option"
          :selected="selected"
          name="option"
        >
          <div :data-country-code="option.value" class="options-wrapper">
            <template v-if="flags">
              <img
                v-if="flagsPath"
                :alt="option.label"
                :class="getFlagClass()"
                :src="flagsPath(String(option.value))"
              />
              <span v-else :class="getFlagClass(String(option.value))" />
            </template>

            <span class="option-label">{{ option.label }}</span>
          </div>
        </slot>
      </template>
    </SelectInput>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import {
  getFallbackTranslation,
  getFlagClass as getCountryFlagClass,
  getLabel as getCountryLabel,
  sortByLabel,
} from "../../utils/country-picker";
import SelectInput from "../SelectInput.vue";

import type {
  CountryPickerGroups,
  CountryPickerLabels,
  CountryPickerLocales,
  GroupedOption as OptionGroup,
  Options,
  SelectOption,
} from "../../types";
import type { PropType } from "vue";

const props = defineProps({
  labels: {
    default: () => ({
      allCountries: "All Countries",
      favorites: "Favorites",
    }),
    type: Object as PropType<CountryPickerLabels>,
  },
  exclude: {
    default: () => [],
    type: Array as PropType<string[]>,
  },
  fallbackLocale: {
    default: "en",
    type: String,
  },
  favorites: {
    default: () => [],
    type: Array as PropType<string[]>,
  },
  flags: {
    default: true,
    type: Boolean,
  },
  flagsPath: {
    default: undefined,
    type: Function as PropType<(code: string) => string>,
  },
  flagsPosition: {
    default: "left",
    type: String,
    validator: (value: string) =>
      ["left", "right", "right-edge"].includes(value),
  },
  flagsStyle: {
    default: "rectangular",
    type: String,
    validator: (value: string) =>
      ["circle", "rectangular", "square"].includes(value),
  },
  groups: {
    default: () => ({}),
    type: Object as PropType<CountryPickerGroups>,
  },
  hasSortedOptions: {
    default: true,
    type: Boolean,
  },
  include: {
    default: () => [],
    type: Array as PropType<string[]>,
  },
  includeFavorites: {
    default: true,
    type: Boolean,
  },
  locale: {
    default: "en",
    type: String,
  },
  locales: {
    default: () => ({}),
    type: Object as PropType<CountryPickerLocales>,
  },
  modelValue: {
    default: undefined,
    type: [String, Number, Array] as PropType<
      string | number | (string | number)[] | undefined
    >,
  },
  multiple: {
    default: false,
    type: Boolean,
  },
  name: {
    default: "country",
    type: String,
  },
  placeholder: {
    default: undefined,
    type: String,
  },
});

const emit = defineEmits<{
  (
    event: "update:modelValue",
    value: string | number | (string | number)[] | undefined,
  ): void;
}>();

const fallbackTranslation = computed(
  () => getFallbackTranslation(props.fallbackLocale, props.locales) || {},
);

const favoriteOptions = computed<SelectOption[]>(() => {
  if (!props.favorites?.length) {
    return [] as SelectOption[];
  }

  const options = props.favorites.map(getNormalizedOption);

  if (props.hasSortedOptions) {
    options.sort(sortByLabel);
  }

  return options;
});

const fullList = computed<Options>(() => {
  if (!Object.keys(props.groups)?.length) {
    const codes =
      props.include.length > 0
        ? props.include
        : Object.keys(fallbackTranslation.value);

    const options = codes
      .filter((code) => {
        if (props.exclude.includes(code)) {
          return false;
        }

        if (!props.includeFavorites && props.favorites.includes(code)) {
          return false;
        }

        return true;
      })
      .map(getNormalizedOption);

    if (props.hasSortedOptions) {
      options.sort(sortByLabel);
    }

    return props.favorites.length > 0
      ? [{ label: props.labels.allCountries, options }]
      : options;
  } else {
    const options = Object.entries(props.groups).map(([groupCode, codes]) => {
      const countries = codes.map(getNormalizedOption);

      if (props.hasSortedOptions) {
        countries.sort(sortByLabel);
      }

      return {
        label: getLabel(groupCode),
        options: countries,
      };
    });

    if (props.hasSortedOptions) {
      options.sort(sortByLabel);
    }

    return options as Options;
  }
});

const options = computed<Options>(() =>
  favoriteOptions.value.length > 0
    ? ([
        {
          label: props.labels.favorites,
          options: favoriteOptions.value,
        },
        ...fullList.value,
      ] as OptionGroup[])
    : fullList.value,
);

const getLabel = (code: string) =>
  getCountryLabel(code, props.locale, props.locales, fallbackTranslation.value);

const getFlagClass = (code?: string) =>
  getCountryFlagClass(code, props.flagsPosition, props.flagsStyle);

const getNormalizedOption = (code: string): SelectOption => ({
  label: getLabel(code),
  value: code,
});

const onUpdateModelValue = (value: string | string[] | undefined) => {
  const output = Array.isArray(value) ? [...new Set(value)] : value;
  emit("update:modelValue", output);
};
</script>

<style lang="css">
@import "../../assets/css/country-picker.css";
</style>

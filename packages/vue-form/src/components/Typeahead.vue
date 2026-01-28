<template>
  <div ref="dzangolabVueFormTypeahead" :class="`field typeahead ${name}`">
    <label v-if="label" :for="name">
      {{ label }}
    </label>
    <Field
      v-slot="{ meta }"
      v-bind="{ modelValue }"
      :name="name"
      :rules="fieldSchema"
    >
      <DebouncedInput
        :id="`input-field-${name}`"
        :class="{
          invalid: meta.dirty && !meta.valid,
          valid: meta.dirty && meta.valid && Object.keys(props.schema).length,
        }"
        :model-value="inputValue"
        :debounce-time="debounceTime"
        :disabled="disabled"
        :placeholder="placeholder"
        :type="type"
        tabindex="0"
        @update:model-value="onInput"
      />
      <ErrorMessage v-if="!filteredSuggestions.length" :name="name" />
    </Field>
    <div v-if="showSuggestions" class="menu-wrapper">
      <ul>
        <li
          v-for="suggestion in filteredSuggestions"
          :key="suggestion.label"
          :disabled="suggestion.disabled"
          @click="onSelect(suggestion)"
        >
          {{ suggestion.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Typeahead",
};
</script>

<script setup lang="ts">
import { DebouncedInput } from "@prefabs.tech/vue3-ui";
import { toFieldValidator } from "@vee-validate/zod";
import { onClickOutside } from "@vueuse/core";
import { ErrorMessage, Field } from "vee-validate";
import { computed, ref } from "vue";
import { z } from "zod";

import type { SelectOption } from "../types";
import type { PropType } from "vue";

const props = defineProps({
  debounceTime: {
    default: 500,
    required: false,
    type: Number,
  },
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
    default: "",
    required: false,
    type: [String, Number] as PropType<string | number | null | undefined>,
  },
  name: {
    default: "",
    required: false,
    type: String as PropType<string>,
  },
  suggestions: {
    required: true,
    type: Array as PropType<SelectOption[]>,
  },
  placeholder: {
    default: "",
    type: String,
  },
  schema: {
    default: () => {
      return {};
    },
    required: false,
    type: Object as PropType<z.ZodType<string | number | object>>,
  },
  type: {
    default: "text",
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

const dzangolabVueFormTypeahead = ref(null);

const inputValue = ref<string | number | null | undefined>(props.modelValue);

const showSuggestions = ref<boolean>(false);

onClickOutside(dzangolabVueFormTypeahead, (event) => {
  showSuggestions.value = false;
});

const fieldSchema = Object.keys(props.schema).length
  ? toFieldValidator(props.schema)
  : null;

const filteredSuggestions = computed(() => {
  return props.suggestions.filter((suggestion) =>
    (suggestion.value as string)
      .toLowerCase()
      .includes((inputValue.value as string).toLowerCase()),
  );
});

const onInput = (value: string | number) => {
  inputValue.value = value;

  if (filteredSuggestions.value?.length) {
    showSuggestions.value = true;
  }

  emit("update:modelValue", value);
};

const onSelect = (option: SelectOption) => {
  inputValue.value = option.value;
  showSuggestions.value = false;

  emit("update:modelValue", option.value);
};
</script>

<style lang="css">
@import "../assets/css/typeahead.css";
</style>

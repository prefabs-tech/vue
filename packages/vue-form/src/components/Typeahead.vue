<template>
  <div :class="`field typeahead ${name}`">
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
          invalid: meta.touched && !meta.valid,
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
      <ErrorMessage :name="name" />
    </Field>
    <ul v-if="showSuggestions" class="suggestion-list">
      <li
        v-for="suggestion in filteredSuggestions"
        :key="suggestion.label"
        class="suggestion"
        @click="onSelect(suggestion)"
      >
        {{ suggestion.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "Typeahead",
};
</script>

<script setup lang="ts">
import { DebouncedInput } from "@dzangolab/vue3-ui";
import { toFieldValidator } from "@vee-validate/zod";
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

const inputValue = ref(props.modelValue);

const showSuggestions = ref<boolean>(false);

const emit = defineEmits(["update:modelValue"]);

const fieldSchema = Object.keys(props.schema).length
  ? toFieldValidator(props.schema)
  : null;

const filteredSuggestions = computed(() => {
  return props.suggestions.filter((suggestion) =>
    (suggestion.value as string)
      .toLowerCase()
      .includes((inputValue.value as string).toLowerCase())
  );
});

const onInput = (value: string | number) => {
  inputValue.value = value;
  showSuggestions.value = true;

  emit("update:modelValue", value);
};

const onSelect = (option: SelectOption) => {
  inputValue.value = option.value;

  emit("update:modelValue", option.value);
  showSuggestions.value = false;
};
</script>

<style lang="css">
.typeahead {
  position: relative;
  display: inline-block;
  width: 100%;
}

.typeahead input {
  margin-top: 0.75rem;
}

.typeahead input:focus {
  position: relative;
  z-index: 1000;
}

li.suggestion {
  padding: 10px;
  cursor: pointer;
}

li.suggestion:hover {
  background-color: var(--field-option-hover-color, #e5e5e5);
  cursor: pointer;
}

ul.suggestion-list {
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
  z-index: 999;
}
</style>

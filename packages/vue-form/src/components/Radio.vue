<template>
  <fieldset :class="`field radio direction-${direction}`">
    <legend v-if="label">{{ label }}</legend>
    <div
      v-for="option in options"
      :key="option.value"
      class="radio-button-wrapper"
    >
      <input
        :id="`${name}-${option.value}`"
        :checked="modelValue === option.value"
        :disabled="disabled"
        :name="name"
        :value="option.value"
        type="radio"
        @change="onChange"
      />
      <label v-if="option.label" :for="`${name}-${option.value}`">
        {{ option.label }}
      </label>
    </div>
    <span v-if="helperText" class="helper-text">{{ helperText }}</span>
  </fieldset>
</template>

<script lang="ts">
export default {
  name: "RadioElement",
};
</script>

<script setup lang="ts">
import type { InputOption } from "../types";
import type { PropType } from "vue";

defineProps({
  direction: {
    default: "vertical",
    type: String,
    validator: (value: string) => ["vertical", "horizontal"].includes(value),
  },
  disabled: {
    default: false,
    type: Boolean,
  },
  helperText: {
    default: undefined,
    type: String as PropType<string | null | undefined>,
  },
  label: {
    default: "",
    required: false,
    type: String,
  },
  modelValue: {
    default: "",
    type: [String, Number] as PropType<string | number | null | undefined>,
  },
  name: {
    default: "radio",
    required: false,
    type: String as PropType<string>,
  },
  options: {
    required: true,
    type: Array as PropType<InputOption[]>,
  },
});

const emit = defineEmits(["update:modelValue"]);

const onChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;

  if ((event.target as HTMLInputElement).checked) {
    emit("update:modelValue", value);
  }
};
</script>

<style lang="css">
.field.radio.direction-horizontal {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
}

.radio-button-wrapper {
  align-items: center;
  display: flex;
}

.radio-button-wrapper input[type="radio"] {
  cursor: pointer;
  outline: none;
  transform: scale(1.5);
}

.radio-button-wrapper input[type="radio"]:disabled {
  cursor: default;
}

.radio-button-wrapper label {
  margin-left: 0.5rem;
}
</style>

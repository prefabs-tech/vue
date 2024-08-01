<template>
  <div class="switch">
    <input
      :checked="modelValue"
      :disabled="disabled"
      class="switch-input"
      type="checkbox"
      tabindex="0"
      @change="onChange"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "Switch",
};
</script>

<script setup lang="ts">
defineProps({
  disabled: {
    default: false,
    type: Boolean,
  },
  modelValue: {
    default: false,
    type: Boolean,
  },
});

const emit = defineEmits(["update:modelValue"]);

const onChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).checked;

  emit("update:modelValue", Boolean(value));
};
</script>

<style lang="css" scoped>
.switch input[type="checkbox"] {
  appearance: none;
  background-color: #ccc;
  border-radius: 1.25rem;
  cursor: pointer;
  height: 2.18rem;
  position: relative;
  width: 3.75rem;
}

.switch input:before {
  background-color: #fff;
  border-radius: 50%;
  bottom: 0.25rem;
  content: "";
  height: 1.6rem;
  left: 0.25rem;
  position: absolute;
  transition: transform 0.3s, background-color 0.3s;
  width: 1.6rem;
}

.switch input:checked:before {
  transform: translate(24px);
}

.switch input:checked {
  background-color: #007aff;
}
</style>

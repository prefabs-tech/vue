<template>
  <button
    :aria-label="label"
    :disabled="disabled || loading"
    class="loading-button"
    :class="{ loading: loading }"
    @click="$emit('click')"
  >
    <div class="label">
      <span>{{ label }}</span>
    </div>
    <LoadingIcon v-if="loading" />
  </button>
</template>

<script lang="ts">
export default {
  name: "LoadingButton",
};
</script>

<script setup lang="ts">
import LoadingIcon from "./LoadingIcon.vue";

defineEmits(["click"]);

defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.loading-button {
  align-items: center;
  background: var(--loading-button-bg-color, #1c4786);
  border-radius: 6px;
  border: none;
  color: var(--loading-button-color, #ffffff);
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  justify-content: center;
  padding: 1rem 0.625rem;
}

.loading-button:disabled {
  background: #dddddd;
}
</style>

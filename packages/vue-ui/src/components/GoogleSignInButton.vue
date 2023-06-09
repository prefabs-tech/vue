<template>
  <button
    class="google-button"
    :disabled="disabled || loading"
    @click="$emit('click')"
  >
    <img src="../assets/svg/google.svg" />
    <div class="label">
      <span>{{ label }}</span>
    </div>
  </button>
</template>

<script lang="ts">
export default {
  name: "GoogleSignInButton",
};
</script>

<script setup lang="ts">
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
.google-button {
  align-items: center;
  border-radius: 6px;
  border: 1px solid #dddddd;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  justify-content: center;
}
</style>

<template>
  <BaseButton
    v-bind="baseButtonOptions"
    :disabled="disabled"
    :image-source="FacebookLogo"
    :loading="loading"
    :title="title"
    class="facebook"
    @click="$emit('click')"
  />
</template>

<script lang="ts">
export default {
  name: "FacebookSignInButton",
};
</script>

<script setup lang="ts">
import BaseButton from "./BaseButton.vue";
import FacebookLogo from "../assets/svg/facebook.svg";

defineEmits(["click"]);

defineProps({
  baseButtonOptions: {
    default: () => ({}),
    type: Object as () => Record<string, unknown>,
  },
  disabled: {
    default: false,
    type: Boolean,
  },
  loading: {
    default: false,
    type: Boolean,
  },
  title: {
    required: true,
    type: String,
  },
});
</script>

<style lang="css">
@import "../assets/css/social-button.css";
</style>

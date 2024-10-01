<template>
  <div class="message">
    <span v-if="icon" class="icon">
      <slot name="icon">
        <i :class="icon" />
      </slot>
    </span>

    <span class="message-content">{{ message }}</span>

    <img
      v-if="enableClose"
      src="./../assets/svg/x-mark.svg"
      class="close-message"
      @click="onClose()"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "Message",
};
</script>

<script setup lang="ts">
const emits = defineEmits(["close"]);

defineProps({
  enableClose: {
    default: false,
    type: Boolean,
  },
  icon: {
    default: null,
    type: [String, Boolean],
  },
  message: {
    required: true,
    type: String,
  },
});

const onClose = () => {
  emits("close");
};
</script>

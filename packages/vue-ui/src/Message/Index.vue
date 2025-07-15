<template>
  <div v-show="showMessage" :class="['message', severity]">
    <span v-if="icon || !!slots.icon" class="icon">
      <slot name="icon">
        <i :class="icon" />
      </slot>
    </span>

    <span class="message-content">
      <slot>
        {{ message }}
      </slot>
    </span>

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
import { ref, useSlots } from "vue";

const emits = defineEmits(["close"]);

defineProps({
  enableClose: {
    default: false,
    type: Boolean,
  },
  icon: {
    default: null,
    type: String,
  },
  message: {
    required: true,
    type: String,
  },
  severity: {
    type: String,
    default: "info",
    validator: (value: string) =>
      ["danger", "info", "success", "warning"].includes(value),
  },
});

const slots = useSlots();

const showMessage = ref<boolean>(true);

const onClose = () => {
  showMessage.value = false;

  emits("close");
};
</script>

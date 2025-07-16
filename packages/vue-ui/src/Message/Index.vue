<template>
  <div v-show="showMessage" :class="['message', severity]">
    <span
      v-if="icon || !!slots.icon || showIcon"
      :class="['icon', { default: !icon && !slots.icon && showIcon }]"
    >
      <slot v-if="(icon || !!slots.icon) && showIcon" name="icon">
        <i :class="icon" />
      </slot>
    </span>

    <span class="message-content">
      <slot>
        <template v-if="!Array.isArray(message)">
          {{ message }}
        </template>
        <template v-else-if="message.length">
          <ul>
            <li
              v-for="(messageData, index) in message"
              :key="`message-${index}`"
            >
              {{ messageData }}
            </li>
          </ul>
        </template>
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

import type { PropType } from "vue";

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
    type: String || (Array as PropType<string[]>),
  },
  severity: {
    type: String,
    default: "info",
    validator: (value: string) =>
      ["danger", "info", "success", "warning"].includes(value),
  },
  showIcon: {
    default: true,
    type: Boolean,
  },
});

const slots = useSlots();

const showMessage = ref<boolean>(true);

const onClose = () => {
  showMessage.value = false;

  emits("close");
};
</script>

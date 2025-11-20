<template>
  <dialog ref="dzangolabVueDialog" class="dialog">
    <div ref="dzangolabVueDialogContainer" class="dialog-container">
      <div class="dialog-header">
        <slot name="header">
          <span class="title">{{ header }}</span>
        </slot>

        <slot v-if="closable" name="closeIcon">
          <ButtonElement
            v-if="closable"
            :icon-left="closeIcon"
            aria-label="close modal"
            rounded
            severity="secondary"
            size="small"
            variant="textOnly"
            @click="handleClose()"
          />
        </slot>
      </div>

      <p class="dialog-content">
        <slot name="icon">
          <i v-if="icon" :class="icon" />
        </slot>
        <slot name="message">
          {{ message }}
        </slot>
      </p>

      <div class="dialog-footer">
        <slot name="footer">
          <ButtonElement
            v-bind="cancelButtonOptions"
            :label="cancelButtonOptions?.label ?? 'No'"
            :severity="cancelButtonOptions?.severity ?? 'secondary'"
            :variant="cancelButtonOptions?.variant ?? 'outlined'"
            @click="handleClose()"
          />

          <ButtonElement
            v-bind="acceptButtonOptions"
            :label="acceptButtonOptions?.label ?? 'Yes'"
            @click="handleConfirm()"
          />
        </slot>
      </div>
    </div>
  </dialog>
</template>

<script lang="ts">
export default {
  name: "ConfirmationModal",
};
</script>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { nextTick, onMounted, ref } from "vue";

import ButtonElement from "../Button/Index.vue";

const emits = defineEmits(["on:confirm", "on:close"]);

const props = defineProps({
  acceptButtonOptions: {
    default: () => ({}),
    type: Object,
  },
  cancelButtonOptions: {
    default: () => ({}),
    type: Object,
  },
  closable: {
    default: true,
    type: Boolean,
  },
  closeIcon: {
    default: "pi pi-times",
    type: String,
  },
  dismissOnClickOut: {
    default: true,
    type: Boolean,
  },
  header: {
    default: "Confirmation required",
    type: String,
  },
  icon: {
    default: "pi pi-exclamation-triangle",
    type: [Boolean, String],
  },
  message: {
    default: "Are you sure you want to proceed?",
    type: String,
  },
});

const dzangolabVueDialog = ref<HTMLDialogElement>();
const dzangolabVueDialogContainer = ref<HTMLElement>();

onClickOutside(dzangolabVueDialogContainer, (event) => {
  if (props.closable && props.dismissOnClickOut) {
    handleClose();
  }
});

const handleConfirm = () => {
  emits("on:confirm");
};

const handleClose = () => {
  emits("on:close");
};

onMounted(async () => {
  await nextTick();
  dzangolabVueDialog.value?.showModal();
});
</script>

<template>
  <SshPre :copy-button="showCopyButton" :language="language" @copied="onCopy">
    <template #copy-button>
      <i v-if="!isCopied" class="icon pi pi-copy" />
      <i v-else class="icon pi pi-check" />
    </template>

    <slot></slot>
  </SshPre>
</template>

<script lang="ts">
export default {
  name: "SyntaxHighlighter",
};
</script>

<script setup lang="ts">
import SshPre from "simple-syntax-highlighter";
import { ref } from "vue";

defineProps({
  showCopyButton: {
    default: true,
    type: Boolean,
  },
  language: {
    default: "html-vue",
    type: String,
  },
});

const isCopied = ref<boolean>(false);

const onCopy = () => {
  isCopied.value = true;

  setTimeout(() => {
    isCopied.value = false;
  }, 2000);
};
</script>

<style lang="css">
.ssh-pre__copy {
  cursor: pointer;
  padding: 0.5rem;
}

.ssh-pre__copy .icon {
  color: var(--dz-primary-color, #007aff);
  font-size: 1.25rem;
}
</style>

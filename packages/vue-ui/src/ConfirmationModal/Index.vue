<template>
  <Transition name="modal">
    <div class="modal-wrapper">
      <div class="modal-header">
        <slot name="header"></slot>
      </div>

      <div class="modal-body">
        <slot name="body"></slot>
      </div>

      <div class="modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
export default {
  name: "ConfirmationModal",
};
</script>

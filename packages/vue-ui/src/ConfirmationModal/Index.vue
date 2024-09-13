<template>
  <div class="modal">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header" class="title">
            <span>Confirmation required</span>
          </slot>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            @click="handleClose()"
          >
            <path
              fill="currentColor"
              d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94z"
            />
          </svg>
        </div>

        <div class="modal-body">
          <slot name="body">
            <p>Are you sure you want to proceed?</p>
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <ButtonElement
              size="small"
              label="Cancel"
              severity="secondary"
              @click="handleClose()"
            />

            <ButtonElement
              size="small"
              label="Ok"
              severity="primary"
              @click="handleConfirm()"
            />
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ConfirmationModal",
};
</script>

<script setup lang="ts">
import ButtonElement from "../Button/Index.vue";

const emits = defineEmits(["on:confirm", "on:close"]);

function handleConfirm() {
  emits("on:confirm");
}

function handleClose() {
  emits("on:close");
}
</script>

<style lang="css">
.modal {
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  transition: opacity 0.3s ease;
  width: 100%;
  z-index: 1;
}

.modal .modal-body {
  padding: 1em 0;
}

.modal .modal-container {
  background-color: #fff;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.33);
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 0 auto;
  overflow-x: hidden;
  padding: 1em;
  transition: all 0.3s ease;
  width: max-content;
  max-height: 80vh;
}

.modal .modal-footer {
  display: flex;
  gap: 1em;
  margin-left: auto;
}

.modal .modal-header {
  align-items: center;
  display: flex;
  font-size: 1.5em;
  font-weight: 700;
  gap: 1em;
  justify-content: space-between;
}

.modal .modal-header svg {
  cursor: pointer;
}

.modal .modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>

<template>
  <Transition name="modal">
    <div class="modal">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h1>Hello world</h1>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <p>The content of the modal</p>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
export default {
  name: "ConfirmationModal",
};
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
  z-index: 999;
}

.modal .modal-container {
  background-color: #fff;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.33);
  margin: 0 auto;
  overflow-x: hidden;
  padding: 1.5rem;
  transition: all 0.3s ease;
  width: max-content;
  max-height: 80vh;
}

.modal .modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>

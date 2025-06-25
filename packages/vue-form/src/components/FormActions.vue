<template>
  <div
    :data-alignment="alignment"
    :data-direction="flowDirection"
    :data-reverse="reverse"
    class="form-actions"
  >
    <slot>
      <slot name="submitButton">
        <ButtonElement
          :disabled="loading"
          :label="submitLabel"
          class="submit-button"
          type="submit"
          @click="onSubmit"
        />
      </slot>
      <slot name="cancelButton">
        <ButtonElement
          :disabled="loading"
          :label="cancelLabel"
          class="cancel-button"
          type="button"
          variant="outlined"
          @click="onCancel"
        />
      </slot>
    </slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "FormActions",
};
</script>

<script setup lang="ts">
import { ButtonElement } from "@dzangolab/vue3-ui";

defineProps({
  alignment: {
    default: "right",
    type: String,
  },
  cancelLabel: {
    default: "Cancel",
    type: String,
  },
  flowDirection: {
    default: "horizontal",
    type: String,
  },
  loading: {
    default: false,
    type: Boolean,
  },
  reverse: Boolean,
  submitLabel: {
    default: "Submit",
    type: String,
  },
});

const emit = defineEmits(["cancel", "submit"]);

const onCancel = () => emit("cancel");

const onSubmit = () => emit("submit");
</script>

<style lang="css">
@import "../assets/css/formAction.css";
</style>

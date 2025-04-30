<template>
  <div
    :class="`align-${alignment} direction-${flowDirection}`"
    class="form-actions"
  >
    <slot>
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
      <slot name="submitButton">
        <ButtonElement
          :disabled="loading"
          :label="submitLabel"
          class="submit-button"
          type="submit"
          @click="onSubmit"
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
.form-actions {
  display: flex;
  gap: var(--form-field-gap, 0.5em);
  margin-bottom: var(--form-margin-bottom, 0);
  width: 100%;
}

.form-actions.align-center {
  justify-content: center;
}

.form-actions.align-left {
  justify-content: left;
}

.form-actions.align-right {
  justify-content: right;
}

.form-actions.align-filled {
  justify-content: space-between;
}

.form-actions.align-filled button {
  flex: 1;
}

.form-actions.direction-horizontal {
  flex-direction: row;
}

.form-actions.direction-vertical {
  flex-direction: column;
}
</style>

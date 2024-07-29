<template>
  <div class="form-modes">
    <SwitchInput
      :model-value="props.showValid"
      :label="$t('form.label.valid')"
      @update:model-value="onUpdateShowValid"
    />
    <SwitchInput
      :model-value="props.showInvalid"
      :label="$t('form.label.invalid')"
      @update:model-value="onUpdateShowInvalid"
    />
  </div>
</template>

<script setup lang="ts">
import { SwitchInput } from "@dzangolab/vue3-form";

const props = defineProps({
  showInvalid: {
    default: true,
    type: Boolean,
  },
  showValid: {
    default: true,
    type: Boolean,
  },
});

const emit = defineEmits(["update:showValid", "update:showInvalid"]);

const onUpdateShowInvalid = (value: boolean) => {
  emit("update:showInvalid", value);
};

const onUpdateShowValid = (value: boolean) => {
  emit("update:showValid", value);
};
</script>

<style lang="css" scoped>
.form-modes {
  display: flex;
  gap: 2rem;
  margin-bottom: 0.625rem;
}
</style>

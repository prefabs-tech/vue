<template>
  <Modal
    class="password-reset-email-modal"
    :show="show"
    :title="t('user.passwordReset.modal.placeholder.selectApp')"
    @on:close="$emit('hide:modal')"
  >
    <Message
      v-if="message"
      :message="message"
      enable-close
      severity="danger"
      @close="message = undefined"
    />
    <Form @submit="onSubmit">
      <SelectInput
        v-model="appId"
        :options="userAuthorizedApps"
        :placeholder="t('user.passwordReset.modal.placeholder.selectApp')"
        name="appId"
      />

      <ButtonElement
        :label="t('user.passwordReset.modal.label.send')"
        :loading="loading"
        type="submit"
      />
    </Form>
  </Modal>
</template>

<script lang="ts">
export default {
  name: "ResetPasswordModal",
};
</script>

<script setup lang="ts">
import { Form, SelectInput } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { ButtonElement, Modal, Message } from "@prefabs.tech/vue3-ui";
import { ref, watch } from "vue";

import type { SelectOption } from "@prefabs.tech/vue3-form";
import type { PropType } from "vue";

const props = defineProps({
  errorMessage: {
    default: undefined,
    type: String,
  },
  loading: Boolean,
  show: Boolean,
  userAuthorizedApps: {
    default: () => [],
    type: Array as PropType<SelectOption[]>,
  },
});

const emit = defineEmits(["hide:modal", "submit"]);

const { t } = useI18n();

const message = ref<string | undefined>(props.errorMessage);
const appId = ref<number>();

watch(
  () => props.errorMessage,
  () => (message.value = props.errorMessage),
);

const onSubmit = (data: Record<string, unknown>) => {
  emit("submit", data);
};

defineExpose({
  resetForm: () => (appId.value = undefined),
});
</script>

<style lang="css">
.password-reset-email-modal .dialog .content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>

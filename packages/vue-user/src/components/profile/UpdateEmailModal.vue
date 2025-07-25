<template>
  <Modal
    class="update-email-modal"
    :show="show"
    :title="t('user.profile.accountInfo.title')"
    @on:close="onClose"
  >
    <UpdateEmailForm
      ref="PrefabsTechUpdateEmail"
      @email:update-processed="$emit('on:close')"
    />
  </Modal>
</template>

<script lang="ts">
export default {
  name: "UpdateEmailModal",
};
</script>

<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Modal } from "@prefabs.tech/vue3-ui";
import { ref } from "vue";

import UpdateEmailForm from "./UpdateEmailForm.vue";
import { useTranslations } from "../../index";

const messages = useTranslations();
const { t } = useI18n({ messages });

const PrefabsTechUpdateEmail = ref();

defineProps({
  show: {
    default: false,
    type: Boolean,
  },
});

const emit = defineEmits(["on:close"]);

const onClose = () => {
  PrefabsTechUpdateEmail.value.onCancel();

  emit("on:close");
};
</script>

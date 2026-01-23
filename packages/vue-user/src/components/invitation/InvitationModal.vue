<template>
  <Modal
    :dismiss-on-click-out="dismissOnClickOut"
    :show="show"
    :title="title"
    class="invitation-modal"
    @on:close="handleClose"
  >
    <InvitationForm
      :apps="apps"
      :app-schema="appSchema"
      :expires-after-schema="expiresAfterSchema"
      :expires-at-schema="expiresAtSchema"
      :expiry-mode="expiryMode"
      :invitation-data="invitationData"
      :roles="roles"
      :role-schema="roleSchema"
      :submit-label="submitLabel"
      @cancel="handleClose"
      @submitted="onSubmitted"
    />
  </Modal>
</template>

<script lang="ts">
export default {
  name: "InvitationModal",
};
</script>

<script setup lang="ts">
import { Modal } from "@prefabs.tech/vue3-ui";
import { z } from "zod";

import InvitationForm from "./InvitationForm.vue";

import type {
  InvitationAppOption,
  InvitationPayload,
  InvitationRoleOption,
} from "../../types";
import type { PropType } from "vue";

defineProps({
  apps: {
    default: () => [],
    type: Array as PropType<Array<InvitationAppOption>>,
  },
  appSchema: {
    default: undefined,
    required: false,
    type: Object as PropType<z.ZodType<string | number | string[] | number[]>>,
  },
  dismissOnClickOut: {
    default: false,
    type: Boolean,
  },
  expiresAfterSchema: {
    default: undefined,
    required: false,
    type: Object as PropType<z.ZodType<string | number>>,
  },
  expiresAtSchema: {
    default: undefined,
    required: false,
    type: Object as PropType<z.ZodType<string | number | Date | object>>,
  },
  expiryMode: {
    default: undefined,
    type: String,
    validator: (value: string) => ["calendar", "days"].includes(value),
  },
  invitationData: {
    default: () => ({}) as InvitationPayload,
    type: Object,
  },
  roles: {
    default: () => [],
    type: Array as PropType<Array<InvitationRoleOption>>,
  },
  roleSchema: {
    default: undefined,
    required: false,
    type: Object as PropType<z.ZodType<string | number | string[] | number[]>>,
  },
  show: {
    default: false,
    type: Boolean,
  },
  submitLabel: {
    default: undefined,
    type: String,
  },
  title: {
    default: "",
    type: String,
  },
});

const emit = defineEmits(["on:close", "submitted"]);

const handleClose = () => {
  emit("on:close");
};

const onSubmitted = () => {
  emit("submitted");
};
</script>

<style lang="css">
.invitation-modal .dialog {
  --modal-min-width: 23rem;
}

@media screen and (min-width: 768px) {
  .invitation-modal .dialog {
    --modal-min-width: 30rem;
  }
}
</style>

<template>
  <div class="invitation-form">
    <Form @submit="onSubmit">
      <Email v-model="formData.email" label="Email" />

      <SelectInput
        v-if="apps?.length"
        v-model="formData.appId"
        :options="updatedApps"
        :schema="appSchema"
        label="App"
        name="app"
        placeholder="Select app"
      />

      <SelectInput
        v-if="apps?.length || roles?.length"
        v-model="formData.role"
        :disabled="Boolean(!updatedRoles?.length)"
        :options="updatedRoles"
        :schema="roleSchema"
        label="Role"
        name="role"
        placeholder="Select role"
      />

      <DatePicker
        v-if="expiryMode === 'calendar'"
        v-model="formData.expiresAt"
        :schema="expiresAtSchema"
        label="Expires at"
        name="expires-at"
      />

      <FormActions :submit-label="submitLabel" />
    </Form>
  </div>
</template>

<script lang="ts">
export default {
  name: "InvitationForm",
};
</script>

<script setup lang="ts">
import {
  DatePicker,
  Email,
  Form,
  FormActions,
  SelectInput,
} from "@dzangolab/vue3-form";
import { computed, ref } from "vue";
import { z } from "zod";

import type {
  InvitationAppOption,
  InvitationPayload,
  InvitationRoleOption,
} from "../../types";
import type { PropType } from "vue";

const props = defineProps({
  apps: {
    default: () => [],
    type: Array as PropType<Array<InvitationAppOption>>,
  },
  appSchema: {
    default: z.number({
      invalid_type_error: "Please select at least one valid option",
    }),
    required: false,
    type: Object as PropType<z.ZodType<string | number | string[] | number[]>>,
  },
  expiresAtSchema: {
    default: z.coerce.date().min(new Date(new Date().setHours(0, 0, 0, 0)), {
      message: "Please provide a present or future date",
    }),
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
    default: z.string({
      invalid_type_error: "Please select at least one valid option",
    }),
    required: false,
    type: Object as PropType<z.ZodType<string | number | string[] | number[]>>,
  },
  submitLabel: {
    default: "Invite user",
    type: String,
  },
});

const emit = defineEmits(["submit"]);

const formData = ref<InvitationPayload>({} as InvitationPayload);

const updatedApps = computed(() => {
  let modifiedApps = props.apps || [];
  const currentOrigin = window.location.origin;

  const appToMove = modifiedApps.find((app) => app.origin === currentOrigin);

  if (appToMove) {
    modifiedApps = modifiedApps.filter((app) => app.origin !== currentOrigin);
    modifiedApps = [{ ...appToMove, name: "This app" }, ...modifiedApps];
  }

  const modifiedLabels = modifiedApps.map((app) => {
    if (app.label) {
      return { value: app.id, label: app.label };
    }

    return {
      value: app.id,
      label: app.name,
    };
  });

  return modifiedLabels;
});

const updatedRoles = computed(() => {
  if (formData.value?.appId) {
    return props.apps
      ?.find((app) => app.id === formData.value.appId)
      ?.supportedRoles.map((role) => {
        return {
          label: role.name,
          value: role.name,
        };
      });
  }

  return (
    props.roles?.map((role) => {
      return {
        label: role.name,
        value: role.name,
      };
    }) || []
  );
});

const onSubmit = (data: InvitationPayload) => {
  emit("submit", data);
};

const prepareComponent = () => {
  formData.value = props.invitationData as InvitationPayload;
};

prepareComponent();
</script>

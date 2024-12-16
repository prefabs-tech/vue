<template>
  <div class="invitation-form">
    <Form @submit="onSubmit">
      <Email v-model="formData.email" label="Email" />

      <SelectInput
        v-if="apps?.length"
        v-model="formData.appId"
        :options="updatedApps"
        label="App"
        placeholder="Select app"
      />

      <SelectInput
        v-if="apps?.length || roles?.length"
        v-model="formData.role"
        :disabled="Boolean(!updatedRoles?.length)"
        :options="updatedRoles"
        label="Role"
        placeholder="Select role"
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
import { Email, Form, FormActions, SelectInput } from "@dzangolab/vue3-form";
import { computed, ref } from "vue";

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
  invitationData: {
    default: () => ({}) as InvitationPayload,
    type: Object,
  },
  roles: {
    default: () => [],
    type: Array as PropType<Array<InvitationRoleOption>>,
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

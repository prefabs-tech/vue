<template>
  <div class="invitation-form">
    <Form @submit="onSubmit">
      <Email v-model="formData.email" label="Email" />

      <SelectInput
        v-model="formData.app"
        :options="updatedApps"
        label="App"
        placeholder="Select app"
      />

      <SelectInput
        v-model="formData.role"
        :options="updatedRoles"
        label="Role"
        placeholder="Select role"
      />
    </Form>
  </div>
</template>

<script lang="ts">
export default {
  name: "InvitationForm",
};
</script>

<script setup lang="ts">
import { Form, Email, SelectInput } from "@dzangolab/vue3-form";
import { computed, reactive } from "vue";

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
  roles: {
    default: () => [],
    type: Array as PropType<Array<InvitationRoleOption>>,
  },
});

const emit = defineEmits(["submit"]);

const formData = reactive({
  app: undefined,
  email: "",
  role: undefined,
});

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
</script>

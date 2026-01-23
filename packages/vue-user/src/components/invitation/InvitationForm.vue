<template>
  <div class="invitation-form">
    <Message
      v-if="errorMessage"
      :message="t(`user.invitation.errors.${errorMessage}`)"
      enable-close
      severity="danger"
      @close="errorMessage = undefined"
    />

    <Form @submit="onSubmit">
      <Email
        v-model="formData.email"
        :label="t('user.invitation.form.email.label')"
        :placeholder="t('user.invitation.form.email.placeholder')"
      />

      <SelectInput
        v-if="apps?.length"
        v-model="formData.appId"
        :has-sorted-options="false"
        :label="t('user.invitation.form.app.label')"
        :options="updatedApps"
        :placeholder="t('user.invitation.form.app.placeholder')"
        :schema="appSchema"
        name="app"
        @update:model-value="onAppSelect"
      />

      <SelectInput
        v-if="apps?.length || roles?.length"
        v-model="formData.role"
        :disabled="Boolean(!updatedRoles?.length)"
        :label="t('user.invitation.form.role.label')"
        :options="updatedRoles || []"
        :placeholder="t('user.invitation.form.role.placeholder')"
        :schema="roleSchema"
        name="role"
      />

      <DatePicker
        v-if="expiryMode === 'calendar'"
        v-model="formData.expiresAt"
        :label="t('user.invitation.form.expiresAt.label')"
        :placeholder="t('user.invitation.form.expiresAt.placeholder')"
        :schema="expiresAtSchema"
        name="expires-at"
      />

      <DaysInput
        v-else-if="expiryMode === 'days'"
        v-model="expiresAfter"
        :label="t('user.invitation.form.expiresAfter.label')"
        :placeholder="t('user.invitation.form.expiresAfter.placeholder')"
        :schema="expiresAfterSchema"
        name="expires-after"
        @update:date="formData.expiresAt = $event"
      />

      <FormActions :submit-label="submitLabel" @cancel="$emit('cancel')" />
    </Form>
  </div>
</template>

<script lang="ts">
export default {
  name: "InvitationForm",
};
</script>

<script setup lang="ts">
import { useConfig } from "@prefabs.tech/vue3-config";
import {
  DatePicker,
  DaysInput,
  Email,
  Form,
  FormActions,
  SelectInput,
} from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Message } from "@prefabs.tech/vue3-ui";
import { computed, ref } from "vue";
import { z } from "zod";

import { emitter, useTranslations } from "../../index";
import useUserStore from "../../store";

import type {
  InvitationAppOption,
  InvitationPayload,
  InvitationRoleOption,
} from "../../types";
import type { AppConfig } from "@prefabs.tech/vue3-config";
import type { PropType } from "vue";

const props = defineProps({
  apps: {
    default: () => [],
    type: Array as PropType<Array<InvitationAppOption>>,
  },
  appSchema: {
    default: z.coerce
      .number({
        invalid_type_error: "Please select at least one valid option",
      })
      .gte(1, "Please select at least one valid option"),
    required: false,
    type: Object as PropType<z.ZodType<string | number | string[] | number[]>>,
  },
  expiresAfterSchema: {
    default: z.coerce
      .number({ invalid_type_error: "Expiry days is required" })
      .gte(1, "please provide valid days"),
    required: false,
    type: Object as PropType<z.ZodType<string | number>>,
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

const emit = defineEmits(["cancel", "submitted"]);

const config = useConfig() as AppConfig;

const messages = useTranslations();
const { t } = useI18n({ messages });

const userStore = useUserStore();
const { addInvitation } = userStore;

const errorMessage = ref<string>();
const expiresAfter = ref<number>();
const formData = ref<InvitationPayload>({} as InvitationPayload);

const updatedApps = computed(() => {
  let modifiedApps = props.apps || [];
  const currentOrigin = window.location.origin;

  const appToMove = modifiedApps.find((app) => app.origin === currentOrigin);

  if (appToMove) {
    modifiedApps = modifiedApps.filter((app) => app.origin !== currentOrigin);
    modifiedApps = [
      { ...appToMove, name: t("user.invitation.thisApp") },
      ...modifiedApps,
    ];
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
      ?.find((app) => app.id === Number(formData.value.appId))
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

const onAppSelect = () => {
  formData.value.role = undefined;
};

const onSubmit = async () => {
  try {
    if (formData.value?.expiresAt) {
      formData.value.expiresAt = new Date(
        formData.value.expiresAt,
      ).toISOString();
    }

    const response = await addInvitation(formData.value, config.apiBaseUrl);

    if (!response) {
      return;
    }

    emitter.emit("notify", {
      text: t("user.invitation.messages.invite.success"),
      type: "success",
    });

    emit("submitted");
    // eslint-disable-next-line
  } catch (error: any) {
    const code = error?.response?.data?.code;

    errorMessage.value = code ?? "SOMETHING_WRONG";
  }
};

const prepareComponent = () => {
  formData.value = props.invitationData as InvitationPayload;

  if (props.expiryMode === "days" && formData.value?.expiresAt) {
    const today = new Date();
    const expiryDate = new Date(formData.value?.expiresAt);
    const differenceInTime = expiryDate.getTime() - today.getTime();

    expiresAfter.value = Math.round(differenceInTime / (24 * 60 * 60 * 1000));
  }
};

prepareComponent();
</script>

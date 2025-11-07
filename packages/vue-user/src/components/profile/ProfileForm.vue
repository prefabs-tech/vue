<template>
  <Message
    v-if="errorMessage"
    :message="t(`user.profile.errors.${errorMessage}`)"
    enable-close
    severity="danger"
    @close="errorMessage = undefined"
  />

  <Form
    ref="prefabsTechVueUpdateProfile"
    class="profile-form"
    @submit="onSubmit"
  >
    <Input
      v-model="formValues.givenName"
      :label="t('user.profile.form.firstName.label')"
      :placeholder="t('user.profile.form.firstName.placeholder')"
      :schema="fieldsSchema.givenName"
      name="givenName"
      type="text"
    />

    <Input
      v-model="formValues.middleNames"
      :label="t('user.profile.form.middleName.label')"
      :placeholder="t('user.profile.form.middleName.placeholder')"
      :schema="fieldsSchema.middleNames"
      name="middleNames"
      type="text"
    />

    <Input
      v-model="formValues.surname"
      :label="t('user.profile.form.lastName.label')"
      :placeholder="t('user.profile.form.lastName.placeholder')"
      :schema="fieldsSchema.surname"
      name="surname"
      type="text"
    />

    <slot />

    <FormActions
      :loading="loading || !isDirty"
      :submit-label="t('user.profile.form.actions.update')"
      alignment="left"
      @cancel="onCancel"
    />
  </Form>
</template>

<script lang="ts">
export default {
  name: "ProfileForm",
};
</script>

<script setup lang="ts">
import { useConfig } from "@prefabs.tech/vue3-config";
import { Input, Form, FormActions } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Message } from "@prefabs.tech/vue3-ui";
import { storeToRefs } from "pinia";
import { computed, reactive, ref } from "vue";
import { z } from "zod";

import { updateUserProfile } from "../../api/user";
import { emitter, useTranslations } from "../../index";
import useUserStore from "../../store";

import type { UpdateProfileInputType } from "../../types";

const config = useConfig();

const messages = useTranslations();
const { t } = useI18n({ messages });

const userStore = useUserStore();
const setUser = userStore.setUser;
const { user } = storeToRefs(userStore);

let fieldsSchema = {
  givenName: z
    .string()
    .min(1, t("user.profile.form.firstName.messages.required")),
  middleNames: z.string().optional(),
  surname: z.string().min(1, t("user.profile.form.lastName.messages.required")),
};

const formValues = reactive({
  givenName: user.value?.givenName || "",
  middleNames: user.value?.middleNames || "",
  surname: user.value?.surname || "",
});

const prefabsTechVueUpdateProfile = ref();
const errorMessage = ref<string>();
const loading = ref<boolean>(false);

const isDirty = computed(() => {
  return prefabsTechVueUpdateProfile.value?.meta?.dirty;
});

const onCancel = () => {
  prefabsTechVueUpdateProfile.value.resetForm();

  errorMessage.value = undefined;
};

const onSubmit = async (data: UpdateProfileInputType) => {
  loading.value = true;

  updateUserProfile(data, config.apiBaseUrl)
    .then((response) => {
      if ("data" in response) {
        emitter.emit("notify", {
          text: t("user.profile.form.messages.success"),
          type: "success",
        });

        setUser(response.data);
      } else {
        emitter.emit("notify", {
          text: t("user.profile.form.messages.error"),
          type: "error",
        });
      }
    })
    .catch((error) => {
      errorMessage.value = error.message;
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>

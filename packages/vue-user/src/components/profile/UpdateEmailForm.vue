<template>
  <Message
    v-if="errorMessage"
    :message="errorMessage"
    enable-close
    severity="danger"
    @close="errorMessage = undefined"
  />

  <Form ref="prefabsTechVueUpdateEmail" @submit="onSubmit">
    <Email
      v-model="email"
      :error-messages="errorMessages"
      :label="t('user.profile.accountInfo.newEmail')"
      name="email"
    />

    <FormActions
      :loading="loading || !isEmailDirty"
      :submit-label="t('user.profile.form.actions.update')"
      reverse
      @cancel="onCancel"
    />
  </Form>
</template>

<script lang="ts">
export default {
  name: "UpdateEmailForm",
};
</script>

<script setup lang="ts">
import { useConfig } from "@prefabs.tech/vue3-config";
import { Email, Form, FormActions } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Message } from "@prefabs.tech/vue3-ui";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";

import { getMe } from "../../api/user";
import { emitter, useTranslations } from "../../index";
import useUserStore from "../../store";
import { changeEmail } from "../../supertokens";

type UpdateEmailFormData = {
  email: string;
};

const emit = defineEmits(["email:updateProcessed"]);

const config = useConfig();

const messages = useTranslations();
const { t } = useI18n({ messages });

const userStore = useUserStore();
const setUser = userStore.setUser;
const { user } = storeToRefs(userStore);

const errorMessages = {
  invalid: t("user.profile.accountInfo.messages.invalid"),
  required: t("user.profile.accountInfo.messages.email"),
};

const prefabsTechVueUpdateEmail = ref();
const email = ref<string | undefined>(user.value?.email);
const errorMessage = ref<string>();
const loading = ref<boolean>(false);

const isEmailDirty = computed(() => {
  return user.value?.email !== email.value;
});

const onCancel = () => {
  prefabsTechVueUpdateEmail.value.resetForm();

  errorMessage.value = undefined;
};

const onSubmit = async (data: UpdateEmailFormData) => {
  loading.value = true;

  try {
    const response = await changeEmail(data.email, config.apiBaseUrl);
    switch (response?.status) {
      case "OK": {
        const userInfo = await getMe(config.apiBaseUrl);
        const isSameEmail = userInfo.data.email === user.value?.email;

        if (config.user?.features?.signUp?.emailVerification && isSameEmail) {
          emitter.emit("notify", {
            text: t("user.profile.accountInfo.messages.emailSent"),
            type: "success",
          });
        } else {
          setUser(userInfo.data);
          emitter.emit("notify", {
            text: t("user.profile.accountInfo.messages.success"),
            type: "success",
          });
        }

        emit("email:updateProcessed");
        prefabsTechVueUpdateEmail.value?.resetForm();

        errorMessage.value = undefined;
        break;
      }
      case "EMAIL_ALREADY_EXISTS_ERROR": {
        errorMessage.value = t(
          "user.profile.accountInfo.messages.alreadyExist",
        );
        break;
      }
      case "EMAIL_SAME_AS_CURRENT_ERROR": {
        errorMessage.value = t("user.profile.accountInfo.messages.duplicate");
        break;
      }
      case "EMAIL_INVALID_ERROR": {
        errorMessage.value = t("user.profile.accountInfo.messages.invalid");
        break;
      }
      case "EMAIL_FEATURE_DISABLED_ERROR": {
        errorMessage.value = t("user.profile.accountInfo.messages.disabled");
        break;
      }
      default: {
        errorMessage.value = t("user.profile.accountInfo.messages.error");
        break;
      }
    }

    loading.value = false;
  } catch (error) {
    errorMessage.value = t("user.profile.accountInfo.messages.error");

    loading.value = false;
  }
};

defineExpose({
  onCancel,
});
</script>

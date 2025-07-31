<template>
  <div class="account-info">
    <Data
      :caption="t('user.profile.accountInfo.label')"
      :class="canUpdateEmail ? 'update-email' : ''"
    >
      <template #value>
        {{ user?.email }}

        <ButtonElement
          v-if="canUpdateEmail"
          :label="t('user.profile.accountInfo.actions.update')"
          severity="secondary"
          size="small"
          variant="textOnly"
          @click="showModal = true"
        >
          <template #iconLeft>
            <svg
              height="20"
              width="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M4.21 20.52a.73.73 0 0 1-.52-.21a.75.75 0 0 1-.22-.6l.31-3.84A.73.73 0 0 1 4 15.4L15.06 4.34a3.2 3.2 0 0 1 2.28-.86a3.3 3.3 0 0 1 2.25.91a3.31 3.31 0 0 1 .11 4.5L8.63 20a.77.77 0 0 1-.46.22l-3.89.35Zm1-4.26L5 19l2.74-.25l10.9-10.92A1.72 1.72 0 0 0 17.31 5a1.6 1.6 0 0 0-1.19.42ZM15.59 4.87"
              />
            </svg>
          </template>
        </ButtonElement>
      </template>
    </Data>

    <UpdateEmailModal
      v-if="canUpdateEmail"
      :show="showModal"
      @on:close="showModal = false"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "AccountInfo",
};
</script>

<script setup lang="ts">
import { useConfig } from "@prefabs.tech/vue3-config";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { ButtonElement, Data } from "@prefabs.tech/vue3-ui";
import { storeToRefs } from "pinia";
import { ref } from "vue";

import UpdateEmailModal from "./UpdateEmailModal.vue";
import { useTranslations } from "../../index";
import useUserStore from "../../store";

const messages = useTranslations();
const { t } = useI18n({ messages });
const { user: userConfig } = useConfig();
const userStore = useUserStore();

const { user } = storeToRefs(userStore);

const canUpdateEmail =
  userConfig?.features?.updateEmail && !user.value?.thirdParty;

const showModal = ref<boolean>(false);
</script>

<style lang="css">
@import "../../assets/css/profile/account-info.css";
</style>

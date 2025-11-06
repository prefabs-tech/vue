<template>
  <Page :title="t('user.profile.title')" class="profile">
    <TabView
      id="profile-tabs"
      :active-key="activeKey"
      :tabs="tabList"
      :visible-tabs="visibleTabs"
      enable-hash-routing
    >
      <div v-for="tab in tabList" :key="tab.key" :class="tab.key">
        <ProfileForm v-if="tab.key === 'profile'">
          <slot name="profileFields" />
        </ProfileForm>

        <template v-else-if="tab.key === 'credentials'">
          <AccountInfo />

          <div class="change-password"></div>
          <ChangePasswordTab v-if="!isSocialLogin">
            <template #instructions>
              <slot name="changePasswordInstructions"></slot>
            </template>
          </ChangePasswordTab>
        </template>
      </div>
    </TabView>
  </Page>
</template>

<script lang="ts">
export default {
  name: "Profile",
};
</script>

<script setup lang="ts">
import { useConfig } from "@prefabs.tech/vue3-config";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Page, TabView } from "@prefabs.tech/vue3-ui";
import { computed, ref } from "vue";

import ChangePasswordTab from "./ChangePasswordTab.vue";
import AccountInfo from "../../components/profile/AccountInfo.vue";
import ProfileForm from "../../components/profile/ProfileForm.vue";
import { useTranslations } from "../../index";
import useUserStore from "../../store";

import type { AppConfig } from "@prefabs.tech/vue3-config";
import type { Tab } from "@prefabs.tech/vue3-ui";
import type { PropType } from "vue";

const props = defineProps({
  activeKey: {
    default: "profile",
    type: String,
  },
  additionalTabs: {
    default: () => [],
    type: Array as PropType<Tab[]>,
  },
  visibleTabs: {
    default: () => [],
    type: Array as PropType<string[]>,
  },
});

const config = useConfig() as AppConfig;

const messages = useTranslations();
const { t } = useI18n({ messages });

const userStore = useUserStore();
const { user } = userStore;

const tabList = ref<Tab[]>([
  { key: "profile", label: t("user.profile.tabs.profile") },
  { key: "credentials", label: t("user.profile.tabs.credentials") },
]);

const isSocialLogin = computed(() => {
  return (
    user?.thirdParty &&
    config.user?.socialLogins?.includes(user?.thirdParty?.id)
  );
});

const prepapareComponent = () => {
  if (props.additionalTabs.length) {
    tabList.value.push(...props.additionalTabs);
  }
};

prepapareComponent();
</script>

<style lang="css">
.page.profile > .page-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0;
}

.page.profile .tabbed-panel .credentials {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>

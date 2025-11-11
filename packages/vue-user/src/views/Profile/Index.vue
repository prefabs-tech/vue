<template>
  <Page :title="t('user.profile.title')" class="profile">
    <TabView
      id="profile-tabs"
      :active-key="activeKey"
      :tabs="mergedTabs"
      :visible-tabs="visibleTabs"
      enable-hash-routing
    >
      <div v-for="tab in mergedTabs" :key="tab.key" :class="tab.key">
        <template v-if="tab.key === 'profile'">
          <slot name="profile">
            <ProfileForm>
              <slot name="profileFields" />
            </ProfileForm>
          </slot>
        </template>

        <template v-else-if="tab.key === 'credentials'">
          <slot name="credentials">
            <section>
              <h2>{{ t("user.profile.accountInfo.title") }}</h2>
              <AccountInfo />
            </section>

            <section>
              <h2>{{ t("user.profile.updatePassword.title") }}</h2>
              <ChangePasswordTab v-if="!isSocialLogin">
                <template #instructions>
                  <slot name="changePasswordInstructions"></slot>
                </template>
              </ChangePasswordTab>
            </section>
          </slot>
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
import { computed } from "vue";

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
  tabs: {
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

const defaultTabs = [
  {
    key: "profile",
    label: t("user.profile.tabs.profile"),
  },
  {
    key: "credentials",
    label: t("user.profile.tabs.credentials"),
  },
] as Tab[];

const isSocialLogin = computed(() => {
  return (
    user?.thirdParty &&
    config.user?.socialLogins?.includes(user?.thirdParty?.id)
  );
});

const mergedTabs = computed(() => [
  ...defaultTabs.map((defaultTab) => {
    const override = props.tabs.find((tab) => tab.key === defaultTab.key);
    return override ? { ...defaultTab, ...override } : defaultTab;
  }),
  ...props.tabs.filter(
    (tab) => !defaultTabs.some((defaultTab) => defaultTab.key === tab.key),
  ),
]);
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

.page.profile .tabbed-panel h2,
.page.profile .tabbed-panel h2 {
  font-weight: 500;
  margin-bottom: 1rem;
}
</style>

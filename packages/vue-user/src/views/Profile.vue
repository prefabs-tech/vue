<template>
  <Page :title="t('user.profile.title')" class="profile">
    <TabView id="profile-tabs" :active-key="tabList[0].key" :tabs="tabList">
      <div :key="tabList[0].key">
        <ProfileForm>
          <slot name="profileFields" />
        </ProfileForm>
      </div>
      <div :key="tabList[1].key">
        <AccountInfo />

        <ChangePassword>
          <slot name="changePasswordInstructions"></slot>
        </ChangePassword>
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
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Page, TabView } from "@prefabs.tech/vue3-ui";

import ChangePassword from "./ChangePassword.vue";
import AccountInfo from "../components/profile/AccountInfo.vue";
import ProfileForm from "../components/profile/ProfileForm.vue";
import { useTranslations } from "../index";

const messages = useTranslations();

const { t } = useI18n({ messages });

const tabList = [
  { key: "profile", label: t("user.profile.tabs.profile") },
  { key: "credentials", label: t("user.profile.tabs.credentials") },
];
</script>

<style lang="css">
.page.profile > .page-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0;
}
</style>

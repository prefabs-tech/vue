<template>
  <Page :title="t('user.profile.title')" class="profile">
    <TabView id="profile-tabs" :active-key="tabList[0].key" :tabs="tabList">
      <div v-for="tab in tabList" :key="tab.key" :class="tab.key">
        <ProfileForm v-if="tab.key === tabList[0].key">
          <slot name="profileFields" />
        </ProfileForm>

        <template v-else-if="tab.key === tabList[1].key">
          <AccountInfo />

          <ChangePassword>
            <template #instructions>
              <slot name="changePasswordInstructions"></slot>
            </template>
          </ChangePassword>
        </template>

        <template v-else>
          <slot :name="tab.key"></slot>
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
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Page, TabView } from "@prefabs.tech/vue3-ui";
import { ref } from "vue";

import ChangePassword from "./ChangePassword.vue";
import AccountInfo from "../components/profile/AccountInfo.vue";
import ProfileForm from "../components/profile/ProfileForm.vue";
import { useTranslations } from "../index";

import type { Tab } from "@prefabs.tech/vue3-ui";
import type { PropType } from "vue";

const props = defineProps({
  additionalTabs: {
    default: () => [],
    type: Array as PropType<Tab[]>,
  },
});

const messages = useTranslations();

const { t } = useI18n({ messages });

const tabList = ref<Tab[]>([
  { key: "profile", label: t("user.profile.tabs.profile") },
  { key: "credentials", label: t("user.profile.tabs.credentials") },
]);

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

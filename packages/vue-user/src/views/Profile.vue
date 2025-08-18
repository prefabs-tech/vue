<template>
  <Page :title="t('user.profile.title')" class="profile">
    <AccountInfo />
    <ProfileForm />
  </Page>
</template>

<script lang="ts">
export default {
  name: "Profile",
};
</script>

<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Page } from "@prefabs.tech/vue3-ui";

import AccountInfo from "../components/profile/AccountInfo.vue";
import ProfileForm from "../components/profile/ProfileForm.vue";
import { useTranslations } from "../index";

const messages = useTranslations();

const { t } = useI18n({ messages });
</script>

<style lang="css">
.page.profile > .page-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0;
}
</style>

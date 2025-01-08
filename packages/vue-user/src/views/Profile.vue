<template>
  <Page :title="t('user.profile.title')" class="profile">
    <AccountInfo />
  </Page>
</template>

<script lang="ts">
export default {
  name: "Profile",
};
</script>

<script setup lang="ts">
import { useI18n } from "@dzangolab/vue3-i18n";
import { Page } from "@dzangolab/vue3-ui";

import AccountInfo from "../components/profile/AccountInfo.vue";
import { useTranslations } from "../index";

const messages = useTranslations();

const { t } = useI18n({ messages });
</script>

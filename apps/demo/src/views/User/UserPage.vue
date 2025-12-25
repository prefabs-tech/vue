<template>
  <div class="demo">
    <Sidebar :menu="menu" class="demo-aside" no-header />
    <div class="demo-main">
      <Page :title="title" :sub-title="subTitle">
        <template #toolbar>
          <slot name="toolbar">
            <ButtonElement
              :label="$t('common.back')"
              icon-left="pi pi-chevron-left"
              size="medium"
              variant="textOnly"
              @click="$router.push({ name: 'user' })"
            />
          </slot>
        </template>
        <slot></slot>
      </Page>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "UserPage",
};
</script>

<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Sidebar } from "@prefabs.tech/vue3-layout";
import { ButtonElement } from "@prefabs.tech/vue3-ui";

import type { PropType } from "vue";

defineProps({
  subTitle: {
    default: undefined,
    required: false,
    type: String as PropType<string>,
  },
  title: {
    default: undefined,
    required: false,
    type: String as PropType<string>,
  },
});

const { t } = useI18n();

const menu = [
  {
    name: "Get started",
    routeName: "",
  },
  {
    name: t("user.label.invitationForm"),
    routeName: "invitationForm",
  },
  {
    name: t("user.label.invitationModal"),
    routeName: "invitationModal",
  },
  {
    name: t("user.label.invitationTable"),
    routeName: "invitationTable",
  },
  {
    name: t("user.label.usersTable"),
    routeName: "usersTable",
  },
];
</script>

<style lang="css">
@import "@/assets/css/demoPage.css";
</style>

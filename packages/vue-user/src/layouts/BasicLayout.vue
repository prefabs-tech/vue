<template>
  <OriginalBasicLayout>
    <template #header>
      <AppHeader>
        <template #logo>
          <Logo :route="home" />
        </template>
        <template #userMenu>
          <UserMenu class="userMenu" />
        </template>
      </AppHeader>
    </template>

    <slot></slot>
  </OriginalBasicLayout>
</template>

<script lang="ts">
export default {
  name: "BasicLayout",
};
</script>

<script setup lang="ts">
import { useConfig } from "@dzangolab/vue3-config";
import {
  AppHeader,
  BasicLayout as OriginalBasicLayout,
  Logo,
} from "@dzangolab/vue3-layout";
import { storeToRefs } from "pinia";
import { computed } from "vue";

import UserMenu from "../components/UserMenu.vue";
import useUserStore from "../store";

const userStore = useUserStore();

const { user } = storeToRefs(userStore);

const home = computed(() => {
  const { layout: layoutConfig, user: userConfig } = useConfig();

  return user.value
    ? userConfig && userConfig?.routes?.home
      ? userConfig.routes.home
      : "profile"
    : layoutConfig && layoutConfig?.homeRoute
    ? layoutConfig.homeRoute
    : undefined;
});
</script>

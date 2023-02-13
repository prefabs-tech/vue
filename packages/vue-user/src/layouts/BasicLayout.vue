<template>
  <OriginalBasicLayout>
    <template #header>
      <AppHeader>
        <template #logo>
          <Logo class="logo" />
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
import {
  AppHeader,
  BasicLayout as OriginalBasicLayout,
} from "@dzangolab/vue3-layout";

import Logo from "../components/Logo.vue";
import UserMenu from "../components/UserMenu.vue";
</script>

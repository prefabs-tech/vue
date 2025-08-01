<template>
  <DropdownUserMenu
    v-if="user"
    class="user-menu"
    :user="user"
    @logout="handleLogout"
  >
    <template v-if="$slots.userMenuTrigger" #userMenuTrigger>
      <slot name="userMenuTrigger"></slot>
    </template>
  </DropdownUserMenu>
  <SignInUpMenu v-else class="user-menu" />
</template>

<script lang="ts">
export default {
  name: "UserMenu",
};
</script>

<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

import DropdownUserMenu from "./DropdownUserMenu.vue";
import SignInUpMenu from "./SignInUpMenu.vue";
import { emitter, useTranslations } from "../index";
import useUserStore from "../store";

const messages = useTranslations();

const { t } = useI18n({ messages });

const userStore = useUserStore();

const { user } = storeToRefs(userStore);

const { logout } = userStore;

const router = useRouter();

const handleLogout = async () => {
  await logout();

  router.push({ name: "login" }).then(() =>
    emitter.emit("notify", {
      text: t("user.logout.message"),
      type: "success",
    }),
  );
};
</script>

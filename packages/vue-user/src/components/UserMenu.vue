<template>
  <DropdownUserMenu
    v-if="user"
    class="user-menu"
    :user="user"
    :user-menu-items="userMenuItems"
    @select:menu="$emit('select:menu')"
    @logout="handleLogout"
  >
    <template v-if="$slots.userMenuTrigger" #userMenuTrigger>
      <slot name="userMenuTrigger"></slot>
    </template>
  </DropdownUserMenu>
  <SignInUpMenu v-else class="user-menu" @select:menu="$emit('select:menu')" />
</template>

<script lang="ts">
export default {
  name: "UserMenu",
};
</script>

<script setup lang="ts">
import { useConfig } from "@prefabs.tech/vue3-config";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

import DropdownUserMenu from "./DropdownUserMenu.vue";
import SignInUpMenu from "./SignInUpMenu.vue";
import useUserStore from "../store";

import type { UserMenuItem } from "../types/userMenu";
import type { AppConfig } from "@prefabs.tech/vue3-config";
import type { PropType } from "vue";

defineProps({
  userMenuItems: {
    type: Array as PropType<UserMenuItem[]>,
    default: () => [],
  },
});

const config = useConfig() as AppConfig;

const userStore = useUserStore();

const { user } = storeToRefs(userStore);

const { logout } = userStore;

const router = useRouter();

const emit = defineEmits(["select:menu"]);

const handleLogout = async () => {
  const logoutRedirectRoute = config.user?.logoutRedirectRoute || "login";
  await logout();

  router.push({ name: logoutRedirectRoute });
  emit("select:menu");
};
</script>

<template>
  <header ref="dzangolabVueAppHeader">
    <slot name="logo" class="logo">
      <Logo v-if="!noLogo" :route="home" />
    </slot>
    <nav :data-expanded="expanded">
      <slot name="menu">
        <MainMenu
          v-if="layoutConfig?.mainMenu && !noMainMenu"
          class="main-menu"
          :routes="layoutConfig?.mainMenu"
          @close="close"
        />
      </slot>
      <slot name="userMenu"></slot>
      <slot name="addon" />
      <slot name="locales">
        <LocaleSwitcher v-if="!noLocaleSwitcher" class="locales" />
      </slot>
    </nav>
    <div class="toggle" @click="toggle">
      <slot name="toggle">
        <Icon v-if="expanded" icon="fa6-solid:bars-staggered" height="1.5rem" />
        <Icon v-else icon="fa6-solid:bars" height="1.5rem" />
      </slot>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: "AppHeader",
};
</script>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useConfig } from "@prefabs.tech/vue3-config";
import { LocaleSwitcher } from "@prefabs.tech/vue3-i18n";
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";

import Logo from "./Logo.vue";
import MainMenu from "./MainMenu.vue";

defineProps({
  noLocaleSwitcher: Boolean,
  noLogo: Boolean,
  noMainMenu: Boolean,
});

const { layout: layoutConfig } = useConfig();

const dzangolabVueAppHeader = ref(null);
const expanded = ref(false);

const home =
  layoutConfig && layoutConfig?.homeRoute ? layoutConfig.homeRoute : undefined;

const close = () => {
  expanded.value = false;
};

const toggle = () => {
  expanded.value = !expanded.value;
};

onClickOutside(dzangolabVueAppHeader, (event) => {
  expanded.value = false;
});

defineExpose({
  expanded,
});
</script>

<template>
  <header>
    <slot name="logo" class="logo">
      <Logo :route="home" />
    </slot>
    <nav :data-expanded="expanded">
      <slot name="menu">
        <MainMenu
          v-if="layoutConfig?.mainMenu"
          class="main-menu"
          :class="{ menuExpanded: expanded }"
          :routes="layoutConfig?.mainMenu"
          @close="close"
        />
      </slot>
      <slot name="userMenu"></slot>
      <slot name="locales">
        <LocaleSwitcher class="locales" />
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
import { useConfig } from "@dzangolab/vue3-config";
import { LocaleSwitcher } from "@dzangolab/vue3-i18n";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

import Logo from "./Logo.vue";
import MainMenu from "./MainMenu.vue";

const { layout: layoutConfig } = useConfig();

const expanded = ref(false);

const home =
  layoutConfig && layoutConfig?.homeRoute ? layoutConfig.homeRoute : undefined;

const close = () => {
  expanded.value = false;
};

const toggle = () => {
  expanded.value = !expanded.value;
};
</script>

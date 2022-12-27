<template>
  <header>
    <slot name="logo">
      <Logo class="logo" />
    </slot>
    <slot name="menu">
      <MainMenu class="mainMenu" :class="{ menuExpanded: expanded }" />
    </slot>
    <slot name="userMenu"> </slot>
    <slot name="locales">
      <LocaleSwitcher class="locales" :class="{ menuExpanded: expanded }" />
    </slot>
    <slot name="toggle">
      <div class="toggle" @click="expanded = !expanded">
        <Icon v-if="expanded" icon="fa6-solid:bars-staggered" height="1.5rem" />
        <Icon v-else icon="fa6-solid:bars" height="1.5rem" />
      </div>
    </slot>
  </header>
</template>

<script lang="ts">
export default {
  data() {
    return {
      expanded: false,
    };
  },

  name: "AppHeader",
};
</script>

<script setup lang="ts">
import { LocaleSwitcher } from "@dzangolab/vue3-i18n";
import { Icon } from "@iconify/vue";

import Logo from "./Logo.vue";
import MainMenu from "./MainMenu.vue";
</script>

<style lang="css">
header {
  align-items: start;
  display: grid;
  font-size: var(--header-font-size, 1rem);
  grid-template-areas:
    "logo toggle"
    "mainMenu mainMenu"
    "userMenu userMenu"
    "locales locales";
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  padding-bottom: 0.8rem;
  padding-top: 0.8rem;
  border-bottom: 1px solid #9e9e9e;
}

header > nav {
  display: none;
  margin-top: 1rem;
}

header > .logo {
  width: 6rem;
  grid-area: logo;
  max-width: 200px;
}

header > .toggle {
  grid-area: toggle;
  justify-self: right;
  align-self: center;
  cursor: pointer;
  margin-right: 1rem;
}

header > .mainMenu {
  grid-area: mainMenu;
}

header > .userMenu {
  grid-area: userMenu;
}

header > .locales {
  grid-area: locales;
  width: 100%;
}

header .menuExpanded {
  display: flex;
  column-gap: var(--header-gap, 1rem);
}

@media screen and (min-width: 576px) {
  header {
    grid-template-areas: "logo mainMenu userMenu locales toggle";
    align-items: center;
    grid-gap: var(--header-gap, 1rem);
    grid-template-columns: var(
      --header-grid-template-columns,
      auto 1fr auto 6rem auto
    );
    grid-template-rows: auto;
  }

  header > nav {
    display: flex;
    margin-top: 0rem;
  }

  header > .toggle {
    display: none;
  }
}
</style>

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
  border-bottom: 1px solid var(--header-border-color, #4169e1);
  display: grid;
  font-size: var(--header-font-size, 1rem);
  grid-template-areas:
    "logo toggle"
    "mainMenu mainMenu"
    "userMenu userMenu"
    "locales locales";
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  padding-bottom: var(--header-padding-top, 1em);
  padding-top: var(--header-padding-bottom, 1em);
}

header::before {
  content: "";
  background-color: var(--header-bg-color, lightblue);
  box-shadow: 0 0 0 100vmax var(--header-bg-color, lightblue);
  clip-path: inset(
    calc(-1 * var(--header-padding-top, 1em)) -100vmax calc(
        -1 * var(--header-padding-bottom, 1em)
      ) -100vmax
  );
  grid-column: 1 / end;
  grid-row: 1 / 1;
  height: 100%;
  z-index: -1;
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
    grid-template-areas: "logo mainMenu userMenu locales";
    align-items: center;
    grid-gap: var(--header-gap, 1rem);
    grid-template-columns: var(
      --header-grid-template-columns,
      auto 1fr auto 6rem
    );
    grid-template-rows: auto;
  }

  header > nav {
    display: flex;
    overflow: visible;
    margin-top: 0;
  }

  header > .toggle {
    display: none;
  }
}
</style>

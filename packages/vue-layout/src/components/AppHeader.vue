<template>
  <header>
    <slot name="logo" class="logo">
      <Logo :route="home" />
    </slot>
    <nav :data-expanded="expanded">
      <slot name="menu">
        <MainMenu
          v-if="layoutConfig?.mainMenu"
          class="mainMenu"
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

<style lang="css">
.layout header {
  align-items: center;
  border-bottom: 1px solid var(--header-border-color, var(--border-color, #000));
  display: grid;
  font-size: var(--header-font-size, 1rem);
  gap: var(--header-gap, 0.5em);
  grid-template-areas:
    "logo toggle"
    "nav nav";
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  justify-items: center;
  padding-bottom: var(--header-padding-top, 1em);
  padding-top: var(--header-padding-bottom, 1em);
  position: relative;
}

.layout header::before {
  content: "";
  background-color: var(--header-bg-color, transparent);
  box-shadow: 0 0 0 100vmax var(--header-bg-color, transparent);
  clip-path: inset(
    calc(-1 * var(--header-padding-top, 1em)) -100vmax calc(
        -1 * var(--header-padding-bottom, 1em)
      ) -100vmax
  );
  grid-column: 1 / span 2;
  grid-row: 1 / 1;
  height: 100%;
  width: 100%;
  z-index: -1;
}

.layout header > nav {
  align-items: stretch;
  background-color: #fff;
  border-bottom: 1px solid var(--menu-border-color, #000);
  opacity: 1;
  display: flex;
  flex-direction: column;
  gap: var(--menu-gap, 1em);
  grid-area: nav;
  justify-content: flex-start;
  left: 0;
  margin-left: calc(-1 * var(--layout-basic-padding-left, 1em));
  margin-right: calc(-1 * var(--layout-basic-padding-right, 1em));
  padding-bottom: var(--header-padding-bottom, 1em);
  padding-left: var(--layout-basic-padding-left, 1em);
  padding-right: var(--layout-basic-padding-right, 1em);
  padding-top: var(--header-padding-top, 1em);
  position: absolute;
  right: 0;
  top: var(--ehader-padding-top, 1em);
  z-index: 1;
}

.layout header > nav[data-expanded="false"] {
  display: none;
}

.layout header .logo {
  grid-area: logo;
  max-width: var(--header-logo-max-width, 150px);
}

.layout header .toggle {
  cursor: pointer;
  grid-area: toggle;
  justify-self: right;
}

.layout header .mainMenu {
  flex: 1;
}

@media screen and (min-width: 576px) {
  .layout header {
    grid-template-areas: "logo nav";
    grid-template-columns: auto 1fr;
    justify-items: stretch;
  }

  .layout header > nav {
    align-items: center;
    background-color: var(--header-bg-color, transparent);
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;
    top: 0;
  }

  .layout header > nav[data-expanded="false"] {
    display: flex;
  }

  .layout header .toggle {
    display: none;
  }
}
</style>

<template>
  <nav
    ref="dzangolabVueUserUserMenu"
    class="user-menu-dropdown"
    :class="{ expanded: expanded }"
    @click="toggle"
  >
    <div class="email">
      {{ user?.email }}
    </div>
    <span class="toggle">&dtrif;</span>
    <ul class="dropdown">
      <li>
        <router-link :to="{ name: 'profile' }">
          {{ $t("app.header.menu.profile") }}
        </router-link>
      </li>

      <li class="option" @click="$emit('logout')">
        {{ $t("app.header.menu.logout") }}
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  name: "DropdownUserMenu",
};
</script>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";

import type { User } from "../types";
import type { PropType } from "vue";

const expanded = ref(false);

defineEmits(["logout"]);

defineProps({
  user: {
    required: true,
    type: Object as PropType<User>,
  },
});

const toggle = () => {
  expanded.value = !expanded.value;
};

const dzangolabVueUserUserMenu = ref(null);

onClickOutside(dzangolabVueUserUserMenu, (event) => {
  expanded.value = false;
});
</script>

<style lang="css">
nav.user-menu-dropdown {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 0;
  justify-content: space-between;
  padding: 0;
  position: relative;
  min-width: var(--dropdown-width, 6rem);
}

nav.user-menu-dropdown .email {
  cursor: pointer;
}

nav.user-menu-dropdown > span.toggle {
  align-self: start;
  font-size: 1.5rem;
  line-height: 1.25rem;
  text-align: center;
  width: 1.25rem;
}

nav.user-menu-dropdown > ul.dropdown {
  background-color: var(--dropdown-bg-color, #fff);
  border: var(--dropdown-border, 1px solid grey);
  border-radius: var(--dropdown-border-radius, 5px);
  display: none;
  list-style: none;
  padding-inline-start: 0;
  padding: 0.15rem 0;
  position: absolute;
  right: 0;
  top: 100%;
  z-index: var(--dropdown-z-index, 9999);
}

nav.user-menu-dropdown.expanded > ul.dropdown {
  display: block;
}

nav.user-menu-dropdown > ul.dropdown > li {
  cursor: pointer;
  list-style: none;
  padding: 0.25rem 0.5rem;
}

nav.user-menu-dropdown > .dropdown > li:hover {
  background-color: var(--dropdown-bg-color-hover, #dbe9fa);
}

nav.user-menu-dropdown a {
  color: inherit;
  text-decoration: none;
}
</style>

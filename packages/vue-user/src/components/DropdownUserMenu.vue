<template>
  <nav
    ref="dzangolabVueUserUserMenu"
    class="user-menu"
    :class="{ expanded: expanded }"
  >
    <div class="email" @click="toggle">
      {{ user?.email }}
    </div>
    <span class="toggle" @click="toggle">&dtrif;</span>
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

<style scoped>
nav {
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  gap: 0;
  justify-content: space-between;
  padding: 0;
  position: relative;
  min-width: var(--dropdown-width, 6rem);
}

.email {
  cursor: pointer;
}

nav > span.toggle {
  align-self: start;
  font-size: 1.5rem;
  line-height: 1.25rem;
  text-align: center;
  width: 1.25rem;
}

nav > ul.dropdown {
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

nav.expanded > ul.dropdown {
  display: block;
}

nav > ul.dropdown > li {
  cursor: pointer;
  list-style: none;
  padding: 0.25rem 0.5rem;
}

nav > .dropdown > li:hover {
  background-color: var(--dropdown-bg-color-hover, #dbe9fa);
}

nav a {
  color: inherit;
  text-decoration: none;
}
</style>

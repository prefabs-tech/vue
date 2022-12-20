<template>
  <nav
    ref="dzangolabVueI18nLocaleSwitcher"
    class="locale-switcher"
    :class="{ expanded: expanded }"
  >
    <div class="locale truncated" @click="toggle">
      {{ current.name }}
    </div>
    <span class="truncated" @click="toggle">&dtrif;</span>
    <ul class="dropdown">
      <li
        v-for="l in availableLocales"
        :key="l"
        :class="{ current: l === current.locale }"
        class="truncated"
        @click="changeLocale(l)"
      >
        <LocaleOption :locale="l" :name="translateLocale(l)" />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  name: "LocaleSwitcher",
};
</script>

<script setup lang="ts">
import { useConfig } from "@dzangolab/vue3-config";
import { onClickOutside } from "@vueuse/core";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

import useLocaleStore from "../store";
import LocaleOption from "./LocaleOption.vue";

import type { AppConfig } from "@dzangolab/vue3-config";
import type { Locale } from "vue-i18n";

const { availableLocales, locale, t } = useI18n();

const config = useConfig() as AppConfig;

const expanded = ref(false);

const changeLocale = (newLocale: Locale) => {
  locale.value = newLocale;
  expanded.value = false;

  const { setLocale } = useLocaleStore(config.slug);

  setLocale(newLocale);
};

const current = computed(() => {
  return {
    locale: locale.value,
    name: translateLocale(locale.value),
  };
});

const toggle = () => {
  expanded.value = !expanded.value;
};

const translateLocale = (locale: Locale) => {
  return t(`locales.${locale}`);
};

const dzangolabVueI18nLocaleSwitcher = ref(null);

onClickOutside(dzangolabVueI18nLocaleSwitcher, (event) => {
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
  width: var(--locale-switcher-width, 6rem);
}

.locale {
  flex: 1;
  padding: 0 0.25rem;
}

nav > span {
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

nav.expanded ul {
  display: block;
}

nav > .dropdown > li {
  cursor: pointer;
  list-style: none;
  padding: 0.25rem 0.5rem;
}

nav li.current {
  display: none;
}

nav.expanded li:hover {
  background-color: var(--locale-switcher-bg-color-hover, #dbe9fa);
}

.truncated {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

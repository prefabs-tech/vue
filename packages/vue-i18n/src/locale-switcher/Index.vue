<template>
  <nav
    ref="dzangolabVueI18nLocaleSwitcher"
    class="locale-switcher"
    :class="{ expanded: expanded }"
  >
    <div class="locale-trigger" @click="toggle">
      <div class="locale truncated">
        {{ current.name }}
      </div>
      <span class="truncated">
        <slot name="icon">
          <img src="../assets/svg/chevron-down.svg" alt="locale" />
        </slot>
      </span>
    </div>
    <ul class="dropdown">
      <li
        v-for="l in availableLocales"
        :key="l"
        :class="{ current: l === current.locale }"
        class="truncated"
        @click="changeLocale(l)"
      >
        <LocaleOption
          :locale="l"
          :name="translateLocale(l)"
          :show-badges="showBadges"
        />
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
import { useConfig } from "@prefabs.tech/vue3-config";
import { onClickOutside } from "@vueuse/core";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

import LocaleOption from "./LocaleOption.vue";
import useLocaleStore from "../store";

import type { AppConfig } from "@prefabs.tech/vue3-config";
import type { Locale } from "vue-i18n";

defineProps({
  showBadges: {
    default: true,
    type: Boolean,
  },
});

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
@import "../assets/css/locale-switcher.css";
</style>

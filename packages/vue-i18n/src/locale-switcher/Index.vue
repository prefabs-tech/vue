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
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 15.25a.74.74 0 0 1-.53-.22l-5-5A.75.75 0 0 1 7.53 9L12 13.44L16.47 9a.75.75 0 0 1 1.06 1l-5 5a.74.74 0 0 1-.53.25"
              fill="currentColor"
            />
          </svg>
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

<style lang="css">
@import "../assets/css/locale-switcher.css";
</style>

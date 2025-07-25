<template>
  <div class="logo">
    <slot>
      <router-link :to="{ name: logoRoute }">
        <img v-if="logoSource" :alt="logoAlt" :src="logoSource" />
        <span v-else class="logo-default">
          <span>{{ logoAlt[0] }}</span>
          <span>{{ logoAlt }}</span>
        </span>
      </router-link>
    </slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "Logo",
};
</script>

<script setup lang="ts">
import { useConfig } from "@prefabs.tech/vue3-config";
import { computed } from "vue";

import type { PropType } from "vue";

const props = defineProps({
  alt: {
    default: undefined,
    type: String,
  },
  route: {
    default: undefined,
    type: String as PropType<string>,
  },
  src: {
    default: undefined,
    type: String,
  },
});

const { appName, appTitle, layout: layoutConfig } = useConfig();

const parseAppName = computed(() => {
  if (!appName) {
    return;
  }

  return appName.replace("@", "").replace("/", " ");
});

const logoAlt =
  props.alt ||
  layoutConfig?.logoAlt ||
  parseAppName.value ||
  appTitle ||
  "My App";
const logoSource = props.src || layoutConfig?.logo;
const logoRoute = props.route || layoutConfig?.logoRoute || "home";
</script>

<style lang="css">
@import "../assets/css/components/logo.css";
</style>

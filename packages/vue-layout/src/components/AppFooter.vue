<template>
  <footer>
    <slot name="copyright">
      <Copyright
        v-if="config?.copyright"
        :holder="config.copyright.holder"
        :url="config.copyright.url"
      />
    </slot>
    <slot name="social"> </slot>
    <slot name="version">
      <div class="version">
        {{ config.appVersion }}
      </div>
    </slot>
  </footer>
</template>

<script lang="ts">
export default {
  name: "AppFooter",
};
</script>

<script setup lang="ts">
import type { AppConfig } from "@prefabs.tech/vue3-config";

import { useConfig } from "@prefabs.tech/vue3-config";

import Copyright from "./Copyright.vue";

const config = useConfig() as AppConfig;
</script>

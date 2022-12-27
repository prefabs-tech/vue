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
      <div>
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
import { useConfig } from "@dzangolab/vue3-config";

import Copyright from "./Copyright.vue";

import type { AppConfig } from "@dzangolab/vue3-config";

const config = useConfig() as AppConfig;
</script>

<style lang="css">
footer {
  align-items: center;
  display: flex;
  flex-direction: var(--footer-flex-direction, row);
  justify-content: var(--footer-layout, space-between);
  font-size: var(--footer-font-size, 0.9rem);
  padding-bottom: 0.8rem;
  padding-top: 0.8rem;
}
</style>

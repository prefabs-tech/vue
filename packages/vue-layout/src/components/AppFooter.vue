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
import { useConfig } from "@dzangolab/vue3-config";

import Copyright from "./Copyright.vue";

import type { AppConfig } from "@dzangolab/vue3-config";

const config = useConfig() as AppConfig;
</script>

<style lang="css">
footer {
  align-items: center;
  background-color: var(--footer-bg-color, transparent);
  border-top: 1px solid var(--footer-border-color, #000);
  box-shadow: 0 0 0 100vmax var(--footer-bg-color, transparent);
  clip-path: inset(0 -100vmax);
  display: flex;
  flex-direction: column;
  gap: var(--footer-gap, 0.5em);
  justify-content: center;
  font-size: var(--footer-font-size, 0.9em);
  padding: 1em 0;
  text-align: center;
}

@media screen and (min-width: 576px) {
  footer {
    flex-direction: row;
    justify-content: space-between;
  }
}

.version {
  font-size: 0.8em;
}
</style>

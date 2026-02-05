<template>
  <span class="badge"
    >{{ l }} <span v-if="country" class="country">{{ country }}</span></span
  >
</template>

<script lang="ts">
export default {
  name: "LocaleBadge",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

import type { PropType } from "vue";

const props = defineProps({
  locale: {
    required: true,
    type: String as PropType<string>,
  },
});

const l = computed(() => {
  return props.locale.slice(0, 2);
});

const country = computed(() => {
  const tokens = props.locale.split("-");

  if (tokens.length > 1) {
    return tokens[1];
  }

  return undefined;
});
</script>

<style lang="css" scoped>
.country {
  bottom: -0.35rem;
  background: var(--locale-switcher-badge-country-bf-color, #007aff);
  color: var(--locale-switcher-badge-country-color, #fff);
  font-size: 0.5rem;
  font-weight: bold;
  line-height: 1.25;
  padding: 1px 2px;
  position: absolute;
  right: -0.25rem;
}

.badge {
  align-items: center;
  background-color: var(--locale-switcher-badge-bg-color, #007aff);
  border-radius: 50%;
  display: flex;
  font-size: 0.9rem;
  height: 2em;
  justify-content: center;
  position: relative;
  text-align: center;
  width: 2em;
}
</style>

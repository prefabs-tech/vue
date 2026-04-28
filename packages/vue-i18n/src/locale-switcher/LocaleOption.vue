<template>
  <div class="locale">
    <Badge v-if="showBadges" :locale="locale" />
    {{ name }}
  </div>
</template>

<script lang="ts">
export default {
  name: "LocaleOption",
};
</script>

<script setup lang="ts">
import type { PropType } from "vue";

import Badge from "./Badge.vue";

defineProps({
  locale: {
    required: true,
    type: String as PropType<string>,
  },
  name: {
    required: true,
    type: String as PropType<string>,
  },
  showBadges: {
    default: true,
    type: Boolean,
  },
});
</script>

<style lang="css">
ul.dropdown .locale {
  align-items: center;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-start;
}
</style>

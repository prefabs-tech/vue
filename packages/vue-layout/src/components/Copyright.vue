<template>
  <div class="copyright">
    &copy; <a :href="url" target="_blank">{{ holder }}</a>
  </div>
</template>

<script lang="ts">
export default {
  name: "Copyright",
};
</script>

<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  holder: {
    required: true,
    type: String as PropType<string>,
  },
  url: {
    required: true,
    type: String as PropType<string>,
  },
});
</script>

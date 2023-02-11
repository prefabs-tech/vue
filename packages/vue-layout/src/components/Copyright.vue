<template>
  <div class="copyright">
    &copy; {{ year }} <a :href="url" target="_blank">{{ holder }}</a
    >.&nbsp;
    {{ copyright }}
  </div>
</template>

<script lang="ts">
export default {
  name: "Copyright",
};
</script>

<script setup lang="ts">
import { useI18n } from "@dzangolab/vue3-i18n";
import { computed } from "vue";

import { useTranslations } from "../index";

import type { LocaleMessages, VueMessageType } from "@dzangolab/vue3-i18n";
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

const messages = useTranslations() as LocaleMessages<VueMessageType>;

const { t } = useI18n({ messages });

const copyright = computed(() => {
  return t("copyright.disclaimer");
});

const year = new Date().getFullYear();
</script>

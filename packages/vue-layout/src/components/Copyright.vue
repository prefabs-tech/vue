<template>
  <div class="copyright">
    &copy; {{ year }} <a :href="url" target="_blank">{{ holder }}</a
    >&nbsp;
    {{ copyright }}
  </div>
</template>

<script lang="ts">
export default {
  name: "Copyright",
};
</script>

<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { computed } from "vue";

import { useTranslations } from "../index";

import type { LocaleMessages, VueMessageType } from "@prefabs.tech/vue3-i18n";
import type { PropType } from "vue";

const props = defineProps({
  holder: {
    required: true,
    type: String as PropType<string>,
  },
  showDisclaimer: Boolean,
  url: {
    required: true,
    type: String as PropType<string>,
  },
});

const messages = useTranslations() as LocaleMessages<VueMessageType>;

const { t } = useI18n({ messages });

const copyright = computed(() => {
  return props.showDisclaimer ? t("copyright.disclaimer") : null;
});

const year = new Date().getFullYear();
</script>

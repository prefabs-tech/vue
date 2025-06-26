<template>
  <div class="terms">
    <i18n-t keypath="user.signup.form.termsAndConditions" tag="p">
      <component :is="linkComponent" v-bind="linkProperties">
        {{ t("user.signup.form.termsLabel") }}
      </component>
    </i18n-t>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "@dzangolab/vue3-i18n";
import { computed } from "vue";
import { RouterLink, useRouter } from "vue-router";

import { useTranslations } from "../index";

const props = defineProps({
  route: {
    type: String,
    default: undefined,
  },
});

const messages = useTranslations();
const { t } = useI18n({ messages });
const router = useRouter();

const isInternalRoute = computed(() =>
  router
    .getRoutes()
    .some((r) => r.name === props.route || r.path === props.route),
);

const linkComponent = computed(() => {
  if (!props.route) {
    return "span";
  }

  return isInternalRoute.value ? RouterLink : "a";
});

const linkProperties = computed(() => {
  if (!props.route) {
    return;
  }

  return isInternalRoute.value ? { to: props.route } : { href: props.route };
});
</script>

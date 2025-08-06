<template>
  <Page
    class="auth password-reset-acknowledge"
    :title="t('user.passwordResetAcknowledge.title')"
  >
    <i18n-t
      class="acknowledge"
      keypath="user.passwordResetAcknowledge.content"
      tag="p"
    >
      <span class="email">{{ route.query.email }}</span>
    </i18n-t>

    <nav class="links">
      <p class="resend-email">
        {{ t("user.passwordResetAcknowledge.label.notReceived") }}
        <RouterLink :to="{ name: 'resetPasswordRequest' }">
          {{ t("user.passwordResetAcknowledge.actions.resend") }}
        </RouterLink>
      </p>
    </nav>

    <i18n-t
      class="redirect"
      keypath="user.passwordResetAcknowledge.label.redirect"
      tag="p"
    >
      <span class="seconds">{{ seconds }}</span>
    </i18n-t>
  </Page>
</template>

<script lang="ts">
export default {
  name: "PasswordResetRequestAcknowledge",
};
</script>

<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Page } from "@prefabs.tech/vue3-ui";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useTranslations } from "../index";

import "../assets/css/auth.css";

const messages = useTranslations();

const { t } = useI18n({ messages });

const route = useRoute();
const router = useRouter();

let seconds = ref<number>(30);

const redirectCountDown = () => {
  if (!route.query.email) {
    seconds.value = 0;
    router.push({ name: "resetPasswordRequest" });
  }

  if (seconds.value > 0) {
    setTimeout(() => {
      seconds.value--;
      redirectCountDown();
    }, 1000);
  } else {
    router.push({ name: "resetPasswordRequest" });
  }
};

onMounted(() => {
  redirectCountDown();
});
</script>

<style lang="css">
.password-reset-acknowledge .resend-email {
  font-style: italic;
}

.password-reset-acknowledge .resend-email a {
  color: var(--dz-primary-color, #007aff);
  cursor: pointer;
  text-decoration: none;
}
</style>

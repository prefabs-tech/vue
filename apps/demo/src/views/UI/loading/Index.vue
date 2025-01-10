<template>
  <UiPage :title="$t('ui.loading.title')" class="demo-loading">
    <template #toolbar>
      <router-link :to="{ name: 'ui' }" class="back">
        {{ $t("common.back") }}
      </router-link>
    </template>

    <section>
      <h2>{{ $t("ui.loading.usage.basic") }}</h2>

      <div class="section-content">
        <div class="container">
          <ButtonElement
            :label="$t('ui.loading.buttonLabel.clickMe')"
            @click="startLoading"
          />

          <LoadingPage :loading="loading" />
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement label="Click me" @click="startLoading" /&gt;

            &lt;LoadingPage :loading="loading" /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt; 
            import { ButtonElement, LoadingPage } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const loading = ref(false);

            const startLoading = () => {
              loading.value = true;

              setTimeout(() => {
                loading.value = false;
              }, 5000);
            };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </UiPage>
</template>

<script setup lang="ts">
import { ButtonElement, LoadingPage } from "@dzangolab/vue3-ui";
import { ref } from "vue";

import UiPage from "../UiPage.vue";

const loading = ref(false);

const startLoading = () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
  }, 5000);
};
</script>

<style lang="css">
.demo-loading section {
  margin-bottom: 2.5em;
}

.demo-loading .section-content {
  display: grid;
  gap: 1rem;
}
</style>

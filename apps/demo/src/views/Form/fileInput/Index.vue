<template>
  <FormPage :title="$t('form.label.fileInput')" class="demo">
    <template #toolbar>
      <router-link :to="{ name: 'form' }" class="back">
        {{ $t("common.back") }}
      </router-link>
    </template>

    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <FileInput />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;FileInput /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { FileInput } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </FormPage>
</template>

<script lang="ts">
export default {
  name: "FileInputDemo",
};
</script>

<script setup lang="ts">
import { FileInput } from "@dzangolab/vue3-form";

import FormPage from "../FormPage.vue";
</script>

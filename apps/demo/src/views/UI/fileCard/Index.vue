<template>
  <UiPage :title="$t('ui.gridContainer.title')" class="demo">
    <template #toolbar>
      <router-link :to="{ name: 'ui' }" class="back">
        {{ $t("common.back") }}
      </router-link>
    </template>

    <section>
      <h2>{{ $t("ui.gridContainer.usage.basic") }}</h2>

      <div class="section-content">
        <FileCard :file="file" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;FileCard :file="file" /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { FileCard } from "@dzangolab/vue3-ui";

          import type { IFile } from "@dzangolab/vue3-ui";

          const file = {
            id: 1,
            originalFileName: "file.png",
            description: "This is a file",
            size: 4,
            uploadedBy: { givenName: "Test", lastName: "user" },
            uploadedAt: Date.now(),
            downloadCount: 0,
            lastDownloadedAt: Date.now(),
          } as IFile;
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </UiPage>
</template>

<script setup lang="ts">
import { FileCard } from "@dzangolab/vue3-ui";

import UiPage from "../UiPage.vue";

import type { IFile } from "@dzangolab/vue3-ui";

const file = {
  id: 1,
  originalFileName: "file.png",
  description: "This is a file",
  size: 4,
  uploadedBy: { givenName: "Test", lastName: "user" },
  uploadedAt: Date.now(),
  downloadCount: 0,
  lastDownloadedAt: Date.now(),
} as IFile;
</script>

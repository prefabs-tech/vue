<template>
  <UiPage :title="$t('ui.filesList.title')" class="demo">
    <template #toolbar>
      <ButtonElement
        :label="$t('common.back')"
        icon-left="pi pi-chevron-left"
        size="medium"
        variant="textOnly"
        @click="$router.push('/ui')"
      />
    </template>

    <section>
      <div class="section-content">
        <FilesList
          :action-buttons-visibility="{
            download: true,
            view: true,
          }"
          :files="files"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;FilesList
              :action-buttons-visibility="{
                download: true,
                view: true,
              }"
              :files="files"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { FileList } from "@dzangolab/vue3-ui";

          import type { IFile } from "@dzangolab/vue3-ui";

          const files = [
            {
              downloadCount: 5,
              id: 1,
              lastDownloadedAt: Date.now(),
              originalFileName: "file1.png",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Manish", lastName: "Aryal" },
            },
            {
              downloadCount: 5,
              id: 2,
              lastDownloadedAt: Date.now(),
              originalFileName: "document.pdf",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Gaurav", lastName: "Sapkota" },
            },
            {
              downloadCount: 5,
              id: 3,
              lastDownloadedAt: Date.now(),
              originalFileName: "photo.jpeg",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Deepak", lastName: "Aryal" },
            },
            {
              downloadCount: 5,
              id: 4,
              lastDownloadedAt: Date.now(),
              originalFileName: "manish.png",
              uploadedAt: Date.now(),
              uploadedBy: { givenName: "Lamdiki", lastName: "Sherpa" },
            },
          ] as IFile[];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </UiPage>
</template>

<script setup lang="ts">
import { ButtonElement, FilesList } from "@dzangolab/vue3-ui";

import UiPage from "../UiPage.vue";

import type { IFile } from "@dzangolab/vue3-ui";

const files = [
  {
    downloadCount: 5,
    id: 1,
    lastDownloadedAt: Date.now(),
    originalFileName: "file1.png",
    uploadedAt: Date.now(),
    uploadedBy: { givenName: "Manish", lastName: "Aryal" },
  },
  {
    downloadCount: 5,
    id: 2,
    lastDownloadedAt: Date.now(),
    originalFileName: "document.pdf",
    uploadedAt: Date.now(),
    uploadedBy: { givenName: "Gaurav", lastName: "Sapkota" },
  },
  {
    downloadCount: 5,
    id: 3,
    lastDownloadedAt: Date.now(),
    originalFileName: "photo.jpeg",
    uploadedAt: Date.now(),
    uploadedBy: { givenName: "Deepak", lastName: "Aryal" },
  },
  {
    downloadCount: 5,
    id: 4,
    lastDownloadedAt: Date.now(),
    originalFileName: "manish.png",
    uploadedAt: Date.now(),
    uploadedBy: { givenName: "Lamdiki", lastName: "Sherpa" },
  },
] as IFile[];
</script>

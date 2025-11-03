<template>
  <Layout
    :key="layoutKey"
    :default-layout="currentLayout"
    :show-user-menu="false"
  >
    <template #addon>
      <div class="addon">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/dzangolab/vue/blob/main/CHANGELOG.md"
        >
          <span>{{ $t("app.header.menu.changelog") }}</span>
        </a>
      </div>
    </template>
    <router-view />
  </Layout>
</template>

<script setup lang="ts">
import { currentLayout, layoutKey } from "@/views/Layout/_store/layout-store";
</script>

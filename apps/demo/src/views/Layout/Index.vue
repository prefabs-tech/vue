<template>
  <Page :title="$t('layout.title')">
    <div class="layout-container">
      <div
        class="layout"
        :class="{ active: activeLayout === 'basic' }"
        @click="switchLayout('basic')"
      >
        Basic
      </div>
      <div
        class="layout"
        :class="{ active: activeLayout === 'sidebar_only' }"
        @click="switchLayout('sidebar_only')"
      >
        SidebarOnly
      </div>
      <div
        class="layout"
        :class="{ active: activeLayout === 'sidebar_header' }"
        @click="switchLayout('sidebar_header')"
      >
        SidebarHeader
      </div>
    </div>
  </Page>
</template>

<script lang="ts">
export default {
  name: "Layout",
};
</script>

<script setup lang="ts">
import { activeLayout, switchLayout } from "./_store/layout-store";
</script>

<style lang="css" scoped>
.layout-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.layout-container > .layout {
  border-radius: 0.625rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.25rem;
}

.layout-container > .layout.active,
.layout-container > .layout:hover {
  border-color: var(--dz-secondary-color, #475569);
  border-width: 2px;
  font-weight: 500;
}

@media screen and (min-width: 576px) {
  .layout-container {
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  }
}
</style>

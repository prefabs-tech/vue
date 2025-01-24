<template>
  <LayoutPage :title="$t('layout.title')">
    <div class="layout-container">
      <div
        :class="['layout', { active: activeLayout === BASIC_LAYOUT }]"
        @click="switchLayout(BASIC_LAYOUT)"
      >
        {{ $t("layout.basic") }}
      </div>
      <div
        :class="['layout', { active: activeLayout === SIDEBAR_HEADER_LAYOUT }]"
        @click="switchLayout(SIDEBAR_HEADER_LAYOUT)"
      >
        {{ $t("layout.sidebarHeader") }}
      </div>
      <div
        :class="['layout', { active: activeLayout === SIDEBAR_ONLY_LAYOUT }]"
        @click="switchLayout(SIDEBAR_ONLY_LAYOUT)"
      >
        {{ $t("layout.sidebarOnly") }}
      </div>
    </div>
  </LayoutPage>
</template>

<script lang="ts">
export default {
  name: "Layout",
};
</script>

<script setup lang="ts">
import {
  BASIC_LAYOUT,
  SIDEBAR_HEADER_LAYOUT,
  SIDEBAR_ONLY_LAYOUT,
} from "./_constants/layout";
import { activeLayout, switchLayout } from "./_store/layout-store";
import LayoutPage from "./LayoutPage.vue";
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

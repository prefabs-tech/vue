<template>
  <div class="basic-layout">
    <slot name="header">
      <AppHeader>
        <template #logo>
          <slot name="logo" />
        </template>
        <template #menu>
          <slot name="menu" />
        </template>
        <template #userMenu>
          <slot name="userMenu" />
        </template>
        <template #locales>
          <slot name="locales" />
        </template>
      </AppHeader>
    </slot>

    <main>
      <slot name="default"></slot>
    </main>

    <slot name="footer">
      <AppFooter>
        <template #copyright>
          <slot name="copyright" />
        </template>
        <template #social>
          <slot name="social" />
        </template>
        <template #version>
          <slot name="version" />
        </template>
      </AppFooter>
    </slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "BasicLayout",
};
</script>

<script setup lang="ts">
import AppFooter from "../components/AppFooter.vue";
import AppHeader from "../components/AppHeader.vue";
</script>

<style scoped>
.basic-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.basic-layout :is(footer, header, main) {
  margin: 0.8rem auto;
  max-width: var(--max-width, 1400px);
  padding-left: var(--padding-left, 0.8rem);
  padding-right: var(--padding-right, 0.8rem);
  width: 100%;
}

.basic-layout > main {
  flex: 1;
}
</style>

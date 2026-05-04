<template>
  <div class="demo">
    <Sidebar :menu="menu" class="demo-aside" no-header />
    <div class="demo-main">
      <Page :subtitle="subtitle" :title="title">
        <template #toolbar>
          <slot name="toolbar">
            <ButtonElement
              v-if="$slots.default"
              :label="$t('common.back')"
              icon-left="pi pi-chevron-left"
              size="medium"
              variant="textOnly"
              @click="() => router.push({ name: 'layout' })"
            />
          </slot>
        </template>
        <slot></slot>
      </Page>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "LayoutPage",
};
</script>

<script setup lang="ts">
import type { PropType } from "vue";

import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Sidebar } from "@prefabs.tech/vue3-layout";
import { ButtonElement } from "@prefabs.tech/vue3-ui";
import { useRouter } from "vue-router";

defineProps({
  subtitle: {
    default: undefined,
    required: false,
    type: String as PropType<string>,
  },
  title: {
    default: undefined,
    required: false,
    type: String as PropType<string>,
  },
});

const router = useRouter();

const { t } = useI18n();

const menu = [
  {
    name: t("layout.label.getStarted"),
    routeName: "",
  },
  {
    children: [
      {
        name: t("layout.label.stickyCollapsibleFooter"),
        routeName: "stickyCollapsibleFooter",
      },
    ],
    name: t("layout.label.components"),
  },
];
</script>

<style lang="css">
@import "@/assets/css/demoPage.css";
</style>

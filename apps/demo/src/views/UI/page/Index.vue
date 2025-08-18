<template>
  <UiPage
    :sub-title="$t('ui.page.subtitle')"
    :title="$t('ui.page.title')"
    class="demo"
  >
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
        <Page :title="$t('ui.page.usage.basic')" title-element="h2">
          {{ $t("ui.page.label.content") }}
        </Page>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Page title="Basic"&gt;Page content&lt;/Page&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Page } from "@prefabs.tech/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <div class="section-content">
        <Page
          :title="$t('ui.page.usage.toolbar')"
          :toolbar-actions-menu="actions"
          title-element="h2"
          @action:click="onActionClick($event)"
        >
          {{ pageContent }}
        </Page>

        <ConfirmationModal
          v-if="showDeleteModal"
          @on:close="showDeleteModal = false"
          @on:confirm="onConfirmDelete"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Page
              :toolbar-actions-menu="actions"
              title="With toolbar"
            &gt;
              &lbrace;&lbrace; pageContent &rbrace;&rbrace;
            &lt;/Page&gt;

            &lt;ConfirmationModal
              v-if="showDeleteModal"
              @on:close="showDeleteModal = false"
              @on:confirm="onConfirmDelete"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement, ConfirmationModal, Page } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          import type { ToolbarActionMenu } from "@prefabs.tech/vue3-ui";

          const actions = [
            {
              icon: "pi pi-plus",
              key: "add",
              label: "Add",
            },
            {
              icon: "pi pi-pencil",
              key: "edit",
              label: "Edit",
            },
            {
              class: "danger",
              icon: "pi pi-trash",
              key: "delete",
              label: "Delete",
              severity: "danger",
            },
          ];

          const pageContent = ref&lt;string&gt;("{{ t("ui.page.label.content") }}");
          const showDeleteModal = ref&lt;boolean&gt;(false);

          const onActionClick = (actionMenu: ToolbarActionMenu) => {
            switch(actionMenu?.key) {
              case "add":
                pageContent.value = "{{ t("ui.page.label.addContent") }}";
                break;
              case "edit":
                pageContent.value = "{{ t("ui.page.label.editContent") }}";
                break;
              case "delete":
                showDeleteModal.value = true;
                break;
            }
          };

          const onConfirmDelete = () => {
            pageContent.value = "{{ t('ui.page.label.deleteContent') }}";
            showDeleteModal.value = false;
          }
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <div class="section-content">
        <Page :title="$t('ui.page.usage.toolbarSlot')" title-element="h2">
          {{ $t("ui.page.label.content") }}

          <template #toolbar>
            <ButtonElement :label="$t('ui.page.label.edit')" />
          </template>
        </Page>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Page title="With toolbar"&gt;
              Page content

              &lt;template #toolbar&gt;
                &lt;ButtonElement label="Edit" /&gt;
              &lt;/template&gt;
            &lt;/Page&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement, Page } from "@prefabs.tech/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <div class="section-content">
        <Page
          :title="$t('ui.page.usage.centerAligned')"
          centered
          title-element="h2"
        >
          {{ $t("ui.page.label.content") }}

          <template #toolbar>
            <ButtonElement :label="$t('ui.page.label.edit')" />
          </template>
        </Page>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Page title="With center aligned contents" centered&gt;
              Page content

              &lt;template #toolbar&gt;
                &lt;ButtonElement label="Edit" /&gt;
              &lt;/template&gt;
            &lt;/Page&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement, Page } from "@prefabs.tech/vue3-ui";
          &lt;/script&gt;

          &lt;style lang="css"&gt;
          .page[data-centered="true"] {
            --page-max-width: 400px;
          }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <div class="section-content">
        <Page
          :sub-title="$t('ui.page.label.subtitle')"
          :title="$t('ui.page.usage.subtitle')"
          title-element="h2"
        >
          {{ $t("ui.page.label.content") }}
        </Page>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Page sub-title="Page subtitle" title="With subtitle"&gt;
              Page content
            &lt;/Page&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Page } from "@prefabs.tech/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <div class="section-content">
        <Page :title="$t('ui.page.usage.subtitleSlot')" title-element="h2">
          {{ $t("ui.page.label.content") }}

          <template #subtitle>
            <BadgeComponent :label="$t('ui.page.label.subtitle')" />
          </template>
        </Page>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Page title="With subtitle slot"&gt;
              Page content

              &lt;template #subtitle&gt;
                &lt;BadgeComponent label="Page subtitle" /&gt;
              &lt;/template&gt;
            &lt;/Page&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { BadgeComponent, Page } from "@prefabs.tech/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <div class="section-content">
        <Page
          :title="$t('ui.page.usage.titleTag')"
          :title-tag="$t('ui.page.label.titleTag')"
          title-element="h2"
        >
          {{ $t("ui.page.label.content") }}
        </Page>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Page title="With title tag" title-tag="Heading tag"&gt;
              Page content
            &lt;/Page&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Page } from "@prefabs.tech/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <div class="section-content">
        <Page :title="$t('ui.page.usage.titleTagSlot')" title-element="h2">
          {{ $t("ui.page.label.content") }}

          <template #titleTag>
            <BadgeComponent
              :label="$t('ui.page.label.titleTag')"
              severity="success"
            />
          </template>
        </Page>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Page title="With title tag slot"&gt;
              Page content

              &lt;template #titleTag&gt;
                &lt;BadgeComponent label="Heading tag" severity="success" /&gt;
              &lt;/template&gt;
            &lt;/Page&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { BadgeComponent, Page } from "@prefabs.tech/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <div class="section-content">
        <Page :title="$t('ui.page.usage.titleElement')" title-element="h3">
          {{ $t("ui.page.label.content") }}
        </Page>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Page title="With title element" title-element="h3"&gt;
              Page content
            &lt;/Page&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Page } from "@prefabs.tech/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
    <ComponentDocumentation
      :events-data="eventsData"
      :props-data="propsData"
      :props-table-title="$t('common.properties', { value: 'PageProperties' })"
      :slots-data="slotsData"
    />

    <!-- eslint-disable -->
    <SshPre language="html-vue">
      interface ToolbarActionMenu extends DropdownMenu, ButtonElementProps {}
    </SshPre>
    <!-- eslint-enable -->
  </UiPage>
</template>

<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import {
  BadgeComponent,
  ButtonElement,
  ConfirmationModal,
  Page,
} from "@prefabs.tech/vue3-ui";
import { ref } from "vue";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import UiPage from "../UiPage.vue";

import type { ToolbarActionMenu } from "@prefabs.tech/vue3-ui";

const { t } = useI18n();

const eventsData = [
  {
    description: t("ui.page.documentation.eventDescription.actionClick"),
    name: "action:click",
    payload: "ToolbarActionMenu",
  },
];

const propsData = [
  {
    default: "false",
    description: t("ui.page.documentation.propsDescription.centered"),
    prop: "centered",
    type: "Boolean",
  },
  {
    default: "false",
    description: t("ui.page.documentation.propsDescription.loading"),
    prop: "loading",
    type: "Boolean",
  },
  {
    default: "-",
    description: t("ui.page.documentation.propsDescription.subTitle"),
    prop: "subTitle",
    type: "String",
  },
  {
    default: "-",
    description: t("ui.page.documentation.propsDescription.title"),
    prop: "title",
    type: "String",
  },
  {
    default: `"h1"`,
    description: t("ui.page.documentation.propsDescription.titleElement"),
    prop: "titleElement",
    type: `"h1" | "h2" | "h3" | "h4" | "h5" | "h6"`,
  },
  {
    default: "-",
    description: t("ui.page.documentation.propsDescription.titleTag"),
    prop: "titleTag",
    type: "String",
  },
  {
    default: "-",
    description: t("ui.page.documentation.propsDescription.toolbarActionMenu"),
    prop: "toolbarActionMenu",
    type: "ToolbarActionMenu[]",
  },
];

const slotsData = [
  {
    description: t("ui.page.documentation.slotDescription.default"),
    name: "default",
  },
  {
    description: t("ui.page.documentation.slotDescription.subtitle"),
    name: "subtitle",
  },
  {
    description: t("ui.page.documentation.slotDescription.toolbar"),
    name: "toolbar",
  },
  {
    description: t("ui.page.documentation.slotDescription.titleTag"),
    name: "titleTag",
  },
];

const actions = [
  {
    icon: "pi pi-plus",
    key: "add",
    label: "Add",
  },
  {
    icon: "pi pi-pencil",
    key: "edit",
    label: "Edit",
  },
  {
    class: "danger",
    icon: "pi pi-trash",
    key: "delete",
    label: "Delete",
    severity: "danger",
  },
];

const pageContent = ref<string>(t("ui.page.label.content"));
const showDeleteModal = ref<boolean>(false);

const onActionClick = (actionMenu: ToolbarActionMenu) => {
  switch (actionMenu?.key) {
    case "add":
      pageContent.value = t("ui.page.label.addContent");
      break;
    case "edit":
      pageContent.value = t("ui.page.label.editContent");
      break;
    case "delete":
      showDeleteModal.value = true;
      break;
  }
};

const onConfirmDelete = () => {
  pageContent.value = t("ui.page.label.deleteContent");
  showDeleteModal.value = false;
};
</script>

<style lang="css">
.page .page-content {
  height: 20vh;
}

.page[data-centered="true"] {
  --page-max-width: 400px;
}
</style>

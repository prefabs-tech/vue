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
          :toolbar-action-menu="actions"
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
              :toolbar-action-menu="actions"
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

          import type { ToolbarActionsMenu } from "@prefabs.tech/vue3-ui";

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

          const onActionClick = (actionMenu: ToolbarActionsMenu) => {
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
      :props-data="propsData"
      :props-table-title="$t('common.properties', { value: 'PageProperties' })"
      :slots-data="slotsData"
    />

    <!-- eslint-disable -->
    <SshPre language="html-vue">
      interface ToolbarActionsMenu extends DropdownMenu, ButtonElementProps {}
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

import type { ToolbarActionsMenu } from "@prefabs.tech/vue3-ui";

const { t } = useI18n();

const propsData = [
  {
    default: "false",
    description: "Aligns the content in the center.",
    prop: "centered",
    type: "Boolean",
  },
  {
    default: "false",
    description: "Displays a loading overlay within the page content.",
    prop: "loading",
    type: "Boolean",
  },
  {
    default: "-",
    description: "The subtitle text displayed below the title.",
    prop: "subTitle",
    type: "String",
  },
  {
    default: "-",
    description: "The main title text displayed at the top of the page.",
    prop: "title",
    type: "String",
  },
  {
    default: `"h1"`,
    description: "HTML tag to be used for the title element.",
    prop: "titleElement",
    type: `"h1" | "h2" | "h3" | "h4" | "h5" | "h6"`,
  },
  {
    default: "-",
    description:
      "Optional label displayed next to the title, typically rendered as a badge.",
    prop: "titleTag",
    type: "String",
  },
  {
    default: "-",
    description: "Toolbar actions menu on the top-right of the page header.",
    prop: "toolbarActionMenu",
    type: "ToolbarActionsMenu",
  },
];

const slotsData = [
  {
    description: "Main content of the page.",
    name: "default",
  },
  {
    description: "Custom subtitle slot. Replaces the `subTitle` prop.",
    name: "subtitle",
  },
  {
    description: "Toolbar area on the top-right of the page header.",
    name: "toolbar",
  },
  {
    description: "Custom title tag slot. Replaces the `titleTag` prop.",
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

const onActionClick = (actionMenu: ToolbarActionsMenu) => {
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

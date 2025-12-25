<template>
  <UiPage
    :sub-title="$t('ui.tabView.subtitle')"
    :title="$t('ui.tabView.title')"
    class="tab-view"
  >
    <section>
      <h2>{{ $t("ui.tabView.usage.basic") }}</h2>

      <div class="section-content">
        <TabView id="tab-view" :tabs="tabs" active-key="1" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TabView id="tab-view" :tabs="tabs" active-key="1" /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { TabView } from "@prefabs.tech/vue3-ui";

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tabView.usage.disableTabState.title") }}</h2>

      <div class="section-content">
        <p>{{ $t("ui.tabView.usage.disableTabState.subtitle") }}</p>
        <TabView
          :persist-state="false"
          :tabs="tabs"
          :visible-tabs="['1', '5', '6']"
          active-key="1"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TabView
              :persist-state="false"
              :tabs="tabs"    
              :visible-tabs="['1', '5', '6']"
              active-key="1"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { TabView } from "@prefabs.tech/vue3-ui";

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tabView.usage.positionBottom") }}</h2>

      <div class="section-content">
        <TabView
          id="tab-view-bottom"
          :tabs="tabs"
          :visible-tabs="['1', '5', '6']"
          active-key="1"
          position="bottom"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TabView
              id="tab-view-bottom"
              :tabs="tabs"    
              :visible-tabs="['1', '5', '6']"
              active-key="1"
              position="bottom"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { TabView } from "@prefabs.tech/vue3-ui";

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tabView.usage.positionLeft") }}</h2>

      <div class="section-content">
        <TabView
          id="tab-view-left"
          :tabs="tabs"
          :visible-tabs="['1', '5', '6']"
          active-key="1"
          position="left"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TabView
              id="tab-view-left"
              :tabs="tabs"    
              :visible-tabs="['1', '5', '6']"
              active-key="1"
              position="left"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { TabView } from "@prefabs.tech/vue3-ui";

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tabView.usage.positionRight") }}</h2>

      <div class="section-content">
        <TabView
          id="tab-view-right"
          :tabs="tabs"
          :visible-tabs="['1', '5', '6']"
          active-key="1"
          position="right"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TabView
              id="tab-view-right"
              :tabs="tabs"    
              :visible-tabs="['1', '5', '6']"
              active-key="1"
              position="right"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { TabView } from "@prefabs.tech/vue3-ui";

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tabView.usage.closableTab") }}</h2>

      <div class="section-content">
        <div class="tab-button-group">
          <ButtonElement label="Add specifications tab" @click="addTab('3')" />
          <ButtonElement label="Add reviews tab" @click="addTab('2')" />
          <ButtonElement label="Add pricing tab" @click="addTab('4')" />
        </div>
        <TabView
          id="tab-view-closable"
          v-model:active-key="activeKey"
          v-model:visible-tabs="visibleTabs"
          :tabs="tabs"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;div class="tab-button-group"&gt;
              &lt;ButtonElement label="Add specifications tab" @click="addTab('3')" /&gt;
              &lt;ButtonElement label="Add reviews tab" @click="addTab('2')" /&gt;
              &lt;ButtonElement label="Add pricing tab" @click="addTab('4')" /&gt;
            &lt;/div&gt;
            &lt;TabView
              id="tab-view-closable"
              v-model:active-key="activeKey"
              v-model:visible-tabs="VisibleTabs"
              :tabs="tabs"    
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { TabView } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const activeKey = ref&lt;string&gt;("1");
          const visibleTabs = ref&lt;string[]&gt;(["1"]);

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];

          const addTab = (key: string) => {
            if (!visibleTabs.value.includes(key)) {
              visibleTabs.value = [...visibleTabs.value, key];
            }

            activeKey.value = key;
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tabView.usage.withSlot") }}</h2>

      <div class="section-content">
        <TabView
          id="tab-view-slot"
          :tabs="tabList"
          :visible-tabs="['description', 'installation', 'certifications']"
          active-key="description"
        >
          <p v-for="tab in tabList" :key="tab.key">{{ tab.label }}</p>
        </TabView>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TabView
              id="tab-view-slot"
              :tabs="tabList"    
              :visible-tabs="['description', 'installation', 'certifications']"
              active-key="['description']"
            &gt;
              &lt;p v-for="tab in tabList" :key="tab.key"&gt;&lbrace;&lbrace; tab.label &rbrace;&rbrace;&lt;/p&gt;
            &lt;/TabView&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { TabView } from "@prefabs.tech/vue3-ui";

          const tabList = [
            { key: "description", label: "Description" },
            { key: "review", label: "Reviews" },
            { key: "specifications", label: "Specifications" },
            { key: "pricing", label: "Pricing" },
            { key: "installation", label: "Installation" },
            { key: "certifications", label: "Certifications" },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tabView.usage.interceptTabChange") }}</h2>

      <div class="section-content">
        <TabView
          id="tab-view-interception"
          v-model:active-key="interceptionActiveKey"
          :tabs="tabs"
          :visible-tabs="['1', '5', '6']"
          intercept-tab-change
          @before-tab-change="beforeTabChange"
        />

        <ConfirmationModal
          v-if="showConfirmation"
          @on:close="showConfirmation = false"
          @on:confirm="onConfirmChange"
        />
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TabView
              id="tab-view-interception"
              v-model:active-key="activeKey"
              :tabs="tabs"
              :visible-tabs="['1', '5', '6']"
              intercept-tab-change
              @before-tab-change="beforeTabChange"
            /&gt;

            &lt;ConfirmationModal
              v-if="showConfirmation"
              @on:close="showConfirmation = false"
              @on:confirm="onConfirmChange"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ConfirmationModal, TabView } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const activeKey = ref&lt;string&gt;("1");
          const nextTabKey = ref&lt;string&gt;();
          const showConfirmation = ref&lt;boolean&gt;(false);

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];

          const beforeTabChange = (key: string) => {
            showConfirmation.value = true;
            nextTabKey.value = key;
          };

          const onConfirmChange = () => {
            activeKey.value = nextTabKey.value || activeKey.value;
            showConfirmation.value = false;
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tabView.usage.interceptTabClose") }}</h2>

      <div class="section-content">
        <TabView
          id="tab-view-interception-close"
          ref="dzangolabVueTabView"
          :tabs="tabs"
          active-key="1"
          intercept-tab-close
          @before-tab-close="beforeTabClose"
        />

        <ConfirmationModal
          v-if="showCloseConfirmation"
          @on:close="showCloseConfirmation = false"
          @on:confirm="onConfirmClose"
        />
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TabView
              id="tab-view-interception-close"
              ref="dzangolabVueTabView"
              :tabs="tabs"
              active-key="1"
              intercept-tab-close
              @before-tab-change="beforeTabClose"
            /&gt;

            &lt;ConfirmationModal
              v-if="showConfirmation"
              @on:close="showConfirmation = false"
              @on:confirm="onConfirmChange"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ConfirmationModal, TabView } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const closingKey = ref&lt;string&gt;();
          const dzangolabVueTabView = ref();
          const showConfirmation = ref&lt;boolean&gt;(false);

          const tabs = [
            { children: "Description", key: "1", label: "Description" },
            { children: "Reviews", closable: true, key: "2", label: "Reviews" },
            {
              children: "Specifications",
              closable: true,
              key: "3",
              label: "Specifications",
            },
            { children: "Pricing", closable: true, key: "4", label: "Pricing",  },
            { children: "Installation Instructions", key: "5", label: "Installation",  },
            { children: "Certifications", key: "6", label: "Certifications" },
          ];

          const beforeTabClose = (key: string) => {
            showConfirmation.value = true;
            closingKey.value = key;
          };

          const onConfirm = () => {
            dzangolabVueTabView.value?.closeTab(closingKey.value);
            showConfirmation.value = false;
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.tabView.usage.withHashRouting") }}</h2>

      <div class="section-content">
        <TabView
          id="tab-view-hash-routing"
          :tabs="hashRoutingTabs"
          active-key="tab1"
          enable-hash-routing
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TabView id="tab-view" :tabs="tabs" active-key="tab1" enable-hash-routing /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { TabView } from "@prefabs.tech/vue3-ui";

          const tabs = [
            { children: "Description", key: "tab1", label: "Description" },
            { children: "Reviews", key: "tab2", label: "Reviews" },
            {
              children: "Specifications",
              key: "tab3",
              label: "Specifications",
            },
            { children: "Pricing", key: "tab4", label: "Pricing",  },
            { children: "Installation Instructions", key: "tab5", label: "Installation",  },
            { children: "Certifications", key: "tab6", label: "Certifications" },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <ComponentDocumentation
      :events-data="eventsData"
      :props-data="propsData"
      :props-table-title="
        $t('common.properties', { value: 'TabViewProperties' })
      "
      :slots-data="slotsData"
    />

    <section>
      <h2>{{ $t("common.type") }}</h2>
      <div class="section-content">
        <!-- eslint-disable -->
          <SshPre language="html-vue">
            type Tab = {
              children?: VNode | string;
              closable?: boolean;
              icon?: string;
              key: string;
              label: string;
            };
          </SshPre>
          <!-- eslint-enable -->
      </div>
    </section>
  </UiPage>
</template>

<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import {
  ButtonElement,
  ConfirmationModal,
  TabView,
} from "@prefabs.tech/vue3-ui";
import { ref } from "vue";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import UiPage from "../UiPage.vue";

const { t } = useI18n();

const activeKey = ref<string>("1");
const closingKey = ref<string>();
const dzangolabVueTabView = ref();
const interceptionActiveKey = ref<string>("1");
const nextTabKey = ref<string>();
const showCloseConfirmation = ref<boolean>(false);
const showConfirmation = ref<boolean>(false);
const visibleTabs = ref<string[]>(["1"]);

const eventsData = [
  {
    description: t("ui.tabView.documentation.eventDescription.beforeTabChange"),
    name: "beforeTabChange",
    payload: "key",
  },
  {
    description: t("ui.tabView.documentation.eventDescription.beforeTabClose"),
    name: "beforeTabClose",
    payload: "key",
  },
  {
    description: t("ui.tabView.documentation.eventDescription.updateActiveKey"),
    name: "update:activeKey",
    payload: "key",
  },
  {
    description: t(
      "ui.tabView.documentation.eventDescription.updateVisibleTabs",
    ),
    name: "update:visibleTabs",
    payload: "key[]",
  },
];

const hashRoutingTabs = [
  { children: "Description", key: "tab1", label: "Description" },
  { children: "Reviews", key: "tab2", label: "Reviews" },
  {
    children: "Specifications",
    key: "tab3",
    label: "Specifications",
  },
  { children: "Pricing", key: "tab4", label: "Pricing" },
  { children: "Installation Instructions", key: "tab5", label: "Installation" },
  { children: "Certifications", key: "tab6", label: "Certifications" },
];

const propsData = [
  {
    default: "-",
    description: t("ui.tabView.documentation.propsDescription.activeKey"),
    prop: "activeKey",
    type: "string",
  },
  {
    default: "false",
    description: t(
      "ui.tabView.documentation.propsDescription.enableHashRouting",
    ),
    prop: "enableHashRouting",
    type: "boolean",
  },
  {
    default: "-",
    description: t("ui.tabView.documentation.propsDescription.id"),
    prop: "id",
    type: "string",
  },
  {
    default: "false",
    description: t(
      "ui.tabView.documentation.propsDescription.interceptTabChange",
    ),
    prop: "interceptTabChange",
    type: "boolean",
  },
  {
    default: "false",
    description: t(
      "ui.tabView.documentation.propsDescription.interceptTabClose",
    ),
    prop: "interceptTabClose",
    type: "boolean",
  },
  {
    default: "true",
    description: t("ui.tabView.documentation.propsDescription.lazy"),
    prop: "lazy",
    type: "boolean",
  },
  {
    default: "true",
    description: t("ui.tabView.documentation.propsDescription.persistState"),
    prop: "persistState",
    type: "boolean",
  },
  {
    default: "localStorage",
    description: t(
      "ui.tabView.documentation.propsDescription.persistStateStorage",
    ),
    prop: "persistStateStorage",
    type: '"localStorage" | "sessionStorage"',
  },
  {
    default: "top",
    description: t("ui.tabView.documentation.propsDescription.position"),
    prop: "position",
    type: '"top" | "left" | "bottom" | "right"',
  },
  {
    default: "-",
    description: t("ui.tabView.documentation.propsDescription.tabs"),
    prop: "tabs",
    type: "Tab[]",
  },
  {
    default: "-",
    description: t("ui.tabView.documentation.propsDescription.visibleTabs"),
    prop: "visibleTabs",
    type: "string[]",
  },
];

const slotsData = [
  {
    description: t("ui.tabView.documentation.slotDescription.default"),
    name: "default",
  },
];

const tabList = [
  { key: "description", label: "Description" },
  { key: "review", label: "Reviews" },
  { key: "specifications", label: "Specifications" },
  { key: "pricing", label: "Pricing" },
  { key: "installation", label: "Installation" },
  { key: "certifications", label: "Certifications" },
];

const tabs = [
  { children: "Description", key: "1", label: "Description" },
  { children: "Reviews", closable: true, key: "2", label: "Reviews" },
  {
    children: "Specifications",
    closable: true,
    key: "3",
    label: "Specifications",
  },
  { children: "Pricing", closable: true, key: "4", label: "Pricing" },
  { children: "Installation Instructions", key: "5", label: "Installation" },
  { children: "Certifications", key: "6", label: "Certifications" },
];

const addTab = (key: string) => {
  if (!visibleTabs.value.includes(key)) {
    visibleTabs.value = [...visibleTabs.value, key];
  }

  activeKey.value = key;
};

const beforeTabChange = (key: string) => {
  showConfirmation.value = true;
  nextTabKey.value = key;
};

const beforeTabClose = (key: string) => {
  showCloseConfirmation.value = true;
  closingKey.value = key;
};

const onConfirmChange = () => {
  interceptionActiveKey.value = nextTabKey.value || interceptionActiveKey.value;
  showConfirmation.value = false;
};

const onConfirmClose = () => {
  dzangolabVueTabView.value?.closeTab(closingKey.value);
  showCloseConfirmation.value = false;
};
</script>

<style lang="css">
@import "../../../assets/css/ui/tab-view.css";
</style>

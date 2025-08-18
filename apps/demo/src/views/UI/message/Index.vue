<template>
  <UiPage
    :sub-title="$t('ui.message.subtitle')"
    :title="$t('ui.message.title')"
    class="demo-message"
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
      <h2>{{ $t("ui.message.usage.basic") }}</h2>

      <div class="section-content">
        <Message
          :message="$t('ui.message.contents.content2')"
          severity="info"
        />
        <Message
          :message="$t('ui.message.contents.content3')"
          severity="success"
        />
        <Message
          :message="$t('ui.message.contents.content4')"
          severity="danger"
        />
        <Message
          :message="$t('ui.message.contents.content5')"
          severity="warning"
        />
        <Message :message="$t('ui.message.contents.content4')" severity="tip" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Message
              message="New features just launched! Check them out!"
              severity="info"
            /&gt;
            &lt;Message
              :message="New Year, New You: Start fresh with our services!"
              severity="success"
            /&gt;
            &lt;Message
              :message="We value your feedback: take our quick survey!"
              severity="danger"
            /&gt;
            &lt;Message
              :message="Warning: Limited time only! Sale ends soon!"
              severity="warning"
            /&gt;
            &lt;Message
              :message="We value your feedback: take our quick survey!"
              severity="tip"
            /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Message } from "@prefabs.tech/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.message.usage.enableClose") }}</h2>

      <div class="section-content">
        <Message
          :enable-close="false"
          :message="$t('ui.message.contents.content4')"
          :show-icon="false"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Message
              :enable-close="false"
              :show-icon="false"
              message="We value your feedback: take our quick survey!"
            /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Message } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.message.usage.withI18n") }}</h2>

      <div class="section-content">
        <Message :message="$t('ui.message.contents.content2')" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Message :message="t('ui.message.description')" /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Message } from "@prefabs.tech/vue3-ui";
            import { useI18n } from "@prefabs.tech/vue3-i18n";

            const { t } = useI18n();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.message.usage.icons.icon") }}</h2>

      <div class="section-content">
        <Message
          :message="$t('ui.message.contents.content2')"
          icon="pi pi-android"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Message
              icon="pi pi-android"
              message="New features just launched! Check them out!"
            /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Message } from "@prefabs.tech/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.message.usage.icons.iconSlot") }}</h2>

      <div class="section-content">
        <Message :message="$t('ui.message.contents.content3')">
          <template #icon>
            <i class="fa-regular fa-bell" />
          </template>
        </Message>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Message
              message="New Year, New You: Start fresh with our services!"
            &gt;
              &lt;template #icon&gt;
                &lt;i class="fa-regular fa-bell" /&gt;
              &lt;/template&gt;
            &lt;/Message&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Message } from "@prefabs.tech/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.message.usage.messageArray") }}</h2>

      <div class="section-content">
        <Message
          :message="[
            $t('ui.message.contents.content1'),
            $t('ui.message.contents.content2'),
            $t('ui.message.contents.content3'),
            $t('ui.message.contents.content4'),
          ]"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Message
              message="[
                'Season Sale: Enjoy massive discounts with up to 50% off on a wide range of selected items — from fashion to electronics, don’t miss out on these limited-time offers!',
                'New features just launched! Check them out!',
                'New Year, New You: Start fresh with our services!',
                'We value your feedback: take our quick survey!',
              ]"
            /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Message } from "@prefabs.tech/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <ComponentDocumentation
      :events-data="eventsData"
      :props-data="propsData"
      :props-table-title="
        $t('common.properties', { value: 'MessageProperties' })
      "
      :slots-data="slotsData"
    />
  </UiPage>
</template>

<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { ButtonElement, Message } from "@prefabs.tech/vue3-ui";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import UiPage from "../UiPage.vue";

const { t } = useI18n();

const eventsData = [
  {
    description: t("ui.message.documentation.eventDescription.close"),
    name: "close",
    payload: "-",
  },
];

const propsData = [
  {
    default: "true",
    description: t("ui.message.documentation.propsDescription.enableClose"),
    prop: "enableClose",
    type: "Boolean",
  },
  {
    default: "-",
    description: t("ui.message.documentation.propsDescription.icon"),
    prop: "icon",
    type: "String",
  },
  {
    default: "-",
    description: t("ui.message.documentation.propsDescription.message"),
    prop: "message",
    type: "String | Array<string>",
  },
  {
    default: `"info"`,
    description: t("ui.message.documentation.propsDescription.severity"),
    prop: "severity",
    type: `"danger" | "info" | "success" | "tip" | "warning"`,
  },
  {
    default: "true",
    description: t("ui.message.documentation.propsDescription.showIcon"),
    prop: "showIcon",
    type: "Boolean",
  },
];

const slotsData = [
  {
    description: t("ui.message.documentation.slotDescription.default"),
    name: "default",
  },
  {
    description: t("ui.message.documentation.slotDescription.icon"),
    name: "icon",
  },
];
</script>

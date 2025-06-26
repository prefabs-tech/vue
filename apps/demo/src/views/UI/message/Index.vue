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
        <Message :message="$t('ui.message.contents.content1')" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Message message="Season sale: Up to 50% off selected items!" /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Message } from "@dzangolab/vue3-ui";
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
            import { Message } from "@dzangolab/vue3-ui";
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
            import { Message } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.message.usage.enableClose") }}</h2>

      <div class="section-content">
        <Message
          :message="$t('ui.message.contents.content4')"
          icon="pi pi-comments"
          enable-close
          @close="showEnableCloseSection = false"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Message
              icon="pi pi-comments"
              message="We value your feedback: take our quick survey!"
              enable-close
              @close="showEnableCloseSection = false"
            /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Message } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const showEnableCloseSection = ref(true);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.message.usage.withI18n") }}</h2>

      <div class="section-content">
        <Message :message="$t('ui.message.contents.content1')" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Message :message="t('ui.message.description')" /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Message } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
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
import { ButtonElement, Message } from "@dzangolab/vue3-ui";
import { ref } from "vue";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import UiPage from "../UiPage.vue";

const showEnableCloseSection = ref(true);

const eventsData = [
  {
    description: "Emitted when the close icon is clicked.",
    name: "close",
    payload: "-",
  },
];

const propsData = [
  {
    default: "false",
    description:
      "Displays a close icon if true, allowing the message to be dismissed.",
    prop: "enableClose",
    type: "Boolean",
  },
  {
    default: "-",
    description: "Icon to display alongside the message.",
    prop: "icon",
    type: "String",
  },
  {
    default: "-",
    description: "The message text to display in the component.",
    prop: "message",
    type: "String",
  },
];

const slotsData = [
  {
    description: "Slot for message. Overrides the message content.",
    name: "default",
  },
  {
    description: "Slot for custom icon. Overrides the `icon` prop if provided.",
    name: "icon",
  },
];
</script>

<style lang="css">
.custom-message {
  --_background-color: #faedc4;
  --_border-color: #816204;
  --_message-color: #816204;
}

.demo-message .container {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.demo-message section {
  margin-bottom: 2.5em;
}

.demo-message .section-content {
  display: grid;
  gap: 1.5rem;
}
</style>

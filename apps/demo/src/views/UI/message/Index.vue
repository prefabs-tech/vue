<template>
  <Page :title="$t('ui.message.title')" class="demo-message">
    <section>
      <h2>{{ $t("ui.message.usage.basic") }}</h2>

      <div class="section-content">
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

        <Message :message="$t('ui.message.messages.message1')" />
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.message.usage.icons.iconName") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Message
              message="New features just launched! Check them out!"
              icon="pi pi-android"
            /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Message } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Message
          :message="$t('ui.message.messages.message2')"
          icon="pi pi-android"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.message.usage.icons.iconElement") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Message
              message="New Year, New You: Start fresh with our services!"
              icon="true"
            &gt;
              &lt;template #icon&gt;
                &lt;i class="pi pi-bell" /&gt;
              &lt;/template&gt;
            &lt;/Message&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Message } from "@dzangolab/vue3-ui";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Message :message="$t('ui.message.messages.message3')" icon="true">
          <template #icon>
            <i class="pi pi-bell" />
          </template>
        </Message>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.message.usage.enableClose") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Message
              v-if="displayMessage"
              message="We value your feedback: take our quick survey!"
              icon="pi pi-comments"
              enableClose
              @close="onClose()"
            /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Message } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const displayMessage = ref(true);

            const onClose = () => {
              displayMessage.value = false;
            }
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Message
          v-if="displayMessage"
          :message="$t('ui.message.messages.message4')"
          icon="pi pi-comments"
          enableClose
          @close="displayMessage = false"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.message.usage.withI18n") }}</h2>

      <div class="section-content">
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

        <Message :message="$t('ui.message.messages.message1')" />
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.message.usage.customStyle") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Message
              class="custom-message"
              message="Warning: Limited time only! Sale ends soon!"
              icon="pi pi-exclamation-triangle"
            /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
            import { Message } from "@dzangolab/vue3-ui";
          &lt;/script&gt;

          &lt;style lang="css"&gt;
            .custom-message {
              --_background-color: #faedc4;
              --_border-color: #816204;
              --_message-color: #816204;
            }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Message
          class="custom-message"
          :message="$t('ui.message.messages.message5')"
          icon="pi pi-exclamation-triangle"
        />
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { Message } from "@dzangolab/vue3-ui";
import { ref } from "vue";

const displayMessage = ref(true);
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

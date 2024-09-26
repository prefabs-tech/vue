<template>
  <Page :title="$t('ui.confirmationModal.title')" class="demo">
    <section>
      <h2>{{ $t("ui.confirmationModal.usage.basic") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;div&gt;
              &lt;ButtonElement
                label="Confirm"
                severity="success"
                @click="showModal = true"
              /&gt;
              &lt;span&gt;{{ currentTime }}&lt;/span&gt;
            &lt;/div&gt;

            &lt;ConfirmationModal
              v-show="showModal"
              @on:close="showModal = false"
              @on:confirm="onConfirm()"
            /&gt;
          &lt;/template&gt; 

          &lt;script setup lang="ts"&gt;
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const currentTime = ref(undefined as unknown as Date);
            const showModal = ref(false);

            function onConfirm() {
              currentTime.value = new Date();
              showModal.value = false;
            }
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <div class="container">
          <ButtonElement
            :label="$t('ui.confirmationModal.buttonLabel.confirm')"
            severity="success"
            @click="showModal = true"
          />
          <span>{{ currentTime }}</span>
        </div>

        <ConfirmationModal
          v-show="showModal"
          @on:close="showModal = false"
          @on:confirm="onConfirm()"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.confirmationModal.usage.withBorder") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;div&gt;
              &lt;ButtonElement
                label="Confirm"
                severity="success"
                @click="showModal = true"
              /&gt;
              &lt;span&gt;{{ currentTime }}&lt;/span&gt;
            &lt;/div&gt;

            &lt;ConfirmationModal
              v-show="showModal"
              border
              @on:close="showModal = false"
              @on:confirm="showModal = false"
            /&gt;
          &lt;/template&gt; 

          &lt;script setup lang="ts"&gt;
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const currentTime = ref(undefined as unknown as Date);
            const showModal = ref(false);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <div class="container">
          <ButtonElement
            :label="$t('ui.confirmationModal.buttonLabel.confirm')"
            severity="success"
            @click="showBorderedModal = true"
          />
        </div>

        <ConfirmationModal
          v-show="showBorderedModal"
          border
          @on:close="showBorderedModal = false"
          @on:confirm="showBorderedModal = false"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.confirmationModal.usage.manualContent") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;div&gt;
              &lt;ButtonElement
                label="Confirm"
                severity="success"
                @click="showModal = true"
              /&gt;
              &lt;span&gt;{{ currentTime }}&lt;/span&gt;
            &lt;/div&gt;

            &lt;ConfirmationModal
              v-show="showModal"
              @on:close="showModal = false"
              @on:confirm="showCustomContentModal = false"
            &gt;
              &lt;template #header&gt;
                &lt;span&gt;Delete user&lt;/span&gt;
              &lt;/template&gt;

              &lt;template #body&gt;
                &lt;p&gt;Are you sure to delete user?&lt;/p&gt;
              &lt;/template&gt;

              &lt;template #footer&gt;
                &lt;ButtonElement label="Cancel" severity="secondary" /&gt;
                &lt;ButtonElement label="Confirm" severity="danger" /&gt;
              &lt;/template&gt;
            &lt;/ConfirmationModal&gt;
          &lt;/template&gt; 

          &lt;script setup lang="ts"&gt;
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const currentTime = ref(undefined as unknown as Date);
            const showModal = ref(false);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <div class="container">
          <ButtonElement
            :label="$t('ui.confirmationModal.buttonLabel.confirm')"
            severity="success"
            @click="showCustomContentModal = true"
          />
          <span>{{ currentTime }}</span>
        </div>

        <ConfirmationModal
          v-show="showCustomContentModal"
          @on:close="showCustomContentModal = false"
          @on:confirm="showCustomContentModal = false"
        >
          <template #header>
            <span>
              {{ $t("ui.confirmationModal.headerContent.deleteUser") }}
            </span>
          </template>

          <template #body>
            <p>{{ $t("ui.confirmationModal.bodyContent.confirmDelete") }}</p>
          </template>

          <template #footer>
            <ButtonElement
              size="small"
              :label="$t('ui.confirmationModal.buttonLabel.cancel')"
              severity="secondary"
            />

            <ButtonElement
              size="small"
              :label="$t('ui.confirmationModal.buttonLabel.delete')"
              severity="danger"
            />
          </template>
        </ConfirmationModal>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.confirmationModal.usage.withI18n") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;div&gt;
              &lt;ButtonElement
                :label="t('ui.confirmationModal.buttonLabel.confirm')"
                severity="success"
                @click="showModal = true"
              /&gt;
              &lt;span&gt;{{ currentTime }}&lt;/span&gt;
            &lt;/div&gt;

            &lt;ConfirmationModal
              v-show="showModal"
              @on:close="showModal = false"
              @on:confirm="showCustomContentModal = false"
            &gt;
              &lt;template #header&gt;
                &lt;span&gt;
                  &lbrace;&lbrace; t("ui.confirmationModal.headerContent.deleteUser") &rbrace;&rbrace;
                &lt;/span&gt;
              &lt;/template&gt;

              &lt;template #body&gt;
                &lt;p&gt;
                  &lbrace;&lbrace; t("ui.confirmationModal.bodyContent.confirmDelete") &rbrace;&rbrace;
                &lt;/p&gt;
              &lt;/template&gt;

              &lt;template #footer&gt;
                &lt;ButtonElement
                  :label="t('ui.confirmationModal.buttonLabel.cancel')" severity="secondary"
                /&gt;
                &lt;ButtonElement
                  :label="t('ui.confirmationModal.buttonLabel.delete')" severity="danger"
                /&gt;
              &lt;/template&gt;
            &lt;/ConfirmationModal&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const currentTime = ref(undefined as unknown as Date);
            const showModal = ref(false);
            const { t } = useI18n();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <div class="container">
          <ButtonElement
            :label="$t('ui.confirmationModal.buttonLabel.confirm')"
            severity="success"
            @click="showCustomContentModal = true"
          />
          <span>{{ currentTime }}</span>
        </div>

        <ConfirmationModal
          v-show="showCustomContentModal"
          @on:close="showCustomContentModal = false"
          @on:confirm="showCustomContentModal = false"
        >
          <template #header>
            <span>
              {{ $t("ui.confirmationModal.headerContent.deleteUser") }}
            </span>
          </template>

          <template #body>
            <p>{{ $t("ui.confirmationModal.bodyContent.confirmDelete") }}</p>
          </template>

          <template #footer>
            <ButtonElement
              size="small"
              :label="$t('ui.confirmationModal.buttonLabel.cancel')"
              severity="secondary"
            />

            <ButtonElement
              size="small"
              :label="$t('ui.confirmationModal.buttonLabel.delete')"
              severity="danger"
            />
          </template>
        </ConfirmationModal>
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
import { ref } from "vue";

const currentTime = ref(undefined as unknown as Date);
const showBorderedModal = ref(false);
const showCustomContentModal = ref(false);
const showModal = ref(false);

function onConfirm() {
  currentTime.value = new Date();
  showModal.value = false;
}
</script>

<style lang="css" scoped>
.demo .container {
  align-items: center;
  display: flex;
  gap: 1rem;
}
</style>

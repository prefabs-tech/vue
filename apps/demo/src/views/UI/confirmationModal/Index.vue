<template>
  <UiPage
    :subtitle="$t('ui.confirmationModal.subtitle')"
    :title="$t('ui.confirmationModal.title')"
    class="demo"
  >
    <section>
      <h2>{{ $t("ui.confirmationModal.usage.basic") }}</h2>

      <div class="section-content">
        <div class="container">
          <ButtonElement
            :label="$t('ui.confirmationModal.buttonLabel.confirm')"
            severity="success"
            @click="showModal = true"
          />
          <span>{{ currentTime }}</span>
        </div>

        <ConfirmationModal
          v-if="showModal"
          :header="$t('ui.confirmationModal.headerContent.confirm')"
          :message="$t('ui.confirmationModal.bodyContent.confirm')"
          @on:close="showModal = false"
          @on:confirm="onConfirm()"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement
              label="Confirm"
              severity="success"
              @click="showModal = true"
            /&gt;

            &lt;span&gt;&lbrace;&lbrace; currentTime &rbrace;&rbrace;&lt;/span&gt;
  
            &lt;ConfirmationModal
              v-if="showModal"
              header="Confirm"
              message="Are you sure you want to proceed?"
              @on:close="showModal = false"
              @on:confirm="onConfirm()"
            /&gt;
          &lt;/template&gt;
  
          &lt;script setup lang="ts"&gt;
            import { ButtonElement, ConfirmationModal } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";
  
            const currentTime = ref(undefined as unknown as Date);
            const showModal = ref(false);
  
            const onConfirm = () => {
              currentTime.value = new Date();
              showModal.value = false;
            };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.confirmationModal.usage.buttonOptions") }}</h2>

      <div class="section-content">
        <div class="container">
          <ButtonElement
            :label="$t('ui.confirmationModal.buttonLabel.delete')"
            severity="danger"
            @click="showDeleteModal = true"
          />
        </div>

        <ConfirmationModal
          v-if="showDeleteModal"
          :accept-button-options="{
            label: $t('ui.confirmationModal.buttonLabel.delete'),
            severity: 'danger',
          }"
          :cancel-button-options="{
            label: $t('ui.confirmationModal.buttonLabel.cancel'),
          }"
          :header="$t('ui.confirmationModal.headerContent.deleteUser')"
          :message="$t('ui.confirmationModal.bodyContent.confirmDelete')"
          @on:close="showDeleteModal = false"
          @on:confirm="showDeleteModal = false"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement
              label="Delete"
              severity="danger"
              @click="showModal = true"
            /&gt;

            &lt;span&gt;&lbrace;&lbrace; currentTime &rbrace;&rbrace;&lt;/span&gt;
  
            &lt;ConfirmationModal
              v-if="showModal"
              :accept-button-options="{
                label: 'Delete',
                severity: 'danger',
              }"
              :cancel-button-options="{
                label: 'Cancel',
              }"
              header="Delete user"
              message="Are you sure to delete user?"
              @on:close="showModal = false"
              @on:confirm="showModal = false"
            /&gt;
          &lt;/template&gt;
  
          &lt;script setup lang="ts"&gt;
            import { ButtonElement, ConfirmationModal } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";

            const showModal = ref(false);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.confirmationModal.usage.slots") }}</h2>

      <div class="section-content">
        <div class="container">
          <ButtonElement
            :label="$t('ui.confirmationModal.buttonLabel.confirm')"
            severity="success"
            @click="showCustomContentModal = true"
          />
        </div>

        <ConfirmationModal
          v-if="showCustomContentModal"
          :dismiss-on-click-out="false"
          @on:close="showCustomContentModal = false"
        >
          <template #header>
            <span>
              {{ $t("ui.confirmationModal.headerContent.confirm") }}
            </span>
          </template>

          <template #closeIcon>
            <i
              class="close-icon pi pi-times-circle"
              @click="showCustomContentModal = false"
            />
          </template>

          <template #icon>
            <i class="pi pi-exclamation-circle" />
          </template>

          <template #message>
            <p>{{ $t("ui.confirmationModal.bodyContent.confirm") }}</p>
          </template>

          <template #footer>
            <ButtonElement
              size="small"
              :label="$t('ui.confirmationModal.buttonLabel.cancel')"
              severity="secondary"
              @click="showCustomContentModal = false"
            />

            <ButtonElement
              size="small"
              :label="$t('ui.confirmationModal.buttonLabel.confirm')"
              severity="success"
              @click="showCustomContentModal = false"
            />
          </template>
        </ConfirmationModal>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement
              label="Confirm"
              severity="success"
              @click="showModal = true"
            /&gt;

            &lt;ConfirmationModal
              v-if="showModal"
              :dismiss-on-click-out="false"
              @on:close="showModal = false"
            &gt;
              &lt;template #header&gt;
                &lt;span&gt;Confirmation required&lt;/span&gt;
              &lt;/template&gt;

              &lt;template #closeIcon&gt;
                &lt;i
                  class="close-icon pi pi-times-circle"
                  @click="showModal = false"
                /&gt;
              &lt;/template&gt;

              &lt;template #icon&gt;
                &lt;i class="pi pi-exclamation-circle" /&gt;
              &lt;/template&gt;

              &lt;template #message&gt;
                &lt;p&gt;Are you sure you want to proceed?&lt;/p&gt;
              &lt;/template&gt;

              &lt;template #footer&gt;
                &lt;ButtonElement
                  label="Cancel"
                  severity="secondary"
                  @click="showModal = false"
                /&gt;
                &lt;ButtonElement
                  label="Confirm"
                  severity="success"
                  @click="showModal = false"
                /&gt;
              &lt;/template&gt;
            &lt;/ConfirmationModal&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
            import { ButtonElement, ConfirmationModal } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";

            const showModal = ref(false);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.confirmationModal.usage.withI18n") }}</h2>

      <div class="section-content">
        <div class="container">
          <ButtonElement
            :label="$t('ui.confirmationModal.buttonLabel.delete')"
            severity="danger"
            @click="showI18nModal = true"
          />
        </div>

        <ConfirmationModal
          v-if="showI18nModal"
          @on:close="showI18nModal = false"
        >
          <template #header>
            <span>
              {{ $t("ui.confirmationModal.headerContent.deleteUser") }}
            </span>
          </template>

          <template #message>
            <p>{{ $t("ui.confirmationModal.bodyContent.confirmDelete") }}</p>
          </template>

          <template #footer>
            <ButtonElement
              size="small"
              :label="$t('ui.confirmationModal.buttonLabel.cancel')"
              severity="secondary"
              @click="showI18nModal = false"
            />

            <ButtonElement
              size="small"
              :label="$t('ui.confirmationModal.buttonLabel.delete')"
              severity="danger"
              @click="showI18nModal = false"
            />
          </template>
        </ConfirmationModal>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement
              :label="t('ui.confirmationModal.buttonLabel.delete')"
              severity="danger"
              @click="showModal = true"
            /&gt;

            &lt;ConfirmationModal
              v-if="showModal"
              @on:close="showModal = false"
            &gt;
              &lt;template #header&gt;
                &lt;span&gt;
                  &lbrace;&lbrace; t("ui.confirmationModal.headerContent.deleteUser") &rbrace;&rbrace;
                &lt;/span&gt;
              &lt;/template&gt;

              &lt;template #message&gt;
                &lt;p&gt;
                  &lbrace;&lbrace; t("ui.confirmationModal.bodyContent.confirmDelete") &rbrace;&rbrace;
                &lt;/p&gt;
              &lt;/template&gt;

              &lt;template #footer&gt;
                &lt;ButtonElement
                  :label="t('ui.confirmationModal.buttonLabel.cancel')"
                  severity="secondary"
                  @click="showI18nModal = false"
                /&gt;
                &lt;ButtonElement
                  :label="t('ui.confirmationModal.buttonLabel.delete')"
                  severity="danger"
                  @click="showI18nModal = false"
                /&gt;
              &lt;/template&gt;
            &lt;/ConfirmationModal&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
            import { ButtonElement, ConfirmationModal } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";
            import { useI18n } from "@prefabs.tech/vue3-i18n";

            const showModal = ref(false);
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
        $t('common.properties', { value: 'ConfirmationModalProperties' })
      "
      :slots-data="slotsData"
    />
  </UiPage>
</template>

<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { ButtonElement, ConfirmationModal } from "@prefabs.tech/vue3-ui";
import { ref } from "vue";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import UiPage from "../UiPage.vue";

const { t } = useI18n();

const currentTime = ref(undefined as unknown as Date);
const showCustomContentModal = ref(false);
const showDeleteModal = ref(false);
const showI18nModal = ref(false);
const showModal = ref(false);

const eventsData = [
  {
    description: t("ui.confirmationModal.documentation.eventDescription.close"),
    name: "on:close",
    payload: "-",
  },
  {
    description: t(
      "ui.confirmationModal.documentation.eventDescription.confirm",
    ),
    name: "on:confirm",
    payload: "-",
  },
];

const propsData = [
  {
    default: "-",
    description: t(
      "ui.confirmationModal.documentation.propsDescription.acceptOptions",
    ),
    prop: "acceptButtonOptions",
    type: "ButtonProperties",
  },
  {
    default: "-",
    description: t(
      "ui.confirmationModal.documentation.propsDescription.cancelOptions",
    ),
    prop: "cancelButtonOptions",
    type: "ButtonProperties",
  },
  {
    default: "true",
    description: t(
      "ui.confirmationModal.documentation.propsDescription.closable",
    ),
    prop: "closable",
    type: "Boolean",
  },
  {
    default: "pi pi-times",
    description: t(
      "ui.confirmationModal.documentation.propsDescription.closeIcon",
    ),
    prop: "closeIcon",
    type: "String",
  },
  {
    default: "true",
    description: t(
      "ui.confirmationModal.documentation.propsDescription.dismissOnClickOut",
    ),
    prop: "dismissOnClickOut",
    type: "Boolean",
  },
  {
    default: "Confirmation required",
    description: t(
      "ui.confirmationModal.documentation.propsDescription.header",
    ),
    prop: "header",
    type: "String",
  },
  {
    default: "pi pi-exclamation-triangle",
    description: t("ui.confirmationModal.documentation.propsDescription.icon"),
    prop: "icon",
    type: "Boolean | String",
  },
  {
    default: "Are you sure you want to proceed?",
    description: t(
      "ui.confirmationModal.documentation.propsDescription.message",
    ),
    prop: "message",
    type: "String",
  },
];

const slotsData = [
  {
    description: t("ui.confirmationModal.documentation.slotDescription.header"),
    name: "header",
  },
  {
    description: t(
      "ui.confirmationModal.documentation.slotDescription.message",
    ),
    name: "message",
  },
  {
    description: t("ui.confirmationModal.documentation.slotDescription.footer"),
    name: "footer",
  },
  {
    description: t(
      "ui.confirmationModal.documentation.slotDescription.closeIcon",
    ),
    name: "closeIcon",
  },
  {
    description: t("ui.confirmationModal.documentation.slotDescription.icon"),
    name: "icon",
  },
];

const onConfirm = () => {
  currentTime.value = new Date();
  showModal.value = false;
};
</script>

<style lang="css">
.demo .container {
  align-items: center;
  display: flex;
  gap: 1rem;
}

i.close-icon {
  cursor: pointer;
}
</style>

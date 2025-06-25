<template>
  <UiPage
    :sub-title="$t('ui.confirmationModal.subtitle')"
    :title="$t('ui.confirmationModal.title')"
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
              @on:close="showModal = false"
              @on:confirm="onConfirm()"
            /&gt;
          &lt;/template&gt;
  
          &lt;script setup lang="ts"&gt;
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
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
      <h2>{{ $t("ui.confirmationModal.usage.withDivider") }}</h2>

      <div class="section-content">
        <div class="container">
          <ButtonElement
            :label="$t('ui.confirmationModal.buttonLabel.confirm')"
            severity="success"
            @click="showBorderedModal = true"
          />
        </div>

        <ConfirmationModal
          v-if="showBorderedModal"
          divider
          @on:close="showBorderedModal = false"
          @on:confirm="showBorderedModal = false"
        />

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
              divider
              @on:close="showModal = false"
              @on:confirm="showModal = false"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const showModal = ref(false);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.confirmationModal.usage.disableHeader") }}</h2>

      <div class="section-content">
        <div class="container">
          <ButtonElement
            :label="$t('ui.confirmationModal.buttonLabel.confirm')"
            severity="success"
            @click="showDisabledHeaderModal = true"
          />
        </div>

        <ConfirmationModal
          v-if="showDisabledHeaderModal"
          disable-header
          @on:close="showDisabledHeaderModal = false"
          @on:confirm="showDisabledHeaderModal = false"
        />

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
              disable-header
              @on:close="showModal = false"
              @on:confirm="showModal = false"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const showModal = ref(false);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.confirmationModal.usage.disableBody") }}</h2>

      <div class="section-content">
        <div class="container">
          <ButtonElement
            :label="$t('ui.confirmationModal.buttonLabel.confirm')"
            severity="success"
            @click="showDisabledBodyModal = true"
          />
        </div>

        <ConfirmationModal
          v-if="showDisabledBodyModal"
          disable-body
          @on:close="showDisabledBodyModal = false"
          @on:confirm="showDisabledBodyModal = false"
        />

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
              disable-body
              @on:close="showModal = false"
              @on:confirm="showModal = false"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
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
          @click="showCustomContentModal = false"
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
              @click="showCustomContentModal = false"
            />

            <ButtonElement
              size="small"
              :label="$t('ui.confirmationModal.buttonLabel.delete')"
              severity="danger"
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
              @on:close="showModal = false"
            &gt;
              &lt;template #header&gt;
                &lt;span&gt;Delete user&lt;/span&gt;
              &lt;/template&gt;

              &lt;template #body&gt;
                &lt;p&gt;Are you sure to delete user?&lt;/p&gt;
              &lt;/template&gt;

              &lt;template #footer&gt;
                &lt;ButtonElement
                  label="Cancel"
                  severity="secondary"
                  @click="showModal = false"
                /&gt;
                &lt;ButtonElement
                  label="Confirm"
                  severity="danger"
                  @click="showModal = false"
                /&gt;
              &lt;/template&gt;
            &lt;/ConfirmationModal&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
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
            :label="$t('ui.confirmationModal.buttonLabel.confirm')"
            severity="success"
            @click="showI18nModal = true"
          />
          <span>{{ currentTime }}</span>
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

          <template #body>
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
              :label="t('ui.confirmationModal.buttonLabel.confirm')"
              severity="success"
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

              &lt;template #body&gt;
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
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";
            import { useI18n } from "@dzangolab/vue3-i18n";

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
import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
import { ref } from "vue";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import UiPage from "../UiPage.vue";

const currentTime = ref(undefined as unknown as Date);
const showBorderedModal = ref(false);
const showCustomContentModal = ref(false);
const showDisabledBodyModal = ref(false);
const showDisabledHeaderModal = ref(false);
const showI18nModal = ref(false);
const showModal = ref(false);

const eventsData = [
  {
    name: "on:close",
    payload: "-",
    description: "Emitted when the modal is closed.",
  },
  {
    name: "on:confirm",
    payload: "-",
    description: "Emitted when the Confirm button is clicked.",
  },
];

const propsData = [
  {
    prop: "disableBody",
    type: "Boolean",
    default: "false",
    description: "If true, hides the default body content of the modal.",
  },
  {
    prop: "disableHeader",
    type: "Boolean",
    default: "false",
    description: "If true, hides the default header content of the modal.",
  },
  {
    prop: "divider",
    type: "Boolean",
    default: "false",
    description:
      "If true, adds a visual divider (border) to the modal container.",
  },
];

const slotsData = [
  {
    name: "body",
    description: "Slot to override the default body message.",
  },
  {
    name: "footer",
    description: "Slot to override the default footer.",
  },
  {
    name: "header",
    description: "Slot to override the default header title.",
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
</style>

<template>
  <UiPage
    :sub-title="$t('ui.modal.subtitle')"
    :title="$t('ui.modal.title')"
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
      <h2>{{ $t("ui.modal.usage.basic") }}</h2>

      <div class="section-content">
        <ButtonElement
          :label="$t('ui.modal.label.open')"
          @click="showModal = true"
        />

        <Modal :show="showModal" @on:close="showModal = false">
          {{ $t("ui.modal.content") }}
        </Modal>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement
              label="Open"
              @click="showModal = true"
            /&gt;

            &lt;Modal :show="showModal" @on:close="showModal = false" &gt;
              Lorem ipsum...
            &lt;/Modal&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement, Modal } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const showModal = ref(false);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.modal.usage.withTitle") }}</h2>

      <div class="section-content">
        <ButtonElement
          :label="$t('ui.modal.label.show')"
          @click="showTitleModal = true"
        />

        <Modal
          :show="showTitleModal"
          :title="$t('ui.modal.header.productDetail')"
          @on:close="showTitleModal = false"
        >
          {{ $t("ui.modal.content") }}
        </Modal>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement
              label="Show"
              @click="showModal = true"
            /&gt;

            &lt;Modal
              :show="showModal"
              title="Product detail"
              @on:close="showModal = false"
            &gt;
              Lorem ipsum...
            &lt;/Modal&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement, Modal } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const showModal = ref(false);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.modal.usage.disableDismiss") }}</h2>

      <div class="section-content">
        <ButtonElement
          :label="$t('ui.modal.label.viewDetail')"
          @click="showDisableDismissModal = true"
        />

        <Modal
          :dismiss-on-click-out="false"
          :show="showDisableDismissModal"
          :title="$t('ui.modal.header.productDetail')"
          @on:close="showDisableDismissModal = false"
        >
          <div
            v-for="(detail, index) in productDetail"
            :key="index + '-' + detail"
            class="info"
          >
            <span class="label">{{ detail.label }}</span>
            <span class="value">{{ " : " + detail.value }}</span>
          </div>
        </Modal>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement
              label="View detail"
              @click="showModal = true"
            /&gt;

            &lt;Modal
              :dismiss-on-click-out="false"
              :show="showModal"
              title="Product detail"
              @on:close="showModal = false"
            &gt;
              &lt;div
                v-for="(detail, index) in productDetail"
                :key="index + '-' + detail"
                class="info"
              &gt;
                &lt;span class="label"&gt;&lbrace;&lbrace; detail.label &rbrace;&rbrace;&lt;/span&gt;
                &lt;span class="value"&gt;&lbrace;&lbrace; " : " + detail.value &rbrace;&rbrace;&lt;/span&gt;
              &lt;/div&gt;
            &lt;/Modal&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement, Modal } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const productDetail = [
            ...
          ];

          const showModal = ref(false);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.modal.usage.size") }}</h2>

      <div class="section-content">
        <ButtonElement
          :label="$t('ui.modal.label.show')"
          @click="showSizeModal = true"
        />

        <Modal
          :show="showSizeModal"
          :title="$t('ui.modal.header.productDetail')"
          size="large"
          @on:close="showSizeModal = false"
        >
          {{ $t("ui.modal.content") }}
        </Modal>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement
              label="Show"
              @click="showModal = true"
            /&gt;

            &lt;Modal
              :show="showModal"
              size="large"
              title="Product detail"
              @on:close="showModal = false"
            &gt;
              Lorem ipsum...
            &lt;/Modal&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ButtonElement, Modal } from "@prefabs.tech/vue3-ui";
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
        <ButtonElement
          :label="$t('ui.modal.label.show')"
          @click="showI18nModal = true"
        />

        <Modal
          :show="showI18nModal"
          :title="$t('ui.modal.header.productDetail')"
          @on:close="showI18nModal = false"
        >
          {{ $t("ui.modal.content") }}
        </Modal>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement
              :label="t('ui.modal.label.show')"
              @click="showModal = true"
            /&gt;

            &lt;Modal
              :show="showModal"
              :title="t('ui.modal.header.productDetail')"
              @on:close="showModal = false"
            &gt;
              &lbrace;&lbrace; t("ui.modal.content") &rbrace;&rbrace;
            &lt;/Modal&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { ButtonElement, Modal } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const { t } = useI18n();

          const showModal = ref(false);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.confirmationModal.usage.slots") }}</h2>

      <div class="section-content">
        <ButtonElement
          :label="$t('ui.modal.label.login')"
          icon-left="pi pi-user"
          @click="showSlotModal = true"
        />

        <Modal :show="showSlotModal" @on:close="showSlotModal = false">
          <template #header>
            <span role="heading">{{ $t("ui.modal.label.login") }}</span>
          </template>

          <Form class="login-form">
            <Email
              v-model="formData.email"
              :label="$t('form.label.email')"
              :placeholder="$t('form.placeholder.email')"
            />

            <Password
              v-model="formData.password"
              :label="$t('form.label.password')"
              :placeholder="$t('form.placeholder.password')"
            />

            <FormActions
              :submit-label="$t('ui.modal.label.login')"
              alignment="filled"
              class="login-actions"
              @cancel="showSlotModal = false"
            />
          </Form>

          <template #footer>
            <router-link to="/form/password-input">
              {{ $t("ui.modal.label.forgotPassword") }}
            </router-link>
          </template>
        </Modal>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement
              icon-left="pi pi-user"
              label="Login"
              @click="showModal = true"
            /&gt;

            &lt;Modal :show="showModal" @on:close="showModal = false" &gt;
              &lt;template #header&gt;
                &lt;span role="heading">Login&lt;/span&gt;
              &lt;/template&gt;

              &lt;Form&gt;
                &lt;Email
                  v-model="formData.email"
                  label="Email"
                  placeholder="Enter a email"
                /&gt;

                &lt;Password
                  v-model="formData.password"
                  label="Password"
                  placeholder="Enter a password"
                /&gt;

                &lt;FormActions
                  alignment="filled"
                  class="login-actions"
                  submit-label="Login"
                  @cancel="showSlotModal = false"
                /&gt;
              &lt;/Form&gt;

              &lt;template #footer&gt;
                &lt;router-link to="/form/password-input"&gt;
                  Forgot password?
                &lt;/router-link&gt;
              &lt;/template&gt;
            &lt;/Modal&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Email, Form, FormActions, Password } from "@prefabs.tech/vue3-form";
          import { ButtonElement, Modal } from "@prefabs.tech/vue3-ui";
          import { reactive, ref } from "vue";

          const formData = reactive({
            email: ref(),
            password: ref(),
          });

          const showModal = ref(false);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <ComponentDocumentation
      :events-data="eventsData"
      :props-data="propsData"
      :props-table-title="$t('common.properties', { value: 'ModalProperties' })"
      :slots-data="slotsData"
    />
  </UiPage>
</template>

<script setup lang="ts">
import { Email, Form, FormActions, Password } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { ButtonElement, Modal } from "@prefabs.tech/vue3-ui";
import { reactive, ref } from "vue";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import UiPage from "../UiPage.vue";

const { t } = useI18n();

const eventsData = [
  {
    description: t("ui.modal.documentation.eventDescription.close"),
    name: "on:close",
    payload: "-",
  },
];

const productDetail = [
  {
    label: "Name",
    value: "Acer Nitro 5",
  },
  {
    label: "Category",
    value: "Laptop",
  },
  {
    label: "Color",
    value: "Black",
  },
];

const propsData = [
  {
    default: "true",
    description: t("ui.modal.documentation.propsDescription.dismissOnClickOut"),
    prop: "dismissOnClickOut",
    type: "Boolean",
  },
  {
    default: "false",
    description: t("ui.modal.documentation.propsDescription.show"),
    prop: "show",
    type: "Boolean",
  },
  {
    default: "medium",
    description: t("ui.modal.documentation.propsDescription.size"),
    prop: "size",
    type: `"medium" | "large"`,
  },
  {
    default: "-",
    description: t("ui.modal.documentation.propsDescription.title"),
    prop: "title",
    type: "String",
  },
];

const slotsData = [
  {
    description: t("ui.modal.documentation.slotDescription.default"),
    name: "default",
  },
  {
    description: t("ui.modal.documentation.slotDescription.footer"),
    name: "footer",
  },
  {
    description: t("ui.modal.documentation.slotDescription.header"),
    name: "header",
  },
];

const formData = reactive({
  email: ref(),
  password: ref(),
});

const showDisableDismissModal = ref(false);
const showI18nModal = ref(false);
const showModal = ref(false);
const showSizeModal = ref(false);
const showSlotModal = ref(false);
const showTitleModal = ref(false);
</script>

<style lang="css">
.demo .info {
  display: flex;
  line-height: 1.5rem;
  width: 20rem;
}

.demo .info > .label {
  font-weight: 600;
  min-width: 5rem;
}

.demo .login-actions {
  margin-bottom: 0;
}

.demo .dialog.active .login-form {
  width: 25rem;
}
</style>

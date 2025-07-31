<template>
  <UiPage
    :sub-title="$t('ui.button.subtitle')"
    :title="$t('ui.button.title')"
    class="demo-button"
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
      <h2>{{ $t("ui.button.usage.basic") }}</h2>

      <div class="section-content">
        <div class="container">
          <ButtonElement
            :label="$t('ui.button.label.clickMe')"
            @click="onClick()"
          />

          <span>{{ currentTime }}</span>
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt; 
            &lt;ButtonElement label="Click me" @click="onClick" /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt; 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.button.usage.withI18n") }}</h2>

      <div class="section-content">
        <div class="container">
          <ButtonElement :label="$t('ui.button.label.next')" />
        </div>
      </div>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt; 
          &lt;ButtonElement :label="t('ui.button.label.next')" /&gt;
        &lt;/template&gt;
        
        &lt;script setup lang="ts"&gt; 
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->
    </section>

    <section>
      <h2>{{ $t("ui.button.usage.loading") }}</h2>

      <div class="section-content">
        <div class="container">
          <ButtonElement
            :label="$t('ui.button.label.submit')"
            :loading="loading"
            @click="startLoading"
          />
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;ButtonElement
              :loading="loading"
              label="Submit"
              @click="startLoading"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
            import { ButtonElement } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";

            const loading = ref(false);

            const startLoading = () => {
              loading.value = true;

              setTimeout(() => {
                loading.value = false;
              }, 5000);
            };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.button.usage.contentSlot") }}</h2>

      <div class="section-content">
        <div class="container">
          <ButtonElement>
            <template #label>
              <u>{{ $t("ui.button.label.clickMe") }}</u>
            </template>
          </ButtonElement>
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt; 
            &lt;ButtonElement children&gt;
              &lt;template #buttonContent&gt;
                &lt;u&gt;Click me&lt;/u&gt;
              &lt;/template&gt;
            &lt;/ButtonElement&gt;
          &lt;/template&gt; 
          
          &lt;script setup lang="ts"&gt; 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.button.usage.severity") }}</h2>

      <div class="section-content">
        <div class="container">
          <ButtonElement
            severity="primary"
            :label="$t('ui.button.label.primary')"
          />

          <ButtonElement
            severity="secondary"
            :label="$t('ui.button.label.secondary')"
          />

          <ButtonElement
            severity="alternate"
            :label="$t('ui.button.label.alternate')"
          />

          <ButtonElement
            severity="success"
            :label="$t('ui.button.label.success')"
          />

          <ButtonElement
            severity="danger"
            :label="$t('ui.button.label.danger')"
          />

          <ButtonElement
            severity="warning"
            :label="$t('ui.button.label.warning')"
          />
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt; 
            &lt;ButtonElement label="Primary" severity="primary" /&gt;
            &lt;ButtonElement label="Secondary" severity="secondary" /&gt;
            &lt;ButtonElement label="Alternate" severity="alternate" /&gt;
            &lt;ButtonElement label="Success" severity="success" label="Success" /&gt;
            &lt;ButtonElement label="Danger" severity="danger" label="Danger" /&gt;
            &lt;ButtonElement label="Warning" severity="warning" label="Warning" /&gt;
          &lt;/template&gt; 
          
          &lt;script setup lang="ts"&gt; 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.button.usage.size") }}</h2>

      <div class="section-content">
        <div class="container">
          <ButtonElement size="small" :label="$t('ui.button.label.small')" />
          <ButtonElement size="medium" :label="$t('ui.button.label.medium')" />
          <ButtonElement size="large" :label="$t('ui.button.label.large')" />
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt; 
            &lt;ButtonElement label="Small" size="small" /&gt;
            &lt;ButtonElement label="Medium" size="medium" /&gt;
            &lt;ButtonElement label="Large" size="large" /&gt;
          &lt;/template&gt; 
          
          &lt;script setup lang="ts"&gt; 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.button.usage.variant") }}</h2>

      <div class="section-content">
        <div class="container">
          <ButtonElement
            size="medium"
            :label="$t('ui.button.label.textOnly')"
            variant="textOnly"
          />

          <ButtonElement
            size="medium"
            :label="$t('ui.button.label.outlined')"
            variant="outlined"
          />

          <ButtonElement size="medium" :label="$t('ui.button.label.default')" />
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt; 
            &lt;ButtonElement label="Text only" size="medium" variant="textOnly" /&gt;
            &lt;ButtonElement label="Outlined" size="medium" variant="outlined" /&gt;
            &lt;ButtonElement label="Default" size="medium" /&gt;
          &lt;/template&gt; 
          
          &lt;script setup lang="ts"&gt; 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.button.usage.icons.icon") }}</h2>

      <div class="section-content">
        <div className="container">
          <ButtonElement
            variant="textOnly"
            severity="secondary"
            icon-left="pi pi-user"
          />

          <ButtonElement
            variant="outlined"
            severity="secondary"
            icon-left="pi pi-user"
          />

          <ButtonElement variant="filled" icon-left="pi pi-user" />
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt; 
            &lt;ButtonElement icon-right="pi pi-user" severity="secondary" variant="textOnly" /&gt;
            &lt;ButtonElement icon-right="pi pi-user" variant="outlined" /&gt;
            &lt;ButtonElement icon-right="pi pi-user" severity="secondary" variant="filled" /&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt; 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.button.usage.icons.iconElement") }}</h2>

      <div class="section-content">
        <div className="container">
          <ButtonElement rounded variant="textOnly" severity="secondary">
            <template #iconLeft>
              <i class="pi pi-user" />
            </template>
          </ButtonElement>

          <ButtonElement rounded severity="secondary" variant="outlined">
            <template #iconRight>
              <i class="pi pi-user" />
            </template>
          </ButtonElement>

          <ButtonElement rounded variant="filled">
            <template #iconRight>
              <i class="pi pi-user" />
            </template>
          </ButtonElement>
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt; 
            &lt;ButtonElement rounded severity="secondary" variant="textOnly"&gt;
                &lt;template #iconLeft&gt;
                  &lt;i class="pi pi-user" &gt;
                &lt;/template&gt;
            &lt;/ButtonElement&gt;

            &lt;ButtonElement rounded variant="outlined"&gt;
              &lt;template #iconRight&gt;
                &lt;i class="pi pi-user" &gt;
              &lt;/template&gt;
            &lt;/ButtonElement&gt;

            &lt;ButtonElement rounded variant="filled"&gt;
                &lt;template #iconRight&gt;
                  &lt;i class="pi pi-user" &gt;
                &lt;/template&gt;
            &lt;/ButtonElement&gt;
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt; 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.button.usage.icons.iconPackage") }}</h2>

      <div class="section-content">
        <div class="container">
          <ButtonElement
            :label="$t('ui.button.label.home')"
            icon-left="pi pi-home"
            variant="outlined"
          />

          <ButtonElement
            :label="$t('ui.button.label.home')"
            icon-left="fa-solid fa-house"
            variant="outlined"
          />
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt; 
            &lt;ButtonElement
              label="Home"
              icon-left="pi pi-home"
              variant="outlined"
            /&gt;

            &lt;ButtonElement
              label="Home"
              icon-left="fa-solid fa-house"
              variant="outlined"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt; 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.button.usage.icons.iconAndLabel") }}</h2>

      <div class="section-content">
        <div class="container">
          <ButtonElement
            :label="$t('ui.button.label.textOnly')"
            icon-left="pi pi-user"
            variant="textOnly"
          />

          <ButtonElement
            :label="$t('ui.button.label.outlined')"
            icon-left="pi pi-user"
            variant="outlined"
          />

          <ButtonElement
            :label="$t('ui.button.label.default')"
            icon-left="pi pi-user"
            variant="filled"
          />
        </div>

        <div class="container">
          <ButtonElement
            :label="$t('ui.button.label.textOnly')"
            icon-right="pi pi-user"
            rounded
            variant="textOnly"
          />

          <ButtonElement
            :label="$t('ui.button.label.outlined')"
            icon-right="pi pi-user"
            rounded
            variant="outlined"
          />

          <ButtonElement
            :label="$t('ui.button.label.default')"
            icon-right="pi pi-user"
            rounded
            variant="filled"
          />
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt; 
            &lt;ButtonElement label="Text only" icon-left="pi pi-user" variant="textOnly" /&gt;
            &lt;ButtonElement label="Outlined" icon-left="pi pi-user" variant="outlined" /&gt;
            &lt;ButtonElement label="Default" icon-left="pi pi-user" variant="filled" /&gt;
          &lt;/template&gt; 

          &lt;template&gt; 
            &lt;ButtonElement label="Text only" icon-right="pi pi-user" rounded 
              variant="textOnly" 
            /&gt;
            &lt;ButtonElement label="Outlined" icon-right="pi pi-user" rounded variant="outlined" /&gt;
            &lt;ButtonElement label="Default" icon-right="pi pi-user" rounded variant="filled" /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt; 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.button.usage.redirect") }}</h2>

      <div class="section-content">
        <div class="container">
          <ButtonElement :label="$t('ui.button.label.home')" to="/" />
          <ButtonElement
            :label="$t('ui.button.label.back')"
            severity="secondary"
            to="/vue/#/ui"
          />
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt; 
            &lt;ButtonElement label="home" to="/" /&gt;
            &lt;ButtonElement label="back" severity="secondary" to="/ui" /&gt;
          &lt;/template&gt; 
          
          &lt;script setup lang="ts"&gt; 
            import { ButtonElement } from "@prefabs.tech/vue3-ui"; 
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <ComponentDocumentation
      :events-data="eventsData"
      :props-data="propsData"
      :props-table-title="
        $t('common.properties', { value: 'ButtonProperties' })
      "
      :slots-data="slotsData"
    />
  </UiPage>
</template>

<script setup lang="ts">
import { ButtonElement } from "@prefabs.tech/vue3-ui";
import { ref } from "vue";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import UiPage from "../UiPage.vue";

const currentTime = ref(undefined as unknown as Date);
const loading = ref(false);

const eventsData = [
  {
    description: "Emitted when the button is clicked.",
    name: "click",
    payload: "-",
  },
];

const propsData = [
  {
    default: `"button"`,
    description: "Accessible label for the button element.",
    prop: "ariaLabel",
    type: "String",
  },
  {
    default: "false",
    description: "If true, the button will be disabled and non-interactive.",
    prop: "disabled",
    type: "Boolean",
  },
  {
    default: "-",
    description: "Icon to be displayed on the left side of the button.",
    prop: "iconLeft",
    type: "String | Boolean",
  },
  {
    default: "-",
    description: "Icon to be displayed on the right side of the button.",
    prop: "iconRight",
    type: "String | Boolean",
  },
  {
    default: "-",
    description: "Text label to display inside the button.",
    prop: "label",
    type: "String",
  },
  {
    default: "false",
    description:
      "If true, indicates that the button is in a loading state and disables user interaction.",
    prop: "loading",
    type: "Boolean",
  },
  {
    default: "false",
    description: "Applies rounded styling to the button.",
    prop: "rounded",
    type: "Boolean",
  },
  {
    default: `"primary"`,
    description: "Defines the button color style.",
    prop: "severity",
    type: `"primary" | "secondary" | "alternate" | "success" | "danger" | "warning"`,
  },
  {
    default: `"medium"`,
    description: "Defines the size of the button.",
    prop: "size",
    type: `"small" | "medium" | "large"`,
  },
  {
    default: "-",
    description: "If set, the button renders as a link pointing to this URL.",
    prop: "to",
    type: "String",
  },
  {
    default: "-",
    description: "HTML title attribute.",
    prop: "title",
    type: "String",
  },
  {
    default: `"filled"`,
    description: "Defines the visual variant of the button.",
    prop: "variant",
    type: `"outlined" | "filled" | "textOnly"`,
  },
];

const slotsData = [
  {
    description:
      "Slot for custom left icon content. Overrides `iconLeft` prop.",
    name: "iconLeft",
  },
  {
    description:
      "Slot for custom right icon content. Overrides `iconRight` prop.",
    name: "iconRight",
  },
  {
    description: "Slot for custom button content. Overrides `label` prop.",
    name: "label",
  },
];

const onClick = () => {
  currentTime.value = new Date();
};

const startLoading = () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
  }, 5000);
};
</script>

<style lang="css" scoped>
.demo-button .container {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.demo-button section {
  margin-bottom: 2.5em;
}

.demo-button .section-content {
  display: grid;
  gap: 1.5rem;
}
</style>

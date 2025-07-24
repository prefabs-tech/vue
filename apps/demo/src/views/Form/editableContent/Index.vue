<template>
  <FormPage :title="$t('form.label.editableContent')" class="demo">
    <template #toolbar>
      <ButtonElement
        :label="$t('common.back')"
        icon-left="pi pi-chevron-left"
        size="medium"
        variant="textOnly"
        @click="$router.push('/form')"
      />
    </template>

    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <EditableContent v-model="formData.basic" />

        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;EditableContent v-model="input" /&gt;
  
          &lt;script setup lang="ts"&gt;
          import { EditableContent } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref("Basic");
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.contentElement") }}</h2>

      <div class="section-content">
        <div class="editable-group">
          <EditableContent v-model="formData.content" content-element="h3" />
          <EditableContent v-model="formData.underline" content-element="i" />
          <EditableContent v-model="formData.italic" content-element="u" />
        </div>

        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;EditableContent v-model="input1" content-element="h3" /&gt;
          &lt;EditableContent v-model="input2" content-element="i" /&gt;
          &lt;EditableContent v-model="input3" content-element="u" /&gt;
  
          &lt;script setup lang="ts"&gt;
          import { EditableContent } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input1 = ref("Input");
          const input2 = ref("Input");
          const input3 = ref("Input");
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disabled") }}</h2>

      <div class="section-content">
        <EditableContent v-model="formData.disabled" :allow-edit="false" />

        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;EditableContent v-model="input" :allow-edit="false" /&gt;
  
          &lt;script setup lang="ts"&gt;
          import { EditableContent } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref("Title");
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.size") }}</h2>

      <div class="section-content">
        <div class="editable-group">
          <EditableContent v-model="formData.smallSize" size="small" />
          <EditableContent v-model="formData.mediumSize" size="medium" />
          <EditableContent v-model="formData.largeSize" size="large" />
        </div>
        <EditableContent v-model="formData.fullSize" size="full" />

        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;EditableContent v-model="input1" size="small" /&gt;
          &lt;EditableContent v-model="input2" size="medium" /&gt;
          &lt;EditableContent v-model="input3" size="large" /&gt;
          &lt;EditableContent v-model="input4" size="full" /&gt;
  
          &lt;script setup lang="ts"&gt;
          import { EditableContent } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input1 = ref("Editable");
          const input2 = ref("Editable");
          const input3 = ref("Editable");
          const input4 = ref("Lorem ipsum...");
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </FormPage>
</template>

<script lang="ts">
export default {
  name: "EmailInputField",
};
</script>

<script setup lang="ts">
import { EditableContent } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { ButtonElement } from "@prefabs.tech/vue3-ui";
import { reactive, ref } from "vue";

import FormPage from "../FormPage.vue";

const { t } = useI18n();

let formData = reactive({
  basic: ref(t("form.label.basicInput")),
  content: ref(t("form.label.input")),
  disabled: ref(t("form.label.title")),
  fullSize: ref(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ),
  italic: ref(t("form.label.input")),
  largeSize: ref("Editable"),
  mediumSize: ref("Editable"),
  smallSize: ref("Editable"),
  underline: ref(t("form.label.input")),
});
</script>

<style lang="css">
.section-content > .editable-group {
  align-items: flex-end;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>

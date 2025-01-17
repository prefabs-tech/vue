<template>
  <FormPage :title="$t('form.label.fileInput')" class="demo">
    <template #toolbar>
      <router-link :to="{ name: 'form' }" class="back">
        {{ $t("common.back") }}
      </router-link>
    </template>

    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <FileInput />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;FileInput /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { FileInput } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.buttonOptions") }}</h2>

      <div class="section-content">
        <FileInput
          button-label="Choose"
          button-label-selected="Chose"
          :button-props="{
            iconLeft: 'pi pi-file-arrow-up',
            severity: 'success',
            size: 'small',
            variant: 'filled',
          }"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;FileInput
              button-label="Choose"
              button-label-selected="Chose"
              :button-props="{
                iconLeft: 'pi pi-file-arrow-up',
                severity: 'success',
                size: 'small',
                variant: 'filled',
              }"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { FileInput } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.dropzone") }}</h2>

      <div class="section-content">
        <FileInput input-method="dropzone" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;FileInput input-method="dropzone" /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { FileInput } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.dropzoneOptions") }}</h2>

      <div class="section-content">
        <FileInput
          :dropzone-options="{
            accept: ['image/jpeg', 'image/png'],
            maxSize: 1000000,
            minSize: 1000,
          }"
          enable-description
          input-method="dropzone"
          name="images"
          show-error-message
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;FileInput
              :dropzone-options="{
                accept: ['image/jpeg', 'image/png'],
                maxSize: 1000000,
                minSize: 1000,
              }"
              enable-description
              input-method="dropzone"
              name="images"
              show-error-message
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { FileInput } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.multiple") }}</h2>

      <div class="section-content">
        <FileInput
          :dropzone-options="{
            accept: ['image/jpeg', 'image/png'],
            maxFiles: 5,
          }"
          enable-description
          input-method="dropzone"
          multiple
          name="files"
          show-error-message
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;FileInput
              :dropzone-options="{
                accept: ['image/jpeg', 'image/png'],
                maxFiles: 5,
              }"
              enable-description
              input-method="dropzone"
              multiple
              name="files"
              show-error-message
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { FileInput } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.append") }}</h2>

      <div class="section-content">
        <FileInput
          enable-description
          input-method="dropzone"
          mode="append"
          multiple
          name="files"
          show-error-message
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;FileInput
              enable-description
              input-method="dropzone"
              mode="append"
              multiple
              name="files"
              show-error-message
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { FileInput } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </FormPage>
</template>

<script lang="ts">
export default {
  name: "FileInputDemo",
};
</script>

<script setup lang="ts">
import { FileInput } from "@dzangolab/vue3-form";

import FormPage from "../FormPage.vue";
</script>

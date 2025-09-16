<template>
  <FormPage :title="$t('form.label.fileInput')" class="demo">
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
        <FileInput />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;FileInput /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { FileInput } from "@prefabs.tech/vue3-form";
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
          import { FileInput } from "@prefabs.tech/vue3-form";
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
          import { FileInput } from "@prefabs.tech/vue3-form";
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
          import { FileInput } from "@prefabs.tech/vue3-form";
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
          import { FileInput } from "@prefabs.tech/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customErrorMessageInput") }}</h2>

      <div class="section-content">
        <FileInput
          :dropzone-options="customMessageDropzoneOptions"
          :error-messages="{
            invalid: $t('form.errors.file.invalid', { format: '(jpeg, png)' }),
            maxFiles: $t('form.errors.file.maxFiles', {
              max: customMessageDropzoneOptions.maxFiles,
            }),
            maxSize: $t('form.errors.file.maxSize', {
              max: formatBytes(customMessageDropzoneOptions.maxSize),
            }),
            minSize: $t('form.errors.file.minSize', {
              min: formatBytes(customMessageDropzoneOptions.minSize),
            }),
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
              :dropzone-options="options"
              :error-messages="{
                invalid: 'Please upload valid images (jpeg, png)',
                maxFiles: `Please upload max ${options.maxFiles} files`,
                maxSize: `Please upload files smaller than ${formatBytes(options.maxSize)}`,
                minSize: `Please upload files larger than ${formatBytes(options.minSize)}`
              }"
              enable-description
              input-method="dropzone"
              multiple
              name="files"
              show-error-message
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { FileInput } from "@prefabs.tech/vue3-form";

          const options = {
            accept: ['image/jpeg', 'image/png'],
            maxFiles: 2,
            minSize: 10240,
            maxSize: 1048576,
          };

          const formatBytes = (bytes: number): number => {
            const kiloBytes = bytes / 1024;

            return kiloBytes >= 1024 ? `${kiloBytes / 1024} MB` : `${kiloBytes} KB`;
          };
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
          import { FileInput } from "@prefabs.tech/vue3-form";
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
import { FileInput } from "@prefabs.tech/vue3-form";
import { ButtonElement } from "@prefabs.tech/vue3-ui";

import FormPage from "../FormPage.vue";

const customMessageDropzoneOptions = {
  accept: ["image/jpeg", "image/png"],
  maxFiles: 2,
  minSize: 10240,
  maxSize: 1_048_576,
};

const formatBytes = (bytes: number): number => {
  const kiloBytes = bytes / 1024;

  return kiloBytes >= 1024 ? `${kiloBytes / 1024} MB` : `${kiloBytes} KB`;
};
</script>

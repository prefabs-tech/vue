<template>
  <FormPage
    :subtitle="$t('form.subtitle.fileInput')"
    :title="$t('form.label.fileInput')"
    class="demo"
  >
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

    <section>
      <h2>{{ $t("form.label.customRender") }}</h2>

      <div class="section-content">
        <FileInput
          :dropzone-options="{
            accept: ['image/jpeg', 'image/png'],
            maxFiles: 5,
          }"
          input-method="dropzone"
          multiple
          name="custom-file-input"
          show-error-message
        >
          <template #preview="{ file }">
            <img
              :src="getPreview(file)"
              alt="uploaded-file"
              class="image-preview"
            />
          </template>

          <template #details="{ file }">
            <span class="image-details">
              {{ `${file.name} (${formatBytes(file.size)})` }}
            </span>
          </template>
        </FileInput>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;FileInput
              :dropzone-options="{
                accept: ['image/jpeg', 'image/png'],
                maxFiles: 5,
              }"
              input-method="dropzone"
              multiple
              name="file"
              show-error-message
            &gt;
              &lt;template #preview="{ file }"&gt;
                &lt;img :src="getPreview(file)"
                  alt="uploaded-file"
                  class="image-preview"
                &gt;
              &lt;/template&gt;

              &lt;template #details="{ file }"&gt;
                &lt;span class="image-details"&gt;
                  &lbrace;&lbrace; `${file.name} (${formatBytes(file.size)})` &rbrace;&rbrace;
                &lt;/span&gt;
              &lt;/template&gt;
            &lt;/FileInput&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { FileInput } from "@prefabs.tech/vue3-form";

          const getPreview = (file: File) => window?.URL.createObjectURL(file);
          &lt;/script&gt;

          &lt;style lang="css"&gt;
          .image-preview {
            border: 1px solid var(--border-color);
            border-radius: 0.25rem;
            height: 5rem;
            object-fit: cover;
            width: 5rem;
          }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <ComponentDocumentation
      :events-data="eventsData"
      :props-data="propsData"
      :props-table-title="
        $t('common.properties', { value: 'FileInputProperties' })
      "
      :slots-data="slotsData"
    />

    <!-- eslint-disable -->
    <SshPre language="html-vue">
      interface FileErrorMessages {
        invalid?: string;
        maxSize?: string;
        minSize?: string;
        maxFiles?: string;
      }

      interface FileExtended extends File {
        description?: string;
      }
    </SshPre>
    <!-- eslint-enable -->
  </FormPage>
</template>

<script lang="ts">
export default {
  name: "FileInputDemo",
};
</script>

<script setup lang="ts">
import { FileInput } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { computed } from "vue";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import FormPage from "../FormPage.vue";

const { t } = useI18n();

const customMessageDropzoneOptions = {
  accept: ["image/jpeg", "image/png"],
  maxFiles: 2,
  minSize: 10240,
  maxSize: 1_048_576,
};

const eventsData = computed(() => [
  {
    description: t("form.documentation.eventDescription.fileInput.filesUpdate"),
    name: "on:filesUpdate",
    payload: "files: FileExtended[]",
  },
]);

const propsData = computed(() => [
  {
    default: "-",
    description: t(
      "form.documentation.propsDescription.fileInput.addDescriptionLabel",
    ),
    prop: "addDescriptionLabel",
    type: "String",
  },
  {
    default: '"Select"',
    description: t("form.documentation.propsDescription.fileInput.buttonLabel"),
    prop: "buttonLabel",
    type: "String",
  },
  {
    default: '"Selected"',
    description: t(
      "form.documentation.propsDescription.fileInput.buttonLabelSelected",
    ),
    prop: "buttonLabelSelected",
    type: "String",
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.fileInput.buttonProps"),
    prop: "buttonProps",
    type: "Object",
  },
  {
    default: "-",
    description: t(
      "form.documentation.propsDescription.fileInput.descriptionPlaceholder",
    ),
    prop: "descriptionPlaceholder",
    type: "String",
  },
  {
    default: '"Drag and drop or click"',
    description: t(
      "form.documentation.propsDescription.fileInput.dropzoneMessage",
    ),
    prop: "dropzoneMessage",
    type: "String",
  },
  {
    default: "-",
    description: t(
      "form.documentation.propsDescription.fileInput.dropzoneOptions",
    ),
    prop: "dropzoneOptions",
    type: "Object",
  },
  {
    default: "false",
    description: t(
      "form.documentation.propsDescription.fileInput.enableDescription",
    ),
    prop: "enableDescription",
    type: "Boolean",
  },
  {
    default: "-",
    description: t(
      "form.documentation.propsDescription.fileInput.errorMessages",
    ),
    prop: "errorMessages",
    type: "FileErrorMessages",
  },
  {
    default: '"button"',
    description: t("form.documentation.propsDescription.fileInput.inputMethod"),
    prop: "inputMethod",
    type: '"button" | "dropzone"',
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.input.label"),
    prop: "label",
    type: "String",
  },
  {
    default: '"update"',
    description: t("form.documentation.propsDescription.fileInput.mode"),
    prop: "mode",
    type: '"append" | "update"',
  },
  {
    default: "false",
    description: t("form.documentation.propsDescription.fileInput.multiple"),
    prop: "multiple",
    type: "Boolean",
  },
  {
    default: '"file"',
    description: t("form.documentation.propsDescription.input.name"),
    prop: "name",
    type: "String",
  },
  {
    default: "false",
    description: t(
      "form.documentation.propsDescription.fileInput.showErrorMessage",
    ),
    prop: "showErrorMessage",
    type: "Boolean",
  },
]);

const slotsData = computed(() => [
  {
    description: t("form.documentation.slotDescription.fileInput.details"),
    name: "details",
    props: "{ file: FileExtended, index: number }",
  },
  {
    description: t("form.documentation.slotDescription.fileInput.preview"),
    name: "preview",
    props: "{ file: FileExtended }",
  },
]);

const formatBytes = (bytes: number): string => {
  const kiloBytes = Number((bytes / 1024).toFixed(2));

  return kiloBytes >= 1024
    ? `${(kiloBytes / 1024).toFixed(2)} MB`
    : `${kiloBytes} KB`;
};

const getPreview = (file: File) => URL?.createObjectURL(file);
</script>

<style lang="css">
.image-preview {
  border: 1px solid var(--border-color);
  border-radius: 0.25rem;
  height: 5rem;
  object-fit: cover;
  width: 5rem;
}
</style>

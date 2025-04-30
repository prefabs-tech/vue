<template>
  <div class="file-input">
    <label v-if="label" :for="name">{{ label }}</label>

    <div v-if="inputMethod === 'button'" class="input-button-wrapper">
      <ButtonElement
        v-bind="buttonProps"
        :label="
          inputFiles.length
            ? `${buttonLabelSelected} (${inputFiles.length})`
            : buttonLabel
        "
        :severity="buttonProps?.severity || 'secondary'"
        :variant="buttonProps?.variant || 'outlined'"
        @click="open"
      />
      <input :id="name" :name="name" v-bind="getInputProps()" />
    </div>

    <div v-else v-bind="getRootProps({ class: dropzoneClass })">
      <input :id="name" :name="name" v-bind="getInputProps()" />
      <p>{{ dropzoneMessage }}</p>
    </div>

    <span v-if="showErrorMessage" class="error-message">
      {{ errorMessage }}
    </span>

    <ul v-if="inputFiles.length" class="selected">
      <SelectedFile
        v-for="(file, index) in inputFiles"
        :key="file.name"
        :add-description-label="addDescriptionLabel"
        :description-placeholder="descriptionPlaceholder"
        :enable-description="enableDescription"
        :file="file"
        :index="index"
        @on:remove="onRemove"
        @update:file="updateFile"
      />
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "FileInput",
};
</script>

<script setup lang="ts">
import { ButtonElement } from "@dzangolab/vue3-ui";
import { computed, ref } from "vue";
import { useDropzone } from "vue3-dropzone";

import SelectedFile from "./SelectedFile.vue";

import type { FileExtended } from "../../types/index";
import type { FileRejectReason } from "vue3-dropzone";

const props = defineProps({
  addDescriptionLabel: {
    default: undefined,
    type: String,
  },
  buttonLabel: {
    default: "Select",
    type: String,
  },
  buttonLabelSelected: {
    default: "Selected",
    type: String,
  },
  buttonProps: {
    default: () => ({}),
    type: Object,
  },
  descriptionPlaceholder: {
    default: undefined,
    type: String,
  },
  dropzoneMessage: {
    default: "Drag and drop or click",
    type: String,
  },
  dropzoneOptions: {
    default: () => ({}),
    type: Object,
  },
  enableDescription: Boolean,
  inputMethod: {
    default: "button",
    type: String,
    validator: (value: string) => ["button", "dropzone"].includes(value),
  },
  label: {
    default: undefined,
    type: String,
  },
  mode: {
    default: "update",
    type: String,
    validator: (value: string) => ["append", "update"].includes(value),
  },
  multiple: Boolean,
  name: {
    default: "file",
    type: String,
  },
  showErrorMessage: Boolean,
});

const emit = defineEmits(["on:filesUpdate"]);

const errorMessage = ref<string | undefined>();
const inputFiles = ref<File[]>([]);

const dropzoneClass = computed(
  () =>
    `dropzone ${isFocused.value ? "focused" : ""} ${
      isDragAccept.value || (inputFiles.value.length && !errorMessage.value)
        ? "accepted"
        : ""
    } ${isDragReject.value || errorMessage.value ? "rejected" : ""}`,
);

const onDrop = (
  acceptFiles: FileExtended[],
  rejectReasons: FileRejectReason[],
) => {
  if (!props.multiple || props.mode === "update") {
    inputFiles.value = acceptFiles.length ? acceptFiles : [];
  } else {
    const newFiles = [...(acceptFiles || []), ...inputFiles.value];

    const uniqueFiles = newFiles.reduce(
      (previousUniqueFiles: FileExtended[], currentFile) => {
        const currentFileEntries = Object.entries(currentFile);

        if (
          previousUniqueFiles.find((existingFile: FileExtended) => {
            const existingFileEntries = Object.entries(existingFile);
            return existingFileEntries.every(
              ([key, value], index) =>
                key === currentFileEntries[index][0] &&
                value === currentFileEntries[index][1],
            );
          })
        ) {
          return previousUniqueFiles;
        } else {
          return [...previousUniqueFiles, currentFile];
        }
      },
      [],
    );

    inputFiles.value = uniqueFiles;
  }

  const firstError = rejectReasons[0]?.errors[0];
  errorMessage.value =
    firstError && typeof firstError === "object" && "message" in firstError
      ? firstError.message
      : undefined;

  if (inputFiles.value.length) {
    emit("on:filesUpdate", inputFiles.value);
  }
};

const onRemove = (file: FileExtended) => {
  inputFiles.value = inputFiles.value.filter((inputFile) => {
    return file.name !== inputFile.name && file.size !== inputFile.size;
  });

  emit("on:filesUpdate", inputFiles.value);
};

const updateFile = (file: FileExtended) => {
  inputFiles.value = inputFiles.value.map((existingFile) =>
    existingFile.name === file.name ? file : existingFile,
  );

  emit("on:filesUpdate", inputFiles.value);
};

const {
  getInputProps,
  getRootProps,
  isDragAccept,
  isDragReject,
  isFocused,
  open,
} = useDropzone({
  multiple: props.multiple,
  noDrag: props.inputMethod === "button",
  onDrop,
  ...props.dropzoneOptions,
});

defineExpose({
  inputFiles,
});
</script>

<style lang="css">
@import "../../assets/css/fileInput.css";
</style>

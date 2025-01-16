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

    <!-- <ul v-if="value.length" class="selected">
      <SelectedFile
        v-for="(file, index) in value"
        :key="file.name"
        :file="file"
        :index="index"
        :enableDescription="enableDescription"
        :addDescriptionLabel="addDescriptionLabel"
        :descriptionPlaceholder="descriptionPlaceholder"
        @remove="onRemove(index)"
        @descriptionChange="file.description = $event"
      />
    </ul> -->
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

import type { FileRejectReason } from "vue3-dropzone";

const props = defineProps({
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
  dropzoneMessage: {
    default: "Drag and drop or click",
    type: String,
  },
  dropzoneOptions: {
    default: () => ({}),
    type: Object,
  },
  inputMethod: {
    default: "button",
    type: String,
  },
  label: {
    default: undefined,
    type: String,
  },
  multiple: Boolean,
  name: {
    default: "file",
    type: String,
  },
  showErrorMessage: Boolean,
});

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

const onDrop = (acceptFiles: File[], rejectReasons: FileRejectReason[]) => {
  inputFiles.value = acceptFiles.length ? acceptFiles : [];

  const firstError = rejectReasons[0]?.errors[0];
  errorMessage.value =
    firstError && typeof firstError === "object" && "message" in firstError
      ? firstError.message
      : undefined;
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
</script>

<style lang="css">
@import "../../assets/css/fileInput.css";
</style>

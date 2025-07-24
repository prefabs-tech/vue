<template>
  <li :key="file.name">
    <div class="info">
      <div class="preview"></div>
      <div class="details">
        <span :class="`name name-${index}`" :title="file.name">
          {{ file.name }}
        </span>
        <div v-if="enableDescription" class="description-wrapper">
          <div
            v-if="!showDescriptionInput"
            :class="`description description-${index}`"
            role="button"
            tabindex="0"
            :title="description"
            @click="showDescriptionInput = true"
          >
            <span>{{ description || addDescriptionLabel }}</span>
          </div>
          <i
            v-if="!showDescriptionInput"
            class="pi pi-pencil"
            @click="showDescriptionInput = true"
          ></i>
          <div v-else class="p-input-group">
            <Input
              ref="dzangolabVueFileDescription"
              v-model="description"
              :placeholder="descriptionPlaceholder"
              @keydown.enter="onDescriptionChange"
            />
          </div>
        </div>
      </div>
    </div>

    <ButtonElement
      severity="danger"
      size="small"
      variant="outlined"
      @click="onRemove"
    >
      <template #iconLeft>
        <svg
          fill="none"
          viewBox="0 -0.5 25 25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
            fill="currentColor"
          ></path>
        </svg>
      </template>
    </ButtonElement>
  </li>
</template>

<script lang="ts">
export default {
  name: "SelectedFile",
};
</script>

<script setup lang="ts">
import { ButtonElement } from "@prefabs.tech/vue3-ui";
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";

import Input from "../Input.vue";

import type { FileExtended } from "../../types/index";
import type { PropType } from "vue";

const props = defineProps({
  addDescriptionLabel: {
    default: "Add description",
    type: String,
  },
  descriptionPlaceholder: {
    default: "Description",
    type: String,
  },
  enableDescription: Boolean,
  file: {
    type: Object as PropType<FileExtended>,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["on:remove", "update:file"]);

const description = ref(props.file.description || "");
const dzangolabVueFileDescription = ref();
const showDescriptionInput = ref<boolean>(false);

onClickOutside(dzangolabVueFileDescription, (event) => {
  onDescriptionChange();
});

const onDescriptionChange = () => {
  if (description.value) {
    let updatedFile = props.file as FileExtended;
    updatedFile.description = description.value;

    emit("update:file", updatedFile);
  }

  showDescriptionInput.value = false;
};

const onRemove = () => {
  emit("on:remove", props.file);
};
</script>

<style scoped>
.info {
  display: flex;
  align-items: center;
}
.preview {
  /* Add your styles for file preview here */
}
.details {
  flex: 1;
  margin-left: 10px;
}
.description-wrapper {
  display: flex;
  align-items: center;
}
.description {
  cursor: pointer;
  margin-right: 5px;
}
.pi-pencil {
  cursor: pointer;
}
</style>

<template>
  <div>
    <ConfirmationModal
      v-if="showArchiveConfirmation"
      @on:close="$emit('on:closeArchive')"
      @on:confirm="$emit('on:confirmArchive')"
    >
      <template #header>
        {{ archiveConfirmationHeader }}
      </template>
      <template #body>
        {{ archiveConfirmationMessage }}
      </template>
    </ConfirmationModal>
    <ConfirmationModal
      v-if="showDeleteConfirmation"
      @on:close="$emit('on:closeDelete')"
      @on:confirm="$emit('on:confirmDelete')"
    >
      <template #header>
        {{ deleteConfirmationHeader }}
      </template>
      <template #body>
        {{ deleteConfirmationMessage }}
      </template>
    </ConfirmationModal>
  </div>
</template>

<script lang="ts">
export default {
  name: "ConfirmationFileActions",
};
</script>

<script setup lang="ts">
import ConfirmationModal from "../ConfirmationModal/Index.vue";

defineProps({
  archiveConfirmationHeader: {
    default: "Archive file?",
    type: String,
  },
  archiveConfirmationMessage: {
    default: "Are you sure you want to archive this file?",
    type: String,
  },
  deleteConfirmationHeader: {
    default: "Delete file?",
    type: String,
  },
  deleteConfirmationMessage: {
    default: "Are you sure you want to delete this file?",
    type: String,
  },
  showArchiveConfirmation: Boolean,
  showDeleteConfirmation: Boolean,
});

defineEmits([
  "on:closeArchive",
  "on:closeDelete",
  "on:confirmArchive",
  "on:confirmDelete",
]);
</script>

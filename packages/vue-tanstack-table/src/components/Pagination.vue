<template>
  <div class="pagination">
    <div v-if="showItemsPerPageControl" class="items-per-page-control">
      <span>{{ itemsPerPageControlLabel }}</span>
      <select :value="itemsPerPage" @change="handleItemsPerPageChange">
        <option
          v-for="option in itemsPerPageOptions"
          :key="option"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>

    <div v-if="lastPage > 1 && showPageInput" class="page-input-control">
      <span>{{ pageInputLabel }}</span>
      <DebouncedInput
        type="number"
        :debounce-time="inputDebounceTime"
        @update:model-value="handlePageInputChange"
      />
    </div>

    <div v-if="lastPage > 1" class="pagination-buttons-wrapper">
      <div v-if="showFirstLastButtons || showPreviousNextButtons">
        <ButtonElement
          v-if="showFirstLastButtons"
          :disabled="!(currentPage > 0)"
          class="first-page"
          icon-left="pi pi-angle-double-left"
          size="small"
          @click="$emit('update:page', 0)"
        />
        <ButtonElement
          v-if="showPreviousNextButtons"
          :disabled="!(currentPage > 0)"
          class="previous-page"
          icon-left="pi pi-angle-left"
          size="small"
          @click="$emit('update:page', currentPage - 1)"
        />
      </div>

      <div>
        <template v-if="showPageButtons">
          <ButtonElement
            v-for="page in pages"
            :key="page"
            :class="`page-button ${page === currentPage + 1 ? 'active' : ''}`"
            :label="`${page}`"
            size="small"
            @click="$emit('update:page', page - 1)"
          />
        </template>
        <span v-else>{{ `${currentPage + 1} / ${lastPage}` }}</span>
      </div>

      <div v-if="showFirstLastButtons || showPreviousNextButtons">
        <ButtonElement
          v-if="showPreviousNextButtons"
          :disabled="!(currentPage < lastPage - 1)"
          class="next-page"
          icon-left="pi pi-angle-right"
          size="small"
          @click="$emit('update:page', currentPage + 1)"
        />
        <ButtonElement
          v-if="showFirstLastButtons"
          :disabled="!(currentPage < lastPage - 1)"
          class="last-page"
          icon-left="pi pi-angle-double-right"
          size="small"
          @click="$emit('update:page', lastPage - 1)"
        />
      </div>
    </div>

    <span v-else>{{ `${currentPage + 1} / ${lastPage}` }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "TablePagination",
};
</script>

<script setup lang="ts">
import { ButtonElement, DebouncedInput } from "@dzangolab/vue3-ui";
import { ref, computed } from "vue";

const props = defineProps({
  currentPage: {
    required: true,
    type: Number,
  },
  defaultItemsPerPage: {
    default: undefined,
    type: Number,
  },
  totalItems: {
    required: true,
    type: Number,
  },
  inputDebounceTime: {
    default: undefined,
    type: Number,
  },
  itemsPerPageControlLabel: {
    default: "Items per page",
    type: String,
  },
  itemsPerPageOptions: {
    default: () => [5, 10, 20, 30],
    type: Array as () => number[],
  },
  pageInputLabel: {
    default: "Go to page:",
    type: String,
  },
  showFirstLastButtons: {
    default: true,
    type: Boolean,
  },
  showItemsPerPageControl: {
    default: true,
    type: Boolean,
  },
  showPageButtons: {
    default: false,
    type: Boolean,
  },
  showPageInput: {
    type: Boolean,
    default: false,
  },
  showPreviousNextButtons: {
    default: true,
    type: Boolean,
  },
});

const emit = defineEmits(["update:itemsPerPage", "update:page"]);

const itemsPerPage = ref(
  props.defaultItemsPerPage || props.itemsPerPageOptions[0],
);

const lastPage = computed(() =>
  Math.ceil(props.totalItems / itemsPerPage.value),
);

const pages = computed(() =>
  Array.from({ length: lastPage.value }, (_, index) => index + 1),
);

const handleItemsPerPageChange = (event: Event) => {
  const newItemsPerPage = parseInt(
    (event.target as HTMLSelectElement).value,
    10,
  );
  itemsPerPage.value = newItemsPerPage;

  emit("update:itemsPerPage", itemsPerPage.value);
};

const handlePageInputChange = (value: string | number) => {
  const newPage = parseInt(value.toString(), 10) - 1;
  if (!isNaN(newPage) && newPage >= 0 && newPage < lastPage.value) {
    emit("update:page", newPage);
  }
};
</script>

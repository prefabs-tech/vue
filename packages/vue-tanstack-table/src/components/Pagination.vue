<template>
  <div class="pagination">
    <div v-if="showItemsPerPageControl" class="items-per-page-control">
      <span>{{ itemsPerPageControlLabel }}</span>
      <select :value="itemsPerPage" @change="onItemsPerPageChange">
        <option
          v-for="option in itemsPerPageOptions"
          :key="`items-per-page-option-${option}`"
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
        @update:model-value="onPageInputChange"
      />
    </div>

    <div v-if="lastPage > 1" class="pagination-buttons-wrapper">
      <div v-if="showFirstLastButtons || showPreviousNextButtons">
        <ButtonElement
          v-if="showFirstLastButtons"
          :disabled="!(currentPage > 0)"
          class="first-page"
          size="small"
          @click="$emit('update:currentPage', 0)"
        >
          <template #iconLeft>
            <Icon icon="prime:angle-double-left" />
          </template>
        </ButtonElement>
        <ButtonElement
          v-if="showPreviousNextButtons"
          :disabled="!(currentPage > 0)"
          class="previous-page"
          size="small"
          @click="$emit('update:currentPage', currentPage - 1)"
        >
          <template #iconLeft>
            <Icon icon="prime:angle-left" />
          </template>
        </ButtonElement>
      </div>

      <div>
        <template v-if="showPageButtons">
          <ButtonElement
            v-for="page in pages"
            :key="`page-button-${page}`"
            :class="`page-button ${page === currentPage + 1 ? 'active' : ''}`"
            :label="`${page}`"
            size="small"
            @click="$emit('update:currentPage', page - 1)"
          />
        </template>
        <span v-else>{{ `${currentPage + 1} / ${lastPage}` }}</span>
      </div>

      <div v-if="showFirstLastButtons || showPreviousNextButtons">
        <ButtonElement
          v-if="showPreviousNextButtons"
          :disabled="!(currentPage < lastPage - 1)"
          class="next-page"
          size="small"
          @click="$emit('update:currentPage', currentPage + 1)"
        >
          <template #iconLeft>
            <Icon icon="prime:angle-right" />
          </template>
        </ButtonElement>
        <ButtonElement
          v-if="showFirstLastButtons"
          :disabled="!(currentPage < lastPage - 1)"
          class="last-page"
          size="small"
          @click="$emit('update:currentPage', lastPage - 1)"
        >
          <template #iconLeft>
            <Icon icon="prime:angle-double-right" />
          </template>
        </ButtonElement>
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
import { Icon } from "@iconify/vue";
import { ButtonElement, DebouncedInput } from "@prefabs.tech/vue3-ui";
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
  totalItems: {
    required: true,
    type: Number,
  },
});

const emit = defineEmits(["update:currentPage", "update:itemsPerPage"]);

const itemsPerPage = ref(
  props.defaultItemsPerPage || props.itemsPerPageOptions[0],
);

const lastPage = computed(() =>
  Math.ceil(props.totalItems / itemsPerPage.value),
);

const pages = computed(() =>
  Array.from({ length: lastPage.value }, (_, index) => index + 1),
);

const onItemsPerPageChange = (event: Event) => {
  const newItemsPerPage = Number.parseInt(
    (event.target as HTMLSelectElement).value,
    10,
  );
  itemsPerPage.value = newItemsPerPage;

  emit("update:itemsPerPage", itemsPerPage.value);
};

const onPageInputChange = (value: string | number) => {
  const newPage = Number.parseInt(value.toString(), 10) - 1;
  if (!Number.isNaN(newPage) && newPage >= 0 && newPage < lastPage.value) {
    emit("update:currentPage", newPage);
  }
};
</script>

<style lang="css">
@import "../assets/css/pagination.css";
</style>

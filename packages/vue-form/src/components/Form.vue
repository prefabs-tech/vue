<template>
  <Form ref="dzangolabVueForm" class="form" @submit="onSubmit">
    <slot></slot>
  </Form>
</template>

<script lang="ts">
export default {
  name: "FormWrapper",
};
</script>

<script setup lang="ts">
import { Form } from "vee-validate";
import { ref } from "vue";

const emit = defineEmits(["submit"]);

const dzangolabVueForm = ref();

const getFieldMeta = (fieldName: string) => {
  return dzangolabVueForm.value?.getMeta(fieldName);
};

const getFieldValue = (fieldName: string) => {
  return dzangolabVueForm.value?.getValues()?.[fieldName];
};

const onSubmit = (data: object) => {
  emit("submit", data);
};

defineExpose({
  getFieldMeta,
  getFieldValue,
  resetForm: () => dzangolabVueForm.value?.resetForm(),
});
</script>

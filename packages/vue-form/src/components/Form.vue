<template>
  <Form class="form" @submit="onSubmit">
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

const emit = defineEmits(["submit"]);

const onSubmit = () => {
  emit("submit");
};
</script>

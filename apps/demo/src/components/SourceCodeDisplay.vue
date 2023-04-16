<template>
  <pre lang="javascript">
    <code>
      {{ sourceCode }}
    </code>
  </pre>
</template>

<script lang="ts">
export default {
  name: "SourceCodeDisplay",
};
</script>

<script setup lang="ts">
defineProps({
  sourceCode: {
    required: true,
    type: String,
  },
});
</script>

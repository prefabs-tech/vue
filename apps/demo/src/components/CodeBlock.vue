<template>
  <div class="code-block">
    <header>
      <h3>{{ title }}</h3>
      {{ subheader }}
    </header>
    <pre><code>{{codeContent}}</code></pre>
  </div>
</template>

<script lang="ts">
export default {
  name: "CodeBlock",
};
</script>

<script setup lang="ts">
defineProps({
  codeContent: {
    required: true,
    type: String,
  },
  subheader: {
    default: "",
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
});
</script>

<style lang="css">
.code-block pre {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 5px;
  overflow-x: auto;
}
</style>

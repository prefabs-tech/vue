<template>
  <div class="test">
    <p>This is a test component</p>
  </div>
</template>

<script lang="ts">
export default {
  name: "TestComponent",
};
</script>

<style lang="css" scoped>
.test {
  isolation: isolate;
  z-index: 0;
}

.test p {
  z-index: 100;
}
</style>

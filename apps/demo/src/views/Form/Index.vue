<template>
  <Page :title="$t('form.title')">
    <ul role="list">
      <li>
        <router-link :to="{ name: 'emailInput' }">
          {{ $t("form.label.email") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'input' }">
          {{ $t("form.label.input") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'numberInput' }">
          {{ $t("form.label.number") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'textareaInput' }">
          {{ $t("form.label.textarea") }}
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'textInput' }">
          {{ $t("form.label.textInput") }}
        </router-link>
      </li>
    </ul>
  </Page>
</template>

<script lang="ts">
export default {
  name: "Form",
};
</script>

<script setup lang="ts"></script>

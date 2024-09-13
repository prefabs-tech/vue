<template>
  <Page :title="$t('ui.confirmationModal.title')" class="demo">
    <section>
      <h2>Simple confirmation modal</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;div class="container"&gt;
              &lt;ButtonElement
                label="Confirm"
                severity="success"
                @click="showModal = true"
              /&gt;
              &lt;span&gt;{{ currentTime }}&lt;/span&gt;
            &lt;/div&gt;

            &lt;ConfirmationModal
              v-show="showModal"
              @on:close="showModal = false"
              @on:confirm="onConfirm()"
            /&gt;
          &lt;/template&gt; 

          &lt;script setup lang="ts"&gt;
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const currentTime = ref(undefined as unknown as Date);
            const showModal = ref(false);

            function onConfirm() {
              currentTime.value = new Date();
              showModal.value = false;
            }
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <div class="container">
          <ButtonElement
            label="Confirm"
            severity="success"
            @click="showModal = true"
          />
          <span>{{ currentTime }}</span>
        </div>

        <ConfirmationModal
          v-show="showModal"
          @on:close="showModal = false"
          @on:confirm="onConfirm()"
        />
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
import { ref } from "vue";

const currentTime = ref(undefined as unknown as Date);
const showModal = ref(false);

function onConfirm() {
  currentTime.value = new Date();
  showModal.value = false;
}
</script>

<style lang="css" scoped>
.demo .container {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>

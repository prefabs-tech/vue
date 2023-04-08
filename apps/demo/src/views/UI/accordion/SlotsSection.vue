<template>
  <section>
    <h2>{{ $t("ui.accordion.customSlot") }}</h2>

    <Accordion>
      <div class="sub-pane" :title="$t('ui.accordion.contents.1.title')">
        <p>{{ $t("ui.accordion.contents.1.content") }}</p>
      </div>

      <div class="sub-pane" :title="$t('ui.accordion.contents.2.title')">
        <p>{{ $t("ui.accordion.contents.2.content") }}</p>
      </div>

      <!-- this slot will be ignored -->
      <div class="sub-pane">
        <p>{{ $t("ui.accordion.contents.3.content") }}</p>
      </div>
    </Accordion>
  </section>
</template>

<script lang="ts">
export default {
  name: "SlotsSection",
};
</script>

<script lang="ts" setup>
import { Accordion } from "@dzangolab/vue3-ui";
</script>

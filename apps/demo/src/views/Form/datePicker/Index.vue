<template>
  <Page :title="$t('form.label.datePicker')">
    <section class="demo-section">
      <h3>{{ $t("form.label.basicInput") }}</h3>

      <!-- eslint-disable -->
       <SshPre language="html-vue">
        &lt;template&gt;
          &lt;DatePicker 
            v-model="input"
          /&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { DatePicker } from "@dzangolab/vue3-form";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <DatePicker v-model="formData.noLabelInput" class="form-field" />
    </section>

    <section class="demo-section">
      <h3>{{ $t("form.label.labelInput") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;DatePicker 
            v-model="input"
            label="Date picker"
          /&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { DatePicker } from "@dzangolab/vue3-form";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <DatePicker
        v-model="formData.input"
        :label="$t('form.label.datePicker')"
        class="form-field"
      />
    </section>

    <section class="demo-section">
      <h3>{{ $t("form.label.disabled") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;DatePicker 
            v-model="input"
            label="Disabled"
            disabled
          /&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { DatePicker } from "@dzangolab/vue3-form";
        import { ref } from vue;

        const input = ref(new Date());
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <DatePicker
        v-model="formData.disabled"
        :label="$t('form.label.disabled')"
        class="form-field"
        disabled
      />
    </section>

    <section class="demo-section">
      <h3>{{ $t("form.label.dateRange") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;DatePicker 
            v-model="dateRange"
            label="Date picker"
            range
          /&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { DatePicker } from "@dzangolab/vue3-form";

        const startDate = new Date();
        const endDate = startDate;

        const dateRange: ref([
          startDate,
          new Date(endDate.setDate(endDate.getDate() + 7)),
        ]),
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <DatePicker
        v-model="formData.dateRange"
        :label="$t('form.label.datePicker')"
        class="form-field"
        range
      />
    </section>

    <section class="demo-section">
      <h3>{{ $t("form.label.multiCalendars") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;DatePicker 
            v-model="dateRange"
            label="Date picker"
            range
            multi-calendars
          /&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { DatePicker } from "@dzangolab/vue3-form";

        const startDate = new Date();
        const endDate = startDate;

        const dateRange: ref([
          startDate,
          new Date(endDate.setDate(endDate.getDate() + 7)),
        ]),
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <DatePicker
        v-model="formData.multiCalendarsInput"
        :label="$t('form.label.datePicker')"
        class="form-field"
        range
        multi-calendars
      />
    </section>

    <section class="demo-section">
      <h3>{{ $t("form.label.monthPicker") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;DatePicker 
            v-model="input"
            label="Month picker"
            month-picker
          /&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { DatePicker } from "@dzangolab/vue3-form";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <DatePicker
        v-model="formData.month"
        :label="$t('form.label.monthPicker')"
        class="form-field"
        month-picker
      />
    </section>

    <section class="demo-section">
      <h3>{{ $t("form.label.yearPicker") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;DatePicker 
            v-model="year"
            label="Year picker"
            year-picker
          /&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { DatePicker } from "@dzangolab/vue3-form";
        import { ref } from "vue";

        const year = ref(new Date().getFullYear()),
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <DatePicker
        v-model="formData.year"
        :label="$t('form.label.yearPicker')"
        class="form-field"
        year-picker
      />
    </section>

    <section class="demo-section">
      <h3>{{ $t("form.label.timePicker") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;DatePicker 
            v-model="input"
            label="Time picker"
            time-picker
          /&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { DatePicker } from "@dzangolab/vue3-form";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <DatePicker
        v-model="formData.time"
        :label="$t('form.label.timePicker')"
        class="form-field"
        time-picker
      />
    </section>

    <section class="demo-section">
      <h3>{{ $t("form.label.inputWithValidation") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;Form&gt;
            &lt;DatePicker 
              v-model="input"
              :schema="inputSchema"
              label="Date picker"
            /&gt;
          &lt;/Form&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { DatePicker, Form } from "@dzangolab/vue3-form";
        import { z } from "zod";

        const inputSchema = z.coerce
          .date()
          .min(new Date(), { message: "Please provide a present or future date" });
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <Form>
        <DatePicker
          v-model="formData.inputWithValidation"
          :label="$t('form.label.datePicker')"
          :schema="inputSchema"
          class="form-field"
        />
      </Form>
    </section>

    <section class="demo-section">
      <h3>{{ $t("form.label.customStyleInput") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;DatePicker 
            v-model="input"
            class="custom-style-input"
            label="DatePicker"
          /&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { DatePicker } from "@dzangolab/vue3-form";
        &lt;/script&gt;

        &lt;style lang="css"&gt;
        .custom-style-input input {
          --_date-picker-bg-color: #f3f3f3;
          --_date-picker-border-color: var(--dz-primary-color);
          --_date-picker-border-radius: 0.5em;
          --_date-picker-font-size: 1rem;
          --_date-picker-text-color: var(--dz-primary-color);
        }

        .custom-style-input .dp--clear-btn {
          --_date-picker-clear-icon-color: var(--dz-primary-color);
        }

        .custom-style-input .dp__input_icon {
          --_date-picker-input-icon-color: var(--dz-primary-color);
        }

        .custom-style-input label {
          --_date-picker-label-color: var(--dz-primary-color);
        }
        &lt;/style&gt;
      </SshPre>
      <!-- eslint-enable -->

      <DatePicker
        v-model="formData.customStyleInput"
        :label="$t('form.label.datePicker')"
        class="form-field custom-style-input"
      />
    </section>
  </Page>
</template>

<script lang="ts">
export default {
  name: "DatePickerInput",
};
</script>

<script setup lang="ts">
import { useI18n } from "@dzangolab/vue3-i18n";
import { DatePicker, Form } from "@dzangolab/vue3-form";
import { reactive, ref } from "vue";
import { z } from "zod";

const { t } = useI18n();

const inputSchema = z.coerce
  .date()
  .min(new Date(), { message: t("form.errors.datePicker.invalid") });

const startDate = new Date();
const endDate = startDate;

let formData = reactive({
  customStyleInput: ref(),
  dateRange: ref([startDate, new Date(endDate.setDate(endDate.getDate() + 7))]),
  disabled: ref(startDate),
  input: ref(),
  inputWithValidation: ref(),
  month: ref(),
  multiCalendarsInput: ref([
    startDate,
    new Date(endDate.setDate(endDate.getDate() + 7)),
  ]),
  noLabelInput: ref(),
  time: ref(),
  year: ref(startDate.getFullYear()),
});
</script>

<style lang="css">
.custom-style-input input {
  --_date-picker-bg-color: #f3f3f3;
  --_date-picker-border-color: var(--dz-primary-color);
  --_date-picker-border-radius: 0.5em;
  --_date-picker-font-size: 1rem;
  --_date-picker-text-color: var(--dz-primary-color);
}

.custom-style-input .dp--clear-btn {
  --_date-picker-clear-icon-color: var(--dz-primary-color);
}

.custom-style-input .dp__input_icon {
  --_date-picker-input-icon-color: var(--dz-primary-color);
}

.custom-style-input label {
  --_date-picker-label-color: var(--dz-primary-color);
}
</style>

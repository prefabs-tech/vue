<template>
  <FormPage :title="$t('form.label.datePicker')" class="demo">
    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <DatePicker v-model="formData.noLabelInput" placeholder="MM/dd/yyyy" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;DatePicker v-model="input" placeholder="MM/dd/yyyy" /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@prefabs.tech/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.labelInput") }}</h2>

      <div class="section-content">
        <DatePicker
          v-model="formData.arrivalDate"
          :label="$t('form.label.arrivalDate')"
          placeholder="MM/dd/yyyy"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;DatePicker 
              v-model="arrivalDate"
              label="Arrival date"
              placeholder="MM/dd/yyyy"
            /&gt;
          &lt;/template&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@prefabs.tech/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.withI18n") }}</h2>

      <div class="section-content">
        <DatePicker
          v-model="formData.dateOfBirth"
          :label="$t('form.label.dateOfBirth')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;DatePicker 
              v-model="dateOfBirth"
              :label="t('form.label.dateOfBirth')"
            /&gt;
          &lt;/template&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@prefabs.tech/vue3-form";
          import { ref } from vue;
          import { useI18n } from "@prefabs.tech/vue3-i18n";
  
          const dateOfBirth = ref(new Date());
          const { t } = useI18n();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disabled") }}</h2>

      <div class="section-content">
        <DatePicker
          v-model="formData.appointmentDate"
          :label="$t('form.label.appointmentDate')"
          disabled
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;DatePicker 
              v-model="appointDate"
              label="Appointment date"
              disabled
            /&gt;
          &lt;/template&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@prefabs.tech/vue3-form";
          import { ref } from vue;
  
          const appointmentDate = ref(new Date());
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disableWeekDays") }}</h2>

      <div class="section-content">
        <DatePicker
          v-model="formData.presentationDate"
          :disabled-week-days="[6, 0]"
          :label="$t('form.label.presentationDate')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;DatePicker 
              v-model="presentationDate"
              :disabled-week-days="[6, 0]"
              label="Presentation date"
            /&gt;
          &lt;/template&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@prefabs.tech/vue3-form";
          import { ref } from vue;
  
          const presentationDate = ref(new Date());
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customFormat") }}</h2>

      <div class="section-content">
        <DatePicker
          v-model="formData.dateOfBirth"
          format="yyyy/MM/dd"
          :label="$t('form.label.dateOfBirth')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;DatePicker 
              v-model="dateOfBirth"
              format="yyyy/MM/dd"
              label="Date of birth"
            /&gt;
          &lt;/template&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@prefabs.tech/vue3-form";
          import { ref } from vue;
  
          const dateOfBirth = ref(new Date());
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.dateRange") }}</h2>

      <div class="section-content">
        <DatePicker
          v-model="formData.dateRange"
          :label="$t('form.label.dateRange')"
          range
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;DatePicker 
              v-model="dateRange"
              label="Date range"
              range
            /&gt;
          &lt;/template&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@prefabs.tech/vue3-form";
  
          const startDate = new Date();
          const endDate = startDate;
  
          const dateRange = ref([
            startDate,
            new Date(endDate.setDate(endDate.getDate() + 7)),
          ]),
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.multiCalendars") }}</h2>

      <div class="section-content">
        <DatePicker
          v-model="formData.reportDate"
          :label="$t('form.label.reportDate')"
          multi-calendars
          range
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;DatePicker 
              v-model="reportDate"
              label="Report date"
              multi-calendars
              range
            /&gt;
          &lt;/template&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@prefabs.tech/vue3-form";
  
          const startDate = new Date();
          const endDate = startDate;
  
          const reportDate = ref([
            startDate,
            new Date(endDate.setDate(endDate.getDate() + 7)),
          ]),
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.dateTimePicker") }}</h2>

      <div class="section-content">
        <DatePicker
          v-model="formData.availableDatetime"
          :label="$t('form.label.availableDatetime')"
          enable-time-picker
          multi-calendars
          range
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;DatePicker 
              v-model="availableDatetime"
              label="Available datetime"
              enable-time-picker
              multi-calendars
              range
            /&gt;
          &lt;/template&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@prefabs.tech/vue3-form";
  
          const startDate = new Date();
          const endDate = startDate;
  
          const availableDatetime = ref([
            startDate,
            new Date(endDate.setDate(endDate.getDate() + 7)),
          ]),
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.monthPicker") }}</h2>

      <div class="section-content">
        <DatePicker
          v-model="formData.month"
          :label="$t('form.label.month')"
          format="MMM"
          month-picker
          placeholder="MMM"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;DatePicker 
              v-model="month"
              format="MMM"
              label="Month"
              month-picker
              placeholder="MMM"
            /&gt;
          &lt;/template&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@prefabs.tech/vue3-form";
          import { ref } from vue;
  
          const month = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.monthAndYearPicker") }}</h2>

      <div class="section-content">
        <DatePicker
          v-model="formData.month"
          :label="$t('form.label.monthAndYear')"
          month-picker
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;DatePicker 
              v-model="monthAndYear"
              label="Month and year"
              month-picker
            /&gt;
          &lt;/template&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@prefabs.tech/vue3-form";
          import { ref } from vue;
  
          const monthAndYear = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.yearPicker") }}</h2>

      <div class="section-content">
        <DatePicker
          v-model="formData.year"
          :label="$t('form.label.year')"
          year-picker
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;DatePicker 
              v-model="year"
              label="Year"
              year-picker
            /&gt;
          &lt;/template&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
  
          const year = ref(new Date().getFullYear()),
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.timePicker") }}</h2>

      <div class="section-content">
        <DatePicker
          v-model="formData.time"
          :label="$t('form.label.appointmentTime')"
          placeholder="HH:mm"
          time-picker
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;DatePicker 
              v-model="appointmentTime"
              label="Appointment time"
              placeholder="HH:mm"
              time-picker
            /&gt;
          &lt;/template&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker } from "@prefabs.tech/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.inputWithValidation") }}</h2>

      <div class="section-content">
        <Form>
          <DatePicker
            v-model="formData.joinedDate"
            :label="$t('form.label.joinedDate')"
            :schema="inputSchema"
            placeholder="MM/dd/yyyy"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;DatePicker 
              v-model="joinedDate"
              :schema="inputSchema"
              label="Joined date"
              placeholder="MM/dd/yyyy"
            /&gt;
          &lt;/Form&gt;
  
          &lt;script setup lang="ts"&gt;
          import { DatePicker, Form } from "@prefabs.tech/vue3-form";
          import { z } from "zod";
  
          const inputSchema = z
            .date({ invalid_type_error: "Please provide a present or past date" })
            .max(new Date(), { message: "Please provide a present or past date" });
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </FormPage>
</template>

<script lang="ts">
export default {
  name: "DatePickerInput",
};
</script>

<script setup lang="ts">
import { DatePicker, Form } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { reactive, ref } from "vue";
import { z } from "zod";

import FormPage from "../FormPage.vue";

const { t } = useI18n();

const inputSchema = z
  .date({ invalid_type_error: t("form.errors.datePicker.invalid") })
  .max(new Date(), { message: t("form.errors.datePicker.invalid") });

const startDate = new Date();
const endDate = startDate;

let formData = reactive({
  appointmentDate: ref(startDate),
  arrivalDate: ref(),
  availableDatetime: ref([
    startDate,
    new Date(endDate.setDate(endDate.getDate() + 7)),
  ]),
  dateOfBirth: ref(startDate),
  dateRange: ref([startDate, new Date(endDate.setDate(endDate.getDate() + 7))]),
  joinedDate: ref(),
  month: ref(),
  monthAndYear: ref(),
  noLabelInput: ref(),
  presentationDate: ref(startDate),
  reportDate: ref([
    startDate,
    new Date(endDate.setDate(endDate.getDate() + 7)),
  ]),
  time: ref(),
  year: ref(startDate.getFullYear()),
});
</script>

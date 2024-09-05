import{d as k,u as V,b as P,e as p,o as y,c as z,w as i,a as r,t as s,f as e,g as a,h as t,r as c}from"./index-4f538d53.js";import{m as $,B as d,z as h}from"./DzangolabVue3Form.es-700da16e.js";const w={name:"DatePickerInput"},S=k({...w,setup(U){const{t:f}=V(),g=$.coerce.date().max(new Date,{message:f("form.errors.datePicker.invalid")}),D=new Date,b=D;let n=P({appointmentDate:p(D),arrivalDate:p(),availableDatetime:p([D,new Date(b.setDate(b.getDate()+7))]),pickupDate:p(),dateRange:p([D,new Date(b.setDate(b.getDate()+7))]),joinedDate:p(),month:p(),noLabelInput:p(),reportDate:p([D,new Date(b.setDate(b.getDate()+7))]),time:p(),year:p(D.getFullYear())});return(l,o)=>{const u=c("SshPre"),v=c("Page");return y(),z(v,{title:l.$t("form.label.datePicker"),class:"demo"},{default:i(()=>[r("section",null,[r("h2",null,s(l.$t("form.label.basicInput")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="input"
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),a(t(d),{modelValue:t(n).noLabelInput,"onUpdate:modelValue":o[0]||(o[0]=m=>t(n).noLabelInput=m)},null,8,["modelValue"])]),e(),r("section",null,[r("h2",null,s(l.$t("form.label.labelInput")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="arrivalDate"
            label="Arrival date"
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),a(t(d),{modelValue:t(n).arrivalDate,"onUpdate:modelValue":o[1]||(o[1]=m=>t(n).arrivalDate=m),label:l.$t("form.label.arrivalDate")},null,8,["modelValue","label"])]),e(),r("section",null,[r("h2",null,s(l.$t("form.label.disabled")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="appointDate"
            label="Appointment date"
            disabled
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";
        import { ref } from vue;

        const appointmentDate = ref(new Date());
        <\/script>
      `)]),_:1}),e(),a(t(d),{modelValue:t(n).appointmentDate,"onUpdate:modelValue":o[2]||(o[2]=m=>t(n).appointmentDate=m),label:l.$t("form.label.appointmentDate"),disabled:""},null,8,["modelValue","label"])]),e(),r("section",null,[r("h2",null,s(l.$t("form.label.dateRange")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="dateRange"
            label="Date range"
            range
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";

        const startDate = new Date();
        const endDate = startDate;

        const dateRange = ref([
          startDate,
          new Date(endDate.setDate(endDate.getDate() + 7)),
        ]),
        <\/script>
      `)]),_:1}),e(),a(t(d),{modelValue:t(n).dateRange,"onUpdate:modelValue":o[3]||(o[3]=m=>t(n).dateRange=m),label:l.$t("form.label.dateRange"),range:""},null,8,["modelValue","label"])]),e(),r("section",null,[r("h2",null,s(l.$t("form.label.multiCalendars")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="reportDate"
            label="Report date"
            multi-calendars
            range
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";

        const startDate = new Date();
        const endDate = startDate;

        const reportDate = ref([
          startDate,
          new Date(endDate.setDate(endDate.getDate() + 7)),
        ]),
        <\/script>
      `)]),_:1}),e(),a(t(d),{modelValue:t(n).reportDate,"onUpdate:modelValue":o[4]||(o[4]=m=>t(n).reportDate=m),label:l.$t("form.label.reportDate"),"multi-calendars":"",range:""},null,8,["modelValue","label"])]),e(),r("section",null,[r("h2",null,s(l.$t("form.label.dateTimePicker")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="availableDatetime"
            label="Available datetime"
            enable-time-picker
            multi-calendars
            range
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";

        const startDate = new Date();
        const endDate = startDate;

        const availableDatetime = ref([
          startDate,
          new Date(endDate.setDate(endDate.getDate() + 7)),
        ]),
        <\/script>
      `)]),_:1}),e(),a(t(d),{modelValue:t(n).availableDatetime,"onUpdate:modelValue":o[5]||(o[5]=m=>t(n).availableDatetime=m),label:l.$t("form.label.availableDatetime"),"enable-time-picker":"","multi-calendars":"",range:""},null,8,["modelValue","label"])]),e(),r("section",null,[r("h2",null,s(l.$t("form.label.monthPicker")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="month"
            label="Month"
            month-picker
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),a(t(d),{modelValue:t(n).month,"onUpdate:modelValue":o[6]||(o[6]=m=>t(n).month=m),label:l.$t("form.label.month"),"month-picker":""},null,8,["modelValue","label"])]),e(),r("section",null,[r("h2",null,s(l.$t("form.label.yearPicker")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="year"
            label="Year"
            year-picker
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";
        import { ref } from "vue";

        const year = ref(new Date().getFullYear()),
        <\/script>
      `)]),_:1}),e(),a(t(d),{modelValue:t(n).year,"onUpdate:modelValue":o[7]||(o[7]=m=>t(n).year=m),label:l.$t("form.label.year"),"year-picker":""},null,8,["modelValue","label"])]),e(),r("section",null,[r("h2",null,s(l.$t("form.label.timePicker")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="appointmentTime"
            label="Appointment time"
            time-picker
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),a(t(d),{modelValue:t(n).time,"onUpdate:modelValue":o[8]||(o[8]=m=>t(n).time=m),label:l.$t("form.label.appointmentTime"),"time-picker":""},null,8,["modelValue","label"])]),e(),r("section",null,[r("h2",null,s(l.$t("form.label.inputWithValidation")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <Form>
            <DatePicker 
              v-model="joinedDate"
              :schema="inputSchema"
              label="Joined date"
            />
          </Form>
        </template>

        <script setup lang="ts">
        import { DatePicker, Form } from "@dzangolab/vue3-form";
        import { z } from "zod";

        const inputSchema = z.coerce
          .date()
          .max(new Date(), { message: "Please provide a present or past date" });
        <\/script>
      `)]),_:1}),e(),a(t(h),null,{default:i(()=>[a(t(d),{modelValue:t(n).joinedDate,"onUpdate:modelValue":o[9]||(o[9]=m=>t(n).joinedDate=m),label:l.$t("form.label.joinedDate"),schema:t(g)},null,8,["modelValue","label","schema"])]),_:1})]),e(),r("section",null,[r("h2",null,s(l.$t("form.label.customStyleInput")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="pickupDate"
            class="custom-style-input"
            label="Pickup date"
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";
        <\/script>

        <style lang="css">
        .custom-style-input input {
          --dp-background-color: #f3f3f3;
          --dp-border-color: var(--dz-primary-color);
          --dp-border-radius: 0.5em;
          --dp-font-size: 1rem;
          --dp-text-color: var(--dz-primary-color);
        }

        .custom-style-input .dp--clear-btn {
          --dp-icon-color: var(--dz-primary-color);
        }

        .custom-style-input .dp__input_icon {
          --dp-icon-color: var(--dz-primary-color);
        }

        .custom-style-input label {
          --_label-color: var(--dz-primary-color);
        }
        </style>
      `)]),_:1}),e(),a(t(d),{modelValue:t(n).pickupDate,"onUpdate:modelValue":o[10]||(o[10]=m=>t(n).pickupDate=m),label:l.$t("form.label.pickupDate"),class:"custom-style-input"},null,8,["modelValue","label"])])]),_:1},8,["title"])}}});export{S as default};

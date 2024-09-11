import{d as k,u as V,b as P,e as p,o as h,c as y,w as i,a as r,t as d,f as e,g as a,h as t,r as b}from"./index-3e12d54f.js";import{m as $,B as s,z}from"./DzangolabVue3Form.es-0c514279.js";const w={name:"DatePickerInput"},A=k({...w,setup(U){const{t:c}=V(),g=$.coerce.date().max(new Date,{message:c("form.errors.datePicker.invalid")}),D=new Date,f=D;let n=P({appointmentDate:p(D),arrivalDate:p(),availableDatetime:p([D,new Date(f.setDate(f.getDate()+7))]),dateOfBirth:p(D),dateRange:p([D,new Date(f.setDate(f.getDate()+7))]),joinedDate:p(),month:p(),monthAndYear:p(),noLabelInput:p(),pickupDate:p(),presentationDate:p(D),reportDate:p([D,new Date(f.setDate(f.getDate()+7))]),time:p(),year:p(D.getFullYear())});return(l,o)=>{const u=b("SshPre"),v=b("Page");return h(),y(v,{title:l.$t("form.label.datePicker"),class:"demo"},{default:i(()=>[r("section",null,[r("h2",null,d(l.$t("form.label.basicInput")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="input"
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),a(t(s),{modelValue:t(n).noLabelInput,"onUpdate:modelValue":o[0]||(o[0]=m=>t(n).noLabelInput=m)},null,8,["modelValue"])]),e(),r("section",null,[r("h2",null,d(l.$t("form.label.labelInput")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="arrivalDate"
            label="Arrival date"
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),a(t(s),{modelValue:t(n).arrivalDate,"onUpdate:modelValue":o[1]||(o[1]=m=>t(n).arrivalDate=m),label:l.$t("form.label.arrivalDate")},null,8,["modelValue","label"])]),e(),r("section",null,[r("h2",null,d(l.$t("form.label.disabled")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
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
      `)]),_:1}),e(),a(t(s),{modelValue:t(n).appointmentDate,"onUpdate:modelValue":o[2]||(o[2]=m=>t(n).appointmentDate=m),label:l.$t("form.label.appointmentDate"),disabled:""},null,8,["modelValue","label"])]),e(),r("section",null,[r("h2",null,d(l.$t("form.label.disableWeekDays")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="presentationDate"
            :disabled-week-days="[6, 0]"
            label="Presentation date"
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";
        import { ref } from vue;

        const presentationDate = ref(new Date());
        <\/script>
      `)]),_:1}),e(),a(t(s),{modelValue:t(n).presentationDate,"onUpdate:modelValue":o[3]||(o[3]=m=>t(n).presentationDate=m),"disabled-week-days":[6,0],label:l.$t("form.label.presentationDate")},null,8,["modelValue","label"])]),e(),r("section",null,[r("h2",null,d(l.$t("form.label.customFormat")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="dateOfBirth"
            format="yyyy/MM/dd"
            label="Date of birth"
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";
        import { ref } from vue;

        const dateOfBirth = ref(new Date());
        <\/script>
      `)]),_:1}),e(),a(t(s),{modelValue:t(n).dateOfBirth,"onUpdate:modelValue":o[4]||(o[4]=m=>t(n).dateOfBirth=m),format:"yyyy/MM/dd",label:l.$t("form.label.dateOfBirth")},null,8,["modelValue","label"])]),e(),r("section",null,[r("h2",null,d(l.$t("form.label.dateRange")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
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
      `)]),_:1}),e(),a(t(s),{modelValue:t(n).dateRange,"onUpdate:modelValue":o[5]||(o[5]=m=>t(n).dateRange=m),label:l.$t("form.label.dateRange"),range:""},null,8,["modelValue","label"])]),e(),r("section",null,[r("h2",null,d(l.$t("form.label.multiCalendars")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
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
      `)]),_:1}),e(),a(t(s),{modelValue:t(n).reportDate,"onUpdate:modelValue":o[6]||(o[6]=m=>t(n).reportDate=m),label:l.$t("form.label.reportDate"),"multi-calendars":"",range:""},null,8,["modelValue","label"])]),e(),r("section",null,[r("h2",null,d(l.$t("form.label.dateTimePicker")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
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
      `)]),_:1}),e(),a(t(s),{modelValue:t(n).availableDatetime,"onUpdate:modelValue":o[7]||(o[7]=m=>t(n).availableDatetime=m),label:l.$t("form.label.availableDatetime"),"enable-time-picker":"","multi-calendars":"",range:""},null,8,["modelValue","label"])]),e(),r("section",null,[r("h2",null,d(l.$t("form.label.monthPicker")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="month"
            format="MMM"
            label="Month"
            month-picker
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";
        import { ref } from vue;

        const month = ref();
        <\/script>
      `)]),_:1}),e(),a(t(s),{modelValue:t(n).month,"onUpdate:modelValue":o[8]||(o[8]=m=>t(n).month=m),format:"MMM",label:l.$t("form.label.month"),"month-picker":""},null,8,["modelValue","label"])]),e(),r("section",null,[r("h2",null,d(l.$t("form.label.monthAndYearPicker")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="monthAndYear"
            label="Month and year"
            month-picker
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";
        import { ref } from vue;

        const monthAndYear = ref();
        <\/script>
      `)]),_:1}),e(),a(t(s),{modelValue:t(n).month,"onUpdate:modelValue":o[9]||(o[9]=m=>t(n).month=m),label:l.$t("form.label.monthAndYear"),"month-picker":""},null,8,["modelValue","label"])]),e(),r("section",null,[r("h2",null,d(l.$t("form.label.yearPicker")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
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
      `)]),_:1}),e(),a(t(s),{modelValue:t(n).year,"onUpdate:modelValue":o[10]||(o[10]=m=>t(n).year=m),label:l.$t("form.label.year"),"year-picker":""},null,8,["modelValue","label"])]),e(),r("section",null,[r("h2",null,d(l.$t("form.label.timePicker")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
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
      `)]),_:1}),e(),a(t(s),{modelValue:t(n).time,"onUpdate:modelValue":o[11]||(o[11]=m=>t(n).time=m),label:l.$t("form.label.appointmentTime"),"time-picker":""},null,8,["modelValue","label"])]),e(),r("section",null,[r("h2",null,d(l.$t("form.label.inputWithValidation")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
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
      `)]),_:1}),e(),a(t(z),null,{default:i(()=>[a(t(s),{modelValue:t(n).joinedDate,"onUpdate:modelValue":o[12]||(o[12]=m=>t(n).joinedDate=m),label:l.$t("form.label.joinedDate"),schema:t(g)},null,8,["modelValue","label","schema"])]),_:1})]),e(),r("section",null,[r("h2",null,d(l.$t("form.label.customStyleInput")),1),e(),a(u,{language:"html-vue"},{default:i(()=>[e(`
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
      `)]),_:1}),e(),a(t(s),{modelValue:t(n).pickupDate,"onUpdate:modelValue":o[13]||(o[13]=m=>t(n).pickupDate=m),label:l.$t("form.label.pickupDate"),class:"custom-style-input"},null,8,["modelValue","label"])])]),_:1},8,["title"])}}});export{A as default};

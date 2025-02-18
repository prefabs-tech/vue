import{J as d,l as v}from"./DzangolabVue3Form.es-db631682.js";import{d as g,a5 as h,p as k,j as p,J as V,o as P,c as $,w as i,K as o,D as t,ao as y,W as e,f as n,L as u}from"./index-729398ab-b294403d.js";import{m as w}from"./index-6bf42b23.js";import{_ as z}from"./FormPage.vue_vue_type_style_index_0_lang-c07c697e.js";const B={class:"section-content"},U={class:"section-content"},O={class:"section-content"},M={class:"section-content"},I={class:"section-content"},A={class:"section-content"},R={class:"section-content"},Y={class:"section-content"},j={class:"section-content"},F={class:"section-content"},S={class:"section-content"},C={class:"section-content"},J={class:"section-content"},L={class:"section-content"},T={name:"DatePickerInput"},E=g({...T,setup(N){const{t:c}=h(),b=w.date({invalid_type_error:c("form.errors.datePicker.invalid")}).max(new Date,{message:c("form.errors.datePicker.invalid")}),f=new Date,D=f;let r=k({appointmentDate:p(f),arrivalDate:p(),availableDatetime:p([f,new Date(D.setDate(D.getDate()+7))]),dateOfBirth:p(f),dateRange:p([f,new Date(D.setDate(D.getDate()+7))]),joinedDate:p(),month:p(),monthAndYear:p(),noLabelInput:p(),presentationDate:p(f),reportDate:p([f,new Date(D.setDate(D.getDate()+7))]),time:p(),year:p(f.getFullYear())});return(a,l)=>{const s=V("SshPre");return P(),$(z,{title:a.$t("form.label.datePicker"),class:"demo"},{toolbar:i(()=>[o(t(y),{label:a.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=m=>a.$router.push("/form"))},null,8,["label"])]),default:i(()=>[e(),n("section",null,[n("h2",null,u(a.$t("form.label.basicInput")),1),e(),n("div",B,[o(t(d),{modelValue:t(r).noLabelInput,"onUpdate:modelValue":l[1]||(l[1]=m=>t(r).noLabelInput=m)},null,8,["modelValue"]),e(),o(s,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <DatePicker 
              v-model="input"
            />
          </template>

          <script setup lang="ts">
          import { DatePicker } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,u(a.$t("form.label.labelInput")),1),e(),n("div",U,[o(t(d),{modelValue:t(r).arrivalDate,"onUpdate:modelValue":l[2]||(l[2]=m=>t(r).arrivalDate=m),label:a.$t("form.label.arrivalDate")},null,8,["modelValue","label"]),e(),o(s,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <DatePicker 
              v-model="arrivalDate"
              label="Arrival date"
            />
          </template>
  
          <script setup lang="ts">
          import { DatePicker } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,u(a.$t("form.label.withI18n")),1),e(),n("div",O,[o(t(d),{modelValue:t(r).dateOfBirth,"onUpdate:modelValue":l[3]||(l[3]=m=>t(r).dateOfBirth=m),label:a.$t("form.label.dateOfBirth")},null,8,["modelValue","label"]),e(),o(s,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <DatePicker 
              v-model="dateOfBirth"
              :label="t('form.label.dateOfBirth')"
            />
          </template>
  
          <script setup lang="ts">
          import { DatePicker } from "@dzangolab/vue3-form";
          import { ref } from vue;
          import { useI18n } from "@dzangolab/vue3-i18n";
  
          const dateOfBirth = ref(new Date());
          const { t } = useI18n();
          <\/script>
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,u(a.$t("form.label.disabled")),1),e(),n("div",M,[o(t(d),{modelValue:t(r).appointmentDate,"onUpdate:modelValue":l[4]||(l[4]=m=>t(r).appointmentDate=m),label:a.$t("form.label.appointmentDate"),disabled:""},null,8,["modelValue","label"]),e(),o(s,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,u(a.$t("form.label.disableWeekDays")),1),e(),n("div",I,[o(t(d),{modelValue:t(r).presentationDate,"onUpdate:modelValue":l[5]||(l[5]=m=>t(r).presentationDate=m),"disabled-week-days":[6,0],label:a.$t("form.label.presentationDate")},null,8,["modelValue","label"]),e(),o(s,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,u(a.$t("form.label.customFormat")),1),e(),n("div",A,[o(t(d),{modelValue:t(r).dateOfBirth,"onUpdate:modelValue":l[6]||(l[6]=m=>t(r).dateOfBirth=m),format:"yyyy/MM/dd",label:a.$t("form.label.dateOfBirth")},null,8,["modelValue","label"]),e(),o(s,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,u(a.$t("form.label.dateRange")),1),e(),n("div",R,[o(t(d),{modelValue:t(r).dateRange,"onUpdate:modelValue":l[7]||(l[7]=m=>t(r).dateRange=m),label:a.$t("form.label.dateRange"),range:""},null,8,["modelValue","label"]),e(),o(s,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,u(a.$t("form.label.multiCalendars")),1),e(),n("div",Y,[o(t(d),{modelValue:t(r).reportDate,"onUpdate:modelValue":l[8]||(l[8]=m=>t(r).reportDate=m),label:a.$t("form.label.reportDate"),"multi-calendars":"",range:""},null,8,["modelValue","label"]),e(),o(s,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,u(a.$t("form.label.dateTimePicker")),1),e(),n("div",j,[o(t(d),{modelValue:t(r).availableDatetime,"onUpdate:modelValue":l[9]||(l[9]=m=>t(r).availableDatetime=m),label:a.$t("form.label.availableDatetime"),"enable-time-picker":"","multi-calendars":"",range:""},null,8,["modelValue","label"]),e(),o(s,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,u(a.$t("form.label.monthPicker")),1),e(),n("div",F,[o(t(d),{modelValue:t(r).month,"onUpdate:modelValue":l[10]||(l[10]=m=>t(r).month=m),label:a.$t("form.label.month"),format:"MMM","month-picker":""},null,8,["modelValue","label"]),e(),o(s,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,u(a.$t("form.label.monthAndYearPicker")),1),e(),n("div",S,[o(t(d),{modelValue:t(r).month,"onUpdate:modelValue":l[11]||(l[11]=m=>t(r).month=m),label:a.$t("form.label.monthAndYear"),"month-picker":""},null,8,["modelValue","label"]),e(),o(s,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,u(a.$t("form.label.yearPicker")),1),e(),n("div",C,[o(t(d),{modelValue:t(r).year,"onUpdate:modelValue":l[12]||(l[12]=m=>t(r).year=m),label:a.$t("form.label.year"),"year-picker":""},null,8,["modelValue","label"]),e(),o(s,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,u(a.$t("form.label.timePicker")),1),e(),n("div",J,[o(t(d),{modelValue:t(r).time,"onUpdate:modelValue":l[13]||(l[13]=m=>t(r).time=m),label:a.$t("form.label.appointmentTime"),"time-picker":""},null,8,["modelValue","label"]),e(),o(s,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,u(a.$t("form.label.inputWithValidation")),1),e(),n("div",L,[o(t(v),null,{default:i(()=>[o(t(d),{modelValue:t(r).joinedDate,"onUpdate:modelValue":l[14]||(l[14]=m=>t(r).joinedDate=m),label:a.$t("form.label.joinedDate"),schema:t(b)},null,8,["modelValue","label","schema"])]),_:1}),e(),o(s,{language:"html-vue"},{default:i(()=>[e(`
          <Form>
            <DatePicker 
              v-model="joinedDate"
              :schema="inputSchema"
              label="Joined date"
            />
          </Form>
  
          <script setup lang="ts">
          import { DatePicker, Form } from "@dzangolab/vue3-form";
          import { z } from "zod";
  
          const inputSchema = z
            .date({ invalid_type_error: "Please provide a present or past date" })
            .max(new Date(), { message: "Please provide a present or past date" });
          <\/script>
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{E as default};

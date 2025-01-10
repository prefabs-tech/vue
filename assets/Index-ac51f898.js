import{C as u,$ as h}from"./DzangolabVue3Form.es-4259c31d.js";import{d as k,a7 as V,p as P,j as p,K as b,o as $,c as y,w as i,L as a,C as e,M as s,f as n,E as t}from"./index-8e1c3ab6-d459558c.js";import{m as w}from"./index-882509c2.js";import{_ as z}from"./FormPage.vue_vue_type_style_index_0_lang-b92c84d7.js";const B={class:"section-content"},U={class:"section-content"},M={class:"section-content"},O={class:"section-content"},I={class:"section-content"},_={class:"section-content"},A={class:"section-content"},R={class:"section-content"},Y={class:"section-content"},C={class:"section-content"},j={class:"section-content"},F={class:"section-content"},S={class:"section-content"},L={class:"section-content"},T={name:"DatePickerInput"},q=k({...T,setup(N){const{t:D}=V(),v=w.date({invalid_type_error:D("form.errors.datePicker.invalid")}).max(new Date,{message:D("form.errors.datePicker.invalid")}),f=new Date,c=f;let o=P({appointmentDate:p(f),arrivalDate:p(),availableDatetime:p([f,new Date(c.setDate(c.getDate()+7))]),dateOfBirth:p(f),dateRange:p([f,new Date(c.setDate(c.getDate()+7))]),joinedDate:p(),month:p(),monthAndYear:p(),noLabelInput:p(),presentationDate:p(f),reportDate:p([f,new Date(c.setDate(c.getDate()+7))]),time:p(),year:p(f.getFullYear())});return(l,r)=>{const g=b("router-link"),d=b("SshPre");return $(),y(z,{title:l.$t("form.label.datePicker"),class:"demo"},{toolbar:i(()=>[a(g,{to:{name:"form"},class:"back"},{default:i(()=>[e(s(l.$t("common.back")),1)]),_:1})]),default:i(()=>[e(),n("section",null,[n("h2",null,s(l.$t("form.label.basicInput")),1),e(),n("div",B,[a(t(u),{modelValue:t(o).noLabelInput,"onUpdate:modelValue":r[0]||(r[0]=m=>t(o).noLabelInput=m)},null,8,["modelValue"]),e(),a(d,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <DatePicker 
              v-model="input"
            />
          </template>

          <script setup lang="ts">
          import { DatePicker } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,s(l.$t("form.label.labelInput")),1),e(),n("div",U,[a(t(u),{modelValue:t(o).arrivalDate,"onUpdate:modelValue":r[1]||(r[1]=m=>t(o).arrivalDate=m),label:l.$t("form.label.arrivalDate")},null,8,["modelValue","label"]),e(),a(d,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <DatePicker 
              v-model="arrivalDate"
              label="Arrival date"
            />
          </template>
  
          <script setup lang="ts">
          import { DatePicker } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,s(l.$t("form.label.withI18n")),1),e(),n("div",M,[a(t(u),{modelValue:t(o).dateOfBirth,"onUpdate:modelValue":r[2]||(r[2]=m=>t(o).dateOfBirth=m),label:l.$t("form.label.dateOfBirth")},null,8,["modelValue","label"]),e(),a(d,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,s(l.$t("form.label.disabled")),1),e(),n("div",O,[a(t(u),{modelValue:t(o).appointmentDate,"onUpdate:modelValue":r[3]||(r[3]=m=>t(o).appointmentDate=m),label:l.$t("form.label.appointmentDate"),disabled:""},null,8,["modelValue","label"]),e(),a(d,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,s(l.$t("form.label.disableWeekDays")),1),e(),n("div",I,[a(t(u),{modelValue:t(o).presentationDate,"onUpdate:modelValue":r[4]||(r[4]=m=>t(o).presentationDate=m),"disabled-week-days":[6,0],label:l.$t("form.label.presentationDate")},null,8,["modelValue","label"]),e(),a(d,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,s(l.$t("form.label.customFormat")),1),e(),n("div",_,[a(t(u),{modelValue:t(o).dateOfBirth,"onUpdate:modelValue":r[5]||(r[5]=m=>t(o).dateOfBirth=m),format:"yyyy/MM/dd",label:l.$t("form.label.dateOfBirth")},null,8,["modelValue","label"]),e(),a(d,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,s(l.$t("form.label.dateRange")),1),e(),n("div",A,[a(t(u),{modelValue:t(o).dateRange,"onUpdate:modelValue":r[6]||(r[6]=m=>t(o).dateRange=m),label:l.$t("form.label.dateRange"),range:""},null,8,["modelValue","label"]),e(),a(d,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,s(l.$t("form.label.multiCalendars")),1),e(),n("div",R,[a(t(u),{modelValue:t(o).reportDate,"onUpdate:modelValue":r[7]||(r[7]=m=>t(o).reportDate=m),label:l.$t("form.label.reportDate"),"multi-calendars":"",range:""},null,8,["modelValue","label"]),e(),a(d,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,s(l.$t("form.label.dateTimePicker")),1),e(),n("div",Y,[a(t(u),{modelValue:t(o).availableDatetime,"onUpdate:modelValue":r[8]||(r[8]=m=>t(o).availableDatetime=m),label:l.$t("form.label.availableDatetime"),"enable-time-picker":"","multi-calendars":"",range:""},null,8,["modelValue","label"]),e(),a(d,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,s(l.$t("form.label.monthPicker")),1),e(),n("div",C,[a(t(u),{modelValue:t(o).month,"onUpdate:modelValue":r[9]||(r[9]=m=>t(o).month=m),label:l.$t("form.label.month"),format:"MMM","month-picker":""},null,8,["modelValue","label"]),e(),a(d,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,s(l.$t("form.label.monthAndYearPicker")),1),e(),n("div",j,[a(t(u),{modelValue:t(o).month,"onUpdate:modelValue":r[10]||(r[10]=m=>t(o).month=m),label:l.$t("form.label.monthAndYear"),"month-picker":""},null,8,["modelValue","label"]),e(),a(d,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,s(l.$t("form.label.yearPicker")),1),e(),n("div",F,[a(t(u),{modelValue:t(o).year,"onUpdate:modelValue":r[11]||(r[11]=m=>t(o).year=m),label:l.$t("form.label.year"),"year-picker":""},null,8,["modelValue","label"]),e(),a(d,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,s(l.$t("form.label.timePicker")),1),e(),n("div",S,[a(t(u),{modelValue:t(o).time,"onUpdate:modelValue":r[12]||(r[12]=m=>t(o).time=m),label:l.$t("form.label.appointmentTime"),"time-picker":""},null,8,["modelValue","label"]),e(),a(d,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,s(l.$t("form.label.inputWithValidation")),1),e(),n("div",L,[a(t(h),null,{default:i(()=>[a(t(u),{modelValue:t(o).joinedDate,"onUpdate:modelValue":r[13]||(r[13]=m=>t(o).joinedDate=m),label:l.$t("form.label.joinedDate"),schema:t(v)},null,8,["modelValue","label","schema"])]),_:1}),e(),a(d,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{q as default};

import{m as u,u as p}from"./DzangolabVue3Form.es-e74307c3.js";import{d as k,a7 as V,p as P,j as f,K as b,o as F,c as $,w as l,L as n,C as e,M as s,f as a,E as t}from"./index-137faed7-93834ea2.js";import{m as w}from"./index-9b29a3a4.js";import{_ as y}from"./FormPage.vue_vue_type_style_index_0_lang-3ef133bb.js";const _={class:"section-content"},z={class:"section-content"},B={class:"section-content"},U={class:"section-content"},M={class:"section-content"},O={class:"section-content"},I={class:"section-content"},A={class:"section-content"},R={class:"section-content"},Y={class:"section-content"},j={class:"section-content"},S={class:"section-content"},C={class:"section-content"},L={class:"section-content"},T={name:"DatePickerInput"},q=k({...T,setup(N){const{t:v}=V(),g=w.coerce.date().max(new Date,{message:v("form.errors.datePicker.invalid")}),c=new Date,D=c;let r=P({appointmentDate:f(c),arrivalDate:f(),availableDatetime:f([c,new Date(D.setDate(D.getDate()+7))]),dateOfBirth:f(c),dateRange:f([c,new Date(D.setDate(D.getDate()+7))]),joinedDate:f(),month:f(),monthAndYear:f(),noLabelInput:f(),presentationDate:f(c),reportDate:f([c,new Date(D.setDate(D.getDate()+7))]),time:f(),year:f(c.getFullYear())});return(o,m)=>{const h=b("router-link"),d=b("SshPre");return F(),$(y,{title:o.$t("form.label.datePicker"),class:"demo"},{toolbar:l(()=>[n(h,{to:{name:"form"},class:"back"},{default:l(()=>[e(s(o.$t("common.back")),1)]),_:1})]),default:l(()=>[e(),a("section",null,[a("h2",null,s(o.$t("form.label.basicInput")),1),e(),a("div",_,[n(d,{language:"html-vue"},{default:l(()=>[e(`
          <Form>
            <DatePicker 
              v-model="input"
            />
          </Form>

          <script setup lang="ts">
          import { DatePicker } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),n(t(u),null,{default:l(()=>[n(t(p),{modelValue:t(r).noLabelInput,"onUpdate:modelValue":m[0]||(m[0]=i=>t(r).noLabelInput=i)},null,8,["modelValue"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.labelInput")),1),e(),a("div",z,[n(d,{language:"html-vue"},{default:l(()=>[e(`
          <Form>
            <DatePicker 
              v-model="arrivalDate"
              label="Arrival date"
            />
          </Form>
  
          <script setup lang="ts">
          import { DatePicker } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),n(t(u),null,{default:l(()=>[n(t(p),{modelValue:t(r).arrivalDate,"onUpdate:modelValue":m[1]||(m[1]=i=>t(r).arrivalDate=i),label:o.$t("form.label.arrivalDate")},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.withI18n")),1),e(),a("div",B,[n(d,{language:"html-vue"},{default:l(()=>[e(`
          <Form>
            <DatePicker 
              v-model="dateOfBirth"
              :label="t('form.label.dateOfBirth')"
            />
          </Form>
  
          <script setup lang="ts">
          import { DatePicker } from "@dzangolab/vue3-form";
          import { ref } from vue;
          import { useI18n } from "@dzangolab/vue3-i18n";
  
          const dateOfBirth = ref(new Date());
          const { t } = useI18n();
          <\/script>
        `)]),_:1}),e(),n(t(u),null,{default:l(()=>[n(t(p),{modelValue:t(r).dateOfBirth,"onUpdate:modelValue":m[2]||(m[2]=i=>t(r).dateOfBirth=i),label:o.$t("form.label.dateOfBirth")},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.disabled")),1),e(),a("div",U,[n(d,{language:"html-vue"},{default:l(()=>[e(`
          <Form>
            <DatePicker 
              v-model="appointDate"
              label="Appointment date"
              disabled
            />
          </Form>
  
          <script setup lang="ts">
          import { DatePicker } from "@dzangolab/vue3-form";
          import { ref } from vue;
  
          const appointmentDate = ref(new Date());
          <\/script>
        `)]),_:1}),e(),n(t(u),null,{default:l(()=>[n(t(p),{modelValue:t(r).appointmentDate,"onUpdate:modelValue":m[3]||(m[3]=i=>t(r).appointmentDate=i),label:o.$t("form.label.appointmentDate"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.disableWeekDays")),1),e(),a("div",M,[n(d,{language:"html-vue"},{default:l(()=>[e(`
          <Form>
            <DatePicker 
              v-model="presentationDate"
              :disabled-week-days="[6, 0]"
              label="Presentation date"
            />
          </Form>
  
          <script setup lang="ts">
          import { DatePicker } from "@dzangolab/vue3-form";
          import { ref } from vue;
  
          const presentationDate = ref(new Date());
          <\/script>
        `)]),_:1}),e(),n(t(u),null,{default:l(()=>[n(t(p),{modelValue:t(r).presentationDate,"onUpdate:modelValue":m[4]||(m[4]=i=>t(r).presentationDate=i),"disabled-week-days":[6,0],label:o.$t("form.label.presentationDate")},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.customFormat")),1),e(),a("div",O,[n(d,{language:"html-vue"},{default:l(()=>[e(`
          <Form>
            <DatePicker 
              v-model="dateOfBirth"
              format="yyyy/MM/dd"
              label="Date of birth"
            />
          </Form>
  
          <script setup lang="ts">
          import { DatePicker } from "@dzangolab/vue3-form";
          import { ref } from vue;
  
          const dateOfBirth = ref(new Date());
          <\/script>
        `)]),_:1}),e(),n(t(u),null,{default:l(()=>[n(t(p),{modelValue:t(r).dateOfBirth,"onUpdate:modelValue":m[5]||(m[5]=i=>t(r).dateOfBirth=i),format:"yyyy/MM/dd",label:o.$t("form.label.dateOfBirth")},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.dateRange")),1),e(),a("div",I,[n(d,{language:"html-vue"},{default:l(()=>[e(`
          <Form>
            <DatePicker 
              v-model="dateRange"
              label="Date range"
              range
            />
          </Form>
  
          <script setup lang="ts">
          import { DatePicker } from "@dzangolab/vue3-form";
  
          const startDate = new Date();
          const endDate = startDate;
  
          const dateRange = ref([
            startDate,
            new Date(endDate.setDate(endDate.getDate() + 7)),
          ]),
          <\/script>
        `)]),_:1}),e(),n(t(u),null,{default:l(()=>[n(t(p),{modelValue:t(r).dateRange,"onUpdate:modelValue":m[6]||(m[6]=i=>t(r).dateRange=i),label:o.$t("form.label.dateRange"),range:""},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.multiCalendars")),1),e(),a("div",A,[n(d,{language:"html-vue"},{default:l(()=>[e(`
          <Form>
            <DatePicker 
              v-model="reportDate"
              label="Report date"
              multi-calendars
              range
            />
          </Form>
  
          <script setup lang="ts">
          import { DatePicker } from "@dzangolab/vue3-form";
  
          const startDate = new Date();
          const endDate = startDate;
  
          const reportDate = ref([
            startDate,
            new Date(endDate.setDate(endDate.getDate() + 7)),
          ]),
          <\/script>
        `)]),_:1}),e(),n(t(u),null,{default:l(()=>[n(t(p),{modelValue:t(r).reportDate,"onUpdate:modelValue":m[7]||(m[7]=i=>t(r).reportDate=i),label:o.$t("form.label.reportDate"),"multi-calendars":"",range:""},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.dateTimePicker")),1),e(),a("div",R,[n(d,{language:"html-vue"},{default:l(()=>[e(`
          <Form>
            <DatePicker 
              v-model="availableDatetime"
              label="Available datetime"
              enable-time-picker
              multi-calendars
              range
            />
          </Form>
  
          <script setup lang="ts">
          import { DatePicker } from "@dzangolab/vue3-form";
  
          const startDate = new Date();
          const endDate = startDate;
  
          const availableDatetime = ref([
            startDate,
            new Date(endDate.setDate(endDate.getDate() + 7)),
          ]),
          <\/script>
        `)]),_:1}),e(),n(t(u),null,{default:l(()=>[n(t(p),{modelValue:t(r).availableDatetime,"onUpdate:modelValue":m[8]||(m[8]=i=>t(r).availableDatetime=i),label:o.$t("form.label.availableDatetime"),"enable-time-picker":"","multi-calendars":"",range:""},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.monthPicker")),1),e(),a("div",Y,[n(d,{language:"html-vue"},{default:l(()=>[e(`
          <Form>
            <DatePicker 
              v-model="month"
              format="MMM"
              label="Month"
              month-picker
            />
          </Form>
  
          <script setup lang="ts">
          import { DatePicker } from "@dzangolab/vue3-form";
          import { ref } from vue;
  
          const month = ref();
          <\/script>
        `)]),_:1}),e(),n(t(u),null,{default:l(()=>[n(t(p),{modelValue:t(r).month,"onUpdate:modelValue":m[9]||(m[9]=i=>t(r).month=i),format:"MMM",label:o.$t("form.label.month"),"month-picker":""},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.monthAndYearPicker")),1),e(),a("div",j,[n(d,{language:"html-vue"},{default:l(()=>[e(`
          <Form>
            <DatePicker 
              v-model="monthAndYear"
              label="Month and year"
              month-picker
            />
          </Form>
  
          <script setup lang="ts">
          import { DatePicker } from "@dzangolab/vue3-form";
          import { ref } from vue;
  
          const monthAndYear = ref();
          <\/script>
        `)]),_:1}),e(),n(t(u),null,{default:l(()=>[n(t(p),{modelValue:t(r).month,"onUpdate:modelValue":m[10]||(m[10]=i=>t(r).month=i),label:o.$t("form.label.monthAndYear"),"month-picker":""},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.yearPicker")),1),e(),a("div",S,[n(d,{language:"html-vue"},{default:l(()=>[e(`
          <Form>
            <DatePicker 
              v-model="year"
              label="Year"
              year-picker
            />
          </Form>
  
          <script setup lang="ts">
          import { DatePicker } from "@dzangolab/vue3-form";
          import { ref } from "vue";
  
          const year = ref(new Date().getFullYear()),
          <\/script>
        `)]),_:1}),e(),n(t(u),null,{default:l(()=>[n(t(p),{modelValue:t(r).year,"onUpdate:modelValue":m[11]||(m[11]=i=>t(r).year=i),label:o.$t("form.label.year"),"year-picker":""},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.timePicker")),1),e(),a("div",C,[n(d,{language:"html-vue"},{default:l(()=>[e(`
          <Form>
            <DatePicker 
              v-model="appointmentTime"
              label="Appointment time"
              time-picker
            />
          </Form>
  
          <script setup lang="ts">
          import { DatePicker } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),n(t(u),null,{default:l(()=>[n(t(p),{modelValue:t(r).time,"onUpdate:modelValue":m[12]||(m[12]=i=>t(r).time=i),label:o.$t("form.label.appointmentTime"),"time-picker":""},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.inputWithValidation")),1),e(),a("div",L,[n(d,{language:"html-vue"},{default:l(()=>[e(`
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
  
          const inputSchema = z.coerce
            .date()
            .max(new Date(), { message: "Please provide a present or past date" });
          <\/script>
        `)]),_:1}),e(),n(t(u),null,{default:l(()=>[n(t(p),{modelValue:t(r).joinedDate,"onUpdate:modelValue":m[13]||(m[13]=i=>t(r).joinedDate=i),label:o.$t("form.label.joinedDate"),schema:t(g)},null,8,["modelValue","label","schema"])]),_:1})])])]),_:1},8,["title"])}}});export{q as default};

import{v as d,b as g}from"./PrefabsTechVue3Form.es-CYU5iW1w.js";import{d as k,I as y,L as V,M as P,r as u,J as M,e as $,o as w,i,f as l,B as t,t as p,h as a,u as n}from"./index-oTn7Sb4k.js";import{_ as B}from"./FormPage.vue_vue_type_style_index_0_lang-DbEwy9d9.js";const U={class:"section-content"},O={class:"section-content"},I={class:"section-content"},A={class:"section-content"},R={class:"section-content"},Y={class:"section-content"},F={class:"section-content"},S={class:"section-content"},j={class:"section-content"},z={class:"section-content"},C={class:"section-content"},H={class:"section-content"},L={class:"section-content"},T={class:"section-content"},N={name:"DatePickerInput"},G=k({...N,setup(J){const{t:b}=y(),v=V.date({invalid_type_error:b("form.errors.datePicker.invalid")}).max(new Date,{message:b("form.errors.datePicker.invalid")}),f=new Date,D=f;let o=P({appointmentDate:u(f),arrivalDate:u(),availableDatetime:u([f,new Date(D.setDate(D.getDate()+7))]),dateOfBirth:u(f),dateRange:u([f,new Date(D.setDate(D.getDate()+7))]),joinedDate:u(),month:u(),monthAndYear:u(),noLabelInput:u(),presentationDate:u(f),reportDate:u([f,new Date(D.setDate(D.getDate()+7))]),time:u(),year:u(f.getFullYear())});return(r,e)=>{const s=M("SshPre");return w(),$(B,{title:r.$t("form.label.datePicker"),class:"demo"},{default:i(()=>[l("section",null,[l("h2",null,p(r.$t("form.label.basicInput")),1),e[16]||(e[16]=t()),l("div",U,[a(n(d),{modelValue:n(o).noLabelInput,"onUpdate:modelValue":e[0]||(e[0]=m=>n(o).noLabelInput=m),placeholder:"MM/dd/yyyy"},null,8,["modelValue"]),e[15]||(e[15]=t()),a(s,{language:"html-vue"},{default:i(()=>e[14]||(e[14]=[t(`
          <template>
            <DatePicker v-model="input" placeholder="MM/dd/yyyy" />
          </template>

          <script setup lang="ts">
          import { DatePicker } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[56]||(e[56]=t()),l("section",null,[l("h2",null,p(r.$t("form.label.labelInput")),1),e[19]||(e[19]=t()),l("div",O,[a(n(d),{modelValue:n(o).arrivalDate,"onUpdate:modelValue":e[1]||(e[1]=m=>n(o).arrivalDate=m),label:r.$t("form.label.arrivalDate"),placeholder:"MM/dd/yyyy"},null,8,["modelValue","label"]),e[18]||(e[18]=t()),a(s,{language:"html-vue"},{default:i(()=>e[17]||(e[17]=[t(`
          <template>
            <DatePicker 
              v-model="arrivalDate"
              label="Arrival date"
              placeholder="MM/dd/yyyy"
            />
          </template>
  
          <script setup lang="ts">
          import { DatePicker } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[57]||(e[57]=t()),l("section",null,[l("h2",null,p(r.$t("form.label.withI18n")),1),e[22]||(e[22]=t()),l("div",I,[a(n(d),{modelValue:n(o).dateOfBirth,"onUpdate:modelValue":e[2]||(e[2]=m=>n(o).dateOfBirth=m),label:r.$t("form.label.dateOfBirth")},null,8,["modelValue","label"]),e[21]||(e[21]=t()),a(s,{language:"html-vue"},{default:i(()=>e[20]||(e[20]=[t(`
          <template>
            <DatePicker 
              v-model="dateOfBirth"
              :label="t('form.label.dateOfBirth')"
            />
          </template>
  
          <script setup lang="ts">
          import { DatePicker } from "@prefabs.tech/vue3-form";
          import { ref } from vue;
          import { useI18n } from "@prefabs.tech/vue3-i18n";
  
          const dateOfBirth = ref(new Date());
          const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),e[58]||(e[58]=t()),l("section",null,[l("h2",null,p(r.$t("form.label.disabled")),1),e[25]||(e[25]=t()),l("div",A,[a(n(d),{modelValue:n(o).appointmentDate,"onUpdate:modelValue":e[3]||(e[3]=m=>n(o).appointmentDate=m),label:r.$t("form.label.appointmentDate"),disabled:""},null,8,["modelValue","label"]),e[24]||(e[24]=t()),a(s,{language:"html-vue"},{default:i(()=>e[23]||(e[23]=[t(`
          <template>
            <DatePicker 
              v-model="appointDate"
              label="Appointment date"
              disabled
            />
          </template>
  
          <script setup lang="ts">
          import { DatePicker } from "@prefabs.tech/vue3-form";
          import { ref } from vue;
  
          const appointmentDate = ref(new Date());
          <\/script>
        `)])),_:1})])]),e[59]||(e[59]=t()),l("section",null,[l("h2",null,p(r.$t("form.label.disableWeekDays")),1),e[28]||(e[28]=t()),l("div",R,[a(n(d),{modelValue:n(o).presentationDate,"onUpdate:modelValue":e[4]||(e[4]=m=>n(o).presentationDate=m),"disabled-week-days":[6,0],label:r.$t("form.label.presentationDate")},null,8,["modelValue","label"]),e[27]||(e[27]=t()),a(s,{language:"html-vue"},{default:i(()=>e[26]||(e[26]=[t(`
          <template>
            <DatePicker 
              v-model="presentationDate"
              :disabled-week-days="[6, 0]"
              label="Presentation date"
            />
          </template>
  
          <script setup lang="ts">
          import { DatePicker } from "@prefabs.tech/vue3-form";
          import { ref } from vue;
  
          const presentationDate = ref(new Date());
          <\/script>
        `)])),_:1})])]),e[60]||(e[60]=t()),l("section",null,[l("h2",null,p(r.$t("form.label.customFormat")),1),e[31]||(e[31]=t()),l("div",Y,[a(n(d),{modelValue:n(o).dateOfBirth,"onUpdate:modelValue":e[5]||(e[5]=m=>n(o).dateOfBirth=m),format:"yyyy/MM/dd",label:r.$t("form.label.dateOfBirth")},null,8,["modelValue","label"]),e[30]||(e[30]=t()),a(s,{language:"html-vue"},{default:i(()=>e[29]||(e[29]=[t(`
          <template>
            <DatePicker 
              v-model="dateOfBirth"
              format="yyyy/MM/dd"
              label="Date of birth"
            />
          </template>
  
          <script setup lang="ts">
          import { DatePicker } from "@prefabs.tech/vue3-form";
          import { ref } from vue;
  
          const dateOfBirth = ref(new Date());
          <\/script>
        `)])),_:1})])]),e[61]||(e[61]=t()),l("section",null,[l("h2",null,p(r.$t("form.label.dateRange")),1),e[34]||(e[34]=t()),l("div",F,[a(n(d),{modelValue:n(o).dateRange,"onUpdate:modelValue":e[6]||(e[6]=m=>n(o).dateRange=m),label:r.$t("form.label.dateRange"),range:""},null,8,["modelValue","label"]),e[33]||(e[33]=t()),a(s,{language:"html-vue"},{default:i(()=>e[32]||(e[32]=[t(`
          <template>
            <DatePicker 
              v-model="dateRange"
              label="Date range"
              range
            />
          </template>
  
          <script setup lang="ts">
          import { DatePicker } from "@prefabs.tech/vue3-form";
  
          const startDate = new Date();
          const endDate = startDate;
  
          const dateRange = ref([
            startDate,
            new Date(endDate.setDate(endDate.getDate() + 7)),
          ]),
          <\/script>
        `)])),_:1})])]),e[62]||(e[62]=t()),l("section",null,[l("h2",null,p(r.$t("form.label.multiCalendars")),1),e[37]||(e[37]=t()),l("div",S,[a(n(d),{modelValue:n(o).reportDate,"onUpdate:modelValue":e[7]||(e[7]=m=>n(o).reportDate=m),label:r.$t("form.label.reportDate"),"multi-calendars":"",range:""},null,8,["modelValue","label"]),e[36]||(e[36]=t()),a(s,{language:"html-vue"},{default:i(()=>e[35]||(e[35]=[t(`
          <template>
            <DatePicker 
              v-model="reportDate"
              label="Report date"
              multi-calendars
              range
            />
          </template>
  
          <script setup lang="ts">
          import { DatePicker } from "@prefabs.tech/vue3-form";
  
          const startDate = new Date();
          const endDate = startDate;
  
          const reportDate = ref([
            startDate,
            new Date(endDate.setDate(endDate.getDate() + 7)),
          ]),
          <\/script>
        `)])),_:1})])]),e[63]||(e[63]=t()),l("section",null,[l("h2",null,p(r.$t("form.label.dateTimePicker")),1),e[40]||(e[40]=t()),l("div",j,[a(n(d),{modelValue:n(o).availableDatetime,"onUpdate:modelValue":e[8]||(e[8]=m=>n(o).availableDatetime=m),label:r.$t("form.label.availableDatetime"),"enable-time-picker":"","multi-calendars":"",range:""},null,8,["modelValue","label"]),e[39]||(e[39]=t()),a(s,{language:"html-vue"},{default:i(()=>e[38]||(e[38]=[t(`
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
          import { DatePicker } from "@prefabs.tech/vue3-form";
  
          const startDate = new Date();
          const endDate = startDate;
  
          const availableDatetime = ref([
            startDate,
            new Date(endDate.setDate(endDate.getDate() + 7)),
          ]),
          <\/script>
        `)])),_:1})])]),e[64]||(e[64]=t()),l("section",null,[l("h2",null,p(r.$t("form.label.monthPicker")),1),e[43]||(e[43]=t()),l("div",z,[a(n(d),{modelValue:n(o).month,"onUpdate:modelValue":e[9]||(e[9]=m=>n(o).month=m),label:r.$t("form.label.month"),format:"MMM","month-picker":"",placeholder:"MMM"},null,8,["modelValue","label"]),e[42]||(e[42]=t()),a(s,{language:"html-vue"},{default:i(()=>e[41]||(e[41]=[t(`
          <template>
            <DatePicker 
              v-model="month"
              format="MMM"
              label="Month"
              month-picker
              placeholder="MMM"
            />
          </template>
  
          <script setup lang="ts">
          import { DatePicker } from "@prefabs.tech/vue3-form";
          import { ref } from vue;
  
          const month = ref();
          <\/script>
        `)])),_:1})])]),e[65]||(e[65]=t()),l("section",null,[l("h2",null,p(r.$t("form.label.monthAndYearPicker")),1),e[46]||(e[46]=t()),l("div",C,[a(n(d),{modelValue:n(o).month,"onUpdate:modelValue":e[10]||(e[10]=m=>n(o).month=m),label:r.$t("form.label.monthAndYear"),"month-picker":""},null,8,["modelValue","label"]),e[45]||(e[45]=t()),a(s,{language:"html-vue"},{default:i(()=>e[44]||(e[44]=[t(`
          <template>
            <DatePicker 
              v-model="monthAndYear"
              label="Month and year"
              month-picker
            />
          </template>
  
          <script setup lang="ts">
          import { DatePicker } from "@prefabs.tech/vue3-form";
          import { ref } from vue;
  
          const monthAndYear = ref();
          <\/script>
        `)])),_:1})])]),e[66]||(e[66]=t()),l("section",null,[l("h2",null,p(r.$t("form.label.yearPicker")),1),e[49]||(e[49]=t()),l("div",H,[a(n(d),{modelValue:n(o).year,"onUpdate:modelValue":e[11]||(e[11]=m=>n(o).year=m),label:r.$t("form.label.year"),"year-picker":""},null,8,["modelValue","label"]),e[48]||(e[48]=t()),a(s,{language:"html-vue"},{default:i(()=>e[47]||(e[47]=[t(`
          <template>
            <DatePicker 
              v-model="year"
              label="Year"
              year-picker
            />
          </template>
  
          <script setup lang="ts">
          import { DatePicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
  
          const year = ref(new Date().getFullYear()),
          <\/script>
        `)])),_:1})])]),e[67]||(e[67]=t()),l("section",null,[l("h2",null,p(r.$t("form.label.timePicker")),1),e[52]||(e[52]=t()),l("div",L,[a(n(d),{modelValue:n(o).time,"onUpdate:modelValue":e[12]||(e[12]=m=>n(o).time=m),label:r.$t("form.label.appointmentTime"),placeholder:"HH:mm","time-picker":""},null,8,["modelValue","label"]),e[51]||(e[51]=t()),a(s,{language:"html-vue"},{default:i(()=>e[50]||(e[50]=[t(`
          <template>
            <DatePicker 
              v-model="appointmentTime"
              label="Appointment time"
              placeholder="HH:mm"
              time-picker
            />
          </template>
  
          <script setup lang="ts">
          import { DatePicker } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[68]||(e[68]=t()),l("section",null,[l("h2",null,p(r.$t("form.label.inputWithValidation")),1),e[55]||(e[55]=t()),l("div",T,[a(n(g),null,{default:i(()=>[a(n(d),{modelValue:n(o).joinedDate,"onUpdate:modelValue":e[13]||(e[13]=m=>n(o).joinedDate=m),label:r.$t("form.label.joinedDate"),schema:n(v),placeholder:"MM/dd/yyyy"},null,8,["modelValue","label","schema"])]),_:1}),e[54]||(e[54]=t()),a(s,{language:"html-vue"},{default:i(()=>e[53]||(e[53]=[t(`
          <Form>
            <DatePicker 
              v-model="joinedDate"
              :schema="inputSchema"
              label="Joined date"
              placeholder="MM/dd/yyyy"
            />
          </Form>
  
          <script setup lang="ts">
          import { DatePicker, Form } from "@prefabs.tech/vue3-form";
          import { z } from "zod";
  
          const inputSchema = z
            .date({ invalid_type_error: "Please provide a present or past date" })
            .max(new Date(), { message: "Please provide a present or past date" });
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{G as default};

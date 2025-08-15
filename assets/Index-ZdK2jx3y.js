import{_ as d,$ as g}from"./PrefabsTechVue3Form.es-CKSS41mn.js";import{d as k,G as y,I as V,L as P,r as u,H as $,e as M,o as w,j as i,B as t,f as l,t as p,h as o,u as n,v as B}from"./index-bCT4rut6.js";import{_ as U}from"./FormPage.vue_vue_type_style_index_0_lang-Dw-u2W8p.js";const O={class:"section-content"},I={class:"section-content"},A={class:"section-content"},R={class:"section-content"},Y={class:"section-content"},j={class:"section-content"},F={class:"section-content"},S={class:"section-content"},z={class:"section-content"},C={class:"section-content"},H={class:"section-content"},L={class:"section-content"},T={class:"section-content"},N={class:"section-content"},W={name:"DatePickerInput"},K=k({...W,setup(G){const{t:b}=y(),v=V.date({invalid_type_error:b("form.errors.datePicker.invalid")}).max(new Date,{message:b("form.errors.datePicker.invalid")}),f=new Date,D=f;let r=P({appointmentDate:u(f),arrivalDate:u(),availableDatetime:u([f,new Date(D.setDate(D.getDate()+7))]),dateOfBirth:u(f),dateRange:u([f,new Date(D.setDate(D.getDate()+7))]),joinedDate:u(),month:u(),monthAndYear:u(),noLabelInput:u(),presentationDate:u(f),reportDate:u([f,new Date(D.setDate(D.getDate()+7))]),time:u(),year:u(f.getFullYear())});return(a,e)=>{const s=$("SshPre");return w(),M(U,{title:a.$t("form.label.datePicker"),class:"demo"},{toolbar:i(()=>[o(n(B),{label:a.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=m=>a.$router.push("/form"))},null,8,["label"])]),default:i(()=>[e[57]||(e[57]=t()),l("section",null,[l("h2",null,p(a.$t("form.label.basicInput")),1),e[17]||(e[17]=t()),l("div",O,[o(n(d),{modelValue:n(r).noLabelInput,"onUpdate:modelValue":e[1]||(e[1]=m=>n(r).noLabelInput=m),placeholder:"MM/dd/yyyy"},null,8,["modelValue"]),e[16]||(e[16]=t()),o(s,{language:"html-vue"},{default:i(()=>e[15]||(e[15]=[t(`
          <template>
            <DatePicker v-model="input" placeholder="MM/dd/yyyy" />
          </template>

          <script setup lang="ts">
          import { DatePicker } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[58]||(e[58]=t()),l("section",null,[l("h2",null,p(a.$t("form.label.labelInput")),1),e[20]||(e[20]=t()),l("div",I,[o(n(d),{modelValue:n(r).arrivalDate,"onUpdate:modelValue":e[2]||(e[2]=m=>n(r).arrivalDate=m),label:a.$t("form.label.arrivalDate"),placeholder:"MM/dd/yyyy"},null,8,["modelValue","label"]),e[19]||(e[19]=t()),o(s,{language:"html-vue"},{default:i(()=>e[18]||(e[18]=[t(`
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
        `)])),_:1})])]),e[59]||(e[59]=t()),l("section",null,[l("h2",null,p(a.$t("form.label.withI18n")),1),e[23]||(e[23]=t()),l("div",A,[o(n(d),{modelValue:n(r).dateOfBirth,"onUpdate:modelValue":e[3]||(e[3]=m=>n(r).dateOfBirth=m),label:a.$t("form.label.dateOfBirth")},null,8,["modelValue","label"]),e[22]||(e[22]=t()),o(s,{language:"html-vue"},{default:i(()=>e[21]||(e[21]=[t(`
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
        `)])),_:1})])]),e[60]||(e[60]=t()),l("section",null,[l("h2",null,p(a.$t("form.label.disabled")),1),e[26]||(e[26]=t()),l("div",R,[o(n(d),{modelValue:n(r).appointmentDate,"onUpdate:modelValue":e[4]||(e[4]=m=>n(r).appointmentDate=m),label:a.$t("form.label.appointmentDate"),disabled:""},null,8,["modelValue","label"]),e[25]||(e[25]=t()),o(s,{language:"html-vue"},{default:i(()=>e[24]||(e[24]=[t(`
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
        `)])),_:1})])]),e[61]||(e[61]=t()),l("section",null,[l("h2",null,p(a.$t("form.label.disableWeekDays")),1),e[29]||(e[29]=t()),l("div",Y,[o(n(d),{modelValue:n(r).presentationDate,"onUpdate:modelValue":e[5]||(e[5]=m=>n(r).presentationDate=m),"disabled-week-days":[6,0],label:a.$t("form.label.presentationDate")},null,8,["modelValue","label"]),e[28]||(e[28]=t()),o(s,{language:"html-vue"},{default:i(()=>e[27]||(e[27]=[t(`
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
        `)])),_:1})])]),e[62]||(e[62]=t()),l("section",null,[l("h2",null,p(a.$t("form.label.customFormat")),1),e[32]||(e[32]=t()),l("div",j,[o(n(d),{modelValue:n(r).dateOfBirth,"onUpdate:modelValue":e[6]||(e[6]=m=>n(r).dateOfBirth=m),format:"yyyy/MM/dd",label:a.$t("form.label.dateOfBirth")},null,8,["modelValue","label"]),e[31]||(e[31]=t()),o(s,{language:"html-vue"},{default:i(()=>e[30]||(e[30]=[t(`
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
        `)])),_:1})])]),e[63]||(e[63]=t()),l("section",null,[l("h2",null,p(a.$t("form.label.dateRange")),1),e[35]||(e[35]=t()),l("div",F,[o(n(d),{modelValue:n(r).dateRange,"onUpdate:modelValue":e[7]||(e[7]=m=>n(r).dateRange=m),label:a.$t("form.label.dateRange"),range:""},null,8,["modelValue","label"]),e[34]||(e[34]=t()),o(s,{language:"html-vue"},{default:i(()=>e[33]||(e[33]=[t(`
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
        `)])),_:1})])]),e[64]||(e[64]=t()),l("section",null,[l("h2",null,p(a.$t("form.label.multiCalendars")),1),e[38]||(e[38]=t()),l("div",S,[o(n(d),{modelValue:n(r).reportDate,"onUpdate:modelValue":e[8]||(e[8]=m=>n(r).reportDate=m),label:a.$t("form.label.reportDate"),"multi-calendars":"",range:""},null,8,["modelValue","label"]),e[37]||(e[37]=t()),o(s,{language:"html-vue"},{default:i(()=>e[36]||(e[36]=[t(`
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
        `)])),_:1})])]),e[65]||(e[65]=t()),l("section",null,[l("h2",null,p(a.$t("form.label.dateTimePicker")),1),e[41]||(e[41]=t()),l("div",z,[o(n(d),{modelValue:n(r).availableDatetime,"onUpdate:modelValue":e[9]||(e[9]=m=>n(r).availableDatetime=m),label:a.$t("form.label.availableDatetime"),"enable-time-picker":"","multi-calendars":"",range:""},null,8,["modelValue","label"]),e[40]||(e[40]=t()),o(s,{language:"html-vue"},{default:i(()=>e[39]||(e[39]=[t(`
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
        `)])),_:1})])]),e[66]||(e[66]=t()),l("section",null,[l("h2",null,p(a.$t("form.label.monthPicker")),1),e[44]||(e[44]=t()),l("div",C,[o(n(d),{modelValue:n(r).month,"onUpdate:modelValue":e[10]||(e[10]=m=>n(r).month=m),label:a.$t("form.label.month"),format:"MMM","month-picker":"",placeholder:"MMM"},null,8,["modelValue","label"]),e[43]||(e[43]=t()),o(s,{language:"html-vue"},{default:i(()=>e[42]||(e[42]=[t(`
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
        `)])),_:1})])]),e[67]||(e[67]=t()),l("section",null,[l("h2",null,p(a.$t("form.label.monthAndYearPicker")),1),e[47]||(e[47]=t()),l("div",H,[o(n(d),{modelValue:n(r).month,"onUpdate:modelValue":e[11]||(e[11]=m=>n(r).month=m),label:a.$t("form.label.monthAndYear"),"month-picker":""},null,8,["modelValue","label"]),e[46]||(e[46]=t()),o(s,{language:"html-vue"},{default:i(()=>e[45]||(e[45]=[t(`
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
        `)])),_:1})])]),e[68]||(e[68]=t()),l("section",null,[l("h2",null,p(a.$t("form.label.yearPicker")),1),e[50]||(e[50]=t()),l("div",L,[o(n(d),{modelValue:n(r).year,"onUpdate:modelValue":e[12]||(e[12]=m=>n(r).year=m),label:a.$t("form.label.year"),"year-picker":""},null,8,["modelValue","label"]),e[49]||(e[49]=t()),o(s,{language:"html-vue"},{default:i(()=>e[48]||(e[48]=[t(`
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
        `)])),_:1})])]),e[69]||(e[69]=t()),l("section",null,[l("h2",null,p(a.$t("form.label.timePicker")),1),e[53]||(e[53]=t()),l("div",T,[o(n(d),{modelValue:n(r).time,"onUpdate:modelValue":e[13]||(e[13]=m=>n(r).time=m),label:a.$t("form.label.appointmentTime"),placeholder:"HH:mm","time-picker":""},null,8,["modelValue","label"]),e[52]||(e[52]=t()),o(s,{language:"html-vue"},{default:i(()=>e[51]||(e[51]=[t(`
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
        `)])),_:1})])]),e[70]||(e[70]=t()),l("section",null,[l("h2",null,p(a.$t("form.label.inputWithValidation")),1),e[56]||(e[56]=t()),l("div",N,[o(n(g),null,{default:i(()=>[o(n(d),{modelValue:n(r).joinedDate,"onUpdate:modelValue":e[14]||(e[14]=m=>n(r).joinedDate=m),label:a.$t("form.label.joinedDate"),schema:n(v),placeholder:"MM/dd/yyyy"},null,8,["modelValue","label","schema"])]),_:1}),e[55]||(e[55]=t()),o(s,{language:"html-vue"},{default:i(()=>e[54]||(e[54]=[t(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{K as default};

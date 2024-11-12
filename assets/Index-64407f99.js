import{m as V,X as u,Z as p}from"./DzangolabVue3Form.es-8d7c7642.js";import{d as P,u as y,b as F,e as c,r as b,o as $,c as _,w as l,f as t,g as e,t as s,a,h as n}from"./index-17339f3a.js";const z={class:"section-content"},w={class:"section-content"},B={class:"section-content"},U={class:"section-content"},I={class:"section-content"},M={class:"section-content"},O={class:"section-content"},A={class:"section-content"},R={class:"section-content"},Y={class:"section-content"},S={class:"section-content"},j={class:"section-content"},C={class:"section-content"},T={class:"section-content"},L={class:"section-content"},N={name:"DatePickerInput"},J=P({...N,setup(W){const{t:g}=y(),v=V.coerce.date().max(new Date,{message:g("form.errors.datePicker.invalid")}),f=new Date,D=f;let r=F({appointmentDate:c(f),arrivalDate:c(),availableDatetime:c([f,new Date(D.setDate(D.getDate()+7))]),dateOfBirth:c(f),dateRange:c([f,new Date(D.setDate(D.getDate()+7))]),joinedDate:c(),month:c(),monthAndYear:c(),noLabelInput:c(),pickupDate:c(),presentationDate:c(f),reportDate:c([f,new Date(D.setDate(D.getDate()+7))]),time:c(),year:c(f.getFullYear())});return(o,m)=>{const k=b("router-link"),d=b("SshPre"),h=b("Page");return $(),_(h,{title:o.$t("form.label.datePicker"),class:"demo"},{toolbar:l(()=>[t(k,{to:{name:"form"},class:"back"},{default:l(()=>[e(s(o.$t("common.back")),1)]),_:1})]),default:l(()=>[e(),a("section",null,[a("h2",null,s(o.$t("form.label.basicInput")),1),e(),a("div",z,[t(d,{language:"html-vue"},{default:l(()=>[e(`
          <Form>
            <DatePicker 
              v-model="input"
            />
          </Form>

          <script setup lang="ts">
          import { DatePicker } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),t(n(p),null,{default:l(()=>[t(n(u),{modelValue:n(r).noLabelInput,"onUpdate:modelValue":m[0]||(m[0]=i=>n(r).noLabelInput=i)},null,8,["modelValue"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.labelInput")),1),e(),a("div",w,[t(d,{language:"html-vue"},{default:l(()=>[e(`
          <Form>
            <DatePicker 
              v-model="arrivalDate"
              label="Arrival date"
            />
          </Form>
  
          <script setup lang="ts">
          import { DatePicker } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),t(n(p),null,{default:l(()=>[t(n(u),{modelValue:n(r).arrivalDate,"onUpdate:modelValue":m[1]||(m[1]=i=>n(r).arrivalDate=i),label:o.$t("form.label.arrivalDate")},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.withI18n")),1),e(),a("div",B,[t(d,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e(),t(n(p),null,{default:l(()=>[t(n(u),{modelValue:n(r).dateOfBirth,"onUpdate:modelValue":m[2]||(m[2]=i=>n(r).dateOfBirth=i),label:o.$t("form.label.dateOfBirth")},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.disabled")),1),e(),a("div",U,[t(d,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e(),t(n(p),null,{default:l(()=>[t(n(u),{modelValue:n(r).appointmentDate,"onUpdate:modelValue":m[3]||(m[3]=i=>n(r).appointmentDate=i),label:o.$t("form.label.appointmentDate"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.disableWeekDays")),1),e(),a("div",I,[t(d,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e(),t(n(p),null,{default:l(()=>[t(n(u),{modelValue:n(r).presentationDate,"onUpdate:modelValue":m[4]||(m[4]=i=>n(r).presentationDate=i),"disabled-week-days":[6,0],label:o.$t("form.label.presentationDate")},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.customFormat")),1),e(),a("div",M,[t(d,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e(),t(n(p),null,{default:l(()=>[t(n(u),{modelValue:n(r).dateOfBirth,"onUpdate:modelValue":m[5]||(m[5]=i=>n(r).dateOfBirth=i),format:"yyyy/MM/dd",label:o.$t("form.label.dateOfBirth")},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.dateRange")),1),e(),a("div",O,[t(d,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e(),t(n(p),null,{default:l(()=>[t(n(u),{modelValue:n(r).dateRange,"onUpdate:modelValue":m[6]||(m[6]=i=>n(r).dateRange=i),label:o.$t("form.label.dateRange"),range:""},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.multiCalendars")),1),e(),a("div",A,[t(d,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e(),t(n(p),null,{default:l(()=>[t(n(u),{modelValue:n(r).reportDate,"onUpdate:modelValue":m[7]||(m[7]=i=>n(r).reportDate=i),label:o.$t("form.label.reportDate"),"multi-calendars":"",range:""},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.dateTimePicker")),1),e(),a("div",R,[t(d,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e(),t(n(p),null,{default:l(()=>[t(n(u),{modelValue:n(r).availableDatetime,"onUpdate:modelValue":m[8]||(m[8]=i=>n(r).availableDatetime=i),label:o.$t("form.label.availableDatetime"),"enable-time-picker":"","multi-calendars":"",range:""},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.monthPicker")),1),e(),a("div",Y,[t(d,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e(),t(n(p),null,{default:l(()=>[t(n(u),{modelValue:n(r).month,"onUpdate:modelValue":m[9]||(m[9]=i=>n(r).month=i),format:"MMM",label:o.$t("form.label.month"),"month-picker":""},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.monthAndYearPicker")),1),e(),a("div",S,[t(d,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e(),t(n(p),null,{default:l(()=>[t(n(u),{modelValue:n(r).month,"onUpdate:modelValue":m[10]||(m[10]=i=>n(r).month=i),label:o.$t("form.label.monthAndYear"),"month-picker":""},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.yearPicker")),1),e(),a("div",j,[t(d,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e(),t(n(p),null,{default:l(()=>[t(n(u),{modelValue:n(r).year,"onUpdate:modelValue":m[11]||(m[11]=i=>n(r).year=i),label:o.$t("form.label.year"),"year-picker":""},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.timePicker")),1),e(),a("div",C,[t(d,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e(),t(n(p),null,{default:l(()=>[t(n(u),{modelValue:n(r).time,"onUpdate:modelValue":m[12]||(m[12]=i=>n(r).time=i),label:o.$t("form.label.appointmentTime"),"time-picker":""},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.inputWithValidation")),1),e(),a("div",T,[t(d,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e(),t(n(p),null,{default:l(()=>[t(n(u),{modelValue:n(r).joinedDate,"onUpdate:modelValue":m[13]||(m[13]=i=>n(r).joinedDate=i),label:o.$t("form.label.joinedDate"),schema:n(v)},null,8,["modelValue","label","schema"])]),_:1})])]),e(),a("section",null,[a("h2",null,s(o.$t("form.label.customStyleInput")),1),e(),a("div",L,[t(d,{language:"html-vue"},{default:l(()=>[e(`
          <Form>
            <DatePicker 
              v-model="pickupDate"
              class="custom-style-input"
              label="Pickup date"
            />
          </Form>
  
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
        `)]),_:1}),e(),t(n(p),null,{default:l(()=>[t(n(u),{modelValue:n(r).pickupDate,"onUpdate:modelValue":m[14]||(m[14]=i=>n(r).pickupDate=i),label:o.$t("form.label.pickupDate"),class:"custom-style-input"},null,8,["modelValue","label"])]),_:1})])])]),_:1},8,["title"])}}});export{J as default};

import{m as k,W as d,Q as u}from"./DzangolabVue3Form.es-96bbbada.js";import{d as V,u as P,b as y,e as c,r as b,o as F,c as $,w as l,a as t,t as p,f as n,g as a,h as e}from"./index-66a9a14b.js";const _={class:"section-content"},z={class:"section-content"},w={class:"section-content"},B={class:"section-content"},U={class:"section-content"},I={class:"section-content"},M={class:"section-content"},O={class:"section-content"},A={class:"section-content"},R={class:"section-content"},Y={class:"section-content"},S={class:"section-content"},j={class:"section-content"},C={class:"section-content"},T={class:"section-content"},W={name:"DatePickerInput"},J=V({...W,setup(L){const{t:g}=P(),v=k.coerce.date().max(new Date,{message:g("form.errors.datePicker.invalid")}),f=new Date,D=f;let o=y({appointmentDate:c(f),arrivalDate:c(),availableDatetime:c([f,new Date(D.setDate(D.getDate()+7))]),dateOfBirth:c(f),dateRange:c([f,new Date(D.setDate(D.getDate()+7))]),joinedDate:c(),month:c(),monthAndYear:c(),noLabelInput:c(),pickupDate:c(),presentationDate:c(f),reportDate:c([f,new Date(D.setDate(D.getDate()+7))]),time:c(),year:c(f.getFullYear())});return(r,m)=>{const s=b("SshPre"),h=b("Page");return F(),$(h,{title:r.$t("form.label.datePicker"),class:"demo"},{default:l(()=>[t("section",null,[t("h2",null,p(r.$t("form.label.basicInput")),1),n(),t("div",_,[a(s,{language:"html-vue"},{default:l(()=>[n(`
          <Form>
            <DatePicker 
              v-model="input"
            />
          </Form>

          <script setup lang="ts">
          import { DatePicker } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),n(),a(e(u),null,{default:l(()=>[a(e(d),{modelValue:e(o).noLabelInput,"onUpdate:modelValue":m[0]||(m[0]=i=>e(o).noLabelInput=i)},null,8,["modelValue"])]),_:1})])]),n(),t("section",null,[t("h2",null,p(r.$t("form.label.labelInput")),1),n(),t("div",z,[a(s,{language:"html-vue"},{default:l(()=>[n(`
          <Form>
            <DatePicker 
              v-model="arrivalDate"
              label="Arrival date"
            />
          </Form>
  
          <script setup lang="ts">
          import { DatePicker } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),n(),a(e(u),null,{default:l(()=>[a(e(d),{modelValue:e(o).arrivalDate,"onUpdate:modelValue":m[1]||(m[1]=i=>e(o).arrivalDate=i),label:r.$t("form.label.arrivalDate")},null,8,["modelValue","label"])]),_:1})])]),n(),t("section",null,[t("h2",null,p(r.$t("form.label.withI18n")),1),n(),t("div",w,[a(s,{language:"html-vue"},{default:l(()=>[n(`
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
        `)]),_:1}),n(),a(e(u),null,{default:l(()=>[a(e(d),{modelValue:e(o).dateOfBirth,"onUpdate:modelValue":m[2]||(m[2]=i=>e(o).dateOfBirth=i),label:r.$t("form.label.dateOfBirth")},null,8,["modelValue","label"])]),_:1})])]),n(),t("section",null,[t("h2",null,p(r.$t("form.label.disabled")),1),n(),t("div",B,[a(s,{language:"html-vue"},{default:l(()=>[n(`
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
        `)]),_:1}),n(),a(e(u),null,{default:l(()=>[a(e(d),{modelValue:e(o).appointmentDate,"onUpdate:modelValue":m[3]||(m[3]=i=>e(o).appointmentDate=i),label:r.$t("form.label.appointmentDate"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),n(),t("section",null,[t("h2",null,p(r.$t("form.label.disableWeekDays")),1),n(),t("div",U,[a(s,{language:"html-vue"},{default:l(()=>[n(`
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
        `)]),_:1}),n(),a(e(u),null,{default:l(()=>[a(e(d),{modelValue:e(o).presentationDate,"onUpdate:modelValue":m[4]||(m[4]=i=>e(o).presentationDate=i),"disabled-week-days":[6,0],label:r.$t("form.label.presentationDate")},null,8,["modelValue","label"])]),_:1})])]),n(),t("section",null,[t("h2",null,p(r.$t("form.label.customFormat")),1),n(),t("div",I,[a(s,{language:"html-vue"},{default:l(()=>[n(`
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
        `)]),_:1}),n(),a(e(u),null,{default:l(()=>[a(e(d),{modelValue:e(o).dateOfBirth,"onUpdate:modelValue":m[5]||(m[5]=i=>e(o).dateOfBirth=i),format:"yyyy/MM/dd",label:r.$t("form.label.dateOfBirth")},null,8,["modelValue","label"])]),_:1})])]),n(),t("section",null,[t("h2",null,p(r.$t("form.label.dateRange")),1),n(),t("div",M,[a(s,{language:"html-vue"},{default:l(()=>[n(`
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
        `)]),_:1}),n(),a(e(u),null,{default:l(()=>[a(e(d),{modelValue:e(o).dateRange,"onUpdate:modelValue":m[6]||(m[6]=i=>e(o).dateRange=i),label:r.$t("form.label.dateRange"),range:""},null,8,["modelValue","label"])]),_:1})])]),n(),t("section",null,[t("h2",null,p(r.$t("form.label.multiCalendars")),1),n(),t("div",O,[a(s,{language:"html-vue"},{default:l(()=>[n(`
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
        `)]),_:1}),n(),a(e(u),null,{default:l(()=>[a(e(d),{modelValue:e(o).reportDate,"onUpdate:modelValue":m[7]||(m[7]=i=>e(o).reportDate=i),label:r.$t("form.label.reportDate"),"multi-calendars":"",range:""},null,8,["modelValue","label"])]),_:1})])]),n(),t("section",null,[t("h2",null,p(r.$t("form.label.dateTimePicker")),1),n(),t("div",A,[a(s,{language:"html-vue"},{default:l(()=>[n(`
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
        `)]),_:1}),n(),a(e(u),null,{default:l(()=>[a(e(d),{modelValue:e(o).availableDatetime,"onUpdate:modelValue":m[8]||(m[8]=i=>e(o).availableDatetime=i),label:r.$t("form.label.availableDatetime"),"enable-time-picker":"","multi-calendars":"",range:""},null,8,["modelValue","label"])]),_:1})])]),n(),t("section",null,[t("h2",null,p(r.$t("form.label.monthPicker")),1),n(),t("div",R,[a(s,{language:"html-vue"},{default:l(()=>[n(`
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
        `)]),_:1}),n(),a(e(u),null,{default:l(()=>[a(e(d),{modelValue:e(o).month,"onUpdate:modelValue":m[9]||(m[9]=i=>e(o).month=i),format:"MMM",label:r.$t("form.label.month"),"month-picker":""},null,8,["modelValue","label"])]),_:1})])]),n(),t("section",null,[t("h2",null,p(r.$t("form.label.monthAndYearPicker")),1),n(),t("div",Y,[a(s,{language:"html-vue"},{default:l(()=>[n(`
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
        `)]),_:1}),n(),a(e(u),null,{default:l(()=>[a(e(d),{modelValue:e(o).month,"onUpdate:modelValue":m[10]||(m[10]=i=>e(o).month=i),label:r.$t("form.label.monthAndYear"),"month-picker":""},null,8,["modelValue","label"])]),_:1})])]),n(),t("section",null,[t("h2",null,p(r.$t("form.label.yearPicker")),1),n(),t("div",S,[a(s,{language:"html-vue"},{default:l(()=>[n(`
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
        `)]),_:1}),n(),a(e(u),null,{default:l(()=>[a(e(d),{modelValue:e(o).year,"onUpdate:modelValue":m[11]||(m[11]=i=>e(o).year=i),label:r.$t("form.label.year"),"year-picker":""},null,8,["modelValue","label"])]),_:1})])]),n(),t("section",null,[t("h2",null,p(r.$t("form.label.timePicker")),1),n(),t("div",j,[a(s,{language:"html-vue"},{default:l(()=>[n(`
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
        `)]),_:1}),n(),a(e(u),null,{default:l(()=>[a(e(d),{modelValue:e(o).time,"onUpdate:modelValue":m[12]||(m[12]=i=>e(o).time=i),label:r.$t("form.label.appointmentTime"),"time-picker":""},null,8,["modelValue","label"])]),_:1})])]),n(),t("section",null,[t("h2",null,p(r.$t("form.label.inputWithValidation")),1),n(),t("div",C,[a(s,{language:"html-vue"},{default:l(()=>[n(`
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
        `)]),_:1}),n(),a(e(u),null,{default:l(()=>[a(e(d),{modelValue:e(o).joinedDate,"onUpdate:modelValue":m[13]||(m[13]=i=>e(o).joinedDate=i),label:r.$t("form.label.joinedDate"),schema:e(v)},null,8,["modelValue","label","schema"])]),_:1})])]),n(),t("section",null,[t("h2",null,p(r.$t("form.label.customStyleInput")),1),n(),t("div",T,[a(s,{language:"html-vue"},{default:l(()=>[n(`
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
        `)]),_:1}),n(),a(e(u),null,{default:l(()=>[a(e(d),{modelValue:e(o).pickupDate,"onUpdate:modelValue":m[14]||(m[14]=i=>e(o).pickupDate=i),label:r.$t("form.label.pickupDate"),class:"custom-style-input"},null,8,["modelValue","label"])]),_:1})])])]),_:1},8,["title"])}}});export{J as default};

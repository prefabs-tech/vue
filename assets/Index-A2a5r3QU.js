import{D as e,E as t,On as n,St as r,_ as i,gn as a,k as o,mt as s,qt as c,tr as l,v as u,vn as d}from"./runtime-core.esm-bundler-BKdLzFmX.js";import{d as f}from"./vee-validate-Dcr5wvVn.js";import{T as p}from"./PrefabsTechVue3Layout.es-DjWCbXPc.js";import{t as m}from"./FormPage-Ca1LZeR4.js";import{c as h,f as g}from"./PrefabsTechVue3TanstackTable.es-Dqv6JrPc.js";import{t as _}from"./ComponentDocumentation-CFBF3GmY.js";var v={class:`section-content`},y={class:`section-content`},b={class:`section-content`},x={class:`section-content`},S={class:`section-content`},C={class:`section-content`},w={class:`section-content`},T={class:`section-content`},E={class:`section-content`},D={class:`section-content`},O={class:`section-content`},k={class:`section-content`},A={class:`section-content`},j={class:`section-content`},M=o({name:`DatePickerDemo`,setup(o){let{t:M}=p(),N=f({invalid_type_error:M(`form.errors.datePicker.invalid`)}).max(new Date,{message:M(`form.errors.datePicker.invalid`)}),P=new Date,F=P,I=[{description:M(`form.documentation.eventDescription.input.modelValue`),name:`update:modelValue`,payload:`date: string | string[] | number | number[] | Date | Date[] | MonthPickerValue`}],L=[{default:`true`,description:M(`form.documentation.propsDescription.datePicker.autoApply`),prop:`autoApply`,type:`Boolean`},{default:`false`,description:M(`form.documentation.propsDescription.input.disabled`),prop:`disabled`,type:`Boolean`},{default:`-`,description:M(`form.documentation.propsDescription.datePicker.disabledWeekDays`),prop:`disabledWeekDays`,type:`Array<number>`},{default:`false`,description:M(`form.documentation.propsDescription.datePicker.enableTimePicker`),prop:`enableTimePicker`,type:`Boolean`},{default:`-`,description:M(`form.documentation.propsDescription.datePicker.format`),prop:`format`,type:`String`},{default:`-`,description:M(`form.documentation.propsDescription.input.label`),prop:`label`,type:`String`},{default:`-`,description:M(`form.documentation.propsDescription.input.modelValue`),prop:`modelValue`,type:`Date | Date[] | MonthPickerValue | number | number[] | string | string[] | null`},{default:`"date"`,description:M(`form.documentation.propsDescription.input.name`),prop:`name`,type:`String`},{default:`-`,description:M(`form.documentation.propsDescription.input.placeholder`),prop:`placeholder`,type:`String`},{default:`-`,description:M(`form.documentation.propsDescription.input.schema`),prop:`schema`,type:`Object (z.ZodType)`},{default:`-`,description:M(`form.documentation.propsDescription.datePicker.teleport`),prop:`teleport`,type:`Boolean | String`}],R=a({appointmentDate:d(P),arrivalDate:d(),availableDatetime:d([P,new Date(F.setDate(F.getDate()+7))]),dateOfBirth:d(P),dateRange:d([P,new Date(F.setDate(F.getDate()+7))]),joinedDate:d(),month:d(),monthAndYear:d(),noLabelInput:d(),presentationDate:d(P),reportDate:d([P,new Date(F.setDate(F.getDate()+7))]),time:d(),year:d(P.getFullYear())});return(a,o)=>{let d=r(`SshPre`);return s(),u(m,{subtitle:a.$t(`form.subtitle.datePicker`),title:a.$t(`form.label.datePicker`),class:`demo`},{default:c(()=>[i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.basicInput`)),1),o[16]||=t(),i(`div`,v,[e(n(g),{modelValue:n(R).noLabelInput,"onUpdate:modelValue":o[0]||=e=>n(R).noLabelInput=e,placeholder:`MM/dd/yyyy`},null,8,[`modelValue`]),o[15]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[14]||=[t(`
          <template>
            <DatePicker v-model="input" placeholder="MM/dd/yyyy" />
          </template>

          <script setup lang="ts">
          import { DatePicker } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)]]),_:1})])]),o[56]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.labelInput`)),1),o[19]||=t(),i(`div`,y,[e(n(g),{modelValue:n(R).arrivalDate,"onUpdate:modelValue":o[1]||=e=>n(R).arrivalDate=e,label:a.$t(`form.label.arrivalDate`),placeholder:`MM/dd/yyyy`},null,8,[`modelValue`,`label`]),o[18]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[17]||=[t(`
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
        `,-1)]]),_:1})])]),o[57]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.withI18n`)),1),o[22]||=t(),i(`div`,b,[e(n(g),{modelValue:n(R).dateOfBirth,"onUpdate:modelValue":o[2]||=e=>n(R).dateOfBirth=e,label:a.$t(`form.label.dateOfBirth`)},null,8,[`modelValue`,`label`]),o[21]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[20]||=[t(`
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
        `,-1)]]),_:1})])]),o[58]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.disabled`)),1),o[25]||=t(),i(`div`,x,[e(n(g),{modelValue:n(R).appointmentDate,"onUpdate:modelValue":o[3]||=e=>n(R).appointmentDate=e,label:a.$t(`form.label.appointmentDate`),disabled:``},null,8,[`modelValue`,`label`]),o[24]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[23]||=[t(`
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
        `,-1)]]),_:1})])]),o[59]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.disableWeekDays`)),1),o[28]||=t(),i(`div`,S,[e(n(g),{modelValue:n(R).presentationDate,"onUpdate:modelValue":o[4]||=e=>n(R).presentationDate=e,"disabled-week-days":[6,0],label:a.$t(`form.label.presentationDate`)},null,8,[`modelValue`,`label`]),o[27]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[26]||=[t(`
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
        `,-1)]]),_:1})])]),o[60]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.customFormat`)),1),o[31]||=t(),i(`div`,C,[e(n(g),{modelValue:n(R).dateOfBirth,"onUpdate:modelValue":o[5]||=e=>n(R).dateOfBirth=e,format:`yyyy/MM/dd`,label:a.$t(`form.label.dateOfBirth`)},null,8,[`modelValue`,`label`]),o[30]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[29]||=[t(`
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
        `,-1)]]),_:1})])]),o[61]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.dateRange`)),1),o[34]||=t(),i(`div`,w,[e(n(g),{modelValue:n(R).dateRange,"onUpdate:modelValue":o[6]||=e=>n(R).dateRange=e,label:a.$t(`form.label.dateRange`),range:``},null,8,[`modelValue`,`label`]),o[33]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[32]||=[t(`
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
        `,-1)]]),_:1})])]),o[62]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.multiCalendars`)),1),o[37]||=t(),i(`div`,T,[e(n(g),{modelValue:n(R).reportDate,"onUpdate:modelValue":o[7]||=e=>n(R).reportDate=e,label:a.$t(`form.label.reportDate`),"multi-calendars":``,range:``},null,8,[`modelValue`,`label`]),o[36]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[35]||=[t(`
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
        `,-1)]]),_:1})])]),o[63]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.dateTimePicker`)),1),o[40]||=t(),i(`div`,E,[e(n(g),{modelValue:n(R).availableDatetime,"onUpdate:modelValue":o[8]||=e=>n(R).availableDatetime=e,label:a.$t(`form.label.availableDatetime`),"enable-time-picker":``,"multi-calendars":``,range:``},null,8,[`modelValue`,`label`]),o[39]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[38]||=[t(`
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
        `,-1)]]),_:1})])]),o[64]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.monthPicker`)),1),o[43]||=t(),i(`div`,D,[e(n(g),{modelValue:n(R).month,"onUpdate:modelValue":o[9]||=e=>n(R).month=e,label:a.$t(`form.label.month`),format:`MMM`,"month-picker":``,placeholder:`MMM`},null,8,[`modelValue`,`label`]),o[42]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[41]||=[t(`
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
        `,-1)]]),_:1})])]),o[65]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.monthAndYearPicker`)),1),o[46]||=t(),i(`div`,O,[e(n(g),{modelValue:n(R).month,"onUpdate:modelValue":o[10]||=e=>n(R).month=e,label:a.$t(`form.label.monthAndYear`),"month-picker":``},null,8,[`modelValue`,`label`]),o[45]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[44]||=[t(`
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
        `,-1)]]),_:1})])]),o[66]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.yearPicker`)),1),o[49]||=t(),i(`div`,k,[e(n(g),{modelValue:n(R).year,"onUpdate:modelValue":o[11]||=e=>n(R).year=e,label:a.$t(`form.label.year`),"year-picker":``},null,8,[`modelValue`,`label`]),o[48]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[47]||=[t(`
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
        `,-1)]]),_:1})])]),o[67]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.timePicker`)),1),o[52]||=t(),i(`div`,A,[e(n(g),{modelValue:n(R).time,"onUpdate:modelValue":o[12]||=e=>n(R).time=e,label:a.$t(`form.label.appointmentTime`),placeholder:`HH:mm`,"time-picker":``},null,8,[`modelValue`,`label`]),o[51]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[50]||=[t(`
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
        `,-1)]]),_:1})])]),o[68]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.inputWithValidation`)),1),o[55]||=t(),i(`div`,j,[e(n(h),null,{default:c(()=>[e(n(g),{modelValue:n(R).joinedDate,"onUpdate:modelValue":o[13]||=e=>n(R).joinedDate=e,label:a.$t(`form.label.joinedDate`),schema:n(N),placeholder:`MM/dd/yyyy`},null,8,[`modelValue`,`label`,`schema`])]),_:1}),o[54]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[53]||=[t(`
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
        `,-1)]]),_:1})])]),o[69]||=t(),e(_,{"events-data":I,"props-data":L,"props-table-title":a.$t(`common.properties`,{value:`DatePickerProperties`})},null,8,[`props-table-title`])]),_:1},8,[`subtitle`,`title`])}}});export{M as default};
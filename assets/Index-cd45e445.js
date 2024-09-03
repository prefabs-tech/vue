import{d as v,u as P,b as V,e as d,o as h,c as y,w as i,a as r,t as u,f as e,g as n,h as t,r as b}from"./index-01a364e0.js";import{m as _,B as p,z}from"./DzangolabVue3Form.es-a58ae166.js";const $={class:"demo-section"},I={class:"demo-section"},w={class:"demo-section"},S={class:"demo-section"},U={class:"demo-section"},R={class:"demo-section"},C={class:"demo-section"},B={class:"demo-section"},F={class:"demo-section"},W={class:"demo-section"},L={name:"DatePickerInput"},M=v({...L,setup(N){const{t:g}=P(),D=_.coerce.date().min(new Date,{message:g("form.errors.datePicker.invalid")}),c=new Date,f=c;let l=V({customStyleInput:d(),dateRange:d([c,new Date(f.setDate(f.getDate()+7))]),disabled:d(c),input:d(),inputWithValidation:d(),month:d(),multiCalendarsInput:d([c,new Date(f.setDate(f.getDate()+7))]),noLabelInput:d(),time:d(),year:d(c.getFullYear())});return(a,o)=>{const m=b("SshPre"),k=b("Page");return h(),y(k,{title:a.$t("form.label.datePicker")},{default:i(()=>[r("section",$,[r("h3",null,u(a.$t("form.label.basicInput")),1),e(),n(m,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="input"
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),n(t(p),{modelValue:t(l).noLabelInput,"onUpdate:modelValue":o[0]||(o[0]=s=>t(l).noLabelInput=s),class:"form-field"},null,8,["modelValue"])]),e(),r("section",I,[r("h3",null,u(a.$t("form.label.labelInput")),1),e(),n(m,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="input"
            label="Date picker"
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),n(t(p),{modelValue:t(l).input,"onUpdate:modelValue":o[1]||(o[1]=s=>t(l).input=s),label:a.$t("form.label.datePicker"),class:"form-field"},null,8,["modelValue","label"])]),e(),r("section",w,[r("h3",null,u(a.$t("form.label.disabled")),1),e(),n(m,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="input"
            label="Disabled"
            disabled
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";
        import { ref } from vue;

        const input = ref(new Date());
        <\/script>
      `)]),_:1}),e(),n(t(p),{modelValue:t(l).disabled,"onUpdate:modelValue":o[2]||(o[2]=s=>t(l).disabled=s),label:a.$t("form.label.disabled"),class:"form-field",disabled:""},null,8,["modelValue","label"])]),e(),r("section",S,[r("h3",null,u(a.$t("form.label.dateRange")),1),e(),n(m,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="dateRange"
            label="Date picker"
            range
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";

        const startDate = new Date();
        const endDate = startDate;

        const dateRange: ref([
          startDate,
          new Date(endDate.setDate(endDate.getDate() + 7)),
        ]),
        <\/script>
      `)]),_:1}),e(),n(t(p),{modelValue:t(l).dateRange,"onUpdate:modelValue":o[3]||(o[3]=s=>t(l).dateRange=s),label:a.$t("form.label.datePicker"),class:"form-field",range:""},null,8,["modelValue","label"])]),e(),r("section",U,[r("h3",null,u(a.$t("form.label.multiCalendars")),1),e(),n(m,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="dateRange"
            label="Date picker"
            range
            multi-calendars
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";

        const startDate = new Date();
        const endDate = startDate;

        const dateRange: ref([
          startDate,
          new Date(endDate.setDate(endDate.getDate() + 7)),
        ]),
        <\/script>
      `)]),_:1}),e(),n(t(p),{modelValue:t(l).multiCalendarsInput,"onUpdate:modelValue":o[4]||(o[4]=s=>t(l).multiCalendarsInput=s),label:a.$t("form.label.datePicker"),class:"form-field",range:"","multi-calendars":""},null,8,["modelValue","label"])]),e(),r("section",R,[r("h3",null,u(a.$t("form.label.monthPicker")),1),e(),n(m,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="input"
            label="Month picker"
            month-picker
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),n(t(p),{modelValue:t(l).month,"onUpdate:modelValue":o[5]||(o[5]=s=>t(l).month=s),label:a.$t("form.label.monthPicker"),class:"form-field","month-picker":""},null,8,["modelValue","label"])]),e(),r("section",C,[r("h3",null,u(a.$t("form.label.yearPicker")),1),e(),n(m,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="year"
            label="Year picker"
            year-picker
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";
        import { ref } from "vue";

        const year = ref(new Date().getFullYear()),
        <\/script>
      `)]),_:1}),e(),n(t(p),{modelValue:t(l).year,"onUpdate:modelValue":o[6]||(o[6]=s=>t(l).year=s),label:a.$t("form.label.yearPicker"),class:"form-field","year-picker":""},null,8,["modelValue","label"])]),e(),r("section",B,[r("h3",null,u(a.$t("form.label.timePicker")),1),e(),n(m,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="input"
            label="Time picker"
            time-picker
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),n(t(p),{modelValue:t(l).time,"onUpdate:modelValue":o[7]||(o[7]=s=>t(l).time=s),label:a.$t("form.label.timePicker"),class:"form-field","time-picker":""},null,8,["modelValue","label"])]),e(),r("section",F,[r("h3",null,u(a.$t("form.label.inputWithValidation")),1),e(),n(m,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <Form>
            <DatePicker 
              v-model="input"
              :schema="inputSchema"
              label="Date picker"
            />
          </Form>
        </template>

        <script setup lang="ts">
        import { DatePicker, Form } from "@dzangolab/vue3-form";
        import { z } from "zod";

        const inputSchema = z.coerce
          .date()
          .min(new Date(), { message: "Please provide a present or future date" });
        <\/script>
      `)]),_:1}),e(),n(t(z),null,{default:i(()=>[n(t(p),{modelValue:t(l).inputWithValidation,"onUpdate:modelValue":o[8]||(o[8]=s=>t(l).inputWithValidation=s),label:a.$t("form.label.datePicker"),schema:t(D),class:"form-field"},null,8,["modelValue","label","schema"])]),_:1})]),e(),r("section",W,[r("h3",null,u(a.$t("form.label.customStyleInput")),1),e(),n(m,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <DatePicker 
            v-model="input"
            class="custom-style-input"
            label="DatePicker"
          />
        </template>

        <script setup lang="ts">
        import { DatePicker } from "@dzangolab/vue3-form";
        <\/script>

        <style lang="css">
        .custom-style-input input {
          --_date-picker-bg-color: #f3f3f3;
          --_date-picker-border-color: var(--dz-primary-color);
          --_date-picker-border-radius: 0.5em;
          --_date-picker-font-size: 1rem;
          --_date-picker-text-color: var(--dz-primary-color);
        }

        .custom-style-input .dp--clear-btn {
          --_date-picker-clear-icon-color: var(--dz-primary-color);
        }

        .custom-style-input .dp__input_icon {
          --_date-picker-input-icon-color: var(--dz-primary-color);
        }

        .custom-style-input label {
          --_date-picker-label-color: var(--dz-primary-color);
        }
        </style>
      `)]),_:1}),e(),n(t(p),{modelValue:t(l).customStyleInput,"onUpdate:modelValue":o[9]||(o[9]=s=>t(l).customStyleInput=s),label:a.$t("form.label.datePicker"),class:"form-field custom-style-input"},null,8,["modelValue","label"])])]),_:1},8,["title"])}}});export{M as default};

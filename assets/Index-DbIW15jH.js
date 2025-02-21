import{a as c,o as h}from"./DzangolabVue3Form.es-IsnEOczk.js";import{d as $,z as V,A as I,r as u,s as D,j as _,o as p,w as i,B as e,e as s,t as m,g as r,a as v,b,u as n,C as z}from"./index-Cc4iPlXT.js";import{z as k}from"./index-mSkvzYyn.js";import{_ as F}from"./FormPage.vue_vue_type_style_index_0_lang-BZlBAyks.js";const U={class:"section-content"},C={key:0,class:"result-date"},E={class:"section-content"},S={key:0,class:"result-date"},B={class:"section-content"},w={key:0,class:"result-date"},A={class:"section-content"},N={key:0,class:"result-date"},P={name:"DaysInput"},H=$({...P,setup(q){const{t:y}=V(),g=k.coerce.number({invalid_type_error:y("form.errors.number.required")}).min(1,{message:y("form.errors.daysInput.invalid")}).max(365,{message:y("form.errors.daysInput.invalid")}),o=I({basic:u(),disabled:u(),label:u(),validationInput:u()});let d=I({basic:u(),disabled:u(30),label:u(),validationInput:u()});return(a,t)=>{const f=D("SshPre");return p(),_(F,{title:a.$t("form.label.daysInput"),class:"demo"},{toolbar:i(()=>[r(n(z),{label:a.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=l=>a.$router.push("/form"))},null,8,["label"])]),default:i(()=>[e(),s("section",null,[s("h2",null,m(a.$t("form.label.basicInput")),1),e(),s("div",U,[r(n(c),{modelValue:n(d).basic,"onUpdate:modelValue":t[1]||(t[1]=l=>n(d).basic=l),placeholder:a.$t("form.placeholder.days"),"onUpdate:date":t[2]||(t[2]=l=>o.basic=l)},null,8,["modelValue","placeholder"]),e(),o.basic?(p(),v("div",C,m(o.basic),1)):b("",!0),e(),r(f,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <DaysInput
              v-model="input"
              placeholder="Enter number of days"
              @update:date="result = $event"
            />
          </template>
          <div v-if="result" class="result-date">{{ result }}</div>

          <script setup lang="ts">
          import { DaysInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const input = ref();
          const result = ref();
          <\/script>
        `)]),_:1}),e()])]),e(),s("section",null,[s("h2",null,m(a.$t("form.label.labelInput")),1),e(),s("div",E,[r(n(h),null,{default:i(()=>[r(n(c),{modelValue:n(d).label,"onUpdate:modelValue":t[3]||(t[3]=l=>n(d).label=l),label:a.$t("form.label.arrivalDate"),placeholder:a.$t("form.placeholder.days"),"onUpdate:date":t[4]||(t[4]=l=>o.label=l)},null,8,["modelValue","label","placeholder"])]),_:1}),e(),o.label?(p(),v("div",S,m(o.label),1)):b("",!0),e(),r(f,{language:"html-vue"},{default:i(()=>[e(`
          <Form>
            <DaysInput
              v-model="input"
              label="Arrival date"
              placeholder="Enter number of days"
              @update:date="result = $event"
            />
          </Form>
          <div v-if="result" class="result-date">{{ result }}</div>

          <script setup lang="ts">
          import { DaysInput, Form } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const input = ref();
          const result = ref();
          <\/script>
        `)]),_:1}),e()])]),e(),s("section",null,[s("h2",null,m(a.$t("form.label.disabled")),1),e(),s("div",B,[r(n(h),null,{default:i(()=>[r(n(c),{modelValue:n(d).disabled,"onUpdate:modelValue":t[5]||(t[5]=l=>n(d).disabled=l),label:a.$t("form.label.appointmentDate"),placeholder:a.$t("form.placeholder.days"),disabled:"","onUpdate:date":t[6]||(t[6]=l=>o.disabled=l)},null,8,["modelValue","label","placeholder"])]),_:1}),e(),o.disabled?(p(),v("div",w,m(o.disabled),1)):b("",!0),e(),r(f,{language:"html-vue"},{default:i(()=>[e(`
          <Form>
            <DaysInput
              v-model="input"
              disabled
              label="Appointment date"
              placeholder="Enter number of days"
              @update:date="result = $event"
            />
          </Form>
          <div v-if="result" class="result-date">{{ result }}</div>

          <script setup lang="ts">
          import { DaysInput, Form } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const input = ref();
          const result = ref();
          <\/script>
        `)]),_:1}),e()])]),e(),s("section",null,[s("h2",null,m(a.$t("form.label.customValidationInput")),1),e(),s("div",A,[r(n(h),null,{default:i(()=>[r(n(c),{modelValue:n(d).validationInput,"onUpdate:modelValue":t[7]||(t[7]=l=>n(d).validationInput=l),label:a.$t("form.label.expiresAfter"),placeholder:a.$t("form.placeholder.days"),schema:n(g),"onUpdate:date":t[8]||(t[8]=l=>o.validationInput=l)},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e(),o.validationInput&&n(d).validationInput>0&&n(d).validationInput<=365?(p(),v("div",N,m(o.validationInput),1)):b("",!0),e(),r(f,{language:"html-vue"},{default:i(()=>[e(`
          <Form>
            <DaysInput
              v-model="input"
              :schema="inputSchema"
              label="Expires after"
              placeholder="Enter number of days"
              @update:date="result = $event"
            />
          </Form>
          <div
            v-if="result && result > 0 && result <= 365"
            class="result-date"
          >
            {{ result }}
          </div>

          <script setup lang="ts">
          import { DaysInput, Form } from "@dzangolab/vue3-form";
          import { ref } from "vue";
          import { z } from "zod";

          const input = ref();
          const result = ref();

          const inputSchema = z.coerce
            .number({ invalid_type_error: "The field is required" })
            .min(1, { message: "Please provide number of days within a year" })
            .max(365, { message: "Please provide number of days within a year" });
          <\/script>
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{H as default};

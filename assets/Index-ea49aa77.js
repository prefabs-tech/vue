import{G as c,J as h}from"./DzangolabVue3Form.es-b51db7e8.js";import{d as V,a5 as D,p as I,j as m,J as g,o as p,c as k,w as u,K as s,W as e,L as i,f as r,D as n,a as b,g as v}from"./index-729398ab-c88618b2.js";import{m as F}from"./index-7eca6f7f.js";import{_ as U}from"./FormPage.vue_vue_type_style_index_0_lang-61bbebf7.js";const z={class:"section-content"},E={key:0,class:"result-date"},S={class:"section-content"},w={key:0,class:"result-date"},B={class:"section-content"},C={key:0,class:"result-date"},N={class:"section-content"},P={key:0,class:"result-date"},A={name:"DaysInput"},K=V({...A,setup(J){const{t:y}=D(),_=F.coerce.number({invalid_type_error:y("form.errors.number.required")}).min(1,{message:y("form.errors.daysInput.invalid")}).max(365,{message:y("form.errors.daysInput.invalid")}),o=I({basic:m(),disabled:m(),label:m(),validationInput:m()});let d=I({basic:m(),disabled:m(30),label:m(),validationInput:m()});return(a,t)=>{const $=g("router-link"),f=g("SshPre");return p(),k(U,{title:a.$t("form.label.daysInput"),class:"demo"},{toolbar:u(()=>[s($,{to:{name:"form"},class:"back"},{default:u(()=>[e(i(a.$t("common.back")),1)]),_:1})]),default:u(()=>[e(),r("section",null,[r("h2",null,i(a.$t("form.label.basicInput")),1),e(),r("div",z,[s(n(c),{modelValue:n(d).basic,"onUpdate:modelValue":t[0]||(t[0]=l=>n(d).basic=l),placeholder:a.$t("form.placeholder.days"),"onUpdate:date":t[1]||(t[1]=l=>o.basic=l)},null,8,["modelValue","placeholder"]),e(),o.basic?(p(),b("div",E,i(o.basic),1)):v("",!0),e(),s(f,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),r("section",null,[r("h2",null,i(a.$t("form.label.labelInput")),1),e(),r("div",S,[s(n(h),null,{default:u(()=>[s(n(c),{modelValue:n(d).label,"onUpdate:modelValue":t[2]||(t[2]=l=>n(d).label=l),label:a.$t("form.label.arrivalDate"),placeholder:a.$t("form.placeholder.days"),"onUpdate:date":t[3]||(t[3]=l=>o.label=l)},null,8,["modelValue","label","placeholder"])]),_:1}),e(),o.label?(p(),b("div",w,i(o.label),1)):v("",!0),e(),s(f,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),r("section",null,[r("h2",null,i(a.$t("form.label.disabled")),1),e(),r("div",B,[s(n(h),null,{default:u(()=>[s(n(c),{modelValue:n(d).disabled,"onUpdate:modelValue":t[4]||(t[4]=l=>n(d).disabled=l),label:a.$t("form.label.appointmentDate"),placeholder:a.$t("form.placeholder.days"),disabled:"","onUpdate:date":t[5]||(t[5]=l=>o.disabled=l)},null,8,["modelValue","label","placeholder"])]),_:1}),e(),o.disabled?(p(),b("div",C,i(o.disabled),1)):v("",!0),e(),s(f,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),r("section",null,[r("h2",null,i(a.$t("form.label.customValidationInput")),1),e(),r("div",N,[s(n(h),null,{default:u(()=>[s(n(c),{modelValue:n(d).validationInput,"onUpdate:modelValue":t[6]||(t[6]=l=>n(d).validationInput=l),label:a.$t("form.label.expiresAfter"),placeholder:a.$t("form.placeholder.days"),schema:n(_),"onUpdate:date":t[7]||(t[7]=l=>o.validationInput=l)},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e(),o.validationInput&&n(d).validationInput>0&&n(d).validationInput<=365?(p(),b("div",P,i(o.validationInput),1)):v("",!0),e(),s(f,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{K as default};

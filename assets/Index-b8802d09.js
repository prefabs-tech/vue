import{Z as c,t as h}from"./DzangolabVue3Form.es-9ef31fd1.js";import{d as V,a7 as D,p as I,j as m,K as g,o as p,c as k,w as u,L as s,C as e,M as i,f as r,E as t,a as b,g as v}from"./index-8e1c3ab6-883a880f.js";import{m as F}from"./index-32a0dfc9.js";import{_ as U}from"./FormPage.vue_vue_type_style_index_0_lang-e49d2f53.js";const z={class:"section-content"},E={key:0,class:"result-date"},S={class:"section-content"},C={key:0,class:"result-date"},w={class:"section-content"},B={key:0,class:"result-date"},N={class:"section-content"},P={key:0,class:"result-date"},A={name:"DaysInput"},L=V({...A,setup(q){const{t:y}=D(),_=F.coerce.number({invalid_type_error:y("form.errors.number.required")}).min(1,{message:y("form.errors.daysInput.invalid")}).max(365,{message:y("form.errors.daysInput.invalid")}),o=I({basic:m(),disabled:m(),label:m(),validationInput:m()});let d=I({basic:m(),disabled:m(30),label:m(),validationInput:m()});return(a,n)=>{const $=g("router-link"),f=g("SshPre");return p(),k(U,{title:a.$t("form.label.daysInput"),class:"demo"},{toolbar:u(()=>[s($,{to:{name:"form"},class:"back"},{default:u(()=>[e(i(a.$t("common.back")),1)]),_:1})]),default:u(()=>[e(),r("section",null,[r("h2",null,i(a.$t("form.label.basicInput")),1),e(),r("div",z,[s(t(c),{modelValue:t(d).basic,"onUpdate:modelValue":n[0]||(n[0]=l=>t(d).basic=l),placeholder:a.$t("form.placeholder.days"),"onUpdate:date":n[1]||(n[1]=l=>o.basic=l)},null,8,["modelValue","placeholder"]),e(),o.basic?(p(),b("div",E,i(o.basic),1)):v("",!0),e(),s(f,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),r("section",null,[r("h2",null,i(a.$t("form.label.labelInput")),1),e(),r("div",S,[s(t(h),null,{default:u(()=>[s(t(c),{modelValue:t(d).label,"onUpdate:modelValue":n[2]||(n[2]=l=>t(d).label=l),label:a.$t("form.label.arrivalDate"),placeholder:a.$t("form.placeholder.days"),"onUpdate:date":n[3]||(n[3]=l=>o.label=l)},null,8,["modelValue","label","placeholder"])]),_:1}),e(),o.label?(p(),b("div",C,i(o.label),1)):v("",!0),e(),s(f,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),r("section",null,[r("h2",null,i(a.$t("form.label.disabled")),1),e(),r("div",w,[s(t(h),null,{default:u(()=>[s(t(c),{modelValue:t(d).disabled,"onUpdate:modelValue":n[4]||(n[4]=l=>t(d).disabled=l),label:a.$t("form.label.appointmentDate"),placeholder:a.$t("form.placeholder.days"),disabled:"","onUpdate:date":n[5]||(n[5]=l=>o.disabled=l)},null,8,["modelValue","label","placeholder"])]),_:1}),e(),o.disabled?(p(),b("div",B,i(o.disabled),1)):v("",!0),e(),s(f,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),r("section",null,[r("h2",null,i(a.$t("form.label.customValidationInput")),1),e(),r("div",N,[s(t(h),null,{default:u(()=>[s(t(c),{modelValue:t(d).validationInput,"onUpdate:modelValue":n[6]||(n[6]=l=>t(d).validationInput=l),label:a.$t("form.label.expiresAfter"),placeholder:a.$t("form.placeholder.days"),schema:t(_),"onUpdate:date":n[7]||(n[7]=l=>o.validationInput=l)},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e(),o.validationInput&&t(d).validationInput>0&&t(d).validationInput<=365?(p(),b("div",P,i(o.validationInput),1)):v("",!0),e(),s(f,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{L as default};

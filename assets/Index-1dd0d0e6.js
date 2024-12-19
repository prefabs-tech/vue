import{e as c,K as v}from"./DzangolabVue3Form.es-d6ac0022.js";import{d as V,a6 as D,p as I,j as m,K as g,o as p,c as F,w as d,L as o,C as e,M as i,f as r,E as n,a as b,g as y}from"./index-66214709-5960322e.js";import{m as k}from"./index-a72a1949.js";import{_ as U}from"./FormPage.vue_vue_type_style_index_0_lang-e6784be9.js";const z={class:"section-content"},E={key:0,class:"result-date"},S={class:"section-content"},C={key:0,class:"result-date"},w={class:"section-content"},B={key:0,class:"result-date"},N={class:"section-content"},P={key:0,class:"result-date"},A={name:"DaysInput"},M=V({...A,setup(K){const{t:h}=D(),_=k.coerce.number({invalid_type_error:h("form.errors.number.required")}).min(1,{message:h("form.errors.daysInput.invalid")}).max(365,{message:h("form.errors.daysInput.invalid")}),s=I({basic:m(),disabled:m(),label:m(),validationInput:m()});let u=I({basic:m(),disabled:m(30),label:m(),validationInput:m()});return(a,t)=>{const $=g("router-link"),f=g("SshPre");return p(),F(U,{title:a.$t("form.label.daysInput"),class:"demo"},{toolbar:d(()=>[o($,{to:{name:"form"},class:"back"},{default:d(()=>[e(i(a.$t("common.back")),1)]),_:1})]),default:d(()=>[e(),r("section",null,[r("h2",null,i(a.$t("form.label.basicInput")),1),e(),r("div",z,[o(f,{language:"html-vue"},{default:d(()=>[e(`
          <Form>
            <DaysInput
              v-model="input"
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
        `)]),_:1}),e(),o(n(c),null,{default:d(()=>[o(n(v),{modelValue:n(u).basic,"onUpdate:modelValue":t[0]||(t[0]=l=>n(u).basic=l),placeholder:a.$t("form.placeholder.days"),"onUpdate:date":t[1]||(t[1]=l=>s.basic=l)},null,8,["modelValue","placeholder"])]),_:1}),e(),s.basic?(p(),b("div",E,i(s.basic),1)):y("",!0)])]),e(),r("section",null,[r("h2",null,i(a.$t("form.label.labelInput")),1),e(),r("div",S,[o(f,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e(),o(n(c),null,{default:d(()=>[o(n(v),{modelValue:n(u).label,"onUpdate:modelValue":t[2]||(t[2]=l=>n(u).label=l),label:a.$t("form.label.arrivalDate"),placeholder:a.$t("form.placeholder.days"),"onUpdate:date":t[3]||(t[3]=l=>s.label=l)},null,8,["modelValue","label","placeholder"])]),_:1}),e(),s.label?(p(),b("div",C,i(s.label),1)):y("",!0)])]),e(),r("section",null,[r("h2",null,i(a.$t("form.label.disabled")),1),e(),r("div",w,[o(f,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e(),o(n(c),null,{default:d(()=>[o(n(v),{modelValue:n(u).disabled,"onUpdate:modelValue":t[4]||(t[4]=l=>n(u).disabled=l),label:a.$t("form.label.appointmentDate"),placeholder:a.$t("form.placeholder.days"),disabled:"","onUpdate:date":t[5]||(t[5]=l=>s.disabled=l)},null,8,["modelValue","label","placeholder"])]),_:1}),e(),s.disabled?(p(),b("div",B,i(s.disabled),1)):y("",!0)])]),e(),r("section",null,[r("h2",null,i(a.$t("form.label.customValidationInput")),1),e(),r("div",N,[o(f,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e(),o(n(c),null,{default:d(()=>[o(n(v),{modelValue:n(u).validationInput,"onUpdate:modelValue":t[6]||(t[6]=l=>n(u).validationInput=l),label:a.$t("form.label.expiresAfter"),placeholder:a.$t("form.placeholder.days"),schema:n(_),"onUpdate:date":t[7]||(t[7]=l=>s.validationInput=l)},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e(),s.validationInput&&n(u).validationInput>0&&n(u).validationInput<=365?(p(),b("div",P,i(s.validationInput),1)):y("",!0)])])]),_:1},8,["title"])}}});export{M as default};

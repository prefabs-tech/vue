import{s as v,f as g}from"./PrefabsTechVue3Form.es-BEv0SpyA.js";import{d as D,I as F,L as U,M as V,r as u,J as k,e as E,o as m,i,f as r,B as t,t as p,h as o,a as b,b as y,u as n}from"./index-Ch0Mwnya.js";import{_ as S}from"./FormPage.vue_vue_type_style_index_0_lang-Cwbqpvag.js";const w={class:"section-content"},B={key:0,class:"result-date"},z={class:"section-content"},C={key:0,class:"result-date"},N={class:"section-content"},P={key:0,class:"result-date"},A={class:"section-content"},q={key:0,class:"result-date"},T={name:"DaysInput"},G=D({...T,setup(J){const{t:I}=F(),$=U.coerce.number({invalid_type_error:I("form.errors.number.required")}).min(1,{message:I("form.errors.daysInput.invalid")}).max(365,{message:I("form.errors.daysInput.invalid")}),s=V({basic:u(),disabled:u(),label:u(),validationInput:u()});let d=V({basic:u(),disabled:u(30),label:u(),validationInput:u()});return(a,e)=>{const f=k("SshPre");return m(),E(S,{title:a.$t("form.label.daysInput"),class:"demo"},{default:i(()=>[r("section",null,[r("h2",null,p(a.$t("form.label.basicInput")),1),e[11]||(e[11]=t()),r("div",w,[o(n(v),{modelValue:n(d).basic,"onUpdate:modelValue":e[0]||(e[0]=l=>n(d).basic=l),placeholder:a.$t("form.placeholder.days"),"onUpdate:date":e[1]||(e[1]=l=>s.basic=l)},null,8,["modelValue","placeholder"]),e[9]||(e[9]=t()),s.basic?(m(),b("div",B,p(s.basic),1)):y("",!0),e[10]||(e[10]=t()),o(f,{language:"html-vue"},{default:i(()=>e[8]||(e[8]=[t(`
          <template>
            <DaysInput
              v-model="input"
              placeholder="Enter number of days"
              @update:date="result = $event"
            />
          </template>
          <div v-if="result" class="result-date">{{ result }}</div>

          <script setup lang="ts">
          import { DaysInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();
          const result = ref();
          <\/script>
        `)])),_:1})])]),e[24]||(e[24]=t()),r("section",null,[r("h2",null,p(a.$t("form.label.labelInput")),1),e[15]||(e[15]=t()),r("div",z,[o(n(g),null,{default:i(()=>[o(n(v),{modelValue:n(d).label,"onUpdate:modelValue":e[2]||(e[2]=l=>n(d).label=l),label:a.$t("form.label.arrivalDate"),placeholder:a.$t("form.placeholder.days"),"onUpdate:date":e[3]||(e[3]=l=>s.label=l)},null,8,["modelValue","label","placeholder"])]),_:1}),e[13]||(e[13]=t()),s.label?(m(),b("div",C,p(s.label),1)):y("",!0),e[14]||(e[14]=t()),o(f,{language:"html-vue"},{default:i(()=>e[12]||(e[12]=[t(`
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
          import { DaysInput, Form } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();
          const result = ref();
          <\/script>
        `)])),_:1})])]),e[25]||(e[25]=t()),r("section",null,[r("h2",null,p(a.$t("form.label.disabled")),1),e[19]||(e[19]=t()),r("div",N,[o(n(g),null,{default:i(()=>[o(n(v),{modelValue:n(d).disabled,"onUpdate:modelValue":e[4]||(e[4]=l=>n(d).disabled=l),label:a.$t("form.label.appointmentDate"),placeholder:a.$t("form.placeholder.days"),disabled:"","onUpdate:date":e[5]||(e[5]=l=>s.disabled=l)},null,8,["modelValue","label","placeholder"])]),_:1}),e[17]||(e[17]=t()),s.disabled?(m(),b("div",P,p(s.disabled),1)):y("",!0),e[18]||(e[18]=t()),o(f,{language:"html-vue"},{default:i(()=>e[16]||(e[16]=[t(`
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
          import { DaysInput, Form } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();
          const result = ref();
          <\/script>
        `)])),_:1})])]),e[26]||(e[26]=t()),r("section",null,[r("h2",null,p(a.$t("form.label.customValidationInput")),1),e[23]||(e[23]=t()),r("div",A,[o(n(g),null,{default:i(()=>[o(n(v),{modelValue:n(d).validationInput,"onUpdate:modelValue":e[6]||(e[6]=l=>n(d).validationInput=l),label:a.$t("form.label.expiresAfter"),placeholder:a.$t("form.placeholder.days"),schema:n($),"onUpdate:date":e[7]||(e[7]=l=>s.validationInput=l)},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e[21]||(e[21]=t()),s.validationInput&&n(d).validationInput>0&&n(d).validationInput<=365?(m(),b("div",q,p(s.validationInput),1)):y("",!0),e[22]||(e[22]=t()),o(f,{language:"html-vue"},{default:i(()=>e[20]||(e[20]=[t(`
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
          import { DaysInput, Form } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
          import { z } from "zod";

          const input = ref();
          const result = ref();

          const inputSchema = z.coerce
            .number({ invalid_type_error: "The field is required" })
            .min(1, { message: "Please provide number of days within a year" })
            .max(365, { message: "Please provide number of days within a year" });
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{G as default};

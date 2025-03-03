import{S as v,$ as g}from"./DzangolabVue3Form.es-wFi6zzsC.js";import{d as D,z,A as k,B as $,r as i,y as F,l as S,o as p,p as u,C as l,e as o,t as m,g as r,a as b,b as y,u as n,D as U}from"./index-C0L6_lhn.js";import{_ as C}from"./FormPage.vue_vue_type_style_index_0_lang-vsJ3lGt1.js";const E={class:"section-content"},B={key:0,class:"result-date"},A={class:"section-content"},N={key:0,class:"result-date"},P={class:"section-content"},w={key:0,class:"result-date"},q={class:"section-content"},T={key:0,class:"result-date"},O={name:"DaysInput"},K=D({...O,setup(j){const{t:I}=z(),V=k.coerce.number({invalid_type_error:I("form.errors.number.required")}).min(1,{message:I("form.errors.daysInput.invalid")}).max(365,{message:I("form.errors.daysInput.invalid")}),s=$({basic:i(),disabled:i(),label:i(),validationInput:i()});let d=$({basic:i(),disabled:i(30),label:i(),validationInput:i()});return(a,e)=>{const f=F("SshPre");return p(),S(C,{title:a.$t("form.label.daysInput"),class:"demo"},{toolbar:u(()=>[r(n(U),{label:a.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=t=>a.$router.push("/form"))},null,8,["label"])]),default:u(()=>[e[25]||(e[25]=l()),o("section",null,[o("h2",null,m(a.$t("form.label.basicInput")),1),e[12]||(e[12]=l()),o("div",E,[r(n(v),{modelValue:n(d).basic,"onUpdate:modelValue":e[1]||(e[1]=t=>n(d).basic=t),placeholder:a.$t("form.placeholder.days"),"onUpdate:date":e[2]||(e[2]=t=>s.basic=t)},null,8,["modelValue","placeholder"]),e[10]||(e[10]=l()),s.basic?(p(),b("div",B,m(s.basic),1)):y("",!0),e[11]||(e[11]=l()),r(f,{language:"html-vue"},{default:u(()=>e[9]||(e[9]=[l(`
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
        `)])),_:1})])]),e[26]||(e[26]=l()),o("section",null,[o("h2",null,m(a.$t("form.label.labelInput")),1),e[16]||(e[16]=l()),o("div",A,[r(n(g),null,{default:u(()=>[r(n(v),{modelValue:n(d).label,"onUpdate:modelValue":e[3]||(e[3]=t=>n(d).label=t),label:a.$t("form.label.arrivalDate"),placeholder:a.$t("form.placeholder.days"),"onUpdate:date":e[4]||(e[4]=t=>s.label=t)},null,8,["modelValue","label","placeholder"])]),_:1}),e[14]||(e[14]=l()),s.label?(p(),b("div",N,m(s.label),1)):y("",!0),e[15]||(e[15]=l()),r(f,{language:"html-vue"},{default:u(()=>e[13]||(e[13]=[l(`
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
        `)])),_:1})])]),e[27]||(e[27]=l()),o("section",null,[o("h2",null,m(a.$t("form.label.disabled")),1),e[20]||(e[20]=l()),o("div",P,[r(n(g),null,{default:u(()=>[r(n(v),{modelValue:n(d).disabled,"onUpdate:modelValue":e[5]||(e[5]=t=>n(d).disabled=t),label:a.$t("form.label.appointmentDate"),placeholder:a.$t("form.placeholder.days"),disabled:"","onUpdate:date":e[6]||(e[6]=t=>s.disabled=t)},null,8,["modelValue","label","placeholder"])]),_:1}),e[18]||(e[18]=l()),s.disabled?(p(),b("div",w,m(s.disabled),1)):y("",!0),e[19]||(e[19]=l()),r(f,{language:"html-vue"},{default:u(()=>e[17]||(e[17]=[l(`
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
        `)])),_:1})])]),e[28]||(e[28]=l()),o("section",null,[o("h2",null,m(a.$t("form.label.customValidationInput")),1),e[24]||(e[24]=l()),o("div",q,[r(n(g),null,{default:u(()=>[r(n(v),{modelValue:n(d).validationInput,"onUpdate:modelValue":e[7]||(e[7]=t=>n(d).validationInput=t),label:a.$t("form.label.expiresAfter"),placeholder:a.$t("form.placeholder.days"),schema:n(V),"onUpdate:date":e[8]||(e[8]=t=>s.validationInput=t)},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e[22]||(e[22]=l()),s.validationInput&&n(d).validationInput>0&&n(d).validationInput<=365?(p(),b("div",T,m(s.validationInput),1)):y("",!0),e[23]||(e[23]=l()),r(f,{language:"html-vue"},{default:u(()=>e[21]||(e[21]=[l(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{K as default};

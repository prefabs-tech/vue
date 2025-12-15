import{b,E as $}from"./PrefabsTechVue3Form.es-C8cZvswu.js";import{d as D,I as k,L as F,M as g,r as i,J as E,e as U,o as p,i as u,B as t,f as r,t as m,h as o,a as v,b as y,u as l,q as S}from"./index-CbitnnAc.js";import{_ as z}from"./FormPage.vue_vue_type_style_index_0_lang-BIAL5Kfc.js";const B={class:"section-content"},C={key:0,class:"result-date"},N={class:"section-content"},P={key:0,class:"result-date"},q={class:"section-content"},w={key:0,class:"result-date"},A={class:"section-content"},O={key:0,class:"result-date"},T={name:"DaysInput"},G=D({...T,setup(J){const{t:I}=k(),V=F.coerce.number({invalid_type_error:I("form.errors.number.required")}).min(1,{message:I("form.errors.daysInput.invalid")}).max(365,{message:I("form.errors.daysInput.invalid")}),a=g({basic:i(),disabled:i(),label:i(),validationInput:i()});let d=g({basic:i(),disabled:i(30),label:i(),validationInput:i()});return(s,e)=>{const f=E("SshPre");return p(),U(z,{title:s.$t("form.label.daysInput"),class:"demo"},{toolbar:u(()=>[o(l(S),{label:s.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=n=>s.$router.push("/form"))},null,8,["label"])]),default:u(()=>[e[25]||(e[25]=t()),r("section",null,[r("h2",null,m(s.$t("form.label.basicInput")),1),e[12]||(e[12]=t()),r("div",B,[o(l(b),{modelValue:l(d).basic,"onUpdate:modelValue":e[1]||(e[1]=n=>l(d).basic=n),placeholder:s.$t("form.placeholder.days"),"onUpdate:date":e[2]||(e[2]=n=>a.basic=n)},null,8,["modelValue","placeholder"]),e[10]||(e[10]=t()),a.basic?(p(),v("div",C,m(a.basic),1)):y("",!0),e[11]||(e[11]=t()),o(f,{language:"html-vue"},{default:u(()=>e[9]||(e[9]=[t(`
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
        `)])),_:1})])]),e[26]||(e[26]=t()),r("section",null,[r("h2",null,m(s.$t("form.label.labelInput")),1),e[16]||(e[16]=t()),r("div",N,[o(l($),null,{default:u(()=>[o(l(b),{modelValue:l(d).label,"onUpdate:modelValue":e[3]||(e[3]=n=>l(d).label=n),label:s.$t("form.label.arrivalDate"),placeholder:s.$t("form.placeholder.days"),"onUpdate:date":e[4]||(e[4]=n=>a.label=n)},null,8,["modelValue","label","placeholder"])]),_:1}),e[14]||(e[14]=t()),a.label?(p(),v("div",P,m(a.label),1)):y("",!0),e[15]||(e[15]=t()),o(f,{language:"html-vue"},{default:u(()=>e[13]||(e[13]=[t(`
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
        `)])),_:1})])]),e[27]||(e[27]=t()),r("section",null,[r("h2",null,m(s.$t("form.label.disabled")),1),e[20]||(e[20]=t()),r("div",q,[o(l($),null,{default:u(()=>[o(l(b),{modelValue:l(d).disabled,"onUpdate:modelValue":e[5]||(e[5]=n=>l(d).disabled=n),label:s.$t("form.label.appointmentDate"),placeholder:s.$t("form.placeholder.days"),disabled:"","onUpdate:date":e[6]||(e[6]=n=>a.disabled=n)},null,8,["modelValue","label","placeholder"])]),_:1}),e[18]||(e[18]=t()),a.disabled?(p(),v("div",w,m(a.disabled),1)):y("",!0),e[19]||(e[19]=t()),o(f,{language:"html-vue"},{default:u(()=>e[17]||(e[17]=[t(`
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
        `)])),_:1})])]),e[28]||(e[28]=t()),r("section",null,[r("h2",null,m(s.$t("form.label.customValidationInput")),1),e[24]||(e[24]=t()),r("div",A,[o(l($),null,{default:u(()=>[o(l(b),{modelValue:l(d).validationInput,"onUpdate:modelValue":e[7]||(e[7]=n=>l(d).validationInput=n),label:s.$t("form.label.expiresAfter"),placeholder:s.$t("form.placeholder.days"),schema:l(V),"onUpdate:date":e[8]||(e[8]=n=>a.validationInput=n)},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e[22]||(e[22]=t()),a.validationInput&&l(d).validationInput>0&&l(d).validationInput<=365?(p(),v("div",O,m(a.validationInput),1)):y("",!0),e[23]||(e[23]=t()),o(f,{language:"html-vue"},{default:u(()=>e[21]||(e[21]=[t(`
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

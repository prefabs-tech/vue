import{p as v,b as D}from"./PrefabsTechVue3Form.es-Cji55RSf.js";import{d as F,M as S,O as U,N as k,o as f,e as N,f as p,h as r,t as u,A as t,a as s,u as n,c as y,b as I,P as g,r as m}from"./index-DVqVAY7Y.js";import{_ as z}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-NEluZ70T.js";import{_ as E}from"./FormPage.vue_vue_type_style_index_0_lang-DpzZ2c3k.js";import"./PrefabsTechVue3TanstackTable.es-DtQsdL6M.js";const P={class:"section-content"},w={key:0,class:"result-date"},B={class:"section-content"},A={key:0,class:"result-date"},C={class:"section-content"},T={key:0,class:"result-date"},q={class:"section-content"},M={key:0,class:"result-date"},O={name:"DaysInput"},L=F({...O,setup(Z){const{t:i}=S(),V=U.coerce.number({invalid_type_error:i("form.errors.number.required")}).min(1,{message:i("form.errors.daysInput.invalid")}).max(365,{message:i("form.errors.daysInput.invalid")}),c=[{description:i("form.documentation.eventDescription.daysInput.date"),name:"update:date",payload:"date: string"},{description:i("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"value: number"}],$=[{default:"false",description:i("form.documentation.propsDescription.input.disabled"),prop:"disabled",type:"Boolean"},{default:"-",description:i("form.documentation.propsDescription.input.label"),prop:"label",type:"String"},{default:"-",description:i("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"Number | Null | Undefined"},{default:'"days-input"',description:i("form.documentation.propsDescription.input.name"),prop:"name",type:"String"},{default:"-",description:i("form.documentation.propsDescription.input.placeholder"),prop:"placeholder",type:"String"},{default:"z.coerce.number().optional()",description:i("form.documentation.propsDescription.input.schema"),prop:"schema",type:"z.ZodType<string | number>"}],a=g({basic:m(),disabled:m(),label:m(),validationInput:m()});let d=g({basic:m(),disabled:m(30),label:m(),validationInput:m()});return(o,e)=>{const b=k("SshPre");return f(),N(E,{subtitle:o.$t("form.subtitle.daysInput"),title:o.$t("form.label.daysInput"),class:"demo"},{default:p(()=>[r("section",null,[r("h2",null,u(o.$t("form.label.basicInput")),1),e[11]||(e[11]=t()),r("div",P,[s(n(v),{modelValue:n(d).basic,"onUpdate:modelValue":e[0]||(e[0]=l=>n(d).basic=l),placeholder:o.$t("form.placeholder.days"),"onUpdate:date":e[1]||(e[1]=l=>a.basic=l)},null,8,["modelValue","placeholder"]),e[9]||(e[9]=t()),a.basic?(f(),y("div",w,u(a.basic),1)):I("",!0),e[10]||(e[10]=t()),s(b,{language:"html-vue"},{default:p(()=>[...e[8]||(e[8]=[t(`
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
        `,-1)])]),_:1})])]),e[24]||(e[24]=t()),r("section",null,[r("h2",null,u(o.$t("form.label.labelInput")),1),e[15]||(e[15]=t()),r("div",B,[s(n(D),null,{default:p(()=>[s(n(v),{modelValue:n(d).label,"onUpdate:modelValue":e[2]||(e[2]=l=>n(d).label=l),label:o.$t("form.label.arrivalDate"),placeholder:o.$t("form.placeholder.days"),"onUpdate:date":e[3]||(e[3]=l=>a.label=l)},null,8,["modelValue","label","placeholder"])]),_:1}),e[13]||(e[13]=t()),a.label?(f(),y("div",A,u(a.label),1)):I("",!0),e[14]||(e[14]=t()),s(b,{language:"html-vue"},{default:p(()=>[...e[12]||(e[12]=[t(`
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
        `,-1)])]),_:1})])]),e[25]||(e[25]=t()),r("section",null,[r("h2",null,u(o.$t("form.label.disabled")),1),e[19]||(e[19]=t()),r("div",C,[s(n(D),null,{default:p(()=>[s(n(v),{modelValue:n(d).disabled,"onUpdate:modelValue":e[4]||(e[4]=l=>n(d).disabled=l),label:o.$t("form.label.appointmentDate"),placeholder:o.$t("form.placeholder.days"),disabled:"","onUpdate:date":e[5]||(e[5]=l=>a.disabled=l)},null,8,["modelValue","label","placeholder"])]),_:1}),e[17]||(e[17]=t()),a.disabled?(f(),y("div",T,u(a.disabled),1)):I("",!0),e[18]||(e[18]=t()),s(b,{language:"html-vue"},{default:p(()=>[...e[16]||(e[16]=[t(`
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
        `,-1)])]),_:1})])]),e[26]||(e[26]=t()),r("section",null,[r("h2",null,u(o.$t("form.label.customValidationInput")),1),e[23]||(e[23]=t()),r("div",q,[s(n(D),null,{default:p(()=>[s(n(v),{modelValue:n(d).validationInput,"onUpdate:modelValue":e[6]||(e[6]=l=>n(d).validationInput=l),label:o.$t("form.label.expiresAfter"),placeholder:o.$t("form.placeholder.days"),schema:n(V),"onUpdate:date":e[7]||(e[7]=l=>a.validationInput=l)},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e[21]||(e[21]=t()),a.validationInput&&n(d).validationInput>0&&n(d).validationInput<=365?(f(),y("div",M,u(a.validationInput),1)):I("",!0),e[22]||(e[22]=t()),s(b,{language:"html-vue"},{default:p(()=>[...e[20]||(e[20]=[t(`
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
            v-if="result > 0 && result <= 365"
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
        `,-1)])]),_:1})])]),e[27]||(e[27]=t()),s(z,{"events-data":c,"props-data":$,"props-table-title":o.$t("common.properties",{value:"DaysInputProperties"})},null,8,["props-table-title"])]),_:1},8,["subtitle","title"])}}});export{L as default};

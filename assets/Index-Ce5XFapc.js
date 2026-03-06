import{e as v,r as D}from"./PrefabsTechVue3Form.es-BoUjIuSx.js";import{d as k,L as F,N as S,M as U,o as f,e as z,f as p,h as s,t as u,z as t,a as r,u as n,c as y,b as I,O as g,r as m}from"./index-taFQezeg.js";import{_ as N}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-t26bDrn_.js";import{_ as E}from"./FormPage.vue_vue_type_style_index_0_lang-BP3VjD2m.js";import"./PrefabsTechVue3TanstackTable.es-gIvQX_Uf.js";const B={class:"section-content"},P={key:0,class:"result-date"},C={class:"section-content"},w={key:0,class:"result-date"},A={class:"section-content"},T={key:0,class:"result-date"},q={class:"section-content"},L={key:0,class:"result-date"},M={name:"DaysInputDemo"},K=k({...M,setup(O){const{t:i}=F(),V=S.coerce.number({invalid_type_error:i("form.errors.number.required")}).min(1,{message:i("form.errors.daysInput.invalid")}).max(365,{message:i("form.errors.daysInput.invalid")}),c=[{description:i("form.documentation.eventDescription.daysInput.date"),name:"update:date",payload:"date: string"},{description:i("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"value: number"}],$=[{default:"false",description:i("form.documentation.propsDescription.input.disabled"),prop:"disabled",type:"Boolean"},{default:"-",description:i("form.documentation.propsDescription.input.label"),prop:"label",type:"String"},{default:"-",description:i("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"Number | Null | Undefined"},{default:'"days-input"',description:i("form.documentation.propsDescription.input.name"),prop:"name",type:"String"},{default:"-",description:i("form.documentation.propsDescription.input.placeholder"),prop:"placeholder",type:"String"},{default:"z.coerce.number().optional()",description:i("form.documentation.propsDescription.input.schema"),prop:"schema",type:"z.ZodType<string | number>"}],a=g({basic:m(),disabled:m(),label:m(),validationInput:m()});let d=g({basic:m(),disabled:m(30),label:m(),validationInput:m()});return(o,e)=>{const b=U("SshPre");return f(),z(E,{subtitle:o.$t("form.subtitle.daysInput"),title:o.$t("form.label.daysInput"),class:"demo"},{default:p(()=>[s("section",null,[s("h2",null,u(o.$t("form.label.basicInput")),1),e[11]||(e[11]=t()),s("div",B,[r(n(v),{modelValue:n(d).basic,"onUpdate:modelValue":e[0]||(e[0]=l=>n(d).basic=l),placeholder:o.$t("form.placeholder.days"),"onUpdate:date":e[1]||(e[1]=l=>a.basic=l)},null,8,["modelValue","placeholder"]),e[9]||(e[9]=t()),a.basic?(f(),y("div",P,u(a.basic),1)):I("",!0),e[10]||(e[10]=t()),r(b,{language:"html-vue"},{default:p(()=>[...e[8]||(e[8]=[t(`
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
        `,-1)])]),_:1})])]),e[24]||(e[24]=t()),s("section",null,[s("h2",null,u(o.$t("form.label.labelInput")),1),e[15]||(e[15]=t()),s("div",C,[r(n(D),null,{default:p(()=>[r(n(v),{modelValue:n(d).label,"onUpdate:modelValue":e[2]||(e[2]=l=>n(d).label=l),label:o.$t("form.label.arrivalDate"),placeholder:o.$t("form.placeholder.days"),name:"label-input","onUpdate:date":e[3]||(e[3]=l=>a.label=l)},null,8,["modelValue","label","placeholder"])]),_:1}),e[13]||(e[13]=t()),a.label?(f(),y("div",w,u(a.label),1)):I("",!0),e[14]||(e[14]=t()),r(b,{language:"html-vue"},{default:p(()=>[...e[12]||(e[12]=[t(`
          <Form>
            <DaysInput
              v-model="input"
              label="Arrival date"
              name="days"
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
        `,-1)])]),_:1})])]),e[25]||(e[25]=t()),s("section",null,[s("h2",null,u(o.$t("form.label.disabled")),1),e[19]||(e[19]=t()),s("div",A,[r(n(D),null,{default:p(()=>[r(n(v),{modelValue:n(d).disabled,"onUpdate:modelValue":e[4]||(e[4]=l=>n(d).disabled=l),label:o.$t("form.label.appointmentDate"),placeholder:o.$t("form.placeholder.days"),disabled:"",name:"disabled-input","onUpdate:date":e[5]||(e[5]=l=>a.disabled=l)},null,8,["modelValue","label","placeholder"])]),_:1}),e[17]||(e[17]=t()),a.disabled?(f(),y("div",T,u(a.disabled),1)):I("",!0),e[18]||(e[18]=t()),r(b,{language:"html-vue"},{default:p(()=>[...e[16]||(e[16]=[t(`
          <Form>
            <DaysInput
              v-model="input"
              disabled
              label="Appointment date"
              name="days"
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
        `,-1)])]),_:1})])]),e[26]||(e[26]=t()),s("section",null,[s("h2",null,u(o.$t("form.label.customValidationInput")),1),e[23]||(e[23]=t()),s("div",q,[r(n(D),null,{default:p(()=>[r(n(v),{modelValue:n(d).validationInput,"onUpdate:modelValue":e[6]||(e[6]=l=>n(d).validationInput=l),label:o.$t("form.label.expiresAfter"),placeholder:o.$t("form.placeholder.days"),schema:n(V),name:"validation-input","onUpdate:date":e[7]||(e[7]=l=>a.validationInput=l)},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e[21]||(e[21]=t()),a.validationInput&&n(d).validationInput>0&&n(d).validationInput<=365?(f(),y("div",L,u(a.validationInput),1)):I("",!0),e[22]||(e[22]=t()),r(b,{language:"html-vue"},{default:p(()=>[...e[20]||(e[20]=[t(`
          <Form>
            <DaysInput
              v-model="input"
              :schema="inputSchema"
              label="Expires after"
              name="days"
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
        `,-1)])]),_:1})])]),e[27]||(e[27]=t()),r(N,{"events-data":c,"props-data":$,"props-table-title":o.$t("common.properties",{value:"DaysInputProperties"})},null,8,["props-table-title"])]),_:1},8,["subtitle","title"])}}});export{K as default};

import{e as c,l as h}from"./DzangolabVue3Form.es-db631682.js";import{d as $,a5 as V,p as I,j as u,J as D,o as p,c as _,w as i,K as s,D as l,ao as k,W as e,f as r,L as m,a as v,g as b}from"./index-729398ab-b294403d.js";import{m as F}from"./index-6bf42b23.js";import{_ as z}from"./FormPage.vue_vue_type_style_index_0_lang-c07c697e.js";const U={class:"section-content"},E={key:0,class:"result-date"},S={class:"section-content"},C={key:0,class:"result-date"},w={class:"section-content"},B={key:0,class:"result-date"},N={class:"section-content"},P={key:0,class:"result-date"},A={name:"DaysInput"},L=$({...A,setup(q){const{t:y}=V(),g=F.coerce.number({invalid_type_error:y("form.errors.number.required")}).min(1,{message:y("form.errors.daysInput.invalid")}).max(365,{message:y("form.errors.daysInput.invalid")}),o=I({basic:u(),disabled:u(),label:u(),validationInput:u()});let d=I({basic:u(),disabled:u(30),label:u(),validationInput:u()});return(a,n)=>{const f=D("SshPre");return p(),_(z,{title:a.$t("form.label.daysInput"),class:"demo"},{toolbar:i(()=>[s(l(k),{label:a.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:n[0]||(n[0]=t=>a.$router.push("/form"))},null,8,["label"])]),default:i(()=>[e(),r("section",null,[r("h2",null,m(a.$t("form.label.basicInput")),1),e(),r("div",U,[s(l(c),{modelValue:l(d).basic,"onUpdate:modelValue":n[1]||(n[1]=t=>l(d).basic=t),placeholder:a.$t("form.placeholder.days"),"onUpdate:date":n[2]||(n[2]=t=>o.basic=t)},null,8,["modelValue","placeholder"]),e(),o.basic?(p(),v("div",E,m(o.basic),1)):b("",!0),e(),s(f,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),r("section",null,[r("h2",null,m(a.$t("form.label.labelInput")),1),e(),r("div",S,[s(l(h),null,{default:i(()=>[s(l(c),{modelValue:l(d).label,"onUpdate:modelValue":n[3]||(n[3]=t=>l(d).label=t),label:a.$t("form.label.arrivalDate"),placeholder:a.$t("form.placeholder.days"),"onUpdate:date":n[4]||(n[4]=t=>o.label=t)},null,8,["modelValue","label","placeholder"])]),_:1}),e(),o.label?(p(),v("div",C,m(o.label),1)):b("",!0),e(),s(f,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),r("section",null,[r("h2",null,m(a.$t("form.label.disabled")),1),e(),r("div",w,[s(l(h),null,{default:i(()=>[s(l(c),{modelValue:l(d).disabled,"onUpdate:modelValue":n[5]||(n[5]=t=>l(d).disabled=t),label:a.$t("form.label.appointmentDate"),placeholder:a.$t("form.placeholder.days"),disabled:"","onUpdate:date":n[6]||(n[6]=t=>o.disabled=t)},null,8,["modelValue","label","placeholder"])]),_:1}),e(),o.disabled?(p(),v("div",B,m(o.disabled),1)):b("",!0),e(),s(f,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),r("section",null,[r("h2",null,m(a.$t("form.label.customValidationInput")),1),e(),r("div",N,[s(l(h),null,{default:i(()=>[s(l(c),{modelValue:l(d).validationInput,"onUpdate:modelValue":n[7]||(n[7]=t=>l(d).validationInput=t),label:a.$t("form.label.expiresAfter"),placeholder:a.$t("form.placeholder.days"),schema:l(g),"onUpdate:date":n[8]||(n[8]=t=>o.validationInput=t)},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e(),o.validationInput&&l(d).validationInput>0&&l(d).validationInput<=365?(p(),v("div",P,m(o.validationInput),1)):b("",!0),e(),s(f,{language:"html-vue"},{default:i(()=>[e(`
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

import{a as c,o as h}from"./DzangolabVue3Form.es-CpaDvokg.js";import{d as $,z as V,A as D,B as I,r as i,s as _,j as z,o as p,w as u,C as e,e as o,t as m,g as r,a as v,b,u as n,D as k}from"./index-CVjUtB44.js";import{_ as F}from"./FormPage.vue_vue_type_style_index_0_lang-DaPY-vu5.js";const U={class:"section-content"},C={key:0,class:"result-date"},E={class:"section-content"},S={key:0,class:"result-date"},B={class:"section-content"},w={key:0,class:"result-date"},A={class:"section-content"},N={key:0,class:"result-date"},P={name:"DaysInput"},G=$({...P,setup(q){const{t:y}=V(),g=D.coerce.number({invalid_type_error:y("form.errors.number.required")}).min(1,{message:y("form.errors.daysInput.invalid")}).max(365,{message:y("form.errors.daysInput.invalid")}),s=I({basic:i(),disabled:i(),label:i(),validationInput:i()});let d=I({basic:i(),disabled:i(30),label:i(),validationInput:i()});return(a,l)=>{const f=_("SshPre");return p(),z(F,{title:a.$t("form.label.daysInput"),class:"demo"},{toolbar:u(()=>[r(n(k),{label:a.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=t=>a.$router.push("/form"))},null,8,["label"])]),default:u(()=>[e(),o("section",null,[o("h2",null,m(a.$t("form.label.basicInput")),1),e(),o("div",U,[r(n(c),{modelValue:n(d).basic,"onUpdate:modelValue":l[1]||(l[1]=t=>n(d).basic=t),placeholder:a.$t("form.placeholder.days"),"onUpdate:date":l[2]||(l[2]=t=>s.basic=t)},null,8,["modelValue","placeholder"]),e(),s.basic?(p(),v("div",C,m(s.basic),1)):b("",!0),e(),r(f,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),o("section",null,[o("h2",null,m(a.$t("form.label.labelInput")),1),e(),o("div",E,[r(n(h),null,{default:u(()=>[r(n(c),{modelValue:n(d).label,"onUpdate:modelValue":l[3]||(l[3]=t=>n(d).label=t),label:a.$t("form.label.arrivalDate"),placeholder:a.$t("form.placeholder.days"),"onUpdate:date":l[4]||(l[4]=t=>s.label=t)},null,8,["modelValue","label","placeholder"])]),_:1}),e(),s.label?(p(),v("div",S,m(s.label),1)):b("",!0),e(),r(f,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),o("section",null,[o("h2",null,m(a.$t("form.label.disabled")),1),e(),o("div",B,[r(n(h),null,{default:u(()=>[r(n(c),{modelValue:n(d).disabled,"onUpdate:modelValue":l[5]||(l[5]=t=>n(d).disabled=t),label:a.$t("form.label.appointmentDate"),placeholder:a.$t("form.placeholder.days"),disabled:"","onUpdate:date":l[6]||(l[6]=t=>s.disabled=t)},null,8,["modelValue","label","placeholder"])]),_:1}),e(),s.disabled?(p(),v("div",w,m(s.disabled),1)):b("",!0),e(),r(f,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),o("section",null,[o("h2",null,m(a.$t("form.label.customValidationInput")),1),e(),o("div",A,[r(n(h),null,{default:u(()=>[r(n(c),{modelValue:n(d).validationInput,"onUpdate:modelValue":l[7]||(l[7]=t=>n(d).validationInput=t),label:a.$t("form.label.expiresAfter"),placeholder:a.$t("form.placeholder.days"),schema:n(g),"onUpdate:date":l[8]||(l[8]=t=>s.validationInput=t)},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e(),s.validationInput&&n(d).validationInput>0&&n(d).validationInput<=365?(p(),v("div",N,m(s.validationInput),1)):b("",!0),e(),r(f,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{G as default};

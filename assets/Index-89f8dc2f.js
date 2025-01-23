import{b as d,t as f}from"./DzangolabVue3Form.es-62d0fe7c.js";import{d as V,a7 as N,p as $,j as p,K as v,o as _,c as z,w as u,L as t,C as e,M as s,f as o,E as n}from"./index-4dbfb8c7-0110dc13.js";import{m as E}from"./index-e113b1c1.js";import{_ as F}from"./FormPage.vue_vue_type_style_index_0_lang-5406f432.js";const O={class:"section-content"},w={class:"section-content"},M={class:"section-content"},U={class:"section-content"},k={class:"section-content"},S={class:"section-content"},y={class:"section-content"},q={name:"NumberInputField"},D=V({...q,setup(C){const{t:b}=N(),h=E.coerce.number({invalid_type_error:b("form.errors.number.invalid")}).gte(1,b("form.errors.number.invalid")).lte(100,b("form.errors.number.invalid")),g={invalid:b("form.errors.number.invalid"),required:b("form.errors.number.required")},c={min:1,max:100,allow_leading_zeroes:!1};let a=$({customValidationInput:p(),disabled:p(100),input:p(),inputWithValidation:p(),noLabelInput:p(),textInput:p()});return(l,r)=>{const I=v("router-link"),i=v("SshPre");return _(),z(F,{title:l.$t("form.label.number"),class:"demo"},{toolbar:u(()=>[t(I,{to:{name:"form"},class:"back"},{default:u(()=>[e(s(l.$t("common.back")),1)]),_:1})]),default:u(()=>[e(),o("section",null,[o("h2",null,s(l.$t("form.label.basicInput")),1),e(),o("div",O,[t(n(d),{modelValue:n(a).noLabelInput,"onUpdate:modelValue":r[0]||(r[0]=m=>n(a).noLabelInput=m),placeholder:l.$t("form.placeholder.number")},null,8,["modelValue","placeholder"]),e(),t(i,{language:"html-vue"},{default:u(()=>[e(`
          <template>
            <NumberInput 
              v-model="input"
              placeholder="Enter a number"
            />
          </template>

          <script setup lang="ts">
          import { NumberInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),o("section",null,[o("h2",null,s(l.$t("form.label.labelInput")),1),e(),o("div",w,[t(n(d),{modelValue:n(a).input,"onUpdate:modelValue":r[1]||(r[1]=m=>n(a).input=m),label:l.$t("form.label.number"),placeholder:l.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"]),e(),t(i,{language:"html-vue"},{default:u(()=>[e(`
          <template>
            <NumberInput 
              v-model="input"
              label="Number"
              placeholder="Enter a number"
            />
          </template>

          <script setup lang="ts">
          import { NumberInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),o("section",null,[o("h2",null,s(l.$t("form.label.disabled")),1),e(),o("div",M,[t(n(d),{modelValue:n(a).disabled,"onUpdate:modelValue":r[2]||(r[2]=m=>n(a).disabled=m),label:l.$t("form.label.number"),disabled:""},null,8,["modelValue","label"]),e(),t(i,{language:"html-vue"},{default:u(()=>[e(`
          <template>
            <NumberInput 
              v-model="input"
              label="Number"
              disabled
            />
          </template>

          <script setup lang="ts">
          import { NumberInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),o("section",null,[o("h2",null,s(l.$t("form.label.withI18n")),1),e(),o("div",U,[t(n(d),{modelValue:n(a).input,"onUpdate:modelValue":r[3]||(r[3]=m=>n(a).input=m),label:l.$t("form.label.number"),placeholder:l.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"]),e(),t(i,{language:"html-vue"},{default:u(()=>[e(`
          <template>
            <NumberInput 
              v-model="input"
              :label="t('form.label.number')"
              :placeholder="t('form.placeholder.number')"
            />
          </template>

          <script setup lang="ts">
          import { NumberInput } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)]),_:1}),e()])]),e(),o("section",null,[o("h2",null,s(l.$t("form.label.inputWithValidation")),1),e(),o("div",k,[t(n(f),null,{default:u(()=>[t(n(d),{modelValue:n(a).inputWithValidation,"onUpdate:modelValue":r[4]||(r[4]=m=>n(a).inputWithValidation=m),label:l.$t("form.label.number"),options:n(c),placeholder:l.$t("form.placeholder.number")},null,8,["modelValue","label","options","placeholder"])]),_:1}),e(),t(i,{language:"html-vue"},{default:u(()=>[e(`
          <Form>
            <NumberInput 
              v-model="input"
              :options="validationOptions"
              label="Number"
              placeholder="Enter a number"
            />
          </Form>

          <script setup lang="ts">
          import { Form, NumberInput } from "@dzangolab/vue3-form";
          
          import type { IsIntOptions } from "@dzangolab/vue3-form";
  
          const validationOptions = {
            min: 1,
            max: 100,
            allow_leading_zeroes: false,
          } as IsIntOptions;
          <\/script>
        `)]),_:1}),e()])]),e(),o("section",null,[o("h2",null,s(l.$t("form.label.customErrorMessageInput")),1),e(),o("div",S,[t(n(f),null,{default:u(()=>[t(n(d),{modelValue:n(a).textInput,"onUpdate:modelValue":r[5]||(r[5]=m=>n(a).textInput=m),label:l.$t("form.label.number"),"error-messages":n(g),options:n(c),placeholder:l.$t("form.placeholder.number")},null,8,["modelValue","label","error-messages","options","placeholder"])]),_:1}),e(),t(i,{language:"html-vue"},{default:u(()=>[e(`
          <Form>
            <NumberInput 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Number"
              placeholder="Enter a number"
            />
          </Form>

          <script setup lang="ts">
          import { Form, NumberInput } from "@dzangolab/vue3-form";

          import type { NumberErrorMessages, IsIntOptions } from "@dzangolab/vue3-form";

          const validationMessages = {
            invalid: "Please provide a number between 1 to 100",
            required: "The field is required",
          } as NumberErrorMessages;

          const validationOptions = {
            min: 1,
            max: 100,
            allow_leading_zeroes: false,
          } as IsIntOptions;
          <\/script>
        `)]),_:1}),e()])]),e(),o("section",null,[o("h2",null,s(l.$t("form.label.customValidationInput")),1),e(),o("div",y,[t(n(f),null,{default:u(()=>[t(n(d),{modelValue:n(a).customValidationInput,"onUpdate:modelValue":r[6]||(r[6]=m=>n(a).customValidationInput=m),label:l.$t("form.label.number"),placeholder:l.$t("form.placeholder.number"),schema:n(h),name:"number"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e(),t(i,{language:"html-vue"},{default:u(()=>[e(`
          <Form>
            <NumberInput 
              v-model="input"
              :schema="inputSchema"
              label="Number"
              placeholder="Enter a number"
              name="number"
            />
          </Form>

          <script setup lang="ts">
          import { Form, NumberInput } from "@dzangolab/vue3-form";
          import { z } from "zod";

          const invalidNumberError = "Please provide a number between 1 to 100";

          const inputSchema =  z.coerce
            .number({invalid_type_error: invalidNumberError})
            .gte(1, invalidNumberError)
            .lte(100, invalidNumberError);
          <\/script>
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{D as default};

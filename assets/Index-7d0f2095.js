import{e as d,F as p}from"./DzangolabVue3Form.es-aac43f24.js";import{d as V,a7 as N,p as _,j as b,K as v,o as $,c as F,w as r,L as l,C as n,M as s,f as t,E as e}from"./index-66214709-ea91fece.js";import{m as z}from"./index-d21a9980.js";import{_ as E}from"./FormPage.vue_vue_type_style_index_0_lang-704fa6d5.js";const O={class:"section-content"},w={class:"section-content"},M={class:"section-content"},U={class:"section-content"},k={class:"section-content"},S={class:"section-content"},y={class:"section-content"},q={name:"NumberInputField"},D=V({...q,setup(C){const{t:f}=N(),h=z.coerce.number({invalid_type_error:f("form.errors.number.invalid")}).gte(1,f("form.errors.number.invalid")).lte(100,f("form.errors.number.invalid")),g={invalid:f("form.errors.number.invalid"),required:f("form.errors.number.required")},c={min:1,max:100,allow_leading_zeroes:!1};let a=_({customValidationInput:b(),disabled:b(100),input:b(),inputWithValidation:b(),noLabelInput:b(),textInput:b()});return(o,u)=>{const I=v("router-link"),i=v("SshPre");return $(),F(E,{title:o.$t("form.label.number"),class:"demo"},{toolbar:r(()=>[l(I,{to:{name:"form"},class:"back"},{default:r(()=>[n(s(o.$t("common.back")),1)]),_:1})]),default:r(()=>[n(),t("section",null,[t("h2",null,s(o.$t("form.label.basicInput")),1),n(),t("div",O,[l(i,{language:"html-vue"},{default:r(()=>[n(`
          <Form>
            <NumberInput 
              v-model="input"
              placeholder="Enter a number"
            />
          </Form>

          <script setup lang="ts">
          import { NumberInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),n(),l(e(d),null,{default:r(()=>[l(e(p),{modelValue:e(a).noLabelInput,"onUpdate:modelValue":u[0]||(u[0]=m=>e(a).noLabelInput=m),placeholder:o.$t("form.placeholder.number")},null,8,["modelValue","placeholder"])]),_:1})])]),n(),t("section",null,[t("h2",null,s(o.$t("form.label.labelInput")),1),n(),t("div",w,[l(i,{language:"html-vue"},{default:r(()=>[n(`
          <Form>
            <NumberInput 
              v-model="input"
              label="Number"
              placeholder="Enter a number"
            />
          </Form>

          <script setup lang="ts">
          import { NumberInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),n(),l(e(d),null,{default:r(()=>[l(e(p),{modelValue:e(a).input,"onUpdate:modelValue":u[1]||(u[1]=m=>e(a).input=m),label:o.$t("form.label.number"),placeholder:o.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"])]),_:1})])]),n(),t("section",null,[t("h2",null,s(o.$t("form.label.disabled")),1),n(),t("div",M,[l(i,{language:"html-vue"},{default:r(()=>[n(`
          <Form>
            <NumberInput 
              v-model="input"
              label="Number"
              disabled
            />
          </Form>

          <script setup lang="ts">
          import { NumberInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),n(),l(e(d),null,{default:r(()=>[l(e(p),{modelValue:e(a).disabled,"onUpdate:modelValue":u[2]||(u[2]=m=>e(a).disabled=m),label:o.$t("form.label.number"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),n(),t("section",null,[t("h2",null,s(o.$t("form.label.withI18n")),1),n(),t("div",U,[l(i,{language:"html-vue"},{default:r(()=>[n(`
          <Form>
            <NumberInput 
              v-model="input"
              :label="t('form.label.number')"
              :placeholder="t('form.placeholder.number')"
            />
          </Form>

          <script setup lang="ts">
          import { NumberInput } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)]),_:1}),n(),l(e(d),null,{default:r(()=>[l(e(p),{modelValue:e(a).input,"onUpdate:modelValue":u[3]||(u[3]=m=>e(a).input=m),label:o.$t("form.label.number"),placeholder:o.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"])]),_:1})])]),n(),t("section",null,[t("h2",null,s(o.$t("form.label.inputWithValidation")),1),n(),t("div",k,[l(i,{language:"html-vue"},{default:r(()=>[n(`
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
        `)]),_:1}),n(),l(e(d),null,{default:r(()=>[l(e(p),{modelValue:e(a).inputWithValidation,"onUpdate:modelValue":u[4]||(u[4]=m=>e(a).inputWithValidation=m),label:o.$t("form.label.number"),options:e(c),placeholder:o.$t("form.placeholder.number")},null,8,["modelValue","label","options","placeholder"])]),_:1})])]),n(),t("section",null,[t("h2",null,s(o.$t("form.label.customErrorMessageInput")),1),n(),t("div",S,[l(i,{language:"html-vue"},{default:r(()=>[n(`
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
        `)]),_:1}),n(),l(e(d),null,{default:r(()=>[l(e(p),{modelValue:e(a).textInput,"onUpdate:modelValue":u[5]||(u[5]=m=>e(a).textInput=m),label:o.$t("form.label.number"),"error-messages":e(g),options:e(c),placeholder:o.$t("form.placeholder.number")},null,8,["modelValue","label","error-messages","options","placeholder"])]),_:1})])]),n(),t("section",null,[t("h2",null,s(o.$t("form.label.customValidationInput")),1),n(),t("div",y,[l(i,{language:"html-vue"},{default:r(()=>[n(`
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
        `)]),_:1}),n(),l(e(d),null,{default:r(()=>[l(e(p),{modelValue:e(a).customValidationInput,"onUpdate:modelValue":u[6]||(u[6]=m=>e(a).customValidationInput=m),label:o.$t("form.label.number"),placeholder:o.$t("form.placeholder.number"),schema:e(h),name:"number"},null,8,["modelValue","label","placeholder","schema"])]),_:1})])])]),_:1},8,["title"])}}});export{D as default};

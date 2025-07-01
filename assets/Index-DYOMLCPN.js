import{K as s,a as f}from"./DzangolabVue3Form.es-c1DH9UV2.js";import{d as V,J as N,L as $,M as z,r as d,I as E,e as F,o as O,i as m,E as e,f as o,t as p,g as r,u as l,x as w}from"./index-tzCncWcY.js";import{_ as M}from"./FormPage.vue_vue_type_style_index_0_lang-DR18Wsdj.js";const U={class:"section-content"},y={class:"section-content"},S={class:"section-content"},k={class:"section-content"},q={class:"section-content"},C={class:"section-content"},L={class:"section-content"},P={name:"NumberInputField"},T=V({...P,setup(W){const{t:b}=N(),g=$.coerce.number({invalid_type_error:b("form.errors.number.invalid")}).gte(1,b("form.errors.number.invalid")).lte(100,b("form.errors.number.invalid")),I={invalid:b("form.errors.number.invalid"),required:b("form.errors.number.required")},v={min:1,max:100,allow_leading_zeroes:!1};let a=z({customValidationInput:d(),disabled:d(100),i18nInput:d(),input:d(),inputWithValidation:d(),noLabelInput:d(),textInput:d()});return(t,n)=>{const i=E("SshPre");return O(),F(M,{title:t.$t("form.label.number"),class:"demo"},{toolbar:m(()=>[r(l(w),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:n[0]||(n[0]=u=>t.$router.push("/form"))},null,8,["label"])]),default:m(()=>[n[29]||(n[29]=e()),o("section",null,[o("h2",null,p(t.$t("form.label.basicInput")),1),n[10]||(n[10]=e()),o("div",U,[r(l(s),{modelValue:l(a).noLabelInput,"onUpdate:modelValue":n[1]||(n[1]=u=>l(a).noLabelInput=u),placeholder:t.$t("form.placeholder.number")},null,8,["modelValue","placeholder"]),n[9]||(n[9]=e()),r(i,{language:"html-vue"},{default:m(()=>n[8]||(n[8]=[e(`
          <template>
            <NumberInput 
              v-model="input"
              placeholder="Enter a number"
            />
          </template>

          <script setup lang="ts">
          import { NumberInput } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),n[30]||(n[30]=e()),o("section",null,[o("h2",null,p(t.$t("form.label.labelInput")),1),n[13]||(n[13]=e()),o("div",y,[r(l(s),{modelValue:l(a).input,"onUpdate:modelValue":n[2]||(n[2]=u=>l(a).input=u),label:t.$t("form.label.number"),placeholder:t.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"]),n[12]||(n[12]=e()),r(i,{language:"html-vue"},{default:m(()=>n[11]||(n[11]=[e(`
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
        `)])),_:1})])]),n[31]||(n[31]=e()),o("section",null,[o("h2",null,p(t.$t("form.label.disabled")),1),n[16]||(n[16]=e()),o("div",S,[r(l(s),{modelValue:l(a).disabled,"onUpdate:modelValue":n[3]||(n[3]=u=>l(a).disabled=u),label:t.$t("form.label.number"),disabled:""},null,8,["modelValue","label"]),n[15]||(n[15]=e()),r(i,{language:"html-vue"},{default:m(()=>n[14]||(n[14]=[e(`
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
        `)])),_:1})])]),n[32]||(n[32]=e()),o("section",null,[o("h2",null,p(t.$t("form.label.withI18n")),1),n[19]||(n[19]=e()),o("div",k,[r(l(s),{modelValue:l(a).i18nInput,"onUpdate:modelValue":n[4]||(n[4]=u=>l(a).i18nInput=u),label:t.$t("form.label.number"),placeholder:t.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"]),n[18]||(n[18]=e()),r(i,{language:"html-vue"},{default:m(()=>n[17]||(n[17]=[e(`
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
        `)])),_:1})])]),n[33]||(n[33]=e()),o("section",null,[o("h2",null,p(t.$t("form.label.inputWithValidation")),1),n[22]||(n[22]=e()),o("div",q,[r(l(f),null,{default:m(()=>[r(l(s),{modelValue:l(a).inputWithValidation,"onUpdate:modelValue":n[5]||(n[5]=u=>l(a).inputWithValidation=u),label:t.$t("form.label.number"),options:v,placeholder:t.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"])]),_:1}),n[21]||(n[21]=e()),r(i,{language:"html-vue"},{default:m(()=>n[20]||(n[20]=[e(`
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
        `)])),_:1})])]),n[34]||(n[34]=e()),o("section",null,[o("h2",null,p(t.$t("form.label.customErrorMessageInput")),1),n[25]||(n[25]=e()),o("div",C,[r(l(f),null,{default:m(()=>[r(l(s),{modelValue:l(a).textInput,"onUpdate:modelValue":n[6]||(n[6]=u=>l(a).textInput=u),label:t.$t("form.label.number"),"error-messages":I,options:v,placeholder:t.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"])]),_:1}),n[24]||(n[24]=e()),r(i,{language:"html-vue"},{default:m(()=>n[23]||(n[23]=[e(`
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
        `)])),_:1})])]),n[35]||(n[35]=e()),o("section",null,[o("h2",null,p(t.$t("form.label.customValidationInput")),1),n[28]||(n[28]=e()),o("div",L,[r(l(f),null,{default:m(()=>[r(l(s),{modelValue:l(a).customValidationInput,"onUpdate:modelValue":n[7]||(n[7]=u=>l(a).customValidationInput=u),label:t.$t("form.label.number"),placeholder:t.$t("form.placeholder.number"),schema:l(g),name:"number"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),n[27]||(n[27]=e()),r(i,{language:"html-vue"},{default:m(()=>n[26]||(n[26]=[e(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{T as default};

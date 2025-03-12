import{g as i,F as f}from"./DzangolabVue3Form.es-BBoVMJ3J.js";import{d as V,B as N,C as $,D as z,r as p,z as E,e as F,o as O,w as m,E as e,f as t,t as d,i as r,u as l,j as w}from"./index-VvkgXLKV.js";import{_ as U}from"./FormPage.vue_vue_type_style_index_0_lang-DLHsBJI9.js";const y={class:"section-content"},M={class:"section-content"},S={class:"section-content"},C={class:"section-content"},k={class:"section-content"},q={class:"section-content"},B={class:"section-content"},P={name:"NumberInputField"},j=V({...P,setup(W){const{t:b}=N(),g=$.coerce.number({invalid_type_error:b("form.errors.number.invalid")}).gte(1,b("form.errors.number.invalid")).lte(100,b("form.errors.number.invalid")),I={invalid:b("form.errors.number.invalid"),required:b("form.errors.number.required")},v={min:1,max:100,allow_leading_zeroes:!1};let a=z({customValidationInput:p(),disabled:p(100),input:p(),inputWithValidation:p(),noLabelInput:p(),textInput:p()});return(o,n)=>{const s=E("SshPre");return O(),F(U,{title:o.$t("form.label.number"),class:"demo"},{toolbar:m(()=>[r(l(w),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:n[0]||(n[0]=u=>o.$router.push("/form"))},null,8,["label"])]),default:m(()=>[n[29]||(n[29]=e()),t("section",null,[t("h2",null,d(o.$t("form.label.basicInput")),1),n[10]||(n[10]=e()),t("div",y,[r(l(i),{modelValue:l(a).noLabelInput,"onUpdate:modelValue":n[1]||(n[1]=u=>l(a).noLabelInput=u),placeholder:o.$t("form.placeholder.number")},null,8,["modelValue","placeholder"]),n[9]||(n[9]=e()),r(s,{language:"html-vue"},{default:m(()=>n[8]||(n[8]=[e(`
          <template>
            <NumberInput 
              v-model="input"
              placeholder="Enter a number"
            />
          </template>

          <script setup lang="ts">
          import { NumberInput } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),n[30]||(n[30]=e()),t("section",null,[t("h2",null,d(o.$t("form.label.labelInput")),1),n[13]||(n[13]=e()),t("div",M,[r(l(i),{modelValue:l(a).input,"onUpdate:modelValue":n[2]||(n[2]=u=>l(a).input=u),label:o.$t("form.label.number"),placeholder:o.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"]),n[12]||(n[12]=e()),r(s,{language:"html-vue"},{default:m(()=>n[11]||(n[11]=[e(`
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
        `)])),_:1})])]),n[31]||(n[31]=e()),t("section",null,[t("h2",null,d(o.$t("form.label.disabled")),1),n[16]||(n[16]=e()),t("div",S,[r(l(i),{modelValue:l(a).disabled,"onUpdate:modelValue":n[3]||(n[3]=u=>l(a).disabled=u),label:o.$t("form.label.number"),disabled:""},null,8,["modelValue","label"]),n[15]||(n[15]=e()),r(s,{language:"html-vue"},{default:m(()=>n[14]||(n[14]=[e(`
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
        `)])),_:1})])]),n[32]||(n[32]=e()),t("section",null,[t("h2",null,d(o.$t("form.label.withI18n")),1),n[19]||(n[19]=e()),t("div",C,[r(l(i),{modelValue:l(a).input,"onUpdate:modelValue":n[4]||(n[4]=u=>l(a).input=u),label:o.$t("form.label.number"),placeholder:o.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"]),n[18]||(n[18]=e()),r(s,{language:"html-vue"},{default:m(()=>n[17]||(n[17]=[e(`
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
        `)])),_:1})])]),n[33]||(n[33]=e()),t("section",null,[t("h2",null,d(o.$t("form.label.inputWithValidation")),1),n[22]||(n[22]=e()),t("div",k,[r(l(f),null,{default:m(()=>[r(l(i),{modelValue:l(a).inputWithValidation,"onUpdate:modelValue":n[5]||(n[5]=u=>l(a).inputWithValidation=u),label:o.$t("form.label.number"),options:v,placeholder:o.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"])]),_:1}),n[21]||(n[21]=e()),r(s,{language:"html-vue"},{default:m(()=>n[20]||(n[20]=[e(`
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
        `)])),_:1})])]),n[34]||(n[34]=e()),t("section",null,[t("h2",null,d(o.$t("form.label.customErrorMessageInput")),1),n[25]||(n[25]=e()),t("div",q,[r(l(f),null,{default:m(()=>[r(l(i),{modelValue:l(a).textInput,"onUpdate:modelValue":n[6]||(n[6]=u=>l(a).textInput=u),label:o.$t("form.label.number"),"error-messages":I,options:v,placeholder:o.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"])]),_:1}),n[24]||(n[24]=e()),r(s,{language:"html-vue"},{default:m(()=>n[23]||(n[23]=[e(`
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
        `)])),_:1})])]),n[35]||(n[35]=e()),t("section",null,[t("h2",null,d(o.$t("form.label.customValidationInput")),1),n[28]||(n[28]=e()),t("div",B,[r(l(f),null,{default:m(()=>[r(l(i),{modelValue:l(a).customValidationInput,"onUpdate:modelValue":n[7]||(n[7]=u=>l(a).customValidationInput=u),label:o.$t("form.label.number"),placeholder:o.$t("form.placeholder.number"),schema:l(g),name:"number"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),n[27]||(n[27]=e()),r(s,{language:"html-vue"},{default:m(()=>n[26]||(n[26]=[e(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{j as default};

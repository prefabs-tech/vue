import{w as i,J as f}from"./DzangolabVue3Form.es-b047fed9.js";import{d as g,a5 as I,p as V,j as d,J as N,o as $,c as z,w as m,K as t,D as n,ao as E,W as e,f as o,L as p}from"./index-729398ab-97e0bd19.js";import{m as _}from"./index-10489b7d.js";import{_ as w}from"./FormPage.vue_vue_type_style_index_0_lang-0e434bf3.js";const F={class:"section-content"},O={class:"section-content"},U={class:"section-content"},y={class:"section-content"},M={class:"section-content"},S={class:"section-content"},W={class:"section-content"},k={name:"NumberInputField"},D=g({...k,setup(q){const{t:b}=I(),v=_.coerce.number({invalid_type_error:b("form.errors.number.invalid")}).gte(1,b("form.errors.number.invalid")).lte(100,b("form.errors.number.invalid")),h={invalid:b("form.errors.number.invalid"),required:b("form.errors.number.required")},c={min:1,max:100,allow_leading_zeroes:!1};let r=V({customValidationInput:d(),disabled:d(100),input:d(),inputWithValidation:d(),noLabelInput:d(),textInput:d()});return(l,a)=>{const s=N("SshPre");return $(),z(w,{title:l.$t("form.label.number"),class:"demo"},{toolbar:m(()=>[t(n(E),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:a[0]||(a[0]=u=>l.$router.push("/form"))},null,8,["label"])]),default:m(()=>[e(),o("section",null,[o("h2",null,p(l.$t("form.label.basicInput")),1),e(),o("div",F,[t(n(i),{modelValue:n(r).noLabelInput,"onUpdate:modelValue":a[1]||(a[1]=u=>n(r).noLabelInput=u),placeholder:l.$t("form.placeholder.number")},null,8,["modelValue","placeholder"]),e(),t(s,{language:"html-vue"},{default:m(()=>[e(`
          <template>
            <NumberInput 
              v-model="input"
              placeholder="Enter a number"
            />
          </template>

          <script setup lang="ts">
          import { NumberInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),o("section",null,[o("h2",null,p(l.$t("form.label.labelInput")),1),e(),o("div",O,[t(n(i),{modelValue:n(r).input,"onUpdate:modelValue":a[2]||(a[2]=u=>n(r).input=u),label:l.$t("form.label.number"),placeholder:l.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"]),e(),t(s,{language:"html-vue"},{default:m(()=>[e(`
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
        `)]),_:1}),e()])]),e(),o("section",null,[o("h2",null,p(l.$t("form.label.disabled")),1),e(),o("div",U,[t(n(i),{modelValue:n(r).disabled,"onUpdate:modelValue":a[3]||(a[3]=u=>n(r).disabled=u),label:l.$t("form.label.number"),disabled:""},null,8,["modelValue","label"]),e(),t(s,{language:"html-vue"},{default:m(()=>[e(`
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
        `)]),_:1}),e()])]),e(),o("section",null,[o("h2",null,p(l.$t("form.label.withI18n")),1),e(),o("div",y,[t(n(i),{modelValue:n(r).input,"onUpdate:modelValue":a[4]||(a[4]=u=>n(r).input=u),label:l.$t("form.label.number"),placeholder:l.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"]),e(),t(s,{language:"html-vue"},{default:m(()=>[e(`
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
        `)]),_:1}),e()])]),e(),o("section",null,[o("h2",null,p(l.$t("form.label.inputWithValidation")),1),e(),o("div",M,[t(n(f),null,{default:m(()=>[t(n(i),{modelValue:n(r).inputWithValidation,"onUpdate:modelValue":a[5]||(a[5]=u=>n(r).inputWithValidation=u),label:l.$t("form.label.number"),options:n(c),placeholder:l.$t("form.placeholder.number")},null,8,["modelValue","label","options","placeholder"])]),_:1}),e(),t(s,{language:"html-vue"},{default:m(()=>[e(`
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
        `)]),_:1}),e()])]),e(),o("section",null,[o("h2",null,p(l.$t("form.label.customErrorMessageInput")),1),e(),o("div",S,[t(n(f),null,{default:m(()=>[t(n(i),{modelValue:n(r).textInput,"onUpdate:modelValue":a[6]||(a[6]=u=>n(r).textInput=u),label:l.$t("form.label.number"),"error-messages":n(h),options:n(c),placeholder:l.$t("form.placeholder.number")},null,8,["modelValue","label","error-messages","options","placeholder"])]),_:1}),e(),t(s,{language:"html-vue"},{default:m(()=>[e(`
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
        `)]),_:1}),e()])]),e(),o("section",null,[o("h2",null,p(l.$t("form.label.customValidationInput")),1),e(),o("div",W,[t(n(f),null,{default:m(()=>[t(n(i),{modelValue:n(r).customValidationInput,"onUpdate:modelValue":a[7]||(a[7]=u=>n(r).customValidationInput=u),label:l.$t("form.label.number"),placeholder:l.$t("form.placeholder.number"),schema:n(v),name:"number"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e(),t(s,{language:"html-vue"},{default:m(()=>[e(`
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

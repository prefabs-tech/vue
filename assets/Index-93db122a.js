import{m as N,e as d,Z as p}from"./DzangolabVue3Form.es-8d7c7642.js";import{d as _,u as $,b as F,e as b,r as f,o as y,c as z,w as a,f as l,g as n,t as s,a as t,h as e}from"./index-17339f3a.js";const E={class:"section-content"},S={class:"section-content"},w={class:"section-content"},O={class:"section-content"},U={class:"section-content"},k={class:"section-content"},M={class:"section-content"},P={class:"section-content"},q={name:"NumberInputField"},L=_({...q,setup(W){const{t:c}=$(),g=N.coerce.number({invalid_type_error:c("form.errors.number.invalid")}).gte(1,c("form.errors.number.invalid")).lte(100,c("form.errors.number.invalid")),h={invalid:c("form.errors.number.invalid"),required:c("form.errors.number.required")},v={min:1,max:100,allow_leading_zeroes:!1};let r=F({customStyleInput:b(),customValidationInput:b(),disabled:b(100),input:b(),inputWithValidation:b(),noLabelInput:b(),textInput:b()});return(o,u)=>{const I=f("router-link"),i=f("SshPre"),V=f("Page");return y(),z(V,{title:o.$t("form.label.number"),class:"demo"},{toolbar:a(()=>[l(I,{to:{name:"form"},class:"back"},{default:a(()=>[n(s(o.$t("common.back")),1)]),_:1})]),default:a(()=>[n(),t("section",null,[t("h2",null,s(o.$t("form.label.basicInput")),1),n(),t("div",E,[l(i,{language:"html-vue"},{default:a(()=>[n(`
          <Form>
            <NumberInput 
              v-model="input"
              placeholder="Enter a number"
            />
          </Form>

          <script setup lang="ts">
          import { NumberInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),n(),l(e(p),null,{default:a(()=>[l(e(d),{modelValue:e(r).noLabelInput,"onUpdate:modelValue":u[0]||(u[0]=m=>e(r).noLabelInput=m),placeholder:o.$t("form.placeholder.number")},null,8,["modelValue","placeholder"])]),_:1})])]),n(),t("section",null,[t("h2",null,s(o.$t("form.label.labelInput")),1),n(),t("div",S,[l(i,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),l(e(p),null,{default:a(()=>[l(e(d),{modelValue:e(r).input,"onUpdate:modelValue":u[1]||(u[1]=m=>e(r).input=m),label:o.$t("form.label.number"),placeholder:o.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"])]),_:1})])]),n(),t("section",null,[t("h2",null,s(o.$t("form.label.disabled")),1),n(),t("div",w,[l(i,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),l(e(p),null,{default:a(()=>[l(e(d),{modelValue:e(r).disabled,"onUpdate:modelValue":u[2]||(u[2]=m=>e(r).disabled=m),label:o.$t("form.label.number"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),n(),t("section",null,[t("h2",null,s(o.$t("form.label.withI18n")),1),n(),t("div",O,[l(i,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),l(e(p),null,{default:a(()=>[l(e(d),{modelValue:e(r).input,"onUpdate:modelValue":u[3]||(u[3]=m=>e(r).input=m),label:o.$t("form.label.number"),placeholder:o.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"])]),_:1})])]),n(),t("section",null,[t("h2",null,s(o.$t("form.label.inputWithValidation")),1),n(),t("div",U,[l(i,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),l(e(p),null,{default:a(()=>[l(e(d),{modelValue:e(r).inputWithValidation,"onUpdate:modelValue":u[4]||(u[4]=m=>e(r).inputWithValidation=m),label:o.$t("form.label.number"),options:e(v),placeholder:o.$t("form.placeholder.number")},null,8,["modelValue","label","options","placeholder"])]),_:1})])]),n(),t("section",null,[t("h2",null,s(o.$t("form.label.customErrorMessageInput")),1),n(),t("div",k,[l(i,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),l(e(p),null,{default:a(()=>[l(e(d),{modelValue:e(r).textInput,"onUpdate:modelValue":u[5]||(u[5]=m=>e(r).textInput=m),label:o.$t("form.label.number"),"error-messages":e(h),options:e(v),placeholder:o.$t("form.placeholder.number")},null,8,["modelValue","label","error-messages","options","placeholder"])]),_:1})])]),n(),t("section",null,[t("h2",null,s(o.$t("form.label.customValidationInput")),1),n(),t("div",M,[l(i,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),l(e(p),null,{default:a(()=>[l(e(d),{modelValue:e(r).customValidationInput,"onUpdate:modelValue":u[6]||(u[6]=m=>e(r).customValidationInput=m),label:o.$t("form.label.number"),placeholder:o.$t("form.placeholder.number"),schema:e(g),name:"number"},null,8,["modelValue","label","placeholder","schema"])]),_:1})])]),n(),t("section",null,[t("h2",null,s(o.$t("form.label.customStyleInput")),1),n(),t("div",P,[l(i,{language:"html-vue"},{default:a(()=>[n(`
          <Form>
            <NumberInput 
              v-model="input"
              class="custom-style-input"
              label="Number"
              placeholder="Enter a number"
            />
          </Form>

          <script setup lang="ts">
          import { NumberInput } from "@dzangolab/vue3-form";
          <\/script>

          <style>
          .custom-style-input input {
            --_input-field-border-color: #007aff;
            --_input-field-border-radius: 0.5em;
            --_input-field-padding-h: 0.5em;
            --_input-field-padding-v: 0.5em;

            color: #007aff;
          }

          .custom-style-input input:focus {
            box-shadow: 0 0 0 0.25rem #03449e9a;
          }
          </style>
        `)]),_:1}),n(),l(e(p),null,{default:a(()=>[l(e(d),{modelValue:e(r).customStyleInput,"onUpdate:modelValue":u[7]||(u[7]=m=>e(r).customStyleInput=m),label:o.$t("form.label.number"),placeholder:o.$t("form.placeholder.number"),class:"custom-style-input"},null,8,["modelValue","label","placeholder"])]),_:1})])])]),_:1},8,["title"])}}});export{L as default};

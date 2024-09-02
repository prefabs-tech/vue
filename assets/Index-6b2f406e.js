import{d as V,u as N,b as _,e as i,o as $,c as y,w as s,a as r,t as d,f as n,g as t,h as e,r as g}from"./index-3bb8d7f9.js";import{m as z,Q as p,z as f}from"./DzangolabVue3Form.es-ceb02955.js";const E={class:"demo-section"},F={class:"demo-section"},S={class:"demo-section"},O={class:"demo-section"},w={class:"demo-section"},U={class:"demo-section"},M={class:"demo-section"},P={name:"NumberInputField"},C=V({...P,setup(q){const{t:b}=N(),v=z.coerce.number({invalid_type_error:b("form.errors.number.invalid")}).gte(1,b("form.errors.number.invalid")).lte(100,b("form.errors.number.invalid")),h={invalid:b("form.errors.number.invalid"),required:b("form.errors.number.required")},c={min:1,max:100,allow_leading_zeroes:!1};let o=_({customStyleInput:i(),customValidationInput:i(),disabled:i(100),input:i(),inputWithValidation:i(),noLabelInput:i(),textInput:i()});return(l,a)=>{const u=g("SshPre"),I=g("Page");return $(),y(I,{title:l.$t("form.label.number")},{default:s(()=>[r("section",E,[r("h3",null,d(l.$t("form.label.basicInput")),1),n(),t(u,{language:"html-vue"},{default:s(()=>[n(`
        <template>
          <NumberInput 
            v-model="input"
            placeholder="Enter a number"
          />
        </template>

        <script setup lang="ts">
        import { NumberInput } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),n(),t(e(p),{modelValue:e(o).noLabelInput,"onUpdate:modelValue":a[0]||(a[0]=m=>e(o).noLabelInput=m),placeholder:l.$t("form.placeholder.number"),class:"form-field"},null,8,["modelValue","placeholder"])]),n(),r("section",F,[r("h3",null,d(l.$t("form.label.labelInput")),1),n(),t(u,{language:"html-vue"},{default:s(()=>[n(`
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
      `)]),_:1}),n(),t(e(p),{modelValue:e(o).input,"onUpdate:modelValue":a[1]||(a[1]=m=>e(o).input=m),label:l.$t("form.label.number"),placeholder:l.$t("form.placeholder.number"),class:"form-field"},null,8,["modelValue","label","placeholder"])]),n(),r("section",S,[r("h3",null,d(l.$t("form.label.disabled")),1),n(),t(u,{language:"html-vue"},{default:s(()=>[n(`
        <template>
          <NumberInput 
            v-model="input"
            label="Disabled"
            disabled
          />
        </template>

        <script setup lang="ts">
        import { NumberInput } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),n(),t(e(p),{modelValue:e(o).disabled,"onUpdate:modelValue":a[2]||(a[2]=m=>e(o).disabled=m),label:l.$t("form.label.disabled"),class:"form-field",disabled:""},null,8,["modelValue","label"])]),n(),r("section",O,[r("h3",null,d(l.$t("form.label.inputWithValidation")),1),n(),t(u,{language:"html-vue"},{default:s(()=>[n(`
        <template>
          <Form>
            <NumberInput 
              v-model="input"
              :options="validationOptions"
              label="Number"
              placeholder="Enter a number"
            />
          </Form>
        </template>

        <script setup lang="ts">
        import { Form, NumberInput } from "@dzangolab/vue3-form";
        
        import type { IsIntOptions } from "@dzangolab/vue3-form";

        const validationOptions = {
          min: 1,
          max: 100,
          allow_leading_zeroes: false,
        } as IsIntOptions;
        <\/script>
      `)]),_:1}),n(),t(e(f),null,{default:s(()=>[t(e(p),{modelValue:e(o).inputWithValidation,"onUpdate:modelValue":a[3]||(a[3]=m=>e(o).inputWithValidation=m),label:l.$t("form.label.number"),options:e(c),placeholder:l.$t("form.placeholder.number"),class:"form-field"},null,8,["modelValue","label","options","placeholder"])]),_:1})]),n(),r("section",w,[r("h3",null,d(l.$t("form.label.customErrorMessageInput")),1),n(),t(u,{language:"html-vue"},{default:s(()=>[n(`
        <template>
          <Form>
            <NumberInput 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Number"
              placeholder="Enter a number"
            />
          </Form>
        </template>

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
      `)]),_:1}),n(),t(e(f),null,{default:s(()=>[t(e(p),{modelValue:e(o).textInput,"onUpdate:modelValue":a[4]||(a[4]=m=>e(o).textInput=m),label:l.$t("form.label.number"),"error-messages":e(h),options:e(c),placeholder:l.$t("form.placeholder.number"),class:"form-field"},null,8,["modelValue","label","error-messages","options","placeholder"])]),_:1})]),n(),r("section",U,[r("h3",null,d(l.$t("form.label.customValidationInput")),1),n(),t(u,{language:"html-vue"},{default:s(()=>[n(`
        <template>
          <Form>
            <NumberInput 
              v-model="input"
              :schema="inputSchema"
              label="Number"
              placeholder="Enter a number"
              name="number"
            />
          </Form>
        </template>

        <script setup lang="ts">
        import { Form, NumberInput } from "@dzangolab/vue3-form";
        import { z } from "zod";

        const invalidNumberError = "Please provide a number between 1 to 100";

        const inputSchema =  z.coerce
          .number({invalid_type_error: invalidNumberError})
          .gte(1, invalidNumberError)
          .lte(100, invalidNumberError);
        <\/script>
      `)]),_:1}),n(),t(e(f),null,{default:s(()=>[t(e(p),{modelValue:e(o).customValidationInput,"onUpdate:modelValue":a[5]||(a[5]=m=>e(o).customValidationInput=m),label:l.$t("form.label.number"),placeholder:l.$t("form.placeholder.number"),schema:e(v),class:"form-field",name:"number"},null,8,["modelValue","label","placeholder","schema"])]),_:1})]),n(),r("section",M,[r("h3",null,d(l.$t("form.label.customStyleInput")),1),n(),t(u,{language:"html-vue"},{default:s(()=>[n(`
        <template>
          <NumberInput 
            v-model="input"
            class="custom-style-input"
            label="Number"
            placeholder="Enter a number"
          />
        </template>

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
      `)]),_:1}),n(),t(e(p),{modelValue:e(o).customStyleInput,"onUpdate:modelValue":a[6]||(a[6]=m=>e(o).customStyleInput=m),label:l.$t("form.label.number"),placeholder:l.$t("form.placeholder.number"),class:"form-field custom-style-input"},null,8,["modelValue","label","placeholder"])])]),_:1},8,["title"])}}});export{C as default};

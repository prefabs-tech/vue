import{T as i,$ as f}from"./PrefabsTechVue3Form.es-Dvoz3CDe.js";import{d as V,G as N,I as $,L as E,r as p,H as F,e as O,o as z,j as m,B as n,f as o,t as d,h as r,u as l,v as w}from"./index-eqhuq2Ig.js";import{_ as U}from"./FormPage.vue_vue_type_style_index_0_lang-CAt0bJG-.js";const y={class:"section-content"},M={class:"section-content"},S={class:"section-content"},h={class:"section-content"},k={class:"section-content"},q={class:"section-content"},B={class:"section-content"},C={name:"NumberInputField"},D=V({...C,setup(L){const{t:b}=N(),I=$.coerce.number({invalid_type_error:b("form.errors.number.invalid")}).gte(1,b("form.errors.number.invalid")).lte(100,b("form.errors.number.invalid")),g={invalid:b("form.errors.number.invalid"),required:b("form.errors.number.required")},v={min:1,max:100,allow_leading_zeroes:!1};let u=E({customValidationInput:p(),disabled:p(100),i18nInput:p(),input:p(),inputWithValidation:p(),noLabelInput:p(),textInput:p()});return(t,e)=>{const s=F("SshPre");return z(),O(U,{title:t.$t("form.label.number"),class:"demo"},{toolbar:m(()=>[r(l(w),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=a=>t.$router.push("/form"))},null,8,["label"])]),default:m(()=>[e[29]||(e[29]=n()),o("section",null,[o("h2",null,d(t.$t("form.label.basicInput")),1),e[10]||(e[10]=n()),o("div",y,[r(l(i),{modelValue:l(u).noLabelInput,"onUpdate:modelValue":e[1]||(e[1]=a=>l(u).noLabelInput=a),placeholder:t.$t("form.placeholder.number")},null,8,["modelValue","placeholder"]),e[9]||(e[9]=n()),r(s,{language:"html-vue"},{default:m(()=>e[8]||(e[8]=[n(`
          <template>
            <NumberInput 
              v-model="input"
              placeholder="Enter a number"
            />
          </template>

          <script setup lang="ts">
          import { NumberInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[30]||(e[30]=n()),o("section",null,[o("h2",null,d(t.$t("form.label.labelInput")),1),e[13]||(e[13]=n()),o("div",M,[r(l(i),{modelValue:l(u).input,"onUpdate:modelValue":e[2]||(e[2]=a=>l(u).input=a),label:t.$t("form.label.number"),placeholder:t.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"]),e[12]||(e[12]=n()),r(s,{language:"html-vue"},{default:m(()=>e[11]||(e[11]=[n(`
          <template>
            <NumberInput 
              v-model="input"
              label="Number"
              placeholder="Enter a number"
            />
          </template>

          <script setup lang="ts">
          import { NumberInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[31]||(e[31]=n()),o("section",null,[o("h2",null,d(t.$t("form.label.disabled")),1),e[16]||(e[16]=n()),o("div",S,[r(l(i),{modelValue:l(u).disabled,"onUpdate:modelValue":e[3]||(e[3]=a=>l(u).disabled=a),label:t.$t("form.label.number"),disabled:""},null,8,["modelValue","label"]),e[15]||(e[15]=n()),r(s,{language:"html-vue"},{default:m(()=>e[14]||(e[14]=[n(`
          <template>
            <NumberInput 
              v-model="input"
              label="Number"
              disabled
            />
          </template>

          <script setup lang="ts">
          import { NumberInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[32]||(e[32]=n()),o("section",null,[o("h2",null,d(t.$t("form.label.withI18n")),1),e[19]||(e[19]=n()),o("div",h,[r(l(i),{modelValue:l(u).i18nInput,"onUpdate:modelValue":e[4]||(e[4]=a=>l(u).i18nInput=a),label:t.$t("form.label.number"),placeholder:t.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"]),e[18]||(e[18]=n()),r(s,{language:"html-vue"},{default:m(()=>e[17]||(e[17]=[n(`
          <template>
            <NumberInput 
              v-model="input"
              :label="t('form.label.number')"
              :placeholder="t('form.placeholder.number')"
            />
          </template>

          <script setup lang="ts">
          import { NumberInput } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),e[33]||(e[33]=n()),o("section",null,[o("h2",null,d(t.$t("form.label.inputWithValidation")),1),e[22]||(e[22]=n()),o("div",k,[r(l(f),null,{default:m(()=>[r(l(i),{modelValue:l(u).inputWithValidation,"onUpdate:modelValue":e[5]||(e[5]=a=>l(u).inputWithValidation=a),label:t.$t("form.label.number"),options:v,placeholder:t.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"])]),_:1}),e[21]||(e[21]=n()),r(s,{language:"html-vue"},{default:m(()=>e[20]||(e[20]=[n(`
          <Form>
            <NumberInput 
              v-model="input"
              :options="validationOptions"
              label="Number"
              placeholder="Enter a number"
            />
          </Form>

          <script setup lang="ts">
          import { Form, NumberInput } from "@prefabs.tech/vue3-form";
          
          import type { IsIntOptions } from "@prefabs.tech/vue3-form";
  
          const validationOptions = {
            min: 1,
            max: 100,
            allow_leading_zeroes: false,
          } as IsIntOptions;
          <\/script>
        `)])),_:1})])]),e[34]||(e[34]=n()),o("section",null,[o("h2",null,d(t.$t("form.label.customErrorMessageInput")),1),e[25]||(e[25]=n()),o("div",q,[r(l(f),null,{default:m(()=>[r(l(i),{modelValue:l(u).textInput,"onUpdate:modelValue":e[6]||(e[6]=a=>l(u).textInput=a),label:t.$t("form.label.number"),"error-messages":g,options:v,placeholder:t.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"])]),_:1}),e[24]||(e[24]=n()),r(s,{language:"html-vue"},{default:m(()=>e[23]||(e[23]=[n(`
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
          import { Form, NumberInput } from "@prefabs.tech/vue3-form";

          import type { NumberErrorMessages, IsIntOptions } from "@prefabs.tech/vue3-form";

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
        `)])),_:1})])]),e[35]||(e[35]=n()),o("section",null,[o("h2",null,d(t.$t("form.label.customValidationInput")),1),e[28]||(e[28]=n()),o("div",B,[r(l(f),null,{default:m(()=>[r(l(i),{modelValue:l(u).customValidationInput,"onUpdate:modelValue":e[7]||(e[7]=a=>l(u).customValidationInput=a),label:t.$t("form.label.number"),placeholder:t.$t("form.placeholder.number"),schema:l(I),name:"number"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e[27]||(e[27]=n()),r(s,{language:"html-vue"},{default:m(()=>e[26]||(e[26]=[n(`
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
          import { Form, NumberInput } from "@prefabs.tech/vue3-form";
          import { z } from "zod";

          const invalidNumberError = "Please provide a number between 1 to 100";

          const inputSchema =  z.coerce
            .number({invalid_type_error: invalidNumberError})
            .gte(1, invalidNumberError)
            .lte(100, invalidNumberError);
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{D as default};

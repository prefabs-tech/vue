import{m as p,x as f}from"./PrefabsTechVue3Form.es-B8QyJ7mw.js";import{d as $,L as y,N as D,M as E,o as M,e as O,f as s,h as o,t as d,z as n,a as r,u as t,O as z,r as b}from"./index-BTg9-SpC.js";import{_ as F}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-Bb-RllU6.js";import{_ as S}from"./FormPage.vue_vue_type_style_index_0_lang-DYLn7cus.js";import"./PrefabsTechVue3TanstackTable.es-BrpHz2LW.js";const w={class:"section-content"},q={class:"section-content"},U={class:"section-content"},P={class:"section-content"},h={class:"section-content"},B={class:"section-content"},L={class:"section-content"},T={name:"NumberInputDemo"},G=$({...T,setup(W){const{t:i}=y(),g=[{description:i("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"number | undefined"}],I=D.coerce.number({invalid_type_error:i("form.errors.number.invalid")}).gte(1,i("form.errors.number.invalid")).lte(100,i("form.errors.number.invalid")),V=[{default:"false",description:i("form.documentation.propsDescription.input.disabled"),prop:"disabled",type:"Boolean"},{default:'{ required: "The field is required", invalid: "Please provide a valid integer field" }',description:i("form.documentation.propsDescription.input.errorMessages"),prop:"errorMessages",type:"NumberErrorMessages"},{default:"-",description:i("form.documentation.propsDescription.input.label"),prop:"label",type:"String"},{default:"undefined",description:i("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"number | null | undefined"},{default:'"number"',description:i("form.documentation.propsDescription.input.name"),prop:"name",type:"String"},{default:"-",description:i("form.documentation.propsDescription.input.options"),prop:"options",type:"IsIntOptions"},{default:"-",description:i("form.documentation.propsDescription.input.placeholder"),prop:"placeholder",type:"String"},{default:"-",description:i("form.documentation.propsDescription.input.schema"),prop:"schema",type:"z.ZodType<string | number>"}],N={invalid:i("form.errors.number.invalid"),required:i("form.errors.number.required")},v={min:1,max:100,allow_leading_zeroes:!1};let a=z({customValidationInput:b(),disabled:b(100),i18nInput:b(),input:b(),inputWithValidation:b(),noLabelInput:b(),textInput:b()});return(l,e)=>{const m=E("SshPre");return M(),O(S,{subtitle:t(i)("form.subtitle.number"),title:l.$t("form.label.number"),class:"demo"},{default:s(()=>[o("section",null,[o("h2",null,d(l.$t("form.label.basicInput")),1),e[9]||(e[9]=n()),o("div",w,[r(t(p),{modelValue:t(a).noLabelInput,"onUpdate:modelValue":e[0]||(e[0]=u=>t(a).noLabelInput=u),placeholder:l.$t("form.placeholder.number")},null,8,["modelValue","placeholder"]),e[8]||(e[8]=n()),r(m,{language:"html-vue"},{default:s(()=>[...e[7]||(e[7]=[n(`
          <template>
            <NumberInput 
              v-model="input"
              placeholder="Enter a number"
            />
          </template>

          <script setup lang="ts">
          import { NumberInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)])]),_:1})])]),e[29]||(e[29]=n()),o("section",null,[o("h2",null,d(l.$t("form.label.labelInput")),1),e[12]||(e[12]=n()),o("div",q,[r(t(p),{modelValue:t(a).input,"onUpdate:modelValue":e[1]||(e[1]=u=>t(a).input=u),label:l.$t("form.label.number"),placeholder:l.$t("form.placeholder.number"),name:"label-input"},null,8,["modelValue","label","placeholder"]),e[11]||(e[11]=n()),r(m,{language:"html-vue"},{default:s(()=>[...e[10]||(e[10]=[n(`
          <template>
            <NumberInput 
              v-model="input"
              label="Number"
              name="number"
              placeholder="Enter a number"
            />
          </template>

          <script setup lang="ts">
          import { NumberInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)])]),_:1})])]),e[30]||(e[30]=n()),o("section",null,[o("h2",null,d(l.$t("form.label.disabled")),1),e[15]||(e[15]=n()),o("div",U,[r(t(p),{modelValue:t(a).disabled,"onUpdate:modelValue":e[2]||(e[2]=u=>t(a).disabled=u),label:l.$t("form.label.number"),disabled:"",name:"disabled-input"},null,8,["modelValue","label"]),e[14]||(e[14]=n()),r(m,{language:"html-vue"},{default:s(()=>[...e[13]||(e[13]=[n(`
          <template>
            <NumberInput 
              v-model="input"
              disabled
              label="Number"
              name="number"
            />
          </template>

          <script setup lang="ts">
          import { NumberInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)])]),_:1})])]),e[31]||(e[31]=n()),o("section",null,[o("h2",null,d(l.$t("form.label.withI18n")),1),e[18]||(e[18]=n()),o("div",P,[r(t(p),{modelValue:t(a).i18nInput,"onUpdate:modelValue":e[3]||(e[3]=u=>t(a).i18nInput=u),label:l.$t("form.label.number"),placeholder:l.$t("form.placeholder.number"),name:"i18n-input"},null,8,["modelValue","label","placeholder"]),e[17]||(e[17]=n()),r(m,{language:"html-vue"},{default:s(()=>[...e[16]||(e[16]=[n(`
          <template>
            <NumberInput 
              v-model="input"
              :label="t('form.label.number')"
              :placeholder="t('form.placeholder.number')"
              name="number"
            />
          </template>

          <script setup lang="ts">
          import { NumberInput } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `,-1)])]),_:1})])]),e[32]||(e[32]=n()),o("section",null,[o("h2",null,d(l.$t("form.label.inputWithValidation")),1),e[21]||(e[21]=n()),o("div",h,[r(t(f),null,{default:s(()=>[r(t(p),{modelValue:t(a).inputWithValidation,"onUpdate:modelValue":e[4]||(e[4]=u=>t(a).inputWithValidation=u),label:l.$t("form.label.number"),options:v,placeholder:l.$t("form.placeholder.number"),name:"validation-input"},null,8,["modelValue","label","placeholder"])]),_:1}),e[20]||(e[20]=n()),r(m,{language:"html-vue"},{default:s(()=>[...e[19]||(e[19]=[n(`
          <Form>
            <NumberInput 
              v-model="input"
              :options="validationOptions"
              label="Number"
              name="number"
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
        `,-1)])]),_:1})])]),e[33]||(e[33]=n()),o("section",null,[o("h2",null,d(l.$t("form.label.customErrorMessageInput")),1),e[24]||(e[24]=n()),o("div",B,[r(t(f),null,{default:s(()=>[r(t(p),{modelValue:t(a).textInput,"onUpdate:modelValue":e[5]||(e[5]=u=>t(a).textInput=u),label:l.$t("form.label.number"),"error-messages":N,options:v,placeholder:l.$t("form.placeholder.number"),name:"message-input"},null,8,["modelValue","label","placeholder"])]),_:1}),e[23]||(e[23]=n()),r(m,{language:"html-vue"},{default:s(()=>[...e[22]||(e[22]=[n(`
          <Form>
            <NumberInput 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Number"
              name="number"
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
        `,-1)])]),_:1})])]),e[34]||(e[34]=n()),o("section",null,[o("h2",null,d(l.$t("form.label.customValidationInput")),1),e[27]||(e[27]=n()),o("div",L,[r(t(f),null,{default:s(()=>[r(t(p),{modelValue:t(a).customValidationInput,"onUpdate:modelValue":e[6]||(e[6]=u=>t(a).customValidationInput=u),label:l.$t("form.label.number"),placeholder:l.$t("form.placeholder.number"),schema:t(I),name:"custom-input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e[26]||(e[26]=n()),r(m,{language:"html-vue"},{default:s(()=>[...e[25]||(e[25]=[n(`
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
        `,-1)])]),_:1})])]),e[35]||(e[35]=n()),r(F,{"events-data":g,"props-data":V,"props-table-title":l.$t("common.properties",{value:"NumberInputProperties"})},null,8,["props-table-title"]),e[36]||(e[36]=n()),r(m,{language:"html-vue"},{default:s(()=>[...e[28]||(e[28]=[n(`
      interface NumberErrorMessages {
        invalid?: string;
        required?: string;
      }
    `,-1)])]),_:1})]),_:1},8,["subtitle","title"])}}});export{G as default};

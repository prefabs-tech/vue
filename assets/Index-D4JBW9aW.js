import{T as m,P as f}from"./PrefabsTechVue3Form.es-CSd3ZVa3.js";import{d as $,I as y,L as E,M as D,r as d,J as M,e as O,o as F,j as a,C as n,f as o,h as r,t as b,u as t,v as z}from"./index-DZBiIt1T.js";import{_ as S}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-CiXcespY.js";import{_ as P}from"./FormPage.vue_vue_type_style_index_0_lang-euS0XGzG.js";import"./PrefabsTechVue3TanstackTable.es-DI0udD31.js";const q={class:"section-content"},w={class:"section-content"},U={class:"section-content"},T={class:"section-content"},C={class:"section-content"},h={class:"section-content"},k={class:"section-content"},B={name:"NumberInputField"},G=$({...B,setup(L){const{t:i}=y(),g=[{description:i("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"number | undefined"}],I=E.coerce.number({invalid_type_error:i("form.errors.number.invalid")}).gte(1,i("form.errors.number.invalid")).lte(100,i("form.errors.number.invalid")),V=[{default:"false",description:i("form.documentation.propsDescription.input.disabled"),prop:"disabled",type:"Boolean"},{default:'{ required: "The field is required", invalid: "Please provide a valid integer field" }',description:i("form.documentation.propsDescription.input.errorMessages"),prop:"errorMessages",type:"NumberErrorMessages"},{default:"-",description:i("form.documentation.propsDescription.input.label"),prop:"label",type:"String"},{default:"undefined",description:i("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"number | null | undefined"},{default:'"number"',description:i("form.documentation.propsDescription.input.name"),prop:"name",type:"String"},{default:"-",description:i("form.documentation.propsDescription.input.options"),prop:"options",type:"IsIntOptions"},{default:"-",description:i("form.documentation.propsDescription.input.placeholder"),prop:"placeholder",type:"String"},{default:"-",description:i("form.documentation.propsDescription.input.schema"),prop:"schema",type:"z.ZodType<string | number>"}],N={invalid:i("form.errors.number.invalid"),required:i("form.errors.number.required")},v={min:1,max:100,allow_leading_zeroes:!1};let u=D({customValidationInput:d(),disabled:d(100),i18nInput:d(),input:d(),inputWithValidation:d(),noLabelInput:d(),textInput:d()});return(l,e)=>{const p=M("SshPre");return F(),O(P,{subtitle:t(i)("form.subtitle.number"),title:l.$t("form.label.number"),class:"demo"},{toolbar:a(()=>[r(t(z),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=s=>l.$router.push("/form"))},null,8,["label"])]),default:a(()=>[e[30]||(e[30]=n()),o("section",null,[o("h2",null,b(l.$t("form.label.basicInput")),1),e[10]||(e[10]=n()),o("div",q,[r(t(m),{modelValue:t(u).noLabelInput,"onUpdate:modelValue":e[1]||(e[1]=s=>t(u).noLabelInput=s),placeholder:l.$t("form.placeholder.number")},null,8,["modelValue","placeholder"]),e[9]||(e[9]=n()),r(p,{language:"html-vue"},{default:a(()=>e[8]||(e[8]=[n(`
          <template>
            <NumberInput 
              v-model="input"
              placeholder="Enter a number"
            />
          </template>

          <script setup lang="ts">
          import { NumberInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[31]||(e[31]=n()),o("section",null,[o("h2",null,b(l.$t("form.label.labelInput")),1),e[13]||(e[13]=n()),o("div",w,[r(t(m),{modelValue:t(u).input,"onUpdate:modelValue":e[2]||(e[2]=s=>t(u).input=s),label:l.$t("form.label.number"),placeholder:l.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"]),e[12]||(e[12]=n()),r(p,{language:"html-vue"},{default:a(()=>e[11]||(e[11]=[n(`
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
        `)])),_:1})])]),e[32]||(e[32]=n()),o("section",null,[o("h2",null,b(l.$t("form.label.disabled")),1),e[16]||(e[16]=n()),o("div",U,[r(t(m),{modelValue:t(u).disabled,"onUpdate:modelValue":e[3]||(e[3]=s=>t(u).disabled=s),label:l.$t("form.label.number"),disabled:""},null,8,["modelValue","label"]),e[15]||(e[15]=n()),r(p,{language:"html-vue"},{default:a(()=>e[14]||(e[14]=[n(`
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
        `)])),_:1})])]),e[33]||(e[33]=n()),o("section",null,[o("h2",null,b(l.$t("form.label.withI18n")),1),e[19]||(e[19]=n()),o("div",T,[r(t(m),{modelValue:t(u).i18nInput,"onUpdate:modelValue":e[4]||(e[4]=s=>t(u).i18nInput=s),label:l.$t("form.label.number"),placeholder:l.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"]),e[18]||(e[18]=n()),r(p,{language:"html-vue"},{default:a(()=>e[17]||(e[17]=[n(`
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
        `)])),_:1})])]),e[34]||(e[34]=n()),o("section",null,[o("h2",null,b(l.$t("form.label.inputWithValidation")),1),e[22]||(e[22]=n()),o("div",C,[r(t(f),null,{default:a(()=>[r(t(m),{modelValue:t(u).inputWithValidation,"onUpdate:modelValue":e[5]||(e[5]=s=>t(u).inputWithValidation=s),label:l.$t("form.label.number"),options:v,placeholder:l.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"])]),_:1}),e[21]||(e[21]=n()),r(p,{language:"html-vue"},{default:a(()=>e[20]||(e[20]=[n(`
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
        `)])),_:1})])]),e[35]||(e[35]=n()),o("section",null,[o("h2",null,b(l.$t("form.label.customErrorMessageInput")),1),e[25]||(e[25]=n()),o("div",h,[r(t(f),null,{default:a(()=>[r(t(m),{modelValue:t(u).textInput,"onUpdate:modelValue":e[6]||(e[6]=s=>t(u).textInput=s),label:l.$t("form.label.number"),"error-messages":N,options:v,placeholder:l.$t("form.placeholder.number")},null,8,["modelValue","label","placeholder"])]),_:1}),e[24]||(e[24]=n()),r(p,{language:"html-vue"},{default:a(()=>e[23]||(e[23]=[n(`
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
        `)])),_:1})])]),e[36]||(e[36]=n()),o("section",null,[o("h2",null,b(l.$t("form.label.customValidationInput")),1),e[28]||(e[28]=n()),o("div",k,[r(t(f),null,{default:a(()=>[r(t(m),{modelValue:t(u).customValidationInput,"onUpdate:modelValue":e[7]||(e[7]=s=>t(u).customValidationInput=s),label:l.$t("form.label.number"),placeholder:l.$t("form.placeholder.number"),schema:t(I),name:"number"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e[27]||(e[27]=n()),r(p,{language:"html-vue"},{default:a(()=>e[26]||(e[26]=[n(`
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
        `)])),_:1})])]),e[37]||(e[37]=n()),r(S,{"events-data":g,"props-data":V,"props-table-title":l.$t("common.properties",{value:"NumberInputProperties"})},null,8,["props-table-title"]),e[38]||(e[38]=n()),r(p,{language:"html-vue"},{default:a(()=>e[29]||(e[29]=[n(`
      interface NumberErrorMessages {
        invalid?: string;
        required?: string;
      }
    `)])),_:1})]),_:1},8,["subtitle","title"])}}});export{G as default};

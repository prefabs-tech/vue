import{S as d,b}from"./PrefabsTechVue3Form.es-Ql6BW1dZ.js";import{d as T,M as D,O as y,N as h,o as x,e as S,f as u,h as o,t as m,A as e,a as p,u as n,P as F,r as f}from"./index-CAiRitWL.js";import{_ as q}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-QrQ6mn2y.js";import{_ as M}from"./FormPage.vue_vue_type_style_index_0_lang-CcgRMzse.js";import"./PrefabsTechVue3TanstackTable.es-CCTu_o5f.js";const E={class:"section-content"},w={class:"section-content"},O={class:"section-content"},U={class:"section-content"},z={class:"section-content"},P={class:"section-content"},B={class:"section-content"},N={name:"TextInputField"},Z=T({...N,setup(W){const{t:s}=D(),v=[{description:s("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | null | undefined"}],I=y.string().length(5,{message:s("form.errors.input.length",{length:5})}),V=[{default:"false",description:s("form.documentation.propsDescription.input.disabled"),prop:"disabled",type:"Boolean"},{default:'{ invalid: "Please provide a valid input data", required: "The field is required", }',description:s("form.documentation.propsDescription.input.errorMessages"),prop:"errorMessages",type:"TextErrorMessages"},{default:"-",description:s("form.documentation.propsDescription.input.label"),prop:"label",type:"String"},{default:"-",description:s("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"String | null | undefined"},{default:'"text_input"',description:s("form.documentation.propsDescription.input.name"),prop:"name",type:"String"},{default:"-",description:s("form.documentation.propsDescription.input.options"),prop:"options",type:"Object"},{default:"-",description:s("form.documentation.propsDescription.input.placeholder"),prop:"placeholder",type:"String"},{default:"-",description:s("form.documentation.propsDescription.input.schema"),prop:"schema",type:"z.ZodType<string | number | object>"}],$={required:s("form.errors.input.required")},g={ignore_whitespace:!0,required:!0};let r=F({customValidationInput:f(),disabled:f("dzangolab"),input:f(),inputWithValidation:f(),noLabelInput:f(),textInput:f()});return(l,t)=>{const a=h("SshPre");return x(),S(M,{subtitle:n(s)("form.subtitle.text"),title:l.$t("form.label.textInput"),class:"demo"},{default:u(()=>[o("section",null,[o("h2",null,m(l.$t("form.label.basicInput")),1),t[9]||(t[9]=e()),o("div",E,[p(n(d),{modelValue:n(r).noLabelInput,"onUpdate:modelValue":t[0]||(t[0]=i=>n(r).noLabelInput=i),placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","placeholder"]),t[8]||(t[8]=e()),p(a,{language:"html-vue"},{default:u(()=>[...t[7]||(t[7]=[e(`
          <template>
            <TextInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { TextInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)])]),_:1})])]),t[29]||(t[29]=e()),o("section",null,[o("h2",null,m(l.$t("form.label.labelInput")),1),t[12]||(t[12]=e()),o("div",w,[p(n(d),{modelValue:n(r).input,"onUpdate:modelValue":t[1]||(t[1]=i=>n(r).input=i),label:l.$t("form.label.textInput"),placeholder:l.$t("form.placeholder.textInput")},null,8,["modelValue","label","placeholder"]),t[11]||(t[11]=e()),p(a,{language:"html-vue"},{default:u(()=>[...t[10]||(t[10]=[e(`
          <template>
            <TextInput 
              v-model="input"
              label="Input"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { TextInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)])]),_:1})])]),t[30]||(t[30]=e()),o("section",null,[o("h2",null,m(l.$t("form.label.disabled")),1),t[15]||(t[15]=e()),o("div",O,[p(n(d),{modelValue:n(r).disabled,"onUpdate:modelValue":t[2]||(t[2]=i=>n(r).disabled=i),label:l.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"]),t[14]||(t[14]=e()),p(a,{language:"html-vue"},{default:u(()=>[...t[13]||(t[13]=[e(`
          <template>
            <TextInput 
              v-model="input"
              label="Disabled"
              disabled
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)])]),_:1})])]),t[31]||(t[31]=e()),o("section",null,[o("h2",null,m(l.$t("form.label.withI18n")),1),t[18]||(t[18]=e()),o("div",U,[p(n(d),{modelValue:n(r).input,"onUpdate:modelValue":t[3]||(t[3]=i=>n(r).input=i),label:l.$t("form.label.textInput"),placeholder:l.$t("form.placeholder.textInput")},null,8,["modelValue","label","placeholder"]),t[17]||(t[17]=e()),p(a,{language:"html-vue"},{default:u(()=>[...t[16]||(t[16]=[e(`
          <template>
            <TextInput 
              v-model="input"
              :label="t('form.label.textInput')"
              :placeholder="t('form.placeholder.textInput')"
            />
          </template>

          <script setup lang="ts">
          import { TextInput } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `,-1)])]),_:1})])]),t[32]||(t[32]=e()),o("section",null,[o("h2",null,m(l.$t("form.label.inputWithValidation")),1),t[21]||(t[21]=e()),o("div",z,[p(n(b),null,{default:u(()=>[p(n(d),{modelValue:n(r).inputWithValidation,"onUpdate:modelValue":t[4]||(t[4]=i=>n(r).inputWithValidation=i),label:l.$t("form.label.input"),options:g,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),t[20]||(t[20]=e()),p(a,{language:"html-vue"},{default:u(()=>[...t[19]||(t[19]=[e(`
          <Form>
            <TextInput 
              v-model="input"
              :options="validationOptions"
              label="Input"
              placeholder="Enter input"
            />
          </Form>

          <script setup lang="ts">
          import { Form, TextInput } from "@prefabs.tech/vue3-form";

          const validationOptions = {
            ignore_whitespace: true,
            required: true
          };
          <\/script>
        `,-1)])]),_:1})])]),t[33]||(t[33]=e()),o("section",null,[o("h2",null,m(l.$t("form.label.customErrorMessageInput")),1),t[24]||(t[24]=e()),o("div",P,[p(n(b),null,{default:u(()=>[p(n(d),{modelValue:n(r).textInput,"onUpdate:modelValue":t[5]||(t[5]=i=>n(r).textInput=i),label:l.$t("form.label.input"),"error-messages":$,options:g,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),t[23]||(t[23]=e()),p(a,{language:"html-vue"},{default:u(()=>[...t[22]||(t[22]=[e(`
          <Form>
            <TextInput 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Input"
              placeholder="Enter input"
            />
          </Form>

          <script setup lang="ts">
          import { Form, TextInput } from "@prefabs.tech/vue3-form";

          const validationMessages = {
            required: "The field should not be empty"
          };

          const validationOptions = {
            ignore_whitespace: true,
            required: true
          };
          <\/script>
        `,-1)])]),_:1})])]),t[34]||(t[34]=e()),o("section",null,[o("h2",null,m(l.$t("form.label.customValidationInput")),1),t[27]||(t[27]=e()),o("div",B,[p(n(b),null,{default:u(()=>[p(n(d),{modelValue:n(r).customValidationInput,"onUpdate:modelValue":t[6]||(t[6]=i=>n(r).customValidationInput=i),label:l.$t("form.label.input"),placeholder:l.$t("form.placeholder.input"),schema:n(I),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),t[26]||(t[26]=e()),p(a,{language:"html-vue"},{default:u(()=>[...t[25]||(t[25]=[e(`
          <Form>
            <TextInput 
              v-model="input"
              :schema="inputSchema"
              label="Input"
              placeholder="Enter input"
              name="input"
            />
          </Form>

          <script setup lang="ts">
          import { Form, Input } from "@prefabs.tech/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .length(5, { message: "Input must be exactly 5 characters long") });
          <\/script>
        `,-1)])]),_:1})])]),t[35]||(t[35]=e()),p(q,{"events-data":v,"props-data":V,"props-table-title":l.$t("common.properties",{value:"TextInputProperties"})},null,8,["props-table-title"]),t[36]||(t[36]=e()),p(a,{language:"html-vue"},{default:u(()=>[...t[28]||(t[28]=[e(`
      interface TextErrorMessages {
        invalid?: string;
        required?: string;
      }
    `,-1)])]),_:1})]),_:1},8,["subtitle","title"])}}});export{Z as default};

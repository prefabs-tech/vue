import{R as d,O as b}from"./PrefabsTechVue3Form.es-CJNYCL6x.js";import{d as T,H as y,J as D,L as h,r as f,I as x,e as F,o as S,j as s,C as e,f as o,h as p,t as m,u as n,v as q}from"./index-DZg_9J5y.js";import{_ as O}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-LbwQXMST.js";import{_ as E}from"./FormPage.vue_vue_type_style_index_0_lang-gwuEIxDv.js";import"./PrefabsTechVue3TanstackTable.es-CHYJDIbb.js";const M={class:"section-content"},z={class:"section-content"},U={class:"section-content"},w={class:"section-content"},C={class:"section-content"},k={class:"section-content"},B={class:"section-content"},L={name:"TextInputField"},J=T({...L,setup(P){const{t:u}=y(),v=[{description:u("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | null | undefined"}],I=D.string().length(5,{message:u("form.errors.input.length",{length:5})}),V=[{default:"false",description:u("form.documentation.propsDescription.input.disabled"),prop:"disabled",type:"Boolean"},{default:'{ invalid: "Please provide a valid input data", required: "The field is required", }',description:u("form.documentation.propsDescription.input.errorMessages"),prop:"errorMessages",type:"TextErrorMessages"},{default:"-",description:u("form.documentation.propsDescription.input.label"),prop:"label",type:"String"},{default:"-",description:u("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"String | null | undefined"},{default:'"text_input"',description:u("form.documentation.propsDescription.input.name"),prop:"name",type:"String"},{default:"-",description:u("form.documentation.propsDescription.input.options"),prop:"options",type:"Object"},{default:"-",description:u("form.documentation.propsDescription.input.placeholder"),prop:"placeholder",type:"String"},{default:"-",description:u("form.documentation.propsDescription.input.schema"),prop:"schema",type:"z.ZodType<string | number | object>"}],$={required:u("form.errors.input.required")},g={ignore_whitespace:!0,required:!0};let i=h({customValidationInput:f(),disabled:f("dzangolab"),input:f(),inputWithValidation:f(),noLabelInput:f(),textInput:f()});return(l,t)=>{const a=x("SshPre");return S(),F(E,{subtitle:n(u)("form.subtitle.text"),title:l.$t("form.label.textInput"),class:"demo"},{toolbar:s(()=>[p(n(q),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=r=>l.$router.push("/form"))},null,8,["label"])]),default:s(()=>[t[30]||(t[30]=e()),o("section",null,[o("h2",null,m(l.$t("form.label.basicInput")),1),t[10]||(t[10]=e()),o("div",M,[p(n(d),{modelValue:n(i).noLabelInput,"onUpdate:modelValue":t[1]||(t[1]=r=>n(i).noLabelInput=r),placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","placeholder"]),t[9]||(t[9]=e()),p(a,{language:"html-vue"},{default:s(()=>t[8]||(t[8]=[e(`
          <template>
            <TextInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { TextInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),t[31]||(t[31]=e()),o("section",null,[o("h2",null,m(l.$t("form.label.labelInput")),1),t[13]||(t[13]=e()),o("div",z,[p(n(d),{modelValue:n(i).input,"onUpdate:modelValue":t[2]||(t[2]=r=>n(i).input=r),label:l.$t("form.label.textInput"),placeholder:l.$t("form.placeholder.textInput")},null,8,["modelValue","label","placeholder"]),t[12]||(t[12]=e()),p(a,{language:"html-vue"},{default:s(()=>t[11]||(t[11]=[e(`
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
        `)])),_:1})])]),t[32]||(t[32]=e()),o("section",null,[o("h2",null,m(l.$t("form.label.disabled")),1),t[16]||(t[16]=e()),o("div",U,[p(n(d),{modelValue:n(i).disabled,"onUpdate:modelValue":t[3]||(t[3]=r=>n(i).disabled=r),label:l.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"]),t[15]||(t[15]=e()),p(a,{language:"html-vue"},{default:s(()=>t[14]||(t[14]=[e(`
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
        `)])),_:1})])]),t[33]||(t[33]=e()),o("section",null,[o("h2",null,m(l.$t("form.label.withI18n")),1),t[19]||(t[19]=e()),o("div",w,[p(n(d),{modelValue:n(i).input,"onUpdate:modelValue":t[4]||(t[4]=r=>n(i).input=r),label:l.$t("form.label.textInput"),placeholder:l.$t("form.placeholder.textInput")},null,8,["modelValue","label","placeholder"]),t[18]||(t[18]=e()),p(a,{language:"html-vue"},{default:s(()=>t[17]||(t[17]=[e(`
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
        `)])),_:1})])]),t[34]||(t[34]=e()),o("section",null,[o("h2",null,m(l.$t("form.label.inputWithValidation")),1),t[22]||(t[22]=e()),o("div",C,[p(n(b),null,{default:s(()=>[p(n(d),{modelValue:n(i).inputWithValidation,"onUpdate:modelValue":t[5]||(t[5]=r=>n(i).inputWithValidation=r),label:l.$t("form.label.input"),options:g,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),t[21]||(t[21]=e()),p(a,{language:"html-vue"},{default:s(()=>t[20]||(t[20]=[e(`
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
        `)])),_:1})])]),t[35]||(t[35]=e()),o("section",null,[o("h2",null,m(l.$t("form.label.customErrorMessageInput")),1),t[25]||(t[25]=e()),o("div",k,[p(n(b),null,{default:s(()=>[p(n(d),{modelValue:n(i).textInput,"onUpdate:modelValue":t[6]||(t[6]=r=>n(i).textInput=r),label:l.$t("form.label.input"),"error-messages":$,options:g,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),t[24]||(t[24]=e()),p(a,{language:"html-vue"},{default:s(()=>t[23]||(t[23]=[e(`
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
        `)])),_:1})])]),t[36]||(t[36]=e()),o("section",null,[o("h2",null,m(l.$t("form.label.customValidationInput")),1),t[28]||(t[28]=e()),o("div",B,[p(n(b),null,{default:s(()=>[p(n(d),{modelValue:n(i).customValidationInput,"onUpdate:modelValue":t[7]||(t[7]=r=>n(i).customValidationInput=r),label:l.$t("form.label.input"),placeholder:l.$t("form.placeholder.input"),schema:n(I),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),t[27]||(t[27]=e()),p(a,{language:"html-vue"},{default:s(()=>t[26]||(t[26]=[e(`
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
        `)])),_:1})])]),t[37]||(t[37]=e()),p(O,{"events-data":v,"props-data":V,"props-table-title":l.$t("common.properties",{value:"TextInputProperties"})},null,8,["props-table-title"]),t[38]||(t[38]=e()),p(a,{language:"html-vue"},{default:s(()=>t[29]||(t[29]=[e(`
      interface TextErrorMessages {
        invalid?: string;
        required?: string;
      }
    `)])),_:1})]),_:1},8,["subtitle","title"])}}});export{J as default};

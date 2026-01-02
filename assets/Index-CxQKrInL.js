import{h as d,p as b}from"./PrefabsTechVue3Form.es-CEmqkn2Z.js";import{d as x,I as $,L as D,M as y,r as m,J as w,e as F,o as h,i as p,f as o,B as t,h as r,t as f,u as n}from"./index-PJ8Ire0Y.js";import{_ as q}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-D3TxzbdU.js";import{_ as E}from"./FormPage.vue_vue_type_style_index_0_lang-BT4zklRS.js";import"./PrefabsTechVue3TanstackTable.es-BTW59Jd9.js";const M={class:"section-content"},S={class:"section-content"},U={class:"section-content"},C={class:"section-content"},O={class:"section-content"},z={class:"section-content"},B={class:"section-content"},L={class:"section-content"},P={name:"TextareaInputField"},c=x({...P,setup(R){const{t:i}=$(),v=[{description:i("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | number | string[] | undefined"}],I=D.string().min(15,{message:i("form.errors.input.min",{length:15})}),V=[{default:"-",description:i("form.documentation.propsDescription.textarea.cols"),prop:"cols",type:"number | undefined"},{default:"false",description:i("form.documentation.propsDescription.input.disabled"),prop:"disabled",type:"Boolean"},{default:'{ required: "The field is required", invalid: "Please provide a valid input data" }',description:i("form.documentation.propsDescription.input.errorMessages"),prop:"errorMessages",type:"TextErrorMessages"},{default:"-",description:i("form.documentation.propsDescription.input.label"),prop:"label",type:"String"},{default:"-",description:i("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"string | number | string[] | undefined"},{default:'"text"',description:i("form.documentation.propsDescription.input.name"),prop:"name",type:"String"},{default:"-",description:i("form.documentation.propsDescription.input.options"),prop:"options",type:"IsTextOptions"},{default:"-",description:i("form.documentation.propsDescription.input.placeholder"),prop:"placeholder",type:"String"},{default:"-",description:i("form.documentation.propsDescription.textarea.rows"),prop:"rows",type:"number | undefined"},{default:"-",description:i("form.documentation.propsDescription.input.schema"),prop:"schema",type:"z.ZodType<string | number>"}],T={required:i("form.errors.input.required")},g={ignore_whitespace:!0,required:!0};let a=y({customRowsColsInput:m(),customValidationInput:m(),disabled:m("Disabled textarea input"),i18nInput:m(),input:m(),inputWithValidation:m(),noLabelInput:m(),textInput:m()});return(l,e)=>{const u=w("SshPre");return h(),F(E,{subtitle:n(i)("form.subtitle.textarea"),title:l.$t("form.label.textarea"),class:"demo"},{default:p(()=>[o("section",null,[o("h2",null,f(l.$t("form.label.basicInput")),1),e[10]||(e[10]=t()),o("div",M,[r(n(d),{modelValue:n(a).noLabelInput,"onUpdate:modelValue":e[0]||(e[0]=s=>n(a).noLabelInput=s),placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","placeholder"]),e[9]||(e[9]=t()),r(u,{language:"html-vue"},{default:p(()=>e[8]||(e[8]=[t(`
          <template>
            <TextareaInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { TextareaInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[33]||(e[33]=t()),o("section",null,[o("h2",null,f(l.$t("form.label.labelInput")),1),e[13]||(e[13]=t()),o("div",S,[r(n(d),{modelValue:n(a).input,"onUpdate:modelValue":e[1]||(e[1]=s=>n(a).input=s),label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.textarea")},null,8,["modelValue","label","placeholder"]),e[12]||(e[12]=t()),r(u,{language:"html-vue"},{default:p(()=>e[11]||(e[11]=[t(`
          <template>
            <TextareaInput 
              v-model="input"
              label="Input"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { TextareaInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[34]||(e[34]=t()),o("section",null,[o("h2",null,f(l.$t("form.label.disabled")),1),e[16]||(e[16]=t()),o("div",U,[r(n(d),{modelValue:n(a).disabled,"onUpdate:modelValue":e[2]||(e[2]=s=>n(a).disabled=s),label:l.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"]),e[15]||(e[15]=t()),r(u,{language:"html-vue"},{default:p(()=>e[14]||(e[14]=[t(`
          <template>
            <TextareaInput 
              v-model="input"
              label="Disabled"
              disabled
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[35]||(e[35]=t()),o("section",null,[o("h2",null,f(l.$t("form.label.withI18n")),1),e[19]||(e[19]=t()),o("div",C,[r(n(d),{modelValue:n(a).i18nInput,"onUpdate:modelValue":e[3]||(e[3]=s=>n(a).i18nInput=s),label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.textarea")},null,8,["modelValue","label","placeholder"]),e[18]||(e[18]=t()),r(u,{language:"html-vue"},{default:p(()=>e[17]||(e[17]=[t(`
          <template>
            <TextareaInput 
              v-model="input"
              :label="t('form.label.textarea')"
              :placeholder="t('form.placeholder.textarea')"
            />
          </template>

          <script setup lang="ts">
          import { TextareaInput } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),e[36]||(e[36]=t()),o("section",null,[o("h2",null,f(l.$t("form.label.inputWithValidation")),1),e[22]||(e[22]=t()),o("div",O,[r(n(b),null,{default:p(()=>[r(n(d),{modelValue:n(a).inputWithValidation,"onUpdate:modelValue":e[4]||(e[4]=s=>n(a).inputWithValidation=s),label:l.$t("form.label.textarea"),options:g,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),e[21]||(e[21]=t()),r(u,{language:"html-vue"},{default:p(()=>e[20]||(e[20]=[t(`
          <Form>
            <TextareaInput 
              v-model="input"
              :options="validationOptions"
              label="Textarea"
              placeholder="Enter input"
            />
          </Form>

          <script setup lang="ts">
          import { Form, TextareaInput } from "@prefabs.tech/vue3-form";
          
          const validationOptions = {
            ignore_whitespace: true,
            required: true
          };
          <\/script>
        `)])),_:1})])]),e[37]||(e[37]=t()),o("section",null,[o("h2",null,f(l.$t("form.label.customErrorMessageInput")),1),e[25]||(e[25]=t()),o("div",z,[r(n(b),null,{default:p(()=>[r(n(d),{modelValue:n(a).textInput,"onUpdate:modelValue":e[5]||(e[5]=s=>n(a).textInput=s),label:l.$t("form.label.textarea"),"error-messages":T,options:g,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),e[24]||(e[24]=t()),r(u,{language:"html-vue"},{default:p(()=>e[23]||(e[23]=[t(`
          <Form>
            <TextareaInput 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Textarea"
              placeholder="Enter input"
            />
          </Form>

          <script setup lang="ts">
          import { Form, TextareaInput } from "@prefabs.tech/vue3-form";

          const validationMessages = {
            required: "The field should not be empty"
          };

          const validationOptions = {
            ignore_whitespace: true,
            required: true
          };
          <\/script>
        `)])),_:1})])]),e[38]||(e[38]=t()),o("section",null,[o("h2",null,f(l.$t("form.label.customValidationInput")),1),e[28]||(e[28]=t()),o("div",B,[r(n(b),null,{default:p(()=>[r(n(d),{modelValue:n(a).customValidationInput,"onUpdate:modelValue":e[6]||(e[6]=s=>n(a).customValidationInput=s),label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.input"),schema:n(I),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e[27]||(e[27]=t()),r(u,{language:"html-vue"},{default:p(()=>e[26]||(e[26]=[t(`
          <Form>
            <TextareaInput 
              v-model="courseTitle"
              :schema="inputSchema"
              label="Textarea"
              placeholder="Enter course title"
              name="input"
            />
          </Form>

          <script setup lang="ts">
          import { Form, TextareaInput } from "@prefabs.tech/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .min(15, { message: "Title must be at least 15 character(s)" });
          <\/script>
        `)])),_:1})])]),e[39]||(e[39]=t()),o("section",null,[o("h2",null,f(l.$t("form.label.customColsRowsInput")),1),e[31]||(e[31]=t()),o("div",L,[r(n(b),null,{default:p(()=>[r(n(d),{modelValue:n(a).customRowsColsInput,"onUpdate:modelValue":e[7]||(e[7]=s=>n(a).customRowsColsInput=s),cols:100,label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.input"),rows:5,class:"textarea-field"},null,8,["modelValue","label","placeholder"])]),_:1}),e[30]||(e[30]=t()),r(u,{language:"html-vue"},{default:p(()=>e[29]||(e[29]=[t(`
          <Form>
            <TextareaInput 
              v-model="input"
              class="textarea-field"
              cols="100"
              label="Textarea"
              placeholder="Enter input"
              rows="5"
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@prefabs.tech/vue3-form";
          <\/script>

          <style>
          .textarea-field textarea {
            --_input-field-textarea-height: unset;
            --_input-field-textarea-width: unset;
          }
          </style>
        `)])),_:1})])]),e[40]||(e[40]=t()),r(q,{"events-data":v,"props-data":V,"props-table-title":l.$t("common.properties",{value:"TextareaInputProperties"})},null,8,["props-table-title"]),e[41]||(e[41]=t()),r(u,{language:"html-vue"},{default:p(()=>e[32]||(e[32]=[t(`
      interface TextErrorMessages {
        invalid?: string;
        required?: string;
      }
    `)])),_:1})]),_:1},8,["subtitle","title"])}}});export{c as default};

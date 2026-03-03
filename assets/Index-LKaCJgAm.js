import{e as d,w as b}from"./PrefabsTechVue3Form.es-BUkR6pNZ.js";import{d as T,L as $,N as w,M as D,o as y,e as F,f as p,h as o,t as m,z as t,a,u as n,O as h,r as f}from"./index-DU1CL5Ch.js";import{_ as q}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-C0lNfsFK.js";import{_ as E}from"./FormPage.vue_vue_type_style_index_0_lang-D8rV5wVB.js";import"./PrefabsTechVue3TanstackTable.es-BR-gROdM.js";const M={class:"section-content"},S={class:"section-content"},U={class:"section-content"},C={class:"section-content"},O={class:"section-content"},z={class:"section-content"},B={class:"section-content"},L={class:"section-content"},N={name:"TextareaInputField"},j=T({...N,setup(P){const{t:s}=$(),v=[{description:s("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | number | string[] | undefined"}],I=w.string().min(15,{message:s("form.errors.input.min",{length:15})}),V=[{default:"-",description:s("form.documentation.propsDescription.textarea.cols"),prop:"cols",type:"number | undefined"},{default:"false",description:s("form.documentation.propsDescription.input.disabled"),prop:"disabled",type:"Boolean"},{default:'{ required: "The field is required", invalid: "Please provide a valid input data" }',description:s("form.documentation.propsDescription.input.errorMessages"),prop:"errorMessages",type:"TextErrorMessages"},{default:"-",description:s("form.documentation.propsDescription.input.label"),prop:"label",type:"String"},{default:"-",description:s("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"string | number | string[] | undefined"},{default:'"text"',description:s("form.documentation.propsDescription.input.name"),prop:"name",type:"String"},{default:"-",description:s("form.documentation.propsDescription.input.options"),prop:"options",type:"IsTextOptions"},{default:"-",description:s("form.documentation.propsDescription.input.placeholder"),prop:"placeholder",type:"String"},{default:"-",description:s("form.documentation.propsDescription.textarea.rows"),prop:"rows",type:"number | undefined"},{default:"-",description:s("form.documentation.propsDescription.input.schema"),prop:"schema",type:"z.ZodType<string | number>"}],x={required:s("form.errors.input.required")},g={ignore_whitespace:!0,required:!0};let r=h({customRowsColsInput:f(),customValidationInput:f(),disabled:f("Disabled textarea input"),i18nInput:f(),input:f(),inputWithValidation:f(),noLabelInput:f(),textInput:f()});return(l,e)=>{const u=D("SshPre");return y(),F(E,{subtitle:n(s)("form.subtitle.textarea"),title:l.$t("form.label.textarea"),class:"demo"},{default:p(()=>[o("section",null,[o("h2",null,m(l.$t("form.label.basicInput")),1),e[10]||(e[10]=t()),o("div",M,[a(n(d),{modelValue:n(r).noLabelInput,"onUpdate:modelValue":e[0]||(e[0]=i=>n(r).noLabelInput=i),placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","placeholder"]),e[9]||(e[9]=t()),a(u,{language:"html-vue"},{default:p(()=>[...e[8]||(e[8]=[t(`
          <template>
            <TextareaInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { TextareaInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)])]),_:1})])]),e[33]||(e[33]=t()),o("section",null,[o("h2",null,m(l.$t("form.label.labelInput")),1),e[13]||(e[13]=t()),o("div",S,[a(n(d),{modelValue:n(r).input,"onUpdate:modelValue":e[1]||(e[1]=i=>n(r).input=i),label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.textarea"),name:"label-input"},null,8,["modelValue","label","placeholder"]),e[12]||(e[12]=t()),a(u,{language:"html-vue"},{default:p(()=>[...e[11]||(e[11]=[t(`
          <template>
            <TextareaInput 
              v-model="input"
              label="Input"
              name="textarea"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { TextareaInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)])]),_:1})])]),e[34]||(e[34]=t()),o("section",null,[o("h2",null,m(l.$t("form.label.disabled")),1),e[16]||(e[16]=t()),o("div",U,[a(n(d),{modelValue:n(r).disabled,"onUpdate:modelValue":e[2]||(e[2]=i=>n(r).disabled=i),label:l.$t("form.label.disabled"),disabled:"",name:"disabled-input"},null,8,["modelValue","label"]),e[15]||(e[15]=t()),a(u,{language:"html-vue"},{default:p(()=>[...e[14]||(e[14]=[t(`
          <template>
            <TextareaInput 
              v-model="input"
              disabled
              label="Disabled"
              name="textarea"
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)])]),_:1})])]),e[35]||(e[35]=t()),o("section",null,[o("h2",null,m(l.$t("form.label.withI18n")),1),e[19]||(e[19]=t()),o("div",C,[a(n(d),{modelValue:n(r).i18nInput,"onUpdate:modelValue":e[3]||(e[3]=i=>n(r).i18nInput=i),label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.textarea"),name:"i18n-label"},null,8,["modelValue","label","placeholder"]),e[18]||(e[18]=t()),a(u,{language:"html-vue"},{default:p(()=>[...e[17]||(e[17]=[t(`
          <template>
            <TextareaInput 
              v-model="input"
              :label="t('form.label.textarea')"
              :placeholder="t('form.placeholder.textarea')"
              name="textarea"
            />
          </template>

          <script setup lang="ts">
          import { TextareaInput } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `,-1)])]),_:1})])]),e[36]||(e[36]=t()),o("section",null,[o("h2",null,m(l.$t("form.label.inputWithValidation")),1),e[22]||(e[22]=t()),o("div",O,[a(n(b),null,{default:p(()=>[a(n(d),{modelValue:n(r).inputWithValidation,"onUpdate:modelValue":e[4]||(e[4]=i=>n(r).inputWithValidation=i),label:l.$t("form.label.textarea"),options:g,placeholder:l.$t("form.placeholder.input"),name:"validation-input"},null,8,["modelValue","label","placeholder"])]),_:1}),e[21]||(e[21]=t()),a(u,{language:"html-vue"},{default:p(()=>[...e[20]||(e[20]=[t(`
          <Form>
            <TextareaInput 
              v-model="input"
              :options="validationOptions"
              label="Textarea"
              name="textarea"
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
        `,-1)])]),_:1})])]),e[37]||(e[37]=t()),o("section",null,[o("h2",null,m(l.$t("form.label.customErrorMessageInput")),1),e[25]||(e[25]=t()),o("div",z,[a(n(b),null,{default:p(()=>[a(n(d),{modelValue:n(r).textInput,"onUpdate:modelValue":e[5]||(e[5]=i=>n(r).textInput=i),label:l.$t("form.label.textarea"),"error-messages":x,options:g,placeholder:l.$t("form.placeholder.input"),name:"custom-message-input"},null,8,["modelValue","label","placeholder"])]),_:1}),e[24]||(e[24]=t()),a(u,{language:"html-vue"},{default:p(()=>[...e[23]||(e[23]=[t(`
          <Form>
            <TextareaInput 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Textarea"
              name="textarea"
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
        `,-1)])]),_:1})])]),e[38]||(e[38]=t()),o("section",null,[o("h2",null,m(l.$t("form.label.customValidationInput")),1),e[28]||(e[28]=t()),o("div",B,[a(n(b),null,{default:p(()=>[a(n(d),{modelValue:n(r).customValidationInput,"onUpdate:modelValue":e[6]||(e[6]=i=>n(r).customValidationInput=i),label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.input"),schema:n(I),name:"custom-validation-input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e[27]||(e[27]=t()),a(u,{language:"html-vue"},{default:p(()=>[...e[26]||(e[26]=[t(`
          <Form>
            <TextareaInput 
              v-model="courseTitle"
              :schema="inputSchema"
              label="Textarea"
              name="textarea"
              placeholder="Enter course title"
            />
          </Form>

          <script setup lang="ts">
          import { Form, TextareaInput } from "@prefabs.tech/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .min(15, { message: "Title must be at least 15 character(s)" });
          <\/script>
        `,-1)])]),_:1})])]),e[39]||(e[39]=t()),o("section",null,[o("h2",null,m(l.$t("form.label.customColsRowsInput")),1),e[31]||(e[31]=t()),o("div",L,[a(n(b),null,{default:p(()=>[a(n(d),{modelValue:n(r).customRowsColsInput,"onUpdate:modelValue":e[7]||(e[7]=i=>n(r).customRowsColsInput=i),cols:100,label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.input"),rows:5,class:"textarea-field",name:"custom-input"},null,8,["modelValue","label","placeholder"])]),_:1}),e[30]||(e[30]=t()),a(u,{language:"html-vue"},{default:p(()=>[...e[29]||(e[29]=[t(`
          <Form>
            <TextareaInput 
              v-model="input"
              class="textarea-field"
              cols="100"
              label="Textarea"
              name="textarea"
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
        `,-1)])]),_:1})])]),e[40]||(e[40]=t()),a(q,{"events-data":v,"props-data":V,"props-table-title":l.$t("common.properties",{value:"TextareaInputProperties"})},null,8,["props-table-title"]),e[41]||(e[41]=t()),a(u,{language:"html-vue"},{default:p(()=>[...e[32]||(e[32]=[t(`
      interface TextErrorMessages {
        invalid?: string;
        required?: string;
      }
    `,-1)])]),_:1})]),_:1},8,["subtitle","title"])}}});export{j as default};

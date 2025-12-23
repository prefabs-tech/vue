import{R as d,E as b}from"./PrefabsTechVue3Form.es-JJOMbn2S.js";import{d as $,I as x,L as y,M as D,r as m,J as w,e as F,o as E,i as s,B as t,f as o,h as r,t as f,u as n,q}from"./index-DLHnW3Hk.js";import{_ as h}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-BL6C4Kpy.js";import{_ as M}from"./FormPage.vue_vue_type_style_index_0_lang-At3nlgdF.js";import"./PrefabsTechVue3TanstackTable.es-DcZUwQPE.js";const S={class:"section-content"},C={class:"section-content"},U={class:"section-content"},O={class:"section-content"},z={class:"section-content"},R={class:"section-content"},B={class:"section-content"},k={class:"section-content"},L={name:"TextareaInputField"},A=$({...L,setup(P){const{t:p}=x(),v=[{description:p("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | number | string[] | undefined"}],I=y.string().min(15,{message:p("form.errors.input.min",{length:15})}),V=[{default:"-",description:p("form.documentation.propsDescription.textarea.cols"),prop:"cols",type:"number | undefined"},{default:"false",description:p("form.documentation.propsDescription.input.disabled"),prop:"disabled",type:"Boolean"},{default:'{ required: "The field is required", invalid: "Please provide a valid input data" }',description:p("form.documentation.propsDescription.input.errorMessages"),prop:"errorMessages",type:"TextErrorMessages"},{default:"-",description:p("form.documentation.propsDescription.input.label"),prop:"label",type:"String"},{default:"-",description:p("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"string | number | string[] | undefined"},{default:'"text"',description:p("form.documentation.propsDescription.input.name"),prop:"name",type:"String"},{default:"-",description:p("form.documentation.propsDescription.input.options"),prop:"options",type:"IsTextOptions"},{default:"-",description:p("form.documentation.propsDescription.input.placeholder"),prop:"placeholder",type:"String"},{default:"-",description:p("form.documentation.propsDescription.textarea.rows"),prop:"rows",type:"number | undefined"},{default:"-",description:p("form.documentation.propsDescription.input.schema"),prop:"schema",type:"z.ZodType<string | number>"}],T={required:p("form.errors.input.required")},g={ignore_whitespace:!0,required:!0};let a=D({customRowsColsInput:m(),customValidationInput:m(),disabled:m("Disabled textarea input"),i18nInput:m(),input:m(),inputWithValidation:m(),noLabelInput:m(),textInput:m()});return(l,e)=>{const u=w("SshPre");return E(),F(M,{subtitle:n(p)("form.subtitle.textarea"),title:l.$t("form.label.textarea"),class:"demo"},{toolbar:s(()=>[r(n(q),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=i=>l.$router.push("/form"))},null,8,["label"])]),default:s(()=>[e[34]||(e[34]=t()),o("section",null,[o("h2",null,f(l.$t("form.label.basicInput")),1),e[11]||(e[11]=t()),o("div",S,[r(n(d),{modelValue:n(a).noLabelInput,"onUpdate:modelValue":e[1]||(e[1]=i=>n(a).noLabelInput=i),placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","placeholder"]),e[10]||(e[10]=t()),r(u,{language:"html-vue"},{default:s(()=>e[9]||(e[9]=[t(`
          <template>
            <TextareaInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { TextareaInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[35]||(e[35]=t()),o("section",null,[o("h2",null,f(l.$t("form.label.labelInput")),1),e[14]||(e[14]=t()),o("div",C,[r(n(d),{modelValue:n(a).input,"onUpdate:modelValue":e[2]||(e[2]=i=>n(a).input=i),label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.textarea")},null,8,["modelValue","label","placeholder"]),e[13]||(e[13]=t()),r(u,{language:"html-vue"},{default:s(()=>e[12]||(e[12]=[t(`
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
        `)])),_:1})])]),e[36]||(e[36]=t()),o("section",null,[o("h2",null,f(l.$t("form.label.disabled")),1),e[17]||(e[17]=t()),o("div",U,[r(n(d),{modelValue:n(a).disabled,"onUpdate:modelValue":e[3]||(e[3]=i=>n(a).disabled=i),label:l.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"]),e[16]||(e[16]=t()),r(u,{language:"html-vue"},{default:s(()=>e[15]||(e[15]=[t(`
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
        `)])),_:1})])]),e[37]||(e[37]=t()),o("section",null,[o("h2",null,f(l.$t("form.label.withI18n")),1),e[20]||(e[20]=t()),o("div",O,[r(n(d),{modelValue:n(a).i18nInput,"onUpdate:modelValue":e[4]||(e[4]=i=>n(a).i18nInput=i),label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.textarea")},null,8,["modelValue","label","placeholder"]),e[19]||(e[19]=t()),r(u,{language:"html-vue"},{default:s(()=>e[18]||(e[18]=[t(`
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
        `)])),_:1})])]),e[38]||(e[38]=t()),o("section",null,[o("h2",null,f(l.$t("form.label.inputWithValidation")),1),e[23]||(e[23]=t()),o("div",z,[r(n(b),null,{default:s(()=>[r(n(d),{modelValue:n(a).inputWithValidation,"onUpdate:modelValue":e[5]||(e[5]=i=>n(a).inputWithValidation=i),label:l.$t("form.label.textarea"),options:g,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),e[22]||(e[22]=t()),r(u,{language:"html-vue"},{default:s(()=>e[21]||(e[21]=[t(`
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
        `)])),_:1})])]),e[39]||(e[39]=t()),o("section",null,[o("h2",null,f(l.$t("form.label.customErrorMessageInput")),1),e[26]||(e[26]=t()),o("div",R,[r(n(b),null,{default:s(()=>[r(n(d),{modelValue:n(a).textInput,"onUpdate:modelValue":e[6]||(e[6]=i=>n(a).textInput=i),label:l.$t("form.label.textarea"),"error-messages":T,options:g,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),e[25]||(e[25]=t()),r(u,{language:"html-vue"},{default:s(()=>e[24]||(e[24]=[t(`
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
        `)])),_:1})])]),e[40]||(e[40]=t()),o("section",null,[o("h2",null,f(l.$t("form.label.customValidationInput")),1),e[29]||(e[29]=t()),o("div",B,[r(n(b),null,{default:s(()=>[r(n(d),{modelValue:n(a).customValidationInput,"onUpdate:modelValue":e[7]||(e[7]=i=>n(a).customValidationInput=i),label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.input"),schema:n(I),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e[28]||(e[28]=t()),r(u,{language:"html-vue"},{default:s(()=>e[27]||(e[27]=[t(`
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
        `)])),_:1})])]),e[41]||(e[41]=t()),o("section",null,[o("h2",null,f(l.$t("form.label.customColsRowsInput")),1),e[32]||(e[32]=t()),o("div",k,[r(n(b),null,{default:s(()=>[r(n(d),{modelValue:n(a).customRowsColsInput,"onUpdate:modelValue":e[8]||(e[8]=i=>n(a).customRowsColsInput=i),cols:100,label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.input"),rows:5,class:"textarea-field"},null,8,["modelValue","label","placeholder"])]),_:1}),e[31]||(e[31]=t()),r(u,{language:"html-vue"},{default:s(()=>e[30]||(e[30]=[t(`
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
        `)])),_:1})])]),e[42]||(e[42]=t()),r(h,{"events-data":v,"props-data":V,"props-table-title":l.$t("common.properties",{value:"TextareaInputProperties"})},null,8,["props-table-title"]),e[43]||(e[43]=t()),r(u,{language:"html-vue"},{default:s(()=>e[33]||(e[33]=[t(`
      interface TextErrorMessages {
        invalid?: string;
        required?: string;
      }
    `)])),_:1})]),_:1},8,["subtitle","title"])}}});export{A as default};

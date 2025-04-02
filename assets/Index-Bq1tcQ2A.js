import{a as p,L as f}from"./DzangolabVue3Form.es-CE9A9srf.js";import{d as V,E as $,G as T,H as x,r as m,D as z,e as w,o as F,w as u,B as t,f as o,t as d,i as a,u as l,p as C}from"./index-wNQK_6m0.js";import{_ as E}from"./FormPage.vue_vue_type_style_index_0_lang-4RDqni7V.js";const U={class:"section-content"},q={class:"section-content"},O={class:"section-content"},S={class:"section-content"},y={class:"section-content"},D={class:"section-content"},L={class:"section-content"},k={class:"section-content"},B={name:"TextareaInputField"},P=V({...B,setup(M){const{t:b}=$(),v=T.string().min(15,{message:b("form.errors.input.min",{length:15})}),I={required:b("form.errors.input.required")},g={ignore_whitespace:!0,required:!0};let r=x({customRowsColsInput:m(),customValidationInput:m(),disabled:m("Disabled textarea input"),input:m(),inputWithValidation:m(),noLabelInput:m(),textInput:m()});return(n,e)=>{const i=z("SshPre");return F(),w(E,{title:n.$t("form.label.textarea"),class:"demo"},{toolbar:u(()=>[a(l(C),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=s=>n.$router.push("/form"))},null,8,["label"])]),default:u(()=>[e[33]||(e[33]=t()),o("section",null,[o("h2",null,d(n.$t("form.label.basicInput")),1),e[11]||(e[11]=t()),o("div",U,[a(l(p),{modelValue:l(r).noLabelInput,"onUpdate:modelValue":e[1]||(e[1]=s=>l(r).noLabelInput=s),placeholder:n.$t("form.placeholder.input")},null,8,["modelValue","placeholder"]),e[10]||(e[10]=t()),a(i,{language:"html-vue"},{default:u(()=>e[9]||(e[9]=[t(`
          <template>
            <TextareaInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { TextareaInput } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),e[34]||(e[34]=t()),o("section",null,[o("h2",null,d(n.$t("form.label.labelInput")),1),e[14]||(e[14]=t()),o("div",q,[a(l(p),{modelValue:l(r).input,"onUpdate:modelValue":e[2]||(e[2]=s=>l(r).input=s),label:n.$t("form.label.textarea"),placeholder:n.$t("form.placeholder.textarea")},null,8,["modelValue","label","placeholder"]),e[13]||(e[13]=t()),a(i,{language:"html-vue"},{default:u(()=>e[12]||(e[12]=[t(`
          <template>
            <TextareaInput 
              v-model="input"
              label="Input"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { TextareaInput } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),e[35]||(e[35]=t()),o("section",null,[o("h2",null,d(n.$t("form.label.disabled")),1),e[17]||(e[17]=t()),o("div",O,[a(l(p),{modelValue:l(r).disabled,"onUpdate:modelValue":e[3]||(e[3]=s=>l(r).disabled=s),label:n.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"]),e[16]||(e[16]=t()),a(i,{language:"html-vue"},{default:u(()=>e[15]||(e[15]=[t(`
          <template>
            <TextareaInput 
              v-model="input"
              label="Disabled"
              disabled
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),e[36]||(e[36]=t()),o("section",null,[o("h2",null,d(n.$t("form.label.withI18n")),1),e[20]||(e[20]=t()),o("div",S,[a(l(p),{modelValue:l(r).input,"onUpdate:modelValue":e[4]||(e[4]=s=>l(r).input=s),label:n.$t("form.label.textarea"),placeholder:n.$t("form.placeholder.textarea")},null,8,["modelValue","label","placeholder"]),e[19]||(e[19]=t()),a(i,{language:"html-vue"},{default:u(()=>e[18]||(e[18]=[t(`
          <template>
            <TextareaInput 
              v-model="input"
              :label="t('form.label.textarea')"
              :placeholder="t('form.placeholder.textarea')"
            />
          </template>

          <script setup lang="ts">
          import { TextareaInput } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),e[37]||(e[37]=t()),o("section",null,[o("h2",null,d(n.$t("form.label.inputWithValidation")),1),e[23]||(e[23]=t()),o("div",y,[a(l(f),null,{default:u(()=>[a(l(p),{modelValue:l(r).inputWithValidation,"onUpdate:modelValue":e[5]||(e[5]=s=>l(r).inputWithValidation=s),label:n.$t("form.label.textarea"),options:g,placeholder:n.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),e[22]||(e[22]=t()),a(i,{language:"html-vue"},{default:u(()=>e[21]||(e[21]=[t(`
          <Form>
            <TextareaInput 
              v-model="input"
              :options="validationOptions"
              label="Textarea"
              placeholder="Enter input"
            />
          </Form>

          <script setup lang="ts">
          import { Form, TextareaInput } from "@dzangolab/vue3-form";
          
          const validationOptions = {
            ignore_whitespace: true,
            required: true
          };
          <\/script>
        `)])),_:1})])]),e[38]||(e[38]=t()),o("section",null,[o("h2",null,d(n.$t("form.label.customErrorMessageInput")),1),e[26]||(e[26]=t()),o("div",D,[a(l(f),null,{default:u(()=>[a(l(p),{modelValue:l(r).textInput,"onUpdate:modelValue":e[6]||(e[6]=s=>l(r).textInput=s),label:n.$t("form.label.textarea"),"error-messages":I,options:g,placeholder:n.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),e[25]||(e[25]=t()),a(i,{language:"html-vue"},{default:u(()=>e[24]||(e[24]=[t(`
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
          import { Form, TextareaInput } from "@dzangolab/vue3-form";

          const validationMessages = {
            required: "The field should not be empty"
          };

          const validationOptions = {
            ignore_whitespace: true,
            required: true
          };
          <\/script>
        `)])),_:1})])]),e[39]||(e[39]=t()),o("section",null,[o("h2",null,d(n.$t("form.label.customValidationInput")),1),e[29]||(e[29]=t()),o("div",L,[a(l(f),null,{default:u(()=>[a(l(p),{modelValue:l(r).customValidationInput,"onUpdate:modelValue":e[7]||(e[7]=s=>l(r).customValidationInput=s),label:n.$t("form.label.textarea"),placeholder:n.$t("form.placeholder.input"),schema:l(v),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e[28]||(e[28]=t()),a(i,{language:"html-vue"},{default:u(()=>e[27]||(e[27]=[t(`
          <Form>
            <TextareaInput 
              v-model="courseTitle"
              :schema="inputSchema"
              label="Textarea""
              placeholder="Enter course title"
              name="input"
            />
          </Form>

          <script setup lang="ts">
          import { Form, TextareaInput } from "@dzangolab/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .min(15, { message: "Title must be at least 15 character(s)"") });
          <\/script>
        `)])),_:1})])]),e[40]||(e[40]=t()),o("section",null,[o("h2",null,d(n.$t("form.label.customColsRowsInput")),1),e[32]||(e[32]=t()),o("div",k,[a(l(f),null,{default:u(()=>[a(l(p),{modelValue:l(r).customRowsColsInput,"onUpdate:modelValue":e[8]||(e[8]=s=>l(r).customRowsColsInput=s),cols:100,label:n.$t("form.label.textarea"),placeholder:n.$t("form.placeholder.input"),rows:5,class:"textarea-field"},null,8,["modelValue","label","placeholder"])]),_:1}),e[31]||(e[31]=t()),a(i,{language:"html-vue"},{default:u(()=>e[30]||(e[30]=[t(`
          <Form>
            <TextareaInput 
              v-model="input"
              class="textarea-field"
              cols="100",
              label="Textarea"
              placeholder="Enter input"
              rows="5"
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>

          <style>
          .textarea-field textarea {
            --_input-field-textarea-height: unset;
            --_input-field-textarea-width: unset;
          }
          </style>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{P as default};

import{Q as p,l as c}from"./DzangolabVue3Form.es-8e0b21c7.js";import{d as v,a5 as I,p as V,j as m,J as $,o as T,c as x,w as u,K as a,D as t,ao as _,W as e,f as n,L as d}from"./index-729398ab-b294403d.js";import{m as w}from"./index-2f56db22.js";import{_ as z}from"./FormPage.vue_vue_type_style_index_0_lang-c07c697e.js";const F={class:"section-content"},C={class:"section-content"},U={class:"section-content"},y={class:"section-content"},E={class:"section-content"},q={class:"section-content"},O={class:"section-content"},S={class:"section-content"},D={name:"TextareaInputField"},B=v({...D,setup(W){const{t:f}=I(),h=w.string().min(15,{message:f("form.errors.input.min",{length:15})}),g={required:f("form.errors.input.required")},b={ignore_whitespace:!0,required:!0};let r=V({customRowsColsInput:m(),customValidationInput:m(),disabled:m("Disabled textarea input"),input:m(),inputWithValidation:m(),noLabelInput:m(),textInput:m()});return(l,o)=>{const i=$("SshPre");return T(),x(z,{title:l.$t("form.label.textarea"),class:"demo"},{toolbar:u(()=>[a(t(_),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:o[0]||(o[0]=s=>l.$router.push("/form"))},null,8,["label"])]),default:u(()=>[e(),n("section",null,[n("h2",null,d(l.$t("form.label.basicInput")),1),e(),n("div",F,[a(t(p),{modelValue:t(r).noLabelInput,"onUpdate:modelValue":o[1]||(o[1]=s=>t(r).noLabelInput=s),placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","placeholder"]),e(),a(i,{language:"html-vue"},{default:u(()=>[e(`
          <template>
            <TextareaInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { TextareaInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,d(l.$t("form.label.labelInput")),1),e(),n("div",C,[a(t(p),{modelValue:t(r).input,"onUpdate:modelValue":o[2]||(o[2]=s=>t(r).input=s),label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.textarea")},null,8,["modelValue","label","placeholder"]),e(),a(i,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,d(l.$t("form.label.disabled")),1),e(),n("div",U,[a(t(p),{modelValue:t(r).disabled,"onUpdate:modelValue":o[3]||(o[3]=s=>t(r).disabled=s),label:l.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"]),e(),a(i,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,d(l.$t("form.label.withI18n")),1),e(),n("div",y,[a(t(p),{modelValue:t(r).input,"onUpdate:modelValue":o[4]||(o[4]=s=>t(r).input=s),label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.textarea")},null,8,["modelValue","label","placeholder"]),e(),a(i,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,d(l.$t("form.label.inputWithValidation")),1),e(),n("div",E,[a(t(c),null,{default:u(()=>[a(t(p),{modelValue:t(r).inputWithValidation,"onUpdate:modelValue":o[5]||(o[5]=s=>t(r).inputWithValidation=s),label:l.$t("form.label.textarea"),options:b,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),e(),a(i,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,d(l.$t("form.label.customErrorMessageInput")),1),e(),n("div",q,[a(t(c),null,{default:u(()=>[a(t(p),{modelValue:t(r).textInput,"onUpdate:modelValue":o[6]||(o[6]=s=>t(r).textInput=s),label:l.$t("form.label.textarea"),"error-messages":g,options:b,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),e(),a(i,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,d(l.$t("form.label.customValidationInput")),1),e(),n("div",O,[a(t(c),null,{default:u(()=>[a(t(p),{modelValue:t(r).customValidationInput,"onUpdate:modelValue":o[7]||(o[7]=s=>t(r).customValidationInput=s),label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.input"),schema:t(h),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e(),a(i,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,d(l.$t("form.label.customColsRowsInput")),1),e(),n("div",S,[a(t(c),null,{default:u(()=>[a(t(p),{modelValue:t(r).customRowsColsInput,"onUpdate:modelValue":o[8]||(o[8]=s=>t(r).customRowsColsInput=s),cols:100,label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.input"),rows:5,class:"textarea-field"},null,8,["modelValue","label","placeholder"])]),_:1}),e(),a(i,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{B as default};

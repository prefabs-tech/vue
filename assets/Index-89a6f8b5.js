import{W as d,J as c}from"./DzangolabVue3Form.es-1e6cc6ce.js";import{d as V,a5 as $,p as T,j as m,J as h,o as x,c as _,w as u,K as a,W as e,L as i,f as l,D as t}from"./index-729398ab-7d472bf5.js";import{m as w}from"./index-a5e12811.js";import{_ as z}from"./FormPage.vue_vue_type_style_index_0_lang-d580c839.js";const F={class:"section-content"},U={class:"section-content"},C={class:"section-content"},E={class:"section-content"},W={class:"section-content"},k={class:"section-content"},q={class:"section-content"},y={class:"section-content"},S={name:"TextareaInputField"},B=V({...S,setup(D){const{t:f}=$(),g=w.string().min(15,{message:f("form.errors.input.min",{length:15})}),v={required:f("form.errors.input.required")},b={ignore_whitespace:!0,required:!0};let o=T({customRowsColsInput:m(),customValidationInput:m(),disabled:m("Disabled textarea input"),input:m(),inputWithValidation:m(),noLabelInput:m(),textInput:m()});return(n,r)=>{const I=h("router-link"),p=h("SshPre");return x(),_(z,{title:n.$t("form.label.textarea"),class:"demo"},{toolbar:u(()=>[a(I,{to:{name:"form"},class:"back"},{default:u(()=>[e(i(n.$t("common.back")),1)]),_:1})]),default:u(()=>[e(),l("section",null,[l("h2",null,i(n.$t("form.label.basicInput")),1),e(),l("div",F,[a(t(d),{modelValue:t(o).noLabelInput,"onUpdate:modelValue":r[0]||(r[0]=s=>t(o).noLabelInput=s),placeholder:n.$t("form.placeholder.input")},null,8,["modelValue","placeholder"]),e(),a(p,{language:"html-vue"},{default:u(()=>[e(`
          <template>
            <TextareaInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { TextareaInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.labelInput")),1),e(),l("div",U,[a(t(d),{modelValue:t(o).input,"onUpdate:modelValue":r[1]||(r[1]=s=>t(o).input=s),label:n.$t("form.label.textarea"),placeholder:n.$t("form.placeholder.textarea")},null,8,["modelValue","label","placeholder"]),e(),a(p,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.disabled")),1),e(),l("div",C,[a(t(d),{modelValue:t(o).disabled,"onUpdate:modelValue":r[2]||(r[2]=s=>t(o).disabled=s),label:n.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"]),e(),a(p,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.withI18n")),1),e(),l("div",E,[a(t(d),{modelValue:t(o).input,"onUpdate:modelValue":r[3]||(r[3]=s=>t(o).input=s),label:n.$t("form.label.textarea"),placeholder:n.$t("form.placeholder.textarea")},null,8,["modelValue","label","placeholder"]),e(),a(p,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.inputWithValidation")),1),e(),l("div",W,[a(t(c),null,{default:u(()=>[a(t(d),{modelValue:t(o).inputWithValidation,"onUpdate:modelValue":r[4]||(r[4]=s=>t(o).inputWithValidation=s),label:n.$t("form.label.textarea"),options:b,placeholder:n.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),e(),a(p,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.customErrorMessageInput")),1),e(),l("div",k,[a(t(c),null,{default:u(()=>[a(t(d),{modelValue:t(o).textInput,"onUpdate:modelValue":r[5]||(r[5]=s=>t(o).textInput=s),label:n.$t("form.label.textarea"),"error-messages":v,options:b,placeholder:n.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),e(),a(p,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.customValidationInput")),1),e(),l("div",q,[a(t(c),null,{default:u(()=>[a(t(d),{modelValue:t(o).customValidationInput,"onUpdate:modelValue":r[6]||(r[6]=s=>t(o).customValidationInput=s),label:n.$t("form.label.textarea"),placeholder:n.$t("form.placeholder.input"),schema:t(g),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e(),a(p,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.customColsRowsInput")),1),e(),l("div",y,[a(t(c),null,{default:u(()=>[a(t(d),{modelValue:t(o).customRowsColsInput,"onUpdate:modelValue":r[7]||(r[7]=s=>t(o).customRowsColsInput=s),cols:100,label:n.$t("form.label.textarea"),placeholder:n.$t("form.placeholder.input"),rows:5,class:"textarea-field"},null,8,["modelValue","label","placeholder"])]),_:1}),e(),a(p,{language:"html-vue"},{default:u(()=>[e(`
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

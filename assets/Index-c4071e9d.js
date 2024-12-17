import{Z as d,l as m}from"./DzangolabVue3Form.es-6b1a2eb4.js";import{d as V,a6 as _,p as $,j as c,K as h,o as T,c as x,w as o,L as t,C as e,N as i,f as a,E as l}from"./index-66214709-32602281.js";import{m as F}from"./index-1ad428ae.js";import{_ as w}from"./FormPage.vue_vue_type_style_index_0_lang-65f96724.js";const z={class:"section-content"},C={class:"section-content"},E={class:"section-content"},U={class:"section-content"},k={class:"section-content"},q={class:"section-content"},y={class:"section-content"},S={class:"section-content"},O={name:"TextareaInputField"},W=V({...O,setup(D){const{t:f}=_(),g=F.string().min(15,{message:f("form.errors.input.min",{length:15})}),v={required:f("form.errors.input.required")},b={ignore_whitespace:!0,required:!0};let r=$({customRowsColsInput:c(),customValidationInput:c(),disabled:c("Disabled textarea input"),input:c(),inputWithValidation:c(),noLabelInput:c(),textInput:c()});return(n,u)=>{const I=h("router-link"),p=h("SshPre");return T(),x(w,{title:n.$t("form.label.textarea"),class:"demo"},{toolbar:o(()=>[t(I,{to:{name:"form"},class:"back"},{default:o(()=>[e(i(n.$t("common.back")),1)]),_:1})]),default:o(()=>[e(),a("section",null,[a("h2",null,i(n.$t("form.label.basicInput")),1),e(),a("div",z,[t(p,{language:"html-vue"},{default:o(()=>[e(`
          <Form>
            <TextareaInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </Form>

          <script setup lang="ts">
          import { TextareaInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),t(l(d),null,{default:o(()=>[t(l(m),{modelValue:l(r).noLabelInput,"onUpdate:modelValue":u[0]||(u[0]=s=>l(r).noLabelInput=s),placeholder:n.$t("form.placeholder.input")},null,8,["modelValue","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(n.$t("form.label.labelInput")),1),e(),a("div",C,[t(p,{language:"html-vue"},{default:o(()=>[e(`
          <Form>
            <TextareaInput 
              v-model="input"
              label="Input"
              placeholder="Enter Input"
            />
          </Form>

          <script setup lang="ts">
          import { TextareaInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),t(l(d),null,{default:o(()=>[t(l(m),{modelValue:l(r).input,"onUpdate:modelValue":u[1]||(u[1]=s=>l(r).input=s),label:n.$t("form.label.textarea"),placeholder:n.$t("form.placeholder.textarea")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(n.$t("form.label.disabled")),1),e(),a("div",E,[t(p,{language:"html-vue"},{default:o(()=>[e(`
          <Form>
            <TextareaInput 
              v-model="input"
              label="Disabled"
              disabled
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),t(l(d),null,{default:o(()=>[t(l(m),{modelValue:l(r).disabled,"onUpdate:modelValue":u[2]||(u[2]=s=>l(r).disabled=s),label:n.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(n.$t("form.label.withI18n")),1),e(),a("div",U,[t(p,{language:"html-vue"},{default:o(()=>[e(`
          <Form>
            <TextareaInput 
              v-model="input"
              :label="t('form.label.textarea')"
              :placeholder="t('form.placeholder.textarea')"
            />
          </Form>

          <script setup lang="ts">
          import { TextareaInput } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)]),_:1}),e(),t(l(d),null,{default:o(()=>[t(l(m),{modelValue:l(r).input,"onUpdate:modelValue":u[3]||(u[3]=s=>l(r).input=s),label:n.$t("form.label.textarea"),placeholder:n.$t("form.placeholder.textarea")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(n.$t("form.label.inputWithValidation")),1),e(),a("div",k,[t(p,{language:"html-vue"},{default:o(()=>[e(`
          <Form>
            <TextareaInput 
              v-model="input"
              :options="validationOptions"
              label="Textarea"
              placeholder="Enter input"
            />
          </Form>

          <script setup lang="ts">
          import { TextareaInput } from "@dzangolab/vue3-form";
          
          const validationOptions = {
            ignore_whitespace: true,
            required: true
          };
          <\/script>
        `)]),_:1}),e(),t(l(d),null,{default:o(()=>[t(l(m),{modelValue:l(r).inputWithValidation,"onUpdate:modelValue":u[4]||(u[4]=s=>l(r).inputWithValidation=s),label:n.$t("form.label.textarea"),options:b,placeholder:n.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(n.$t("form.label.customErrorMessageInput")),1),e(),a("div",q,[t(p,{language:"html-vue"},{default:o(()=>[e(`
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
          import { TextareaInput } from "@dzangolab/vue3-form";

          const validationMessages = {
            required: "The field should not be empty"
          };

          const validationOptions = {
            ignore_whitespace: true,
            required: true
          };
          <\/script>
        `)]),_:1}),e(),t(l(d),null,{default:o(()=>[t(l(m),{modelValue:l(r).textInput,"onUpdate:modelValue":u[5]||(u[5]=s=>l(r).textInput=s),label:n.$t("form.label.textarea"),"error-messages":v,options:b,placeholder:n.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(n.$t("form.label.customValidationInput")),1),e(),a("div",y,[t(p,{language:"html-vue"},{default:o(()=>[e(`
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
          import { Input } from "@dzangolab/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .min(15, { message: "Title must be at least 15 character(s)"") });
          <\/script>
        `)]),_:1}),e(),t(l(d),null,{default:o(()=>[t(l(m),{modelValue:l(r).customValidationInput,"onUpdate:modelValue":u[6]||(u[6]=s=>l(r).customValidationInput=s),label:n.$t("form.label.textarea"),placeholder:n.$t("form.placeholder.input"),schema:l(g),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(n.$t("form.label.customColsRowsInput")),1),e(),a("div",S,[t(p,{language:"html-vue"},{default:o(()=>[e(`
          <Form>
            <TextareaInput 
              v-model="input"
              class="textarea-field"
              cols="100",
              label="Textarea"
              placeholder="Enter input"
              rows="10"
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
        `)]),_:1}),e(),t(l(d),null,{default:o(()=>[t(l(m),{modelValue:l(r).customRowsColsInput,"onUpdate:modelValue":u[7]||(u[7]=s=>l(r).customRowsColsInput=s),cols:100,label:n.$t("form.label.textarea"),placeholder:n.$t("form.placeholder.input"),rows:10,class:"textarea-field"},null,8,["modelValue","label","placeholder"])]),_:1})])])]),_:1},8,["title"])}}});export{W as default};

import{m as V,e as p,Q as d}from"./DzangolabVue3Form.es-9cbbee53.js";import{d as x,u as _,b as $,e as c,r as h,o as T,c as F,w as o,a as t,t as m,f as n,g as l,h as e}from"./index-45be5317.js";const y={class:"section-content"},w={class:"section-content"},z={class:"section-content"},S={class:"section-content"},U={class:"section-content"},E={class:"section-content"},C={class:"section-content"},q={class:"section-content"},O={class:"section-content"},D={name:"TextareaInputField"},W=x({...D,setup(M){const{t:f}=_(),g=V.string().min(15,{message:f("form.errors.input.min",{length:15})}),v={required:f("form.errors.input.required")},b={ignore_whitespace:!0,required:!0};let u=$({customRowsColsInput:c(),customStyleInput:c(),customValidationInput:c(),disabled:c("Disabled textarea input"),input:c(),inputWithValidation:c(),noLabelInput:c(),textInput:c()});return(a,r)=>{const i=h("SshPre"),I=h("Page");return T(),F(I,{title:a.$t("form.label.textarea"),class:"demo"},{default:o(()=>[t("section",null,[t("h2",null,m(a.$t("form.label.basicInput")),1),n(),t("div",y,[l(i,{language:"html-vue"},{default:o(()=>[n(`
          <Form>
            <TextareaInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </Form>

          <script setup lang="ts">
          import { TextareaInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),n(),l(e(d),null,{default:o(()=>[l(e(p),{modelValue:e(u).noLabelInput,"onUpdate:modelValue":r[0]||(r[0]=s=>e(u).noLabelInput=s),placeholder:a.$t("form.placeholder.input")},null,8,["modelValue","placeholder"])]),_:1})])]),n(),t("section",null,[t("h2",null,m(a.$t("form.label.labelInput")),1),n(),t("div",w,[l(i,{language:"html-vue"},{default:o(()=>[n(`
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
        `)]),_:1}),n(),l(e(d),null,{default:o(()=>[l(e(p),{modelValue:e(u).input,"onUpdate:modelValue":r[1]||(r[1]=s=>e(u).input=s),label:a.$t("form.label.textarea"),placeholder:a.$t("form.placeholder.textarea")},null,8,["modelValue","label","placeholder"])]),_:1})])]),n(),t("section",null,[t("h2",null,m(a.$t("form.label.disabled")),1),n(),t("div",z,[l(i,{language:"html-vue"},{default:o(()=>[n(`
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
        `)]),_:1}),n(),l(e(d),null,{default:o(()=>[l(e(p),{modelValue:e(u).disabled,"onUpdate:modelValue":r[2]||(r[2]=s=>e(u).disabled=s),label:a.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),n(),t("section",null,[t("h2",null,m(a.$t("form.label.withI18n")),1),n(),t("div",S,[l(i,{language:"html-vue"},{default:o(()=>[n(`
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
        `)]),_:1}),n(),l(e(d),null,{default:o(()=>[l(e(p),{modelValue:e(u).input,"onUpdate:modelValue":r[3]||(r[3]=s=>e(u).input=s),label:a.$t("form.label.textarea"),placeholder:a.$t("form.placeholder.textarea")},null,8,["modelValue","label","placeholder"])]),_:1})])]),n(),t("section",null,[t("h2",null,m(a.$t("form.label.inputWithValidation")),1),n(),t("div",U,[l(i,{language:"html-vue"},{default:o(()=>[n(`
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
        `)]),_:1}),n(),l(e(d),null,{default:o(()=>[l(e(p),{modelValue:e(u).inputWithValidation,"onUpdate:modelValue":r[4]||(r[4]=s=>e(u).inputWithValidation=s),label:a.$t("form.label.textarea"),options:b,placeholder:a.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1})])]),n(),t("section",null,[t("h2",null,m(a.$t("form.label.customErrorMessageInput")),1),n(),t("div",E,[l(i,{language:"html-vue"},{default:o(()=>[n(`
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
        `)]),_:1}),n(),l(e(d),null,{default:o(()=>[l(e(p),{modelValue:e(u).textInput,"onUpdate:modelValue":r[5]||(r[5]=s=>e(u).textInput=s),label:a.$t("form.label.textarea"),"error-messages":v,options:b,placeholder:a.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1})])]),n(),t("section",null,[t("h2",null,m(a.$t("form.label.customValidationInput")),1),n(),t("div",C,[l(i,{language:"html-vue"},{default:o(()=>[n(`
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
        `)]),_:1}),n(),l(e(d),null,{default:o(()=>[l(e(p),{modelValue:e(u).customValidationInput,"onUpdate:modelValue":r[6]||(r[6]=s=>e(u).customValidationInput=s),label:a.$t("form.label.textarea"),placeholder:a.$t("form.placeholder.input"),schema:e(g),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1})])]),n(),t("section",null,[t("h2",null,m(a.$t("form.label.customColsRowsInput")),1),n(),t("div",q,[l(i,{language:"html-vue"},{default:o(()=>[n(`
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
        `)]),_:1}),n(),l(e(d),null,{default:o(()=>[l(e(p),{modelValue:e(u).customRowsColsInput,"onUpdate:modelValue":r[7]||(r[7]=s=>e(u).customRowsColsInput=s),cols:100,label:a.$t("form.label.textarea"),placeholder:a.$t("form.placeholder.input"),rows:10,class:"textarea-field"},null,8,["modelValue","label","placeholder"])]),_:1})])]),n(),t("section",null,[t("h2",null,m(a.$t("form.label.customStyleInput")),1),n(),t("div",O,[l(i,{language:"html-vue"},{default:o(()=>[n(`
          <Form>
            <TextareaInput 
              v-model="input"
              class="custom-style-input"
              label="Textarea"
              placeholder="Enter input"
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>

          <style>
          .custom-style-input {
            flex-direction: row;
            align-items: center;
          }

          .custom-style-input input {
            --_input-field-border-color: #007aff;
            --_input-field-border-radius: 0.5em;
            --_input-field-padding-h: 0.5em;
            --_input-field-padding-v: 0.5em;
            --_input-field-textarea-height: 8rem;
            --_input-field-textarea-resize: both;
            --_input-field-textarea-width: 100%;

            color: #007aff;
          }

          .custom-style-input input:focus {
            box-shadow: 0 0 0 0.25rem #03449e9a;
          }
          </style>
        `)]),_:1}),n(),l(e(d),null,{default:o(()=>[l(e(p),{modelValue:e(u).customStyleInput,"onUpdate:modelValue":r[8]||(r[8]=s=>e(u).customStyleInput=s),label:a.$t("form.label.textarea"),placeholder:a.$t("form.placeholder.input"),class:"custom-style-input"},null,8,["modelValue","label","placeholder"])]),_:1})])])]),_:1},8,["title"])}}});export{W as default};

import{e as p,o as m}from"./DzangolabVue3Form.es-beab3102.js";import{d as V,a7 as _,p as $,j as c,K as h,o as T,c as x,w as o,L as n,C as e,M as i,f as a,E as t}from"./index-66214709-ea91fece.js";import{m as F}from"./index-796c1423.js";import{_ as w}from"./FormPage.vue_vue_type_style_index_0_lang-96715164.js";const z={class:"section-content"},C={class:"section-content"},E={class:"section-content"},U={class:"section-content"},k={class:"section-content"},q={class:"section-content"},y={class:"section-content"},S={class:"section-content"},M={name:"TextareaInputField"},B=V({...M,setup(O){const{t:f}=_(),g=F.string().min(15,{message:f("form.errors.input.min",{length:15})}),v={required:f("form.errors.input.required")},b={ignore_whitespace:!0,required:!0};let r=$({customRowsColsInput:c(),customValidationInput:c(),disabled:c("Disabled textarea input"),input:c(),inputWithValidation:c(),noLabelInput:c(),textInput:c()});return(l,u)=>{const I=h("router-link"),d=h("SshPre");return T(),x(w,{title:l.$t("form.label.textarea"),class:"demo"},{toolbar:o(()=>[n(I,{to:{name:"form"},class:"back"},{default:o(()=>[e(i(l.$t("common.back")),1)]),_:1})]),default:o(()=>[e(),a("section",null,[a("h2",null,i(l.$t("form.label.basicInput")),1),e(),a("div",z,[n(d,{language:"html-vue"},{default:o(()=>[e(`
          <Form>
            <TextareaInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </Form>

          <script setup lang="ts">
          import { TextareaInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),n(t(p),null,{default:o(()=>[n(t(m),{modelValue:t(r).noLabelInput,"onUpdate:modelValue":u[0]||(u[0]=s=>t(r).noLabelInput=s),placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(l.$t("form.label.labelInput")),1),e(),a("div",C,[n(d,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),n(t(p),null,{default:o(()=>[n(t(m),{modelValue:t(r).input,"onUpdate:modelValue":u[1]||(u[1]=s=>t(r).input=s),label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.textarea")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(l.$t("form.label.disabled")),1),e(),a("div",E,[n(d,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),n(t(p),null,{default:o(()=>[n(t(m),{modelValue:t(r).disabled,"onUpdate:modelValue":u[2]||(u[2]=s=>t(r).disabled=s),label:l.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(l.$t("form.label.withI18n")),1),e(),a("div",U,[n(d,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),n(t(p),null,{default:o(()=>[n(t(m),{modelValue:t(r).input,"onUpdate:modelValue":u[3]||(u[3]=s=>t(r).input=s),label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.textarea")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(l.$t("form.label.inputWithValidation")),1),e(),a("div",k,[n(d,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),n(t(p),null,{default:o(()=>[n(t(m),{modelValue:t(r).inputWithValidation,"onUpdate:modelValue":u[4]||(u[4]=s=>t(r).inputWithValidation=s),label:l.$t("form.label.textarea"),options:b,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(l.$t("form.label.customErrorMessageInput")),1),e(),a("div",q,[n(d,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),n(t(p),null,{default:o(()=>[n(t(m),{modelValue:t(r).textInput,"onUpdate:modelValue":u[5]||(u[5]=s=>t(r).textInput=s),label:l.$t("form.label.textarea"),"error-messages":v,options:b,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(l.$t("form.label.customValidationInput")),1),e(),a("div",y,[n(d,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),n(t(p),null,{default:o(()=>[n(t(m),{modelValue:t(r).customValidationInput,"onUpdate:modelValue":u[6]||(u[6]=s=>t(r).customValidationInput=s),label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.input"),schema:t(g),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(l.$t("form.label.customColsRowsInput")),1),e(),a("div",S,[n(d,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),n(t(p),null,{default:o(()=>[n(t(m),{modelValue:t(r).customRowsColsInput,"onUpdate:modelValue":u[7]||(u[7]=s=>t(r).customRowsColsInput=s),cols:100,label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.input"),rows:10,class:"textarea-field"},null,8,["modelValue","label","placeholder"])]),_:1})])])]),_:1},8,["title"])}}});export{B as default};

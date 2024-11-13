import{m as _,l as p,Z as m}from"./DzangolabVue3Form.es-ea7378a3.js";import{d as $,u as T,b as x,e as c,r as f,o as F,c as w,w as o,f as t,g as e,t as i,a,h as n}from"./index-282387c5.js";const z={class:"section-content"},U={class:"section-content"},C={class:"section-content"},E={class:"section-content"},k={class:"section-content"},q={class:"section-content"},y={class:"section-content"},S={class:"section-content"},O={name:"TextareaInputField"},R=$({...O,setup(D){const{t:b}=T(),g=_.string().min(15,{message:b("form.errors.input.min",{length:15})}),v={required:b("form.errors.input.required")},h={ignore_whitespace:!0,required:!0};let r=x({customRowsColsInput:c(),customValidationInput:c(),disabled:c("Disabled textarea input"),input:c(),inputWithValidation:c(),noLabelInput:c(),textInput:c()});return(l,u)=>{const I=f("router-link"),d=f("SshPre"),V=f("Page");return F(),w(V,{title:l.$t("form.label.textarea"),class:"demo"},{toolbar:o(()=>[t(I,{to:{name:"form"},class:"back"},{default:o(()=>[e(i(l.$t("common.back")),1)]),_:1})]),default:o(()=>[e(),a("section",null,[a("h2",null,i(l.$t("form.label.basicInput")),1),e(),a("div",z,[t(d,{language:"html-vue"},{default:o(()=>[e(`
          <Form>
            <TextareaInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </Form>

          <script setup lang="ts">
          import { TextareaInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),t(n(m),null,{default:o(()=>[t(n(p),{modelValue:n(r).noLabelInput,"onUpdate:modelValue":u[0]||(u[0]=s=>n(r).noLabelInput=s),placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(l.$t("form.label.labelInput")),1),e(),a("div",U,[t(d,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:o(()=>[t(n(p),{modelValue:n(r).input,"onUpdate:modelValue":u[1]||(u[1]=s=>n(r).input=s),label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.textarea")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(l.$t("form.label.disabled")),1),e(),a("div",C,[t(d,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:o(()=>[t(n(p),{modelValue:n(r).disabled,"onUpdate:modelValue":u[2]||(u[2]=s=>n(r).disabled=s),label:l.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(l.$t("form.label.withI18n")),1),e(),a("div",E,[t(d,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:o(()=>[t(n(p),{modelValue:n(r).input,"onUpdate:modelValue":u[3]||(u[3]=s=>n(r).input=s),label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.textarea")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(l.$t("form.label.inputWithValidation")),1),e(),a("div",k,[t(d,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:o(()=>[t(n(p),{modelValue:n(r).inputWithValidation,"onUpdate:modelValue":u[4]||(u[4]=s=>n(r).inputWithValidation=s),label:l.$t("form.label.textarea"),options:h,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(l.$t("form.label.customErrorMessageInput")),1),e(),a("div",q,[t(d,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:o(()=>[t(n(p),{modelValue:n(r).textInput,"onUpdate:modelValue":u[5]||(u[5]=s=>n(r).textInput=s),label:l.$t("form.label.textarea"),"error-messages":v,options:h,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(l.$t("form.label.customValidationInput")),1),e(),a("div",y,[t(d,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:o(()=>[t(n(p),{modelValue:n(r).customValidationInput,"onUpdate:modelValue":u[6]||(u[6]=s=>n(r).customValidationInput=s),label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.input"),schema:n(g),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(l.$t("form.label.customColsRowsInput")),1),e(),a("div",S,[t(d,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:o(()=>[t(n(p),{modelValue:n(r).customRowsColsInput,"onUpdate:modelValue":u[7]||(u[7]=s=>n(r).customRowsColsInput=s),cols:100,label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.input"),rows:10,class:"textarea-field"},null,8,["modelValue","label","placeholder"])]),_:1})])])]),_:1},8,["title"])}}});export{R as default};

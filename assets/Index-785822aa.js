import{m as _,l as d,Z as m}from"./DzangolabVue3Form.es-613b07ef.js";import{d as $,u as x,b as T,e as c,r as f,o as F,c as y,w as o,f as t,g as e,t as i,a,h as n}from"./index-577793d9.js";const w={class:"section-content"},z={class:"section-content"},S={class:"section-content"},U={class:"section-content"},E={class:"section-content"},C={class:"section-content"},k={class:"section-content"},q={class:"section-content"},O={class:"section-content"},D={name:"TextareaInputField"},W=$({...D,setup(M){const{t:b}=x(),g=_.string().min(15,{message:b("form.errors.input.min",{length:15})}),v={required:b("form.errors.input.required")},h={ignore_whitespace:!0,required:!0};let u=T({customRowsColsInput:c(),customStyleInput:c(),customValidationInput:c(),disabled:c("Disabled textarea input"),input:c(),inputWithValidation:c(),noLabelInput:c(),textInput:c()});return(l,r)=>{const I=f("router-link"),p=f("SshPre"),V=f("Page");return F(),y(V,{title:l.$t("form.label.textarea"),class:"demo"},{toolbar:o(()=>[t(I,{to:{name:"form"},class:"back"},{default:o(()=>[e(i(l.$t("common.back")),1)]),_:1})]),default:o(()=>[e(),a("section",null,[a("h2",null,i(l.$t("form.label.basicInput")),1),e(),a("div",w,[t(p,{language:"html-vue"},{default:o(()=>[e(`
          <Form>
            <TextareaInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </Form>

          <script setup lang="ts">
          import { TextareaInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),t(n(m),null,{default:o(()=>[t(n(d),{modelValue:n(u).noLabelInput,"onUpdate:modelValue":r[0]||(r[0]=s=>n(u).noLabelInput=s),placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(l.$t("form.label.labelInput")),1),e(),a("div",z,[t(p,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:o(()=>[t(n(d),{modelValue:n(u).input,"onUpdate:modelValue":r[1]||(r[1]=s=>n(u).input=s),label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.textarea")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(l.$t("form.label.disabled")),1),e(),a("div",S,[t(p,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:o(()=>[t(n(d),{modelValue:n(u).disabled,"onUpdate:modelValue":r[2]||(r[2]=s=>n(u).disabled=s),label:l.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(l.$t("form.label.withI18n")),1),e(),a("div",U,[t(p,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:o(()=>[t(n(d),{modelValue:n(u).input,"onUpdate:modelValue":r[3]||(r[3]=s=>n(u).input=s),label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.textarea")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(l.$t("form.label.inputWithValidation")),1),e(),a("div",E,[t(p,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:o(()=>[t(n(d),{modelValue:n(u).inputWithValidation,"onUpdate:modelValue":r[4]||(r[4]=s=>n(u).inputWithValidation=s),label:l.$t("form.label.textarea"),options:h,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(l.$t("form.label.customErrorMessageInput")),1),e(),a("div",C,[t(p,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:o(()=>[t(n(d),{modelValue:n(u).textInput,"onUpdate:modelValue":r[5]||(r[5]=s=>n(u).textInput=s),label:l.$t("form.label.textarea"),"error-messages":v,options:h,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(l.$t("form.label.customValidationInput")),1),e(),a("div",k,[t(p,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:o(()=>[t(n(d),{modelValue:n(u).customValidationInput,"onUpdate:modelValue":r[6]||(r[6]=s=>n(u).customValidationInput=s),label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.input"),schema:n(g),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(l.$t("form.label.customColsRowsInput")),1),e(),a("div",q,[t(p,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:o(()=>[t(n(d),{modelValue:n(u).customRowsColsInput,"onUpdate:modelValue":r[7]||(r[7]=s=>n(u).customRowsColsInput=s),cols:100,label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.input"),rows:10,class:"textarea-field"},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,i(l.$t("form.label.customStyleInput")),1),e(),a("div",O,[t(p,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:o(()=>[t(n(d),{modelValue:n(u).customStyleInput,"onUpdate:modelValue":r[8]||(r[8]=s=>n(u).customStyleInput=s),label:l.$t("form.label.textarea"),placeholder:l.$t("form.placeholder.input"),class:"custom-style-input"},null,8,["modelValue","label","placeholder"])]),_:1})])])]),_:1},8,["title"])}}});export{W as default};

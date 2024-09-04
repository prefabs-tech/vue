import{d as V,u as x,b as _,e as p,o as $,c as T,w as u,a as s,t as d,f as e,g as l,h as t,r as b}from"./index-1af78c85.js";import{m as y,X as m,z as f}from"./DzangolabVue3Form.es-9e841985.js";const w={class:"demo-section"},z={class:"demo-section"},F={class:"demo-section"},S={class:"demo-section"},E={class:"demo-section"},U={class:"demo-section"},C={class:"demo-section"},q={class:"demo-section"},O={name:"TextareaInputField"},R=V({...O,setup(D){const{t:c}=x(),g=y.string().min(15,{message:c("form.errors.input.min",{length:15})}),I={required:c("form.errors.input.required")},h={ignore_whitespace:!0,required:!0};let a=_({customRowsColsInput:p(),customStyleInput:p(),customValidationInput:p(),disabled:p("Disabled textarea input"),input:p(),inputWithValidation:p(),noLabelInput:p(),textInput:p()});return(n,o)=>{const i=b("SshPre"),v=b("Page");return $(),T(v,{title:n.$t("form.label.textarea")},{default:u(()=>[s("section",w,[s("h3",null,d(n.$t("form.label.basicInput")),1),e(),l(i,{language:"html-vue"},{default:u(()=>[e(`
        <template>
          <TextareaInput 
            v-model="input"
            placeholder="Enter Input"
          />
        </template>

        <script setup lang="ts">
        import { TextareaInput } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),l(t(m),{modelValue:t(a).noLabelInput,"onUpdate:modelValue":o[0]||(o[0]=r=>t(a).noLabelInput=r),placeholder:n.$t("form.placeholder.input"),class:"form-field"},null,8,["modelValue","placeholder"])]),e(),s("section",z,[s("h3",null,d(n.$t("form.label.labelInput")),1),e(),l(i,{language:"html-vue"},{default:u(()=>[e(`
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
      `)]),_:1}),e(),l(t(m),{modelValue:t(a).input,"onUpdate:modelValue":o[1]||(o[1]=r=>t(a).input=r),label:n.$t("form.label.textarea"),placeholder:n.$t("form.placeholder.textarea"),class:"form-field"},null,8,["modelValue","label","placeholder"])]),e(),s("section",F,[s("h3",null,d(n.$t("form.label.disabled")),1),e(),l(i,{language:"html-vue"},{default:u(()=>[e(`
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
      `)]),_:1}),e(),l(t(m),{modelValue:t(a).disabled,"onUpdate:modelValue":o[2]||(o[2]=r=>t(a).disabled=r),label:n.$t("form.label.disabled"),class:"form-field",disabled:""},null,8,["modelValue","label"])]),e(),s("section",S,[s("h3",null,d(n.$t("form.label.inputWithValidation")),1),e(),l(i,{language:"html-vue"},{default:u(()=>[e(`
        <template>
          <Form>
            <TextareaInput 
              v-model="input"
              :options="validationOptions"
              label="Textarea"
              placeholder="Enter input"
            />
          </Form>
        </template>

        <script setup lang="ts">
        import { Form, TextareaInput } from "@dzangolab/vue3-form";
        
        const validationOptions = {
          ignore_whitespace: true,
          required: true
        };
        <\/script>
      `)]),_:1}),e(),l(t(f),null,{default:u(()=>[l(t(m),{modelValue:t(a).inputWithValidation,"onUpdate:modelValue":o[3]||(o[3]=r=>t(a).inputWithValidation=r),label:n.$t("form.label.textarea"),options:h,placeholder:n.$t("form.placeholder.input"),class:"form-field"},null,8,["modelValue","label","placeholder"])]),_:1})]),e(),s("section",E,[s("h3",null,d(n.$t("form.label.customErrorMessageInput")),1),e(),l(i,{language:"html-vue"},{default:u(()=>[e(`
        <template>
          <Form>
            <TextareaInput 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Textarea"
              placeholder="Enter input"
            />
          </Form>
        </template>

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
      `)]),_:1}),e(),l(t(f),null,{default:u(()=>[l(t(m),{modelValue:t(a).textInput,"onUpdate:modelValue":o[4]||(o[4]=r=>t(a).textInput=r),label:n.$t("form.label.textarea"),"error-messages":I,options:h,placeholder:n.$t("form.placeholder.input"),class:"form-field"},null,8,["modelValue","label","placeholder"])]),_:1})]),e(),s("section",U,[s("h3",null,d(n.$t("form.label.customValidationInput")),1),e(),l(i,{language:"html-vue"},{default:u(()=>[e(`
        <template>
          <Form>
            <TextareaInput 
              v-model="input"
              :schema="inputSchema"
              label="Textarea""
              placeholder="Enter input"
              name="input"
            />
          </Form>
        </template>

        <script setup lang="ts">
        import { Form, Input } from "@dzangolab/vue3-form";
        import { z } from "zod";

        const inputSchema = z.string()
          .min(15, { message: "Input must be at least 15 character(s)"") });
        <\/script>
      `)]),_:1}),e(),l(t(f),null,{default:u(()=>[l(t(m),{modelValue:t(a).customValidationInput,"onUpdate:modelValue":o[5]||(o[5]=r=>t(a).customValidationInput=r),label:n.$t("form.label.textarea"),placeholder:n.$t("form.placeholder.input"),schema:t(g),class:"form-field",name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1})]),e(),s("section",C,[s("h3",null,d(n.$t("form.label.customColsRowsInput")),1),e(),l(i,{language:"html-vue"},{default:u(()=>[e(`
        <template>
          <TextareaInput 
            v-model="input"
            class="textarea-field"
            cols="100",
            label="Textarea"
            placeholder="Enter input"
            rows="10"
          />
        </template>

        <script setup lang="ts">
        import { Input } from "@dzangolab/vue3-form";
        <\/script>

        <style>
        .textarea-field textarea {
          --_input-field-textarea-height: unset;
          --_input-field-textarea-width: unset;
        }
        </style>
      `)]),_:1}),e(),l(t(m),{modelValue:t(a).customRowsColsInput,"onUpdate:modelValue":o[6]||(o[6]=r=>t(a).customRowsColsInput=r),cols:100,label:n.$t("form.label.textarea"),placeholder:n.$t("form.placeholder.input"),rows:10,class:"form-field textarea-field"},null,8,["modelValue","label","placeholder"])]),e(),s("section",q,[s("h3",null,d(n.$t("form.label.customStyleInput")),1),e(),l(i,{language:"html-vue"},{default:u(()=>[e(`
        <template>
          <TextareaInput 
            v-model="input"
            class="custom-style-input"
            label="Textarea"
            placeholder="Enter input"
          />
        </template>

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
      `)]),_:1}),e(),l(t(m),{modelValue:t(a).customStyleInput,"onUpdate:modelValue":o[7]||(o[7]=r=>t(a).customStyleInput=r),label:n.$t("form.label.textarea"),placeholder:n.$t("form.placeholder.input"),class:"form-field custom-style-input"},null,8,["modelValue","label","placeholder"])])]),_:1},8,["title"])}}});export{R as default};

import{d as V,u as _,b as $,e as r,o as y,c as T,w as p,a as u,t as d,f as e,g as l,h as n,r as h}from"./index-378880eb.js";import{m as z,Z as m,z as c}from"./DzangolabVue3Form.es-9bf5e5df.js";const F={class:"demo-section"},S={class:"demo-section"},w={class:"demo-section"},x={class:"demo-section"},E={class:"demo-section"},U={class:"demo-section"},q={class:"demo-section"},O={name:"TextInputField"},B=V({...O,setup(M){const{t:f}=_(),g=z.string().length(5,{message:f("form.errors.input.length",{length:5})}),I={required:f("form.errors.input.required")},b={ignore_whitespace:!0,required:!0};let o=$({customStyleInput:r(),customValidationInput:r(),disabled:r("dzangolab"),input:r(),inputWithValidation:r(),noLabelInput:r(),textInput:r()});return(t,a)=>{const i=h("SshPre"),v=h("Page");return y(),T(v,{title:t.$t("form.label.textInput")},{default:p(()=>[u("section",F,[u("h3",null,d(t.$t("form.label.basicInput")),1),e(),l(i,{language:"html-vue"},{default:p(()=>[e(`
        <template>
          <TextInput 
            v-model="input"
            placeholder="Enter Input"
          />
        </template>

        <script setup lang="ts">
        import { TextInput } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),l(n(m),{modelValue:n(o).noLabelInput,"onUpdate:modelValue":a[0]||(a[0]=s=>n(o).noLabelInput=s),placeholder:t.$t("form.placeholder.input"),class:"form-field"},null,8,["modelValue","placeholder"])]),e(),u("section",S,[u("h3",null,d(t.$t("form.label.labelInput")),1),e(),l(i,{language:"html-vue"},{default:p(()=>[e(`
        <template>
          <TextInput 
            v-model="input"
            label="Input"
            placeholder="Enter Input"
          />
        </template>

        <script setup lang="ts">
        import { TextInput } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),l(n(m),{modelValue:n(o).input,"onUpdate:modelValue":a[1]||(a[1]=s=>n(o).input=s),label:t.$t("form.label.textInput"),placeholder:t.$t("form.placeholder.textInput"),class:"form-field"},null,8,["modelValue","label","placeholder"])]),e(),u("section",w,[u("h3",null,d(t.$t("form.label.disabled")),1),e(),l(i,{language:"html-vue"},{default:p(()=>[e(`
        <template>
          <TextInput 
            v-model="input"
            label="Disabled"
            disabled
          />
        </template>

        <script setup lang="ts">
        import { Input } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),l(n(m),{modelValue:n(o).disabled,"onUpdate:modelValue":a[2]||(a[2]=s=>n(o).disabled=s),label:t.$t("form.label.disabled"),class:"form-field",disabled:""},null,8,["modelValue","label"])]),e(),u("section",x,[u("h3",null,d(t.$t("form.label.inputWithValidation")),1),e(),l(i,{language:"html-vue"},{default:p(()=>[e(`
        <template>
          <Form>
            <TextInput 
              v-model="input"
              :options="validationOptions"
              label="Input"
              placeholder="Enter input"
            />
          </Form>
        </template>

        <script setup lang="ts">
        import { Form, TextInput } from "@dzangolab/vue3-form";
        
        const validationOptions = {
          ignore_whitespace: true,
          required: true
        };
        <\/script>
      `)]),_:1}),e(),l(n(c),null,{default:p(()=>[l(n(m),{modelValue:n(o).inputWithValidation,"onUpdate:modelValue":a[3]||(a[3]=s=>n(o).inputWithValidation=s),label:t.$t("form.label.input"),options:b,placeholder:t.$t("form.placeholder.input"),class:"form-field"},null,8,["modelValue","label","placeholder"])]),_:1})]),e(),u("section",E,[u("h3",null,d(t.$t("form.label.customErrorMessageInput")),1),e(),l(i,{language:"html-vue"},{default:p(()=>[e(`
        <template>
          <Form>
            <TextInput 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Input"
              placeholder="Enter input"
            />
          </Form>
        </template>

        <script setup lang="ts">
        import { Form, TextInput } from "@dzangolab/vue3-form";
        
        const validationMessages = {
          required: "The field should not be empty"
        };

        const validationOptions = {
          ignore_whitespace: true,
          required: true
        };
        <\/script>
      `)]),_:1}),e(),l(n(c),null,{default:p(()=>[l(n(m),{modelValue:n(o).textInput,"onUpdate:modelValue":a[4]||(a[4]=s=>n(o).textInput=s),label:t.$t("form.label.input"),"error-messages":I,options:b,placeholder:t.$t("form.placeholder.input"),class:"form-field"},null,8,["modelValue","label","placeholder"])]),_:1})]),e(),u("section",U,[u("h3",null,d(t.$t("form.label.customValidationInput")),1),e(),l(i,{language:"html-vue"},{default:p(()=>[e(`
        <template>
          <Form>
            <TextInput 
              v-model="input"
              :schema="inputSchema"
              label="Input"
              placeholder="Enter input"
              name="input"
            />
          </Form>
        </template>

        <script setup lang="ts">
        import { Form, Input } from "@dzangolab/vue3-form";
        import { z } from "zod";

        const inputSchema = z.string()
          .length(5, { message: "Input must be exactly 5 characters long") });
        <\/script>
      `)]),_:1}),e(),l(n(c),null,{default:p(()=>[l(n(m),{modelValue:n(o).customValidationInput,"onUpdate:modelValue":a[5]||(a[5]=s=>n(o).customValidationInput=s),label:t.$t("form.label.input"),placeholder:t.$t("form.placeholder.input"),schema:n(g),class:"form-field",name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1})]),e(),u("section",q,[u("h3",null,d(t.$t("form.label.customStyleInput")),1),e(),l(i,{language:"html-vue"},{default:p(()=>[e(`
        <template>
          <TextInput 
            v-model="input"
            class="custom-style-input"
            label="Input"
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

          color: #007aff;
        }

        .custom-style-input input:focus {
          box-shadow: 0 0 0 0.25rem #03449e9a;
        }
        </style>
      `)]),_:1}),e(),l(n(m),{modelValue:n(o).customStyleInput,"onUpdate:modelValue":a[6]||(a[6]=s=>n(o).customStyleInput=s),label:t.$t("form.label.input"),placeholder:t.$t("form.placeholder.input"),class:"form-field custom-style-input"},null,8,["modelValue","label","placeholder"])])]),_:1},8,["title"])}}});export{B as default};

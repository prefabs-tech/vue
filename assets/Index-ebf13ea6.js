import{d as g,u as I,f as V,g as r,o as y,c as v,w as u,a as s,t as d,e,b as t,h as n,r as f}from"./index-c63e278a.js";import{m as $,y as i,b as _}from"./DzangolabVue3Form.es-c25be186.js";const w={class:"demo-section"},z={class:"demo-section"},S={class:"demo-section"},U={class:"demo-section"},W={class:"demo-section"},E={class:"demo-section"},P={name:"InputField"},C=g({...P,setup(F){const{t:c}=I(),b=$.string().min(3,{message:c("form.errors.input.min",{length:3})});let a=V({disabled:r("monorepo@gmail.com"),input:r(),inputWithValidation:r(),noLabelInput:r(),numberInput:r(),passwordInput:r()});return(l,o)=>{const m=f("SshPre"),h=f("Page");return y(),v(h,{title:l.$t("form.label.input")},{default:u(()=>[s("section",w,[s("h3",null,d(l.$t("form.label.basicInput")),1),e(),t(m,{language:"html-vue"},{default:u(()=>[e(`
        <template>
          <Input 
            v-model="input"
            placeholder="Enter Input"
            type="text"
          />
        </template>

        <script setup lang="ts">
        import { Input } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),t(n(i),{modelValue:n(a).noLabelInput,"onUpdate:modelValue":o[0]||(o[0]=p=>n(a).noLabelInput=p),placeholder:l.$t("form.placeholder.input"),class:"form-field",type:"text"},null,8,["modelValue","placeholder"])]),e(),s("section",z,[s("h3",null,d(l.$t("form.label.labelInput")),1),e(),t(m,{language:"html-vue"},{default:u(()=>[e(`
        <template>
          <Input 
            v-model="input"
            label="Input"
            placeholder="Enter Input"
          />
        </template>

        <script setup lang="ts">
        import { Input } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),t(n(i),{modelValue:n(a).input,"onUpdate:modelValue":o[1]||(o[1]=p=>n(a).input=p),label:l.$t("form.label.input"),placeholder:l.$t("form.placeholder.input"),class:"form-field"},null,8,["modelValue","label","placeholder"])]),e(),s("section",S,[s("h3",null,d(l.$t("form.label.inputWithType")),1),e(),t(m,{language:"html-vue"},{default:u(()=>[e(`
        <template>
          <Input 
            v-model="password"
            label="Password"
            placeholder="Enter password"
            type="password"
          />
        </template>

        <script setup lang="ts">
        import { Input } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),t(n(i),{modelValue:n(a).passwordInput,"onUpdate:modelValue":o[2]||(o[2]=p=>n(a).passwordInput=p),label:l.$t("form.label.password"),placeholder:l.$t("form.placeholder.password"),class:"form-field",type:"password"},null,8,["modelValue","label","placeholder"])]),e(),s("section",U,[s("h3",null,d(l.$t("form.label.disabled")),1),e(),t(m,{language:"html-vue"},{default:u(()=>[e(`
        <template>
          <Input 
            v-model="email"
            label="Disabled input"
            type="email"
            disabled
          />
        </template>

        <script setup lang="ts">
        import { Input } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),t(n(i),{modelValue:n(a).disabled,"onUpdate:modelValue":o[3]||(o[3]=p=>n(a).disabled=p),label:l.$t("form.label.disabled"),class:"form-field",type:"email",disabled:""},null,8,["modelValue","label"])]),e(),s("section",W,[s("h3",null,d(l.$t("form.label.inputWithValidation")),1),e(),t(m,{language:"html-vue"},{default:u(()=>[e(`
        <template>
          <Form>
            <Input 
              v-model="inputWithValidation"
              :schema="inputSchema"
              label="Input"
              placeholder="Enter input"
              type="text"
            />
          </Form>
        </template>

        <script setup lang="ts">
        import { Form, Input } from "@dzangolab/vue3-form";
        import { z } from "zod";

        const inputSchema = z.string()
          .min(3, { message: "Input must be at least 3 character(s)" });        
        <\/script>
      `)]),_:1}),e(),t(n(_),null,{default:u(()=>[t(n(i),{modelValue:n(a).inputWithValidation,"onUpdate:modelValue":o[4]||(o[4]=p=>n(a).inputWithValidation=p),label:l.$t("form.label.input"),placeholder:l.$t("form.placeholder.input"),class:"form-field",schema:n(b),name:"input",type:"text"},null,8,["modelValue","label","placeholder","schema"])]),_:1})]),e(),s("section",E,[s("h3",null,d(l.$t("form.label.customStyleInput")),1),e(),t(m,{language:"html-vue"},{default:u(()=>[e(`
        <template>
          <Input 
            v-model="number"
            class="custom-style-input"
            label="Number"
            placeholder="Enter a number"
            type="number"
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
          --_input-field-border-radius: 1em;
          --_input-field-padding-h: 0.5em;
          --_input-field-padding-v: 0.5em;
        }

        .custom-style-input input:focus {
          box-shadow: 0 0 0 .25rem #004da08e;
        }
        </style>
      `)]),_:1}),e(),t(n(i),{modelValue:n(a).numberInput,"onUpdate:modelValue":o[5]||(o[5]=p=>n(a).numberInput=p),label:l.$t("form.label.number"),placeholder:l.$t("form.placeholder.number"),class:"form-field custom-style-input",type:"number"},null,8,["modelValue","label","placeholder"])])]),_:1},8,["title"])}}});export{C as default};

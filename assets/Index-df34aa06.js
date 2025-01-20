import{i as d,t as c}from"./DzangolabVue3Form.es-cfa65ffc.js";import{d as V,a7 as $,p as T,j as m,K as h,o as _,c as z,w as r,L as o,C as e,M as i,f as l,E as t}from"./index-6962cf42-46e4151e.js";import{m as F}from"./index-f4cc7241.js";import{_ as x}from"./FormPage.vue_vue_type_style_index_0_lang-b66c70a0.js";const E={class:"section-content"},U={class:"section-content"},k={class:"section-content"},q={class:"section-content"},w={class:"section-content"},S={class:"section-content"},M={class:"section-content"},O={name:"TextInputField"},D=V({...O,setup(C){const{t:f}=$(),g=F.string().length(5,{message:f("form.errors.input.length",{length:5})}),I={required:f("form.errors.input.required")},b={ignore_whitespace:!0,required:!0};let a=T({customValidationInput:m(),disabled:m("dzangolab"),input:m(),inputWithValidation:m(),noLabelInput:m(),textInput:m()});return(n,u)=>{const v=h("router-link"),p=h("SshPre");return _(),z(x,{title:n.$t("form.label.textInput"),class:"demo"},{toolbar:r(()=>[o(v,{to:{name:"form"},class:"back"},{default:r(()=>[e(i(n.$t("common.back")),1)]),_:1})]),default:r(()=>[e(),l("section",null,[l("h2",null,i(n.$t("form.label.basicInput")),1),e(),l("div",E,[o(t(d),{modelValue:t(a).noLabelInput,"onUpdate:modelValue":u[0]||(u[0]=s=>t(a).noLabelInput=s),placeholder:n.$t("form.placeholder.input")},null,8,["modelValue","placeholder"]),e(),o(p,{language:"html-vue"},{default:r(()=>[e(`
          <template>
            <TextInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { TextInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.labelInput")),1),e(),l("div",U,[o(t(d),{modelValue:t(a).input,"onUpdate:modelValue":u[1]||(u[1]=s=>t(a).input=s),label:n.$t("form.label.textInput"),placeholder:n.$t("form.placeholder.textInput")},null,8,["modelValue","label","placeholder"]),e(),o(p,{language:"html-vue"},{default:r(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.disabled")),1),e(),l("div",k,[o(t(d),{modelValue:t(a).disabled,"onUpdate:modelValue":u[2]||(u[2]=s=>t(a).disabled=s),label:n.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"]),e(),o(p,{language:"html-vue"},{default:r(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.withI18n")),1),e(),l("div",q,[o(t(d),{modelValue:t(a).input,"onUpdate:modelValue":u[3]||(u[3]=s=>t(a).input=s),label:n.$t("form.label.textInput"),placeholder:n.$t("form.placeholder.textInput")},null,8,["modelValue","label","placeholder"]),e(),o(p,{language:"html-vue"},{default:r(()=>[e(`
          <template>
            <TextInput 
              v-model="input"
              :label="t('form.label.textInput')"
              :placeholder="t('form.placeholder.textInput')"
            />
          </template>

          <script setup lang="ts">
          import { TextInput } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.inputWithValidation")),1),e(),l("div",w,[o(t(c),null,{default:r(()=>[o(t(d),{modelValue:t(a).inputWithValidation,"onUpdate:modelValue":u[4]||(u[4]=s=>t(a).inputWithValidation=s),label:n.$t("form.label.input"),options:b,placeholder:n.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),e(),o(p,{language:"html-vue"},{default:r(()=>[e(`
          <Form>
            <TextInput 
              v-model="input"
              :options="validationOptions"
              label="Input"
              placeholder="Enter input"
            />
          </Form>

          <script setup lang="ts">
          import { Form, TextInput } from "@dzangolab/vue3-form";

          const validationOptions = {
            ignore_whitespace: true,
            required: true
          };
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.customErrorMessageInput")),1),e(),l("div",S,[o(t(c),null,{default:r(()=>[o(t(d),{modelValue:t(a).textInput,"onUpdate:modelValue":u[5]||(u[5]=s=>t(a).textInput=s),label:n.$t("form.label.input"),"error-messages":I,options:b,placeholder:n.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),e(),o(p,{language:"html-vue"},{default:r(()=>[e(`
          <Form>
            <TextInput 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Input"
              placeholder="Enter input"
            />
          </Form>

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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.customValidationInput")),1),e(),l("div",M,[o(t(c),null,{default:r(()=>[o(t(d),{modelValue:t(a).customValidationInput,"onUpdate:modelValue":u[6]||(u[6]=s=>t(a).customValidationInput=s),label:n.$t("form.label.input"),placeholder:n.$t("form.placeholder.input"),schema:t(g),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e(),o(p,{language:"html-vue"},{default:r(()=>[e(`
          <Form>
            <TextInput 
              v-model="input"
              :schema="inputSchema"
              label="Input"
              placeholder="Enter input"
              name="input"
            />
          </Form>

          <script setup lang="ts">
          import { Form, Input } from "@dzangolab/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .length(5, { message: "Input must be exactly 5 characters long") });
          <\/script>
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{D as default};

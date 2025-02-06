import{r as d,J as c}from"./DzangolabVue3Form.es-b51db7e8.js";import{d as V,a5 as $,p as T,j as m,J as h,o as _,c as z,w as s,K as o,W as e,L as p,f as l,D as n}from"./index-729398ab-c88618b2.js";import{m as F}from"./index-7eca6f7f.js";import{_ as x}from"./FormPage.vue_vue_type_style_index_0_lang-61bbebf7.js";const U={class:"section-content"},k={class:"section-content"},q={class:"section-content"},w={class:"section-content"},E={class:"section-content"},S={class:"section-content"},O={class:"section-content"},W={name:"TextInputField"},C=V({...W,setup(D){const{t:f}=$(),g=F.string().length(5,{message:f("form.errors.input.length",{length:5})}),I={required:f("form.errors.input.required")},b={ignore_whitespace:!0,required:!0};let a=T({customValidationInput:m(),disabled:m("dzangolab"),input:m(),inputWithValidation:m(),noLabelInput:m(),textInput:m()});return(t,u)=>{const v=h("router-link"),i=h("SshPre");return _(),z(x,{title:t.$t("form.label.textInput"),class:"demo"},{toolbar:s(()=>[o(v,{to:{name:"form"},class:"back"},{default:s(()=>[e(p(t.$t("common.back")),1)]),_:1})]),default:s(()=>[e(),l("section",null,[l("h2",null,p(t.$t("form.label.basicInput")),1),e(),l("div",U,[o(n(d),{modelValue:n(a).noLabelInput,"onUpdate:modelValue":u[0]||(u[0]=r=>n(a).noLabelInput=r),placeholder:t.$t("form.placeholder.input")},null,8,["modelValue","placeholder"]),e(),o(i,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <TextInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { TextInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,p(t.$t("form.label.labelInput")),1),e(),l("div",k,[o(n(d),{modelValue:n(a).input,"onUpdate:modelValue":u[1]||(u[1]=r=>n(a).input=r),label:t.$t("form.label.textInput"),placeholder:t.$t("form.placeholder.textInput")},null,8,["modelValue","label","placeholder"]),e(),o(i,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,p(t.$t("form.label.disabled")),1),e(),l("div",q,[o(n(d),{modelValue:n(a).disabled,"onUpdate:modelValue":u[2]||(u[2]=r=>n(a).disabled=r),label:t.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"]),e(),o(i,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,p(t.$t("form.label.withI18n")),1),e(),l("div",w,[o(n(d),{modelValue:n(a).input,"onUpdate:modelValue":u[3]||(u[3]=r=>n(a).input=r),label:t.$t("form.label.textInput"),placeholder:t.$t("form.placeholder.textInput")},null,8,["modelValue","label","placeholder"]),e(),o(i,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,p(t.$t("form.label.inputWithValidation")),1),e(),l("div",E,[o(n(c),null,{default:s(()=>[o(n(d),{modelValue:n(a).inputWithValidation,"onUpdate:modelValue":u[4]||(u[4]=r=>n(a).inputWithValidation=r),label:t.$t("form.label.input"),options:b,placeholder:t.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),e(),o(i,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,p(t.$t("form.label.customErrorMessageInput")),1),e(),l("div",S,[o(n(c),null,{default:s(()=>[o(n(d),{modelValue:n(a).textInput,"onUpdate:modelValue":u[5]||(u[5]=r=>n(a).textInput=r),label:t.$t("form.label.input"),"error-messages":I,options:b,placeholder:t.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),e(),o(i,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,p(t.$t("form.label.customValidationInput")),1),e(),l("div",O,[o(n(c),null,{default:s(()=>[o(n(d),{modelValue:n(a).customValidationInput,"onUpdate:modelValue":u[6]||(u[6]=r=>n(a).customValidationInput=r),label:t.$t("form.label.input"),placeholder:t.$t("form.placeholder.input"),schema:n(g),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e(),o(i,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{C as default};

import{i as r,t as c}from"./DzangolabVue3Form.es-5cddabd8.js";import{d as I,a5 as v,p as V,j as m,J as $,o as T,c as z,w as p,K as o,D as n,ao as F,X as e,f as l,L as d}from"./index-729398ab-f7824fe4.js";import{m as x}from"./index-9966f943.js";import{_ as U}from"./FormPage.vue_vue_type_style_index_0_lang-2120d4bb.js";const q={class:"section-content"},w={class:"section-content"},E={class:"section-content"},O={class:"section-content"},S={class:"section-content"},_={class:"section-content"},k={class:"section-content"},y={name:"TextInputField"},B=I({...y,setup(C){const{t:f}=v(),h=x.string().length(5,{message:f("form.errors.input.length",{length:5})}),g={required:f("form.errors.input.required")},b={ignore_whitespace:!0,required:!0};let u=V({customValidationInput:m(),disabled:m("dzangolab"),input:m(),inputWithValidation:m(),noLabelInput:m(),textInput:m()});return(t,a)=>{const s=$("SshPre");return T(),z(U,{title:t.$t("form.label.textInput"),class:"demo"},{toolbar:p(()=>[o(n(F),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:a[0]||(a[0]=i=>t.$router.push("/form"))},null,8,["label"])]),default:p(()=>[e(),l("section",null,[l("h2",null,d(t.$t("form.label.basicInput")),1),e(),l("div",q,[o(n(r),{modelValue:n(u).noLabelInput,"onUpdate:modelValue":a[1]||(a[1]=i=>n(u).noLabelInput=i),placeholder:t.$t("form.placeholder.input")},null,8,["modelValue","placeholder"]),e(),o(s,{language:"html-vue"},{default:p(()=>[e(`
          <template>
            <TextInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { TextInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,d(t.$t("form.label.labelInput")),1),e(),l("div",w,[o(n(r),{modelValue:n(u).input,"onUpdate:modelValue":a[2]||(a[2]=i=>n(u).input=i),label:t.$t("form.label.textInput"),placeholder:t.$t("form.placeholder.textInput")},null,8,["modelValue","label","placeholder"]),e(),o(s,{language:"html-vue"},{default:p(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,d(t.$t("form.label.disabled")),1),e(),l("div",E,[o(n(r),{modelValue:n(u).disabled,"onUpdate:modelValue":a[3]||(a[3]=i=>n(u).disabled=i),label:t.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"]),e(),o(s,{language:"html-vue"},{default:p(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,d(t.$t("form.label.withI18n")),1),e(),l("div",O,[o(n(r),{modelValue:n(u).input,"onUpdate:modelValue":a[4]||(a[4]=i=>n(u).input=i),label:t.$t("form.label.textInput"),placeholder:t.$t("form.placeholder.textInput")},null,8,["modelValue","label","placeholder"]),e(),o(s,{language:"html-vue"},{default:p(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,d(t.$t("form.label.inputWithValidation")),1),e(),l("div",S,[o(n(c),null,{default:p(()=>[o(n(r),{modelValue:n(u).inputWithValidation,"onUpdate:modelValue":a[5]||(a[5]=i=>n(u).inputWithValidation=i),label:t.$t("form.label.input"),options:b,placeholder:t.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),e(),o(s,{language:"html-vue"},{default:p(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,d(t.$t("form.label.customErrorMessageInput")),1),e(),l("div",_,[o(n(c),null,{default:p(()=>[o(n(r),{modelValue:n(u).textInput,"onUpdate:modelValue":a[6]||(a[6]=i=>n(u).textInput=i),label:t.$t("form.label.input"),"error-messages":g,options:b,placeholder:t.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),e(),o(s,{language:"html-vue"},{default:p(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,d(t.$t("form.label.customValidationInput")),1),e(),l("div",k,[o(n(c),null,{default:p(()=>[o(n(r),{modelValue:n(u).customValidationInput,"onUpdate:modelValue":a[7]||(a[7]=i=>n(u).customValidationInput=i),label:t.$t("form.label.input"),placeholder:t.$t("form.placeholder.input"),schema:n(h),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e(),o(s,{language:"html-vue"},{default:p(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{B as default};

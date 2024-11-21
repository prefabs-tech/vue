import{m as V,r as d,Z as m}from"./DzangolabVue3Form.es-85a085bb.js";import{d as $,a4 as F,l as _,j as c,G as h,o as T,c as z,w as a,K as t,C as e,S as i,f as o,D as n}from"./index-d658739c-0fec2303.js";import{_ as x}from"./FormPage.vue_vue_type_style_index_0_lang-e7bf03d2.js";import"./index-d4113c16.js";const S={class:"section-content"},U={class:"section-content"},k={class:"section-content"},q={class:"section-content"},w={class:"section-content"},E={class:"section-content"},O={class:"section-content"},C={name:"TextInputField"},L=$({...C,setup(D){const{t:f}=F(),g=V.string().length(5,{message:f("form.errors.input.length",{length:5})}),I={required:f("form.errors.input.required")},b={ignore_whitespace:!0,required:!0};let u=_({customValidationInput:c(),disabled:c("dzangolab"),input:c(),inputWithValidation:c(),noLabelInput:c(),textInput:c()});return(l,r)=>{const v=h("router-link"),p=h("SshPre");return T(),z(x,{title:l.$t("form.label.textInput"),class:"demo"},{toolbar:a(()=>[t(v,{to:{name:"form"},class:"back"},{default:a(()=>[e(i(l.$t("common.back")),1)]),_:1})]),default:a(()=>[e(),o("section",null,[o("h2",null,i(l.$t("form.label.basicInput")),1),e(),o("div",S,[t(p,{language:"html-vue"},{default:a(()=>[e(`
          <Form>
            <TextInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </Form>

          <script setup lang="ts">
          import { TextInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),t(n(m),null,{default:a(()=>[t(n(d),{modelValue:n(u).noLabelInput,"onUpdate:modelValue":r[0]||(r[0]=s=>n(u).noLabelInput=s),placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","placeholder"])]),_:1})])]),e(),o("section",null,[o("h2",null,i(l.$t("form.label.labelInput")),1),e(),o("div",U,[t(p,{language:"html-vue"},{default:a(()=>[e(`
          <Form>
            <TextInput 
              v-model="input"
              label="Input"
              placeholder="Enter Input"
            />
          </Form>

          <script setup lang="ts">
          import { TextInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),t(n(m),null,{default:a(()=>[t(n(d),{modelValue:n(u).input,"onUpdate:modelValue":r[1]||(r[1]=s=>n(u).input=s),label:l.$t("form.label.textInput"),placeholder:l.$t("form.placeholder.textInput")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),o("section",null,[o("h2",null,i(l.$t("form.label.disabled")),1),e(),o("div",k,[t(p,{language:"html-vue"},{default:a(()=>[e(`
          <Form>
            <TextInput 
              v-model="input"
              label="Disabled"
              disabled
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),t(n(m),null,{default:a(()=>[t(n(d),{modelValue:n(u).disabled,"onUpdate:modelValue":r[2]||(r[2]=s=>n(u).disabled=s),label:l.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),e(),o("section",null,[o("h2",null,i(l.$t("form.label.withI18n")),1),e(),o("div",q,[t(p,{language:"html-vue"},{default:a(()=>[e(`
          <Form>
            <TextInput 
              v-model="input"
              :label="t('form.label.textInput')"
              :placeholder="t('form.placeholder.textInput')"
            />
          </Form>

          <script setup lang="ts">
          import { TextInput } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)]),_:1}),e(),t(n(m),null,{default:a(()=>[t(n(d),{modelValue:n(u).input,"onUpdate:modelValue":r[3]||(r[3]=s=>n(u).input=s),label:l.$t("form.label.textInput"),placeholder:l.$t("form.placeholder.textInput")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),o("section",null,[o("h2",null,i(l.$t("form.label.inputWithValidation")),1),e(),o("div",w,[t(p,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:a(()=>[t(n(d),{modelValue:n(u).inputWithValidation,"onUpdate:modelValue":r[4]||(r[4]=s=>n(u).inputWithValidation=s),label:l.$t("form.label.input"),options:b,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),o("section",null,[o("h2",null,i(l.$t("form.label.customErrorMessageInput")),1),e(),o("div",E,[t(p,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:a(()=>[t(n(d),{modelValue:n(u).textInput,"onUpdate:modelValue":r[5]||(r[5]=s=>n(u).textInput=s),label:l.$t("form.label.input"),"error-messages":I,options:b,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),o("section",null,[o("h2",null,i(l.$t("form.label.customValidationInput")),1),e(),o("div",O,[t(p,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:a(()=>[t(n(d),{modelValue:n(u).customValidationInput,"onUpdate:modelValue":r[6]||(r[6]=s=>n(u).customValidationInput=s),label:l.$t("form.label.input"),placeholder:l.$t("form.placeholder.input"),schema:n(g),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1})])])]),_:1},8,["title"])}}});export{L as default};

import{m as $,r as d,Z as m}from"./DzangolabVue3Form.es-264401b9.js";import{d as F,u as _,b as T,e as c,r as f,o as z,c as x,w as a,f as t,g as e,t as i,a as o,h as n}from"./index-a50c4f8e.js";const U={class:"section-content"},k={class:"section-content"},q={class:"section-content"},w={class:"section-content"},E={class:"section-content"},S={class:"section-content"},O={class:"section-content"},M={name:"TextInputField"},B=F({...M,setup(P){const{t:b}=_(),g=$.string().length(5,{message:b("form.errors.input.length",{length:5})}),I={required:b("form.errors.input.required")},h={ignore_whitespace:!0,required:!0};let u=T({customValidationInput:c(),disabled:c("dzangolab"),input:c(),inputWithValidation:c(),noLabelInput:c(),textInput:c()});return(l,r)=>{const v=f("router-link"),p=f("SshPre"),V=f("Page");return z(),x(V,{title:l.$t("form.label.textInput"),class:"demo"},{toolbar:a(()=>[t(v,{to:{name:"form"},class:"back"},{default:a(()=>[e(i(l.$t("common.back")),1)]),_:1})]),default:a(()=>[e(),o("section",null,[o("h2",null,i(l.$t("form.label.basicInput")),1),e(),o("div",U,[t(p,{language:"html-vue"},{default:a(()=>[e(`
          <Form>
            <TextInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </Form>

          <script setup lang="ts">
          import { TextInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),t(n(m),null,{default:a(()=>[t(n(d),{modelValue:n(u).noLabelInput,"onUpdate:modelValue":r[0]||(r[0]=s=>n(u).noLabelInput=s),placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","placeholder"])]),_:1})])]),e(),o("section",null,[o("h2",null,i(l.$t("form.label.labelInput")),1),e(),o("div",k,[t(p,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:a(()=>[t(n(d),{modelValue:n(u).input,"onUpdate:modelValue":r[1]||(r[1]=s=>n(u).input=s),label:l.$t("form.label.textInput"),placeholder:l.$t("form.placeholder.textInput")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),o("section",null,[o("h2",null,i(l.$t("form.label.disabled")),1),e(),o("div",q,[t(p,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:a(()=>[t(n(d),{modelValue:n(u).disabled,"onUpdate:modelValue":r[2]||(r[2]=s=>n(u).disabled=s),label:l.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),e(),o("section",null,[o("h2",null,i(l.$t("form.label.withI18n")),1),e(),o("div",w,[t(p,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:a(()=>[t(n(d),{modelValue:n(u).input,"onUpdate:modelValue":r[3]||(r[3]=s=>n(u).input=s),label:l.$t("form.label.textInput"),placeholder:l.$t("form.placeholder.textInput")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),o("section",null,[o("h2",null,i(l.$t("form.label.inputWithValidation")),1),e(),o("div",E,[t(p,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:a(()=>[t(n(d),{modelValue:n(u).inputWithValidation,"onUpdate:modelValue":r[4]||(r[4]=s=>n(u).inputWithValidation=s),label:l.$t("form.label.input"),options:h,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),o("section",null,[o("h2",null,i(l.$t("form.label.customErrorMessageInput")),1),e(),o("div",S,[t(p,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:a(()=>[t(n(d),{modelValue:n(u).textInput,"onUpdate:modelValue":r[5]||(r[5]=s=>n(u).textInput=s),label:l.$t("form.label.input"),"error-messages":I,options:h,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),o("section",null,[o("h2",null,i(l.$t("form.label.customValidationInput")),1),e(),o("div",O,[t(p,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),t(n(m),null,{default:a(()=>[t(n(d),{modelValue:n(u).customValidationInput,"onUpdate:modelValue":r[6]||(r[6]=s=>n(u).customValidationInput=s),label:l.$t("form.label.input"),placeholder:l.$t("form.placeholder.input"),schema:n(g),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1})])])]),_:1},8,["title"])}}});export{B as default};

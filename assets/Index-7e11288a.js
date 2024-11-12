import{m as _,r as d,Z as m}from"./DzangolabVue3Form.es-8d7c7642.js";import{d as $,u as F,b as y,e as c,r as f,o as T,c as z,w as a,f as t,g as n,t as i,a as o,h as e}from"./index-17339f3a.js";const S={class:"section-content"},x={class:"section-content"},w={class:"section-content"},U={class:"section-content"},E={class:"section-content"},k={class:"section-content"},q={class:"section-content"},O={class:"section-content"},M={name:"TextInputField"},C=$({...M,setup(P){const{t:b}=F(),g=_.string().length(5,{message:b("form.errors.input.length",{length:5})}),I={required:b("form.errors.input.required")},h={ignore_whitespace:!0,required:!0};let u=y({customStyleInput:c(),customValidationInput:c(),disabled:c("dzangolab"),input:c(),inputWithValidation:c(),noLabelInput:c(),textInput:c()});return(l,s)=>{const v=f("router-link"),p=f("SshPre"),V=f("Page");return T(),z(V,{title:l.$t("form.label.textInput"),class:"demo"},{toolbar:a(()=>[t(v,{to:{name:"form"},class:"back"},{default:a(()=>[n(i(l.$t("common.back")),1)]),_:1})]),default:a(()=>[n(),o("section",null,[o("h2",null,i(l.$t("form.label.basicInput")),1),n(),o("div",S,[t(p,{language:"html-vue"},{default:a(()=>[n(`
          <Form>
            <TextInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </Form>

          <script setup lang="ts">
          import { TextInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),n(),t(e(m),null,{default:a(()=>[t(e(d),{modelValue:e(u).noLabelInput,"onUpdate:modelValue":s[0]||(s[0]=r=>e(u).noLabelInput=r),placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","placeholder"])]),_:1})])]),n(),o("section",null,[o("h2",null,i(l.$t("form.label.labelInput")),1),n(),o("div",x,[t(p,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),t(e(m),null,{default:a(()=>[t(e(d),{modelValue:e(u).input,"onUpdate:modelValue":s[1]||(s[1]=r=>e(u).input=r),label:l.$t("form.label.textInput"),placeholder:l.$t("form.placeholder.textInput")},null,8,["modelValue","label","placeholder"])]),_:1})])]),n(),o("section",null,[o("h2",null,i(l.$t("form.label.disabled")),1),n(),o("div",w,[t(p,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),t(e(m),null,{default:a(()=>[t(e(d),{modelValue:e(u).disabled,"onUpdate:modelValue":s[2]||(s[2]=r=>e(u).disabled=r),label:l.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),n(),o("section",null,[o("h2",null,i(l.$t("form.label.withI18n")),1),n(),o("div",U,[t(p,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),t(e(m),null,{default:a(()=>[t(e(d),{modelValue:e(u).input,"onUpdate:modelValue":s[3]||(s[3]=r=>e(u).input=r),label:l.$t("form.label.textInput"),placeholder:l.$t("form.placeholder.textInput")},null,8,["modelValue","label","placeholder"])]),_:1})])]),n(),o("section",null,[o("h2",null,i(l.$t("form.label.inputWithValidation")),1),n(),o("div",E,[t(p,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),t(e(m),null,{default:a(()=>[t(e(d),{modelValue:e(u).inputWithValidation,"onUpdate:modelValue":s[4]||(s[4]=r=>e(u).inputWithValidation=r),label:l.$t("form.label.input"),options:h,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1})])]),n(),o("section",null,[o("h2",null,i(l.$t("form.label.customErrorMessageInput")),1),n(),o("div",k,[t(p,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),t(e(m),null,{default:a(()=>[t(e(d),{modelValue:e(u).textInput,"onUpdate:modelValue":s[5]||(s[5]=r=>e(u).textInput=r),label:l.$t("form.label.input"),"error-messages":I,options:h,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1})])]),n(),o("section",null,[o("h2",null,i(l.$t("form.label.customValidationInput")),1),n(),o("div",q,[t(p,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),t(e(m),null,{default:a(()=>[t(e(d),{modelValue:e(u).customValidationInput,"onUpdate:modelValue":s[6]||(s[6]=r=>e(u).customValidationInput=r),label:l.$t("form.label.input"),placeholder:l.$t("form.placeholder.input"),schema:e(g),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1})])]),n(),o("section",null,[o("h2",null,i(l.$t("form.label.customStyleInput")),1),n(),o("div",O,[t(p,{language:"html-vue"},{default:a(()=>[n(`
          <Form>
            <TextInput 
              v-model="input"
              class="custom-style-input"
              label="Input"
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

            color: #007aff;
          }

          .custom-style-input input:focus {
            box-shadow: 0 0 0 0.25rem #03449e9a;
          }
          </style>
        `)]),_:1}),n(),t(e(m),null,{default:a(()=>[t(e(d),{modelValue:e(u).customStyleInput,"onUpdate:modelValue":s[7]||(s[7]=r=>e(u).customStyleInput=r),label:l.$t("form.label.input"),placeholder:l.$t("form.placeholder.input"),class:"custom-style-input"},null,8,["modelValue","label","placeholder"])]),_:1})])])]),_:1},8,["title"])}}});export{C as default};

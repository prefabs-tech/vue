import{m as V,t as p,Q as d}from"./DzangolabVue3Form.es-42083657.js";import{d as _,u as $,b as F,e as c,r as h,o as y,c as T,w as a,a as t,t as m,f as e,g as l,h as n}from"./index-01daf0cc.js";const z={class:"section-content"},x={class:"section-content"},S={class:"section-content"},w={class:"section-content"},U={class:"section-content"},E={class:"section-content"},q={class:"section-content"},O={class:"section-content"},M={name:"TextInputField"},C=_({...M,setup(P){const{t:f}=$(),g=V.string().length(5,{message:f("form.errors.input.length",{length:5})}),I={required:f("form.errors.input.required")},b={ignore_whitespace:!0,required:!0};let u=F({customStyleInput:c(),customValidationInput:c(),disabled:c("dzangolab"),input:c(),inputWithValidation:c(),noLabelInput:c(),textInput:c()});return(o,s)=>{const r=h("SshPre"),v=h("Page");return y(),T(v,{title:o.$t("form.label.textInput"),class:"demo"},{default:a(()=>[t("section",null,[t("h2",null,m(o.$t("form.label.basicInput")),1),e(),t("div",z,[l(r,{language:"html-vue"},{default:a(()=>[e(`
          <Form>
            <TextInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </Form>

          <script setup lang="ts">
          import { TextInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),l(n(d),null,{default:a(()=>[l(n(p),{modelValue:n(u).noLabelInput,"onUpdate:modelValue":s[0]||(s[0]=i=>n(u).noLabelInput=i),placeholder:o.$t("form.placeholder.input")},null,8,["modelValue","placeholder"])]),_:1})])]),e(),t("section",null,[t("h2",null,m(o.$t("form.label.labelInput")),1),e(),t("div",x,[l(r,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),l(n(d),null,{default:a(()=>[l(n(p),{modelValue:n(u).input,"onUpdate:modelValue":s[1]||(s[1]=i=>n(u).input=i),label:o.$t("form.label.textInput"),placeholder:o.$t("form.placeholder.textInput")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),t("section",null,[t("h2",null,m(o.$t("form.label.disabled")),1),e(),t("div",S,[l(r,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),l(n(d),null,{default:a(()=>[l(n(p),{modelValue:n(u).disabled,"onUpdate:modelValue":s[2]||(s[2]=i=>n(u).disabled=i),label:o.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),e(),t("section",null,[t("h2",null,m(o.$t("form.label.withI18n")),1),e(),t("div",w,[l(r,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),l(n(d),null,{default:a(()=>[l(n(p),{modelValue:n(u).input,"onUpdate:modelValue":s[3]||(s[3]=i=>n(u).input=i),label:o.$t("form.label.textInput"),placeholder:o.$t("form.placeholder.textInput")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),t("section",null,[t("h2",null,m(o.$t("form.label.inputWithValidation")),1),e(),t("div",U,[l(r,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),l(n(d),null,{default:a(()=>[l(n(p),{modelValue:n(u).inputWithValidation,"onUpdate:modelValue":s[4]||(s[4]=i=>n(u).inputWithValidation=i),label:o.$t("form.label.input"),options:b,placeholder:o.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),t("section",null,[t("h2",null,m(o.$t("form.label.customErrorMessageInput")),1),e(),t("div",E,[l(r,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),l(n(d),null,{default:a(()=>[l(n(p),{modelValue:n(u).textInput,"onUpdate:modelValue":s[5]||(s[5]=i=>n(u).textInput=i),label:o.$t("form.label.input"),"error-messages":I,options:b,placeholder:o.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),t("section",null,[t("h2",null,m(o.$t("form.label.customValidationInput")),1),e(),t("div",q,[l(r,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),l(n(d),null,{default:a(()=>[l(n(p),{modelValue:n(u).customValidationInput,"onUpdate:modelValue":s[6]||(s[6]=i=>n(u).customValidationInput=i),label:o.$t("form.label.input"),placeholder:o.$t("form.placeholder.input"),schema:n(g),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1})])]),e(),t("section",null,[t("h2",null,m(o.$t("form.label.customStyleInput")),1),e(),t("div",O,[l(r,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),l(n(d),null,{default:a(()=>[l(n(p),{modelValue:n(u).customStyleInput,"onUpdate:modelValue":s[7]||(s[7]=i=>n(u).customStyleInput=i),label:o.$t("form.label.input"),placeholder:o.$t("form.placeholder.input"),class:"custom-style-input"},null,8,["modelValue","label","placeholder"])]),_:1})])])]),_:1},8,["title"])}}});export{C as default};

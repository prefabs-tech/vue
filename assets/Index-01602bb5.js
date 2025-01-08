import{A as u,T as p}from"./DzangolabVue3Form.es-579aa137.js";import{d as E,a7 as V,p as z,j as c,K as g,o as I,c as $,w as t,L as a,C as e,M as r,f as n,E as l}from"./index-8e1c3ab6-8617714e.js";import{m as F}from"./index-eb14ec17.js";import{_ as w}from"./FormPage.vue_vue_type_style_index_0_lang-cebf9516.js";const y={class:"section-content"},O={class:"section-content"},M={class:"section-content"},U={class:"section-content"},k={class:"section-content"},q={class:"section-content"},S={class:"section-content"},C={name:"EmailInputField"},N=E({...C,setup(L){const{t:f}=V(),h=F.string().email({message:f("form.errors.email.invalid")}),v={required:f("form.errors.input.required"),invalid:f("form.errors.email.invalid",{list:"(dzangolab.com, dzango.com, gmail.com)"})},b={allow_display_name:!1,allow_utf8_local_part:!0,host_whitelist:["dzangolab.com","dzango.com","gmail.com"],require_display_name:!1};let i=z({customValidationInput:c(),disabled:c("monorepo@dzangolab.com"),input:c(),inputWithValidation:c(),noLabelInput:c(),textInput:c()});return(o,m)=>{const _=g("router-link"),d=g("SshPre");return I(),$(w,{title:o.$t("form.label.email"),class:"demo"},{toolbar:t(()=>[a(_,{to:{name:"form"},class:"back"},{default:t(()=>[e(r(o.$t("common.back")),1)]),_:1})]),default:t(()=>[e(),n("section",null,[n("h2",null,r(o.$t("form.label.basicInput")),1),e(),n("div",y,[a(d,{language:"html-vue"},{default:t(()=>[e(`
          <Form>
            <Email 
              v-model="input"
              placeholder="Enter a email"
            />
          </Form>
  
          <script setup lang="ts">
          import { Email } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),a(l(u),null,{default:t(()=>[a(l(p),{modelValue:l(i).noLabelInput,"onUpdate:modelValue":m[0]||(m[0]=s=>l(i).noLabelInput=s),placeholder:o.$t("form.placeholder.email")},null,8,["modelValue","placeholder"])]),_:1})])]),e(),n("section",null,[n("h2",null,r(o.$t("form.label.labelInput")),1),e(),n("div",O,[a(d,{language:"html-vue"},{default:t(()=>[e(`
          <Form>
            <Email 
              v-model="input"
              label="Email"
              placeholder="Enter a email"
            />
          </Form>

          <script setup lang="ts">
          import { Email } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),a(l(u),null,{default:t(()=>[a(l(p),{modelValue:l(i).input,"onUpdate:modelValue":m[1]||(m[1]=s=>l(i).input=s),label:o.$t("form.label.email"),placeholder:o.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),n("section",null,[n("h2",null,r(o.$t("form.label.disabled")),1),e(),n("div",M,[a(d,{language:"html-vue"},{default:t(()=>[e(`
          <Form>
            <Email 
              v-model="input"
              label="Email"
              disabled
            />
          </Form>

          <script setup lang="ts">
          import { Email } from "@dzangolab/vue3-form";
          import { ref } from vue;
  
          const input = ref("monorepo@dzangolab.com");
          <\/script>
        `)]),_:1}),e(),a(l(u),null,{default:t(()=>[a(l(p),{modelValue:l(i).disabled,"onUpdate:modelValue":m[2]||(m[2]=s=>l(i).disabled=s),label:o.$t("form.label.email"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),e(),n("section",null,[n("h2",null,r(o.$t("form.label.withI18n")),1),e(),n("div",U,[a(d,{language:"html-vue"},{default:t(()=>[e(`
          <Form>
            <Email 
              v-model="input"
              :label="t('form.label.email')"
              :placeholder="t('form.placeholder.email')"
            />
          </Form>

          <script setup lang="ts">
          import { Email } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)]),_:1}),e(),a(l(u),null,{default:t(()=>[a(l(p),{modelValue:l(i).input,"onUpdate:modelValue":m[3]||(m[3]=s=>l(i).input=s),label:l(f)("form.label.email"),placeholder:l(f)("form.placeholder.email")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),n("section",null,[n("h2",null,r(o.$t("form.label.inputWithValidation")),1),e(),n("div",k,[a(d,{language:"html-vue"},{default:t(()=>[e(`
          <Form>
            <Email 
              v-model="input"
              :options="validationOptions"
              label="Email"
              placeholder="Enter a email"
            />
          </Form>

          <script setup lang="ts">
          import { Form, Email } from "@dzangolab/vue3-form";
          
          import type { IsEmailOptions } from "@dzangolab/vue3-form";

          const validationOptions = {
            allow_display_name: false,
            allow_utf8_local_part: true,
            host_whitelist: ["dzangolab.com", "dzango.com", "gmail.com"],
            require_display_name: false,
          } as IsEmailOptions;
          <\/script>
        `)]),_:1}),e(),a(l(u),null,{default:t(()=>[a(l(p),{modelValue:l(i).inputWithValidation,"onUpdate:modelValue":m[4]||(m[4]=s=>l(i).inputWithValidation=s),label:o.$t("form.label.email"),options:l(b),placeholder:o.$t("form.placeholder.email")},null,8,["modelValue","label","options","placeholder"])]),_:1})])]),e(),n("section",null,[n("h2",null,r(o.$t("form.label.customErrorMessageInput")),1),e(),n("div",q,[a(d,{language:"html-vue"},{default:t(()=>[e(`
          <Form>
            <Email 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Email"
              placeholder="Enter a email"
            />
          </Form>

          <script setup lang="ts">
          import { Form, Email } from "@dzangolab/vue3-form";
          
          import type { EmailErrorMessages, IsEmailOptions } from "@dzangolab/vue3-form";

          const validationMessages = {
            required: "The field should not be empty",
            invalid: "Please provide a valid email (dzangolab.com, dzango.com, gmail.com)"
          } as EmailErrorMessages;

          const validationOptions = {
            allow_display_name: false,
            allow_utf8_local_part: true,
            host_whitelist: ["dzangolab.com", "dzango.com", "gmail.com"],
            require_display_name: false,
          } as IsEmailOptions;
          <\/script>
        `)]),_:1}),e(),a(l(u),null,{default:t(()=>[a(l(p),{modelValue:l(i).textInput,"onUpdate:modelValue":m[5]||(m[5]=s=>l(i).textInput=s),label:o.$t("form.label.email"),"error-messages":l(v),options:l(b),placeholder:o.$t("form.placeholder.email")},null,8,["modelValue","label","error-messages","options","placeholder"])]),_:1})])]),e(),n("section",null,[n("h2",null,r(o.$t("form.label.customValidationInput")),1),e(),n("div",S,[a(d,{language:"html-vue"},{default:t(()=>[e(`
          <Form>
            <Email 
              v-model="input"
              :schema="inputSchema"
              label="Email"
              placeholder="Enter a email"
              name="input"
            />
          </Form>

          <script setup lang="ts">
          import { Form, Email } from "@dzangolab/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .email({ message: "Please provide a valid email" });
          <\/script>
        `)]),_:1}),e(),a(l(u),null,{default:t(()=>[a(l(p),{modelValue:l(i).customValidationInput,"onUpdate:modelValue":m[6]||(m[6]=s=>l(i).customValidationInput=s),label:o.$t("form.label.email"),placeholder:o.$t("form.placeholder.email"),schema:l(h),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1})])])]),_:1},8,["title"])}}});export{N as default};

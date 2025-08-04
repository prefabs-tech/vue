import{M as p,$ as b}from"./PrefabsTechVue3Form.es-DdaTeD37.js";import{d as V,E as $,I,L as h,r as d,H as z,e as F,o as w,j as s,B as e,f as o,t as u,h as a,u as n,v as y}from"./index-Bl6M8CLo.js";import{_ as O}from"./FormPage.vue_vue_type_style_index_0_lang-BpPB7a64.js";const M={class:"section-content"},U={class:"section-content"},W={class:"section-content"},q={class:"section-content"},S={class:"section-content"},k={class:"section-content"},B={class:"section-content"},C={class:"section-content"},L={name:"EmailInputField"},j=V({...L,setup(P){const{t:f}=$(),g=I.string().email({message:f("form.errors.email.invalid")}),E={required:f("form.errors.input.required"),invalid:f("form.errors.email.invalid",{list:"(dzangolab.com, dzango.com, gmail.com)"})},v={allow_display_name:!1,allow_utf8_local_part:!0,host_whitelist:["dzangolab.com","dzango.com","gmail.com"],require_display_name:!1};let i=h({customValidationInput:d(),disabled:d("monorepo@prefabs.tech.com"),input:d(),inputWithValidation:d(),noLabelInput:d(),textInput:d()});return(t,l)=>{const r=z("SshPre");return w(),F(O,{title:t.$t("form.label.email"),class:"demo"},{toolbar:s(()=>[a(n(y),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=m=>t.$router.push("/form"))},null,8,["label"])]),default:s(()=>[l[33]||(l[33]=e()),o("section",null,[o("h2",null,u(t.$t("form.label.basicInput")),1),l[11]||(l[11]=e()),o("div",M,[a(n(p),{modelValue:n(i).noLabelInput,"onUpdate:modelValue":l[1]||(l[1]=m=>n(i).noLabelInput=m),placeholder:t.$t("form.placeholder.email")},null,8,["modelValue","placeholder"]),l[10]||(l[10]=e()),a(r,{language:"html-vue"},{default:s(()=>l[9]||(l[9]=[e(`
          <template>
            <Email 
              v-model="input"
              placeholder="Enter a email"
            />
          </template>
  
          <script setup lang="ts">
          import { Email } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),l[34]||(l[34]=e()),o("section",null,[o("h2",null,u(t.$t("form.label.labelInput")),1),l[14]||(l[14]=e()),o("div",U,[a(n(p),{modelValue:n(i).input,"onUpdate:modelValue":l[2]||(l[2]=m=>n(i).input=m),label:t.$t("form.label.email"),placeholder:t.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"]),l[13]||(l[13]=e()),a(r,{language:"html-vue"},{default:s(()=>l[12]||(l[12]=[e(`
          <template>
            <Email 
              v-model="input"
              label="Email"
              placeholder="Enter a email"
            />
          </template>

          <script setup lang="ts">
          import { Email } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),l[35]||(l[35]=e()),o("section",null,[o("h2",null,u(t.$t("form.label.disabled")),1),l[17]||(l[17]=e()),o("div",W,[a(n(p),{modelValue:n(i).disabled,"onUpdate:modelValue":l[3]||(l[3]=m=>n(i).disabled=m),label:t.$t("form.label.email"),disabled:""},null,8,["modelValue","label"]),l[16]||(l[16]=e()),a(r,{language:"html-vue"},{default:s(()=>l[15]||(l[15]=[e(`
          <template>
            <Email 
              v-model="input"
              label="Email"
              disabled
            />
          </template>

          <script setup lang="ts">
          import { Email } from "@prefabs.tech/vue3-form";
          import { ref } from vue;
  
          const input = ref("monorepo@prefabs.tech.com");
          <\/script>
        `)])),_:1})])]),l[36]||(l[36]=e()),o("section",null,[o("h2",null,u(t.$t("form.label.withI18n")),1),l[20]||(l[20]=e()),o("div",q,[a(n(p),{modelValue:n(i).input,"onUpdate:modelValue":l[4]||(l[4]=m=>n(i).input=m),label:n(f)("form.label.email"),placeholder:n(f)("form.placeholder.email")},null,8,["modelValue","label","placeholder"]),l[19]||(l[19]=e()),a(r,{language:"html-vue"},{default:s(()=>l[18]||(l[18]=[e(`
          <template>
            <Email 
              v-model="input"
              :label="t('form.label.email')"
              :placeholder="t('form.placeholder.email')"
            />
          </template>

          <script setup lang="ts">
          import { Email } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),l[37]||(l[37]=e()),o("section",null,[o("h2",null,u(t.$t("form.label.inputWithValidation")),1),l[23]||(l[23]=e()),o("div",S,[a(n(b),null,{default:s(()=>[a(n(p),{modelValue:n(i).inputWithValidation,"onUpdate:modelValue":l[5]||(l[5]=m=>n(i).inputWithValidation=m),label:t.$t("form.label.email"),placeholder:t.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"])]),_:1}),l[22]||(l[22]=e()),a(r,{language:"html-vue"},{default:s(()=>l[21]||(l[21]=[e(`
          <Form>
            <Email 
              v-model="input"
              label="Email"
              placeholder="Enter a email"
            />
          </Form>

          <script setup lang="ts">
          import { Form, Email } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),l[38]||(l[38]=e()),o("section",null,[o("h2",null,u(t.$t("form.label.inputWithValidationOptions")),1),l[26]||(l[26]=e()),o("div",k,[a(n(b),null,{default:s(()=>[a(n(p),{modelValue:n(i).inputWithValidation,"onUpdate:modelValue":l[6]||(l[6]=m=>n(i).inputWithValidation=m),label:t.$t("form.label.email"),options:v,placeholder:t.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"])]),_:1}),l[25]||(l[25]=e()),a(r,{language:"html-vue"},{default:s(()=>l[24]||(l[24]=[e(`
          <Form>
            <Email 
              v-model="input"
              :options="validationOptions"
              label="Email"
              placeholder="Enter a email"
            />
          </Form>

          <script setup lang="ts">
          import { Form, Email } from "@prefabs.tech/vue3-form";
          
          import type { IsEmailOptions } from "@prefabs.tech/vue3-form";

          const validationOptions = {
            allow_display_name: false,
            allow_utf8_local_part: true,
            host_whitelist: ["dzangolab.com", "dzango.com", "gmail.com"],
            require_display_name: false,
          } as IsEmailOptions;
          <\/script>
        `)])),_:1})])]),l[39]||(l[39]=e()),o("section",null,[o("h2",null,u(t.$t("form.label.customErrorMessageInput")),1),l[29]||(l[29]=e()),o("div",B,[a(n(b),null,{default:s(()=>[a(n(p),{modelValue:n(i).textInput,"onUpdate:modelValue":l[7]||(l[7]=m=>n(i).textInput=m),label:t.$t("form.label.email"),"error-messages":E,options:v,placeholder:t.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"])]),_:1}),l[28]||(l[28]=e()),a(r,{language:"html-vue"},{default:s(()=>l[27]||(l[27]=[e(`
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
          import { Form, Email } from "@prefabs.tech/vue3-form";
          
          import type { EmailErrorMessages, IsEmailOptions } from "@prefabs.tech/vue3-form";

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
        `)])),_:1})])]),l[40]||(l[40]=e()),o("section",null,[o("h2",null,u(t.$t("form.label.customValidationInput")),1),l[32]||(l[32]=e()),o("div",C,[a(n(b),null,{default:s(()=>[a(n(p),{modelValue:n(i).customValidationInput,"onUpdate:modelValue":l[8]||(l[8]=m=>n(i).customValidationInput=m),label:t.$t("form.label.email"),placeholder:t.$t("form.placeholder.email"),schema:n(g),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),l[31]||(l[31]=e()),a(r,{language:"html-vue"},{default:s(()=>l[30]||(l[30]=[e(`
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
          import { Form, Email } from "@prefabs.tech/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .email({ message: "Please provide a valid email" });
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{j as default};

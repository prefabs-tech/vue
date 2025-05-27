import{F as d,q as b}from"./DzangolabVue3Form.es-D8JqPf_4.js";import{d as V,L as z,M as $,N as I,r as p,K as F,f as w,o as y,i as s,D as n,g as o,t as u,h as t,u as e,v as O}from"./index-C9_BK2z2.js";import{_ as q}from"./FormPage.vue_vue_type_style_index_0_lang-Br1CpW1q.js";const U={class:"section-content"},M={class:"section-content"},W={class:"section-content"},S={class:"section-content"},k={class:"section-content"},C={class:"section-content"},L={class:"section-content"},N={class:"section-content"},P={name:"EmailInputField"},h=V({...P,setup(B){const{t:f}=z(),v=$.string().email({message:f("form.errors.email.invalid")}),E={required:f("form.errors.input.required"),invalid:f("form.errors.email.invalid",{list:"(dzangolab.com, dzango.com, gmail.com)"})},g={allow_display_name:!1,allow_utf8_local_part:!0,host_whitelist:["dzangolab.com","dzango.com","gmail.com"],require_display_name:!1};let i=I({customValidationInput:p(),disabled:p("monorepo@dzangolab.com"),input:p(),inputWithValidation:p(),noLabelInput:p(),textInput:p()});return(a,l)=>{const r=F("SshPre");return y(),w(q,{title:a.$t("form.label.email"),class:"demo"},{toolbar:s(()=>[t(e(O),{label:a.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=m=>a.$router.push("/form"))},null,8,["label"])]),default:s(()=>[l[33]||(l[33]=n()),o("section",null,[o("h2",null,u(a.$t("form.label.basicInput")),1),l[11]||(l[11]=n()),o("div",U,[t(e(d),{modelValue:e(i).noLabelInput,"onUpdate:modelValue":l[1]||(l[1]=m=>e(i).noLabelInput=m),placeholder:a.$t("form.placeholder.email")},null,8,["modelValue","placeholder"]),l[10]||(l[10]=n()),t(r,{language:"html-vue"},{default:s(()=>l[9]||(l[9]=[n(`
          <template>
            <Email 
              v-model="input"
              placeholder="Enter a email"
            />
          </template>
  
          <script setup lang="ts">
          import { Email } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),l[34]||(l[34]=n()),o("section",null,[o("h2",null,u(a.$t("form.label.labelInput")),1),l[14]||(l[14]=n()),o("div",M,[t(e(d),{modelValue:e(i).input,"onUpdate:modelValue":l[2]||(l[2]=m=>e(i).input=m),label:a.$t("form.label.email"),placeholder:a.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"]),l[13]||(l[13]=n()),t(r,{language:"html-vue"},{default:s(()=>l[12]||(l[12]=[n(`
          <template>
            <Email 
              v-model="input"
              label="Email"
              placeholder="Enter a email"
            />
          </template>

          <script setup lang="ts">
          import { Email } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),l[35]||(l[35]=n()),o("section",null,[o("h2",null,u(a.$t("form.label.disabled")),1),l[17]||(l[17]=n()),o("div",W,[t(e(d),{modelValue:e(i).disabled,"onUpdate:modelValue":l[3]||(l[3]=m=>e(i).disabled=m),label:a.$t("form.label.email"),disabled:""},null,8,["modelValue","label"]),l[16]||(l[16]=n()),t(r,{language:"html-vue"},{default:s(()=>l[15]||(l[15]=[n(`
          <template>
            <Email 
              v-model="input"
              label="Email"
              disabled
            />
          </template>

          <script setup lang="ts">
          import { Email } from "@dzangolab/vue3-form";
          import { ref } from vue;
  
          const input = ref("monorepo@dzangolab.com");
          <\/script>
        `)])),_:1})])]),l[36]||(l[36]=n()),o("section",null,[o("h2",null,u(a.$t("form.label.withI18n")),1),l[20]||(l[20]=n()),o("div",S,[t(e(d),{modelValue:e(i).input,"onUpdate:modelValue":l[4]||(l[4]=m=>e(i).input=m),label:e(f)("form.label.email"),placeholder:e(f)("form.placeholder.email")},null,8,["modelValue","label","placeholder"]),l[19]||(l[19]=n()),t(r,{language:"html-vue"},{default:s(()=>l[18]||(l[18]=[n(`
          <template>
            <Email 
              v-model="input"
              :label="t('form.label.email')"
              :placeholder="t('form.placeholder.email')"
            />
          </template>

          <script setup lang="ts">
          import { Email } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),l[37]||(l[37]=n()),o("section",null,[o("h2",null,u(a.$t("form.label.inputWithValidation")),1),l[23]||(l[23]=n()),o("div",k,[t(e(b),null,{default:s(()=>[t(e(d),{modelValue:e(i).inputWithValidation,"onUpdate:modelValue":l[5]||(l[5]=m=>e(i).inputWithValidation=m),label:a.$t("form.label.email"),placeholder:a.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"])]),_:1}),l[22]||(l[22]=n()),t(r,{language:"html-vue"},{default:s(()=>l[21]||(l[21]=[n(`
          <Form>
            <Email 
              v-model="input"
              label="Email"
              placeholder="Enter a email"
            />
          </Form>

          <script setup lang="ts">
          import { Form, Email } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),l[38]||(l[38]=n()),o("section",null,[o("h2",null,u(a.$t("form.label.inputWithValidationOptions")),1),l[26]||(l[26]=n()),o("div",C,[t(e(b),null,{default:s(()=>[t(e(d),{modelValue:e(i).inputWithValidation,"onUpdate:modelValue":l[6]||(l[6]=m=>e(i).inputWithValidation=m),label:a.$t("form.label.email"),options:g,placeholder:a.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"])]),_:1}),l[25]||(l[25]=n()),t(r,{language:"html-vue"},{default:s(()=>l[24]||(l[24]=[n(`
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
        `)])),_:1})])]),l[39]||(l[39]=n()),o("section",null,[o("h2",null,u(a.$t("form.label.customErrorMessageInput")),1),l[29]||(l[29]=n()),o("div",L,[t(e(b),null,{default:s(()=>[t(e(d),{modelValue:e(i).textInput,"onUpdate:modelValue":l[7]||(l[7]=m=>e(i).textInput=m),label:a.$t("form.label.email"),"error-messages":E,options:g,placeholder:a.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"])]),_:1}),l[28]||(l[28]=n()),t(r,{language:"html-vue"},{default:s(()=>l[27]||(l[27]=[n(`
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
        `)])),_:1})])]),l[40]||(l[40]=n()),o("section",null,[o("h2",null,u(a.$t("form.label.customValidationInput")),1),l[32]||(l[32]=n()),o("div",N,[t(e(b),null,{default:s(()=>[t(e(d),{modelValue:e(i).customValidationInput,"onUpdate:modelValue":l[8]||(l[8]=m=>e(i).customValidationInput=m),label:a.$t("form.label.email"),placeholder:a.$t("form.placeholder.email"),schema:e(v),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),l[31]||(l[31]=n()),t(r,{language:"html-vue"},{default:s(()=>l[30]||(l[30]=[n(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{h as default};

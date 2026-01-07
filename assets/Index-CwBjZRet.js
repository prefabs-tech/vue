import{v as d,h as b}from"./PrefabsTechVue3Form.es-BFkBFGRS.js";import{d as $,I as y,L as z,M as h,r as u,J as O,e as w,o as D,i as m,f as t,B as e,h as a,t as f,u as n}from"./index-DDMEuY1q.js";import{_ as F}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-kaJ680Ed.js";import{_ as M}from"./FormPage.vue_vue_type_style_index_0_lang-CwKnaVJ-.js";import"./PrefabsTechVue3TanstackTable.es-WWmtYxey.js";const S={class:"section-content"},q={class:"section-content"},U={class:"section-content"},P={class:"section-content"},c={class:"section-content"},B={class:"section-content"},W={class:"section-content"},L={class:"section-content"},C={name:"EmailInputField"},A=$({...C,setup(N){const{t:r}=y(),g=[{description:r("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | null | undefined"}],E=z.string().email({message:r("form.errors.email.invalid")}),V=[{default:"false",description:r("form.documentation.propsDescription.input.disabled"),prop:"disabled",type:"Boolean"},{default:'{ required: "Email address is required", invalid: "Please provide a valid email address" }',description:r("form.documentation.propsDescription.input.errorMessages"),prop:"errorMessages",type:"EmailErrorMessages"},{default:"-",description:r("form.documentation.propsDescription.input.label"),prop:"label",type:"String"},{default:"-",description:r("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"String | null | undefined"},{default:'"email"',description:r("form.documentation.propsDescription.input.name"),prop:"name",type:"String"},{default:"-",description:r("form.documentation.propsDescription.input.options"),prop:"options",type:"IsEmailOptions"},{default:"-",description:r("form.documentation.propsDescription.input.placeholder"),prop:"placeholder",type:"String"},{default:"-",description:r("form.documentation.propsDescription.input.schema"),prop:"schema",type:"z.ZodType<string | number | object>"}],I={required:r("form.errors.input.required"),invalid:r("form.errors.email.invalid",{list:"(dzangolab.com, dzango.com, gmail.com)"})},v={allow_display_name:!1,allow_utf8_local_part:!0,host_whitelist:["dzangolab.com","dzango.com","gmail.com"],require_display_name:!1};let i=h({customValidationInput:u(),disabled:u("monorepo@prefabs.tech.com"),i18nInput:u(),input:u(),inputWithValidation:u(),noLabelInput:u(),textInput:u(),validationOptionInput:u()});return(o,l)=>{const p=O("SshPre");return D(),w(M,{subtitle:n(r)("form.subtitle.email"),title:o.$t("form.label.email"),class:"demo"},{default:m(()=>[t("section",null,[t("h2",null,f(o.$t("form.label.basicInput")),1),l[10]||(l[10]=e()),t("div",S,[a(n(d),{modelValue:n(i).noLabelInput,"onUpdate:modelValue":l[0]||(l[0]=s=>n(i).noLabelInput=s),placeholder:o.$t("form.placeholder.email")},null,8,["modelValue","placeholder"]),l[9]||(l[9]=e()),a(p,{language:"html-vue"},{default:m(()=>l[8]||(l[8]=[e(`
          <template>
            <Email 
              v-model="input"
              placeholder="Enter a email"
            />
          </template>
  
          <script setup lang="ts">
          import { Email } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),l[33]||(l[33]=e()),t("section",null,[t("h2",null,f(o.$t("form.label.labelInput")),1),l[13]||(l[13]=e()),t("div",q,[a(n(d),{modelValue:n(i).input,"onUpdate:modelValue":l[1]||(l[1]=s=>n(i).input=s),label:o.$t("form.label.email"),placeholder:o.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"]),l[12]||(l[12]=e()),a(p,{language:"html-vue"},{default:m(()=>l[11]||(l[11]=[e(`
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
        `)])),_:1})])]),l[34]||(l[34]=e()),t("section",null,[t("h2",null,f(o.$t("form.label.disabled")),1),l[16]||(l[16]=e()),t("div",U,[a(n(d),{modelValue:n(i).disabled,"onUpdate:modelValue":l[2]||(l[2]=s=>n(i).disabled=s),label:o.$t("form.label.email"),disabled:""},null,8,["modelValue","label"]),l[15]||(l[15]=e()),a(p,{language:"html-vue"},{default:m(()=>l[14]||(l[14]=[e(`
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
        `)])),_:1})])]),l[35]||(l[35]=e()),t("section",null,[t("h2",null,f(o.$t("form.label.withI18n")),1),l[19]||(l[19]=e()),t("div",P,[a(n(d),{modelValue:n(i).i18nInput,"onUpdate:modelValue":l[3]||(l[3]=s=>n(i).i18nInput=s),label:n(r)("form.label.email"),placeholder:n(r)("form.placeholder.email")},null,8,["modelValue","label","placeholder"]),l[18]||(l[18]=e()),a(p,{language:"html-vue"},{default:m(()=>l[17]||(l[17]=[e(`
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
        `)])),_:1})])]),l[36]||(l[36]=e()),t("section",null,[t("h2",null,f(o.$t("form.label.inputWithValidation")),1),l[22]||(l[22]=e()),t("div",c,[a(n(b),null,{default:m(()=>[a(n(d),{modelValue:n(i).inputWithValidation,"onUpdate:modelValue":l[4]||(l[4]=s=>n(i).inputWithValidation=s),label:o.$t("form.label.email"),placeholder:o.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"])]),_:1}),l[21]||(l[21]=e()),a(p,{language:"html-vue"},{default:m(()=>l[20]||(l[20]=[e(`
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
        `)])),_:1})])]),l[37]||(l[37]=e()),t("section",null,[t("h2",null,f(o.$t("form.label.inputWithValidationOptions")),1),l[25]||(l[25]=e()),t("div",B,[a(n(b),null,{default:m(()=>[a(n(d),{modelValue:n(i).validationOptionInput,"onUpdate:modelValue":l[5]||(l[5]=s=>n(i).validationOptionInput=s),label:o.$t("form.label.email"),options:v,placeholder:o.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"])]),_:1}),l[24]||(l[24]=e()),a(p,{language:"html-vue"},{default:m(()=>l[23]||(l[23]=[e(`
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
        `)])),_:1})])]),l[38]||(l[38]=e()),t("section",null,[t("h2",null,f(o.$t("form.label.customErrorMessageInput")),1),l[28]||(l[28]=e()),t("div",W,[a(n(b),null,{default:m(()=>[a(n(d),{modelValue:n(i).textInput,"onUpdate:modelValue":l[6]||(l[6]=s=>n(i).textInput=s),label:o.$t("form.label.email"),"error-messages":I,options:v,placeholder:o.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"])]),_:1}),l[27]||(l[27]=e()),a(p,{language:"html-vue"},{default:m(()=>l[26]||(l[26]=[e(`
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
        `)])),_:1})])]),l[39]||(l[39]=e()),t("section",null,[t("h2",null,f(o.$t("form.label.customValidationInput")),1),l[31]||(l[31]=e()),t("div",L,[a(n(b),null,{default:m(()=>[a(n(d),{modelValue:n(i).customValidationInput,"onUpdate:modelValue":l[7]||(l[7]=s=>n(i).customValidationInput=s),label:o.$t("form.label.email"),placeholder:o.$t("form.placeholder.email"),schema:n(E),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),l[30]||(l[30]=e()),a(p,{language:"html-vue"},{default:m(()=>l[29]||(l[29]=[e(`
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
        `)])),_:1})])]),l[40]||(l[40]=e()),a(F,{"events-data":g,"props-data":V,"props-table-title":o.$t("common.properties",{value:"EmailProperties"})},null,8,["props-table-title"]),l[41]||(l[41]=e()),a(p,{language:"html-vue"},{default:m(()=>l[32]||(l[32]=[e(`
      interface EmailErrorMessages {
        invalid?: string;
        required?: string;
      }
    `)])),_:1})]),_:1},8,["subtitle","title"])}}});export{A as default};

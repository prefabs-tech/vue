import{b as d,r as b}from"./PrefabsTechVue3Form.es-CNTcCXbR.js";import{d as $,L as y,N as z,M as O,o as D,e as h,f as s,h as t,t as u,z as e,a,u as n,O as F,r as f}from"./index-CNYYxeCo.js";import{_ as w}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-B3tqDFC6.js";import{_ as M}from"./FormPage.vue_vue_type_style_index_0_lang-Db5_J_Ew.js";import"./PrefabsTechVue3TanstackTable.es-Bja1zcm5.js";const S={class:"section-content"},q={class:"section-content"},U={class:"section-content"},P={class:"section-content"},c={class:"section-content"},W={class:"section-content"},k={class:"section-content"},B={class:"section-content"},L={name:"EmailInputDemo"},G=$({...L,setup(N){const{t:m}=y(),g=[{description:m("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | null | undefined"}],E=z.string().email({message:m("form.errors.email.invalid")}),V=[{default:"false",description:m("form.documentation.propsDescription.input.disabled"),prop:"disabled",type:"Boolean"},{default:'{ required: "Email address is required", invalid: "Please provide a valid email address" }',description:m("form.documentation.propsDescription.input.errorMessages"),prop:"errorMessages",type:"EmailErrorMessages"},{default:"-",description:m("form.documentation.propsDescription.input.label"),prop:"label",type:"String"},{default:"-",description:m("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"String | null | undefined"},{default:'"email"',description:m("form.documentation.propsDescription.input.name"),prop:"name",type:"String"},{default:"-",description:m("form.documentation.propsDescription.input.options"),prop:"options",type:"IsEmailOptions"},{default:"-",description:m("form.documentation.propsDescription.input.placeholder"),prop:"placeholder",type:"String"},{default:"-",description:m("form.documentation.propsDescription.input.schema"),prop:"schema",type:"z.ZodType<string | number | object>"}],I={required:m("form.errors.input.required"),invalid:m("form.errors.email.invalid",{list:"(dzangolab.com, dzango.com, gmail.com)"})},v={allow_display_name:!1,allow_utf8_local_part:!0,host_whitelist:["dzangolab.com","dzango.com","gmail.com"],require_display_name:!1};let i=F({customValidationInput:f(),disabled:f("monorepo@prefabs.tech.com"),i18nInput:f(),input:f(),inputWithValidation:f(),noLabelInput:f(),textInput:f(),validationOptionInput:f()});return(o,l)=>{const p=O("SshPre");return D(),h(M,{subtitle:n(m)("form.subtitle.email"),title:o.$t("form.label.email"),class:"demo"},{default:s(()=>[t("section",null,[t("h2",null,u(o.$t("form.label.basicInput")),1),l[10]||(l[10]=e()),t("div",S,[a(n(d),{modelValue:n(i).noLabelInput,"onUpdate:modelValue":l[0]||(l[0]=r=>n(i).noLabelInput=r),placeholder:o.$t("form.placeholder.email")},null,8,["modelValue","placeholder"]),l[9]||(l[9]=e()),a(p,{language:"html-vue"},{default:s(()=>[...l[8]||(l[8]=[e(`
          <template>
            <Email 
              v-model="input"
              placeholder="Enter a email"
            />
          </template>
  
          <script setup lang="ts">
          import { Email } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)])]),_:1})])]),l[33]||(l[33]=e()),t("section",null,[t("h2",null,u(o.$t("form.label.labelInput")),1),l[13]||(l[13]=e()),t("div",q,[a(n(d),{modelValue:n(i).input,"onUpdate:modelValue":l[1]||(l[1]=r=>n(i).input=r),label:o.$t("form.label.email"),placeholder:o.$t("form.placeholder.email"),name:"label-input"},null,8,["modelValue","label","placeholder"]),l[12]||(l[12]=e()),a(p,{language:"html-vue"},{default:s(()=>[...l[11]||(l[11]=[e(`
          <template>
            <Email 
              v-model="input"
              label="Email"
              name="email"
              placeholder="Enter a email"
            />
          </template>

          <script setup lang="ts">
          import { Email } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)])]),_:1})])]),l[34]||(l[34]=e()),t("section",null,[t("h2",null,u(o.$t("form.label.disabled")),1),l[16]||(l[16]=e()),t("div",U,[a(n(d),{modelValue:n(i).disabled,"onUpdate:modelValue":l[2]||(l[2]=r=>n(i).disabled=r),label:o.$t("form.label.email"),disabled:"",name:"disabled-input"},null,8,["modelValue","label"]),l[15]||(l[15]=e()),a(p,{language:"html-vue"},{default:s(()=>[...l[14]||(l[14]=[e(`
          <template>
            <Email 
              v-model="input"
              disabled
              label="Email"
              name="email"
            />
          </template>

          <script setup lang="ts">
          import { Email } from "@prefabs.tech/vue3-form";
          import { ref } from vue;
  
          const input = ref("monorepo@prefabs.tech.com");
          <\/script>
        `,-1)])]),_:1})])]),l[35]||(l[35]=e()),t("section",null,[t("h2",null,u(o.$t("form.label.withI18n")),1),l[19]||(l[19]=e()),t("div",P,[a(n(d),{modelValue:n(i).i18nInput,"onUpdate:modelValue":l[3]||(l[3]=r=>n(i).i18nInput=r),label:n(m)("form.label.email"),placeholder:n(m)("form.placeholder.email"),name:"i18n-input"},null,8,["modelValue","label","placeholder"]),l[18]||(l[18]=e()),a(p,{language:"html-vue"},{default:s(()=>[...l[17]||(l[17]=[e(`
          <template>
            <Email 
              v-model="input"
              :label="t('form.label.email')"
              :placeholder="t('form.placeholder.email')"
              name="email"
            />
          </template>

          <script setup lang="ts">
          import { Email } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `,-1)])]),_:1})])]),l[36]||(l[36]=e()),t("section",null,[t("h2",null,u(o.$t("form.label.inputWithValidation")),1),l[22]||(l[22]=e()),t("div",c,[a(n(b),null,{default:s(()=>[a(n(d),{modelValue:n(i).inputWithValidation,"onUpdate:modelValue":l[4]||(l[4]=r=>n(i).inputWithValidation=r),label:o.$t("form.label.email"),placeholder:o.$t("form.placeholder.email"),name:"validation-input"},null,8,["modelValue","label","placeholder"])]),_:1}),l[21]||(l[21]=e()),a(p,{language:"html-vue"},{default:s(()=>[...l[20]||(l[20]=[e(`
          <Form>
            <Email 
              v-model="input"
              label="Email"
              name="email"
              placeholder="Enter a email"
            />
          </Form>

          <script setup lang="ts">
          import { Form, Email } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)])]),_:1})])]),l[37]||(l[37]=e()),t("section",null,[t("h2",null,u(o.$t("form.label.inputWithValidationOptions")),1),l[25]||(l[25]=e()),t("div",W,[a(n(b),null,{default:s(()=>[a(n(d),{modelValue:n(i).validationOptionInput,"onUpdate:modelValue":l[5]||(l[5]=r=>n(i).validationOptionInput=r),label:o.$t("form.label.email"),options:v,placeholder:o.$t("form.placeholder.email"),name:"validation-email"},null,8,["modelValue","label","placeholder"])]),_:1}),l[24]||(l[24]=e()),a(p,{language:"html-vue"},{default:s(()=>[...l[23]||(l[23]=[e(`
          <Form>
            <Email 
              v-model="input"
              :options="validationOptions"
              label="Email"
              name="email"
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
        `,-1)])]),_:1})])]),l[38]||(l[38]=e()),t("section",null,[t("h2",null,u(o.$t("form.label.customErrorMessageInput")),1),l[28]||(l[28]=e()),t("div",k,[a(n(b),null,{default:s(()=>[a(n(d),{modelValue:n(i).textInput,"onUpdate:modelValue":l[6]||(l[6]=r=>n(i).textInput=r),label:o.$t("form.label.email"),"error-messages":I,options:v,placeholder:o.$t("form.placeholder.email"),name:"message-input"},null,8,["modelValue","label","placeholder"])]),_:1}),l[27]||(l[27]=e()),a(p,{language:"html-vue"},{default:s(()=>[...l[26]||(l[26]=[e(`
          <Form>
            <Email 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Email"
              name="email"
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
        `,-1)])]),_:1})])]),l[39]||(l[39]=e()),t("section",null,[t("h2",null,u(o.$t("form.label.customValidationInput")),1),l[31]||(l[31]=e()),t("div",B,[a(n(b),null,{default:s(()=>[a(n(d),{modelValue:n(i).customValidationInput,"onUpdate:modelValue":l[7]||(l[7]=r=>n(i).customValidationInput=r),label:o.$t("form.label.email"),placeholder:o.$t("form.placeholder.email"),schema:n(E),name:"custom-input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),l[30]||(l[30]=e()),a(p,{language:"html-vue"},{default:s(()=>[...l[29]||(l[29]=[e(`
          <Form>
            <Email 
              v-model="input"
              :schema="inputSchema"
              label="Email"
              placeholder="Enter a email"
              name="email"
            />
          </Form>

          <script setup lang="ts">
          import { Form, Email } from "@prefabs.tech/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .email({ message: "Please provide a valid email" });
          <\/script>
        `,-1)])]),_:1})])]),l[40]||(l[40]=e()),a(w,{"events-data":g,"props-data":V,"props-table-title":o.$t("common.properties",{value:"EmailProperties"})},null,8,["props-table-title"]),l[41]||(l[41]=e()),a(p,{language:"html-vue"},{default:s(()=>[...l[32]||(l[32]=[e(`
      interface EmailErrorMessages {
        invalid?: string;
        required?: string;
      }
    `,-1)])]),_:1})]),_:1},8,["subtitle","title"])}}});export{G as default};

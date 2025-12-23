import{$ as d,E as b}from"./PrefabsTechVue3Form.es-JJOMbn2S.js";import{d as $,I as y,L as z,M as O,r as u,J as D,e as F,o as h,i as m,B as e,f as t,h as a,t as f,u as n,q as w}from"./index-DLHnW3Hk.js";import{_ as M}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-BL6C4Kpy.js";import{_ as q}from"./FormPage.vue_vue_type_style_index_0_lang-At3nlgdF.js";import"./PrefabsTechVue3TanstackTable.es-DcZUwQPE.js";const S={class:"section-content"},U={class:"section-content"},P={class:"section-content"},B={class:"section-content"},W={class:"section-content"},k={class:"section-content"},C={class:"section-content"},L={class:"section-content"},N={name:"EmailInputField"},G=$({...N,setup(T){const{t:s}=y(),g=[{description:s("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | null | undefined"}],E=z.string().email({message:s("form.errors.email.invalid")}),V=[{default:"false",description:s("form.documentation.propsDescription.input.disabled"),prop:"disabled",type:"Boolean"},{default:'{ required: "Email address is required", invalid: "Please provide a valid email address" }',description:s("form.documentation.propsDescription.input.errorMessages"),prop:"errorMessages",type:"EmailErrorMessages"},{default:"-",description:s("form.documentation.propsDescription.input.label"),prop:"label",type:"String"},{default:"-",description:s("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"String | null | undefined"},{default:'"email"',description:s("form.documentation.propsDescription.input.name"),prop:"name",type:"String"},{default:"-",description:s("form.documentation.propsDescription.input.options"),prop:"options",type:"IsEmailOptions"},{default:"-",description:s("form.documentation.propsDescription.input.placeholder"),prop:"placeholder",type:"String"},{default:"-",description:s("form.documentation.propsDescription.input.schema"),prop:"schema",type:"z.ZodType<string | number | object>"}],I={required:s("form.errors.input.required"),invalid:s("form.errors.email.invalid",{list:"(dzangolab.com, dzango.com, gmail.com)"})},v={allow_display_name:!1,allow_utf8_local_part:!0,host_whitelist:["dzangolab.com","dzango.com","gmail.com"],require_display_name:!1};let i=O({customValidationInput:u(),disabled:u("monorepo@prefabs.tech.com"),i18nInput:u(),input:u(),inputWithValidation:u(),noLabelInput:u(),textInput:u(),validationOptionInput:u()});return(o,l)=>{const p=D("SshPre");return h(),F(q,{subtitle:n(s)("form.subtitle.email"),title:o.$t("form.label.email"),class:"demo"},{toolbar:m(()=>[a(n(w),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=r=>o.$router.push("/form"))},null,8,["label"])]),default:m(()=>[l[34]||(l[34]=e()),t("section",null,[t("h2",null,f(o.$t("form.label.basicInput")),1),l[11]||(l[11]=e()),t("div",S,[a(n(d),{modelValue:n(i).noLabelInput,"onUpdate:modelValue":l[1]||(l[1]=r=>n(i).noLabelInput=r),placeholder:o.$t("form.placeholder.email")},null,8,["modelValue","placeholder"]),l[10]||(l[10]=e()),a(p,{language:"html-vue"},{default:m(()=>l[9]||(l[9]=[e(`
          <template>
            <Email 
              v-model="input"
              placeholder="Enter a email"
            />
          </template>
  
          <script setup lang="ts">
          import { Email } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),l[35]||(l[35]=e()),t("section",null,[t("h2",null,f(o.$t("form.label.labelInput")),1),l[14]||(l[14]=e()),t("div",U,[a(n(d),{modelValue:n(i).input,"onUpdate:modelValue":l[2]||(l[2]=r=>n(i).input=r),label:o.$t("form.label.email"),placeholder:o.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"]),l[13]||(l[13]=e()),a(p,{language:"html-vue"},{default:m(()=>l[12]||(l[12]=[e(`
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
        `)])),_:1})])]),l[36]||(l[36]=e()),t("section",null,[t("h2",null,f(o.$t("form.label.disabled")),1),l[17]||(l[17]=e()),t("div",P,[a(n(d),{modelValue:n(i).disabled,"onUpdate:modelValue":l[3]||(l[3]=r=>n(i).disabled=r),label:o.$t("form.label.email"),disabled:""},null,8,["modelValue","label"]),l[16]||(l[16]=e()),a(p,{language:"html-vue"},{default:m(()=>l[15]||(l[15]=[e(`
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
        `)])),_:1})])]),l[37]||(l[37]=e()),t("section",null,[t("h2",null,f(o.$t("form.label.withI18n")),1),l[20]||(l[20]=e()),t("div",B,[a(n(d),{modelValue:n(i).i18nInput,"onUpdate:modelValue":l[4]||(l[4]=r=>n(i).i18nInput=r),label:n(s)("form.label.email"),placeholder:n(s)("form.placeholder.email")},null,8,["modelValue","label","placeholder"]),l[19]||(l[19]=e()),a(p,{language:"html-vue"},{default:m(()=>l[18]||(l[18]=[e(`
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
        `)])),_:1})])]),l[38]||(l[38]=e()),t("section",null,[t("h2",null,f(o.$t("form.label.inputWithValidation")),1),l[23]||(l[23]=e()),t("div",W,[a(n(b),null,{default:m(()=>[a(n(d),{modelValue:n(i).inputWithValidation,"onUpdate:modelValue":l[5]||(l[5]=r=>n(i).inputWithValidation=r),label:o.$t("form.label.email"),placeholder:o.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"])]),_:1}),l[22]||(l[22]=e()),a(p,{language:"html-vue"},{default:m(()=>l[21]||(l[21]=[e(`
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
        `)])),_:1})])]),l[39]||(l[39]=e()),t("section",null,[t("h2",null,f(o.$t("form.label.inputWithValidationOptions")),1),l[26]||(l[26]=e()),t("div",k,[a(n(b),null,{default:m(()=>[a(n(d),{modelValue:n(i).validationOptionInput,"onUpdate:modelValue":l[6]||(l[6]=r=>n(i).validationOptionInput=r),label:o.$t("form.label.email"),options:v,placeholder:o.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"])]),_:1}),l[25]||(l[25]=e()),a(p,{language:"html-vue"},{default:m(()=>l[24]||(l[24]=[e(`
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
        `)])),_:1})])]),l[40]||(l[40]=e()),t("section",null,[t("h2",null,f(o.$t("form.label.customErrorMessageInput")),1),l[29]||(l[29]=e()),t("div",C,[a(n(b),null,{default:m(()=>[a(n(d),{modelValue:n(i).textInput,"onUpdate:modelValue":l[7]||(l[7]=r=>n(i).textInput=r),label:o.$t("form.label.email"),"error-messages":I,options:v,placeholder:o.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"])]),_:1}),l[28]||(l[28]=e()),a(p,{language:"html-vue"},{default:m(()=>l[27]||(l[27]=[e(`
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
        `)])),_:1})])]),l[41]||(l[41]=e()),t("section",null,[t("h2",null,f(o.$t("form.label.customValidationInput")),1),l[32]||(l[32]=e()),t("div",L,[a(n(b),null,{default:m(()=>[a(n(d),{modelValue:n(i).customValidationInput,"onUpdate:modelValue":l[8]||(l[8]=r=>n(i).customValidationInput=r),label:o.$t("form.label.email"),placeholder:o.$t("form.placeholder.email"),schema:n(E),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),l[31]||(l[31]=e()),a(p,{language:"html-vue"},{default:m(()=>l[30]||(l[30]=[e(`
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
        `)])),_:1})])]),l[42]||(l[42]=e()),a(M,{"events-data":g,"props-data":V,"props-table-title":o.$t("common.properties",{value:"EmailProperties"})},null,8,["props-table-title"]),l[43]||(l[43]=e()),a(p,{language:"html-vue"},{default:m(()=>l[33]||(l[33]=[e(`
      interface EmailErrorMessages {
        invalid?: string;
        required?: string;
      }
    `)])),_:1})]),_:1},8,["subtitle","title"])}}});export{G as default};

import{W as r,F as f}from"./DzangolabVue3Form.es-B8d0Mxve.js";import{d as V,z as $,A as z,B as T,r as m,p as F,e as q,o as x,w as i,C as t,f as o,t as d,h as u,u as l,q as U}from"./index-C44VGcWd.js";import{_ as w}from"./FormPage.vue_vue_type_style_index_0_lang-BPTWV9fY.js";const E={class:"section-content"},O={class:"section-content"},S={class:"section-content"},W={class:"section-content"},C={class:"section-content"},k={class:"section-content"},y={class:"section-content"},B={name:"TextInputField"},h=V({...B,setup(M){const{t:b}=$(),I=z.string().length(5,{message:b("form.errors.input.length",{length:5})}),v={required:b("form.errors.input.required")},g={ignore_whitespace:!0,required:!0};let a=T({customValidationInput:m(),disabled:m("dzangolab"),input:m(),inputWithValidation:m(),noLabelInput:m(),textInput:m()});return(e,n)=>{const s=F("SshPre");return x(),q(w,{title:e.$t("form.label.textInput"),class:"demo"},{toolbar:i(()=>[u(l(U),{label:e.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:n[0]||(n[0]=p=>e.$router.push("/form"))},null,8,["label"])]),default:i(()=>[n[29]||(n[29]=t()),o("section",null,[o("h2",null,d(e.$t("form.label.basicInput")),1),n[10]||(n[10]=t()),o("div",E,[u(l(r),{modelValue:l(a).noLabelInput,"onUpdate:modelValue":n[1]||(n[1]=p=>l(a).noLabelInput=p),placeholder:e.$t("form.placeholder.input")},null,8,["modelValue","placeholder"]),n[9]||(n[9]=t()),u(s,{language:"html-vue"},{default:i(()=>n[8]||(n[8]=[t(`
          <template>
            <TextInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { TextInput } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),n[30]||(n[30]=t()),o("section",null,[o("h2",null,d(e.$t("form.label.labelInput")),1),n[13]||(n[13]=t()),o("div",O,[u(l(r),{modelValue:l(a).input,"onUpdate:modelValue":n[2]||(n[2]=p=>l(a).input=p),label:e.$t("form.label.textInput"),placeholder:e.$t("form.placeholder.textInput")},null,8,["modelValue","label","placeholder"]),n[12]||(n[12]=t()),u(s,{language:"html-vue"},{default:i(()=>n[11]||(n[11]=[t(`
          <template>
            <TextInput 
              v-model="input"
              label="Input"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { TextInput } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),n[31]||(n[31]=t()),o("section",null,[o("h2",null,d(e.$t("form.label.disabled")),1),n[16]||(n[16]=t()),o("div",S,[u(l(r),{modelValue:l(a).disabled,"onUpdate:modelValue":n[3]||(n[3]=p=>l(a).disabled=p),label:e.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"]),n[15]||(n[15]=t()),u(s,{language:"html-vue"},{default:i(()=>n[14]||(n[14]=[t(`
          <template>
            <TextInput 
              v-model="input"
              label="Disabled"
              disabled
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),n[32]||(n[32]=t()),o("section",null,[o("h2",null,d(e.$t("form.label.withI18n")),1),n[19]||(n[19]=t()),o("div",W,[u(l(r),{modelValue:l(a).input,"onUpdate:modelValue":n[4]||(n[4]=p=>l(a).input=p),label:e.$t("form.label.textInput"),placeholder:e.$t("form.placeholder.textInput")},null,8,["modelValue","label","placeholder"]),n[18]||(n[18]=t()),u(s,{language:"html-vue"},{default:i(()=>n[17]||(n[17]=[t(`
          <template>
            <TextInput 
              v-model="input"
              :label="t('form.label.textInput')"
              :placeholder="t('form.placeholder.textInput')"
            />
          </template>

          <script setup lang="ts">
          import { TextInput } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),n[33]||(n[33]=t()),o("section",null,[o("h2",null,d(e.$t("form.label.inputWithValidation")),1),n[22]||(n[22]=t()),o("div",C,[u(l(f),null,{default:i(()=>[u(l(r),{modelValue:l(a).inputWithValidation,"onUpdate:modelValue":n[5]||(n[5]=p=>l(a).inputWithValidation=p),label:e.$t("form.label.input"),options:g,placeholder:e.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),n[21]||(n[21]=t()),u(s,{language:"html-vue"},{default:i(()=>n[20]||(n[20]=[t(`
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
        `)])),_:1})])]),n[34]||(n[34]=t()),o("section",null,[o("h2",null,d(e.$t("form.label.customErrorMessageInput")),1),n[25]||(n[25]=t()),o("div",k,[u(l(f),null,{default:i(()=>[u(l(r),{modelValue:l(a).textInput,"onUpdate:modelValue":n[6]||(n[6]=p=>l(a).textInput=p),label:e.$t("form.label.input"),"error-messages":v,options:g,placeholder:e.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),n[24]||(n[24]=t()),u(s,{language:"html-vue"},{default:i(()=>n[23]||(n[23]=[t(`
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
        `)])),_:1})])]),n[35]||(n[35]=t()),o("section",null,[o("h2",null,d(e.$t("form.label.customValidationInput")),1),n[28]||(n[28]=t()),o("div",y,[u(l(f),null,{default:i(()=>[u(l(r),{modelValue:l(a).customValidationInput,"onUpdate:modelValue":n[7]||(n[7]=p=>l(a).customValidationInput=p),label:e.$t("form.label.input"),placeholder:e.$t("form.placeholder.input"),schema:l(I),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),n[27]||(n[27]=t()),u(s,{language:"html-vue"},{default:i(()=>n[26]||(n[26]=[t(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{h as default};

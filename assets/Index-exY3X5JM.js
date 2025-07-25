import{I as i,$ as f}from"./PrefabsTechVue3Form.es-B5mhzLCL.js";import{d as V,E as $,I as T,L as h,r as d,H as F,e as x,o as E,i as r,B as n,f as o,t as m,g as u,u as e,v as U}from"./index-OrS9uXRl.js";import{_ as q}from"./FormPage.vue_vue_type_style_index_0_lang-C4cCvFiO.js";const z={class:"section-content"},O={class:"section-content"},S={class:"section-content"},w={class:"section-content"},k={class:"section-content"},y={class:"section-content"},B={class:"section-content"},C={name:"TextInputField"},N=V({...C,setup(L){const{t:b}=$(),v=T.string().length(5,{message:b("form.errors.input.length",{length:5})}),g={required:b("form.errors.input.required")},I={ignore_whitespace:!0,required:!0};let s=h({customValidationInput:d(),disabled:d("dzangolab"),input:d(),inputWithValidation:d(),noLabelInput:d(),textInput:d()});return(l,t)=>{const a=F("SshPre");return E(),x(q,{title:l.$t("form.label.textInput"),class:"demo"},{toolbar:r(()=>[u(e(U),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=p=>l.$router.push("/form"))},null,8,["label"])]),default:r(()=>[t[29]||(t[29]=n()),o("section",null,[o("h2",null,m(l.$t("form.label.basicInput")),1),t[10]||(t[10]=n()),o("div",z,[u(e(i),{modelValue:e(s).noLabelInput,"onUpdate:modelValue":t[1]||(t[1]=p=>e(s).noLabelInput=p),placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","placeholder"]),t[9]||(t[9]=n()),u(a,{language:"html-vue"},{default:r(()=>t[8]||(t[8]=[n(`
          <template>
            <TextInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { TextInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),t[30]||(t[30]=n()),o("section",null,[o("h2",null,m(l.$t("form.label.labelInput")),1),t[13]||(t[13]=n()),o("div",O,[u(e(i),{modelValue:e(s).input,"onUpdate:modelValue":t[2]||(t[2]=p=>e(s).input=p),label:l.$t("form.label.textInput"),placeholder:l.$t("form.placeholder.textInput")},null,8,["modelValue","label","placeholder"]),t[12]||(t[12]=n()),u(a,{language:"html-vue"},{default:r(()=>t[11]||(t[11]=[n(`
          <template>
            <TextInput 
              v-model="input"
              label="Input"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { TextInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),t[31]||(t[31]=n()),o("section",null,[o("h2",null,m(l.$t("form.label.disabled")),1),t[16]||(t[16]=n()),o("div",S,[u(e(i),{modelValue:e(s).disabled,"onUpdate:modelValue":t[3]||(t[3]=p=>e(s).disabled=p),label:l.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"]),t[15]||(t[15]=n()),u(a,{language:"html-vue"},{default:r(()=>t[14]||(t[14]=[n(`
          <template>
            <TextInput 
              v-model="input"
              label="Disabled"
              disabled
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),t[32]||(t[32]=n()),o("section",null,[o("h2",null,m(l.$t("form.label.withI18n")),1),t[19]||(t[19]=n()),o("div",w,[u(e(i),{modelValue:e(s).input,"onUpdate:modelValue":t[4]||(t[4]=p=>e(s).input=p),label:l.$t("form.label.textInput"),placeholder:l.$t("form.placeholder.textInput")},null,8,["modelValue","label","placeholder"]),t[18]||(t[18]=n()),u(a,{language:"html-vue"},{default:r(()=>t[17]||(t[17]=[n(`
          <template>
            <TextInput 
              v-model="input"
              :label="t('form.label.textInput')"
              :placeholder="t('form.placeholder.textInput')"
            />
          </template>

          <script setup lang="ts">
          import { TextInput } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),t[33]||(t[33]=n()),o("section",null,[o("h2",null,m(l.$t("form.label.inputWithValidation")),1),t[22]||(t[22]=n()),o("div",k,[u(e(f),null,{default:r(()=>[u(e(i),{modelValue:e(s).inputWithValidation,"onUpdate:modelValue":t[5]||(t[5]=p=>e(s).inputWithValidation=p),label:l.$t("form.label.input"),options:I,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),t[21]||(t[21]=n()),u(a,{language:"html-vue"},{default:r(()=>t[20]||(t[20]=[n(`
          <Form>
            <TextInput 
              v-model="input"
              :options="validationOptions"
              label="Input"
              placeholder="Enter input"
            />
          </Form>

          <script setup lang="ts">
          import { Form, TextInput } from "@prefabs.tech/vue3-form";

          const validationOptions = {
            ignore_whitespace: true,
            required: true
          };
          <\/script>
        `)])),_:1})])]),t[34]||(t[34]=n()),o("section",null,[o("h2",null,m(l.$t("form.label.customErrorMessageInput")),1),t[25]||(t[25]=n()),o("div",y,[u(e(f),null,{default:r(()=>[u(e(i),{modelValue:e(s).textInput,"onUpdate:modelValue":t[6]||(t[6]=p=>e(s).textInput=p),label:l.$t("form.label.input"),"error-messages":g,options:I,placeholder:l.$t("form.placeholder.input")},null,8,["modelValue","label","placeholder"])]),_:1}),t[24]||(t[24]=n()),u(a,{language:"html-vue"},{default:r(()=>t[23]||(t[23]=[n(`
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
          import { Form, TextInput } from "@prefabs.tech/vue3-form";

          const validationMessages = {
            required: "The field should not be empty"
          };

          const validationOptions = {
            ignore_whitespace: true,
            required: true
          };
          <\/script>
        `)])),_:1})])]),t[35]||(t[35]=n()),o("section",null,[o("h2",null,m(l.$t("form.label.customValidationInput")),1),t[28]||(t[28]=n()),o("div",B,[u(e(f),null,{default:r(()=>[u(e(i),{modelValue:e(s).customValidationInput,"onUpdate:modelValue":t[7]||(t[7]=p=>e(s).customValidationInput=p),label:l.$t("form.label.input"),placeholder:l.$t("form.placeholder.input"),schema:e(v),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),t[27]||(t[27]=n()),u(a,{language:"html-vue"},{default:r(()=>t[26]||(t[26]=[n(`
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
          import { Form, Input } from "@prefabs.tech/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .length(5, { message: "Input must be exactly 5 characters long") });
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{N as default};

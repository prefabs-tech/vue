import{w as u,$ as v}from"./PrefabsTechVue3Form.es-B5mhzLCL.js";import{d as g,E as I,I as V,L as $,r as d,H as w,e as y,o as U,i as p,B as l,f as o,t as i,g as s,u as t,v as h}from"./index-OrS9uXRl.js";import{_ as E}from"./FormPage.vue_vue_type_style_index_0_lang-C4cCvFiO.js";const S={class:"section-content"},z={class:"section-content"},T={class:"section-content"},W={class:"section-content"},k={class:"section-content"},B={class:"section-content"},C={name:"InputField"},D=g({...C,setup(F){const{t:f}=I(),b=V.string().min(3,{message:f("form.errors.input.min",{length:3})});let a=$({disabled:d("monorepo@gmail.com"),input:d(),inputWithValidation:d(),noLabelInput:d(),passwordInput:d()});return(n,e)=>{const m=w("SshPre");return U(),y(E,{title:n.$t("form.label.input"),class:"demo"},{toolbar:p(()=>[s(t(h),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=r=>n.$router.push("/form"))},null,8,["label"])]),default:p(()=>[e[25]||(e[25]=l()),o("section",null,[o("h2",null,i(n.$t("form.label.basicInput")),1),e[9]||(e[9]=l()),o("div",S,[s(t(u),{modelValue:t(a).noLabelInput,"onUpdate:modelValue":e[1]||(e[1]=r=>t(a).noLabelInput=r),placeholder:n.$t("form.placeholder.username"),type:"text"},null,8,["modelValue","placeholder"]),e[8]||(e[8]=l()),s(m,{language:"html-vue"},{default:p(()=>e[7]||(e[7]=[l(`
          <template>
            <Input 
              v-model="username"
              placeholder="Enter username"
              type="text"
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[26]||(e[26]=l()),o("section",null,[o("h2",null,i(n.$t("form.label.labelInput")),1),e[12]||(e[12]=l()),o("div",z,[s(t(u),{modelValue:t(a).input,"onUpdate:modelValue":e[2]||(e[2]=r=>t(a).input=r),label:n.$t("form.label.username"),placeholder:n.$t("form.placeholder.username")},null,8,["modelValue","label","placeholder"]),e[11]||(e[11]=l()),s(m,{language:"html-vue"},{default:p(()=>e[10]||(e[10]=[l(`
          <template>
            <Input 
              v-model="username"
              label="Username"
              placeholder="Enter username"
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
  
          const username = ref(null as string);
          <\/script>
        `)])),_:1})])]),e[27]||(e[27]=l()),o("section",null,[o("h2",null,i(n.$t("form.label.inputWithType")),1),e[15]||(e[15]=l()),o("div",T,[s(t(u),{modelValue:t(a).passwordInput,"onUpdate:modelValue":e[3]||(e[3]=r=>t(a).passwordInput=r),label:n.$t("form.label.password"),placeholder:n.$t("form.placeholder.password"),type:"password"},null,8,["modelValue","label","placeholder"]),e[14]||(e[14]=l()),s(m,{language:"html-vue"},{default:p(()=>e[13]||(e[13]=[l(`
          <template>
            <Input 
              v-model="password"
              label="Password"
              placeholder="Enter password"
              type="password"
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[28]||(e[28]=l()),o("section",null,[o("h2",null,i(n.$t("form.label.disabled")),1),e[18]||(e[18]=l()),o("div",W,[s(t(u),{modelValue:t(a).disabled,"onUpdate:modelValue":e[4]||(e[4]=r=>t(a).disabled=r),label:n.$t("form.label.email"),type:"email",disabled:""},null,8,["modelValue","label"]),e[17]||(e[17]=l()),s(m,{language:"html-vue"},{default:p(()=>e[16]||(e[16]=[l(`
          <template>
            <Input 
              v-model="email"
              label="Email"
              type="email"
              disabled
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[29]||(e[29]=l()),o("section",null,[o("h2",null,i(n.$t("form.label.withI18n")),1),e[21]||(e[21]=l()),o("div",k,[s(t(u),{modelValue:t(a).input,"onUpdate:modelValue":e[5]||(e[5]=r=>t(a).input=r),label:n.$t("form.label.username"),placeholder:n.$t("form.placeholder.username")},null,8,["modelValue","label","placeholder"]),e[20]||(e[20]=l()),s(m,{language:"html-vue"},{default:p(()=>e[19]||(e[19]=[l(`
          <template>
            <Input 
              v-model="username"
              :label="t('form.label.username')"
              :placeholder="t('form.placeholder.username')"
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),e[30]||(e[30]=l()),o("section",null,[o("h2",null,i(n.$t("form.label.inputWithValidation")),1),e[24]||(e[24]=l()),o("div",B,[s(t(v),null,{default:p(()=>[s(t(u),{modelValue:t(a).inputWithValidation,"onUpdate:modelValue":e[6]||(e[6]=r=>t(a).inputWithValidation=r),label:n.$t("form.label.title"),placeholder:n.$t("form.placeholder.title"),schema:t(b),name:"title",type:"text"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e[23]||(e[23]=l()),s(m,{language:"html-vue"},{default:p(()=>e[22]||(e[22]=[l(`
          <Form>
            <Input 
              v-model="courseTitle"
              :schema="inputSchema"
              label="Title"
              placeholder="Enter course title"
              type="text"
            />
          </Form>

          <script setup lang="ts">
          import { Form, Input } from "@prefabs.tech/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .min(3, { message: "Title must be at least 3 character(s)" });        
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{D as default};

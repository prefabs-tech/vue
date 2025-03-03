import{_ as p,F as g}from"./DzangolabVue3Form.es-W8oNrDMf.js";import{d as v,z as I,A as V,B as $,r as d,y as z,l as w,o as y,p as m,C as e,e as o,t as i,g as a,u as n,D as U}from"./index-DjJ-FZ_G.js";import{_ as F}from"./FormPage.vue_vue_type_style_index_0_lang-D1J0UkCG.js";const S={class:"section-content"},C={class:"section-content"},E={class:"section-content"},T={class:"section-content"},W={class:"section-content"},k={class:"section-content"},B={name:"InputField"},A=v({...B,setup(D){const{t:f}=I(),b=V.string().min(3,{message:f("form.errors.input.min",{length:3})});let s=$({disabled:d("monorepo@gmail.com"),input:d(),inputWithValidation:d(),noLabelInput:d(),passwordInput:d()});return(t,l)=>{const u=z("SshPre");return y(),w(F,{title:t.$t("form.label.input"),class:"demo"},{toolbar:m(()=>[a(n(U),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=r=>t.$router.push("/form"))},null,8,["label"])]),default:m(()=>[l[25]||(l[25]=e()),o("section",null,[o("h2",null,i(t.$t("form.label.basicInput")),1),l[9]||(l[9]=e()),o("div",S,[a(n(p),{modelValue:n(s).noLabelInput,"onUpdate:modelValue":l[1]||(l[1]=r=>n(s).noLabelInput=r),placeholder:t.$t("form.placeholder.username"),type:"text"},null,8,["modelValue","placeholder"]),l[8]||(l[8]=e()),a(u,{language:"html-vue"},{default:m(()=>l[7]||(l[7]=[e(`
          <template>
            <Input 
              v-model="username"
              placeholder="Enter username"
              type="text"
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),l[26]||(l[26]=e()),o("section",null,[o("h2",null,i(t.$t("form.label.labelInput")),1),l[12]||(l[12]=e()),o("div",C,[a(n(p),{modelValue:n(s).input,"onUpdate:modelValue":l[2]||(l[2]=r=>n(s).input=r),label:t.$t("form.label.username"),placeholder:t.$t("form.placeholder.username")},null,8,["modelValue","label","placeholder"]),l[11]||(l[11]=e()),a(u,{language:"html-vue"},{default:m(()=>l[10]||(l[10]=[e(`
          <template>
            <Input 
              v-model="username"
              label="Username"
              placeholder="Enter username"
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          import { ref } from "vue";
  
          const username = ref(null as string);
          <\/script>
        `)])),_:1})])]),l[27]||(l[27]=e()),o("section",null,[o("h2",null,i(t.$t("form.label.inputWithType")),1),l[15]||(l[15]=e()),o("div",E,[a(n(p),{modelValue:n(s).passwordInput,"onUpdate:modelValue":l[3]||(l[3]=r=>n(s).passwordInput=r),label:t.$t("form.label.password"),placeholder:t.$t("form.placeholder.password"),type:"password"},null,8,["modelValue","label","placeholder"]),l[14]||(l[14]=e()),a(u,{language:"html-vue"},{default:m(()=>l[13]||(l[13]=[e(`
          <template>
            <Input 
              v-model="password"
              label="Password"
              placeholder="Enter password"
              type="password"
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),l[28]||(l[28]=e()),o("section",null,[o("h2",null,i(t.$t("form.label.disabled")),1),l[18]||(l[18]=e()),o("div",T,[a(n(p),{modelValue:n(s).disabled,"onUpdate:modelValue":l[4]||(l[4]=r=>n(s).disabled=r),label:t.$t("form.label.email"),type:"email",disabled:""},null,8,["modelValue","label"]),l[17]||(l[17]=e()),a(u,{language:"html-vue"},{default:m(()=>l[16]||(l[16]=[e(`
          <template>
            <Input 
              v-model="email"
              label="Email"
              type="email"
              disabled
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),l[29]||(l[29]=e()),o("section",null,[o("h2",null,i(t.$t("form.label.withI18n")),1),l[21]||(l[21]=e()),o("div",W,[a(n(p),{modelValue:n(s).input,"onUpdate:modelValue":l[5]||(l[5]=r=>n(s).input=r),label:t.$t("form.label.username"),placeholder:t.$t("form.placeholder.username")},null,8,["modelValue","label","placeholder"]),l[20]||(l[20]=e()),a(u,{language:"html-vue"},{default:m(()=>l[19]||(l[19]=[e(`
          <template>
            <Input 
              v-model="username"
              :label="t('form.label.username')"
              :placeholder="t('form.placeholder.username')"
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),l[30]||(l[30]=e()),o("section",null,[o("h2",null,i(t.$t("form.label.inputWithValidation")),1),l[24]||(l[24]=e()),o("div",k,[a(n(g),null,{default:m(()=>[a(n(p),{modelValue:n(s).inputWithValidation,"onUpdate:modelValue":l[6]||(l[6]=r=>n(s).inputWithValidation=r),label:t.$t("form.label.title"),placeholder:t.$t("form.placeholder.title"),schema:n(b),name:"title",type:"text"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),l[23]||(l[23]=e()),a(u,{language:"html-vue"},{default:m(()=>l[22]||(l[22]=[e(`
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
          import { Form, Input } from "@dzangolab/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .min(3, { message: "Title must be at least 3 character(s)" });        
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{A as default};

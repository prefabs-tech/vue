import{E as i,$ as g}from"./DzangolabVue3Form.es-e2a8b7db.js";import{d as v,a7 as I,p as V,j as d,K as c,o as $,c as w,w as m,L as a,C as e,M as u,f as t,E as l}from"./index-8e1c3ab6-475a9ed5.js";import{m as y}from"./index-5df4c38c.js";import{_ as z}from"./FormPage.vue_vue_type_style_index_0_lang-ca62b900.js";const _={class:"section-content"},E={class:"section-content"},U={class:"section-content"},k={class:"section-content"},S={class:"section-content"},T={class:"section-content"},W={name:"InputField"},P=v({...W,setup(C){const{t:f}=I(),b=y.string().min(3,{message:f("form.errors.input.min",{length:3})});let o=V({disabled:d("monorepo@gmail.com"),input:d(),inputWithValidation:d(),noLabelInput:d(),passwordInput:d()});return(n,s)=>{const h=c("router-link"),p=c("SshPre");return $(),w(z,{title:n.$t("form.label.input"),class:"demo"},{toolbar:m(()=>[a(h,{to:{name:"form"},class:"back"},{default:m(()=>[e(u(n.$t("common.back")),1)]),_:1})]),default:m(()=>[e(),t("section",null,[t("h2",null,u(n.$t("form.label.basicInput")),1),e(),t("div",_,[a(l(i),{modelValue:l(o).noLabelInput,"onUpdate:modelValue":s[0]||(s[0]=r=>l(o).noLabelInput=r),placeholder:n.$t("form.placeholder.username"),type:"text"},null,8,["modelValue","placeholder"]),e(),a(p,{language:"html-vue"},{default:m(()=>[e(`
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
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,u(n.$t("form.label.labelInput")),1),e(),t("div",E,[a(l(i),{modelValue:l(o).input,"onUpdate:modelValue":s[1]||(s[1]=r=>l(o).input=r),label:n.$t("form.label.username"),placeholder:n.$t("form.placeholder.username")},null,8,["modelValue","label","placeholder"]),e(),a(p,{language:"html-vue"},{default:m(()=>[e(`
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
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,u(n.$t("form.label.inputWithType")),1),e(),t("div",U,[a(l(i),{modelValue:l(o).passwordInput,"onUpdate:modelValue":s[2]||(s[2]=r=>l(o).passwordInput=r),label:n.$t("form.label.password"),placeholder:n.$t("form.placeholder.password"),type:"password"},null,8,["modelValue","label","placeholder"]),e(),a(p,{language:"html-vue"},{default:m(()=>[e(`
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
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,u(n.$t("form.label.disabled")),1),e(),t("div",k,[a(l(i),{modelValue:l(o).disabled,"onUpdate:modelValue":s[3]||(s[3]=r=>l(o).disabled=r),label:n.$t("form.label.email"),type:"email",disabled:""},null,8,["modelValue","label"]),e(),a(p,{language:"html-vue"},{default:m(()=>[e(`
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
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,u(n.$t("form.label.withI18n")),1),e(),t("div",S,[a(l(i),{modelValue:l(o).input,"onUpdate:modelValue":s[4]||(s[4]=r=>l(o).input=r),label:n.$t("form.label.username"),placeholder:n.$t("form.placeholder.username")},null,8,["modelValue","label","placeholder"]),e(),a(p,{language:"html-vue"},{default:m(()=>[e(`
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
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,u(n.$t("form.label.inputWithValidation")),1),e(),t("div",T,[a(l(g),null,{default:m(()=>[a(l(i),{modelValue:l(o).inputWithValidation,"onUpdate:modelValue":s[5]||(s[5]=r=>l(o).inputWithValidation=r),label:n.$t("form.label.title"),placeholder:n.$t("form.placeholder.title"),schema:l(b),name:"title",type:"text"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e(),a(p,{language:"html-vue"},{default:m(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{P as default};

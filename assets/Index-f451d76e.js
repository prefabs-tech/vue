import{m as v,U as p,Q as d}from"./DzangolabVue3Form.es-4a062725.js";import{d as I,u as V,b as y,e as c,r as f,o as _,c as $,w as a,a as n,t as i,f as l,g as t,h as e}from"./index-469e9c4b.js";const F={class:"section-content"},w={class:"section-content"},z={class:"section-content"},U={class:"section-content"},S={class:"section-content"},E={class:"section-content"},P={class:"section-content"},T={name:"InputField"},C=I({...T,setup(W){const{t:b}=V(),h=v.string().min(3,{message:b("form.errors.input.min",{length:3})});let u=y({disabled:c("monorepo@gmail.com"),input:c(),inputWithValidation:c(),noLabelInput:c(),numberInput:c(),passwordInput:c()});return(o,s)=>{const m=f("SshPre"),g=f("Page");return _(),$(g,{title:o.$t("form.label.input"),class:"demo"},{default:a(()=>[n("section",null,[n("h2",null,i(o.$t("form.label.basicInput")),1),l(),n("div",F,[t(m,{language:"html-vue"},{default:a(()=>[l(`
          <Form>
            <Input 
              v-model="username"
              placeholder="Enter username"
              type="text"
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),l(),t(e(d),null,{default:a(()=>[t(e(p),{modelValue:e(u).noLabelInput,"onUpdate:modelValue":s[0]||(s[0]=r=>e(u).noLabelInput=r),placeholder:o.$t("form.placeholder.username"),type:"text"},null,8,["modelValue","placeholder"])]),_:1})])]),l(),n("section",null,[n("h2",null,i(o.$t("form.label.labelInput")),1),l(),n("div",w,[t(m,{language:"html-vue"},{default:a(()=>[l(`
          <Form>
            <Input 
              v-model="username"
              label="Username"
              placeholder="Enter username"
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          import { ref } from "vue";
  
          const username = ref(null as string);
          <\/script>
        `)]),_:1}),l(),t(e(d),null,{default:a(()=>[t(e(p),{modelValue:e(u).input,"onUpdate:modelValue":s[1]||(s[1]=r=>e(u).input=r),label:o.$t("form.label.username"),placeholder:o.$t("form.placeholder.username")},null,8,["modelValue","label","placeholder"])]),_:1})])]),l(),n("section",null,[n("h2",null,i(o.$t("form.label.inputWithType")),1),l(),n("div",z,[t(m,{language:"html-vue"},{default:a(()=>[l(`
          <Form>
            <Input 
              v-model="password"
              label="Password"
              placeholder="Enter password"
              type="password"
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),l(),t(e(d),null,{default:a(()=>[t(e(p),{modelValue:e(u).passwordInput,"onUpdate:modelValue":s[2]||(s[2]=r=>e(u).passwordInput=r),label:o.$t("form.label.password"),placeholder:o.$t("form.placeholder.password"),type:"password"},null,8,["modelValue","label","placeholder"])]),_:1})])]),l(),n("section",null,[n("h2",null,i(o.$t("form.label.disabled")),1),l(),n("div",U,[t(m,{language:"html-vue"},{default:a(()=>[l(`
          <Form>
            <Input 
              v-model="email"
              label="Email"
              type="email"
              disabled
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),l(),t(e(d),null,{default:a(()=>[t(e(p),{modelValue:e(u).disabled,"onUpdate:modelValue":s[3]||(s[3]=r=>e(u).disabled=r),label:o.$t("form.label.email"),type:"email",disabled:""},null,8,["modelValue","label"])]),_:1})])]),l(),n("section",null,[n("h2",null,i(o.$t("form.label.withI18n")),1),l(),n("div",S,[t(m,{language:"html-vue"},{default:a(()=>[l(`
          <Form>
            <Input 
              v-model="username"
              :label="t('form.label.username')"
              :placeholder="t('form.placeholder.username')"
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)]),_:1}),l(),t(e(d),null,{default:a(()=>[t(e(p),{modelValue:e(u).input,"onUpdate:modelValue":s[4]||(s[4]=r=>e(u).input=r),label:o.$t("form.label.username"),placeholder:o.$t("form.placeholder.username")},null,8,["modelValue","label","placeholder"])]),_:1})])]),l(),n("section",null,[n("h2",null,i(o.$t("form.label.inputWithValidation")),1),l(),n("div",E,[t(m,{language:"html-vue"},{default:a(()=>[l(`
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
        `)]),_:1}),l(),t(e(d),null,{default:a(()=>[t(e(p),{modelValue:e(u).inputWithValidation,"onUpdate:modelValue":s[5]||(s[5]=r=>e(u).inputWithValidation=r),label:o.$t("form.label.title"),placeholder:o.$t("form.placeholder.title"),schema:e(h),name:"title",type:"text"},null,8,["modelValue","label","placeholder","schema"])]),_:1})])]),l(),n("section",null,[n("h2",null,i(o.$t("form.label.customStyleInput")),1),l(),n("div",P,[t(m,{language:"html-vue"},{default:a(()=>[l(`
          <Form>
            <Input 
              v-model="number"
              class="custom-style-input"
              label="Number"
              placeholder="Enter a number"
              type="number"
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>

          <style>
          .custom-style-input {
            flex-direction: row;
            align-items: center;
          }

          .custom-style-input input {
            --_input-field-border-color: #007aff;
            --_input-field-border-radius: 1em;
            --_input-field-padding-h: 0.5em;
            --_input-field-padding-v: 0.5em;
          }

          .custom-style-input input:focus {
            box-shadow: 0 0 0 .25rem #004da08e;
          }
          </style>
        `)]),_:1}),l(),t(e(d),null,{default:a(()=>[t(e(p),{modelValue:e(u).numberInput,"onUpdate:modelValue":s[6]||(s[6]=r=>e(u).numberInput=r),label:o.$t("form.label.number"),placeholder:o.$t("form.placeholder.number"),class:"custom-style-input",type:"number"},null,8,["modelValue","label","placeholder"])]),_:1})])])]),_:1},8,["title"])}}});export{C as default};

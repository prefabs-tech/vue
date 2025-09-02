import{w as m,O as V}from"./PrefabsTechVue3Form.es-C-yK0R5w.js";import{d as I,I as $,L as y,M as w,r as f,J as D,e as S,o as h,j as i,C as t,f as o,h as p,t as d,u as l,v as U}from"./index-BOw3R0Gy.js";import{_ as z}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-CZeOzHdp.js";import{_ as T}from"./FormPage.vue_vue_type_style_index_0_lang-BS4c5tzC.js";import"./PrefabsTechVue3TanstackTable.es-BeR3tD26.js";const C={class:"section-content"},E={class:"section-content"},W={class:"section-content"},k={class:"section-content"},B={class:"section-content"},F={class:"section-content"},L={name:"InputField"},Z=I({...L,setup(P){const{t:a}=$(),b=[{description:a("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | null | undefined"}],v=y.string().min(3,{message:a("form.errors.input.min",{length:3})}),g=[{default:"false",description:a("form.documentation.propsDescription.input.disabled"),prop:"disabled",type:"Boolean"},{default:"-",description:a("form.documentation.propsDescription.input.label"),prop:"label",type:"String"},{default:"-",description:a("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"String | null | undefined"},{default:'"input"',description:a("form.documentation.propsDescription.input.name"),prop:"name",type:"String"},{default:"-",description:a("form.documentation.propsDescription.input.placeholder"),prop:"placeholder",type:"String"},{default:"-",description:a("form.documentation.propsDescription.input.schema"),prop:"schema",type:"z.ZodType<string | number | object>"},{default:'"text"',description:a("form.documentation.propsDescription.input.type"),prop:"type",type:"String"}];let r=w({disabled:f("monorepo@gmail.com"),input:f(),inputWithValidation:f(),noLabelInput:f(),passwordInput:f()});return(n,e)=>{const u=D("SshPre");return h(),S(T,{subtitle:l(a)("form.subtitle.input"),title:n.$t("form.label.input"),class:"demo"},{toolbar:i(()=>[p(l(U),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=s=>n.$router.push("/form"))},null,8,["label"])]),default:i(()=>[e[25]||(e[25]=t()),o("section",null,[o("h2",null,d(n.$t("form.label.basicInput")),1),e[9]||(e[9]=t()),o("div",C,[p(l(m),{modelValue:l(r).noLabelInput,"onUpdate:modelValue":e[1]||(e[1]=s=>l(r).noLabelInput=s),placeholder:n.$t("form.placeholder.username"),type:"text"},null,8,["modelValue","placeholder"]),e[8]||(e[8]=t()),p(u,{language:"html-vue"},{default:i(()=>e[7]||(e[7]=[t(`
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
        `)])),_:1})])]),e[26]||(e[26]=t()),o("section",null,[o("h2",null,d(n.$t("form.label.labelInput")),1),e[12]||(e[12]=t()),o("div",E,[p(l(m),{modelValue:l(r).input,"onUpdate:modelValue":e[2]||(e[2]=s=>l(r).input=s),label:n.$t("form.label.username"),placeholder:n.$t("form.placeholder.username")},null,8,["modelValue","label","placeholder"]),e[11]||(e[11]=t()),p(u,{language:"html-vue"},{default:i(()=>e[10]||(e[10]=[t(`
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
        `)])),_:1})])]),e[27]||(e[27]=t()),o("section",null,[o("h2",null,d(n.$t("form.label.inputWithType")),1),e[15]||(e[15]=t()),o("div",W,[p(l(m),{modelValue:l(r).passwordInput,"onUpdate:modelValue":e[3]||(e[3]=s=>l(r).passwordInput=s),label:n.$t("form.label.password"),placeholder:n.$t("form.placeholder.password"),type:"password"},null,8,["modelValue","label","placeholder"]),e[14]||(e[14]=t()),p(u,{language:"html-vue"},{default:i(()=>e[13]||(e[13]=[t(`
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
        `)])),_:1})])]),e[28]||(e[28]=t()),o("section",null,[o("h2",null,d(n.$t("form.label.disabled")),1),e[18]||(e[18]=t()),o("div",k,[p(l(m),{modelValue:l(r).disabled,"onUpdate:modelValue":e[4]||(e[4]=s=>l(r).disabled=s),label:n.$t("form.label.email"),type:"email",disabled:""},null,8,["modelValue","label"]),e[17]||(e[17]=t()),p(u,{language:"html-vue"},{default:i(()=>e[16]||(e[16]=[t(`
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
        `)])),_:1})])]),e[29]||(e[29]=t()),o("section",null,[o("h2",null,d(n.$t("form.label.withI18n")),1),e[21]||(e[21]=t()),o("div",B,[p(l(m),{modelValue:l(r).input,"onUpdate:modelValue":e[5]||(e[5]=s=>l(r).input=s),label:n.$t("form.label.username"),placeholder:n.$t("form.placeholder.username")},null,8,["modelValue","label","placeholder"]),e[20]||(e[20]=t()),p(u,{language:"html-vue"},{default:i(()=>e[19]||(e[19]=[t(`
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
        `)])),_:1})])]),e[30]||(e[30]=t()),o("section",null,[o("h2",null,d(n.$t("form.label.inputWithValidation")),1),e[24]||(e[24]=t()),o("div",F,[p(l(V),null,{default:i(()=>[p(l(m),{modelValue:l(r).inputWithValidation,"onUpdate:modelValue":e[6]||(e[6]=s=>l(r).inputWithValidation=s),label:n.$t("form.label.title"),placeholder:n.$t("form.placeholder.title"),schema:l(v),name:"title",type:"text"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e[23]||(e[23]=t()),p(u,{language:"html-vue"},{default:i(()=>e[22]||(e[22]=[t(`
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
        `)])),_:1})])]),e[31]||(e[31]=t()),p(z,{"events-data":b,"props-data":g,"props-table-title":n.$t("common.properties",{value:"InputProperties"})},null,8,["props-table-title"])]),_:1},8,["subtitle","title"])}}});export{Z as default};

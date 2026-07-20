import{D as e,E as t,On as n,St as r,_ as i,gn as a,k as o,mt as s,qt as c,tr as l,v as u,vn as d}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{p as f}from"./vee-validate-D3u_EqLN.js";import{E as p}from"./PrefabsTechVue3Layout.es-ByeEwOwS.js";import{t as m}from"./FormPage-qAqvgJ-r.js";import{i as h,x as g}from"./PrefabsTechVue3TanstackTable.es-CqNazKU2.js";import{t as _}from"./ComponentDocumentation-BPcopVAa.js";var v={class:`section-content`},y={class:`section-content`},b={class:`section-content`},x={class:`section-content`},S={class:`section-content`},C={class:`section-content`},w=o({name:`InputDemo`,setup(o){let{t:w}=p(),T=[{description:w(`form.documentation.eventDescription.input.modelValue`),name:`update:modelValue`,payload:`string | null | undefined`}],E=f().min(3,{message:w(`form.errors.input.min`,{length:3})}),D=[{default:`false`,description:w(`form.documentation.propsDescription.input.disabled`),prop:`disabled`,type:`Boolean`},{default:`-`,description:w(`form.documentation.propsDescription.input.label`),prop:`label`,type:`String`},{default:`-`,description:w(`form.documentation.propsDescription.input.modelValue`),prop:`modelValue`,type:`String | null | undefined`},{default:`"input"`,description:w(`form.documentation.propsDescription.input.name`),prop:`name`,type:`String`},{default:`-`,description:w(`form.documentation.propsDescription.input.placeholder`),prop:`placeholder`,type:`String`},{default:`-`,description:w(`form.documentation.propsDescription.input.schema`),prop:`schema`,type:`z.ZodType<string | number | object>`},{default:`"text"`,description:w(`form.documentation.propsDescription.input.type`),prop:`type`,type:`String`}],O=a({disabled:d(`monorepo@gmail.com`),input:d(),inputWithValidation:d(),noLabelInput:d(),passwordInput:d()});return(a,o)=>{let d=r(`SshPre`);return s(),u(m,{subtitle:n(w)(`form.subtitle.input`),title:a.$t(`form.label.input`),class:`demo`},{default:c(()=>[i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.basicInput`)),1),o[8]||=t(),i(`div`,v,[e(n(g),{modelValue:n(O).noLabelInput,"onUpdate:modelValue":o[0]||=e=>n(O).noLabelInput=e,placeholder:a.$t(`form.placeholder.username`),name:`basic`,type:`text`},null,8,[`modelValue`,`placeholder`]),o[7]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[6]||=[t(`
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
        `,-1)]]),_:1})])]),o[24]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.labelInput`)),1),o[11]||=t(),i(`div`,y,[e(n(g),{modelValue:n(O).input,"onUpdate:modelValue":o[1]||=e=>n(O).input=e,label:a.$t(`form.label.username`),placeholder:a.$t(`form.placeholder.username`),name:`labeled`},null,8,[`modelValue`,`label`,`placeholder`]),o[10]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[9]||=[t(`
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
        `,-1)]]),_:1})])]),o[25]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.inputWithType`)),1),o[14]||=t(),i(`div`,b,[e(n(g),{modelValue:n(O).passwordInput,"onUpdate:modelValue":o[2]||=e=>n(O).passwordInput=e,label:a.$t(`form.label.password`),placeholder:a.$t(`form.placeholder.password`),name:`password`,type:`password`},null,8,[`modelValue`,`label`,`placeholder`]),o[13]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[12]||=[t(`
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
        `,-1)]]),_:1})])]),o[26]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.disabled`)),1),o[17]||=t(),i(`div`,x,[e(n(g),{modelValue:n(O).disabled,"onUpdate:modelValue":o[3]||=e=>n(O).disabled=e,label:a.$t(`form.label.email`),disabled:``,name:`disabled`,type:`email`},null,8,[`modelValue`,`label`]),o[16]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[15]||=[t(`
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
        `,-1)]]),_:1})])]),o[27]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.withI18n`)),1),o[20]||=t(),i(`div`,S,[e(n(g),{modelValue:n(O).input,"onUpdate:modelValue":o[4]||=e=>n(O).input=e,label:a.$t(`form.label.username`),placeholder:a.$t(`form.placeholder.username`)},null,8,[`modelValue`,`label`,`placeholder`]),o[19]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[18]||=[t(`
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
        `,-1)]]),_:1})])]),o[28]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.inputWithValidation`)),1),o[23]||=t(),i(`div`,C,[e(n(h),null,{default:c(()=>[e(n(g),{modelValue:n(O).inputWithValidation,"onUpdate:modelValue":o[5]||=e=>n(O).inputWithValidation=e,label:a.$t(`form.label.title`),placeholder:a.$t(`form.placeholder.title`),schema:n(E),name:`title`,type:`text`},null,8,[`modelValue`,`label`,`placeholder`,`schema`])]),_:1}),o[22]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[21]||=[t(`
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
        `,-1)]]),_:1})])]),o[29]||=t(),e(_,{"events-data":T,"props-data":D,"props-table-title":a.$t(`common.properties`,{value:`InputProperties`})},null,8,[`props-table-title`])]),_:1},8,[`subtitle`,`title`])}}});export{w as default};
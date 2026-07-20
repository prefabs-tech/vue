import{D as e,E as t,On as n,St as r,_ as i,gn as a,k as o,mt as s,qt as c,tr as l,v as u,vn as d}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{p as f}from"./vee-validate-D3u_EqLN.js";import{E as p}from"./PrefabsTechVue3Layout.es-ByeEwOwS.js";import{t as m}from"./FormPage-qAqvgJ-r.js";import{i as h,y as g}from"./PrefabsTechVue3TanstackTable.es-CqNazKU2.js";import{t as _}from"./ComponentDocumentation-BPcopVAa.js";var v={class:`section-content`},y={class:`section-content`},b={class:`section-content`},x={class:`section-content`},S={class:`section-content`},C={class:`section-content`},w={class:`section-content`},T={class:`section-content`},E=o({name:`EmailInputDemo`,setup(o){let{t:E}=p(),D=[{description:E(`form.documentation.eventDescription.input.modelValue`),name:`update:modelValue`,payload:`string | null | undefined`}],O=f().email({message:E(`form.errors.email.invalid`)}),k=[{default:`false`,description:E(`form.documentation.propsDescription.input.disabled`),prop:`disabled`,type:`Boolean`},{default:`{ required: "Email address is required", invalid: "Please provide a valid email address" }`,description:E(`form.documentation.propsDescription.input.errorMessages`),prop:`errorMessages`,type:`EmailErrorMessages`},{default:`-`,description:E(`form.documentation.propsDescription.input.label`),prop:`label`,type:`String`},{default:`-`,description:E(`form.documentation.propsDescription.input.modelValue`),prop:`modelValue`,type:`String | null | undefined`},{default:`"email"`,description:E(`form.documentation.propsDescription.input.name`),prop:`name`,type:`String`},{default:`-`,description:E(`form.documentation.propsDescription.input.options`),prop:`options`,type:`IsEmailOptions`},{default:`-`,description:E(`form.documentation.propsDescription.input.placeholder`),prop:`placeholder`,type:`String`},{default:`-`,description:E(`form.documentation.propsDescription.input.schema`),prop:`schema`,type:`z.ZodType<string | number | object>`}],A={invalid:E(`form.errors.email.invalid`,{list:`(dzangolab.com, dzango.com, gmail.com)`}),required:E(`form.errors.input.required`)},j={allow_display_name:!1,allow_utf8_local_part:!0,host_whitelist:[`dzangolab.com`,`dzango.com`,`gmail.com`],require_display_name:!1},M=a({customValidationInput:d(),disabled:d(`monorepo@prefabs.tech.com`),i18nInput:d(),input:d(),inputWithValidation:d(),noLabelInput:d(),textInput:d(),validationOptionInput:d()});return(a,o)=>{let d=r(`SshPre`);return s(),u(m,{subtitle:n(E)(`form.subtitle.email`),title:a.$t(`form.label.email`),class:`demo`},{default:c(()=>[i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.basicInput`)),1),o[10]||=t(),i(`div`,v,[e(n(g),{modelValue:n(M).noLabelInput,"onUpdate:modelValue":o[0]||=e=>n(M).noLabelInput=e,placeholder:a.$t(`form.placeholder.email`)},null,8,[`modelValue`,`placeholder`]),o[9]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[8]||=[t(`
          <template>
            <Email 
              v-model="input"
              placeholder="Enter a email"
            />
          </template>
  
          <script setup lang="ts">
          import { Email } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)]]),_:1})])]),o[33]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.labelInput`)),1),o[13]||=t(),i(`div`,y,[e(n(g),{modelValue:n(M).input,"onUpdate:modelValue":o[1]||=e=>n(M).input=e,label:a.$t(`form.label.email`),placeholder:a.$t(`form.placeholder.email`),name:`label-input`},null,8,[`modelValue`,`label`,`placeholder`]),o[12]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[11]||=[t(`
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
        `,-1)]]),_:1})])]),o[34]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.disabled`)),1),o[16]||=t(),i(`div`,b,[e(n(g),{modelValue:n(M).disabled,"onUpdate:modelValue":o[2]||=e=>n(M).disabled=e,label:a.$t(`form.label.email`),disabled:``,name:`disabled-input`},null,8,[`modelValue`,`label`]),o[15]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[14]||=[t(`
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
        `,-1)]]),_:1})])]),o[35]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.withI18n`)),1),o[19]||=t(),i(`div`,x,[e(n(g),{modelValue:n(M).i18nInput,"onUpdate:modelValue":o[3]||=e=>n(M).i18nInput=e,label:n(E)(`form.label.email`),placeholder:n(E)(`form.placeholder.email`),name:`i18n-input`},null,8,[`modelValue`,`label`,`placeholder`]),o[18]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[17]||=[t(`
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
        `,-1)]]),_:1})])]),o[36]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.inputWithValidation`)),1),o[22]||=t(),i(`div`,S,[e(n(h),null,{default:c(()=>[e(n(g),{modelValue:n(M).inputWithValidation,"onUpdate:modelValue":o[4]||=e=>n(M).inputWithValidation=e,label:a.$t(`form.label.email`),placeholder:a.$t(`form.placeholder.email`),name:`validation-input`},null,8,[`modelValue`,`label`,`placeholder`])]),_:1}),o[21]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[20]||=[t(`
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
        `,-1)]]),_:1})])]),o[37]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.inputWithValidationOptions`)),1),o[25]||=t(),i(`div`,C,[e(n(h),null,{default:c(()=>[e(n(g),{modelValue:n(M).validationOptionInput,"onUpdate:modelValue":o[5]||=e=>n(M).validationOptionInput=e,label:a.$t(`form.label.email`),options:j,placeholder:a.$t(`form.placeholder.email`),name:`validation-email`},null,8,[`modelValue`,`label`,`placeholder`])]),_:1}),o[24]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[23]||=[t(`
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
        `,-1)]]),_:1})])]),o[38]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.customErrorMessageInput`)),1),o[28]||=t(),i(`div`,w,[e(n(h),null,{default:c(()=>[e(n(g),{modelValue:n(M).textInput,"onUpdate:modelValue":o[6]||=e=>n(M).textInput=e,label:a.$t(`form.label.email`),"error-messages":A,options:j,placeholder:a.$t(`form.placeholder.email`),name:`message-input`},null,8,[`modelValue`,`label`,`placeholder`])]),_:1}),o[27]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[26]||=[t(`
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
        `,-1)]]),_:1})])]),o[39]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.customValidationInput`)),1),o[31]||=t(),i(`div`,T,[e(n(h),null,{default:c(()=>[e(n(g),{modelValue:n(M).customValidationInput,"onUpdate:modelValue":o[7]||=e=>n(M).customValidationInput=e,label:a.$t(`form.label.email`),placeholder:a.$t(`form.placeholder.email`),schema:n(O),name:`custom-input`},null,8,[`modelValue`,`label`,`placeholder`,`schema`])]),_:1}),o[30]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[29]||=[t(`
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
        `,-1)]]),_:1})])]),o[40]||=t(),e(_,{"events-data":D,"props-data":k,"props-table-title":a.$t(`common.properties`,{value:`EmailProperties`})},null,8,[`props-table-title`]),o[41]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[32]||=[t(`
      interface EmailErrorMessages {
        invalid?: string;
        required?: string;
      }
    `,-1)]]),_:1})]),_:1},8,[`subtitle`,`title`])}}});export{E as default};
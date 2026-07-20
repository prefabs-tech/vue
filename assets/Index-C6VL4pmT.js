import{D as e,E as t,On as n,St as r,Zn as i,_ as a,gn as o,k as s,mt as c,qt as l,tr as u,v as d,vn as f}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{p}from"./vee-validate-D3u_EqLN.js";import{E as m}from"./PrefabsTechVue3Layout.es-ByeEwOwS.js";import{t as h}from"./FormPage-qAqvgJ-r.js";import{i as g,s as _}from"./PrefabsTechVue3TanstackTable.es-CqNazKU2.js";import{t as v}from"./ComponentDocumentation-BPcopVAa.js";var y={class:`section-content`},b={class:`section-content`},x={class:`section-content`},S={class:`section-content`},C={class:`section-content`},w={class:`section-content`},T={class:`section-content`},E={class:`section-content`},D=s({name:`PasswordInputDemo`,setup(s){let{t:D}=m(),O=[{description:D(`form.documentation.eventDescription.input.modelValue`),name:`update:modelValue`,payload:`string | null | undefined`}],k=p({invalid_type_error:D(`form.errors.password.invalid`),required_error:D(`form.errors.input.required`)}).min(8,{message:D(`form.errors.password.min`,{length:8})}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,D(`form.errors.password.invalid`)),A=[{default:`false`,description:D(`form.documentation.propsDescription.input.disabled`),prop:`disabled`,type:`Boolean`},{default:`{ required: "A password is required", weak: "This password is too weak" }`,description:D(`form.documentation.propsDescription.input.errorMessages`),prop:`errorMessages`,type:`PasswordErrorMessages`},{default:`null`,description:D(`form.documentation.propsDescription.input.label`),prop:`label`,type:`string | null | undefined`},{default:`null`,description:D(`form.documentation.propsDescription.input.modelValue`),prop:`modelValue`,type:`string | null | undefined`},{default:`"password"`,description:D(`form.documentation.propsDescription.input.name`),prop:`name`,type:`String`},{default:`-`,description:D(`form.documentation.propsDescription.input.options`),prop:`options`,type:`StrongPasswordOptions`},{default:`-`,description:D(`form.documentation.propsDescription.input.placeholder`),prop:`placeholder`,type:`String`},{default:`-`,description:D(`form.documentation.propsDescription.input.schema`),prop:`schema`,type:`z.ZodType<string | number | object>`}],j=[{description:D(`form.documentation.slotDescription.password.icon`),name:`icon`,props:`{ showPassword: boolean }`}],M={required:D(`form.errors.input.required`),weak:D(`form.errors.password.invalid`)},N={minLength:10,minLowercase:1,minSymbols:1,minUppercase:1},P=o({customValidationInput:f(),disabled:f(`P@ssw0rd`),input:f(),inputWithValidation:f(),noLabelInput:f(),passwordInput:f()});return(o,s)=>{let f=r(`SshPre`);return c(),d(h,{subtitle:n(D)(`form.subtitle.password`),title:o.$t(`form.label.password`),class:`demo`},{default:l(()=>[a(`section`,null,[a(`h2`,null,u(o.$t(`form.label.basicInput`)),1),s[10]||=t(),a(`div`,y,[e(n(_),{modelValue:n(P).noLabelInput,"onUpdate:modelValue":s[0]||=e=>n(P).noLabelInput=e,placeholder:o.$t(`form.placeholder.password`),name:`basic`},null,8,[`modelValue`,`placeholder`]),s[9]||=t(),e(f,{language:`html-vue`},{default:l(()=>[...s[8]||=[t(`
          <template>
            <Password 
              v-model="input"
              placeholder="Enter a password"
            />
          </template>

          <script setup lang="ts">
          import { Password } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)]]),_:1})])]),s[33]||=t(),a(`section`,null,[a(`h2`,null,u(o.$t(`form.label.labelInput`)),1),s[13]||=t(),a(`div`,b,[e(n(_),{modelValue:n(P).input,"onUpdate:modelValue":s[1]||=e=>n(P).input=e,label:o.$t(`form.label.password`),placeholder:o.$t(`form.placeholder.password`),name:`labeled`},null,8,[`modelValue`,`label`,`placeholder`]),s[12]||=t(),e(f,{language:`html-vue`},{default:l(()=>[...s[11]||=[t(`
          <template>
            <Password 
              v-model="input"
              label="Password"
              placeholder="Enter a password"
            />
          </template>

          <script setup lang="ts">
          import { Password } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)]]),_:1})])]),s[34]||=t(),a(`section`,null,[a(`h2`,null,u(o.$t(`form.label.disabled`)),1),s[16]||=t(),a(`div`,x,[e(n(_),{modelValue:n(P).disabled,"onUpdate:modelValue":s[2]||=e=>n(P).disabled=e,label:o.$t(`form.label.password`),disabled:``,name:`disabled`},null,8,[`modelValue`,`label`]),s[15]||=t(),e(f,{language:`html-vue`},{default:l(()=>[...s[14]||=[t(`
          <template>
            <Password 
              v-model="input"
              label="Password"
              disabled
            />
          </template>

          <script setup lang="ts">
          import { Password } from "@prefabs.tech/vue3-form";
          import { ref } from vue;
  
          const input = ref("P@ssw0rd");
          <\/script>
        `,-1)]]),_:1})])]),s[35]||=t(),a(`section`,null,[a(`h2`,null,u(o.$t(`form.label.withI18n`)),1),s[19]||=t(),a(`div`,S,[e(n(_),{modelValue:n(P).input,"onUpdate:modelValue":s[3]||=e=>n(P).input=e,label:o.$t(`form.label.password`),placeholder:o.$t(`form.placeholder.password`),name:`i18n`},null,8,[`modelValue`,`label`,`placeholder`]),s[18]||=t(),e(f,{language:`html-vue`},{default:l(()=>[...s[17]||=[t(`
          <template>
            <Password 
              v-model="input"
              :label="t('form.label.password')"
              :placeholder="t('form.placeholder.password')"
            />
          </template>

          <script setup lang="ts">
          import { Password } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `,-1)]]),_:1})])]),s[36]||=t(),a(`section`,null,[a(`h2`,null,u(o.$t(`form.label.iconSlot`)),1),s[22]||=t(),a(`div`,C,[e(n(_),{modelValue:n(P).input,"onUpdate:modelValue":s[4]||=e=>n(P).input=e,label:o.$t(`form.label.password`),placeholder:o.$t(`form.placeholder.password`),name:`icon-slot`},{icon:l(({showPassword:e})=>[a(`i`,{class:i(`pi ${e?`pi-eye`:`pi-eye-slash`}`)},null,2)]),_:1},8,[`modelValue`,`label`,`placeholder`]),s[21]||=t(),e(f,{language:`html-vue`},{default:l(()=>[...s[20]||=[t(`
          <template>
            <Password 
              v-model="input"
              :label="t('form.label.password')"
              :placeholder="t('form.placeholder.password')"
            >
              <template #icon="{ showPassword }">
                <i :class="\`pi \${ showPassword ? 'pi-eye' : 'pi-eye-slash'}\`" />
              </template>
            <Password>
          </template>

          <script setup lang="ts">
          import { Password } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `,-1)]]),_:1})])]),s[37]||=t(),a(`section`,null,[a(`h2`,null,u(o.$t(`form.label.inputWithValidation`)),1),s[25]||=t(),a(`div`,w,[e(n(g),null,{default:l(()=>[e(n(_),{modelValue:n(P).inputWithValidation,"onUpdate:modelValue":s[5]||=e=>n(P).inputWithValidation=e,label:o.$t(`form.label.password`),options:N,placeholder:o.$t(`form.placeholder.password`),name:`validation`},null,8,[`modelValue`,`label`,`placeholder`])]),_:1}),s[24]||=t(),e(f,{language:`html-vue`},{default:l(()=>[...s[23]||=[t(`
          <Form>
            <Password 
              v-model="input"
              :options="validationOptions"
              label="Password"
              placeholder="Enter a password"
            />
          </Form>

          <script setup lang="ts">
          import { Form, Password } from "@prefabs.tech/vue3-form";
          
          import type { StrongPasswordOptions } from "@prefabs.tech/vue3-form";

          const validationOptions = {
            minLength: 10,
            minLowercase: 1,
            minUppercase: 1,
            minSymbols: 1,
          } as StrongPasswordOptions;
          <\/script>
        `,-1)]]),_:1})])]),s[38]||=t(),a(`section`,null,[a(`h2`,null,u(o.$t(`form.label.customErrorMessageInput`)),1),s[28]||=t(),a(`div`,T,[e(n(g),null,{default:l(()=>[e(n(_),{modelValue:n(P).passwordInput,"onUpdate:modelValue":s[6]||=e=>n(P).passwordInput=e,label:o.$t(`form.label.password`),"error-messages":M,options:N,placeholder:o.$t(`form.placeholder.password`),name:`custom-error`},null,8,[`modelValue`,`label`,`placeholder`])]),_:1}),s[27]||=t(),e(f,{language:`html-vue`},{default:l(()=>[...s[26]||=[t(`
          <Form>
            <Password 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Password"
              placeholder="Enter a password"
            />
          </Form>

          <script setup lang="ts">
          import { Form, Password } from "@prefabs.tech/vue3-form";
          import type { PasswordErrorMessages, StrongPasswordOptions } from "@prefabs.tech/vue3-form";

          const validationMessages = {
            required: "The field should not be empty",
            weak: "Please provide a strong password",
          } as PasswordErrorMessages;

          const validationOptions = {
            minLength: 10,
            minLowercase: 1,
            minUppercase: 1,
            minSymbols: 1,
          } as StrongPasswordOptions;
          <\/script>
        `,-1)]]),_:1})])]),s[39]||=t(),a(`section`,null,[a(`h2`,null,u(o.$t(`form.label.customValidationInput`)),1),s[31]||=t(),a(`div`,E,[e(n(g),null,{default:l(()=>[e(n(_),{modelValue:n(P).customValidationInput,"onUpdate:modelValue":s[7]||=e=>n(P).customValidationInput=e,label:o.$t(`form.label.password`),placeholder:o.$t(`form.placeholder.password`),schema:n(k),name:`custom-input`},null,8,[`modelValue`,`label`,`placeholder`,`schema`])]),_:1}),s[30]||=t(),e(f,{language:`html-vue`},{default:l(()=>[...s[29]||=[t(`
          <Form>
            <Password 
              v-model="input"
              :schema="inputSchema"
              label="Password"
              placeholder="Enter a password"
              name="input"
            />
          </Form>
  
          <script setup lang="ts">
          import { Form, Password } from "@prefabs.tech/vue3-form";
          import { z } from "zod";
  
          const inputSchema = z
            .string({
              invalid_type_error: "Please provide a strong password",
              required_error: "The field is required"
            })
            .min(8, { message: "Input must be at least 8 character(s)" })
            .regex(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).+$/,
              "Please provide a strong password"
            );
          <\/script>
        `,-1)]]),_:1})])]),s[40]||=t(),e(v,{"events-data":O,"props-data":A,"props-table-title":o.$t(`common.properties`,{value:`PasswordProperties`}),"slots-data":j},null,8,[`props-table-title`]),s[41]||=t(),e(f,{language:`html-vue`},{default:l(()=>[...s[32]||=[t(`
      interface PasswordErrorMessages {
        required?: string;
        weak?: string;
      }
    `,-1)]]),_:1})]),_:1},8,[`subtitle`,`title`])}}});export{D as default};
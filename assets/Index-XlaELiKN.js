import{D as e,E as t,On as n,St as r,_ as i,gn as a,k as o,mt as s,qt as c,tr as l,v as u,vn as d}from"./runtime-core.esm-bundler-BKdLzFmX.js";import{u as f}from"./vee-validate-Dcr5wvVn.js";import{T as p}from"./PrefabsTechVue3Layout.es-DjWCbXPc.js";import{t as m}from"./FormPage-Ca1LZeR4.js";import{c as h,y as g}from"./PrefabsTechVue3TanstackTable.es-Dqv6JrPc.js";import{t as _}from"./ComponentDocumentation-CFBF3GmY.js";var v={class:`section-content`},y={class:`section-content`},b={class:`section-content`},x={class:`section-content`},S={class:`section-content`},C={class:`section-content`},w={class:`section-content`},T=o({name:`NumberInputDemo`,setup(o){let{t:T}=p(),E=[{description:T(`form.documentation.eventDescription.input.modelValue`),name:`update:modelValue`,payload:`number | undefined`}],D=f.number({invalid_type_error:T(`form.errors.number.invalid`)}).gte(1,T(`form.errors.number.invalid`)).lte(100,T(`form.errors.number.invalid`)),O=[{default:`false`,description:T(`form.documentation.propsDescription.input.disabled`),prop:`disabled`,type:`Boolean`},{default:`{ required: "The field is required", invalid: "Please provide a valid integer field" }`,description:T(`form.documentation.propsDescription.input.errorMessages`),prop:`errorMessages`,type:`NumberErrorMessages`},{default:`-`,description:T(`form.documentation.propsDescription.input.label`),prop:`label`,type:`String`},{default:`undefined`,description:T(`form.documentation.propsDescription.input.modelValue`),prop:`modelValue`,type:`number | null | undefined`},{default:`"number"`,description:T(`form.documentation.propsDescription.input.name`),prop:`name`,type:`String`},{default:`-`,description:T(`form.documentation.propsDescription.input.options`),prop:`options`,type:`IsIntOptions`},{default:`-`,description:T(`form.documentation.propsDescription.input.placeholder`),prop:`placeholder`,type:`String`},{default:`-`,description:T(`form.documentation.propsDescription.input.schema`),prop:`schema`,type:`z.ZodType<string | number>`}],k={invalid:T(`form.errors.number.invalid`),required:T(`form.errors.number.required`)},A={allow_leading_zeroes:!1,max:100,min:1},j=a({customValidationInput:d(),disabled:d(100),i18nInput:d(),input:d(),inputWithValidation:d(),noLabelInput:d(),textInput:d()});return(a,o)=>{let d=r(`SshPre`);return s(),u(m,{subtitle:n(T)(`form.subtitle.number`),title:a.$t(`form.label.number`),class:`demo`},{default:c(()=>[i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.basicInput`)),1),o[9]||=t(),i(`div`,v,[e(n(g),{modelValue:n(j).noLabelInput,"onUpdate:modelValue":o[0]||=e=>n(j).noLabelInput=e,placeholder:a.$t(`form.placeholder.number`)},null,8,[`modelValue`,`placeholder`]),o[8]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[7]||=[t(`
          <template>
            <NumberInput 
              v-model="input"
              placeholder="Enter a number"
            />
          </template>

          <script setup lang="ts">
          import { NumberInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)]]),_:1})])]),o[29]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.labelInput`)),1),o[12]||=t(),i(`div`,y,[e(n(g),{modelValue:n(j).input,"onUpdate:modelValue":o[1]||=e=>n(j).input=e,label:a.$t(`form.label.number`),placeholder:a.$t(`form.placeholder.number`),name:`label-input`},null,8,[`modelValue`,`label`,`placeholder`]),o[11]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[10]||=[t(`
          <template>
            <NumberInput 
              v-model="input"
              label="Number"
              name="number"
              placeholder="Enter a number"
            />
          </template>

          <script setup lang="ts">
          import { NumberInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)]]),_:1})])]),o[30]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.disabled`)),1),o[15]||=t(),i(`div`,b,[e(n(g),{modelValue:n(j).disabled,"onUpdate:modelValue":o[2]||=e=>n(j).disabled=e,label:a.$t(`form.label.number`),disabled:``,name:`disabled-input`},null,8,[`modelValue`,`label`]),o[14]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[13]||=[t(`
          <template>
            <NumberInput 
              v-model="input"
              disabled
              label="Number"
              name="number"
            />
          </template>

          <script setup lang="ts">
          import { NumberInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)]]),_:1})])]),o[31]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.withI18n`)),1),o[18]||=t(),i(`div`,x,[e(n(g),{modelValue:n(j).i18nInput,"onUpdate:modelValue":o[3]||=e=>n(j).i18nInput=e,label:a.$t(`form.label.number`),placeholder:a.$t(`form.placeholder.number`),name:`i18n-input`},null,8,[`modelValue`,`label`,`placeholder`]),o[17]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[16]||=[t(`
          <template>
            <NumberInput 
              v-model="input"
              :label="t('form.label.number')"
              :placeholder="t('form.placeholder.number')"
              name="number"
            />
          </template>

          <script setup lang="ts">
          import { NumberInput } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `,-1)]]),_:1})])]),o[32]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.inputWithValidation`)),1),o[21]||=t(),i(`div`,S,[e(n(h),null,{default:c(()=>[e(n(g),{modelValue:n(j).inputWithValidation,"onUpdate:modelValue":o[4]||=e=>n(j).inputWithValidation=e,label:a.$t(`form.label.number`),options:A,placeholder:a.$t(`form.placeholder.number`),name:`validation-input`},null,8,[`modelValue`,`label`,`placeholder`])]),_:1}),o[20]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[19]||=[t(`
          <Form>
            <NumberInput 
              v-model="input"
              :options="validationOptions"
              label="Number"
              name="number"
              placeholder="Enter a number"
            />
          </Form>

          <script setup lang="ts">
          import { Form, NumberInput } from "@prefabs.tech/vue3-form";
          
          import type { IsIntOptions } from "@prefabs.tech/vue3-form";
  
          const validationOptions = {
            min: 1,
            max: 100,
            allow_leading_zeroes: false,
          } as IsIntOptions;
          <\/script>
        `,-1)]]),_:1})])]),o[33]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.customErrorMessageInput`)),1),o[24]||=t(),i(`div`,C,[e(n(h),null,{default:c(()=>[e(n(g),{modelValue:n(j).textInput,"onUpdate:modelValue":o[5]||=e=>n(j).textInput=e,label:a.$t(`form.label.number`),"error-messages":k,options:A,placeholder:a.$t(`form.placeholder.number`),name:`message-input`},null,8,[`modelValue`,`label`,`placeholder`])]),_:1}),o[23]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[22]||=[t(`
          <Form>
            <NumberInput 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Number"
              name="number"
              placeholder="Enter a number"
            />
          </Form>

          <script setup lang="ts">
          import { Form, NumberInput } from "@prefabs.tech/vue3-form";

          import type { NumberErrorMessages, IsIntOptions } from "@prefabs.tech/vue3-form";

          const validationMessages = {
            invalid: "Please provide a number between 1 to 100",
            required: "The field is required",
          } as NumberErrorMessages;

          const validationOptions = {
            min: 1,
            max: 100,
            allow_leading_zeroes: false,
          } as IsIntOptions;
          <\/script>
        `,-1)]]),_:1})])]),o[34]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.customValidationInput`)),1),o[27]||=t(),i(`div`,w,[e(n(h),null,{default:c(()=>[e(n(g),{modelValue:n(j).customValidationInput,"onUpdate:modelValue":o[6]||=e=>n(j).customValidationInput=e,label:a.$t(`form.label.number`),placeholder:a.$t(`form.placeholder.number`),schema:n(D),name:`custom-input`},null,8,[`modelValue`,`label`,`placeholder`,`schema`])]),_:1}),o[26]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[25]||=[t(`
          <Form>
            <NumberInput 
              v-model="input"
              :schema="inputSchema"
              label="Number"
              placeholder="Enter a number"
              name="number"
            />
          </Form>

          <script setup lang="ts">
          import { Form, NumberInput } from "@prefabs.tech/vue3-form";
          import { z } from "zod";

          const invalidNumberError = "Please provide a number between 1 to 100";

          const inputSchema =  z.coerce
            .number({invalid_type_error: invalidNumberError})
            .gte(1, invalidNumberError)
            .lte(100, invalidNumberError);
          <\/script>
        `,-1)]]),_:1})])]),o[35]||=t(),e(_,{"events-data":E,"props-data":O,"props-table-title":a.$t(`common.properties`,{value:`NumberInputProperties`})},null,8,[`props-table-title`]),o[36]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[28]||=[t(`
      interface NumberErrorMessages {
        invalid?: string;
        required?: string;
      }
    `,-1)]]),_:1})]),_:1},8,[`subtitle`,`title`])}}});export{T as default};
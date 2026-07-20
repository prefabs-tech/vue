import{D as e,E as t,On as n,St as r,_ as i,gn as a,k as o,mt as s,qt as c,tr as l,v as u,vn as d}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{p as f}from"./vee-validate-D3u_EqLN.js";import{E as p}from"./PrefabsTechVue3Layout.es-ByeEwOwS.js";import{t as m}from"./FormPage-qAqvgJ-r.js";import{i as h,p as g}from"./PrefabsTechVue3TanstackTable.es-CqNazKU2.js";import{t as _}from"./ComponentDocumentation-BPcopVAa.js";var v={class:`section-content`},y={class:`section-content`},b={class:`section-content`},x={class:`section-content`},S={class:`section-content`},C={class:`section-content`},w={class:`section-content`},T=o({name:`TextInputDemo`,setup(o){let{t:T}=p(),E=[{description:T(`form.documentation.eventDescription.input.modelValue`),name:`update:modelValue`,payload:`string | null | undefined`}],D=f().length(5,{message:T(`form.errors.input.length`,{length:5})}),O=[{default:`false`,description:T(`form.documentation.propsDescription.input.disabled`),prop:`disabled`,type:`Boolean`},{default:`{ invalid: "Please provide a valid input data", required: "The field is required", }`,description:T(`form.documentation.propsDescription.input.errorMessages`),prop:`errorMessages`,type:`TextErrorMessages`},{default:`-`,description:T(`form.documentation.propsDescription.input.label`),prop:`label`,type:`String`},{default:`-`,description:T(`form.documentation.propsDescription.input.modelValue`),prop:`modelValue`,type:`String | null | undefined`},{default:`"text_input"`,description:T(`form.documentation.propsDescription.input.name`),prop:`name`,type:`String`},{default:`-`,description:T(`form.documentation.propsDescription.input.options`),prop:`options`,type:`Object`},{default:`-`,description:T(`form.documentation.propsDescription.input.placeholder`),prop:`placeholder`,type:`String`},{default:`-`,description:T(`form.documentation.propsDescription.input.schema`),prop:`schema`,type:`z.ZodType<string | number | object>`}],k={required:T(`form.errors.input.required`)},A={ignore_whitespace:!0,required:!0},j=a({customValidationInput:d(),disabled:d(`dzangolab`),input:d(),inputWithValidation:d(),noLabelInput:d(),textInput:d()});return(a,o)=>{let d=r(`SshPre`);return s(),u(m,{subtitle:n(T)(`form.subtitle.text`),title:a.$t(`form.label.textInput`),class:`demo`},{default:c(()=>[i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.basicInput`)),1),o[9]||=t(),i(`div`,v,[e(n(g),{modelValue:n(j).noLabelInput,"onUpdate:modelValue":o[0]||=e=>n(j).noLabelInput=e,placeholder:a.$t(`form.placeholder.input`)},null,8,[`modelValue`,`placeholder`]),o[8]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[7]||=[t(`
          <template>
            <TextInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { TextInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)]]),_:1})])]),o[29]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.labelInput`)),1),o[12]||=t(),i(`div`,y,[e(n(g),{modelValue:n(j).input,"onUpdate:modelValue":o[1]||=e=>n(j).input=e,label:a.$t(`form.label.textInput`),placeholder:a.$t(`form.placeholder.textInput`),name:`label-input`},null,8,[`modelValue`,`label`,`placeholder`]),o[11]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[10]||=[t(`
          <template>
            <TextInput 
              v-model="input"
              label="Input"
              name="text"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { TextInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)]]),_:1})])]),o[30]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.disabled`)),1),o[15]||=t(),i(`div`,b,[e(n(g),{modelValue:n(j).disabled,"onUpdate:modelValue":o[2]||=e=>n(j).disabled=e,label:a.$t(`form.label.disabled`),disabled:``,name:`disabled-input`},null,8,[`modelValue`,`label`]),o[14]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[13]||=[t(`
          <template>
            <TextInput 
              v-model="input"
              disabled
              label="Disabled"
              name="text"
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)]]),_:1})])]),o[31]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.withI18n`)),1),o[18]||=t(),i(`div`,x,[e(n(g),{modelValue:n(j).input,"onUpdate:modelValue":o[3]||=e=>n(j).input=e,label:a.$t(`form.label.textInput`),placeholder:a.$t(`form.placeholder.textInput`),name:`i18n-input`},null,8,[`modelValue`,`label`,`placeholder`]),o[17]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[16]||=[t(`
          <template>
            <TextInput 
              v-model="input"
              :label="t('form.label.textInput')"
              :placeholder="t('form.placeholder.textInput')"
              name="text"
            />
          </template>

          <script setup lang="ts">
          import { TextInput } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `,-1)]]),_:1})])]),o[32]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.inputWithValidation`)),1),o[21]||=t(),i(`div`,S,[e(n(h),null,{default:c(()=>[e(n(g),{modelValue:n(j).inputWithValidation,"onUpdate:modelValue":o[4]||=e=>n(j).inputWithValidation=e,label:a.$t(`form.label.input`),options:A,placeholder:a.$t(`form.placeholder.input`),name:`validation-input`},null,8,[`modelValue`,`label`,`placeholder`])]),_:1}),o[20]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[19]||=[t(`
          <Form>
            <TextInput 
              v-model="input"
              :options="validationOptions"
              label="Input"
              name="text"
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
        `,-1)]]),_:1})])]),o[33]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.customErrorMessageInput`)),1),o[24]||=t(),i(`div`,C,[e(n(h),null,{default:c(()=>[e(n(g),{modelValue:n(j).textInput,"onUpdate:modelValue":o[5]||=e=>n(j).textInput=e,label:a.$t(`form.label.input`),"error-messages":k,options:A,placeholder:a.$t(`form.placeholder.input`),name:`custom-message-input`},null,8,[`modelValue`,`label`,`placeholder`])]),_:1}),o[23]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[22]||=[t(`
          <Form>
            <TextInput 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Input"
              name="text"
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
        `,-1)]]),_:1})])]),o[34]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.customValidationInput`)),1),o[27]||=t(),i(`div`,w,[e(n(h),null,{default:c(()=>[e(n(g),{modelValue:n(j).customValidationInput,"onUpdate:modelValue":o[6]||=e=>n(j).customValidationInput=e,label:a.$t(`form.label.input`),placeholder:a.$t(`form.placeholder.input`),schema:n(D),name:`custom-validation-input`},null,8,[`modelValue`,`label`,`placeholder`,`schema`])]),_:1}),o[26]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[25]||=[t(`
          <Form>
            <TextInput 
              v-model="input"
              :schema="inputSchema"
              label="Input"
              name="text"
              placeholder="Enter input"
            />
          </Form>

          <script setup lang="ts">
          import { Form, Input } from "@prefabs.tech/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .length(5, { message: "Input must be exactly 5 characters long") });
          <\/script>
        `,-1)]]),_:1})])]),o[35]||=t(),e(_,{"events-data":E,"props-data":O,"props-table-title":a.$t(`common.properties`,{value:`TextInputProperties`})},null,8,[`props-table-title`]),o[36]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[28]||=[t(`
      interface TextErrorMessages {
        invalid?: string;
        required?: string;
      }
    `,-1)]]),_:1})]),_:1},8,[`subtitle`,`title`])}}});export{T as default};
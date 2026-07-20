import{D as e,E as t,On as n,St as r,_ as i,gn as a,k as o,mt as s,qt as c,tr as l,v as u,vn as d}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{p as f}from"./vee-validate-D3u_EqLN.js";import{E as p}from"./PrefabsTechVue3Layout.es-ByeEwOwS.js";import{t as m}from"./FormPage-qAqvgJ-r.js";import{i as h,v as g}from"./PrefabsTechVue3TanstackTable.es-CqNazKU2.js";import{t as _}from"./ComponentDocumentation-BPcopVAa.js";var v={class:`section-content`},y={class:`section-content`},b={class:`section-content`},x={class:`section-content`},S={class:`section-content`},C={class:`section-content`},w={class:`section-content`},T={class:`section-content`},E=o({name:`TextareaInputDemo`,setup(o){let{t:E}=p(),D=[{description:E(`form.documentation.eventDescription.input.modelValue`),name:`update:modelValue`,payload:`string | number | string[] | undefined`}],O=f().min(15,{message:E(`form.errors.input.min`,{length:15})}),k=[{default:`-`,description:E(`form.documentation.propsDescription.textarea.cols`),prop:`cols`,type:`number | undefined`},{default:`false`,description:E(`form.documentation.propsDescription.input.disabled`),prop:`disabled`,type:`Boolean`},{default:`{ required: "The field is required", invalid: "Please provide a valid input data" }`,description:E(`form.documentation.propsDescription.input.errorMessages`),prop:`errorMessages`,type:`TextErrorMessages`},{default:`-`,description:E(`form.documentation.propsDescription.input.label`),prop:`label`,type:`String`},{default:`-`,description:E(`form.documentation.propsDescription.input.modelValue`),prop:`modelValue`,type:`string | number | string[] | undefined`},{default:`"text"`,description:E(`form.documentation.propsDescription.input.name`),prop:`name`,type:`String`},{default:`-`,description:E(`form.documentation.propsDescription.input.options`),prop:`options`,type:`IsTextOptions`},{default:`-`,description:E(`form.documentation.propsDescription.input.placeholder`),prop:`placeholder`,type:`String`},{default:`-`,description:E(`form.documentation.propsDescription.textarea.rows`),prop:`rows`,type:`number | undefined`},{default:`-`,description:E(`form.documentation.propsDescription.input.schema`),prop:`schema`,type:`z.ZodType<string | number>`}],A={required:E(`form.errors.input.required`)},j={ignore_whitespace:!0,required:!0},M=a({customRowsColsInput:d(),customValidationInput:d(),disabled:d(`Disabled textarea input`),i18nInput:d(),input:d(),inputWithValidation:d(),noLabelInput:d(),textInput:d()});return(a,o)=>{let d=r(`SshPre`);return s(),u(m,{subtitle:n(E)(`form.subtitle.textarea`),title:a.$t(`form.label.textarea`),class:`demo`},{default:c(()=>[i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.basicInput`)),1),o[10]||=t(),i(`div`,v,[e(n(g),{modelValue:n(M).noLabelInput,"onUpdate:modelValue":o[0]||=e=>n(M).noLabelInput=e,placeholder:a.$t(`form.placeholder.input`)},null,8,[`modelValue`,`placeholder`]),o[9]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[8]||=[t(`
          <template>
            <TextareaInput 
              v-model="input"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { TextareaInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)]]),_:1})])]),o[33]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.labelInput`)),1),o[13]||=t(),i(`div`,y,[e(n(g),{modelValue:n(M).input,"onUpdate:modelValue":o[1]||=e=>n(M).input=e,label:a.$t(`form.label.textarea`),placeholder:a.$t(`form.placeholder.textarea`),name:`label-input`},null,8,[`modelValue`,`label`,`placeholder`]),o[12]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[11]||=[t(`
          <template>
            <TextareaInput 
              v-model="input"
              label="Input"
              name="textarea"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { TextareaInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)]]),_:1})])]),o[34]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.disabled`)),1),o[16]||=t(),i(`div`,b,[e(n(g),{modelValue:n(M).disabled,"onUpdate:modelValue":o[2]||=e=>n(M).disabled=e,label:a.$t(`form.label.disabled`),disabled:``,name:`disabled-input`},null,8,[`modelValue`,`label`]),o[15]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[14]||=[t(`
          <template>
            <TextareaInput 
              v-model="input"
              disabled
              label="Disabled"
              name="textarea"
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)]]),_:1})])]),o[35]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.withI18n`)),1),o[19]||=t(),i(`div`,x,[e(n(g),{modelValue:n(M).i18nInput,"onUpdate:modelValue":o[3]||=e=>n(M).i18nInput=e,label:a.$t(`form.label.textarea`),placeholder:a.$t(`form.placeholder.textarea`),name:`i18n-label`},null,8,[`modelValue`,`label`,`placeholder`]),o[18]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[17]||=[t(`
          <template>
            <TextareaInput 
              v-model="input"
              :label="t('form.label.textarea')"
              :placeholder="t('form.placeholder.textarea')"
              name="textarea"
            />
          </template>

          <script setup lang="ts">
          import { TextareaInput } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `,-1)]]),_:1})])]),o[36]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.inputWithValidation`)),1),o[22]||=t(),i(`div`,S,[e(n(h),null,{default:c(()=>[e(n(g),{modelValue:n(M).inputWithValidation,"onUpdate:modelValue":o[4]||=e=>n(M).inputWithValidation=e,label:a.$t(`form.label.textarea`),options:j,placeholder:a.$t(`form.placeholder.input`),name:`validation-input`},null,8,[`modelValue`,`label`,`placeholder`])]),_:1}),o[21]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[20]||=[t(`
          <Form>
            <TextareaInput 
              v-model="input"
              :options="validationOptions"
              label="Textarea"
              name="textarea"
              placeholder="Enter input"
            />
          </Form>

          <script setup lang="ts">
          import { Form, TextareaInput } from "@prefabs.tech/vue3-form";
          
          const validationOptions = {
            ignore_whitespace: true,
            required: true
          };
          <\/script>
        `,-1)]]),_:1})])]),o[37]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.customErrorMessageInput`)),1),o[25]||=t(),i(`div`,C,[e(n(h),null,{default:c(()=>[e(n(g),{modelValue:n(M).textInput,"onUpdate:modelValue":o[5]||=e=>n(M).textInput=e,label:a.$t(`form.label.textarea`),"error-messages":A,options:j,placeholder:a.$t(`form.placeholder.input`),name:`custom-message-input`},null,8,[`modelValue`,`label`,`placeholder`])]),_:1}),o[24]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[23]||=[t(`
          <Form>
            <TextareaInput 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Textarea"
              name="textarea"
              placeholder="Enter input"
            />
          </Form>

          <script setup lang="ts">
          import { Form, TextareaInput } from "@prefabs.tech/vue3-form";

          const validationMessages = {
            required: "The field should not be empty"
          };

          const validationOptions = {
            ignore_whitespace: true,
            required: true
          };
          <\/script>
        `,-1)]]),_:1})])]),o[38]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.customValidationInput`)),1),o[28]||=t(),i(`div`,w,[e(n(h),null,{default:c(()=>[e(n(g),{modelValue:n(M).customValidationInput,"onUpdate:modelValue":o[6]||=e=>n(M).customValidationInput=e,label:a.$t(`form.label.textarea`),placeholder:a.$t(`form.placeholder.input`),schema:n(O),name:`custom-validation-input`},null,8,[`modelValue`,`label`,`placeholder`,`schema`])]),_:1}),o[27]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[26]||=[t(`
          <Form>
            <TextareaInput 
              v-model="courseTitle"
              :schema="inputSchema"
              label="Textarea"
              name="textarea"
              placeholder="Enter course title"
            />
          </Form>

          <script setup lang="ts">
          import { Form, TextareaInput } from "@prefabs.tech/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .min(15, { message: "Title must be at least 15 character(s)" });
          <\/script>
        `,-1)]]),_:1})])]),o[39]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.customColsRowsInput`)),1),o[31]||=t(),i(`div`,T,[e(n(h),null,{default:c(()=>[e(n(g),{modelValue:n(M).customRowsColsInput,"onUpdate:modelValue":o[7]||=e=>n(M).customRowsColsInput=e,cols:100,label:a.$t(`form.label.textarea`),placeholder:a.$t(`form.placeholder.input`),rows:5,class:`textarea-field`,name:`custom-input`},null,8,[`modelValue`,`label`,`placeholder`])]),_:1}),o[30]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[29]||=[t(`
          <Form>
            <TextareaInput 
              v-model="input"
              class="textarea-field"
              cols="100"
              label="Textarea"
              name="textarea"
              placeholder="Enter input"
              rows="5"
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@prefabs.tech/vue3-form";
          <\/script>

          <style>
          .textarea-field textarea {
            --_input-field-textarea-height: unset;
            --_input-field-textarea-width: unset;
          }
          </style>
        `,-1)]]),_:1})])]),o[40]||=t(),e(_,{"events-data":D,"props-data":k,"props-table-title":a.$t(`common.properties`,{value:`TextareaInputProperties`})},null,8,[`props-table-title`]),o[41]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[32]||=[t(`
      interface TextErrorMessages {
        invalid?: string;
        required?: string;
      }
    `,-1)]]),_:1})]),_:1},8,[`subtitle`,`title`])}}});export{E as default};
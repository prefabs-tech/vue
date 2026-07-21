import{D as e,E as t,On as n,St as r,_ as i,g as a,gn as o,k as s,mt as c,qt as l,tr as u,v as d,vn as f}from"./runtime-core.esm-bundler-BKdLzFmX.js";import{u as p}from"./vee-validate-Dcr5wvVn.js";import{T as m}from"./PrefabsTechVue3Layout.es-DjWCbXPc.js";import{t as h}from"./FormPage-Ca1LZeR4.js";import{c as g,p as _}from"./PrefabsTechVue3TanstackTable.es-Dqv6JrPc.js";import{t as v}from"./ComponentDocumentation-CFBF3GmY.js";var y={class:`section-content`},b={class:`section-content`},x={class:`section-content`},S={class:`section-content`},C={class:`section-content`},w={class:`section-content`},T=s({name:`SwitchInputDemo`,setup(s){let{t:T}=m(),E=o({disabled:f(!0),input:f(),inputWithValidation:f(!1),noLabelInput:f(),onOffLabel:f()}),D=a(()=>[{description:T(`form.documentation.eventDescription.input.modelValue`),name:`update:modelValue`,payload:`value: boolean`}]),O=a(()=>p.boolean().refine(e=>e===!0,{message:T(`form.errors.switch.invalid`)})),k=a(()=>[{default:`false`,description:T(`form.documentation.propsDescription.input.disabled`),prop:`disabled`,type:`Boolean`},{default:`-`,description:T(`form.documentation.propsDescription.input.label`),prop:`label`,type:`String`},{default:`false`,description:T(`form.documentation.propsDescription.input.modelValue`),prop:`modelValue`,type:`Boolean`},{default:`"switch"`,description:T(`form.documentation.propsDescription.input.name`),prop:`name`,type:`String`},{default:`-`,description:T(`form.documentation.propsDescription.switch.offLabel`),prop:`offLabel`,type:`String`},{default:`-`,description:T(`form.documentation.propsDescription.switch.onLabel`),prop:`onLabel`,type:`String`},{default:`-`,description:T(`form.documentation.propsDescription.input.schema`),prop:`schema`,type:`z.ZodType<string | number | boolean>`}]);return(a,o)=>{let s=r(`SshPre`);return c(),d(h,{subtitle:a.$t(`form.subtitle.switch`),title:a.$t(`form.label.switch`),class:`demo`},{default:l(()=>[i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.basicInput`)),1),o[8]||=t(),i(`div`,y,[e(n(_),{modelValue:n(E).noLabelInput,"onUpdate:modelValue":o[0]||=e=>n(E).noLabelInput=e},null,8,[`modelValue`]),o[7]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[6]||=[t(`
          <template>
            <SwitchInput v-model="input" />
          </template>

          <script setup lang="ts">
          import { SwitchInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)]]),_:1})])]),o[24]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.labelInput`)),1),o[11]||=t(),i(`div`,b,[e(n(_),{modelValue:n(E).input,"onUpdate:modelValue":o[1]||=e=>n(E).input=e,label:a.$t(`form.label.switch`)},null,8,[`modelValue`,`label`]),o[10]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[9]||=[t(`
          <Form>
            <SwitchInput v-model="input" label="Switch" />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)]]),_:1})])]),o[25]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.disabled`)),1),o[14]||=t(),i(`div`,x,[e(n(_),{modelValue:n(E).disabled,"onUpdate:modelValue":o[2]||=e=>n(E).disabled=e,label:a.$t(`form.label.disabled`),disabled:``},null,8,[`modelValue`,`label`]),o[13]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[12]||=[t(`
          <template>
            <SwitchInput 
              v-model="disabled"
              disabled
              label="Disabled"
            />
          </template>

          <script setup lang="ts">
          import { SwitchInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const disabled = ref(true);
          <\/script>
        `,-1)]]),_:1})])]),o[26]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.withOnOffLabel`)),1),o[17]||=t(),i(`div`,S,[e(n(_),{modelValue:n(E).onOffLabel,"onUpdate:modelValue":o[3]||=e=>n(E).onOffLabel=e,label:a.$t(`form.label.switch`),"off-label":a.$t(`form.label.no`),"on-label":a.$t(`form.label.yes`)},null,8,[`modelValue`,`label`,`off-label`,`on-label`]),o[16]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[15]||=[t(`
          <Form>
            <SwitchInput
              v-model="input"
              :label="$t('form.label.switch')"
              off-label="No"
              on-label="Yes"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@prefabs.tech/vue3-form";
          <\/script>

          <style>
            .switch input[type=checkbox] {
              --_width: 5rem;
            }
          </style>
        `,-1)]]),_:1})])]),o[27]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.withI18n`)),1),o[20]||=t(),i(`div`,C,[e(n(_),{modelValue:n(E).input,"onUpdate:modelValue":o[4]||=e=>n(E).input=e,label:a.$t(`form.label.switch`)},null,8,[`modelValue`,`label`]),o[19]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[18]||=[t(`
          <template>
            <SwitchInput 
              v-model="input"
              :label="t('form.label.switch')"
            />
          </template>

          <script setup lang="ts">
          import { SwitchInput } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `,-1)]]),_:1})])]),o[28]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.inputWithValidation`)),1),o[23]||=t(),i(`div`,w,[e(n(g),null,{default:l(()=>[e(n(_),{modelValue:n(E).inputWithValidation,"onUpdate:modelValue":o[5]||=e=>n(E).inputWithValidation=e,label:a.$t(`form.label.switch`),schema:O.value},null,8,[`modelValue`,`label`,`schema`])]),_:1}),o[22]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[21]||=[t(`
          <Form>
            <SwitchInput 
              v-model="disabled"
              :schema="inputSchema"
              label="Switch"
            />
          </Form>

          <script setup lang="ts">
          import { Form, SwitchInput } from "@prefabs.tech/vue3-form";

          const inputSchema = z.coerce
            .boolean()
            .refine((value) => value === true, {
              message: "The switch value must be true.",
            });
          <\/script>
        `,-1)]]),_:1})])]),o[29]||=t(),e(v,{"events-data":D.value,"props-data":k.value,"props-table-title":a.$t(`common.properties`,{value:`SwitchInputProperties`})},null,8,[`events-data`,`props-data`,`props-table-title`])]),_:1},8,[`subtitle`,`title`])}}});export{T as default};
import{D as e,E as t,On as n,St as r,_ as i,b as a,gn as o,k as s,mt as c,qt as l,tr as u,v as d,vn as f,y as p}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{u as m}from"./vee-validate-D3u_EqLN.js";import{E as h}from"./PrefabsTechVue3Layout.es-ByeEwOwS.js";import{t as g}from"./FormPage-qAqvgJ-r.js";import{b as _,i as v}from"./PrefabsTechVue3TanstackTable.es-CqNazKU2.js";import{t as y}from"./ComponentDocumentation-BPcopVAa.js";var b={class:`section-content`},x={key:0,class:`result-date`},S={class:`section-content`},C={key:0,class:`result-date`},w={class:`section-content`},T={key:0,class:`result-date`},E={class:`section-content`},D={key:0,class:`result-date`},O=s({name:`DaysInputDemo`,setup(s){let{t:O}=h(),k=m.number({invalid_type_error:O(`form.errors.number.required`)}).min(1,{message:O(`form.errors.daysInput.invalid`)}).max(365,{message:O(`form.errors.daysInput.invalid`)}),A=[{description:O(`form.documentation.eventDescription.daysInput.date`),name:`update:date`,payload:`date: string`},{description:O(`form.documentation.eventDescription.input.modelValue`),name:`update:modelValue`,payload:`value: number`}],j=[{default:`false`,description:O(`form.documentation.propsDescription.input.disabled`),prop:`disabled`,type:`Boolean`},{default:`-`,description:O(`form.documentation.propsDescription.input.label`),prop:`label`,type:`String`},{default:`-`,description:O(`form.documentation.propsDescription.input.modelValue`),prop:`modelValue`,type:`Number | Null | Undefined`},{default:`"days-input"`,description:O(`form.documentation.propsDescription.input.name`),prop:`name`,type:`String`},{default:`-`,description:O(`form.documentation.propsDescription.input.placeholder`),prop:`placeholder`,type:`String`},{default:`z.coerce.number().optional()`,description:O(`form.documentation.propsDescription.input.schema`),prop:`schema`,type:`z.ZodType<string | number>`}],M=o({basic:f(),disabled:f(),label:f(),validationInput:f()}),N=o({basic:f(),disabled:f(30),label:f(),validationInput:f()});return(o,s)=>{let f=r(`SshPre`);return c(),d(g,{subtitle:o.$t(`form.subtitle.daysInput`),title:o.$t(`form.label.daysInput`),class:`demo`},{default:l(()=>[i(`section`,null,[i(`h2`,null,u(o.$t(`form.label.basicInput`)),1),s[11]||=t(),i(`div`,b,[e(n(_),{modelValue:n(N).basic,"onUpdate:modelValue":s[0]||=e=>n(N).basic=e,placeholder:o.$t(`form.placeholder.days`),"onUpdate:date":s[1]||=e=>M.basic=e},null,8,[`modelValue`,`placeholder`]),s[9]||=t(),M.basic?(c(),a(`div`,x,u(M.basic),1)):p(``,!0),s[10]||=t(),e(f,{language:`html-vue`},{default:l(()=>[...s[8]||=[t(`
          <template>
            <DaysInput
              v-model="input"
              placeholder="Enter number of days"
              @update:date="result = $event"
            />
          </template>
          <div v-if="result" class="result-date">{{ result }}</div>

          <script setup lang="ts">
          import { DaysInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();
          const result = ref();
          <\/script>
        `,-1)]]),_:1})])]),s[24]||=t(),i(`section`,null,[i(`h2`,null,u(o.$t(`form.label.labelInput`)),1),s[15]||=t(),i(`div`,S,[e(n(v),null,{default:l(()=>[e(n(_),{modelValue:n(N).label,"onUpdate:modelValue":s[2]||=e=>n(N).label=e,label:o.$t(`form.label.arrivalDate`),placeholder:o.$t(`form.placeholder.days`),name:`label-input`,"onUpdate:date":s[3]||=e=>M.label=e},null,8,[`modelValue`,`label`,`placeholder`])]),_:1}),s[13]||=t(),M.label?(c(),a(`div`,C,u(M.label),1)):p(``,!0),s[14]||=t(),e(f,{language:`html-vue`},{default:l(()=>[...s[12]||=[t(`
          <Form>
            <DaysInput
              v-model="input"
              label="Arrival date"
              name="days"
              placeholder="Enter number of days"
              @update:date="result = $event"
            />
          </Form>
          <div v-if="result" class="result-date">{{ result }}</div>

          <script setup lang="ts">
          import { DaysInput, Form } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();
          const result = ref();
          <\/script>
        `,-1)]]),_:1})])]),s[25]||=t(),i(`section`,null,[i(`h2`,null,u(o.$t(`form.label.disabled`)),1),s[19]||=t(),i(`div`,w,[e(n(v),null,{default:l(()=>[e(n(_),{modelValue:n(N).disabled,"onUpdate:modelValue":s[4]||=e=>n(N).disabled=e,label:o.$t(`form.label.appointmentDate`),placeholder:o.$t(`form.placeholder.days`),disabled:``,name:`disabled-input`,"onUpdate:date":s[5]||=e=>M.disabled=e},null,8,[`modelValue`,`label`,`placeholder`])]),_:1}),s[17]||=t(),M.disabled?(c(),a(`div`,T,u(M.disabled),1)):p(``,!0),s[18]||=t(),e(f,{language:`html-vue`},{default:l(()=>[...s[16]||=[t(`
          <Form>
            <DaysInput
              v-model="input"
              disabled
              label="Appointment date"
              name="days"
              placeholder="Enter number of days"
              @update:date="result = $event"
            />
          </Form>
          <div v-if="result" class="result-date">{{ result }}</div>

          <script setup lang="ts">
          import { DaysInput, Form } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();
          const result = ref();
          <\/script>
        `,-1)]]),_:1})])]),s[26]||=t(),i(`section`,null,[i(`h2`,null,u(o.$t(`form.label.customValidationInput`)),1),s[23]||=t(),i(`div`,E,[e(n(v),null,{default:l(()=>[e(n(_),{modelValue:n(N).validationInput,"onUpdate:modelValue":s[6]||=e=>n(N).validationInput=e,label:o.$t(`form.label.expiresAfter`),placeholder:o.$t(`form.placeholder.days`),schema:n(k),name:`validation-input`,"onUpdate:date":s[7]||=e=>M.validationInput=e},null,8,[`modelValue`,`label`,`placeholder`,`schema`])]),_:1}),s[21]||=t(),M.validationInput&&n(N).validationInput>0&&n(N).validationInput<=365?(c(),a(`div`,D,u(M.validationInput),1)):p(``,!0),s[22]||=t(),e(f,{language:`html-vue`},{default:l(()=>[...s[20]||=[t(`
          <Form>
            <DaysInput
              v-model="input"
              :schema="inputSchema"
              label="Expires after"
              name="days"
              placeholder="Enter number of days"
              @update:date="result = $event"
            />
          </Form>
          <div
            v-if="result > 0 && result <= 365"
            class="result-date"
          >
            {{ result }}
          </div>

          <script setup lang="ts">
          import { DaysInput, Form } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
          import { z } from "zod";

          const input = ref();
          const result = ref();

          const inputSchema = z.coerce
            .number({ invalid_type_error: "The field is required" })
            .min(1, { message: "Please provide number of days within a year" })
            .max(365, { message: "Please provide number of days within a year" });
          <\/script>
        `,-1)]]),_:1})])]),s[27]||=t(),e(y,{"events-data":A,"props-data":j,"props-table-title":o.$t(`common.properties`,{value:`DaysInputProperties`})},null,8,[`props-table-title`])]),_:1},8,[`subtitle`,`title`])}}});export{O as default};
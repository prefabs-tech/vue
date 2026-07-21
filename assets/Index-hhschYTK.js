import{D as e,E as t,On as n,St as r,_ as i,g as a,gn as o,k as s,mt as c,qt as l,tr as u,v as d,vn as f}from"./runtime-core.esm-bundler-BKdLzFmX.js";import{p}from"./vee-validate-Dcr5wvVn.js";import{T as m}from"./PrefabsTechVue3Layout.es-DjWCbXPc.js";import{t as h}from"./FormPage-Ca1LZeR4.js";import{c as g,x as _}from"./PrefabsTechVue3TanstackTable.es-Dqv6JrPc.js";import{t as v}from"./ComponentDocumentation-CFBF3GmY.js";var y={class:`section-content`},b={class:`section-content`},x={class:`section-content`},S={class:`section-content`},C={class:`section-content`},w={class:`section-content`},T=s({name:`TypeaheadDemo`,setup(s){let{t:T}=m(),E=o({disabled:f(`Lily`),input:f(),inputWithValidation:f(),noLabelInput:f()}),D=[{label:`Roslabel - A fragrant flower often associated with romance`,value:`Roslabel`},{label:`Tulip - A bright, cup-shaped flower popular in spring`,value:`Tulip`},{label:`Daisy - A simple, white flower with a yellow center`,value:`Daisy`},{label:`Sunflower - A tall plant with a large, yellow flower head`,value:`Sunflower`},{label:`Lily - An elegant flower often used in bouquets`,value:`Lily`},{label:`Orchid - An exotic flower with a unique shape`,value:`Orchid`},{label:`Marigold - A vibrant, orange or yellow flower`,value:`Marigold`},{label:`Lavender - A fragrant flower known for its calming scent`,value:`Lavender`},{label:`Peony - A lush, full flower often used in weddings`,value:`Peony`},{label:`Chrysanthemum - A hardy flower with a variety of colors`,value:`Chrysanthemum`},{label:`Daffodil - A bright, yellow flower that blooms in spring`,value:`Daffodil`},{label:`Hydrangea - A large, cluster-like flower that changes color`,value:`Hydrangea`}],O=a(()=>[{description:T(`form.documentation.eventDescription.input.modelValue`),name:`update:modelValue`,payload:`value: string | number`}]),k=a(()=>p().min(3,{message:T(`form.errors.input.min`,{length:3})})),A=a(()=>[{default:`500`,description:T(`form.documentation.propsDescription.typeahead.debounceTime`),prop:`debounceTime`,type:`Number`},{default:`false`,description:T(`form.documentation.propsDescription.input.disabled`),prop:`disabled`,type:`Boolean`},{default:`-`,description:T(`form.documentation.propsDescription.input.label`),prop:`label`,type:`String`},{default:`-`,description:T(`form.documentation.propsDescription.input.modelValue`),prop:`modelValue`,type:`String | Number | null | undefined`},{default:`-`,description:T(`form.documentation.propsDescription.input.name`),prop:`name`,type:`String`},{default:`-`,description:T(`form.documentation.propsDescription.input.placeholder`),prop:`placeholder`,type:`String`},{default:`-`,description:T(`form.documentation.propsDescription.input.schema`),prop:`schema`,type:`z.ZodType<string | number | object>`},{default:`-`,description:T(`form.documentation.propsDescription.typeahead.suggestions`,{required:!0}),prop:`suggestions`,type:`{label?: string; value?: string | number;}`},{default:`"text"`,description:T(`form.documentation.propsDescription.input.type`),prop:`type`,type:`String`}]),j=a(()=>[{description:T(`form.documentation.slotDescription.typeahead.suggestion`),name:`suggestion`,props:`{ suggestion: {label?: string; value?: string | number;} }`}]);return(a,o)=>{let s=r(`SshPre`);return c(),d(h,{subtitle:a.$t(`form.subtitle.typeahead`),title:a.$t(`form.label.typeahead`),class:`demo`},{default:l(()=>[i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.basicInput`)),1),o[8]||=t(),i(`div`,y,[e(n(_),{modelValue:n(E).noLabelInput,"onUpdate:modelValue":o[0]||=e=>n(E).noLabelInput=e,placeholder:a.$t(`form.placeholder.input`),suggestions:D},null,8,[`modelValue`,`placeholder`]),o[7]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[6]||=[t(`
          <template>
            <Typeahead
              v-model="input"
              :suggestions="suggestionItems"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { Typeahead } from "@prefabs.tech/vue3-form";

          const suggestionItems = [
            {
              value: "Roslabel",
              label: "Roslabel - A fragrant flower often associated with romance",
            },
            { 
              value: "Tulip",
              label: "Tulip - A bright, cup-shaped flower popular in spring"
            },
            {
              value: "Daisy",
              label: "Daisy - A simple, white flower with a yellow center"
            },
            {
              value: "Sunflower",
              label: "Sunflower - A tall plant with a large, yellow flower head",
            },
            {
              value: "Lily",
              label: "Lily - An elegant flower often used in bouquets"
            },
            {
              value: "Orchid",
              label: "Orchid - An exotic flower with a unique shape"
            },
            {
              value: "Marigold",
              label: "Marigold - A vibrant, orange or yellow flower"
            },
            {
              value: "Lavender",
              label: "Lavender - A fragrant flower known for its calming scent"
            },
            {
              value: "Peony",
              label: "Peony - A lush, full flower often used in weddings"
            },
            {
              value: "Chrysanthemum",
              label: "Chrysanthemum - A hardy flower with a variety of colors"
            },
            {
              value: "Daffodil",
              label: "Daffodil - A bright, yellow flower that blooms in spring"
            },
            {
              value: "Hydrangea",
              label: "Hydrangea - A large, cluster-like flower that changes color",
            },
          ];
          <\/script>
        `,-1)]]),_:1})])]),o[24]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.labelInput`)),1),o[11]||=t(),i(`div`,b,[e(n(_),{modelValue:n(E).input,"onUpdate:modelValue":o[1]||=e=>n(E).input=e,label:a.$t(`form.label.typeahead`),placeholder:a.$t(`form.placeholder.input`),suggestions:D,name:`label-input`},null,8,[`modelValue`,`label`,`placeholder`]),o[10]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[9]||=[t(`
          <template>
            <Typeahead
              v-model="input"
              :suggestions="suggestionItems"
              label="Typeahead"
              name="typeahead"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { Typeahead } from "@prefabs.tech/vue3-form";

          const suggestionItems = [
            {
              value: "Roslabel",
              label: "Roslabel - A fragrant flower often associated with romance",
            },
            { 
              value: "Tulip",
              label: "Tulip - A bright, cup-shaped flower popular in spring"
            },
            {
              value: "Daisy",
              label: "Daisy - A simple, white flower with a yellow center"
            },
            {
              value: "Sunflower",
              label: "Sunflower - A tall plant with a large, yellow flower head",
            },
            {
              value: "Lily",
              label: "Lily - An elegant flower often used in bouquets"
            },
            {
              value: "Orchid",
              label: "Orchid - An exotic flower with a unique shape"
            },
            {
              value: "Marigold",
              label: "Marigold - A vibrant, orange or yellow flower"
            },
            {
              value: "Lavender",
              label: "Lavender - A fragrant flower known for its calming scent"
            },
            {
              value: "Peony",
              label: "Peony - A lush, full flower often used in weddings"
            },
            {
              value: "Chrysanthemum",
              label: "Chrysanthemum - A hardy flower with a variety of colors"
            },
            {
              value: "Daffodil",
              label: "Daffodil - A bright, yellow flower that blooms in spring"
            },
            {
              value: "Hydrangea",
              label: "Hydrangea - A large, cluster-like flower that changes color",
            },
          ];
          <\/script>
        `,-1)]]),_:1})])]),o[25]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.disabled`)),1),o[14]||=t(),i(`div`,x,[e(n(_),{modelValue:n(E).disabled,"onUpdate:modelValue":o[2]||=e=>n(E).disabled=e,label:a.$t(`form.label.disabled`),suggestions:D,name:`disabled-input`,type:`text`,disabled:``},null,8,[`modelValue`,`label`]),o[13]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[12]||=[t(`
          <template>
            <Typeahead
              v-model="input"
              :suggestions="suggestionItems"
              label="Disabled"
              name="disabled-input"
              type="text"
              disabled
            />
          </template>

          <script setup lang="ts">
          import { Typeahead } from "@prefabs.tech/vue3-form";

          const suggestionItems = [
            {
              value: "Roslabel",
              label: "Roslabel - A fragrant flower often associated with romance",
            },
            { 
              value: "Tulip",
              label: "Tulip - A bright, cup-shaped flower popular in spring"
            },
            {
              value: "Daisy",
              label: "Daisy - A simple, white flower with a yellow center"
            },
            {
              value: "Sunflower",
              label: "Sunflower - A tall plant with a large, yellow flower head",
            },
            {
              value: "Lily",
              label: "Lily - An elegant flower often used in bouquets"
            },
            {
              value: "Orchid",
              label: "Orchid - An exotic flower with a unique shape"
            },
            {
              value: "Marigold",
              label: "Marigold - A vibrant, orange or yellow flower"
            },
            {
              value: "Lavender",
              label: "Lavender - A fragrant flower known for its calming scent"
            },
            {
              value: "Peony",
              label: "Peony - A lush, full flower often used in weddings"
            },
            {
              value: "Chrysanthemum",
              label: "Chrysanthemum - A hardy flower with a variety of colors"
            },
            {
              value: "Daffodil",
              label: "Daffodil - A bright, yellow flower that blooms in spring"
            },
            {
              value: "Hydrangea",
              label: "Hydrangea - A large, cluster-like flower that changes color",
            },
          ];
          <\/script>
        `,-1)]]),_:1})])]),o[26]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.withI18n`)),1),o[17]||=t(),i(`div`,S,[e(n(_),{modelValue:n(E).input,"onUpdate:modelValue":o[3]||=e=>n(E).input=e,label:a.$t(`form.label.typeahead`),placeholder:a.$t(`form.placeholder.input`),suggestions:D,name:`i18n-input`},null,8,[`modelValue`,`label`,`placeholder`]),o[16]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[15]||=[t(`
          <template>
            <Typeahead
              v-model="input"
              :suggestions="suggestionItems"
              :label="t('form.label.typeahead')"
              :placeholder="t('form.placeholder.input')"
              name="typeahed"
            />
          </template>

          <script setup lang="ts">
          import { Typeahead } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();

          const suggestionItems = [
            {
              value: "Roslabel",
              label: "Roslabel - A fragrant flower often associated with romance",
            },
            { 
              value: "Tulip",
              label: "Tulip - A bright, cup-shaped flower popular in spring"
            },
            {
              value: "Daisy",
              label: "Daisy - A simple, white flower with a yellow center"
            },
            {
              value: "Sunflower",
              label: "Sunflower - A tall plant with a large, yellow flower head",
            },
            {
              value: "Lily",
              label: "Lily - An elegant flower often used in bouquets"
            },
            {
              value: "Orchid",
              label: "Orchid - An exotic flower with a unique shape"
            },
            {
              value: "Marigold",
              label: "Marigold - A vibrant, orange or yellow flower"
            },
            {
              value: "Lavender",
              label: "Lavender - A fragrant flower known for its calming scent"
            },
            {
              value: "Peony",
              label: "Peony - A lush, full flower often used in weddings"
            },
            {
              value: "Chrysanthemum",
              label: "Chrysanthemum - A hardy flower with a variety of colors"
            },
            {
              value: "Daffodil",
              label: "Daffodil - A bright, yellow flower that blooms in spring"
            },
            {
              value: "Hydrangea",
              label: "Hydrangea - A large, cluster-like flower that changes color",
            },
          ];
          <\/script>
        `,-1)]]),_:1})])]),o[27]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.debouncedTypeahead`)),1),o[20]||=t(),i(`div`,C,[e(n(_),{modelValue:n(E).input,"onUpdate:modelValue":o[4]||=e=>n(E).input=e,"debounce-time":1e3,"empty-message":a.$t(`form.label.noResults`),label:a.$t(`form.label.typeahead`),placeholder:a.$t(`form.placeholder.input`),suggestions:D,name:`delay-input`},null,8,[`modelValue`,`empty-message`,`label`,`placeholder`]),o[19]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[18]||=[t(`
          <template>
            <Typeahead
              v-model="input"
              :debounce-time="1000"
              :suggestions="suggestionItems"
              empty-message="No results found"
              label="Typeahead"
              name="typeahead"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { Typeahead } from "@prefabs.tech/vue3-form";

          const suggestionItems = [
            {
              value: "Roslabel",
              label: "Roslabel - A fragrant flower often associated with romance",
            },
            { 
              value: "Tulip",
              label: "Tulip - A bright, cup-shaped flower popular in spring"
            },
            {
              value: "Daisy",
              label: "Daisy - A simple, white flower with a yellow center"
            },
            {
              value: "Sunflower",
              label: "Sunflower - A tall plant with a large, yellow flower head",
            },
            {
              value: "Lily",
              label: "Lily - An elegant flower often used in bouquets"
            },
            {
              value: "Orchid",
              label: "Orchid - An exotic flower with a unique shape"
            },
            {
              value: "Marigold",
              label: "Marigold - A vibrant, orange or yellow flower"
            },
            {
              value: "Lavender",
              label: "Lavender - A fragrant flower known for its calming scent"
            },
            {
              value: "Peony",
              label: "Peony - A lush, full flower often used in weddings"
            },
            {
              value: "Chrysanthemum",
              label: "Chrysanthemum - A hardy flower with a variety of colors"
            },
            {
              value: "Daffodil",
              label: "Daffodil - A bright, yellow flower that blooms in spring"
            },
            {
              value: "Hydrangea",
              label: "Hydrangea - A large, cluster-like flower that changes color",
            },
          ];
          <\/script>
        `,-1)]]),_:1})])]),o[28]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.inputWithValidation`)),1),o[23]||=t(),i(`div`,w,[e(n(g),null,{default:l(()=>[e(n(_),{modelValue:n(E).inputWithValidation,"onUpdate:modelValue":o[5]||=e=>n(E).inputWithValidation=e,label:a.$t(`form.label.typeahead`),name:a.$t(`form.label.typeahead`),placeholder:a.$t(`form.placeholder.input`),schema:k.value,suggestions:D,type:`text`},null,8,[`modelValue`,`label`,`name`,`placeholder`,`schema`])]),_:1}),o[22]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[21]||=[t(`
          <Form>
            <Typeahead
              v-model="inputWithValidation"
              :schema="inputSchema"
              :suggestions="suggestionItems"
              label="Input"
              name="typeahead"
              placeholder="Enter input"
              type="text"
            />
          </Form>

          <script setup lang="ts">
          import { Form, Typeahead } from "@prefabs.tech/vue3-form";
          import { z } from "zod";

          const suggestionItems = [
            {
              value: "Roslabel",
              label: "Roslabel - A fragrant flower often associated with romance",
            },
            { 
              value: "Tulip",
              label: "Tulip - A bright, cup-shaped flower popular in spring"
            },
            {
              value: "Daisy",
              label: "Daisy - A simple, white flower with a yellow center"
            },
            {
              value: "Sunflower",
              label: "Sunflower - A tall plant with a large, yellow flower head",
            },
            {
              value: "Lily",
              label: "Lily - An elegant flower often used in bouquets"
            },
            {
              value: "Orchid",
              label: "Orchid - An exotic flower with a unique shape"
            },
            {
              value: "Marigold",
              label: "Marigold - A vibrant, orange or yellow flower"
            },
            {
              value: "Lavender",
              label: "Lavender - A fragrant flower known for its calming scent"
            },
            {
              value: "Peony",
              label: "Peony - A lush, full flower often used in weddings"
            },
            {
              value: "Chrysanthemum",
              label: "Chrysanthemum - A hardy flower with a variety of colors"
            },
            {
              value: "Daffodil",
              label: "Daffodil - A bright, yellow flower that blooms in spring"
            },
            {
              value: "Hydrangea",
              label: "Hydrangea - A large, cluster-like flower that changes color",
            },
          ];

          const inputSchema = z.string()
            .min(3, { message: "Input must be at least 3 character(s)" });        
          <\/script>
        `,-1)]]),_:1})])]),o[29]||=t(),e(v,{"events-data":O.value,"props-data":A.value,"props-table-title":a.$t(`common.properties`,{value:`TypeaheadProperties`}),"slots-data":j.value},null,8,[`events-data`,`props-data`,`props-table-title`,`slots-data`])]),_:1},8,[`subtitle`,`title`])}}});export{T as default};
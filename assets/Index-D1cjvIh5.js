import{D as e,E as t,On as n,St as r,_ as i,g as a,gn as o,k as s,mt as c,qt as l,tr as u,v as d}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{f,l as p,p as m}from"./vee-validate-D3u_EqLN.js";import{E as h}from"./PrefabsTechVue3Layout.es-ByeEwOwS.js";import{t as g}from"./FormPage-qAqvgJ-r.js";import{a as _,i as v}from"./PrefabsTechVue3TanstackTable.es-CqNazKU2.js";import{t as y}from"./ComponentDocumentation-BPcopVAa.js";import{n as b}from"./data-Df7Ttrby.js";var x={class:`section-content`},S={class:`section-content`},C={class:`section-content`},w={class:`section-content`},T={class:`section-content`},E={class:`section-content`},D=s({name:`CurrencyPickerDemo`,setup(s){let{t:D}=h(),O=o({basic:void 0,extensivePicker:void 0,multiselect:void 0,selectOptionsInput:void 0,selectWithOrder:void 0,validationInput:void 0}),k=[{code:`AUD`,label:`Australian Dollar`,symbol:`$`,value:`AUD`},{code:`GBP`,label:`British Pound`,symbol:`£`,value:`GBP`},{code:`EUR`,disabled:!0,label:`Euro`,symbol:`€`,value:`EUR`},{code:`JPY`,label:`Japanese Yen`,symbol:`¥`,value:`JPY`},{code:`USD`,label:`US Dollar`,symbol:`$`,value:`USD`},{code:`DZD`,label:`Algerian dinar`,value:`DZD`},{code:`ZAR`,label:`South African Rand`,value:`ZAR`},{code:`NPR`,label:`Nepalese rupee`,symbol:`Rs`,value:`NPR`}],A=a(()=>[{description:D(`form.documentation.eventDescription.input.modelValue`),name:`update:modelValue`,payload:`string | number | string[] | number[] | null | undefined`},{description:D(`form.documentation.eventDescription.currencyPicker.searchInput`),name:`update:searchInput`,payload:`string`}]),j=a(()=>f(e=>e??[],p(m()).min(1,{message:D(`form.errors.currencyPicker.invalid`)}))),M=a(()=>[{default:`false`,description:D(`form.documentation.propsDescription.input.disabled`),prop:`disabled`,type:`Boolean`},{default:`-`,description:D(`form.documentation.propsDescription.input.label`),prop:`label`,type:`String`},{default:`-`,description:D(`form.documentation.propsDescription.input.modelValue`),prop:`modelValue`,type:`boolean | number | string | (number | string)[] | null`},{default:`false`,description:D(`form.documentation.propsDescription.select.multiple`),prop:`multiple`,type:`Boolean`},{default:`"currency"`,description:D(`form.documentation.propsDescription.input.name`),prop:`name`,type:`String`},{default:`["code", "label", "symbol"]`,description:D(`form.documentation.propsDescription.currencyPicker.optionLabelOrder`),prop:`optionLabelOrder`,type:`Array<keyof CurrencyOption>`},{default:`-`,description:D(`form.documentation.propsDescription.currencyPicker.options`),prop:`options`,type:`CurrencyOption[]`},{default:`-`,description:D(`form.documentation.propsDescription.input.placeholder`),prop:`placeholder`,type:`String`},{default:`-`,description:D(`form.documentation.propsDescription.input.schema`),prop:`schema`,type:`z.ZodType<string | number | string[] | number[]>`},{default:`-`,description:D(`form.documentation.propsDescription.currencyPicker.selectionOptions`),prop:`selectionOptions`,type:`Object`}]),N=a(()=>[{description:D(`form.documentation.slotDescription.currencyPicker.option`),name:`option`,props:`{ multiple: boolean, option: CurrencyOption, selected: boolean }`},{description:D(`form.documentation.slotDescription.currencyPicker.selection`),name:`selection`,props:`{ selectedLabels: string[] }`}]);return(a,o)=>{let s=r(`SshPre`);return c(),d(g,{subtitle:n(D)(`form.subtitle.currencyPicker`),title:a.$t(`form.label.currencyPicker`),class:`demo`},{default:l(()=>[i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.basicInput`)),1),o[8]||=t(),i(`div`,x,[e(n(_),{modelValue:O.basic,"onUpdate:modelValue":o[0]||=e=>O.basic=e,options:k,placeholder:a.$t(`form.placeholder.currency`)},null,8,[`modelValue`,`placeholder`]),o[7]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[6]||=[t(`
          <template>
            <CurrencyPicker
              v-model="input"
              :options="options"
              placeholder="Select a currency"
            />
          </template>

          <script setup lang="ts">
          import { CurrencyPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          import type { CurrencyOption } from "@prefabs.tech/vue3-form";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
            { code: "DZD", label: "Algerian dinar", value: "DZD" },
            {
              code: "ZAR",
              label: "South African Rand",
              value: "ZAR",
            },
            { code: "NPR", label: "Nepalese rupee", symbol: "Rs", value: "NPR" },
          ] as CurrencyOption[];
          <\/script>
        `,-1)]]),_:1})])]),o[25]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.selectLabelOrder`)),1),o[11]||=t(),i(`div`,S,[e(n(_),{modelValue:O.selectWithOrder,"onUpdate:modelValue":o[1]||=e=>O.selectWithOrder=e,"option-label-order":[`symbol`,`label`,`code`],options:k,placeholder:a.$t(`form.placeholder.currency`),name:`ordered-currency`},null,8,[`modelValue`,`placeholder`]),o[10]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[9]||=[t(`
          <template>
            <CurrencyPicker
              v-model="input"
              :option-label-order="['symbol', 'label', 'code']"
              :options="options"
              name="currency"
              placeholder="Select a currency"
            />
          </template>

          <script setup lang="ts">
          import { CurrencyPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          import type { CurrencyOption } from "@prefabs.tech/vue3-form";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
            { code: "DZD", label: "Algerian dinar", value: "DZD" },
            {
              code: "ZAR",
              label: "South African Rand",
              value: "ZAR",
            },
            { code: "NPR", label: "Nepalese rupee", symbol: "Rs", value: "NPR" },
          ] as CurrencyOption[];
          <\/script>
        `,-1)]]),_:1})])]),o[26]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.currencyPickerExtensive`)),1),o[14]||=t(),i(`div`,C,[e(n(_),{modelValue:O.extensivePicker,"onUpdate:modelValue":o[2]||=e=>O.extensivePicker=e,options:n(b),placeholder:a.$t(`form.placeholder.currency`),name:`extensive-currency`},null,8,[`modelValue`,`options`,`placeholder`]),o[13]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[12]||=[t(`
          <template>
            <CurrencyPicker
              v-model="input"
              :options="currencies"
              name="currency"
              placeholder="Select a currency"
            />
          </template>

          <script setup lang="ts">
          import { CurrencyPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          import { currencies } from "../data";

          import type { CurrencyOption } from "@prefabs.tech/vue3-form";

          const input = ref();
          <\/script>
        `,-1)]]),_:1})])]),o[27]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.multiselect`)),1),o[17]||=t(),i(`div`,w,[e(n(_),{modelValue:O.multiselect,"onUpdate:modelValue":o[3]||=e=>O.multiselect=e,options:k,placeholder:a.$t(`form.placeholder.currency`),multiple:``,name:`multiselect-currency`},null,8,[`modelValue`,`placeholder`]),o[16]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[15]||=[t(`
          <template>
            <CurrencyPicker
              v-model="input"
              :options="options"
              multiple
              name="currency"
              placeholder="Select a currency"
            />
          </template>

          <script setup lang="ts">
          import { CurrencyPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          import type { CurrencyOption } from "@prefabs.tech/vue3-form";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
            { code: "DZD", label: "Algerian dinar", value: "DZD" },
            {
              code: "ZAR",
              label: "South African Rand",
              value: "ZAR",
            },
            { code: "NPR", label: "Nepalese rupee", symbol: "Rs", value: "NPR" },
            ] as CurrencyOption[];
          <\/script>
        `,-1)]]),_:1})])]),o[28]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.withSelectOptions`)),1),o[20]||=t(),i(`div`,T,[e(n(v),null,{default:l(()=>[e(n(_),{modelValue:O.selectOptionsInput,"onUpdate:modelValue":o[4]||=e=>O.selectOptionsInput=e,options:k,placeholder:a.$t(`form.placeholder.currency`),"selection-options":{hasSortedOptions:!1,maxSelection:3,minSelection:2,showRemoveSelection:!0},multiple:``,name:`select-currency`},null,8,[`modelValue`,`placeholder`])]),_:1}),o[19]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[18]||=[t(`
          <template>
            <Form>
              <CurrencyPicker
                v-model="input"
                :options="options"
                :selection-options="{
                  hasSortedOptions: false,
                  maxSelection: 3,
                  minSelection: 2,
                  showRemoveSelection: true,
                } as SelectInputProperties"
                multiple
                name="currency"
                placeholder="Select a currency"
              />
            </Form>
          </template>

          <script setup lang="ts">
          import type { CurrencyOption, SelectInputProperties } from "@prefabs.tech/vue3-form";

          import { CurrencyPicker, Form } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
            { code: "DZD", label: "Algerian dinar", value: "DZD" },
            {
              code: "ZAR",
              label: "South African Rand",
              value: "ZAR",
            },
            { code: "NPR", label: "Nepalese rupee", symbol: "Rs", value: "NPR" },
          ] as CurrencyOption[];
          <\/script>
        `,-1)]]),_:1})])]),o[29]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.customValidationInput`)),1),o[23]||=t(),i(`div`,E,[e(n(v),null,{default:l(()=>[e(n(_),{modelValue:O.validationInput,"onUpdate:modelValue":o[5]||=e=>O.validationInput=e,options:k,placeholder:a.$t(`form.placeholder.currency`),schema:j.value,multiple:``,name:`validation-currency`},null,8,[`modelValue`,`placeholder`,`schema`])]),_:1}),o[22]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[21]||=[t(`
          <template>
            <Form>
              <CurrencyPicker
                v-model="input"
                :options="options"
                :schema="inputSchema"
                multiple
                name="currency"
                placeholder="Select a currency"
              />
            </Form>
          </template>

          <script setup lang="ts">
          import { CurrencyPicker, Form } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
          import { z } from "zod";

          import type { CurrencyOption } from "@prefabs.tech/vue3-form";

          const input = ref();

          const inputSchema = z.preprocess(
            (value) => (value === null || value === undefined ? [] : value),
            z
              .array(z.string())
              .min(1, { message: "Please select at least one valid option" })
          );

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
            { code: "DZD", label: "Algerian dinar", value: "DZD" },
            {
              code: "ZAR",
              label: "South African Rand",
              value: "ZAR",
            },
            { code: "NPR", label: "Nepalese rupee", symbol: "Rs", value: "NPR" },
          ] as CurrencyOption[];
          <\/script>
        `,-1)]]),_:1})])]),o[30]||=t(),e(y,{"events-data":A.value,"props-data":M.value,"props-table-title":a.$t(`common.properties`,{value:`CurrencyPickerProperties`}),"slots-data":N.value},null,8,[`events-data`,`props-data`,`props-table-title`,`slots-data`]),o[31]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[24]||=[t(`
      interface CurrencyOption extends SelectOption {
        code?: string;
        symbol?: string;
      }
    `,-1)]]),_:1})]),_:1},8,[`subtitle`,`title`])}}});export{D as default};
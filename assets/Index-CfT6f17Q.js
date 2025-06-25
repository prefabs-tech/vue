import{H as p,a as b}from"./DzangolabVue3Form.es-D0sA9VA1.js";import{d as f,J as U,M as P,L as c,I as D,e as S,o as g,i as s,E as l,f as n,t as d,g as t,u,x as $}from"./index-_J_htfkm.js";import{_ as C}from"./FormPage.vue_vue_type_style_index_0_lang-CbtKuUuM.js";const B={class:"section-content"},O={class:"section-content"},E={class:"section-content"},J={class:"section-content"},V={class:"section-content"},A={name:"CurrencyPickerDemo"},G=f({...A,setup(Y){const{t:v}=U(),r=P({basic:void 0,multiselect:void 0,selectOptionsInput:void 0,selectWithOrder:void 0,validationInput:void 0}),y=c.preprocess(o=>o??[],c.array(c.string()).min(1,{message:v("form.errors.currencyPicker.invalid")})),i=[{code:"AUD",label:"Australian Dollar",symbol:"$",value:"AUD"},{code:"GBP",label:"British Pound",symbol:"£",value:"GBP"},{code:"EUR",disabled:!0,label:"Euro",symbol:"€",value:"EUR"},{code:"JPY",label:"Japanese Yen",symbol:"¥",value:"JPY"},{code:"USD",label:"US Dollar",symbol:"$",value:"USD"}];return(o,e)=>{const m=D("SshPre");return g(),S(C,{title:o.$t("form.label.currencyPicker"),class:"demo"},{toolbar:s(()=>[t(u($),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=a=>o.$router.push("/form"))},null,8,["label"])]),default:s(()=>[e[21]||(e[21]=l()),n("section",null,[n("h2",null,d(o.$t("form.label.basicInput")),1),e[8]||(e[8]=l()),n("div",B,[t(u(p),{modelValue:r.basic,"onUpdate:modelValue":e[1]||(e[1]=a=>r.basic=a),options:i,placeholder:o.$t("form.placeholder.currency")},null,8,["modelValue","placeholder"]),e[7]||(e[7]=l()),t(m,{language:"html-vue"},{default:s(()=>e[6]||(e[6]=[l(`
          <template>
            <CurrencyPicker
              v-model="input"
              :options="options"
              placeholder="Select a currency"
            />
          </template>

          <script setup lang="ts">
          import { CurrencyPicker } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          import type { CurrencyOption } from "@dzangolab/vue3-form";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
          ] as CurrencyOption[];
          <\/script>
        `)])),_:1})])]),e[22]||(e[22]=l()),n("section",null,[n("h2",null,d(o.$t("form.label.selectLabelOrder")),1),e[11]||(e[11]=l()),n("div",O,[t(u(p),{modelValue:r.selectWithOrder,"onUpdate:modelValue":e[2]||(e[2]=a=>r.selectWithOrder=a),"option-label-order":["symbol","label","code"],options:i,placeholder:o.$t("form.placeholder.currency")},null,8,["modelValue","placeholder"]),e[10]||(e[10]=l()),t(m,{language:"html-vue"},{default:s(()=>e[9]||(e[9]=[l(`
          <template>
            <CurrencyPicker
              v-model="input"
              :option-label-order="['symbol', 'label', 'code']"
              :options="options"
              placeholder="Select a currency"
            />
          </template>

          <script setup lang="ts">
          import { CurrencyPicker } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          import type { CurrencyOption } from "@dzangolab/vue3-form";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
          ] as CurrencyOption[];
          <\/script>
        `)])),_:1})])]),e[23]||(e[23]=l()),n("section",null,[n("h2",null,d(o.$t("form.label.multiselect")),1),e[14]||(e[14]=l()),n("div",E,[t(u(p),{modelValue:r.multiselect,"onUpdate:modelValue":e[3]||(e[3]=a=>r.multiselect=a),options:i,placeholder:o.$t("form.placeholder.currency"),multiple:""},null,8,["modelValue","placeholder"]),e[13]||(e[13]=l()),t(m,{language:"html-vue"},{default:s(()=>e[12]||(e[12]=[l(`
          <template>
            <CurrencyPicker
              v-model="input"
              :options="options"
              multiple
              placeholder="Select a currency"
            />
          </template>

          <script setup lang="ts">
          import { CurrencyPicker } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          import type { CurrencyOption } from "@dzangolab/vue3-form";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
          ] as CurrencyOption[];
          <\/script>
        `)])),_:1})])]),e[24]||(e[24]=l()),n("section",null,[n("h2",null,d(o.$t("form.label.withSelectOptions")),1),e[17]||(e[17]=l()),n("div",J,[t(u(b),null,{default:s(()=>[t(u(p),{modelValue:r.selectOptionsInput,"onUpdate:modelValue":e[4]||(e[4]=a=>r.selectOptionsInput=a),options:i,placeholder:o.$t("form.placeholder.currency"),"selection-options":{hasSortedOptions:!1,maxSelection:3,minSelection:2,showRemoveSelection:!0},multiple:""},null,8,["modelValue","placeholder"])]),_:1}),e[16]||(e[16]=l()),t(m,{language:"html-vue"},{default:s(()=>e[15]||(e[15]=[l(`
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
                }"
                multiple
                placeholder="Select a currency"
              />
            </Form>
          </template>

          <script setup lang="ts">
          import { CurrencyPicker, Form } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          import type { CurrencyOption } from "@dzangolab/vue3-form";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
          ] as CurrencyOption[];
          <\/script>
        `)])),_:1})])]),e[25]||(e[25]=l()),n("section",null,[n("h2",null,d(o.$t("form.label.customValidationInput")),1),e[20]||(e[20]=l()),n("div",V,[t(u(b),null,{default:s(()=>[t(u(p),{modelValue:r.validationInput,"onUpdate:modelValue":e[5]||(e[5]=a=>r.validationInput=a),options:i,placeholder:o.$t("form.placeholder.currency"),schema:u(y),multiple:""},null,8,["modelValue","placeholder","schema"])]),_:1}),e[19]||(e[19]=l()),t(m,{language:"html-vue"},{default:s(()=>e[18]||(e[18]=[l(`
          <template>
            <Form>
              <CurrencyPicker
                v-model="input"
                :options="options"
                :schema="inputSchema"
                multiple
                placeholder="Select a currency"
              />
            </Form>
          </template>

          <script setup lang="ts">
          import { CurrencyPicker, Form } from "@dzangolab/vue3-form";
          import { ref } from "vue";
          import { z } from "zod";

          import type { CurrencyOption } from "@dzangolab/vue3-form";

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
          ] as CurrencyOption[];
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{G as default};

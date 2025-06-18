import{B as p,U as b}from"./DzangolabVue3Form.es-zgb0MArI.js";import{d as f,L as U,N as P,M as c,K as S,f as D,o as g,i as s,E as l,g as o,t as d,h as t,u,x as $}from"./index-DuON4g_W.js";import{_ as C}from"./FormPage.vue_vue_type_style_index_0_lang-4uJNg6tI.js";const h={class:"section-content"},B={class:"section-content"},O={class:"section-content"},E={class:"section-content"},V={class:"section-content"},A={class:"section-content"},J={name:"CurrencyPickerDemo"},G=f({...J,setup(Y){const{t:v}=U(),r=P({basic:void 0,multiselect:void 0,selectOptionsInput:void 0,selectWithOrder:void 0,selectWithSearch:void 0,validationInput:void 0}),y=c.preprocess(n=>n??[],c.array(c.string()).min(1,{message:v("form.errors.currencyPicker.invalid")})),i=[{code:"AUD",label:"Australian Dollar",symbol:"$",value:"AUD"},{code:"GBP",label:"British Pound",symbol:"£",value:"GBP"},{code:"EUR",disabled:!0,label:"Euro",symbol:"€",value:"EUR"},{code:"JPY",label:"Japanese Yen",symbol:"¥",value:"JPY"},{code:"USD",label:"US Dollar",symbol:"$",value:"USD"}];return(n,e)=>{const m=S("SshPre");return g(),D(C,{title:n.$t("form.label.currencyPicker"),class:"demo"},{toolbar:s(()=>[t(u($),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=a=>n.$router.push("/form"))},null,8,["label"])]),default:s(()=>[e[25]||(e[25]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.basicInput")),1),e[9]||(e[9]=l()),o("div",h,[t(u(p),{modelValue:r.basic,"onUpdate:modelValue":e[1]||(e[1]=a=>r.basic=a),options:i,placeholder:n.$t("form.placeholder.currency")},null,8,["modelValue","placeholder"]),e[8]||(e[8]=l()),t(m,{language:"html-vue"},{default:s(()=>e[7]||(e[7]=[l(`
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
        `)])),_:1})])]),e[26]||(e[26]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.withSearch")),1),e[12]||(e[12]=l()),o("div",B,[t(u(p),{modelValue:r.selectWithSearch,"onUpdate:modelValue":e[2]||(e[2]=a=>r.selectWithSearch=a),options:i,placeholder:n.$t("form.placeholder.currency"),"enable-search":""},null,8,["modelValue","placeholder"]),e[11]||(e[11]=l()),t(m,{language:"html-vue"},{default:s(()=>e[10]||(e[10]=[l(`
          <template>
            <CurrencyPicker
              v-model="input"
              :options="options"
              enable-search
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
        `)])),_:1})])]),e[27]||(e[27]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.selectLabelOrder")),1),e[15]||(e[15]=l()),o("div",O,[t(u(p),{modelValue:r.selectWithOrder,"onUpdate:modelValue":e[3]||(e[3]=a=>r.selectWithOrder=a),"option-label-order":["symbol","label","code"],options:i,placeholder:n.$t("form.placeholder.currency"),"enable-search":""},null,8,["modelValue","placeholder"]),e[14]||(e[14]=l()),t(m,{language:"html-vue"},{default:s(()=>e[13]||(e[13]=[l(`
          <template>
            <CurrencyPicker
              v-model="input"
              :option-label-order="['symbol', 'label', 'code']"
              :options="options"
              enable-search
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
        `)])),_:1})])]),e[28]||(e[28]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.multiselect")),1),e[18]||(e[18]=l()),o("div",E,[t(u(p),{modelValue:r.multiselect,"onUpdate:modelValue":e[4]||(e[4]=a=>r.multiselect=a),options:i,placeholder:n.$t("form.placeholder.currency"),"enable-search":"",multiple:""},null,8,["modelValue","placeholder"]),e[17]||(e[17]=l()),t(m,{language:"html-vue"},{default:s(()=>e[16]||(e[16]=[l(`
          <template>
            <CurrencyPicker
              v-model="input"
              :options="options"
              enable-search
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
        `)])),_:1})])]),e[29]||(e[29]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.withSelectOptions")),1),e[21]||(e[21]=l()),o("div",V,[t(u(b),null,{default:s(()=>[t(u(p),{modelValue:r.selectOptionsInput,"onUpdate:modelValue":e[5]||(e[5]=a=>r.selectOptionsInput=a),options:i,placeholder:n.$t("form.placeholder.currency"),"selection-options":{hasSortedOptions:!1,maxSelection:3,minSelection:2,showRemoveSelection:!0},"enable-search":"",multiple:""},null,8,["modelValue","placeholder"])]),_:1}),e[20]||(e[20]=l()),t(m,{language:"html-vue"},{default:s(()=>e[19]||(e[19]=[l(`
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
                enable-search
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
        `)])),_:1})])]),e[30]||(e[30]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.customValidationInput")),1),e[24]||(e[24]=l()),o("div",A,[t(u(b),null,{default:s(()=>[t(u(p),{modelValue:r.validationInput,"onUpdate:modelValue":e[6]||(e[6]=a=>r.validationInput=a),options:i,placeholder:n.$t("form.placeholder.currency"),schema:u(y),"enable-search":"",multiple:""},null,8,["modelValue","placeholder","schema"])]),_:1}),e[23]||(e[23]=l()),t(m,{language:"html-vue"},{default:s(()=>e[22]||(e[22]=[l(`
          <template>
            <Form>
              <CurrencyPicker
                v-model="input"
                :options="options"
                :schema="inputSchema"
                enable-search
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

<template>
  <FormPage
    :subtitle="$t('form.subtitle.countryPicker')"
    :title="$t('form.label.countryPicker')"
  >
    <template #toolbar>
      <ButtonElement
        :label="$t('common.back')"
        icon-left="pi pi-chevron-left"
        size="medium"
        variant="textOnly"
        @click="$router.push('/form')"
      />
    </template>
    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <CountryPicker
          v-model="formData.basic"
          :placeholder="$t('form.placeholder.country')"
        />
        <!-- eslint-disable -->
        <SshPre language="html-vue">
         &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              placeholder="$t('form.placeholder.country')"
            /&gt;
          &lt;/template&gt;
                  
          &lt;script setup lang="ts"&gt;
          import { CountryPicker } from '@prefabs.tech/vue3-form';
          import { ref } from 'vue';
                  
          const input = ref();
          &lt;/script&gt;
        </SshPre>    
         <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("form.label.multiselect") }}</h2>

      <div class="section-content">
        <CountryPicker
          v-model="formData.multiselect"
          :placeholder="$t('form.placeholder.countries')"
          multiple
        />
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              multiple
              placeholder="$t('form.placeholder.countries')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("form.label.customData") }}</h2>
      <div class="section-content">
        <CountryPicker
          v-model="formData.custom"
          :data="data"
          :placeholder="$t('form.placeholder.countries')"
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              :data="data"
              multiple
              placeholder="$t('form.placeholder.countries')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref&lt;string[]&gt;([]);

          const data = [
            {
              code: "US",
              i18n: {
                en: "United States of America",
              },
            },
            {
              code: "FR",
              i18n: {
                en: "France",
                fr: "France",
                th: "ฝรั่งเศส"
              },
            },
            {
              code: "JP",
              i18n: {
                en: "Japan ",
                fr: "Japon",
                th: "ญี่ปุ่น"
              }
            },
             {
              code: "XX",
              i18n: {
                en: "New Country(en)",
                fr: "New Country(fr)",
                th: "New Country(th)",
              },
            },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("form.label.include") }}</h2>
      <div class="section-content">
        <CountryPicker
          v-model="formData.includedCountries"
          :include="includedCountries"
          :placeholder="$t('form.placeholder.countries')"
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              :include="includedCountries"
              multiple
              placeholder="$t('form.placeholder.countries')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const includedCountries = ['US', 'CA', 'FR', 'AU','NP'];
          const input = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("form.label.exclude") }}</h2>
      <div class="section-content">
        <CountryPicker
          v-model="formData.excludedCountries"
          :exclude="excludedCountries"
          :include="includedCountries"
          :placeholder="$t('form.placeholder.countries')"
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              :exclude="excludedCountries"
              :include="includedCountries"
              multiple
              placeholder="$t('form.placeholder.countries')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
          
          const excludedCountries = ["US", "AU"];
          const includedCountries = ["US", "CA", "FR", "AU", "NP"];
          const input = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("form.label.customLocale") }}</h2>
      <div class="section-content">
        <CountryPicker
          v-model="formData.customLocale"
          :data="nepaliCountries"
          :include="['NP', 'US', 'CN', 'GB', 'PK', 'IN', 'LK', 'BD', 'AF']"
          :placeholder="$t('form.placeholder.countries')"
          locale="np"
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
              &lt;CountryPicker
                v-model="input"
                :data="nepaliCountries"
                :include="['NP', 'US', 'CN', 'GB', 'IN', 'PK','LK','BD','AF']"
                locale="np"
                multiple
                placeholder="$t('form.placeholder.countries')"
              /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ref } from 'vue';
          
          const input = ref();
          const nepaliCountries = [
            { code: 'NP', i18n: { np: 'नेपाल' } },
            { code: 'US', i18n: { np: 'संयुक्त राज्य अमेरिका' } },
            { code: 'CN', i18n: { np: 'चीन' } },
            { code: 'GB', i18n: { np: 'बेलायत' } },
            { code: 'IN', i18n: { np: 'भारत' } },
            { code: "PK", i18n: { np: "पाकिस्तान" } },
            { code: "LK", i18n: { np: "श्रीलंका" } },
            { code: "BD", i18n: { np: "बंगलादेश" } },
            { code: "AF", i18n: { np: "अफगानिस्तान" } },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("form.label.favorites") }}</h2>
      <div class="section-content">
        <CountryPicker
          v-model="formData.favorites"
          :exclude="['CN', 'AF']"
          :favorites="['NP', 'US', 'ID', 'QW']"
          :has-sorted-options="false"
          :include="[
            'NP',
            'US',
            'CN',
            'GB',
            'IR',
            'PK',
            'IN',
            'LK',
            'BD',
            'AF',
          ]"
          :placeholder="$t('form.placeholder.countries')"
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
              &lt;CountryPicker
                v-model="input"
                :exclude="['CN', 'AF']"
                :favorites="['NP', 'US','ID','QW]"
                :has-sorted-options="false"
                :include="['NP', 'US', 'CN', 'GB', 'PK','IR','IN', 'LK', 'BD', 'AF']"
                multiple
                placeholder="$t('form.placeholder.countries')"
              /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ref } from 'vue';
          
          const input = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>
        {{ $t("common.properties", { value: "CountryPickerProperties" }) }}
      </h2>

      <Table
        :columns-data="propsColumns"
        :data="propsData"
        :paginated="false"
        :persist-state="false"
      />
    </section>
    <section>
      <h2>{{ $t("common.events") }}</h2>

      <Table
        :columns-data="eventsColumns"
        :data="eventsData"
        :paginated="false"
        :persist-state="false"
      />
    </section>
    <section>
      <h2>{{ $t("common.type") }}</h2>
      <div class="section-content">
        <!-- eslint-disable -->
          <SshPre language="html-vue">
            interface CountryOption {
              code: string;
              i18n: {
                en: string;
                fr: string;
                th: string;
                [key: string]: string;
              };
            }
           
            interface CountryData {
              code: string;
              i18n?: Partial  &lt;CountryOption["i18n"];&gt; 
            };
        </SshPre>
          <!-- eslint-enable -->
      </div>
    </section>
  </FormPage>
</template>

<script setup lang="ts">
import { CountryPicker } from "@prefabs.tech/vue3-form";
import { Table } from "@prefabs.tech/vue3-tanstack-table";
import { ButtonElement } from "@prefabs.tech/vue3-ui";
import { reactive } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

import FormPage from "../FormPage.vue";
const propsColumns = [
  {
    accessorKey: "prop",
    header: "Property",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "default",
    header: "Default",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];

const propsData = [
  {
    default: "[]",
    description: t("form.documentation.propsDescription.select.data"),
    id: 1,
    prop: "data",
    type: "CountryOption[]",
  },
  {
    default: "[]",
    description: t("form.documentation.propsDescription.select.exclude"),
    id: 2,
    prop: "exclude",
    type: "String[]",
  },
  {
    default: "[]",
    description: t("form.documentation.propsDescription.select.favorites"),
    id: 3,
    prop: "favorites",
    type: "String[]",
  },
  {
    default: "true",
    description: t(
      "form.documentation.propsDescription.select.hasSortedOption",
    ),
    id: 4,
    prop: "has-sorted-options",
    type: "Boolean",
  },
  {
    default: "[]",
    description: t("form.documentation.propsDescription.select.include"),
    id: 5,
    prop: "include",
    type: "String[]",
  },
  {
    default: "en",
    description: t("form.documentation.propsDescription.select.locale"),
    id: 6,
    prop: "locale",
    type: "String",
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.input.modelValue"),
    id: 7,
    prop: "modelValue",
    type: "String | Number | Array<String|Number> | undefined",
  },
  {
    default: "false",
    description: t("form.documentation.propsDescription.select.multiple"),
    id: 8,
    prop: "multiple",
    type: "Boolean",
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.input.placeholder"),
    id: 9,
    prop: "placeholder",
    type: "String",
  },
];

const eventsColumns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "payload",
    header: "Payload",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];

const eventsData = [
  {
    description: t("form.documentation.eventDescription.input.modelValue"),
    name: "update:modelValue",
    payload: "string | number | (string | number)[] | undefined",
  },
];
const nepaliCountries = [
  { code: "NP", i18n: { np: "नेपाल" } },
  { code: "US", i18n: { np: "संयुक्त राज्य अमेरिका" } },
  { code: "CN", i18n: { np: "चीन" } },
  { code: "GB", i18n: { np: "बेलायत" } },
  { code: "IN", i18n: { np: "भारत" } },
  { code: "PK", i18n: { np: "पाकिस्तान" } },
  { code: "LK", i18n: { np: "श्रीलंका" } },
  { code: "BD", i18n: { np: "बंगलादेश" } },
  { code: "AF", i18n: { np: "अफगानिस्तान" } },
];

const formData = reactive({
  basic: undefined as string | undefined,
  custom: [] as string[],
  customLocale: [],
  excludedCountries: [],
  includedCountries: [],
  multiselect: [] as string[],
});
const excludedCountries = ["US", "AU"];
const includedCountries = ["US", "CA", "FR", "AU", "NP"];

const data = [
  {
    code: "US",
    i18n: {
      en: "United States of America",
      fr: "États-Unis",
      th: "สหรัฐอเมริกา",
    },
  },
  {
    code: "FR",
    i18n: {
      th: "France override",
    },
  },
  {
    code: "JP",
    i18n: {
      en: "Japan (overwritten)",
      fr: "Japon",
      th: "ญี่ปุ่น",
    },
  },
  {
    code: "XX",
    i18n: {
      fr: "New Country(fr)",
      th: "New Country(th)",
      en: "New Country(en)",
    },
  },
];
</script>

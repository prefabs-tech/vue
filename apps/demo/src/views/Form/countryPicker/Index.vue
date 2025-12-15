<template>
  <FormPage :title="$t('form.label.countryPicker')">
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
              placeholder="Select a country"
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
          :placeholder="$t('form.placeholder.country')"
          multiple
        />
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              multiple
              placeholder="Select Countries"
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
          :placeholder="$t('form.placeholder.country')"
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              :data="data"
              multiple
              placeholder="Select Countries"
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
                en: "Testland",
                fr: "Pays Test",
                th: "ประเทศทดสอบ"
              }
            },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("common.properties", { value: "DataProperties" }) }}</h2>

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
           interface Data {
            code: string;
            i18n: {
              en: string;
              fr: string;
              th: string;
            };
          }
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
    description:
      "Custom country data to overwrite existing countries or add new ones.",
    id: 1,
    prop: "data",
    type: "Data[]",
  },
  {
    default: "en",
    description:
      "Determines which translated name to display. (e.g., 'en', 'fr', 'th').",
    id: 2,
    prop: "locale",
    type: "String",
  },
  {
    default: "-",
    description: "The selected country code(s). Used with v-model..",
    id: 3,
    prop: "modelValue",
    type: "String | Number | Array<String|Number> | undefined",
  },
  {
    default: "false",
    description: "Enable multiple country selection when set to true.",
    id: 4,
    prop: "multiple",
    type: "Boolean",
  },
  {
    default: "-",
    description: "The name attribute for the input field.",
    id: 5,
    prop: "name",
    type: "String",
  },
  {
    default: "-",
    description: "Placeholder text when no country is selected.",
    id: 6,
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
    name: "update:modelValue",
    payload: "string | number | (string | number)[] | undefined",
    description: "Emitted whenever the user selects a country.",
  },
];
const formData = reactive({
  basic: undefined as string | undefined,
  multiselect: [] as string[],
  custom: [] as string[],
});

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
      en: "Testland",
      fr: "Pays Test",
      th: "ประเทศทดสอบ",
    },
  },
];
</script>

<template>
  <FormPage
    :title="$t('form.countryPicker.title')"
    :subtitle="$t('form.countryPicker.subtitle')"
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
      <h2>
        {{ $t("common.properties", { value: "Country Picker Properties" }) }}
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
    description: t("form.countryPicker.propsData.data"),
    id: 1,
    prop: "data",
    type: "Data[]",
  },
  {
    default: "en",
    description: t("form.countryPicker.propsData.locale"),
    id: 2,
    prop: "locle",
    type: "String",
  },
  {
    default: "-",
    description: t("form.countryPicker.propsData.modelValue"),
    id: 3,
    prop: "modelValue",
    type: "String | Number | Array<String|Number> | undefined",
  },
  {
    default: "false",
    description: t("form.countryPicker.propsData.multiple"),
    id: 4,
    prop: "multiple",
    type: "Boolean",
  },
  {
    default: "-",
    description: t("form.countryPicker.propsData.name"),
    id: 5,
    prop: "name",
    type: "String",
  },
  {
    default: "-",
    description: t("form.countryPicker.propsData.placeholder"),
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
    description: t("form.countryPicker.event.updateModelValue"),
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

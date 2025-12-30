<template>
  <FormPage :title="$t('form.label.select')" class="demo">
    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.noLabelInput"
          :options="options"
          :placeholder="$t('form.placeholder.country')"
        />

        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput
              v-model="input"
              :options="options"
              placeholder="Select a country"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.labelInput") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.input"
          :label="$t('form.label.country')"
          :options="options"
          :placeholder="$t('form.placeholder.country')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              label="Country"
              placeholder="Select a country"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disabled") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.disabled"
          :label="$t('form.label.country')"
          :options="options"
          :placeholder="$t('form.placeholder.country')"
          disabled
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="disabled"
              :options="options"
              disabled
              label="Country"
              placeholder="Select a country"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
  
          const disabled = ref("de");

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disableSort") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.disabledSortInput"
          :has-sorted-options="false"
          :label="$t('form.label.country')"
          :options="options"
          :placeholder="$t('form.placeholder.country')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :has-sorted-options="false"
              :options="options"
              label="Country"
              placeholder="Select a country"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disableSearch") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.disableSearchInput"
          :options="options"
          :placeholder="$t('form.placeholder.country')"
          disable-search
        />

        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput
              v-model="input"
              :options="options"
              disable-search
              placeholder="Select a country"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.withLabelValueKeys") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.labelValueKeyInput"
          :label="$t('form.label.country')"
          :options="countryOptions"
          :placeholder="$t('form.placeholder.country')"
          label-key="country"
          value-key="code"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              label="Country"
              label-key="country"
              placeholder="Select a country"
              value-key="code"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { code: "FR", country: "France" },
            { code: "DE", country: "Germany" },
            { code: "BE", country: "Belgium", disabled: true },
            { code: "NP", country: "Nepal" },
            { code: "IN", country: "India" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.withI18n") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.i18nSelect"
          :label="$t('form.label.country')"
          :options="options"
          :placeholder="$t('form.placeholder.country')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              :label="t('form.label.country')"
              :placeholder="t('form.placeholder.country')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.serverSideSelect") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.roleSelect"
          :custom-search-helper-text="$t('form.label.customSearchHelper')"
          :label="$t('form.label.role')"
          :loading="loading"
          :no-options-message="$t('form.label.noRoleOptions')"
          :options="rolesOptions"
          :placeholder="$t('form.placeholder.role')"
          enable-custom-search
          label-key="name"
          value-key="id"
          @update:search-input="fetchRoles"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :custom-search-helper-text="$t('form.label.customSearchHelper')"
              :label="$t('form.label.role')"
              :loading="loading"
              :no-options-message="$t('form.label.noRoleOptions')"
              :options="options"
              :placeholder="$t('form.placeholder.role')"
              enable-custom-search
              label-key="name"
              value-key="id"
              @update:search-input="fetchRoles"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const loading = ref&lt;boolean&gt;(false);
          const options = ref([]);

          const fetchRoles= (searchInput) => {
            loading.value = true;
            ...
            options.value = response;
            loading.value = false;
          }
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.selectExtensive") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.selectExtensive"
          :label="$t('form.label.country')"
          :options="countries"
          :placeholder="$t('form.placeholder.country')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :options="countries"
              label="Country"
              placeholder="Select a country"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          import { countries } from "../data";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.withGrouping") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.groupingSelect"
          :label="$t('form.label.country')"
          :options="groupedOptions"
          :placeholder="$t('form.placeholder.country')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              label="Country"
              placeholder="Select a country"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const options = ref([
            {
              label: t("form.label.europe"),
              options: [
                { label: t("form.label.germany"), value: "DE" },
                { label: t("form.label.france"), value: "FR" },
                { disabled: true, label: t("form.label.belgium"), value: "BE" },
              ],
            },
            {
              label: t("form.label.asia"),
              options: [
                { label: t("form.label.nepal"), value: "NP" },
                { label: t("form.label.india"), value: "IN" },
              ],
            },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.multiselect") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.multiselect"
          :label="$t('form.label.countries')"
          :options="options"
          :placeholder="$t('form.placeholder.countries')"
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              label="Countries"
              multiple
              placeholder="Select countries"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disabledMultiselect") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.disabledMultiselect"
          :label="$t('form.label.countries')"
          :options="options"
          :placeholder="$t('form.placeholder.countries')"
          disabled
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="disabled"
              :options="options"
              disabled
              label="Countries"
              multiple
              placeholder="Select countries"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const disabled = ref(["be", "de"]);

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.multiselectExtensive") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.multiselectExtensive"
          :label="$t('form.label.countries')"
          :options="countries"
          :placeholder="$t('form.placeholder.countries')"
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :options="countries"
              label="Countries"
              multiple
              placeholder="Select countries"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          import { countries } from "../data";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.multiselectWithKeys") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.multiselectKeysInput"
          :label="$t('form.label.countries')"
          :options="countryOptions"
          :placeholder="$t('form.placeholder.country')"
          label-key="country"
          multiple
          value-key="code"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              label="Countries"
              label-key="language"
              placeholder="Select a country"
              multiple
              value-key="code"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { code: "FR", country: "France" },
            { code: "DE", country: "Germany" },
            { code: "BE", country: "Belgium", disabled: true },
            { code: "NP", country: "Nepal" },
            { code: "IN", country: "India" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.withTooltip") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.tooltipMultiselect"
          :label="$t('form.label.countries')"
          :options="options"
          :placeholder="$t('form.placeholder.countries')"
          :tooltip-options="{
            offset: 16,
            position: 'top',
          }"
          class="tooltip-multiselect"
          enable-tooltip
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              :tooltip-options="{
                offset: 16,
                position: 'top',
              }"
              enable-tooltip
              label="Countries"
              multiple
              placeholder="Select countries"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.multiselectGrouping") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.multiselectGrouping"
          :label="$t('form.label.countries')"
          :options="groupedOptions"
          :placeholder="$t('form.placeholder.countries')"
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              label="Countries"
              multiple
              placeholder="Select countries"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const options = ref([
            {
              label: t("form.label.europe"),
              options: [
                { label: t("form.label.germany"), value: "DE" },
                { label: t("form.label.france"), value: "FR" },
                { disabled: true, label: t("form.label.belgium"), value: "BE" },
              ],
            },
            {
              label: t("form.label.asia"),
              options: [
                { label: t("form.label.nepal"), value: "NP" },
                { label: t("form.label.india"), value: "IN" },
              ],
            },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customOptionLabel") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.customLabelSelect"
          :label="$t('form.label.countries')"
          :options="groupedOptions"
          :placeholder="$t('form.placeholder.countries')"
          multiple
        >
          <template #group="{ label: groupLabel }">
            <span>
              <i class="pi pi-map" />
              {{ groupLabel }}
            </span>
          </template>

          <template #option="{ option }">
            <span>
              <i class="pi pi-map-marker" />
              {{ option.label }}
            </span>
          </template>
        </SelectInput>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :label="t('form.label.countries')"
              :options="options"
              :placeholder="t('form.placeholder.countries')"
              multiple
            &gt;
              &lt;template #group="{ label }"&gt;
                &lt;span&gt;
                  &lt;i class="pi pi-map" /&gt;
                  &lbrace;&lbrace; label &rbrace;&rbrace;
                &lt;/span&gt;
              &lt;/template&gt;

              &lt;template #option="{ option }"&gt;
                &lt;span&gt;
                  &lt;i class="pi pi-map-marker" /&gt;
                  &lbrace;&lbrace; option.label &rbrace;&rbrace;
                &lt;/span&gt;
              &lt;/template&gt;
            &lt;/SelectInput&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();

          const input = ref();
          const options = [
            {
              label: t("form.label.europe"),
              options: [
                { label: t("form.label.germany"), value: "DE" },
                { label: t("form.label.france"), value: "FR" },
                { disabled: true, label: t("form.label.belgium"), value: "BE" },
              ],
            },
            {
              label: t("form.label.asia"),
              options: [
                { label: t("form.label.nepal"), value: "NP" },
                { label: t("form.label.india"), value: "IN" },
              ],
            },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customSelectedLabel") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.customSelectedLabelSelect"
          :label="$t('form.label.countries')"
          :options="options"
          :placeholder="$t('form.placeholder.countries')"
          multiple
        >
          <template #selection="{ selectedLabels }">
            <div class="selected-labels">
              <BadgeComponent
                v-for="(label, index) in selectedLabels"
                :key="`custom-selected-label-${index}`"
                :label="label"
              />
            </div>
          </template>
        </SelectInput>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :label="t('form.label.countries')"
              :options="options"
              :placeholder="t('form.placeholder.countries')"
              multiple
            &gt;
              &lt;template #selection="{ selectedLabels }"&gt;
               &lt;div class="selected-labels"&gt;
                  &lt;BadgeComponent
                    v-for="(label, index) in selectedLabels" 
                    :key="`custom-selected-label-${index}`"
                    :label="label"
                  /&gt;
                &lt;/div&gt;
              &lt;/template&gt;
            &lt;/SelectInput&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.minMaxValidation") }}</h2>

      <div class="section-content">
        <Form>
          <SelectInput
            v-model="formData.inputWithMinMax"
            :label="$t('form.label.countries')"
            :max-selection="3"
            :min-selection="2"
            :options="options"
            :placeholder="$t('form.placeholder.countries')"
            multiple
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;SelectInput 
              v-model="input"
              :max-selection="3"
              :min-selection="2"
              :options="options"
              label="Countries"
              multiple
              placeholder="Select countries"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, SelectInput } from "@prefabs.tech/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customValidationInput") }}</h2>

      <div class="section-content">
        <Form>
          <SelectInput
            v-model="formData.inputWithValidation"
            :label="$t('form.label.countries')"
            :options="options"
            :placeholder="$t('form.placeholder.countries')"
            :schema="inputSchema"
            multiple
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              :schema="inputSchema"
              label="Countries"
              multiple
              placeholder="Select countries"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const inputSchema = z
            .string({invalid_type_error: "Please select at least one valid option"})
            .array()
            .min(1, { message: "Please select at least one valid option" });

            const options = ref([
              { label: "France", value: "FR" },
              { label: "Germany", value: "DE" },
              { disabled: true, label: "Belgium", value: "BE" },
              { label: "Nepal", value: "NP" },
              { label: "India", value: "IN" },
            ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </FormPage>
</template>

<script lang="ts">
export default {
  name: "SelectInputField",
};
</script>

<script setup lang="ts">
import { Form, SelectInput } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { BadgeComponent } from "@prefabs.tech/vue3-ui";
import { reactive, ref } from "vue";
import { z } from "zod";

import { countries } from "../data";
import FormPage from "../FormPage.vue";

import type { GroupedOption, SelectOption } from "@prefabs.tech/vue3-form";

const { t } = useI18n();

const inputSchema = z
  .string({ invalid_type_error: t("form.errors.multiselect.invalid") })
  .array()
  .min(1, { message: t("form.errors.multiselect.invalid") });

let formData = reactive({
  customSelectedLabelSelect: ref([]),
  customLabelSelect: ref(),
  disabled: ref("NP"),
  disabledMultiselect: ref(["FR", "NP"]),
  disableSearchInput: ref(),
  disabledSortInput: ref(),
  groupingSelect: ref(),
  i18nSelect: ref(),
  input: ref(),
  inputWithMinMax: ref([]),
  inputWithValidation: ref([]),
  labelValueKeyInput: ref(),
  multiselect: ref(),
  multiselectExtensive: ref([]),
  multiselectGrouping: ref([]),
  multiselectKeysInput: ref([]),
  noLabelInput: ref(),
  roleSelect: ref(),
  selectExtensive: ref(),
  tooltipMultiselect: ref([]),
});

const loading = ref<boolean>(false);
const rolesOptions = ref([] as SelectOption[]);

const options = ref([
  { label: t("form.label.france"), value: "FR" },
  { label: t("form.label.germany"), value: "DE" },
  { disabled: true, label: t("form.label.belgium"), value: "BE" },
  { label: t("form.label.nepal"), value: "NP" },
  { label: t("form.label.india"), value: "IN" },
] as SelectOption[]);

const countryOptions = ref([
  { code: "FR", country: t("form.label.france") },
  { code: "DE", country: t("form.label.germany") },
  { code: "BE", country: t("form.label.belgium"), disabled: true },
  { code: "NP", country: t("form.label.nepal") },
  { code: "IN", country: t("form.label.india") },
] as SelectOption[]);

const groupedOptions = ref([
  {
    label: t("form.label.europe"),
    options: [
      { label: t("form.label.germany"), value: "DE" },
      { label: t("form.label.france"), value: "FR" },
      { disabled: true, label: t("form.label.belgium"), value: "BE" },
    ],
  },
  {
    label: t("form.label.asia"),
    options: [
      { label: t("form.label.nepal"), value: "NP" },
      { label: t("form.label.india"), value: "IN" },
    ],
  },
] as GroupedOption[]);

const fetchRoles = async (searchInput?: string) => {
  const payload = {
    filters: {
      OR: [],
    },
  };

  if (searchInput?.trim()) {
    payload.filters.OR.push({
      key: "name",
      operator: "ct",
      value: searchInput,
    });
  }

  if (formData?.roleSelect) {
    payload.filters.OR.push({
      key: "id",
      operator: "in",
      value: formData?.roleSelect,
    });
  }

  loading.value = true;

  const roles = [
    { id: "1", name: "Superadmin" },
    { id: "2", name: "Admin" },
    { disabled: true, id: "3", name: "Guest" },
    { id: "4", name: "Maintainer" },
    { id: "5", name: "User" },
  ];

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const filtered = roles.filter((role) =>
    payload.filters.OR.some((filter) => {
      if (filter.key === "name" && filter.operator === "ct") {
        return String(role.name)
          .toLowerCase()
          .includes(String(filter.value).toLowerCase());
      }

      if (filter.key === "id" && filter.operator === "in") {
        return filter.value.includes(role.id);
      }

      return false;
    }),
  );

  rolesOptions.value = filtered;
  loading.value = false;
};

fetchRoles();
</script>

<style lang="css">
@import "../../../assets/css/form/select.css";
</style>

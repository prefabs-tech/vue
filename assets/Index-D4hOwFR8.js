import{D as e,E as t,On as n,St as r,_ as i,g as a,gn as o,k as s,mt as c,qt as l,tr as u,v as d,vn as f}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{S as p,d as m,o as h}from"./PrefabsTechVue3UI.es-CXZdzPpN.js";import{E as g,S as _}from"./PrefabsTechVue3Layout.es-ByeEwOwS.js";import{_ as v,p as y}from"./PrefabsTechVue3TanstackTable.es-CqNazKU2.js";import{t as b}from"./ComponentDocumentation-BPcopVAa.js";import{t as x}from"./UiPage-3Ir0VIur.js";var S={class:`section-content`},C={class:`section-content`},w={class:`section-content`},T={class:`section-content`},E={class:`demo-stepper-content-wrapper`},D={class:`demo-stepper-buttons-wrapper`},O={class:`section-content`},k={class:`demo-stepper-wrapper`},A={class:`demo-stepper-content-actions`},j={class:`demo-stepper-content-wrapper`},M={class:`demo-stepper-buttons-wrapper`},N=s({name:`StepperDemo`,setup(s){let{t:N}=g(),P=_(),F=f(0),I=f(0),L=o({name:null,phone:null,price:`$50`}),R=[{label:`Personal`},{label:`Children`},{label:`Payment`},{label:`Confirmation`}],z={iconRight:`pi pi-chevron-right`,label:`Next`,severity:`primary`,variant:`filled`},B={iconLeft:`pi pi-chevron-left`,label:`Back`,severity:`secondary`,variant:`filled`},V=[{content:`Please enter your personal details`,label:`Personal`,step:1,subtitle:`Personal information`},{content:`Please enter your contact details`,label:`Contact`,step:2,subtitle:`Contact information`},{content:`Please enter your payment details`,label:`Payment`,step:3,subtitle:`Payment information`},{content:`Confirm your details`,label:`Confirmation`,step:4,subtitle:`Confirm your details`}],H=a(()=>[{description:N(`ui.stepper.documentation.eventDescription.complete`),name:`complete`,payload:`-`},{description:N(`ui.stepper.documentation.eventDescription.updateActiveIndex`),name:`update:activeIndex`,payload:`activeIndex: number`}]),U=a(()=>[{default:`-`,description:N(`ui.stepper.documentation.propsDescription.activeIndex`),prop:`activeIndex`,type:`Number`},{default:`start`,description:N(`ui.stepper.documentation.propsDescription.align`),prop:`align`,type:`start | center | end`},{default:`horizontal`,description:N(`ui.stepper.documentation.propsDescription.direction`),prop:`direction`,type:`horizontal | vertical`},{default:`false`,description:N(`ui.stepper.documentation.propsDescription.hideButtons`),prop:`hideButtons`,type:`Boolean`},{default:`-`,description:N(`ui.stepper.documentation.propsDescription.nextButton`),prop:`nextButtonProperties`,type:`ActionButtonProperties`},{default:`-`,description:N(`ui.stepper.documentation.propsDescription.previousButton`),prop:`previousButtonProperties`,type:`ActionButtonProperties`},{default:`-`,description:N(`ui.stepper.documentation.propsDescription.steps`),prop:`steps`,type:`Array<StepProperties>`}]),W=a(()=>[{description:N(`ui.stepper.documentation.slotDescription.step`),name:`{step}`}]),G=()=>{P.push({name:`ui`})},K=()=>{F.value<R.length-1&&F.value++},q=()=>{F.value>0&&F.value--},J=()=>{I.value<R.length-1&&I.value++},Y=()=>{I.value>0&&I.value--},X=e=>{switch(e){case 0:return`Personal details`;case 1:return`Family details`;case 2:return`Payment details`;case 3:return`Confirm submit`}};return(a,o)=>{let s=r(`SshPre`);return c(),d(x,{subtitle:a.$t(`ui.stepper.subtitle`),title:a.$t(`ui.stepper.title`),class:`demo-stepper`},{default:l(()=>[i(`section`,null,[i(`h2`,null,u(a.$t(`ui.stepper.usage.basic`)),1),o[5]||=t(),i(`div`,S,[e(n(p),{steps:V,onComplete:G}),o[4]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[3]||=[t(`
          <template>
            <Stepper :steps="steps" @complete="onFinish" />
          </template>

          <script setup lang="ts">
          import { Stepper } from "@prefabs.tech/vue3-ui";

          import { useRouter } from "vue-router";

          const router = useRouter();

          const steps = [
            {
              content: "Please enter your personal details",
              label: "Personal",
              step: 1,
              subtitle: "Personal information",
            },
            {
              content: "Please enter your contact details",
              label: "Contact",
              step: 2,
              subtitle: "Contact information",
            },
            {
              content: "Please enter your payment details",
              label: "Payment",
              step: 3,
              subtitle: "Payment information",
            },
            {
              content: "Confirm your details",
              label: "Confirmation",
              step: 4,
              subtitle: "Confirm your details",
            },
          ];

          const onFinish = () => {
            router.push({ name: "ui" });
          };
          <\/script>
        `,-1)]]),_:1})])]),o[29]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`ui.stepper.usage.vertical`)),1),o[8]||=t(),i(`div`,C,[e(n(p),{direction:`vertical`,steps:V}),o[7]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[6]||=[t(`
          <template>
            <Stepper direction="vertical" :steps="steps" />
          </template>

          <script setup lang="ts">
          import { Stepper } from "@prefabs.tech/vue3-ui";

          import { useRouter } from "vue-router";

          const router = useRouter();

          const steps = [
            ...
          ];

          const onFinish = () => {
            router.push({ name: "ui" });
          };
          <\/script>
        `,-1)]]),_:1})])]),o[30]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`ui.stepper.usage.withSlot`)),1),o[14]||=t(),i(`div`,w,[e(n(p),{"next-button-properties":z,"previous-button-properties":B,steps:V},{1:l(()=>[e(n(y),{modelValue:L.name,"onUpdate:modelValue":o[0]||=e=>L.name=e,label:a.$t(`ui.stepper.label.name`),placeholder:a.$t(`ui.stepper.placeholder.name`),name:`name`},null,8,[`modelValue`,`label`,`placeholder`])]),2:l(()=>[e(n(v),{modelValue:L.phone,"onUpdate:modelValue":o[1]||=e=>L.phone=e,label:a.$t(`ui.stepper.label.phone`),placeholder:a.$t(`ui.stepper.placeholder.phone`),name:`phone`},null,8,[`modelValue`,`label`,`placeholder`])]),3:l(()=>[e(n(y),{modelValue:L.price,"onUpdate:modelValue":o[2]||=e=>L.price=e,label:a.$t(`ui.stepper.label.price`),disabled:``,name:`price`},null,8,[`modelValue`,`label`])]),4:l(()=>[t(u(a.$t(`ui.stepper.usage.complete`)),1)]),_:1}),o[13]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[12]||=[t(`
          <template>
            <Stepper
              :next-button-properties="nextButtonProperties"
              :previous-button-properties="previousButtonProperties"
              :steps="steps"
            >
            <!-- Slot for rendering custom content with step in the \`steps\` prop -->
            <template #1>
              <TextInput
                v-model="formData.name"
                :label="$t('ui.stepper.label.name')"
                :placeholder="$t('ui.stepper.placeholder.name')"
                name="name"
              />
            </template>
            <template #2>
              <NumberInput
                v-model="formData.phone"
                :label="$t('ui.stepper.label.phone')"
                :placeholder="$t('ui.stepper.placeholder.phone')"
                name="phone"
              />
            </template>
            <template #3>
              <TextInput
                v-model="formData.price"
                disabled
                :label="$t('ui.stepper.label.price')"
                name="price"
              />
            </template>
            <template #4>
              {{{ t('ui.stepper.usage.complete') }}
            </template>
            </Stepper>
          </template>

          <script setup lang="ts">
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { TextInput, NumberInput } from "@prefabs.tech/vue3-form";
          import { Stepper } from "@prefabs.tech/vue3-ui";

          import { reactive } from "vue";

          const { t } = useI18n();

          const nextButtonProperties = {
            iconRight: "pi pi-chevron-right",
            label: "Next",
            severity: "primary",
            variant: "filled",
          };

          const previousButtonProperties = {
            iconLeft: "pi pi-chevron-left",
            label: "Back",
            severity: "secondary",
            variant: "filled",
          };

          const steps = [
            {
              content: "Please enter personal details",
              label: "Personal",
              step: 1,
            },
            ...
          ];

          const formData = reactive({
            name: null,
            phone: null,
            price: "$50",
          });
          <\/script>
        `,-1)]]),_:1})])]),o[31]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`ui.stepper.usage.controlled`)),1),o[20]||=t(),i(`div`,T,[e(n(p),{"active-index":F.value,steps:R,"hide-buttons":``},null,8,[`active-index`]),o[17]||=t(),i(`div`,E,u(X(F.value)),1),o[18]||=t(),i(`div`,D,[e(n(h),{disabled:F.value===0,label:a.$t(`ui.stepper.label.previous`),variant:`outlined`,onClick:q},null,8,[`disabled`,`label`]),o[15]||=t(),e(n(h),{label:a.$t(`ui.stepper.label.next`),onClick:K},null,8,[`label`])]),o[19]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[16]||=[t(`
          <template>
            <Stepper
              :active-index="activeIndex"
              :steps="list"
              hide-buttons
            />

            <div class="demo-stepper-content-wrapper">
              {{ renderStepContent(activeIndex) }}
            </div>

            <div class="demo-stepper-buttons-wrapper">
              <ButtonElement
                :disabled="activeIndex === 0"
                label="Previous"
                variant="outlined"
                @click="onPrevious"
              />
              <ButtonElement
                label="Next"
                @click="onNext"
              />
            </div>
          </template>

          <script setup lang="ts">
          import { Stepper } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const activeIndex = ref<number>(0);

          const list = [
            {
              label: "Personal",
            },
            {
              label: "Children",
            },
            {
              label: "Payment",
            },
            {
              label: "Confirmation",
            },
          ];

          const onNext = () => {
            if (activeIndex.value < (list.length - 1)) {
              activeIndex.value++;
            }
          };

          const onPrevious = () => {
            if (activeIndex.value > 0) {
              activeIndex.value--;
            }
          };

          const renderStepContent = (step: number) => {
            switch (step) {
              case 0:
                return "Personal details";
              case 1:
                return "Family details";
              case 2:
                return "Payment details";
              case 3:
                return "Confirm submit";
            }
          };
          <\/script>
        `,-1)]]),_:1})])]),o[32]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`ui.stepper.usage.verticalControlled`)),1),o[27]||=t(),i(`div`,O,[i(`div`,k,[e(n(p),{"active-index":I.value,steps:V,direction:`vertical`,"hide-buttons":``},null,8,[`active-index`]),o[23]||=t(),e(n(m),{orientation:`vertical`}),o[24]||=t(),i(`div`,A,[i(`div`,j,[i(`h3`,null,u(X(I.value)),1)]),o[22]||=t(),i(`div`,M,[e(n(h),{disabled:I.value===0,label:a.$t(`ui.stepper.label.previous`),variant:`outlined`,onClick:Y},null,8,[`disabled`,`label`]),o[21]||=t(),e(n(h),{label:a.$t(`ui.stepper.label.next`),onClick:J},null,8,[`label`])])])]),o[26]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[25]||=[t(`
          <template>
            <Stepper
              :active-index="activeIndex"
              :steps="steps"
              direction="vertical"
              hide-buttons
            />

            <Divider orientation="vertical" />
            <div class="demo-stepper-content-actions">
              <div class="demo-stepper-content-wrapper">
                {{ renderStepContent(activeIndex) }}
              </div>

              <div class="demo-stepper-buttons-wrapper">
                <ButtonElement
                  :disabled="activeIndex === 0"
                  label="Previous"
                  variant="outlined"
                  @click="onPrevious"
                />
                <ButtonElement
                  :disabled="activeIndex === list.length - 1"
                  label="Next"
                  @click="onNext"
                />
              </div>
            </div>
          </template>

          <script setup lang="ts">
          import { Stepper } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const activeIndex = ref<number>(0);

          const steps = [
            ...
          ];

          const onNext = () => {
            if (activeIndex.value < (list.length - 1)) {
              activeIndex.value++;
            }
          };

          const onPrevious = () => {
            if (activeIndex.value > 0) {
              activeIndex.value--;
            }
          };

          const renderStepContent = (step: number) => {
            switch (step) {
              case 0:
                return "Personal details";
              case 1:
                return "Family details";
              case 2:
                return "Payment details";
              case 3:
                return "Confirm submit";
            }
          };
          <\/script>
        `,-1)]]),_:1})])]),o[33]||=t(),e(b,{"events-data":H.value,"props-data":U.value,"props-table-title":a.$t(`common.properties`,{value:`StepperProperties`}),"slots-data":W.value},null,8,[`events-data`,`props-data`,`props-table-title`,`slots-data`]),o[34]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[28]||=[t(`
      interface StepProperties {
        completedStepIcon?: string | VNode;
        content?: string | VNode;
        label?: string;
        step?: number | string;
        subtitle?: string;
      }

      interface ActionButtonProperties {
        disabled?: boolean;
        iconLeft?: string;
        iconRight?: string;
        label?: string;
        rounded?: boolean;
        severity?: string;
        size?: string;
        variant?: string;
      }
    `,-1)]]),_:1})]),_:1},8,[`subtitle`,`title`])}}});export{N as default};
import{k as y,a as R}from"./PrefabsTechVue3Form.es-YWbeJ84q.js";import{d as F,I as A,a7 as E,r as x,M as T,J as z,e as L,o as U,i as r,f as n,B as t,h as s,t as p,u as i,a8 as v,q as f,a4 as q}from"./index-C5zGulgF.js";import{_ as J}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-BDzjmLbl.js";import{_ as M}from"./UiPage.vue_vue_type_style_index_0_lang-BBLcZp8y.js";import"./PrefabsTechVue3TanstackTable.es-BA0U01gP.js";const j={class:"section-content"},G={class:"section-content"},H={class:"section-content"},K={class:"section-content"},O={class:"demo-stepper-content-wrapper"},Q={class:"demo-stepper-buttons-wrapper"},W={class:"section-content"},X={class:"demo-stepper-wrapper"},Y={class:"demo-stepper-content-actions"},Z={class:"demo-stepper-content-wrapper"},_={class:"demo-stepper-buttons-wrapper"},re=F({__name:"Index",setup(ee){const{t:l}=A(),I=E(),a=x(0),u=x(0),d=T({name:null,phone:null,price:"$50"}),C=[{description:l("ui.stepper.documentation.eventDescription.complete"),name:"complete",payload:"-"},{description:l("ui.stepper.documentation.eventDescription.updateActiveIndex"),name:"update:activeIndex",payload:"activeIndex: number"}],P=[{label:"Personal"},{label:"Children"},{label:"Payment"},{label:"Confirmation"}],h={iconRight:"pi pi-chevron-right",label:"Next",severity:"primary",variant:"filled"},S={iconLeft:"pi pi-chevron-left",label:"Back",severity:"secondary",variant:"filled"},$=[{default:"-",description:l("ui.stepper.documentation.propsDescription.activeIndex"),prop:"activeIndex",type:"Number"},{default:"start",description:l("ui.stepper.documentation.propsDescription.start"),prop:"align",type:"start | center | end"},{default:"horizontal",description:l("ui.stepper.documentation.propsDescription.direction"),prop:"direction",type:"horizontal | vertical"},{default:"false",description:l("ui.stepper.documentation.propsDescription.hideButtons"),prop:"hideButtons",type:"Boolean"},{default:"-",description:l("ui.stepper.documentation.propsDescription.nextButton"),prop:"nextButtonProperties",type:"ActionButtonProperties"},{default:"-",description:l("ui.stepper.documentation.propsDescription.previousButton"),prop:"previousButtonProperties",type:"ActionButtonProperties"},{default:"-",description:l("ui.stepper.documentation.propsDescription.steps"),prop:"steps",type:"Array<StepProperties>"}],B=[{description:l("ui.stepper.documentation.slotDescription.step"),name:"{step}"}],b=[{content:"Please enter your personal details",label:"Personal",step:1,subtitle:"Personal information"},{content:"Please enter your contact details",label:"Contact",step:2,subtitle:"Contact information"},{content:"Please enter your payment details",label:"Payment",step:3,subtitle:"Payment information"},{content:"Confirm your details",label:"Confirmation",step:4,subtitle:"Confirm your details"}],D=()=>{I.push({name:"ui"})},N=()=>{a.value<P.length-1&&a.value++},w=()=>{a.value>0&&a.value--},k=()=>{u.value<P.length-1&&u.value++},V=()=>{u.value>0&&u.value--},g=o=>{switch(o){case 0:return"Personal details";case 1:return"Family details";case 2:return"Payment details";case 3:return"Confirm submit"}};return(o,e)=>{const m=z("SshPre");return U(),L(M,{subtitle:o.$t("ui.stepper.subtitle"),title:o.$t("ui.stepper.title"),class:"demo-stepper"},{default:r(()=>[n("section",null,[n("h2",null,p(o.$t("ui.stepper.usage.basic")),1),e[5]||(e[5]=t()),n("div",j,[s(i(v),{steps:b,onComplete:D}),e[4]||(e[4]=t()),s(m,{language:"html-vue"},{default:r(()=>e[3]||(e[3]=[t(`
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
        `)])),_:1})])]),e[29]||(e[29]=t()),n("section",null,[n("h2",null,p(o.$t("ui.stepper.usage.vertical")),1),e[8]||(e[8]=t()),n("div",G,[s(i(v),{direction:"vertical",steps:b}),e[7]||(e[7]=t()),s(m,{language:"html-vue"},{default:r(()=>e[6]||(e[6]=[t(`
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
        `)])),_:1})])]),e[30]||(e[30]=t()),n("section",null,[n("h2",null,p(o.$t("ui.stepper.usage.withSlot")),1),e[14]||(e[14]=t()),n("div",H,[s(i(v),{"next-button-properties":h,"previous-button-properties":S,steps:b},{1:r(()=>[s(i(y),{modelValue:d.name,"onUpdate:modelValue":e[0]||(e[0]=c=>d.name=c),label:o.$t("ui.stepper.label.name"),placeholder:o.$t("ui.stepper.placeholder.name"),name:"name"},null,8,["modelValue","label","placeholder"])]),2:r(()=>[s(i(R),{modelValue:d.phone,"onUpdate:modelValue":e[1]||(e[1]=c=>d.phone=c),label:o.$t("ui.stepper.label.phone"),placeholder:o.$t("ui.stepper.placeholder.phone"),name:"phone"},null,8,["modelValue","label","placeholder"])]),3:r(()=>[s(i(y),{modelValue:d.price,"onUpdate:modelValue":e[2]||(e[2]=c=>d.price=c),label:o.$t("ui.stepper.label.price"),disabled:"",name:"price"},null,8,["modelValue","label"])]),4:r(()=>[t(p(o.$t("ui.stepper.usage.complete")),1)]),_:1}),e[13]||(e[13]=t()),s(m,{language:"html-vue"},{default:r(()=>e[12]||(e[12]=[t(`
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
        `)])),_:1})])]),e[31]||(e[31]=t()),n("section",null,[n("h2",null,p(o.$t("ui.stepper.usage.controlled")),1),e[20]||(e[20]=t()),n("div",K,[s(i(v),{"active-index":a.value,steps:P,"hide-buttons":""},null,8,["active-index"]),e[17]||(e[17]=t()),n("div",O,p(g(a.value)),1),e[18]||(e[18]=t()),n("div",Q,[s(i(f),{disabled:a.value===0,label:o.$t("ui.stepper.label.previous"),variant:"outlined",onClick:w},null,8,["disabled","label"]),e[15]||(e[15]=t()),s(i(f),{label:o.$t("ui.stepper.label.next"),onClick:N},null,8,["label"])]),e[19]||(e[19]=t()),s(m,{language:"html-vue"},{default:r(()=>e[16]||(e[16]=[t(`
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
        `)])),_:1})])]),e[32]||(e[32]=t()),n("section",null,[n("h2",null,p(o.$t("ui.stepper.usage.verticalControlled")),1),e[27]||(e[27]=t()),n("div",W,[n("div",X,[s(i(v),{"active-index":u.value,steps:b,direction:"vertical","hide-buttons":""},null,8,["active-index"]),e[23]||(e[23]=t()),s(i(q),{orientation:"vertical"}),e[24]||(e[24]=t()),n("div",Y,[n("div",Z,[n("h3",null,p(g(u.value)),1)]),e[22]||(e[22]=t()),n("div",_,[s(i(f),{disabled:u.value===0,label:o.$t("ui.stepper.label.previous"),variant:"outlined",onClick:V},null,8,["disabled","label"]),e[21]||(e[21]=t()),s(i(f),{label:o.$t("ui.stepper.label.next"),onClick:k},null,8,["label"])])])]),e[26]||(e[26]=t()),s(m,{language:"html-vue"},{default:r(()=>e[25]||(e[25]=[t(`
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
        `)])),_:1})])]),e[33]||(e[33]=t()),s(J,{"events-data":C,"props-data":$,"props-table-title":o.$t("common.properties",{value:"StepperProperties"}),"slots-data":B},null,8,["props-table-title"]),e[34]||(e[34]=t()),s(m,{language:"html-vue"},{default:r(()=>e[28]||(e[28]=[t(`
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
    `)])),_:1})]),_:1},8,["subtitle","title"])}}});export{re as default};

import{N as y,$ as R}from"./PrefabsTechVue3Form.es-Di8AZxfp.js";import{d as F,I as A,a7 as z,r as x,N as E,L,e as T,o as U,j as r,C as t,f as o,h as s,t as p,u as i,a8 as c,v as b,a4 as j}from"./index-B6N9A8ln.js";import{_ as O}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-B33n00XA.js";import{_ as W}from"./UiPage.vue_vue_type_style_index_0_lang-BFxmnG7Y.js";import"./PrefabsTechVue3TanstackTable.es-CR43FMod.js";const q={class:"section-content"},G={class:"section-content"},H={class:"section-content"},J={class:"section-content"},K={class:"demo-stepper-content-wrapper"},M={class:"demo-stepper-buttons-wrapper"},Q={class:"section-content"},X={class:"demo-stepper-wrapper"},Y={class:"demo-stepper-content-actions"},Z={class:"demo-stepper-content-wrapper"},_={class:"demo-stepper-buttons-wrapper"},re=F({__name:"Index",setup(ee){const{t:l}=A(),I=z(),a=x(0),u=x(0),d=E({name:null,phone:null,price:"$50"}),C=[{description:l("ui.stepper.documentation.eventDescription.complete"),name:"complete",payload:"-"},{description:l("ui.stepper.documentation.eventDescription.updateActiveIndex"),name:"update:activeIndex",payload:"activeIndex: number"}],P=[{label:"Personal"},{label:"Children"},{label:"Payment"},{label:"Confirmation"}],$={iconRight:"pi pi-chevron-right",label:"Next",severity:"primary",variant:"filled"},h={iconLeft:"pi pi-chevron-left",label:"Back",severity:"secondary",variant:"filled"},S=[{default:"-",description:l("ui.stepper.documentation.propsDescription.activeIndex"),prop:"activeIndex",type:"Number"},{default:"start",description:l("ui.stepper.documentation.propsDescription.start"),prop:"align",type:"start | center | end"},{default:"horizontal",description:l("ui.stepper.documentation.propsDescription.direction"),prop:"direction",type:"horizontal | vertical"},{default:"false",description:l("ui.stepper.documentation.propsDescription.hideButtons"),prop:"hideButtons",type:"Boolean"},{default:"-",description:l("ui.stepper.documentation.propsDescription.nextButton"),prop:"nextButtonProperties",type:"ActionButtonProperties"},{default:"-",description:l("ui.stepper.documentation.propsDescription.previousButton"),prop:"previousButtonProperties",type:"ActionButtonProperties"},{default:"-",description:l("ui.stepper.documentation.propsDescription.steps"),prop:"steps",type:"Array<StepProperties>"}],B=[{description:l("ui.stepper.documentation.slotDescription.step"),name:"{step}"}],f=[{content:"Please enter your personal details",label:"Personal",step:1,subtitle:"Personal information"},{content:"Please enter your contact details",label:"Contact",step:2,subtitle:"Contact information"},{content:"Please enter your payment details",label:"Payment",step:3,subtitle:"Payment information"},{content:"Confirm your details",label:"Confirmation",step:4,subtitle:"Confirm your details"}],N=()=>{I.push("/ui")},D=()=>{a.value<P.length-1&&a.value++},w=()=>{a.value>0&&a.value--},k=()=>{u.value<P.length-1&&u.value++},V=()=>{u.value>0&&u.value--},g=n=>{switch(n){case 0:return"Personal details";case 1:return"Family details";case 2:return"Payment details";case 3:return"Confirm submit"}};return(n,e)=>{const m=L("SshPre");return U(),T(W,{"sub-title":n.$t("ui.stepper.subtitle"),title:n.$t("ui.stepper.title"),class:"demo-stepper"},{toolbar:r(()=>[s(i(b),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=v=>n.$router.push("/ui"))},null,8,["label"])]),default:r(()=>[e[30]||(e[30]=t()),o("section",null,[o("h2",null,p(n.$t("ui.stepper.usage.basic")),1),e[6]||(e[6]=t()),o("div",q,[s(i(c),{steps:f,onComplete:N}),e[5]||(e[5]=t()),s(m,{language:"html-vue"},{default:r(()=>e[4]||(e[4]=[t(`
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
            router.push("/ui");
          };
          <\/script>
        `)])),_:1})])]),e[31]||(e[31]=t()),o("section",null,[o("h2",null,p(n.$t("ui.stepper.usage.vertical")),1),e[9]||(e[9]=t()),o("div",G,[s(i(c),{direction:"vertical",steps:f}),e[8]||(e[8]=t()),s(m,{language:"html-vue"},{default:r(()=>e[7]||(e[7]=[t(`
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
            router.push("/ui");
          };
          <\/script>
        `)])),_:1})])]),e[32]||(e[32]=t()),o("section",null,[o("h2",null,p(n.$t("ui.stepper.usage.withSlot")),1),e[15]||(e[15]=t()),o("div",H,[s(i(c),{"next-button-properties":$,"previous-button-properties":h,steps:f},{1:r(()=>[s(i(y),{modelValue:d.name,"onUpdate:modelValue":e[1]||(e[1]=v=>d.name=v),label:n.$t("ui.stepper.label.name"),placeholder:n.$t("ui.stepper.placeholder.name"),name:"name"},null,8,["modelValue","label","placeholder"])]),2:r(()=>[s(i(R),{modelValue:d.phone,"onUpdate:modelValue":e[2]||(e[2]=v=>d.phone=v),label:n.$t("ui.stepper.label.phone"),placeholder:n.$t("ui.stepper.placeholder.phone"),name:"phone"},null,8,["modelValue","label","placeholder"])]),3:r(()=>[s(i(y),{modelValue:d.price,"onUpdate:modelValue":e[3]||(e[3]=v=>d.price=v),label:n.$t("ui.stepper.label.price"),disabled:"",name:"price"},null,8,["modelValue","label"])]),4:r(()=>[t(p(n.$t("ui.stepper.usage.complete")),1)]),_:1}),e[14]||(e[14]=t()),s(m,{language:"html-vue"},{default:r(()=>e[13]||(e[13]=[t(`
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
        `)])),_:1})])]),e[33]||(e[33]=t()),o("section",null,[o("h2",null,p(n.$t("ui.stepper.usage.controlled")),1),e[21]||(e[21]=t()),o("div",J,[s(i(c),{"active-index":a.value,steps:P,"hide-buttons":""},null,8,["active-index"]),e[18]||(e[18]=t()),o("div",K,p(g(a.value)),1),e[19]||(e[19]=t()),o("div",M,[s(i(b),{disabled:a.value===0,label:n.$t("ui.stepper.label.previous"),variant:"outlined",onClick:w},null,8,["disabled","label"]),e[16]||(e[16]=t()),s(i(b),{label:n.$t("ui.stepper.label.next"),onClick:D},null,8,["label"])]),e[20]||(e[20]=t()),s(m,{language:"html-vue"},{default:r(()=>e[17]||(e[17]=[t(`
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
        `)])),_:1})])]),e[34]||(e[34]=t()),o("section",null,[o("h2",null,p(n.$t("ui.stepper.usage.verticalControlled")),1),e[28]||(e[28]=t()),o("div",Q,[o("div",X,[s(i(c),{"active-index":u.value,steps:f,direction:"vertical","hide-buttons":""},null,8,["active-index"]),e[24]||(e[24]=t()),s(i(j),{orientation:"vertical"}),e[25]||(e[25]=t()),o("div",Y,[o("div",Z,[o("h3",null,p(g(u.value)),1)]),e[23]||(e[23]=t()),o("div",_,[s(i(b),{disabled:u.value===0,label:n.$t("ui.stepper.label.previous"),variant:"outlined",onClick:V},null,8,["disabled","label"]),e[22]||(e[22]=t()),s(i(b),{label:n.$t("ui.stepper.label.next"),onClick:k},null,8,["label"])])])]),e[27]||(e[27]=t()),s(m,{language:"html-vue"},{default:r(()=>e[26]||(e[26]=[t(`
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
        `)])),_:1})])]),e[35]||(e[35]=t()),s(O,{"events-data":C,"props-data":S,"props-table-title":n.$t("common.properties",{value:"StepperProperties"}),"slots-data":B},null,8,["props-table-title"]),e[36]||(e[36]=t()),s(m,{language:"html-vue"},{default:r(()=>e[29]||(e[29]=[t(`
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
    `)])),_:1})]),_:1},8,["sub-title","title"])}}});export{re as default};

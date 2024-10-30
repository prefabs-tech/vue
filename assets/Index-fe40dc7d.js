import{t as b,G as $}from"./DzangolabVue3Form.es-b32b880a.js";import{d as S,b as V,e as m,r as h,o as B,c as C,w as o,a as n,t as i,f as e,g as l,h as p,ad as d,ae as D}from"./index-64e5f877.js";const I={class:"section-content"},w={class:"section-content"},N={class:"section-content"},R=S({__name:"Index",setup(_){const v=D(),a=V({name:null,phone:null,price:"$50"}),f=m({iconRight:"pi pi-chevron-right",label:"Next",severity:"primary",variant:"filled"}),g=m({iconLeft:"pi pi-chevron-left",label:"Back",severity:"secondary",variant:"filled"}),u=m([{content:"Please enter personal details",label:"Personal",step:1},{content:"Please enter contact details",label:"Contact",step:2},{content:"Please enter payment details",label:"Payment",step:3},{content:"Do you wish to continue?",label:"Confirmation",step:4}]),P=()=>{v.push("/ui")};return(t,s)=>{const c=h("SshPre"),y=h("Page");return B(),C(y,{title:t.$t("ui.stepper.title"),class:"demo"},{default:o(()=>[n("section",null,[n("h2",null,i(t.$t("ui.stepper.usage.basic")),1),e(),n("div",I,[l(c,{language:"html-vue"},{default:o(()=>[e(`
          <template>
            <Stepper :steps="steps" @complete="onFinish" />
          </template>

          <script setup lang="ts">
          import { Stepper } from "@dzangolab/vue3-ui";

          import { useRouter } from "vue-router";

          const router = useRouter();

          const steps = ref([
            {
              content: "Please enter personal details",
              label: "Personal",
              step: 1,
            },
            {
              content: "Please enter contact details",
              label: "Contact",
              step: 2,
            },
            {
              content: "Please enter payment details",
              label: "Payment",
              step: 3,
            },
            {
              content: "Do you wish to continue?",
              label: "Confirmation",
              step: 4,
            },
          ]);

          const onFinish = () => {
            router.push("/ui");
          };
          <\/script>
        `)]),_:1}),e(),l(p(d),{steps:u.value,onComplete:P},null,8,["steps"])])]),e(),n("section",null,[n("h2",null,i(t.$t("ui.stepper.usage.buttonProperties")),1),e(),n("div",w,[l(c,{language:"html-vue"},{default:o(()=>[e(`
          <template>
            <Stepper
              :next-button-properties="nextButtonProperties"
              :previous-button-properties="previousButtonProperties" 
              :steps="steps"
            />
          </template>

          <script setup lang="ts">
          import { Stepper } from "@dzangolab/vue3-ui";

          const steps = ref([
            {
              content: "Please enter personal details",
              label: "Personal",
              step: 1,
            },
            {
              content: "Please enter contact details",
              label: "Contact",
              step: 2,
            },
            {
              content: "Please enter payment details",
              label: "Payment",
              step: 3,
            },
            {
              content: "Do you wish to continue?",
              label: "Confirmation",
              step: 4,
            },
          ]);

          const nextButtonProperties = ref({
            iconRight: "pi pi-chevron-right",
            label: "Next",
            severity: "primary",
            variant: "filled",
          });

          const previousButtonProperties = ref({
            iconLeft: "pi pi-chevron-left",
            label: "Back",
            severity: 'secondary',
            variant: "filled",
          });
          <\/script>
        `)]),_:1}),e(),l(p(d),{"next-button-properties":f.value,"previous-button-properties":g.value,steps:u.value},null,8,["next-button-properties","previous-button-properties","steps"])])]),e(),n("section",null,[n("h2",null,i(t.$t("ui.stepper.usage.withSlot")),1),e(),n("div",N,[l(c,{language:"html-vue"},{default:o(()=>[e(`
          <template>
            <Stepper :steps="steps">
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
          import { useI18n } from "@dzangolab/vue3-i18n";
          import { TextInput, NumberInput } from "@dzangolab/vue3-form";
          import { Stepper } from "@dzangolab/vue3-ui";

          import { reactive, ref } from "vue";

          const { t } = useI18n();

          const steps = ref([
            {
              content: "Please enter personal details",
              label: "Personal",
              step: 1,
            },
            ...
          ]);

          const formData = reactive({
            name: null,
            phone: null,
            price: "$50",
          });
          <\/script>
        `)]),_:1}),e(),l(p(d),{steps:u.value},{1:o(()=>[l(p(b),{modelValue:a.name,"onUpdate:modelValue":s[0]||(s[0]=r=>a.name=r),label:t.$t("ui.stepper.label.name"),placeholder:t.$t("ui.stepper.placeholder.name"),name:"name"},null,8,["modelValue","label","placeholder"])]),2:o(()=>[l(p($),{modelValue:a.phone,"onUpdate:modelValue":s[1]||(s[1]=r=>a.phone=r),label:t.$t("ui.stepper.label.phone"),placeholder:t.$t("ui.stepper.placeholder.phone"),name:"phone"},null,8,["modelValue","label","placeholder"])]),3:o(()=>[l(p(b),{modelValue:a.price,"onUpdate:modelValue":s[2]||(s[2]=r=>a.price=r),label:t.$t("ui.stepper.label.price"),disabled:"",name:"price"},null,8,["modelValue","label"])]),4:o(()=>[e(i(t.$t("ui.stepper.usage.complete")),1)]),_:1},8,["steps"])])])]),_:1},8,["title"])}}});export{R as default};

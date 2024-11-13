import{r as h,e as S}from"./DzangolabVue3Form.es-ea7378a3.js";import{d as V,b as B,e as m,r as d,o as C,c as _,w as n,f as o,g as e,t as i,a as l,h as p,ad as b,ae as D}from"./index-282387c5.js";const k={class:"section-content"},I={class:"section-content"},w={class:"section-content"},R=V({__name:"Index",setup(N){const v=D(),a=B({name:null,phone:null,price:"$50"}),f=m({iconRight:"pi pi-chevron-right",label:"Next",severity:"primary",variant:"filled"}),g=m({iconLeft:"pi pi-chevron-left",label:"Back",severity:"secondary",variant:"filled"}),u=m([{content:"Please enter personal details",label:"Personal",step:1},{content:"Please enter contact details",label:"Contact",step:2},{content:"Please enter payment details",label:"Payment",step:3},{content:"Do you wish to continue?",label:"Confirmation",step:4}]),P=()=>{v.push("/ui")};return(t,s)=>{const y=d("router-link"),c=d("SshPre"),$=d("Page");return C(),_($,{title:t.$t("ui.stepper.title"),class:"demo"},{toolbar:n(()=>[o(y,{to:{name:"ui"},class:"back"},{default:n(()=>[e(i(t.$t("common.back")),1)]),_:1})]),default:n(()=>[e(),l("section",null,[l("h2",null,i(t.$t("ui.stepper.usage.basic")),1),e(),l("div",k,[o(c,{language:"html-vue"},{default:n(()=>[e(`
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
        `)]),_:1}),e(),o(p(b),{steps:u.value,onComplete:P},null,8,["steps"])])]),e(),l("section",null,[l("h2",null,i(t.$t("ui.stepper.usage.buttonProperties")),1),e(),l("div",I,[o(c,{language:"html-vue"},{default:n(()=>[e(`
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
        `)]),_:1}),e(),o(p(b),{"next-button-properties":f.value,"previous-button-properties":g.value,steps:u.value},null,8,["next-button-properties","previous-button-properties","steps"])])]),e(),l("section",null,[l("h2",null,i(t.$t("ui.stepper.usage.withSlot")),1),e(),l("div",w,[o(c,{language:"html-vue"},{default:n(()=>[e(`
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
        `)]),_:1}),e(),o(p(b),{steps:u.value},{1:n(()=>[o(p(h),{modelValue:a.name,"onUpdate:modelValue":s[0]||(s[0]=r=>a.name=r),label:t.$t("ui.stepper.label.name"),placeholder:t.$t("ui.stepper.placeholder.name"),name:"name"},null,8,["modelValue","label","placeholder"])]),2:n(()=>[o(p(S),{modelValue:a.phone,"onUpdate:modelValue":s[1]||(s[1]=r=>a.phone=r),label:t.$t("ui.stepper.label.phone"),placeholder:t.$t("ui.stepper.placeholder.phone"),name:"phone"},null,8,["modelValue","label","placeholder"])]),3:n(()=>[o(p(h),{modelValue:a.price,"onUpdate:modelValue":s[2]||(s[2]=r=>a.price=r),label:t.$t("ui.stepper.label.price"),disabled:"",name:"price"},null,8,["modelValue","label"])]),4:n(()=>[e(i(t.$t("ui.stepper.usage.complete")),1)]),_:1},8,["steps"])])])]),_:1},8,["title"])}}});export{R as default};

import{O as y,M as S,C as V,$ as A}from"./PrefabsTechVue3Form.es-B2UP_q9U.js";import{d as F,I,M as N,r as d,J as h,e as T,o as B,j as i,C as o,f as n,h as t,t as u,u as a,v as m,a7 as p,a as U,F as j,z as J}from"./index-ByOAbTJU.js";import{_ as Q}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-BgzhFPbZ.js";import{_ as q}from"./UiPage.vue_vue_type_style_index_0_lang-ZZBDoRNf.js";import"./PrefabsTechVue3TanstackTable.es-CMh5yW5H.js";const G={class:"section-content"},H={class:"container"},K={class:"section-content"},R={class:"container"},W={class:"label"},X={class:"value"},Y={class:"section-content"},Z={class:"container"},c={class:"section-content"},x={class:"container"},_={class:"section-content"},ll={class:"container"},ol={role:"heading"},ul=F({__name:"Index",setup(el){const{t:r}=I(),C=[{description:r("ui.modal.documentation.eventDescription.close"),name:"on:close",payload:"-"}],E=[{label:"Name",value:"Acer Nitro 5"},{label:"Category",value:"Laptop"},{label:"Color",value:"Black"}],L=[{default:"true",description:r("ui.modal.documentation.propsDescription.dismissOnClickOut"),prop:"dismissOnClickOut",type:"Boolean"},{default:"false",description:r("ui.modal.documentation.propsDescription.show"),prop:"show",type:"Boolean"},{default:"medium",description:r("ui.modal.documentation.propsDescription.size"),prop:"size",type:'"medium" | "large" | "auto"'},{default:"-",description:r("ui.modal.documentation.propsDescription.title"),prop:"title",type:"String"}],z=[{description:r("ui.modal.documentation.slotDescription.default"),name:"default"},{description:r("ui.modal.documentation.slotDescription.footer"),name:"footer"},{description:r("ui.modal.documentation.slotDescription.header"),name:"header"}],v=N({email:d(),password:d()}),b=d(!1),M=d(!1),$=d(!1),g=d(!1),k=d(!1),w=d(!1),D=d(!1);return(e,l)=>{const f=h("SshPre"),O=h("router-link");return B(),T(q,{"sub-title":e.$t("ui.modal.subtitle"),title:e.$t("ui.modal.title"),class:"demo-modal"},{toolbar:i(()=>[t(a(m),{label:e.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=s=>e.$router.push("/ui"))},null,8,["label"])]),default:i(()=>[l[47]||(l[47]=o()),n("section",null,[n("h2",null,u(e.$t("ui.modal.usage.basic")),1),l[21]||(l[21]=o()),n("div",G,[n("div",H,[t(a(m),{label:e.$t("ui.modal.label.show"),onClick:l[1]||(l[1]=s=>D.value=!0)},null,8,["label"])]),l[19]||(l[19]=o()),t(a(p),{show:D.value,title:e.$t("ui.modal.header.productDetail"),"onOn:close":l[2]||(l[2]=s=>D.value=!1)},{default:i(()=>[o(u(e.$t("ui.modal.content")),1)]),_:1},8,["show","title"]),l[20]||(l[20]=o()),t(f,{language:"html-vue"},{default:i(()=>l[18]||(l[18]=[o(`
          <template>
            <ButtonElement
              label="Show"
              @click="showModal = true"
            />

            <Modal
              :show="showModal"
              title="Product detail"
              @on:close="showModal = false"
            >
              Lorem ipsum...
            </Modal>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Modal } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const showModal = ref(false);
          <\/script>
        `)])),_:1})])]),l[48]||(l[48]=o()),n("section",null,[n("h2",null,u(e.$t("ui.modal.usage.disableDismiss")),1),l[26]||(l[26]=o()),n("div",K,[n("div",R,[t(a(m),{label:e.$t("ui.modal.label.viewDetail"),onClick:l[3]||(l[3]=s=>M.value=!0)},null,8,["label"])]),l[24]||(l[24]=o()),t(a(p),{"dismiss-on-click-out":!1,show:M.value,title:e.$t("ui.modal.header.productDetail"),"onOn:close":l[4]||(l[4]=s=>M.value=!1)},{default:i(()=>[(B(),U(j,null,J(E,(s,P)=>n("div",{key:P+"-"+s,class:"info"},[n("span",W,u(s.label),1),l[22]||(l[22]=o()),n("span",X,u(" : "+s.value),1)])),64))]),_:1},8,["show","title"]),l[25]||(l[25]=o()),t(f,{language:"html-vue"},{default:i(()=>l[23]||(l[23]=[o(`
          <template>
            <ButtonElement
              label="View detail"
              @click="showModal = true"
            />

            <Modal
              :dismiss-on-click-out="false"
              :show="showModal"
              title="Product detail"
              @on:close="showModal = false"
            >
              <div
                v-for="(detail, index) in productDetail"
                :key="index + '-' + detail"
                class="info"
              >
                <span class="label">{{ detail.label }}</span>
                <span class="value">{{ " : " + detail.value }}</span>
              </div>
            </Modal>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Modal } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const productDetail = [
            ...
          ];

          const showModal = ref(false);
          <\/script>
        `)])),_:1})])]),l[49]||(l[49]=o()),n("section",null,[n("h2",null,u(e.$t("ui.modal.usage.size")),1),l[34]||(l[34]=o()),n("div",Y,[n("div",Z,[t(a(m),{label:e.$t("ui.modal.label.medium"),onClick:l[5]||(l[5]=s=>k.value=!0)},null,8,["label"]),l[27]||(l[27]=o()),t(a(m),{label:e.$t("ui.modal.label.large"),onClick:l[6]||(l[6]=s=>g.value=!0)},null,8,["label"]),l[28]||(l[28]=o()),t(a(m),{label:e.$t("ui.modal.label.auto"),onClick:l[7]||(l[7]=s=>b.value=!0)},null,8,["label"])]),l[30]||(l[30]=o()),t(a(p),{show:k.value,title:e.$t("ui.modal.header.productDetail"),size:"medium","onOn:close":l[8]||(l[8]=s=>k.value=!1)},{default:i(()=>[o(u(e.$t("ui.modal.content")),1)]),_:1},8,["show","title"]),l[31]||(l[31]=o()),t(a(p),{show:g.value,title:e.$t("ui.modal.header.productDetail"),size:"large","onOn:close":l[9]||(l[9]=s=>g.value=!1)},{default:i(()=>[o(u(e.$t("ui.modal.content")),1)]),_:1},8,["show","title"]),l[32]||(l[32]=o()),t(a(p),{show:b.value,title:e.$t("ui.modal.header.productDetail"),size:"auto","onOn:close":l[10]||(l[10]=s=>b.value=!1)},{default:i(()=>[o(u(e.$t("ui.modal.content")),1)]),_:1},8,["show","title"]),l[33]||(l[33]=o()),t(f,{language:"html-vue"},{default:i(()=>l[29]||(l[29]=[o(`
          <template>
            <ButtonElement
              label="Medium"
              @click="showMediumModal = true"
            />

            <ButtonElement
              label="Large"
              @click="showLargeModal = true"
            />

            <ButtonElement
              label="Auto"
              @click="showAutoModal = true"
            />

            <Modal
              :show="showMediumModal"
              size="medium"
              title="Product detail"
              @on:close="showMediumModal = false"
            >
              Lorem ipsum...
            </Modal>

            <Modal
              :show="showLargeModal"
              size="large"
              title="Product detail"
              @on:close="showLargeModal = false"
            >
              Lorem ipsum...
            </Modal>

            <Modal
              :show="showAutoModal"
              size="auto"
              title="Product detail"
              @on:close="showAutoModal = false"
            >
              Lorem ipsum...
            </Modal>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Modal } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const showAutoModal = ref(false);
          const showLargeModal = ref(false);
          const showMediumModal = ref(false);
          <\/script>
        `)])),_:1})])]),l[50]||(l[50]=o()),n("section",null,[n("h2",null,u(e.$t("ui.confirmationModal.usage.withI18n")),1),l[38]||(l[38]=o()),n("div",c,[n("div",x,[t(a(m),{label:e.$t("ui.modal.label.show"),onClick:l[11]||(l[11]=s=>$.value=!0)},null,8,["label"])]),l[36]||(l[36]=o()),t(a(p),{show:$.value,title:e.$t("ui.modal.header.productDetail"),"onOn:close":l[12]||(l[12]=s=>$.value=!1)},{default:i(()=>[o(u(e.$t("ui.modal.content")),1)]),_:1},8,["show","title"]),l[37]||(l[37]=o()),t(f,{language:"html-vue"},{default:i(()=>l[35]||(l[35]=[o(`
          <template>
            <ButtonElement
              :label="t('ui.modal.label.show')"
              @click="showModal = true"
            />

            <Modal
              :show="showModal"
              :title="t('ui.modal.header.productDetail')"
              @on:close="showModal = false"
            >
              {{ t("ui.modal.content") }}
            </Modal>
          </template>

          <script setup lang="ts">
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { ButtonElement, Modal } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const { t } = useI18n();

          const showModal = ref(false);
          <\/script>
        `)])),_:1})])]),l[51]||(l[51]=o()),n("section",null,[n("h2",null,u(e.$t("ui.confirmationModal.usage.slots")),1),l[46]||(l[46]=o()),n("div",_,[n("div",ll,[t(a(m),{label:e.$t("ui.modal.label.login"),"icon-left":"pi pi-user",onClick:l[13]||(l[13]=s=>w.value=!0)},null,8,["label"])]),l[44]||(l[44]=o()),t(a(p),{show:w.value,"onOn:close":l[17]||(l[17]=s=>w.value=!1)},{header:i(()=>[n("span",ol,u(e.$t("ui.modal.label.login")),1)]),footer:i(()=>[t(O,{to:"/form/password-input"},{default:i(()=>[o(u(e.$t("ui.modal.label.forgotPassword")),1)]),_:1})]),default:i(()=>[l[41]||(l[41]=o()),t(a(y),{class:"login-form"},{default:i(()=>[t(a(S),{modelValue:v.email,"onUpdate:modelValue":l[14]||(l[14]=s=>v.email=s),label:e.$t("form.label.email"),placeholder:e.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"]),l[39]||(l[39]=o()),t(a(V),{modelValue:v.password,"onUpdate:modelValue":l[15]||(l[15]=s=>v.password=s),label:e.$t("form.label.password"),placeholder:e.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"]),l[40]||(l[40]=o()),t(a(A),{"submit-label":e.$t("ui.modal.label.login"),alignment:"filled",class:"login-actions",onCancel:l[16]||(l[16]=s=>w.value=!1)},null,8,["submit-label"])]),_:1}),l[42]||(l[42]=o())]),_:1},8,["show"]),l[45]||(l[45]=o()),t(f,{language:"html-vue"},{default:i(()=>l[43]||(l[43]=[o(`
          <template>
            <ButtonElement
              icon-left="pi pi-user"
              label="Login"
              @click="showModal = true"
            />

            <Modal :show="showModal" @on:close="showModal = false" >
              <template #header>
                <span role="heading">Login</span>
              </template>

              <Form>
                <Email
                  v-model="formData.email"
                  label="Email"
                  placeholder="Enter a email"
                />

                <Password
                  v-model="formData.password"
                  label="Password"
                  placeholder="Enter a password"
                />

                <FormActions
                  alignment="filled"
                  class="login-actions"
                  submit-label="Login"
                  @cancel="showSlotModal = false"
                />
              </Form>

              <template #footer>
                <router-link to="/form/password-input">
                  Forgot password?
                </router-link>
              </template>
            </Modal>
          </template>

          <script setup lang="ts">
          import { Email, Form, FormActions, Password } from "@prefabs.tech/vue3-form";
          import { ButtonElement, Modal } from "@prefabs.tech/vue3-ui";
          import { reactive, ref } from "vue";

          const formData = reactive({
            email: ref(),
            password: ref(),
          });

          const showModal = ref(false);
          <\/script>
        `)])),_:1})])]),l[52]||(l[52]=o()),t(Q,{"events-data":C,"props-data":L,"props-table-title":e.$t("common.properties",{value:"ModalProperties"}),"slots-data":z},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}});export{ul as default};

import{L as C,V,q as L,B as z}from"./DzangolabVue3Form.es-Br0A5kim.js";import{d as F,D as P,r,A as $,e as O,o as k,w as s,E as o,f as a,t as u,i as n,u as i,j as d,Y as p,a as y,F as S,y as A}from"./index-C49kGRMu.js";import{_ as I}from"./UiPage.vue_vue_type_style_index_0_lang-CawN8G72.js";const N={class:"section-content"},T={class:"section-content"},q={class:"section-content"},U={class:"label"},j={class:"value"},Y={class:"section-content"},G={class:"section-content"},H={role:"heading"},W=F({__name:"Index",setup(J){const f=P({email:r(),password:r()}),B=[{label:"Name",value:"Acer Nitro 5"},{label:"Category",value:"Laptop"},{label:"Color",value:"Black"}],w=r(!1),b=r(!1),g=r(!1),v=r(!1),M=r(!1);return(e,l)=>{const m=$("SshPre"),D=$("router-link");return k(),O(I,{title:e.$t("ui.modal.title"),class:"demo"},{toolbar:s(()=>[n(i(d),{label:e.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=t=>e.$router.push("/ui"))},null,8,["label"])]),default:s(()=>[l[39]||(l[39]=o()),a("section",null,[a("h2",null,u(e.$t("ui.modal.usage.basic")),1),l[17]||(l[17]=o()),a("div",N,[n(i(d),{label:e.$t("ui.modal.label.open"),onClick:l[1]||(l[1]=t=>g.value=!0)},null,8,["label"]),l[15]||(l[15]=o()),n(i(p),{show:g.value,"onOn:close":l[2]||(l[2]=t=>g.value=!1)},{default:s(()=>[o(u(e.$t("ui.modal.content")),1)]),_:1},8,["show"]),l[16]||(l[16]=o()),n(m,{language:"html-vue"},{default:s(()=>l[14]||(l[14]=[o(`
          <template>
            <ButtonElement
              label="Open"
              @click="showModal = true"
            />

            <Modal :show="showModal" @on:close="showModal = false" >
              Lorem ipsum...
            </Modal>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Modal } from "@dzangolab/vue3-ui";
          import { ref } from "vue";

          const showModal = ref(false);
          <\/script>
        `)])),_:1})])]),l[40]||(l[40]=o()),a("section",null,[a("h2",null,u(e.$t("ui.modal.usage.withTitle")),1),l[21]||(l[21]=o()),a("div",T,[n(i(d),{label:e.$t("ui.modal.label.show"),onClick:l[3]||(l[3]=t=>M.value=!0)},null,8,["label"]),l[19]||(l[19]=o()),n(i(p),{show:M.value,title:e.$t("ui.modal.header.productDetail"),"onOn:close":l[4]||(l[4]=t=>M.value=!1)},{default:s(()=>[o(u(e.$t("ui.modal.content")),1)]),_:1},8,["show","title"]),l[20]||(l[20]=o()),n(m,{language:"html-vue"},{default:s(()=>l[18]||(l[18]=[o(`
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
          import { ButtonElement, Modal } from "@dzangolab/vue3-ui";
          import { ref } from "vue";

          const showModal = ref(false);
          <\/script>
        `)])),_:1})])]),l[41]||(l[41]=o()),a("section",null,[a("h2",null,u(e.$t("ui.modal.usage.disableDismiss")),1),l[26]||(l[26]=o()),a("div",q,[n(i(d),{label:e.$t("ui.modal.label.viewDetail"),onClick:l[5]||(l[5]=t=>w.value=!0)},null,8,["label"]),l[24]||(l[24]=o()),n(i(p),{"dismiss-on-click-out":!1,show:w.value,title:e.$t("ui.modal.header.productDetail"),"onOn:close":l[6]||(l[6]=t=>w.value=!1)},{default:s(()=>[(k(),y(S,null,A(B,(t,E)=>a("div",{key:E+"-"+t,class:"info"},[a("span",U,u(t.label),1),l[22]||(l[22]=o()),a("span",j,u(" : "+t.value),1)])),64))]),_:1},8,["show","title"]),l[25]||(l[25]=o()),n(m,{language:"html-vue"},{default:s(()=>l[23]||(l[23]=[o(`
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
          import { ButtonElement, Modal } from "@dzangolab/vue3-ui";
          import { ref } from "vue";

          const productDetail = [
            ...
          ];

          const showModal = ref(false);
          <\/script>
        `)])),_:1})])]),l[42]||(l[42]=o()),a("section",null,[a("h2",null,u(e.$t("ui.confirmationModal.usage.withI18n")),1),l[30]||(l[30]=o()),a("div",Y,[n(i(d),{label:e.$t("ui.modal.label.show"),onClick:l[7]||(l[7]=t=>b.value=!0)},null,8,["label"]),l[28]||(l[28]=o()),n(i(p),{show:b.value,title:e.$t("ui.modal.header.productDetail"),"onOn:close":l[8]||(l[8]=t=>b.value=!1)},{default:s(()=>[o(u(e.$t("ui.modal.content")),1)]),_:1},8,["show","title"]),l[29]||(l[29]=o()),n(m,{language:"html-vue"},{default:s(()=>l[27]||(l[27]=[o(`
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
          import { useI18n } from "@dzangolab/vue3-i18n";
          import { ButtonElement, Modal } from "@dzangolab/vue3-ui";
          import { ref } from "vue";

          const { t } = useI18n();

          const showModal = ref(false);
          <\/script>
        `)])),_:1})])]),l[43]||(l[43]=o()),a("section",null,[a("h2",null,u(e.$t("ui.confirmationModal.usage.slots")),1),l[38]||(l[38]=o()),a("div",G,[n(i(d),{label:e.$t("ui.modal.label.login"),"icon-left":"pi pi-user",onClick:l[9]||(l[9]=t=>v.value=!0)},null,8,["label"]),l[36]||(l[36]=o()),n(i(p),{show:v.value,"onOn:close":l[13]||(l[13]=t=>v.value=!1)},{header:s(()=>[a("span",H,u(e.$t("ui.modal.label.login")),1)]),footer:s(()=>[n(D,{to:"/form/password-input"},{default:s(()=>[o(u(e.$t("ui.modal.label.forgotPassword")),1)]),_:1})]),default:s(()=>[l[33]||(l[33]=o()),n(i(C),null,{default:s(()=>[n(i(V),{modelValue:f.email,"onUpdate:modelValue":l[10]||(l[10]=t=>f.email=t),label:e.$t("form.label.email"),placeholder:e.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"]),l[31]||(l[31]=o()),n(i(L),{modelValue:f.password,"onUpdate:modelValue":l[11]||(l[11]=t=>f.password=t),label:e.$t("form.label.password"),placeholder:e.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"]),l[32]||(l[32]=o()),n(i(z),{"submit-label":e.$t("ui.modal.label.login"),alignment:"filled",class:"login-actions",onCancel:l[12]||(l[12]=t=>v.value=!1)},null,8,["submit-label"])]),_:1}),l[34]||(l[34]=o())]),_:1},8,["show"]),l[37]||(l[37]=o()),n(m,{language:"html-vue"},{default:s(()=>l[35]||(l[35]=[o(`
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
          import { Email, Form, FormActions, Password } from "@dzangolab/vue3-form";
          import { ButtonElement, Modal } from "@dzangolab/vue3-ui";
          import { reactive, ref } from "vue";

          const formData = reactive({
            email: ref(),
            password: ref(),
          });

          const showModal = ref(false);
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{W as default};

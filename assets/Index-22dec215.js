import{J as E,Z as B,t as C,e as V}from"./DzangolabVue3Form.es-b51db7e8.js";import{d as F,p as L,j as d,J as M,o as $,c as P,w as s,K as a,W as l,L as u,f as t,D as i,aq as m,X as p,a as z,F as y,b as I}from"./index-729398ab-c88618b2.js";import{_ as O}from"./UiPage.vue_vue_type_style_index_0_lang-e8cf49a7.js";import"./index-7eca6f7f.js";const S={class:"section-content"},N={class:"section-content"},A={class:"section-content"},J={class:"label"},T={class:"value"},U={class:"section-content"},Z={class:"section-content"},_={role:"heading"},G=F({__name:"Index",setup(j){const f=L({email:d(),password:d()}),k=[{label:"Name",value:"Acer Nitro 5"},{label:"Category",value:"Laptop"},{label:"Color",value:"Black"}],v=d(!1),w=d(!1),h=d(!1),c=d(!1),b=d(!1);return(o,e)=>{const g=M("router-link"),r=M("SshPre");return $(),P(O,{title:o.$t("ui.modal.title"),class:"demo"},{toolbar:s(()=>[a(g,{to:{name:"ui"},class:"back"},{default:s(()=>[l(u(o.$t("common.back")),1)]),_:1})]),default:s(()=>[l(),t("section",null,[t("h2",null,u(o.$t("ui.modal.usage.basic")),1),l(),t("div",S,[a(i(m),{label:o.$t("ui.modal.label.open"),onClick:e[0]||(e[0]=n=>h.value=!0)},null,8,["label"]),l(),a(i(p),{show:h.value,"onOn:close":e[1]||(e[1]=n=>h.value=!1)},{default:s(()=>[l(u(o.$t("ui.modal.content")),1)]),_:1},8,["show"]),l(),a(r,{language:"html-vue"},{default:s(()=>[l(`
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
        `)]),_:1}),l()])]),l(),t("section",null,[t("h2",null,u(o.$t("ui.modal.usage.withTitle")),1),l(),t("div",N,[a(i(m),{label:o.$t("ui.modal.label.show"),onClick:e[2]||(e[2]=n=>b.value=!0)},null,8,["label"]),l(),a(i(p),{show:b.value,title:o.$t("ui.modal.header.productDetail"),"onOn:close":e[3]||(e[3]=n=>b.value=!1)},{default:s(()=>[l(u(o.$t("ui.modal.content")),1)]),_:1},8,["show","title"]),l(),a(r,{language:"html-vue"},{default:s(()=>[l(`
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
        `)]),_:1}),l()])]),l(),t("section",null,[t("h2",null,u(o.$t("ui.modal.usage.disableDismiss")),1),l(),t("div",A,[a(i(m),{label:o.$t("ui.modal.label.viewDetail"),onClick:e[4]||(e[4]=n=>v.value=!0)},null,8,["label"]),l(),a(i(p),{"dismiss-on-click-out":!1,show:v.value,title:o.$t("ui.modal.header.productDetail"),"onOn:close":e[5]||(e[5]=n=>v.value=!1)},{default:s(()=>[($(),z(y,null,I(k,(n,D)=>t("div",{key:D+"-"+n,class:"info"},[t("span",J,u(n.label),1),l(),t("span",T,u(" : "+n.value),1)])),64))]),_:1},8,["show","title"]),l(),a(r,{language:"html-vue"},{default:s(()=>[l(`
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
        `)]),_:1}),l()])]),l(),t("section",null,[t("h2",null,u(o.$t("ui.confirmationModal.usage.withI18n")),1),l(),t("div",U,[a(i(m),{label:o.$t("ui.modal.label.show"),onClick:e[6]||(e[6]=n=>w.value=!0)},null,8,["label"]),l(),a(i(p),{show:w.value,title:o.$t("ui.modal.header.productDetail"),"onOn:close":e[7]||(e[7]=n=>w.value=!1)},{default:s(()=>[l(u(o.$t("ui.modal.content")),1)]),_:1},8,["show","title"]),l(),a(r,{language:"html-vue"},{default:s(()=>[l(`
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
        `)]),_:1}),l()])]),l(),t("section",null,[t("h2",null,u(o.$t("ui.confirmationModal.usage.slots")),1),l(),t("div",Z,[a(i(m),{label:o.$t("ui.modal.label.login"),"icon-left":"pi pi-user",onClick:e[8]||(e[8]=n=>c.value=!0)},null,8,["label"]),l(),a(i(p),{show:c.value,"onOn:close":e[12]||(e[12]=n=>c.value=!1)},{header:s(()=>[t("span",_,u(o.$t("ui.modal.label.login")),1)]),footer:s(()=>[a(g,{to:"/form/password-input"},{default:s(()=>[l(u(o.$t("ui.modal.label.forgotPassword")),1)]),_:1})]),default:s(()=>[l(),a(i(E),null,{default:s(()=>[a(i(B),{modelValue:f.email,"onUpdate:modelValue":e[9]||(e[9]=n=>f.email=n),label:o.$t("form.label.email"),placeholder:o.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"]),l(),a(i(C),{modelValue:f.password,"onUpdate:modelValue":e[10]||(e[10]=n=>f.password=n),label:o.$t("form.label.password"),placeholder:o.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"]),l(),a(i(V),{"submit-label":o.$t("ui.modal.label.login"),alignment:"filled",class:"login-actions",onCancel:e[11]||(e[11]=n=>c.value=!1)},null,8,["submit-label"])]),_:1}),l()]),_:1},8,["show"]),l(),a(r,{language:"html-vue"},{default:s(()=>[l(`
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
        `)]),_:1}),l()])])]),_:1},8,["title"])}}});export{G as default};

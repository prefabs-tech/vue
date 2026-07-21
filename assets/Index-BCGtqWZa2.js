import{D as e,E as t,On as n,St as r,_ as i,b as a,bt as o,gn as s,k as c,mt as l,o as u,qt as d,tr as f,v as p,vn as m}from"./runtime-core.esm-bundler-BKdLzFmX.js";import{l as h,o as g}from"./PrefabsTechVue3UI.es-EJDYzbRH.js";import{T as _}from"./PrefabsTechVue3Layout.es-DjWCbXPc.js";import{a as v,c as y,u as b,v as x}from"./PrefabsTechVue3TanstackTable.es-Dqv6JrPc.js";import{t as S}from"./ComponentDocumentation-CFBF3GmY.js";import{t as C}from"./UiPage-eTNUnuuQ.js";var w={class:`section-content`},T={class:`container`},E={class:`section-content`},D={class:`container`},O={class:`label`},k={class:`value`},A={class:`section-content`},j={class:`container`},M={class:`section-content`},N={class:`container`},P={class:`section-content`},F={class:`container`},I={role:`heading`},L=c({name:`ModalDemo`,setup(c){let{t:L}=_(),R=[{description:L(`ui.modal.documentation.eventDescription.close`),name:`on:close`,payload:`-`}],z=[{label:`Name`,value:`Acer Nitro 5`},{label:`Category`,value:`Laptop`},{label:`Color`,value:`Black`}],B=[{default:`false`,description:L(`ui.modal.documentation.propsDescription.dismissOnClickOut`),prop:`dismissOnClickOut`,type:`Boolean`},{default:`false`,description:L(`ui.modal.documentation.propsDescription.show`),prop:`show`,type:`Boolean`},{default:`medium`,description:L(`ui.modal.documentation.propsDescription.size`),prop:`size`,type:`"medium" | "large" | "auto"`},{default:`-`,description:L(`ui.modal.documentation.propsDescription.title`),prop:`title`,type:`String`}],V=[{description:L(`ui.modal.documentation.slotDescription.default`),name:`default`},{description:L(`ui.modal.documentation.slotDescription.footer`),name:`footer`},{description:L(`ui.modal.documentation.slotDescription.header`),name:`header`}],H=s({email:m(),password:m()}),U=m(!1),W=m(!1),G=m(!1),K=m(!1),q=m(!1),J=m(!1),Y=m(!1);return(s,c)=>{let m=r(`SshPre`),_=r(`router-link`);return l(),p(C,{subtitle:s.$t(`ui.modal.subtitle`),title:s.$t(`ui.modal.title`),class:`demo-modal`},{default:d(()=>[i(`section`,null,[i(`h2`,null,f(s.$t(`ui.modal.usage.basic`)),1),c[20]||=t(),i(`div`,w,[i(`div`,T,[e(n(g),{label:s.$t(`ui.modal.label.show`),onClick:c[0]||=e=>Y.value=!0},null,8,[`label`])]),c[18]||=t(),e(n(h),{show:Y.value,title:s.$t(`ui.modal.header.productDetail`),"onOn:close":c[1]||=e=>Y.value=!1},{default:d(()=>[t(f(s.$t(`ui.modal.content`)),1)]),_:1},8,[`show`,`title`]),c[19]||=t(),e(m,{language:`html-vue`},{default:d(()=>[...c[17]||=[t(`
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
        `,-1)]]),_:1})])]),c[46]||=t(),i(`section`,null,[i(`h2`,null,f(s.$t(`ui.modal.usage.enableDismiss`)),1),c[25]||=t(),i(`div`,E,[i(`div`,D,[e(n(g),{label:s.$t(`ui.modal.label.viewDetail`),onClick:c[2]||=e=>W.value=!0},null,8,[`label`])]),c[23]||=t(),e(n(h),{show:W.value,title:s.$t(`ui.modal.header.productDetail`),"dismiss-on-click-out":``,"onOn:close":c[3]||=e=>W.value=!1},{default:d(()=>[(l(),a(u,null,o(z,(e,n)=>i(`div`,{key:n+`-`+e,class:`info`},[i(`span`,O,f(e.label),1),c[21]||=t(),i(`span`,k,f(` : `+e.value),1)])),64))]),_:1},8,[`show`,`title`]),c[24]||=t(),e(m,{language:`html-vue`},{default:d(()=>[...c[22]||=[t(`
          <template>
            <ButtonElement
              label="View detail"
              @click="showModal = true"
            />

            <Modal
              :show="showModal"
              dismiss-on-click-out
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
        `,-1)]]),_:1})])]),c[47]||=t(),i(`section`,null,[i(`h2`,null,f(s.$t(`ui.modal.usage.size`)),1),c[33]||=t(),i(`div`,A,[i(`div`,j,[e(n(g),{label:s.$t(`ui.modal.label.medium`),onClick:c[4]||=e=>q.value=!0},null,8,[`label`]),c[26]||=t(),e(n(g),{label:s.$t(`ui.modal.label.large`),onClick:c[5]||=e=>K.value=!0},null,8,[`label`]),c[27]||=t(),e(n(g),{label:s.$t(`ui.modal.label.auto`),onClick:c[6]||=e=>U.value=!0},null,8,[`label`])]),c[29]||=t(),e(n(h),{show:q.value,title:s.$t(`ui.modal.header.productDetail`),size:`medium`,"onOn:close":c[7]||=e=>q.value=!1},{default:d(()=>[t(f(s.$t(`ui.modal.content`)),1)]),_:1},8,[`show`,`title`]),c[30]||=t(),e(n(h),{show:K.value,title:s.$t(`ui.modal.header.productDetail`),size:`large`,"onOn:close":c[8]||=e=>K.value=!1},{default:d(()=>[t(f(s.$t(`ui.modal.content`)),1)]),_:1},8,[`show`,`title`]),c[31]||=t(),e(n(h),{show:U.value,title:s.$t(`ui.modal.header.productDetail`),size:`auto`,"onOn:close":c[9]||=e=>U.value=!1},{default:d(()=>[t(f(s.$t(`ui.modal.content`)),1)]),_:1},8,[`show`,`title`]),c[32]||=t(),e(m,{language:`html-vue`},{default:d(()=>[...c[28]||=[t(`
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
        `,-1)]]),_:1})])]),c[48]||=t(),i(`section`,null,[i(`h2`,null,f(s.$t(`ui.confirmationModal.usage.withI18n`)),1),c[37]||=t(),i(`div`,M,[i(`div`,N,[e(n(g),{label:s.$t(`ui.modal.label.show`),onClick:c[10]||=e=>G.value=!0},null,8,[`label`])]),c[35]||=t(),e(n(h),{show:G.value,title:s.$t(`ui.modal.header.productDetail`),"onOn:close":c[11]||=e=>G.value=!1},{default:d(()=>[t(f(s.$t(`ui.modal.content`)),1)]),_:1},8,[`show`,`title`]),c[36]||=t(),e(m,{language:`html-vue`},{default:d(()=>[...c[34]||=[t(`
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
        `,-1)]]),_:1})])]),c[49]||=t(),i(`section`,null,[i(`h2`,null,f(s.$t(`ui.confirmationModal.usage.slots`)),1),c[45]||=t(),i(`div`,P,[i(`div`,F,[e(n(g),{label:s.$t(`ui.modal.label.login`),"icon-left":`pi pi-user`,onClick:c[12]||=e=>J.value=!0},null,8,[`label`])]),c[43]||=t(),e(n(h),{show:J.value,"onOn:close":c[16]||=e=>J.value=!1},{header:d(()=>[i(`span`,I,f(s.$t(`ui.modal.label.login`)),1)]),footer:d(()=>[e(_,{to:`/form/password-input`},{default:d(()=>[t(f(s.$t(`ui.modal.label.forgotPassword`)),1)]),_:1})]),default:d(()=>[c[40]||=t(),e(n(y),{class:`login-form`},{default:d(()=>[e(n(x),{modelValue:H.email,"onUpdate:modelValue":c[13]||=e=>H.email=e,label:s.$t(`form.label.email`),placeholder:s.$t(`form.placeholder.email`)},null,8,[`modelValue`,`label`,`placeholder`]),c[38]||=t(),e(n(b),{modelValue:H.password,"onUpdate:modelValue":c[14]||=e=>H.password=e,label:s.$t(`form.label.password`),placeholder:s.$t(`form.placeholder.password`)},null,8,[`modelValue`,`label`,`placeholder`]),c[39]||=t(),e(n(v),{"submit-label":s.$t(`ui.modal.label.login`),alignment:`filled`,class:`login-actions`,onCancel:c[15]||=e=>J.value=!1},null,8,[`submit-label`])]),_:1}),c[41]||=t()]),_:1},8,[`show`]),c[44]||=t(),e(m,{language:`html-vue`},{default:d(()=>[...c[42]||=[t(`
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
        `,-1)]]),_:1})])]),c[50]||=t(),e(S,{"events-data":R,"props-data":B,"props-table-title":s.$t(`common.properties`,{value:`ModalProperties`}),"slots-data":V},null,8,[`props-table-title`])]),_:1},8,[`subtitle`,`title`])}}});export{L as default};
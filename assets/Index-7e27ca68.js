import{d as k,j as d,G as y,o as E,c as D,w as i,K as l,C as e,S as r,f as o,D as s,ao as u,a1 as f,a2 as v,aq as c}from"./index-d658739c-63af44b8.js";import{_ as L}from"./UiPage.vue_vue_type_style_index_0_lang-d476e23e.js";const O={class:"section-content"},z={class:"container"},I={class:"section-content"},S={class:"container"},T={class:"section-content"},N={class:"container"},U={class:"section-content"},V={class:"container"},H={class:"section-content"},P={class:"container"},j={class:"section-content"},q={class:"container"},Y=k({__name:"Index",setup(A){const p=d(void 0),b=d(!1),M=d(!1),w=d(!1),h=d(!1),C=d(!1),$=d(!1),g=()=>{p.value=new Date,$.value=!1};return(t,n)=>{const B=y("router-link"),m=y("SshPre");return E(),D(L,{title:t.$t("ui.confirmationModal.title"),class:"demo"},{toolbar:i(()=>[l(B,{to:{name:"ui"},class:"back"},{default:i(()=>[e(r(t.$t("common.back")),1)]),_:1})]),default:i(()=>[e(),o("section",null,[o("h2",null,r(t.$t("ui.confirmationModal.usage.basic")),1),e(),o("div",O,[l(m,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <div>
              <ButtonElement
                label="Confirm"
                severity="success"
                @click="showModal = true"
              />
              <span>`+r(p.value)+`</span>
            </div>

            <ConfirmationModal
              v-show="showModal"
              @on:close="showModal = false"
              @on:confirm="onConfirm()"
            />
          </template>

          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const currentTime = ref(undefined as unknown as Date);
            const showModal = ref(false);

            const onConfirm = () => {
              currentTime.value = new Date();
              showModal.value = false;
            };
          <\/script>
        `,1)]),_:1}),e(),o("div",z,[l(s(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[0]||(n[0]=a=>$.value=!0)},null,8,["label"]),e(),o("span",null,r(p.value),1)]),e(),f(l(s(c),{"onOn:close":n[1]||(n[1]=a=>$.value=!1),"onOn:confirm":n[2]||(n[2]=a=>g())},null,512),[[v,$.value]])])]),e(),o("section",null,[o("h2",null,r(t.$t("ui.confirmationModal.usage.withDivider")),1),e(),o("div",I,[l(m,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <div>
              <ButtonElement
                label="Confirm"
                severity="success"
                @click="showModal = true"
              />
            </div>

            <ConfirmationModal
              v-show="showModal"
              divider
              @on:close="showModal = false"
              @on:confirm="showModal = false"
            />
          </template>

          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const showModal = ref(false);
          <\/script>
        `)]),_:1}),e(),o("div",S,[l(s(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[3]||(n[3]=a=>b.value=!0)},null,8,["label"])]),e(),f(l(s(c),{divider:"","onOn:close":n[4]||(n[4]=a=>b.value=!1),"onOn:confirm":n[5]||(n[5]=a=>b.value=!1)},null,512),[[v,b.value]])])]),e(),o("section",null,[o("h2",null,r(t.$t("ui.confirmationModal.usage.disableHeader")),1),e(),o("div",T,[l(m,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <div>
              <ButtonElement
                label="Confirm"
                severity="success"
                @click="showModal = true"
              />
            </div>

            <ConfirmationModal
              v-show="showModal"
              disable-header
              @on:close="showModal = false"
              @on:confirm="showModal = false"
            />
          </template>

          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const showModal = ref(false);
          <\/script>
        `)]),_:1}),e(),o("div",N,[l(s(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[6]||(n[6]=a=>h.value=!0)},null,8,["label"])]),e(),f(l(s(c),{"disable-header":"","onOn:close":n[7]||(n[7]=a=>h.value=!1),"onOn:confirm":n[8]||(n[8]=a=>h.value=!1)},null,512),[[v,h.value]])])]),e(),o("section",null,[o("h2",null,r(t.$t("ui.confirmationModal.usage.disableBody")),1),e(),o("div",U,[l(m,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <div>
              <ButtonElement
                label="Confirm"
                severity="success"
                @click="showModal = true"
              />
            </div>

            <ConfirmationModal
              v-show="showModal"
              disable-body
              @on:close="showModal = false"
              @on:confirm="showModal = false"
            />
          </template>

          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const showModal = ref(false);
          <\/script>
        `)]),_:1}),e(),o("div",V,[l(s(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[9]||(n[9]=a=>w.value=!0)},null,8,["label"])]),e(),f(l(s(c),{"disable-body":"","onOn:close":n[10]||(n[10]=a=>w.value=!1),"onOn:confirm":n[11]||(n[11]=a=>w.value=!1)},null,512),[[v,w.value]])])]),e(),o("section",null,[o("h2",null,r(t.$t("ui.confirmationModal.usage.slots")),1),e(),o("div",H,[l(m,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <div>
              <ButtonElement
                label="Confirm"
                severity="success"
                @click="showModal = true"
              />
            </div>

            <ConfirmationModal
              v-show="showModal"
              @on:close="showModal = false"
              @on:confirm="showModal = false"
            >
              <template #header>
                <span>Delete user</span>
              </template>

              <template #body>
                <p>Are you sure to delete user?</p>
              </template>

              <template #footer>
                <ButtonElement label="Cancel" severity="secondary" />
                <ButtonElement label="Confirm" severity="danger" />
              </template>
            </ConfirmationModal>
          </template>

          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const showModal = ref(false);
          <\/script>
        `)]),_:1}),e(),o("div",P,[l(s(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[12]||(n[12]=a=>M.value=!0)},null,8,["label"]),e(),o("span",null,r(p.value),1)]),e(),f(l(s(c),{"onOn:close":n[13]||(n[13]=a=>M.value=!1),"onOn:confirm":n[14]||(n[14]=a=>M.value=!1)},{header:i(()=>[o("span",null,r(t.$t("ui.confirmationModal.headerContent.deleteUser")),1)]),body:i(()=>[o("p",null,r(t.$t("ui.confirmationModal.bodyContent.confirmDelete")),1)]),footer:i(()=>[l(s(u),{size:"small",label:t.$t("ui.confirmationModal.buttonLabel.cancel"),severity:"secondary"},null,8,["label"]),e(),l(s(u),{size:"small",label:t.$t("ui.confirmationModal.buttonLabel.delete"),severity:"danger"},null,8,["label"])]),_:1},512),[[v,M.value]])])]),e(),o("section",null,[o("h2",null,r(t.$t("ui.confirmationModal.usage.withI18n")),1),e(),o("div",j,[l(m,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <div>
              <ButtonElement
                :label="t('ui.confirmationModal.buttonLabel.confirm')"
                severity="success"
                @click="showModal = true"
              />
            </div>

            <ConfirmationModal
              v-show="showModal"
              @on:close="showModal = false"
              @on:confirm="showModal = false"
            >
              <template #header>
                <span>
                  {{ t("ui.confirmationModal.headerContent.deleteUser") }}
                </span>
              </template>

              <template #body>
                <p>
                  {{ t("ui.confirmationModal.bodyContent.confirmDelete") }}
                </p>
              </template>

              <template #footer>
                <ButtonElement
                  :label="t('ui.confirmationModal.buttonLabel.cancel')" severity="secondary"
                />
                <ButtonElement
                  :label="t('ui.confirmationModal.buttonLabel.delete')" severity="danger"
                />
              </template>
            </ConfirmationModal>
          </template>

          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const showModal = ref(false);
            const { t } = useI18n();
          <\/script>
        `)]),_:1}),e(),o("div",q,[l(s(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[15]||(n[15]=a=>C.value=!0)},null,8,["label"]),e(),o("span",null,r(p.value),1)]),e(),f(l(s(c),{"onOn:close":n[16]||(n[16]=a=>C.value=!1),"onOn:confirm":n[17]||(n[17]=a=>C.value=!1)},{header:i(()=>[o("span",null,r(t.$t("ui.confirmationModal.headerContent.deleteUser")),1)]),body:i(()=>[o("p",null,r(t.$t("ui.confirmationModal.bodyContent.confirmDelete")),1)]),footer:i(()=>[l(s(u),{size:"small",label:t.$t("ui.confirmationModal.buttonLabel.cancel"),severity:"secondary"},null,8,["label"]),e(),l(s(u),{size:"small",label:t.$t("ui.confirmationModal.buttonLabel.delete"),severity:"danger"},null,8,["label"])]),_:1},512),[[v,C.value]])])])]),_:1},8,["title"])}}});export{Y as default};

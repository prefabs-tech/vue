import{d as O,e as d,r as B,o as L,c as z,w as r,a as o,t as i,f as e,g as l,h as s,a5 as u,Y as f,Z as v,a7 as c}from"./index-ab4b1676.js";const D={class:"section-content"},I={class:"container"},S={class:"section-content"},P={class:"container"},T={class:"section-content"},N={class:"container"},U={class:"section-content"},V={class:"container"},F={class:"section-content"},H={class:"container"},A={class:"section-content"},Y={class:"container"},Z={class:"section-content"},j={class:"container"},q={class:"section-content"},G={class:"container"},Q=O({__name:"Index",setup(J){const b=d(void 0),p=d(!1),M=d(!1),w=d(!1),h=d(!1),g=d(!1),C=d(!1),$=d(!1),y=d(!1);function k(){b.value=new Date,y.value=!1}return(t,n)=>{const m=B("SshPre"),E=B("Page");return L(),z(E,{title:t.$t("ui.confirmationModal.title"),class:"demo"},{default:r(()=>[o("section",null,[o("h2",null,i(t.$t("ui.confirmationModal.usage.basic")),1),e(),o("div",D,[l(m,{language:"html-vue"},{default:r(()=>[e(`
          <template>
            <div>
              <ButtonElement
                label="Confirm"
                severity="success"
                @click="showModal = true"
              />
              <span>`+i(b.value)+`</span>
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

            function onConfirm() {
              currentTime.value = new Date();
              showModal.value = false;
            }
          <\/script>
        `,1)]),_:1}),e(),o("div",I,[l(s(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[0]||(n[0]=a=>y.value=!0)},null,8,["label"]),e(),o("span",null,i(b.value),1)]),e(),f(l(s(c),{"onOn:close":n[1]||(n[1]=a=>y.value=!1),"onOn:confirm":n[2]||(n[2]=a=>k())},null,512),[[v,y.value]])])]),e(),o("section",null,[o("h2",null,i(t.$t("ui.confirmationModal.usage.withBorder")),1),e(),o("div",S,[l(m,{language:"html-vue"},{default:r(()=>[e(`
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
              border
              @on:close="showModal = false"
              @on:confirm="showModal = false"
            />
          </template>

          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const showModal = ref(false);
          <\/script>
        `)]),_:1}),e(),o("div",P,[l(s(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[3]||(n[3]=a=>p.value=!0)},null,8,["label"])]),e(),f(l(s(c),{border:"","onOn:close":n[4]||(n[4]=a=>p.value=!1),"onOn:confirm":n[5]||(n[5]=a=>p.value=!1)},null,512),[[v,p.value]])])]),e(),o("section",null,[o("h2",null,i(t.$t("ui.confirmationModal.usage.disableHeader")),1),e(),o("div",T,[l(m,{language:"html-vue"},{default:r(()=>[e(`
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
        `)]),_:1}),e(),o("div",N,[l(s(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[6]||(n[6]=a=>C.value=!0)},null,8,["label"])]),e(),f(l(s(c),{"disable-header":"","onOn:close":n[7]||(n[7]=a=>C.value=!1),"onOn:confirm":n[8]||(n[8]=a=>C.value=!1)},null,512),[[v,C.value]])])]),e(),o("section",null,[o("h2",null,i(t.$t("ui.confirmationModal.usage.disableBody")),1),e(),o("div",U,[l(m,{language:"html-vue"},{default:r(()=>[e(`
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
        `)]),_:1}),e(),o("div",V,[l(s(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[9]||(n[9]=a=>h.value=!0)},null,8,["label"])]),e(),f(l(s(c),{"disable-body":"","onOn:close":n[10]||(n[10]=a=>h.value=!1),"onOn:confirm":n[11]||(n[11]=a=>h.value=!1)},null,512),[[v,h.value]])])]),e(),o("section",null,[o("h2",null,i(t.$t("ui.confirmationModal.usage.disableFooter")),1),e(),o("div",F,[l(m,{language:"html-vue"},{default:r(()=>[e(`
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
              disable-footer
              @on:close="showModal = false"
              @on:confirm="showModal = false"
            />
          </template>

          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const showModal = ref(false);
          <\/script>
        `)]),_:1}),e(),o("div",H,[l(s(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[12]||(n[12]=a=>g.value=!0)},null,8,["label"])]),e(),f(l(s(c),{"disable-footer":"","onOn:close":n[13]||(n[13]=a=>g.value=!1),"onOn:confirm":n[14]||(n[14]=a=>g.value=!1)},null,512),[[v,g.value]])])]),e(),o("section",null,[o("h2",null,i(t.$t("ui.confirmationModal.usage.customContent")),1),e(),o("div",A,[l(m,{language:"html-vue"},{default:r(()=>[e(`
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
        `)]),_:1}),e(),o("div",Y,[l(s(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[15]||(n[15]=a=>M.value=!0)},null,8,["label"]),e(),o("span",null,i(b.value),1)]),e(),f(l(s(c),{"onOn:close":n[16]||(n[16]=a=>M.value=!1),"onOn:confirm":n[17]||(n[17]=a=>M.value=!1)},{header:r(()=>[o("span",null,i(t.$t("ui.confirmationModal.headerContent.deleteUser")),1)]),body:r(()=>[o("p",null,i(t.$t("ui.confirmationModal.bodyContent.confirmDelete")),1)]),footer:r(()=>[l(s(u),{size:"small",label:t.$t("ui.confirmationModal.buttonLabel.cancel"),severity:"secondary"},null,8,["label"]),e(),l(s(u),{size:"small",label:t.$t("ui.confirmationModal.buttonLabel.delete"),severity:"danger"},null,8,["label"])]),_:1},512),[[v,M.value]])])]),e(),o("section",null,[o("h2",null,i(t.$t("ui.confirmationModal.usage.withI18n")),1),e(),o("div",Z,[l(m,{language:"html-vue"},{default:r(()=>[e(`
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
        `)]),_:1}),e(),o("div",j,[l(s(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[18]||(n[18]=a=>$.value=!0)},null,8,["label"]),e(),o("span",null,i(b.value),1)]),e(),f(l(s(c),{"onOn:close":n[19]||(n[19]=a=>$.value=!1),"onOn:confirm":n[20]||(n[20]=a=>$.value=!1)},{header:r(()=>[o("span",null,i(t.$t("ui.confirmationModal.headerContent.deleteUser")),1)]),body:r(()=>[o("p",null,i(t.$t("ui.confirmationModal.bodyContent.confirmDelete")),1)]),footer:r(()=>[l(s(u),{size:"small",label:t.$t("ui.confirmationModal.buttonLabel.cancel"),severity:"secondary"},null,8,["label"]),e(),l(s(u),{size:"small",label:t.$t("ui.confirmationModal.buttonLabel.delete"),severity:"danger"},null,8,["label"])]),_:1},512),[[v,$.value]])])]),e(),o("section",null,[o("h2",null,i(t.$t("ui.confirmationModal.usage.customStyle")),1),e(),o("div",q,[l(m,{language:"html-vue"},{default:r(()=>[e(`
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
              class="custom-modal"
              @on:close="showModal = false"
              @on:confirm="showModal = false"
            />
          </template>

          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const showModal = ref(false);
          <\/script>

          <style lang="css">
            .custom-modal .modal-header {
              --_background-color: #007aff;
              --_text-color: #ffffff;
            }

            .custom-modal .modal-header svg {
              --_icon-color: #dee2e6;
            }
          </style>
        `)]),_:1}),e(),o("div",G,[l(s(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[21]||(n[21]=a=>w.value=!0)},null,8,["label"])]),e(),f(l(s(c),{class:"custom-modal","onOn:close":n[22]||(n[22]=a=>w.value=!1),"onOn:confirm":n[23]||(n[23]=a=>w.value=!1)},null,512),[[v,w.value]])])])]),_:1},8,["title"])}}});export{Q as default};

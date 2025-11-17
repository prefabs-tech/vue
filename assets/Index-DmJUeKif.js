import{d as I,r as d,H as O,e as f,o as m,j as a,B as n,f as o,h as s,t as r,b as p,u as i,v as u,E as b}from"./index-DACAZjT2.js";import{_ as S}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-DLliI7It.js";import{_ as z}from"./UiPage.vue_vue_type_style_index_0_lang-BKUbgmiS.js";import"./PrefabsTechVue3TanstackTable.es-xbUjmz2n.js";import"./PrefabsTechVue3Form.es-seLFyOMU.js";const T={class:"section-content"},c={class:"container"},H={class:"section-content"},N={class:"container"},V={class:"section-content"},P={class:"container"},U={class:"section-content"},j={class:"container"},A={class:"section-content"},q={class:"container"},F={class:"section-content"},G={class:"container"},Y=I({__name:"Index",setup(J){const g=d(void 0),C=d(!1),M=d(!1),$=d(!1),w=d(!1),y=d(!1),k=d(!1),B=[{description:"Emitted when the modal is closed.",name:"on:close",payload:"-"},{description:"Emitted when the Confirm button is clicked.",name:"on:confirm",payload:"-"}],E=[{default:"false",description:"If true, hides the default body content of the modal.",prop:"disableBody",type:"Boolean"},{default:"false",description:"If true, hides the default header content of the modal.",prop:"disableHeader",type:"Boolean"},{default:"false",description:"If true, adds a visual divider (border) to the modal container.",prop:"divider",type:"Boolean"}],D=[{description:"Slot to override the default body message.",name:"body"},{description:"Slot to override the default footer.",name:"footer"},{description:"Slot to override the default header title.",name:"header"}],L=()=>{g.value=new Date,k.value=!1};return(t,e)=>{const v=O("SshPre");return m(),f(z,{"sub-title":t.$t("ui.confirmationModal.subtitle"),title:t.$t("ui.confirmationModal.title"),class:"demo"},{toolbar:a(()=>[s(i(u),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=l=>t.$router.push("/ui"))},null,8,["label"])]),default:a(()=>[e[53]||(e[53]=n()),o("section",null,[o("h2",null,r(t.$t("ui.confirmationModal.usage.basic")),1),e[25]||(e[25]=n()),o("div",T,[o("div",c,[s(i(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:e[1]||(e[1]=l=>k.value=!0)},null,8,["label"]),e[21]||(e[21]=n()),o("span",null,r(g.value),1)]),e[23]||(e[23]=n()),k.value?(m(),f(i(b),{key:0,"onOn:close":e[2]||(e[2]=l=>k.value=!1),"onOn:confirm":e[3]||(e[3]=l=>L())})):p("",!0),e[24]||(e[24]=n()),s(v,{language:"html-vue"},{default:a(()=>e[22]||(e[22]=[n(`
          <template>
            <ButtonElement
              label="Confirm"
              severity="success"
              @click="showModal = true"
            />

            <span>{{ currentTime }}</span>
  
            <ConfirmationModal
              v-if="showModal"
              @on:close="showModal = false"
              @on:confirm="onConfirm()"
            />
          </template>
  
          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";
  
            const currentTime = ref(undefined as unknown as Date);
            const showModal = ref(false);
  
            const onConfirm = () => {
              currentTime.value = new Date();
              showModal.value = false;
            };
          <\/script>
        `)])),_:1})])]),e[54]||(e[54]=n()),o("section",null,[o("h2",null,r(t.$t("ui.confirmationModal.usage.withDivider")),1),e[29]||(e[29]=n()),o("div",H,[o("div",N,[s(i(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:e[4]||(e[4]=l=>C.value=!0)},null,8,["label"])]),e[27]||(e[27]=n()),C.value?(m(),f(i(b),{key:0,divider:"","onOn:close":e[5]||(e[5]=l=>C.value=!1),"onOn:confirm":e[6]||(e[6]=l=>C.value=!1)})):p("",!0),e[28]||(e[28]=n()),s(v,{language:"html-vue"},{default:a(()=>e[26]||(e[26]=[n(`
          <template>
            <ButtonElement
              label="Confirm"
              severity="success"
              @click="showModal = true"
            />

            <ConfirmationModal
              v-if="showModal"
              divider
              @on:close="showModal = false"
              @on:confirm="showModal = false"
            />
          </template>

          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";

            const showModal = ref(false);
          <\/script>
        `)])),_:1})])]),e[55]||(e[55]=n()),o("section",null,[o("h2",null,r(t.$t("ui.confirmationModal.usage.disableHeader")),1),e[33]||(e[33]=n()),o("div",V,[o("div",P,[s(i(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:e[7]||(e[7]=l=>w.value=!0)},null,8,["label"])]),e[31]||(e[31]=n()),w.value?(m(),f(i(b),{key:0,"disable-header":"","onOn:close":e[8]||(e[8]=l=>w.value=!1),"onOn:confirm":e[9]||(e[9]=l=>w.value=!1)})):p("",!0),e[32]||(e[32]=n()),s(v,{language:"html-vue"},{default:a(()=>e[30]||(e[30]=[n(`
          <template>
            <ButtonElement
              label="Confirm"
              severity="success"
              @click="showModal = true"
            />

            <ConfirmationModal
              v-if="showModal"
              disable-header
              @on:close="showModal = false"
              @on:confirm="showModal = false"
            />
          </template>

          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";

            const showModal = ref(false);
          <\/script>
        `)])),_:1})])]),e[56]||(e[56]=n()),o("section",null,[o("h2",null,r(t.$t("ui.confirmationModal.usage.disableBody")),1),e[37]||(e[37]=n()),o("div",U,[o("div",j,[s(i(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:e[10]||(e[10]=l=>$.value=!0)},null,8,["label"])]),e[35]||(e[35]=n()),$.value?(m(),f(i(b),{key:0,"disable-body":"","onOn:close":e[11]||(e[11]=l=>$.value=!1),"onOn:confirm":e[12]||(e[12]=l=>$.value=!1)})):p("",!0),e[36]||(e[36]=n()),s(v,{language:"html-vue"},{default:a(()=>e[34]||(e[34]=[n(`
          <template>
            <ButtonElement
              label="Confirm"
              severity="success"
              @click="showModal = true"
            />

            <ConfirmationModal
              v-if="showModal"
              disable-body
              @on:close="showModal = false"
              @on:confirm="showModal = false"
            />
          </template>

          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";

            const showModal = ref(false);
          <\/script>
        `)])),_:1})])]),e[57]||(e[57]=n()),o("section",null,[o("h2",null,r(t.$t("ui.confirmationModal.usage.slots")),1),e[44]||(e[44]=n()),o("div",A,[o("div",q,[s(i(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:e[13]||(e[13]=l=>M.value=!0)},null,8,["label"])]),e[42]||(e[42]=n()),M.value?(m(),f(i(b),{key:0,onClick:e[16]||(e[16]=l=>M.value=!1)},{header:a(()=>[o("span",null,r(t.$t("ui.confirmationModal.headerContent.deleteUser")),1)]),body:a(()=>[o("p",null,r(t.$t("ui.confirmationModal.bodyContent.confirmDelete")),1)]),footer:a(()=>[s(i(u),{size:"small",label:t.$t("ui.confirmationModal.buttonLabel.cancel"),severity:"secondary",onClick:e[14]||(e[14]=l=>M.value=!1)},null,8,["label"]),e[38]||(e[38]=n()),s(i(u),{size:"small",label:t.$t("ui.confirmationModal.buttonLabel.delete"),severity:"danger",onClick:e[15]||(e[15]=l=>M.value=!1)},null,8,["label"])]),_:1})):p("",!0),e[43]||(e[43]=n()),s(v,{language:"html-vue"},{default:a(()=>e[41]||(e[41]=[n(`
          <template>
            <ButtonElement
              label="Confirm"
              severity="success"
              @click="showModal = true"
            />

            <ConfirmationModal
              v-if="showModal"
              @on:close="showModal = false"
            >
              <template #header>
                <span>Delete user</span>
              </template>

              <template #body>
                <p>Are you sure to delete user?</p>
              </template>

              <template #footer>
                <ButtonElement
                  label="Cancel"
                  severity="secondary"
                  @click="showModal = false"
                />
                <ButtonElement
                  label="Confirm"
                  severity="danger"
                  @click="showModal = false"
                />
              </template>
            </ConfirmationModal>
          </template>

          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";

            const showModal = ref(false);
          <\/script>
        `)])),_:1})])]),e[58]||(e[58]=n()),o("section",null,[o("h2",null,r(t.$t("ui.confirmationModal.usage.withI18n")),1),e[52]||(e[52]=n()),o("div",F,[o("div",G,[s(i(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:e[17]||(e[17]=l=>y.value=!0)},null,8,["label"]),e[45]||(e[45]=n()),o("span",null,r(g.value),1)]),e[50]||(e[50]=n()),y.value?(m(),f(i(b),{key:0,"onOn:close":e[20]||(e[20]=l=>y.value=!1)},{header:a(()=>[o("span",null,r(t.$t("ui.confirmationModal.headerContent.deleteUser")),1)]),body:a(()=>[o("p",null,r(t.$t("ui.confirmationModal.bodyContent.confirmDelete")),1)]),footer:a(()=>[s(i(u),{size:"small",label:t.$t("ui.confirmationModal.buttonLabel.cancel"),severity:"secondary",onClick:e[18]||(e[18]=l=>y.value=!1)},null,8,["label"]),e[46]||(e[46]=n()),s(i(u),{size:"small",label:t.$t("ui.confirmationModal.buttonLabel.delete"),severity:"danger",onClick:e[19]||(e[19]=l=>y.value=!1)},null,8,["label"])]),_:1})):p("",!0),e[51]||(e[51]=n()),s(v,{language:"html-vue"},{default:a(()=>e[49]||(e[49]=[n(`
          <template>
            <ButtonElement
              :label="t('ui.confirmationModal.buttonLabel.confirm')"
              severity="success"
              @click="showModal = true"
            />

            <ConfirmationModal
              v-if="showModal"
              @on:close="showModal = false"
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
                  :label="t('ui.confirmationModal.buttonLabel.cancel')"
                  severity="secondary"
                  @click="showI18nModal = false"
                />
                <ButtonElement
                  :label="t('ui.confirmationModal.buttonLabel.delete')"
                  severity="danger"
                  @click="showI18nModal = false"
                />
              </template>
            </ConfirmationModal>
          </template>

          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";
            import { useI18n } from "@prefabs.tech/vue3-i18n";

            const showModal = ref(false);
            const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),e[59]||(e[59]=n()),s(S,{"events-data":B,"props-data":E,"props-table-title":t.$t("common.properties",{value:"ConfirmationModalProperties"}),"slots-data":D},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}});export{Y as default};

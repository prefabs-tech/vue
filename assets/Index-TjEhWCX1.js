import{d as O,H as I,r as f,I as L,e as c,o as v,j as a,C as n,f as t,h as s,t as u,b as y,u as r,v as m,G as $}from"./index-BU6iKU0F.js";import{_ as E}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-CVfcli2c.js";import{_ as S}from"./UiPage.vue_vue_type_style_index_0_lang-B9T-yJsV.js";import"./PrefabsTechVue3TanstackTable.es-aLEdQvle.js";import"./PrefabsTechVue3Form.es-DchXesOb.js";const T={class:"section-content"},z={class:"container"},P={class:"section-content"},A={class:"container"},N={class:"section-content"},V={class:"container"},U={class:"section-content"},q={class:"container"},Q=O({__name:"Index",setup(j){const{t:l}=I(),g=f(void 0),d=f(!1),b=f(!1),p=f(!1),M=f(!1),w=[{description:l("ui.confirmationModal.documentation.eventDescription.close"),name:"on:close",payload:"-"},{description:l("ui.confirmationModal.documentation.eventDescription.confirm"),name:"on:confirm",payload:"-"}],k=[{default:"-",description:l("ui.confirmationModal.documentation.propsDescription.acceptOptions"),prop:"acceptButtonOptions",type:"ButtonProperties"},{default:"-",description:l("ui.confirmationModal.documentation.propsDescription.cancelOptions"),prop:"cancelButtonOptions",type:"ButtonProperties"},{default:"true",description:l("ui.confirmationModal.documentation.propsDescription.closable"),prop:"closable",type:"Boolean"},{default:"pi pi-times",description:l("ui.confirmationModal.documentation.propsDescription.closeIcon"),prop:"closeIcon",type:"String"},{default:"true",description:l("ui.confirmationModal.documentation.propsDescription.dismissOnClickOut"),prop:"dismissOnClickOut",type:"Boolean"},{default:"Confirmation required",description:l("ui.confirmationModal.documentation.propsDescription.header"),prop:"header",type:"String"},{default:"pi pi-exclamation-triangle",description:l("ui.confirmationModal.documentation.propsDescription.icon"),prop:"icon",type:"Boolean | String"},{default:"Are you sure you want to proceed?",description:l("ui.confirmationModal.documentation.propsDescription.message"),prop:"message",type:"String"}],D=[{description:l("ui.confirmationModal.documentation.slotDescription.header"),name:"header"},{description:l("ui.confirmationModal.documentation.slotDescription.message"),name:"message"},{description:l("ui.confirmationModal.documentation.slotDescription.footer"),name:"footer"},{description:l("ui.confirmationModal.documentation.slotDescription.closeIcon"),name:"closeIcon"},{description:l("ui.confirmationModal.documentation.slotDescription.icon"),name:"icon"}],B=()=>{g.value=new Date,M.value=!1};return(o,e)=>{const C=L("SshPre");return v(),c(S,{"sub-title":o.$t("ui.confirmationModal.subtitle"),title:o.$t("ui.confirmationModal.title"),class:"demo"},{toolbar:a(()=>[s(r(m),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=i=>o.$router.push("/ui"))},null,8,["label"])]),default:a(()=>[e[42]||(e[42]=n()),t("section",null,[t("h2",null,u(o.$t("ui.confirmationModal.usage.basic")),1),e[20]||(e[20]=n()),t("div",T,[t("div",z,[s(r(m),{label:o.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:e[1]||(e[1]=i=>M.value=!0)},null,8,["label"]),e[16]||(e[16]=n()),t("span",null,u(g.value),1)]),e[18]||(e[18]=n()),M.value?(v(),c(r($),{key:0,header:o.$t("ui.confirmationModal.headerContent.confirm"),message:o.$t("ui.confirmationModal.bodyContent.confirm"),"onOn:close":e[2]||(e[2]=i=>M.value=!1),"onOn:confirm":e[3]||(e[3]=i=>B())},null,8,["header","message"])):y("",!0),e[19]||(e[19]=n()),s(C,{language:"html-vue"},{default:a(()=>e[17]||(e[17]=[n(`
          <template>
            <ButtonElement
              label="Confirm"
              severity="success"
              @click="showModal = true"
            />

            <span>{{ currentTime }}</span>
  
            <ConfirmationModal
              v-if="showModal"
              header="Confirm"
              message="Are you sure you want to proceed?"
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
        `)])),_:1})])]),e[43]||(e[43]=n()),t("section",null,[t("h2",null,u(o.$t("ui.confirmationModal.usage.buttonOptions")),1),e[24]||(e[24]=n()),t("div",P,[t("div",A,[s(r(m),{label:o.$t("ui.confirmationModal.buttonLabel.delete"),severity:"danger",onClick:e[4]||(e[4]=i=>b.value=!0)},null,8,["label"])]),e[22]||(e[22]=n()),b.value?(v(),c(r($),{key:0,"accept-button-options":{label:o.$t("ui.confirmationModal.buttonLabel.delete"),severity:"danger"},"cancel-button-options":{label:o.$t("ui.confirmationModal.buttonLabel.cancel")},header:o.$t("ui.confirmationModal.headerContent.deleteUser"),message:o.$t("ui.confirmationModal.bodyContent.confirmDelete"),"onOn:close":e[5]||(e[5]=i=>b.value=!1),"onOn:confirm":e[6]||(e[6]=i=>b.value=!1)},null,8,["accept-button-options","cancel-button-options","header","message"])):y("",!0),e[23]||(e[23]=n()),s(C,{language:"html-vue"},{default:a(()=>e[21]||(e[21]=[n(`
          <template>
            <ButtonElement
              label="Delete"
              severity="danger"
              @click="showModal = true"
            />

            <span>{{ currentTime }}</span>
  
            <ConfirmationModal
              v-if="showModal"
              :accept-button-options="{
                label: 'Delete',
                severity: 'danger',
              }"
              :cancel-button-options="{
                label: 'Cancel',
              }"
              header="Delete user"
              message="Are you sure to delete user?"
              @on:close="showModal = false"
              @on:confirm="showModal = false"
            />
          </template>
  
          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";

            const showModal = ref(false);
          <\/script>
        `)])),_:1})])]),e[44]||(e[44]=n()),t("section",null,[t("h2",null,u(o.$t("ui.confirmationModal.usage.slots")),1),e[34]||(e[34]=n()),t("div",N,[t("div",V,[s(r(m),{label:o.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:e[7]||(e[7]=i=>d.value=!0)},null,8,["label"])]),e[32]||(e[32]=n()),d.value?(v(),c(r($),{key:0,"dismiss-on-click-out":!1,"onOn:close":e[11]||(e[11]=i=>d.value=!1)},{header:a(()=>[t("span",null,u(o.$t("ui.confirmationModal.headerContent.confirm")),1)]),closeIcon:a(()=>[t("i",{class:"close-icon pi pi-times-circle",onClick:e[8]||(e[8]=i=>d.value=!1)})]),icon:a(()=>e[25]||(e[25]=[t("i",{class:"pi pi-exclamation-circle"},null,-1)])),message:a(()=>[t("p",null,u(o.$t("ui.confirmationModal.bodyContent.confirm")),1)]),footer:a(()=>[s(r(m),{size:"small",label:o.$t("ui.confirmationModal.buttonLabel.cancel"),severity:"secondary",onClick:e[9]||(e[9]=i=>d.value=!1)},null,8,["label"]),e[26]||(e[26]=n()),s(r(m),{size:"small",label:o.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:e[10]||(e[10]=i=>d.value=!1)},null,8,["label"])]),_:1})):y("",!0),e[33]||(e[33]=n()),s(C,{language:"html-vue"},{default:a(()=>e[31]||(e[31]=[n(`
          <template>
            <ButtonElement
              label="Confirm"
              severity="success"
              @click="showModal = true"
            />

            <ConfirmationModal
              v-if="showModal"
              :dismiss-on-click-out="false"
              @on:close="showModal = false"
            >
              <template #header>
                <span>Confirmation required</span>
              </template>

              <template #closeIcon>
                <i
                  class="close-icon pi pi-times-circle"
                  @click="showModal = false"
                />
              </template>

              <template #icon>
                <i class="pi pi-exclamation-circle" />
              </template>

              <template #message>
                <p>Are you sure you want to proceed?</p>
              </template>

              <template #footer>
                <ButtonElement
                  label="Cancel"
                  severity="secondary"
                  @click="showModal = false"
                />
                <ButtonElement
                  label="Confirm"
                  severity="success"
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
        `)])),_:1})])]),e[45]||(e[45]=n()),t("section",null,[t("h2",null,u(o.$t("ui.confirmationModal.usage.withI18n")),1),e[41]||(e[41]=n()),t("div",U,[t("div",q,[s(r(m),{label:o.$t("ui.confirmationModal.buttonLabel.delete"),severity:"danger",onClick:e[12]||(e[12]=i=>p.value=!0)},null,8,["label"])]),e[39]||(e[39]=n()),p.value?(v(),c(r($),{key:0,"onOn:close":e[15]||(e[15]=i=>p.value=!1)},{header:a(()=>[t("span",null,u(o.$t("ui.confirmationModal.headerContent.deleteUser")),1)]),message:a(()=>[t("p",null,u(o.$t("ui.confirmationModal.bodyContent.confirmDelete")),1)]),footer:a(()=>[s(r(m),{size:"small",label:o.$t("ui.confirmationModal.buttonLabel.cancel"),severity:"secondary",onClick:e[13]||(e[13]=i=>p.value=!1)},null,8,["label"]),e[35]||(e[35]=n()),s(r(m),{size:"small",label:o.$t("ui.confirmationModal.buttonLabel.delete"),severity:"danger",onClick:e[14]||(e[14]=i=>p.value=!1)},null,8,["label"])]),_:1})):y("",!0),e[40]||(e[40]=n()),s(C,{language:"html-vue"},{default:a(()=>e[38]||(e[38]=[n(`
          <template>
            <ButtonElement
              :label="t('ui.confirmationModal.buttonLabel.delete')"
              severity="danger"
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

              <template #message>
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
        `)])),_:1})])]),e[46]||(e[46]=n()),s(E,{"events-data":w,"props-data":k,"props-table-title":o.$t("common.properties",{value:"ConfirmationModalProperties"}),"slots-data":D},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}});export{Q as default};

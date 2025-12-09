import{d as g,L as b,e as m,o as f,j as a,C as t,f as n,h as o,t as r,u as i,a2 as s,v,_ as y}from"./index-STrZF6Wn.js";import{_ as B}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-Dl_YUsvn.js";import{_ as C}from"./UiPage.vue_vue_type_style_index_0_lang-DcWhYAEI.js";import"./PrefabsTechVue3TanstackTable.es-BN3dqrFI.js";import"./PrefabsTechVue3Form.es-DV1FRZxy.js";const $={class:"section-content"},k={class:"section-content"},w={class:"section-content"},I={class:"section-content"},L={class:"container"},S={class:"section-content"},P={class:"container"},R={class:"section-content"},D={class:"container"},U={class:"section-content"},A={class:"container"},N={class:"section-content"},V={class:"container"},T=g({__name:"Index",setup(W){const d=[{default:"-",description:"Icon class to show on the left side (e.g. `pi pi-check`).",prop:"iconLeft",type:"String"},{default:"-",description:"Icon class to show on the right side (e.g. `fa fa-lock`).",prop:"iconRight",type:"String"},{default:"-",description:"The text label to be displayed inside the badge.",prop:"label",type:"String"},{default:"false",description:"Applies rounded styling to the badge (pill shape).",prop:"rounded",type:"Boolean"},{default:'"primary"',description:"Severity level for styling.",prop:"severity",type:'"primary" | "secondary" | "alternate" | "success" | "danger" | "warning"'}],u=[{description:"Used to insert a custom icon element on the left side of the label.",name:"iconLeft"},{description:"Used to insert a custom icon element on the right side of the label.",name:"iconRight"}];return(l,e)=>{const p=b("SshPre");return f(),m(C,{"sub-title":l.$t("ui.badge.subtitle"),title:l.$t("ui.badge.title"),class:"demo-badge"},{toolbar:a(()=>[o(i(v),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=j=>l.$router.push("/ui"))},null,8,["label"])]),default:a(()=>[e[36]||(e[36]=t()),n("section",null,[n("h2",null,r(l.$t("ui.badge.usage.basic")),1),e[3]||(e[3]=t()),n("div",$,[o(i(s),{label:l.$t("ui.badge.label.basic")},null,8,["label"]),e[2]||(e[2]=t()),o(p,{language:"html-vue"},{default:a(()=>e[1]||(e[1]=[t(`
          <template>
            <BadgeComponent label="Basic" /> 
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[37]||(e[37]=t()),n("section",null,[n("h2",null,r(l.$t("ui.badge.usage.withI18n")),1),e[6]||(e[6]=t()),n("div",k,[o(i(s),{label:l.$t("ui.badge.label.addedIn")},null,8,["label"]),e[5]||(e[5]=t()),o(p,{language:"html-vue"},{default:a(()=>e[4]||(e[4]=[t(`
          <template>
            <BadgeComponent :label="t('ui.badge.label.addedIn')" /> 
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),e[38]||(e[38]=t()),n("section",null,[n("h2",null,r(l.$t("ui.badge.usage.rounded")),1),e[9]||(e[9]=t()),n("div",w,[o(i(s),{label:l.$t("ui.badge.label.rounded"),rounded:""},null,8,["label"]),e[8]||(e[8]=t()),o(p,{language:"html-vue"},{default:a(()=>e[7]||(e[7]=[t(`
          <template>
            <BadgeComponent label="Rounded" rounded /> 
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[39]||(e[39]=t()),n("section",null,[n("h2",null,r(l.$t("ui.badge.usage.severity")),1),e[17]||(e[17]=t()),n("div",I,[n("div",L,[o(i(s),{label:l.$t("ui.badge.label.primary"),severity:"primary"},null,8,["label"]),e[10]||(e[10]=t()),o(i(s),{label:l.$t("ui.badge.label.secondary"),severity:"secondary"},null,8,["label"]),e[11]||(e[11]=t()),o(i(s),{label:l.$t("ui.badge.label.alternate"),severity:"alternate"},null,8,["label"]),e[12]||(e[12]=t()),o(i(s),{label:l.$t("ui.badge.label.success"),severity:"success"},null,8,["label"]),e[13]||(e[13]=t()),o(i(s),{label:l.$t("ui.badge.label.danger"),severity:"danger"},null,8,["label"]),e[14]||(e[14]=t()),o(i(s),{label:l.$t("ui.badge.label.warning"),severity:"warning"},null,8,["label"])]),e[16]||(e[16]=t()),o(p,{language:"html-vue"},{default:a(()=>e[15]||(e[15]=[t(`
          <template>
            <BadgeComponent label="Primary" severity="primary" />
            <BadgeComponent label="Secondary" severity="secondary" />
            <BadgeComponent label="Alternate" severity="alternate" />
            <BadgeComponent label="Success" severity="success" />
            <BadgeComponent label="Danger" severity="danger" />
            <BadgeComponent label="Warning" severity="warning" />
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[40]||(e[40]=t()),n("section",null,[n("h2",null,r(l.$t("ui.badge.usage.icon")),1),e[21]||(e[21]=t()),n("div",S,[n("div",P,[o(i(s),{"icon-left":"pi pi-thumbs-up"}),e[18]||(e[18]=t()),o(i(s),{"icon-right":"pi pi-thumbs-down"})]),e[20]||(e[20]=t()),o(p,{language:"html-vue"},{default:a(()=>e[19]||(e[19]=[t(`
          <template>
            <BadgeComponent icon-left="pi pi-thumbs-up" />
            <BadgeComponent icon-right="pi pi-thumbs-down" />
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[41]||(e[41]=t()),n("section",null,[n("h2",null,r(l.$t("ui.badge.usage.iconPackage")),1),e[25]||(e[25]=t()),n("div",R,[n("div",D,[o(i(s),{label:l.$t("ui.badge.label.locked"),"icon-left":"pi pi-lock"},null,8,["label"]),e[22]||(e[22]=t()),o(i(s),{label:l.$t("ui.badge.label.unLocked"),"icon-right":"fa-solid fa-lock-open",severity:"success"},null,8,["label"])]),e[24]||(e[24]=t()),o(p,{language:"html-vue"},{default:a(()=>e[23]||(e[23]=[t(`
          <template>
            <BadgeComponent label="Locked" icon-left="pi pi-lock" />
            <BadgeComponent label="Unlocked" icon-right="fa-solid fa-lock-open" severity="success />
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[42]||(e[42]=t()),n("section",null,[n("h2",null,r(l.$t("ui.badge.usage.iconAndLabel")),1),e[29]||(e[29]=t()),n("div",U,[n("div",A,[o(i(s),{label:l.$t("ui.badge.label.locked"),"icon-left":"pi pi-lock"},null,8,["label"]),e[26]||(e[26]=t()),o(i(s),{label:l.$t("ui.badge.label.unLocked"),"icon-right":"pi pi-lock-open",severity:"success"},null,8,["label"])]),e[28]||(e[28]=t()),o(p,{language:"html-vue"},{default:a(()=>e[27]||(e[27]=[t(`
          <template>
            <BadgeComponent label="Locked" icon-left="pi pi-lock" />
            <BadgeComponent label="Unlocked" icon-right="pi pi-lock-open" severity="success />
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[43]||(e[43]=t()),n("section",null,[n("h2",null,r(l.$t("ui.badge.usage.iconElement")),1),e[35]||(e[35]=t()),n("div",N,[n("div",V,[o(i(s),{label:l.$t("ui.badge.label.correct")},{iconLeft:a(()=>e[30]||(e[30]=[n("i",{class:"pi pi-check"},null,-1)])),_:1},8,["label"]),e[32]||(e[32]=t()),o(i(s),{label:l.$t("ui.badge.label.wrong"),severity:"danger"},{iconRight:a(()=>e[31]||(e[31]=[n("i",{class:"pi pi-times"},null,-1)])),_:1},8,["label"])]),e[34]||(e[34]=t()),o(p,{language:"html-vue"},{default:a(()=>e[33]||(e[33]=[t(`
          <template>
            <BadgeComponent label="Correct">
              <template #iconLeft>
                <i class="pi pi-check" >
              </template>
            </BadgeComponent>

            <BadgeComponent label="Wrong" severity="danger">
              <template #iconRight>
                <i class="pi pi-times" >
              </template>
            </BadgeComponent>
          </template>
          
          <script setup lang="ts">
          import { BadgeComponent } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[44]||(e[44]=t()),o(B,{"props-data":d,"props-table-title":l.$t("common.properties",{value:"BadgeProperties"}),"slots-data":u},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}}),G=y(T,[["__scopeId","data-v-3551b0d5"]]);export{G as default};
